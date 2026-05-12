# Chapter 12: Customer Environment Review

## Core idea

The 4-hour track should help customers inspect their own environment safely. The goal is not to expose proprietary code in the room. The goal is to give each participant a structured way to identify context waste, instruction bloat, tool risk, and measurement gaps.

Use these resources:

- [`../resources/customer-preflight-checklist.md`](../resources/customer-preflight-checklist.md)
- [`../resources/context-inventory-worksheet.md`](../resources/context-inventory-worksheet.md)
- [`../resources/instruction-diet-worksheet.md`](../resources/instruction-diet-worksheet.md)
- [`../resources/monday-morning-checklist.md`](../resources/monday-morning-checklist.md)

## Preflight requirements

Before a customer environment review, confirm:

1. Participants have permission to inspect the selected repositories.
2. A safe demo or sandbox repository is available.
3. No secrets, proprietary data, or sensitive customer information will be projected.
4. The relevant Copilot features are enabled for the users in the room.
5. Someone can answer policy questions about content exclusion, model access, code review, and billing visibility.
6. A public fallback repository is ready if the customer environment cannot be used.

## Review areas

| Area | What to inspect | Common action |
| --- | --- | --- |
| Repository instructions | `.github/copilot-instructions.md`, path-specific instructions, agent files | Trim, split, or clarify |
| Prompt and workflow assets | Prompt files, skills, agent definitions, runbooks | Move repeated asks into reusable assets |
| Source of truth | Architecture docs, standards, issue templates, PR templates | Link concise docs instead of copying long guidance |
| Tool and MCP setup | Enabled tools, server descriptions, read/write access | Remove unused tools and document ownership |
| Code review setup | Auto-review policy, instruction length, PR size, excluded paths | Reduce review noise and quota drain |
| Model and routing policy | Defaults, premium model access, escalation rules | Match model tier to task complexity |
| Measurement | CLI usage, billing pages, dashboards, PR review counts, evals | Identify baseline and owner |

## Lab flow

1. Pick one repository or workflow.
2. Complete the context inventory worksheet individually.
3. Complete the instruction diet worksheet for one instruction file or workflow.
4. Identify three low-risk improvements.
5. Share anonymized findings with the group.
6. Convert the findings into a 30-day adoption plan.

## Safety rules

- Do not share screen while viewing proprietary source unless the customer explicitly approves it.
- Do not paste secrets, internal incident details, customer data, or non-public strategy into chat.
- Do not enable new tools or auto-review policies during the workshop without an owner present.
- Use anonymized examples for group discussion.

## Facilitator notes

- Expect some attendees to use the fallback repo.
- Keep the review practical. The output should be a prioritized list, not a complete governance program.
- Separate individual developer habits from admin-controlled settings.
