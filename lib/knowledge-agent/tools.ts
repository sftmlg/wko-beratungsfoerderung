import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { glob } from 'glob';

// Knowledge Base path - resolved at runtime
function getKbPath(): string {
  return path.join(process.cwd(), 'knowledge-base');
}

// Domain descriptions for WKO content
const DOMAIN_DESCRIPTIONS: Record<string, string> = {
  wiki: 'Zusammenfassungen: Uebersicht, Foerderbereiche, Prozess, Voraussetzungen, Dokumentation',
  raw: 'Originalrichtlinien: Foerderrichtlinie, Beratungsrichtlinien, Honorarrichtlinien, Ablauf, Checklisten',
};

// Tool definitions for Claude API (Anthropic format)
export const kbTools = [
  {
    name: 'kb_structure',
    description:
      'Gibt die Struktur der Knowledge Base zurueck mit allen Bereichen und deren Beschreibungen. IMMER ZUERST aufrufen um zu verstehen, welche Bereiche existieren.',
    input_schema: {
      type: 'object' as const,
      properties: {},
      required: [],
    },
  },
  {
    name: 'kb_glob',
    description:
      'Findet Dateien basierend auf Glob-Pattern. Nutze dies um relevante Dateien in einem Bereich zu finden.',
    input_schema: {
      type: 'object' as const,
      properties: {
        pattern: {
          type: 'string',
          description: 'Glob pattern, z.B. "wiki/*.md" oder "**/*digital*.md"',
        },
      },
      required: ['pattern'],
    },
  },
  {
    name: 'kb_grep',
    description: 'Durchsucht Dateiinhalte nach Suchbegriff. Gibt Dateinamen und Kontext zurueck.',
    input_schema: {
      type: 'object' as const,
      properties: {
        query: {
          type: 'string',
          description: 'Suchbegriff oder Phrase',
        },
        domain: {
          type: 'string',
          description: 'Optional: Bereich eingrenzen, z.B. "wiki" oder "raw"',
        },
      },
      required: ['query'],
    },
  },
  {
    name: 'kb_read',
    description:
      'Liest den vollstaendigen Inhalt einer Datei. Nutze dies fuer detaillierte Informationen.',
    input_schema: {
      type: 'object' as const,
      properties: {
        filePath: {
          type: 'string',
          description: 'Relativer Pfad zur Datei innerhalb der Knowledge Base',
        },
      },
      required: ['filePath'],
    },
  },
];

// Execute tool and return result
export async function executeKbTool(name: string, input: Record<string, unknown>): Promise<string> {
  console.info('[KB Tool]', name, JSON.stringify(input));

  try {
    switch (name) {
      case 'kb_structure':
        return await getKbStructure();

      case 'kb_glob':
        return await kbGlob(input.pattern as string);

      case 'kb_grep':
        return await kbGrep(input.query as string, input.domain as string | undefined);

      case 'kb_read':
        return await kbRead(input.filePath as string);

      default:
        console.info('[KB Tool] unknown:', name);
        return JSON.stringify({ error: `Unknown tool: ${name}` });
    }
  } catch (error) {
    console.info('[KB Tool] error:', name, String(error));
    return JSON.stringify({ error: String(error) });
  }
}

// Get KB structure
async function getKbStructure(): Promise<string> {
  const kbPath = getKbPath();
  console.info('[KB Structure] scanning:', kbPath);

  const domains: Array<{
    id: string;
    description: string;
    fileCount: number;
    files: string[];
  }> = [];

  for (const [domainId, description] of Object.entries(DOMAIN_DESCRIPTIONS)) {
    const domainPath = path.join(kbPath, domainId);
    try {
      const files = await glob('**/*.md', { cwd: domainPath });
      domains.push({
        id: domainId,
        description,
        fileCount: files.length,
        files,
      });
    } catch {
      domains.push({
        id: domainId,
        description,
        fileCount: 0,
        files: [],
      });
    }
  }

  console.info('[KB Structure] found domains:', domains.length);
  return JSON.stringify({ domains, totalDomains: domains.length }, null, 2);
}

// Glob search
async function kbGlob(pattern: string): Promise<string> {
  const kbPath = getKbPath();
  console.info('[KB Glob] pattern:', pattern);

  // Security: remove path traversal attempts
  const safePattern = pattern.replace(/\.\./g, '');
  const matches = await glob(safePattern, { cwd: kbPath });
  console.info('[KB Glob] matches:', matches.length);

  return JSON.stringify({
    files: matches.slice(0, 50),
    count: matches.length,
    truncated: matches.length > 50,
  });
}

// Content search
async function kbGrep(query: string, domain?: string): Promise<string> {
  const kbPath = getKbPath();
  console.info('[KB Grep] query:', query, 'domain:', domain ?? 'all');

  const searchPath = domain ? path.join(kbPath, domain) : kbPath;
  const pattern = '**/*.md';

  let files: string[];
  try {
    files = await glob(pattern, { cwd: searchPath });
  } catch {
    return JSON.stringify({ matches: [], count: 0, query, error: 'Invalid search path' });
  }

  const matches: Array<{
    file: string;
    line: number;
    context: string;
  }> = [];

  const queryLower = query.toLowerCase();

  for (const file of files) {
    const filePath = path.join(searchPath, file);
    try {
      const content = await readFile(filePath, 'utf-8');
      const lines = content.split('\n');

      for (let i = 0; i < lines.length; i++) {
        if (lines[i].toLowerCase().includes(queryLower)) {
          // Get context: line before, match, line after
          const contextStart = Math.max(0, i - 1);
          const contextEnd = Math.min(lines.length, i + 2);
          const context = lines.slice(contextStart, contextEnd).join('\n');

          matches.push({
            file: domain ? `${domain}/${file}` : file,
            line: i + 1,
            context: context.slice(0, 300),
          });

          if (matches.length >= 20) break;
        }
      }
    } catch {
      // Skip unreadable files
    }

    if (matches.length >= 50) break;
  }

  console.info('[KB Grep] matches found:', matches.length);
  return JSON.stringify({
    matches,
    count: matches.length,
    query,
  });
}

// Read file
async function kbRead(filePath: string): Promise<string> {
  const kbPath = getKbPath();
  console.info('[KB Read] filePath:', filePath);

  // Normalize paths and resolve to absolute
  const normalizedKbPath = path.resolve(kbPath);
  const fullPath = path.resolve(path.join(kbPath, filePath));

  // Security check: ensure path is within KB
  const kbPathWithSep = normalizedKbPath.endsWith(path.sep)
    ? normalizedKbPath
    : normalizedKbPath + path.sep;

  if (!fullPath.startsWith(kbPathWithSep) && fullPath !== normalizedKbPath) {
    console.info('[KB Read] security violation:', fullPath);
    return JSON.stringify({ error: 'Path outside knowledge base' });
  }

  try {
    const content = await readFile(fullPath, 'utf-8');
    const stats = await stat(fullPath);

    console.info('[KB Read] success, bytes:', content.length);

    return JSON.stringify({
      content: content.slice(0, 50000),
      path: filePath,
      sizeBytes: stats.size,
      truncated: content.length > 50000,
    });
  } catch (error) {
    console.info('[KB Read] error:', String(error));
    return JSON.stringify({ error: `File not found: ${filePath}` });
  }
}
