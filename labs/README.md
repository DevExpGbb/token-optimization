# Token Optimization and Context Engineering Workshop

Customer-facing source material for practical developer training. The curriculum uses a shared foundation, three use-case tracks, and shared closeout labs so the same concepts can be taught without maintaining separate full curricula.

## Audience

Developers, technical leads, platform engineers, engineering managers, and AI enablement teams who use GitHub Copilot in VS Code/IDEs, GitHub Copilot CLI, GitHub.com, coding agent, or code review.

## Lab tracks

| Learner use case | Run these labs |
| --- | --- |
| VS Code/IDE users | `00`, `01`, `02`, `07`, `08` |
| GitHub Copilot CLI users | `00`, `03`, `04`, `07`, `08` |
| GitHub.com/code review users | `00`, `05`, `06`, `07`, `08` |
| Full cross-surface practitioner | `00` through `08` |

## Labs

| Lab | Track | Title |
| --- | --- | --- |
| [`00`](00-foundations.md) | Shared | Foundations for every Copilot surface |
| [`01`](01-ide-context-and-prompt-flow.md) | VS Code/IDE | Context and prompt flow |
| [`02`](02-ide-instructions-tools-and-mcp.md) | VS Code/IDE | Instructions, tools, and MCP |
| [`03`](03-cli-context-and-tool-output.md) | GHCP CLI | Session context and tool output |
| [`04`](04-cli-agents-tools-and-cost-control.md) | GHCP CLI | Agents, tools, and cost control |
| [`05`](05-github-web-context-and-coding-agent.md) | GitHub.com | Web context and coding agent |
| [`06`](06-github-code-review-and-pr-hygiene.md) | GitHub.com/code review | PR and review hygiene |
| [`07`](07-measurement-billing-and-governance.md) | Shared | Measurement, billing, and governance |
| [`08`](08-applied-repo-review-and-adoption.md) | Shared | Applied repo review and adoption |

See [`MIGRATION.md`](MIGRATION.md) for the map from the previous 13-lab sequence to the consolidated track model.

## Delivery formats

### 1-hour awareness + demo

| Time | Topic |
| --- | --- |
| 0:00-0:05 | Why token optimization and context engineering matter |
| 0:05-0:20 | Lab `00`: shared mental model and five levers |
| 0:20-0:40 | One selected use-case lab: `01`, `03`, or `05` |
| 0:40-0:50 | Lab `07`: measurement and governance overview |
| 0:50-1:00 | Lab `08`: Monday-morning checklist and commitments |

### 1-hour use-case track

| Track | Labs |
| --- | --- |
| VS Code/IDE | `00`, `01`, `02`, `08` |
| GHCP CLI | `00`, `03`, `04`, `08` |
| GitHub.com/code review | `00`, `05`, `06`, `08` |

Use the track-specific labs for the demo and keep measurement as a short facilitator discussion.

### 2-hour practitioner workshop

| Time | Topic |
| --- | --- |
| 0:00-0:15 | Lab `00`: shared foundation |
| 0:15-1:05 | One complete track bundle: IDE, CLI, or GitHub.com/code review |
| 1:05-1:30 | Hands-on exercise for the selected track |
| 1:30-1:45 | Lab `07`: measurement, billing, and governance |
| 1:45-2:00 | Lab `08`: adoption plan |

### 4-hour applied environment review

| Time | Topic |
| --- | --- |
| 0:00-0:15 | Preflight and safety rules |
| 0:15-0:45 | Lab `00`: shared foundation |
| 0:45-1:55 | Labs `01` through `06`: surface rotation or breakout tracks |
| 1:55-2:35 | Track-specific hands-on exercise |
| 2:35-3:10 | Lab `07`: measurement, billing, and governance |
| 3:10-3:50 | Lab `08`: customer or sandbox repo review |
| 3:50-4:00 | Commitments and 30-day adoption plan |

Use the customer preflight checklist and a fallback repository. Do not project proprietary source unless the customer explicitly approves it.

## Student materials

- [`../decks/token-optimization-context-engineering.pptx`](../decks/token-optimization-context-engineering.pptx) - primary workshop delivery deck with embedded speaker notes
- [`../decks/token-optimization-context-engineering.executive.pptx`](../decks/token-optimization-context-engineering.executive.pptx) - executive briefing visual variant
- [`../decks/token-optimization-context-engineering.technical.pptx`](../decks/token-optimization-context-engineering.technical.pptx) - technical deep dive visual variant
- [`../decks/token-optimization-context-engineering.outline.md`](../decks/token-optimization-context-engineering.outline.md) - editable deck source
- [`../resources/copilot-surface-matrix.md`](../resources/copilot-surface-matrix.md) - living surface reference
- [`../templates/README.md`](../templates/README.md) - copy/paste starter customization files
- [`../exercises/README.md`](../exercises/README.md) - track-specific hands-on exercises
- [`../resources/context-inventory-worksheet.md`](../resources/context-inventory-worksheet.md)
- [`../resources/instruction-diet-worksheet.md`](../resources/instruction-diet-worksheet.md)
- [`../resources/customer-preflight-checklist.md`](../resources/customer-preflight-checklist.md)
- [`../resources/monday-morning-checklist.md`](../resources/monday-morning-checklist.md)

## Suggested facilitation style

- Pick one use-case track before the workshop unless the room is explicitly cross-surface.
- Show one bad example, one improved example, and one reusable checklist per topic.
- Keep the tone supportive: the goal is better outcomes, not blaming users for usage.
- Tie every recommendation to quality, security, cost, or developer experience.
- End with a team-level operating model that attendees can reuse.
