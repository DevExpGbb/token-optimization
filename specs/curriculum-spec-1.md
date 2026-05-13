# Token Optimization Curriculum — Extension Spec

**Purpose:** Extend the existing `DevExpGbb/token-optimization` repo (currently CLI-focused) to cover the **VS Code IDE** and **GitHub.com (web)** surfaces of GitHub Copilot. This document is a work brief for GitHub Copilot (coding agent or interactive) to plan and produce the additions in parallel with the companion slide deck.

**Repo:** https://github.com/DevExpGbb/token-optimization
**Owner:** Cody Carlson (codycarlson@microsoft.com), Sr Solution Engineer GBB, Microsoft
**Date:** 2026-05-12

---

## 1. Three Outcome Goals (the north star)

Every artifact added by this work must visibly advance at least one of these. If an addition doesn't, drop it.

### Goal 1 — Readers feel comfortable controlling cost
Audience leaves knowing **what gets metered, where it burns, and which dials they own**, surface by surface. Includes:
- A clear mental model of the **usage-based billing (UBB)** transition that takes effect **June 1, 2026** (announced April 27, 2026 — see `https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/`).
- A unit-economics view: premium-request entitlements today (50 / 300 / 1,500 per month on Free / Pro / Pro+), GitHub AI Credits and per-token metering tomorrow.
- Surface-specific cost drivers (CLI re-send, IDE context attachments, web coding-agent runs).
- Governance: how to make spend visible without becoming the spend police.

### Goal 2 — Apply context-management & context-engineering best practices to existing projects
Audience can walk into their **own repo on Monday** and apply the practices. Includes:
- **Repo-level**: `.github/copilot-instructions.md`, `.instructions.md` path-scoped rules, `.prompt.md` files, `.agent.md` custom agents, `.chatmode.md` custom chat modes.
- **Workspace-level**: `.vscode/mcp.json` (per-repo MCP) vs user-profile MCP, attachment hygiene (`#file`, `#selection`, `#codebase`, drag-and-drop pinned context).
- **Mode-level**: Ask vs Edit vs Agent vs Plan — when each is the cheap right tool.
- **Org-level**: Copilot Spaces for curated cross-repo knowledge (replaced Knowledge Bases on Sept 12, 2025 — `https://docs.github.com/en/copilot/concepts/context/spaces`).

### Goal 3 — Practical, hands-on demo and takeaway exercises
Every chapter ends with something the reader **does**, not just reads. Includes:
- A `templates/` directory in the repo with copy-paste starter files for instructions, prompt files, MCP config, and chat modes.
- Before/after exercises per surface (same task, naive flow vs engineered flow, measure the delta).
- A "Monday morning checklist" the reader can run in <30 minutes against their own repo.

---

## 2. Current Repo State (read-only context for Copilot)

```
/
├── README.md
├── index.html                     # Landing page
├── src/                           # Budgeting web app (interactive demo)
├── labs/                          # Track-based curriculum labs
│   ├── README.md                  # 1h / 2h / 4h delivery outlines
│   ├── 00-foundations.md
│   ├── 01-...                     # through 08
│   ├── 08-applied-repo-review-and-adoption.md
│   └── MIGRATION.md
├── .github/workflows/             # Pages deploy, etc.
└── (deck lives separately, this spec covers what's in-repo)
```

PR #5 ("Add context engineering curriculum tracks") is already iterating on the labs structure. Do not append another long sequence of surface-specific labs. Consolidate the existing and proposed topics into a smaller concept-driven spine.

---

## 3. Proposed Additions

### 3.1 New top-level directories

