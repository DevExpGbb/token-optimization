# Token Optimization and Context Engineering Workshop

Customer-facing source material for a practical developer training session. The workshop can be delivered as a 1-hour awareness session, 2-hour practitioner workshop, or 4-hour applied environment review.

## Audience

Developers, technical leads, platform engineers, engineering managers, and AI enablement teams who use AI coding assistants, chat clients, MCP servers, or agentic development tools.

## Outcomes

Attendees will learn how to:

- Reduce unnecessary context and token usage without reducing quality.
- Choose the right model, tool, and session strategy for a task.
- Manage instructions, customizations, memory, and chat history deliberately.
- Apply context engineering across Copilot CLI, VS Code, GitHub.com, coding/cloud agent, and code review workflows.
- Evaluate whether workflow changes improve quality, speed, and cost.
- Locate monthly usage and billing signals across common AI clients.
- Apply these practices to future work projects.

## Prerequisites

- A GitHub account and access to an AI coding/chat tool.
- A small sample repository with issues, tests, documentation, and a few realistic defects.
- Optional: access to organization billing, Copilot usage, cloud AI usage, or model provider dashboards.
- Microsoft Waza and the Chat Customizations Evaluations extensions for VS Code for the Chapter 8 eval lab.

## Delivery formats

### 1-hour version: awareness + demo

| Time | Topic |
| --- | --- |
| 0:00-0:05 | Why token optimization and context engineering matter |
| 0:05-0:15 | Mental model: context inputs, token waste, and quality waste |
| 0:15-0:25 | Five levers across Copilot surfaces |
| 0:25-0:40 | Demo: instruction diet or prompt/context refactor |
| 0:40-0:50 | Measurement and governance overview |
| 0:50-1:00 | Monday-morning checklist and team commitments |

Recommended chapters: 00, 01, 02, 05, 07, 10, 11.

### 2-hour version: practitioner workshop

| Time | Topic |
| --- | --- |
| 0:00-0:10 | Goals, surfaces, and customer trust |
| 0:10-0:30 | Context engineering fundamentals |
| 0:30-0:55 | Lab: context inventory and prompt refactor |
| 0:55-1:15 | Instructions, prompts, skills, agents, and MCP hygiene |
| 1:15-1:35 | Lab: instruction diet or lean workflow design |
| 1:35-1:50 | Model/surface routing and code review hygiene |
| 1:50-2:00 | Measurement, next steps, and commitments |

Recommended chapters: 00 through 08, 10, and 11. Code review can be a short demo or stretch exercise.

### 4-hour version: applied customer environment review

| Time | Topic |
| --- | --- |
| 0:00-0:15 | Preflight, safety rules, and workshop framing |
| 0:15-0:45 | Token optimization and context engineering fundamentals |
| 0:45-1:20 | Lab: context inventory on sample or customer repo |
| 1:20-1:55 | Lab: instruction diet and reusable primitives |
| 1:55-2:25 | Surface routing: CLI, VS Code, GitHub.com, coding agent, and code review |
| 2:25-3:00 | Customer self-review: tools, MCP, code review, model policies |
| 3:00-3:30 | Measurement and governance review |
| 3:30-3:50 | Anonymized findings and team operating model |
| 3:50-4:00 | Commitments and 30-day adoption plan |

Recommended chapters: all chapters. Use the customer preflight checklist and fallback repository.

## Student materials

- [`../decks/token-optimization-context-engineering.pptx`](../decks/token-optimization-context-engineering.pptx) - primary workshop delivery deck with embedded speaker notes
- [`../decks/token-optimization-context-engineering.executive.pptx`](../decks/token-optimization-context-engineering.executive.pptx) - executive briefing visual variant
- [`../decks/token-optimization-context-engineering.technical.pptx`](../decks/token-optimization-context-engineering.technical.pptx) - technical deep dive visual variant
- [`../decks/token-optimization-context-engineering.outline.md`](../decks/token-optimization-context-engineering.outline.md) - editable deck source
- [`../resources/copilot-surface-matrix.md`](../resources/copilot-surface-matrix.md) - living surface reference
- [`../resources/context-inventory-worksheet.md`](../resources/context-inventory-worksheet.md)
- [`../resources/instruction-diet-worksheet.md`](../resources/instruction-diet-worksheet.md)
- [`../resources/customer-preflight-checklist.md`](../resources/customer-preflight-checklist.md)
- [`../resources/monday-morning-checklist.md`](../resources/monday-morning-checklist.md)

## Suggested facilitation style

- Show one bad example, one improved example, and one reusable checklist per topic.
- Keep the tone supportive: the goal is better outcomes, not blaming users for usage.
- Tie every recommendation to quality, security, cost, or developer experience.
- End with a team-level operating model that attendees can reuse.
