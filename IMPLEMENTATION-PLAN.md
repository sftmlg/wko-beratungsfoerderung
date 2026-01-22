# WKO Beratungsförderung Chatbot - Implementation Plan

## Project Overview

**Name**: WKO Beratungsförderung Chatbot
**Brand**: KI für KMU (exact same branding as kiautomatisierung.info)
**Purpose**: AI-powered chatbot to answer questions about WKO/VEKA funding procedures
**Location**: Sibling repository of landingpage-nextjs

## Requirements Summary (from User Prompt)

### Functional Requirements
- [ ] Chatbot answering WKO/VEKA Förderung questions
- [ ] Article-based/file-based search system (like real estate platform)
- [ ] All existing WKO content integrated
- [ ] Streaming responses with visible reasoning

### Technical Requirements
- [ ] Next.js 16+ (match landingpage-nextjs stack)
- [ ] Same authentication pattern as real estate platform (email whitelist + Supabase)
- [ ] Claude tools for knowledge search (kb_structure, kb_glob, kb_grep, kb_read)
- [ ] SSE streaming for chat responses

### Branding Requirements
- [ ] Exact KI4KMU branding (colors, fonts, logo)
- [ ] Primary: #0f172a (Navy), Secondary: #f97316 (Orange)
- [ ] Font: Inter (Google Fonts)
- [ ] Logo: Same as landing page
- [ ] German language DACH market tone

### Verification
- [ ] Playwright MCP testing for functionality
- [ ] Cross-validation with agents

---

## Architecture (Inspired by Real Estate Platform)

```
wko-chatbot/
├── app/                        # Next.js App Router
│   ├── api/
│   │   ├── chat/              # SSE streaming chat endpoint
│   │   └── health/            # Health check
│   ├── auth/
│   │   └── callback/          # Auth callback
│   ├── login/                 # Login page
│   ├── layout.tsx             # Root layout with branding
│   ├── page.tsx               # Landing/hero page
│   └── chat/
│       └── page.tsx           # Chat interface
├── components/
│   ├── Header.tsx             # Navigation (from landing page)
│   ├── Footer.tsx             # Footer (from landing page)
│   ├── ChatInterface.tsx      # Main chat UI
│   ├── MessageBubble.tsx      # Chat message display
│   └── ThinkingIndicator.tsx  # Show reasoning process
├── lib/
│   ├── knowledge-agent/
│   │   ├── tools.ts           # kb_structure, kb_glob, kb_grep, kb_read
│   │   └── prompts.ts         # German system prompt for WKO
│   ├── supabase/
│   │   ├── client.ts          # Supabase client
│   │   └── middleware.ts      # Auth middleware
│   └── auth/
│       └── config.ts          # Email whitelist
├── knowledge-base/            # WKO content (symlink or copy)
│   ├── wiki/                  # Synthesized summaries
│   └── raw/                   # Original documents
├── public/
│   ├── logo.png               # KI4KMU logo
│   └── images/                # Branding assets
├── tailwind.config.ts
├── package.json
└── .env.local
```

---

## Content Integration

### Source Content (Already Exists)
`/lead-generation/procedures/wko-beratungsfoerderung/`

| File | Purpose |
|------|---------|
| `wiki/00-overview.md` | Quick reference (50%/80% rates, validity dates) |
| `wiki/01-funding-areas.md` | 6 funding categories (2.1-2.6) |
| `wiki/02-process.md` | 9-step procedure |
| `wiki/03-requirements.md` | Client & consultant eligibility |
| `wiki/04-deliverables.md` | Report structure & templates |
| `1 Richtlinie*.md` | Official guidelines |
| `3 Richtlinien für Beratungsaufträge*.md` | Consulting conduct rules |
| `4 Honorarrichtlinien*.md` | Fee structure |
| `5 Beratungsablauf*.md` | Detailed workflow |
| `Checkliste_Digitalisierung*.md` | Digitalisierung deliverables |

### Content Copy Strategy
- Copy all wiki/ content to `knowledge-base/wiki/`
- Copy key raw documents to `knowledge-base/raw/`
- Maintain markdown format for kb tools

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16.1 (App Router) |
| Runtime | React 19 |
| Styling | Tailwind CSS 4.0 |
| Auth | Supabase Auth (email whitelist) |
| AI | Anthropic SDK (Claude claude-sonnet-4-20250514) |
| Icons | Lucide React |
| Markdown | react-markdown |

---

## Implementation Phases

### Phase 1: Project Setup (Agent: code-architect)
- [x] Create directory structure
- [ ] Initialize Next.js project
- [ ] Copy branding assets from landingpage-nextjs
- [ ] Configure Tailwind with KI4KMU theme
- [ ] Set up Supabase client

### Phase 2: Knowledge System (Agent: backend-architect)
- [ ] Copy WKO content to knowledge-base/
- [ ] Implement kb tools (structure, glob, grep, read)
- [ ] Create German system prompt for WKO domain
- [ ] Build streaming chat API endpoint

### Phase 3: Frontend (Agent: frontend-architect + frontend-design skill)
- [ ] Create Header/Footer from landing page
- [ ] Build ChatInterface component
- [ ] Implement message streaming UI
- [ ] Add thinking/reasoning display
- [ ] Responsive design (mobile-first)

### Phase 4: Authentication (Agent: security-engineer)
- [ ] Configure Supabase Auth
- [ ] Implement email whitelist
- [ ] Create login page with KI4KMU branding
- [ ] Add middleware protection

### Phase 5: Verification (Playwright MCP)
- [ ] Test login flow
- [ ] Test chat functionality
- [ ] Verify knowledge retrieval
- [ ] Check responsive design
- [ ] Validate branding consistency

---

## Branding Reference

### Colors
```css
--color-primary: #0f172a;   /* Navy - headers, footer, text */
--color-secondary: #f97316; /* Orange - CTAs, highlights */
--background: #ffffff;
--foreground: #171717;
```

### Typography
```css
font-family: 'Inter', sans-serif;
/* Weights: 300 (light), 400 (regular), 600 (semibold), 700 (bold) */
```

### Button Styles
- Primary: `bg-secondary hover:bg-orange-600 text-white rounded-full`
- Secondary: `border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full`

### Card Styles
```css
bg-slate-50 hover:bg-white rounded-2xl p-6
border border-slate-100 hover:border-slate-200
hover:shadow-xl transition-all
```

---

## Key Messages (German)

- "WKO Beratungsförderung verstehen"
- "Bis zu 80% Förderung für Digitalisierungsberatung"
- "Alle Infos zu Förderrichtlinien, Prozess und Anforderungen"
- "Fragen Sie den KI-Assistenten"

---

## Agent Orchestration

| Agent | Responsibility |
|-------|---------------|
| code-architect | Project structure, build config |
| backend-architect | API routes, knowledge tools, streaming |
| frontend-architect | React components, chat UI |
| frontend-design skill | Branding, styling, visual polish |
| security-engineer | Auth flow, middleware, whitelist |
| quality-engineer | Testing, verification |
| Playwright MCP | E2E functional testing |

---

## Success Criteria

1. User can login with whitelisted email
2. User can ask questions about WKO funding
3. Chatbot retrieves relevant content from knowledge base
4. Responses stream with visible reasoning
5. Branding matches KI4KMU exactly
6. Mobile responsive design
7. All existing WKO content accessible

---

## Notes

- Sibling of landingpage-nextjs (same parent: projects/ai-for-kmu/)
- Can share components via symlinks if needed
- Static deployment possible (Vercel)
- No vector DB needed - file-based search is sufficient