```
templates/                          # Copy-paste starters (Goal 3)
├── README.md                       # How to use these in your repo
├── copilot-instructions.md         # Annotated example for .github/
├── instructions/
│   ├── frontend.instructions.md    # applyTo: 'src/web/**'
│   ├── tests.instructions.md       # applyTo: '**/*.spec.ts'
│   └── docs.instructions.md        # applyTo: '**/*.md'
├── prompts/
│   ├── plan-feature.prompt.md
│   ├── review-pr.prompt.md
│   └── triage-issue.prompt.md
├── chatmodes/
│   └── planner.chatmode.md         # Custom Plan-style chat mode
├── agents/
│   └── doc-writer.agent.md         # Example custom agent
└── mcp/
    ├── workspace.mcp.json          # .vscode/mcp.json starter
    └── README.md                   # When workspace vs user profile

exercises/                          # Before/after labs (Goal 3)
├── README.md
├── 01-vscode-context-attachments/
│   ├── README.md                   # Task, baseline, instrumented run
│   ├── naive-transcript.md         # What "no engineering" costs
│   └── engineered-transcript.md    # What hygiene saves
├── 02-vscode-instructions-stack/
├── 03-cli-session-scope/
├── 04-cli-agent-tool-control/
├── 05-github-coding-agent-scope/
├── 06-github-code-review-hygiene/
├── 07-spaces-vs-adhoc-prompts/
└── 08-monday-morning-audit/        # The 30-minute self-audit
```

### 3.2 Use-case lab tracks (maximum 9 total labs)

Use nine labs or fewer total. Do not create nine labs per track. The curriculum should give learners a track that matches their use case while keeping shared concepts in one maintainable system.

The track model:

- **Shared foundation:** everyone starts with the same token optimization and context engineering mental model.
- **Use-case tracks:** learners choose VS Code/IDE, GitHub Copilot CLI, or GitHub.com/code review labs based on how they use Copilot most often.
- **Shared closeout:** everyone returns to measurement, governance, repo review, and adoption.

Each track lab follows the same shape: *Concept -> Surface mechanics -> Levers -> Hands-on -> Checklist*. Similar ideas intentionally repeat across tracks, but the exercises and screenshots should match the learner's surface.

| File | Title | Topics grouped here | Primary hands-on |
|------|-------|---------------------|------------------|
| `labs/00-foundations.md` | Foundations for every Copilot surface | Token mental model, context inputs, quality waste, billing nuance, five levers | Identify context waste in one sample workflow |
| `labs/01-ide-context-and-prompt-flow.md` | VS Code/IDE track: context and prompt flow | Ask/Edit/Agent/Plan, attachments, `#selection`, `#file`, `#codebase`, chat/session boundaries | Rewrite a broad IDE request into a scoped prompt with deliberate attachments |
| `labs/02-ide-instructions-tools-and-mcp.md` | VS Code/IDE track: instructions, tools, and MCP | `.github/copilot-instructions.md`, `.instructions.md`, `.prompt.md`, `.chatmode.md`, workspace MCP, model picker | Split a bloated IDE setup into targeted repo, path, prompt, chat mode, and MCP assets |
| `labs/03-cli-context-and-tool-output.md` | GHCP CLI track: session context and tool output | `/clear`, `/compact`, focused sessions, command output filtering, prompt discipline, context visibility | Turn a noisy CLI troubleshooting session into a focused low-context workflow |
| `labs/04-cli-agents-tools-and-cost-control.md` | GHCP CLI track: agents, tools, and cost control | Subagents, MCP/tool scope, model choice, approvals, usage visibility, durable handoffs | Decide when to do work directly, delegate, or summarize before continuing |
| `labs/05-github-web-context-and-coding-agent.md` | GitHub.com track: web context and coding agent | Repo/issue/PR page context, Copilot Spaces, coding agent issue shape, `copilot/` branches | Convert a vague issue into a scoped coding-agent task with acceptance criteria |
| `labs/06-github-code-review-and-pr-hygiene.md` | GitHub.com/code review track: PR and review hygiene | Small PRs, review instructions, automatic review policy, code review limitations, human gates | Improve a PR description and review-instruction set for higher-signal Copilot review |
| `labs/07-measurement-billing-and-governance.md` | Shared closeout: measurement, billing, and governance | UBB mental model, premium requests, dashboards, budgets, model policies, content exclusion, eval signals | Build a spend and quality visibility checklist without shaming users |
| `labs/08-applied-repo-review-and-adoption.md` | Shared closeout: applied repo review and adoption | Customer environment review, ideal workshop repo, Monday-morning audit, 30-day operating model, next steps | Run the audit and pick three changes to implement |

This replaces the proposed `labs/11` through `labs/18` expansion. The topics remain, but they become three use-case tracks inside a maximum-nine-lab curriculum instead of eight additional standalone chapters.

#### Track bundles

