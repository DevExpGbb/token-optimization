# Chapter 7: Usage and Billing Visibility

## Core idea

Customers need clear ways to understand monthly AI usage across clients. The exact source of truth depends on the product, plan, identity provider, and whether the usage flows through GitHub, a model provider, a cloud account, or an internal gateway.

Some surfaces expose live context or token signals; others expose only request counts, quota usage, billing summaries, review counts, or indirect quality signals. Teach attendees to map what is measurable for each surface instead of promising one universal dashboard.

## What to show attendees

- Where individual users can see plan, entitlement, and usage indicators.
- Where organization administrators can see aggregate usage and billing.
- How usage differs between IDE extensions, web chat, CLI tools, API keys, and MCP-backed agents.
- Why a single developer may have usage in multiple systems.
- How to pair cost signals with quality signals such as retries, false-positive reviews, PR churn, or time-to-merge.

## Common places to check

| Client or path | Usage source to inspect |
| --- | --- |
| Copilot CLI | CLI usage/context indicators and any configured traces or product reporting |
| GitHub Copilot in IDEs | GitHub user/org/enterprise Copilot settings, usage metrics, and billing views available for the plan |
| GitHub.com chat or coding agents | GitHub account, organization, or enterprise usage and billing pages |
| Copilot code review | Code review quota, premium request usage, automatic review settings, and review comment quality |
| Model provider API keys | Provider dashboard usage and invoices |
| Azure OpenAI or cloud-hosted models | Cloud cost management, resource metrics, and deployment logs |
| Internal AI gateway | Gateway logs, chargeback reports, and identity mapping |
| Third-party developer tools | Vendor admin console and invoices |

## Monthly usage conversation guide

1. Identify every AI client in use.
2. Map each client to an identity: personal account, org account, service principal, or API key.
3. Map each identity to a billing source.
4. Compare high-usage workflows with business value.
5. Agree on enablement actions before imposing restrictions.

## Customer relationship message

After billing model changes, customers need transparency and practical controls. The best conversation is not "use less AI"; it is "use AI deliberately, measure outcomes, and remove waste."

## Hands-on lab

Create a usage map:

```markdown
Client:
Users:
Authentication path:
Billing source:
Usage dashboard:
Owner:
Optimization action:
```

## Facilitator note

Avoid promising one universal dashboard unless the customer has implemented one. Instead, help them build a reliable map of systems and owners.
