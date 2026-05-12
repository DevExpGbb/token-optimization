# Chapter 0: Token Optimization and Context Engineering

## Core idea

Token optimization and context engineering are the same discipline with two scoreboards: cost and quality. The goal is to send the right context, in the right shape, through the right Copilot surface, for the current task.

Context engineering is not "add more background." It is the practice of curating, structuring, routing, and measuring the information an AI system uses.

## Mental model

Every Copilot workflow has context inputs:

- System and product instructions
- Repository, organization, personal, and path-specific instructions
- Conversation history
- Files, selections, issues, pull requests, and tool output
- Retrieved docs, web pages, MCP results, and generated summaries
- The current user request
- The model response

Some products and models may use caching or product-specific accounting, so "the entire context is billed every turn" is a useful mental model, not a universal invoice formula. The durable lesson is still true: irrelevant context increases cost, latency, and confusion.

## The five levers

| Lever | Token optimization lens | Context engineering lens |
| --- | --- | --- |
| Context hygiene | Reduce stale or irrelevant tokens | Curate only decision-making context |
| Prompt discipline | Avoid broad asks that trigger large reads | Structure requests with goals, constraints, examples, and validation gates |
| Model selection | Use the cheapest model that reliably finishes | Route tasks to the right model, surface, or agent |
| Scope and tool control | Limit file, tool, and MCP blast radius | Use targeted instructions, retrieval, and tool boundaries |
| Measurement | Find where tokens and requests are spent | Track quality, retries, review noise, and context waste |

## Context engineering practices

1. **Curate**: Decide what context belongs in the current task.
2. **Scope**: Keep broad guidance out of narrow workflows.
3. **Structure**: Use Markdown headings, bullets, examples, and explicit success criteria.
4. **Route**: Choose the best Copilot surface, model, agent, or review flow.
5. **Measure**: Compare cost, quality, latency, retries, and human rework.

## Demo

Start with an overloaded request:

> Review this repository, understand the architecture, fix the login issue, update tests, and tell me what else looks wrong.

Refactor it into a context-engineered request:

> In `src/auth/login.ts`, investigate why Unicode email addresses return 500. Use the failing test output below. Do not inspect unrelated directories. Return a short diagnosis and patch plan before editing.

Discuss what changed:

- Smaller file surface
- Clearer task boundary
- Explicit validation point
- Less chance of irrelevant tool output
- Better quality and lower spend

## Hands-on lab

1. Pick a real or sample task.
2. List every context input you would naturally include.
3. Mark each input as required, useful, stale, redundant, sensitive, or unknown.
4. Rewrite the request with only the required and useful context.
5. Add a validation gate before implementation.

## Facilitator notes

- Avoid making this only a cost conversation. Context bloat also harms quality.
- Use the CLI deck as the reference implementation because CLI exposes context and usage most visibly.
- Be explicit that other surfaces expose different controls and measurement.