| Learner use case | Run these labs |
| --- | --- |
| VS Code/IDE users | 00, 01, 02, 07, 08 |
| GitHub Copilot CLI users | 00, 03, 04, 07, 08 |
| GitHub.com/code review users | 00, 05, 06, 07, 08 |
| Full cross-surface practitioner | 00 through 08 |

#### Merge map

| Existing/proposed material | Move into |
| --- | --- |
| Current `00` and `01` | `00-foundations.md` |
| Current `04` and `06`, proposed VS Code modes and attachments labs | `01-ide-context-and-prompt-flow.md` |
| Current `02`, proposed VS Code instructions/prompts/chat modes and MCP hygiene labs | `02-ide-instructions-tools-and-mcp.md` |
| Current `03` and CLI parts of current `04`/`06` | `03-cli-context-and-tool-output.md` |
| Current `05`, CLI agents/tools material, and CLI usage visibility | `04-cli-agents-tools-and-cost-control.md` |
| Proposed GitHub.com surface map, proposed Spaces lab, proposed coding agent lab | `05-github-web-context-and-coding-agent.md` |
| Code review parts of current `11`/`12` and proposed PR review material | `06-github-code-review-and-pr-hygiene.md` |
| Current `07`, current `08`, governance parts of current `12`, proposed cross-surface governance | `07-measurement-billing-and-governance.md` |
| Current `09`, `10`, `12`, Monday-morning checklist | `08-applied-repo-review-and-adoption.md` |

Update `labs/README.md` with delivery options that reference the track bundles:

| Track | Use labs |
| --- | --- |
| 1-hour awareness | 00, one selected track lab, 07, 08 |
| 1-hour IDE-focused | 00, 01, 02, 08 |
| 1-hour CLI-focused | 00, 03, 04, 08 |
| 1-hour Web/code-review focused | 00, 05, 06, 08 |
| 2-hour practitioner | 00, one complete track bundle, 07, 08 |
| 4-hour applied review | 00 through 08, with customer/self-review time |

### 3.3 Update existing files

- `README.md` — Add "Tracks" section: CLI / IDE / Web / Full. Link `templates/` and `exercises/`.
- `labs/README.md` — New delivery presets that include the IDE and Web chapters.
- `index.html` — Add cards for IDE and Web tracks alongside the existing CLI material.

---

## 4. Concept-to-Surface Mapping (so chapters stay tight)

This table is the editorial backbone. Each use-case track should cover the same core levers, but the mechanics and exercise should match the track surface. Cross-surface comparison belongs primarily in the shared foundation and closeout labs.

| Concept | CLI (existing) | VS Code IDE (new) | GitHub.com Web (new) |
|---|---|---|---|
| **Primary cost driver** | Re-send of full history each turn | Attachments + agent tool-call sprawl | Coding-agent runs + Spaces queries |
| **Cheap-mode default** | `/explore` for read-only | **Ask mode** for read-only | PR review for narrow scope |
| **Expensive-mode** | `/delegate`, parallel agents | **Agent mode** with broad `#codebase` | Coding agent on vague issues |
| **Context hygiene** | `/clear`, `/compact`, `/context` | New chat, attachment pinning, `#codebase` only when needed | Scoped issue body, narrow Space sources |
| **Persistent rules** | `AGENTS.md`, slash commands | `.github/copilot-instructions.md` + `.instructions.md` | Repo custom instructions (rendered to agent) |
| **Tool/scope control** | Specialist agents, narrow blast radius | Custom **chat modes**, **MCP per workspace** | Coding-agent allowlists, Space sources |
| **Measurement** | OTel exporters, `/usage` | VS Code chat history, token telemetry | Org-level usage dashboards, audit log |
| **Monday-morning win** | Add a `/compact` checkpoint | Add `.github/copilot-instructions.md` | Convert one Slack-thread question into a Space |

---

## 5. Authoring Conventions (so Copilot's output looks like the rest)

- **Voice:** Direct, present tense. Engineer-to-engineer. No "in this section we will…".
- **Length per chapter:** ~600–1200 words. Code blocks count.
- **Each chapter ends with:**
  1. A **5-bullet checklist** the reader can act on today.
  2. A **hands-on exercise** that links to `exercises/<name>/README.md`.
  3. A **sources** section with full URLs (no shortened links).
- **Code blocks:** Real, runnable. No `<your-repo>` placeholders without a comment showing a concrete example below.
- **Avoid Microsoft-internal references.** This repo is customer-facing; assume an external partner is reading.

