# Lab 07: Measurement, Billing, and Governance

## Concept

Optimization is not complete until a team can see whether the change helped. Some surfaces expose token or context signals. Others expose request counts, billing summaries, review counts, dashboard data, or indirect quality signals. Teach teams to build a map of evidence instead of promising one universal dashboard.

## Surface mechanics

Common signals:

| Surface or client | Signals to inspect |
| --- | --- |
| GHCP CLI | Usage/context indicators, trace output, repeated tool calls |
| VS Code/IDE | Chat history, mode choice, retries, plan vs agent usage |
| GitHub.com/coding agent | Generated PR size, issue quality, review cycles, billing pages |
| Code review | Review quota, false positives, repeated comments, PR churn |
| Model provider or gateway | Token counts, latency, cost, identity mapping |
| GitHub billing | Premium requests, AI credits, budgets, alerts, policy settings |

Do not shame high-usage users. Pair usage with business value and quality. A power user building high-value automation may be using Copilot well; a low-usage workflow with many retries may still need improvement.

## Levers

| Lever | Measurement habit |
| --- | --- |
| Context hygiene | Compare context size, retries, and stale-history incidents |
| Prompt discipline | Compare before/after task completion and rework |
| Model and surface routing | Track when stronger models reduce total retries |
| Scope and tool control | Watch unnecessary tool calls and broad file reads |
| Measurement | Set a baseline before making policy changes |

## Hands-on

Use [`../exercises/07-spaces-vs-adhoc-prompts/README.md`](../exercises/07-spaces-vs-adhoc-prompts/README.md) for curated-context measurement, or use the sample app calculator for per-surface scenarios.

1. List every AI client the team uses.
2. Map each client to identity, owner, billing source, and dashboard.
3. Pick one high-value workflow.
4. Define one cost signal and one quality signal.
5. Decide what action would be taken if the signal changes.

## Checklist

- I can map Copilot usage to an owner and dashboard.
- I can avoid unsupported billing claims.
- I can pair cost signals with quality signals.
- I can explain budgets without becoming the spend police.
- I can decide what to measure before changing defaults.

## Sources

- https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/
- https://github.com/features/copilot/plans
- https://docs.github.com/en/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/about-billing-for-github-copilot
- https://docs.github.com/en/billing/how-tos/set-up-budgets
- https://docs.github.com/en/copilot/managing-copilot/configuring-and-auditing-content-exclusion
