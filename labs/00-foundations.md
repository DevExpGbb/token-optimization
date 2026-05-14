# Lab 00: Foundations for Every Copilot Surface

## Concept

Token optimization and context engineering are the same discipline with two scoreboards: cost and quality. The goal is not to use less Copilot. The goal is to send the right context, in the right shape, to the right surface, for the current task.

Every Copilot workflow has context inputs:

- Product and system instructions
- Repository, organization, personal, and path-specific instructions
- Conversation history, summaries, and memory
- Files, selections, issues, pull requests, and tool output
- Retrieved docs, web pages, MCP results, and generated plans
- The current user request and the model response

More context is not automatically better. Irrelevant context increases latency, cost exposure, and answer confusion. Some products and models may use caching, summarization, or product-specific accounting, so "repeated context" is a mental model rather than a universal invoice formula. The durable habit is still useful: remove stale context, keep scope clear, and measure outcomes.

Context also accumulates inside a working session. Tool output, terminal logs, file reads, pasted snippets, generated plans, and repeated clarifications can keep shaping later answers after the original subtask is over. When the topic changes, compact, summarize, or restart instead of carrying yesterday's context into today's question.

## Surface mechanics

The same five levers transfer across VS Code, GitHub Copilot CLI, GitHub.com, coding agent, and code review:

| Lever | Cost lens | Quality lens |
| --- | --- | --- |
| Context hygiene | Avoid sending stale or irrelevant tokens | Keep the model focused on the task |
| Prompt discipline | Avoid broad prompts that trigger broad discovery | State outcome, scope, constraints, and validation |
| Model and surface routing | Use the cheapest reliable path | Pick the surface that already has the right context |
| Scope and tool control | Limit tool calls and retrieved content | Reduce noise, risk, and accidental writes |
| Measurement | Find usage, request, and cost signals | Track retries, rework, review noise, and time saved |

## Levers in practice

Start with one task and ask:

1. What outcome do I need?
2. What context is required?
3. What context is merely convenient?
4. Which Copilot surface has the cleanest path?
5. What signal will tell me whether the workflow improved?

For example, "review this repo and fix auth" is too broad. A better starting point is: "In `src/auth/session.ts`, identify why expired sessions are not rejected. Use the failing test output below. Do not inspect unrelated directories. Return a short diagnosis and patch plan before editing."

## Hands-on

Use [`../exercises/08-monday-morning-audit/README.md`](../exercises/08-monday-morning-audit/README.md) if you need a reusable worksheet.

1. Pick one real or sample Copilot task.
2. List every context source you would normally include.
3. Mark each source as required, useful, stale, redundant, sensitive, or unknown.
4. Rewrite the request with only the required and useful context.
5. Decide whether the next step should continue in the same session, use a compacted handoff, or start fresh.
6. Add one validation gate before implementation.

## Checklist

- I can explain why context bloat affects both cost and quality.
- I can name the five token optimization levers.
- I can separate required context from convenient context.
- I can choose a surface based on task shape.
- I can decide when to compact, summarize, or restart.
- I can identify one measurement signal before optimizing.

## Sources

- https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/
- https://docs.github.com/en/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/about-billing-for-github-copilot
- https://code.visualstudio.com/docs/copilot/overview
- https://docs.github.com/en/copilot/concepts/context/spaces
- https://bthomas2622.github.io/copilot-token-optimization/#best-practices