---

## 6. Source Material (cite these; don't paraphrase without a link)

Primary sources Copilot should pull from when fleshing out the chapters. Always link the canonical URL in chapter `## Sources` sections.

### Billing & cost model
- `https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/` — UBB announcement, April 27, 2026
- `https://github.com/features/copilot/plans` — Current plan limits (Free 50 / Pro 300 / Pro+ 1,500 premium requests)
- `https://docs.github.com/en/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/about-billing-for-github-copilot` — Premium request mechanics

### VS Code surface
- `https://github.blog/ai-and-ml/github-copilot/copilot-ask-edit-and-agent-modes-what-they-do-and-when-to-use-them/` — Ashley Willis, May 2, 2025 — mode taxonomy
- `https://code.visualstudio.com/docs/copilot/customization/custom-instructions` — `.github/copilot-instructions.md` + `.instructions.md` precedence
- `https://code.visualstudio.com/docs/copilot/customization/prompt-files` — `.prompt.md`
- `https://code.visualstudio.com/docs/copilot/customization/custom-chat-modes` — `.chatmode.md`
- `https://code.visualstudio.com/docs/copilot/customization/mcp-servers` — workspace vs user MCP config
- `https://code.visualstudio.com/docs/copilot/reference/copilot-settings` — model picker, token settings

### GitHub.com surface
- `https://github.blog/changelog/2025-09-25-copilot-coding-agent-is-now-generally-available/` — Coding agent GA, Sept 25, 2025
- `https://docs.github.com/en/copilot/using-github-copilot/coding-agent/about-copilot-coding-agent` — Mechanics, sandboxing, `copilot/` branches
- `https://github.blog/changelog/2025-05-29-introducing-copilot-spaces-a-new-way-to-work-with-code-and-context/` — Spaces launch
- `https://docs.github.com/en/copilot/concepts/context/spaces` — Spaces concept
- `https://github.blog/changelog/2025-09-12-knowledge-bases-are-being-replaced-by-spaces/` — KB → Spaces migration

### Context engineering background
- Existing consolidated `labs/` in this repo — re-use the framing already established for CLI, IDE, and GitHub.com/code review tracks.
- Anthropic's "context engineering" essay (link from existing labs) — concept anchor.

---

## 7. Definition of Done

A reader who finishes the IDE track can:
- Explain to a teammate when Ask mode is the cheap right tool vs when Agent mode is worth the cost.
- Add a `.github/copilot-instructions.md` to a real repo and demonstrate it changing Copilot's behavior.
- Configure `.vscode/mcp.json` with one MCP server scoped to that repo.
- Point at their VS Code chat history and identify which sessions burned the most context.

A reader who finishes the Web track can:
- File an issue scoped tightly enough for the coding agent to ship a PR without escalation.
- Create a Space from 3 repos + a design doc and ask a cross-cutting question.
- Read their org's Copilot usage dashboard and identify the top-3 cost-driving users/repos.

A reader who finishes the full curriculum can:
- Walk through the **same task** on all three surfaces, predict the cost shape of each, and explain the tradeoff.
- Run the Monday-morning audit on their team's primary repo and produce a list of three concrete changes.

---

## 8. Open Questions for the Repo Owner

Resolved for this implementation:

1. Extend the budgeting web app with a per-surface estimator that uses user-supplied rates.
2. Renumber into the nine-lab track architecture and provide a migration map.
3. Use generic sandbox-safe GitHub.com exercises with `TODO(cody)` notes for the final demo org.
4. Treat templates as MIT-licensed under the repository `LICENSE`.

---

## 9. Sequencing Suggestion for the Coding Agent

If working in parallel issues/PRs:

1. **PR A — Templates** (`templates/`): Lowest risk, highest reuse. Ship first.
2. **PR B — Lab consolidation** (`labs/00-08`): Collapse the current/proposed chapter list into the nine-lab track architecture. Ship second.
3. **PR C — Exercises** (`exercises/`): Wire before/after exercises to the consolidated labs once chapter boundaries are stable.
4. **PR D — Top-level glue** (`README.md`, `labs/README.md`, `index.html`, deck links): Touch after A-C settle.

Coordinate with PR #5 — if its scope overlaps any of the above, fold this work into that PR rather than opening parallel branches.
