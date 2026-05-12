# Chapter 5: Model Choice

## Core idea

Model choice is a cost-quality-latency decision. Use the smallest model that reliably handles the task, and escalate only when the task requires deeper reasoning, larger context, or higher reliability.

## Suggested routing

| Task | Recommended model style |
| --- | --- |
| Simple rewrite, formatting, naming | Fast/low-cost model |
| Code search explanation | Fast or standard model |
| Localized bug fix | Standard coding model |
| Cross-file architecture change | Stronger reasoning model |
| Security-sensitive review | Stronger reasoning model plus human review |
| Long-context synthesis | Long-context model, but only after trimming inputs |

## Escalation triggers

- The model misses constraints after a clear prompt.
- The task spans many files or systems.
- The answer requires careful tradeoff analysis.
- The cost of a wrong answer is high.
- You need a second opinion for design, security, or migration work.

## Anti-patterns

- Using the most expensive model for every turn.
- Using a tiny model for complex design and then spending more turns correcting it.
- Switching models without summarizing the current state.

## Hands-on lab

1. Pick three tasks: simple, medium, complex.
2. Decide the initial model for each.
3. Define when you would escalate.
4. Record whether the first model was sufficient.

## Facilitator note

The goal is not always the cheapest single request. The goal is the lowest total cost for a correct and useful outcome.
