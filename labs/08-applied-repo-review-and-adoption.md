# Lab 08: Applied Repo Review and Adoption

## Concept

The 4-hour track should help customers inspect their own environment safely. The goal is not to expose proprietary code in the room. The goal is to give each participant a structured way to identify context waste, instruction bloat, tool risk, review noise, and measurement gaps.

Use a customer-approved repository or a sandbox fallback. TODO(cody): confirm the standard sandbox organization and fallback repository for GitHub.com hands-on delivery.

## Surface mechanics

Use these resources:

- [`../resources/customer-preflight-checklist.md`](../resources/customer-preflight-checklist.md)
- [`../resources/context-inventory-worksheet.md`](../resources/context-inventory-worksheet.md)
- [`../resources/instruction-diet-worksheet.md`](../resources/instruction-diet-worksheet.md)
- [`../resources/monday-morning-checklist.md`](../resources/monday-morning-checklist.md)

Review areas:

| Area | What to inspect | Common action |
| --- | --- | --- |
| Instructions | Repo, path, prompt, chat mode, agent, and review guidance | Trim, split, or clarify |
| Source of truth | Architecture docs, standards, issue templates, PR templates | Link concise docs instead of copying long guidance |
| Tool and MCP setup | Enabled servers, tool descriptions, read/write access | Remove unused tools and document ownership |
| Surface routing | IDE, CLI, web, coding agent, and review habits | Match surface to task shape |
| Measurement | Usage pages, budgets, evals, PR review counts | Identify baseline and owner |

## Levers

The adoption loop is:

1. Baseline one workflow.
2. Apply one context or routing change.
3. Measure cost and quality signals.
4. Keep the change only if it improves the outcome.
5. Share the pattern with the team.

## Hands-on

Use [`../exercises/08-monday-morning-audit/README.md`](../exercises/08-monday-morning-audit/README.md).

1. Pick one repository or workflow.
2. Complete the context inventory worksheet.
3. Complete the instruction diet worksheet for one instruction file or workflow.
4. Identify three low-risk improvements.
5. Convert the findings into a 30-day adoption plan.

## Checklist

- I can run the audit without exposing sensitive source.
- I can pick a safe fallback repository.
- I can identify three low-risk improvements.
- I can assign owners for measurement and governance.
- I can turn workshop findings into a 30-day plan.

## Sources

- https://docs.github.com/en/copilot/managing-copilot/configuring-and-auditing-content-exclusion
- https://docs.github.com/en/copilot/concepts/context/spaces
- https://docs.github.com/en/copilot/using-github-copilot/coding-agent/about-copilot-coding-agent
- https://docs.github.com/en/copilot/using-github-copilot/code-review/using-copilot-code-review
