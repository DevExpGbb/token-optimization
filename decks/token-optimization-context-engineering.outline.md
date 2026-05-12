# Token Optimization and Context Engineering across GitHub Copilot

Source outline for the delivery deck. Keep this file easy to diff; regenerate the `.pptx` delivery artifacts after major edits with `python tools\generate_context_deck.py`.

## Slide 1: Title

- Token Optimization and Context Engineering
- Getting more value from every Copilot interaction
- Across Copilot CLI, VS Code, GitHub.com, coding agent, and code review

## Slide 2: Why this matters now

- Usage models are shifting from simple request counting toward more granular accounting.
- Long conversations, broad tool output, and unnecessary context can affect cost, latency, and quality.
- The durable habit is not "use less Copilot"; it is "send better context."

## Slide 3: Context engineering

- Context engineering means bringing the right information, in the right format, to the model.
- It turns ad hoc prompting into repeatable workflows.
- Core primitives: custom instructions, prompt files, skills, agents, retrieval, and human review gates.

## Slide 4: What counts as context

- Product and system instructions
- Repository, organization, path-specific, personal, and agent guidance
- Conversation history and summaries
- Files, selections, issues, pull requests, and tool results
- Retrieved docs, web pages, MCP output, and generated plans

## Slide 5: Important billing nuance

- "Context is resent" is a useful mental model, not a universal invoice formula.
- Some products and models use caching or product-specific accounting.
- The practical takeaway remains: stale or irrelevant context increases cost, latency, and confusion.

## Slide 6: Where context gets wasted

- Whole directories or large files when one function matters
- Long-running mixed-topic sessions
- Overgrown custom instructions
- Raw logs, build output, generated files, and tool noise
- High-cost models used for routine work
- Auto-review or agent tasks with vague scope

## Slide 7: The five levers

- Context hygiene
- Prompt discipline
- Model and surface selection
- Scope and tool control
- Measurement

## Slide 8: Lever 1 - Context hygiene

- Start fresh when the task changes.
- Summarize before switching focus.
- Keep stable source-of-truth docs short and current.
- Avoid re-discovery loops by preserving useful handoffs.

## Slide 9: Lever 2 - Prompt discipline

- Use Markdown structure.
- State outcome, scope, constraints, and success criteria.
- Reference specific files, issues, PRs, or selections.
- Add validation gates before risky edits.

## Slide 10: Lever 3 - Model and surface selection

- Choose the cheapest model or surface that can reliably finish the job.
- Use VS Code Plan for design, Agent for implementation, Ask for exploration.
- Use CLI when you need visible context/tool control.
- Use code review when the unit of work is a pull request.

## Slide 11: Lever 4 - Scope and tool control

- Keep workspace, repository, and tool scope tight.
- Use targeted instructions instead of one giant instruction file.
- Enable MCP tools only when the task needs them.
- Use human-in-the-loop approval for high-risk tool actions.

## Slide 12: Lever 5 - Measurement

- Measure tokens where exposed.
- Measure premium requests, review counts, and billing views where tokens are hidden.
- Measure quality with retries, false positives, PR churn, and human rework.
- Optimize after you have a baseline.

## Slide 13: Surface matrix

- CLI: most visible token/context controls.
- VS Code: daily coding workflow with Ask, Plan, Agent, custom instructions, prompt files, and review.
- GitHub.com: repo, issue, PR, and discussion context.
- Coding/cloud agent: asynchronous implementation from scoped tasks.
- Code review: PR-focused feedback with product-specific constraints.

## Slide 14: VS Code pattern

- Curate project context with concise instructions and docs.
- Plan first for complex work.
- Implement from the plan in a fresh or focused session.
- Review changes against the plan.

## Slide 15: GitHub.com web pattern

- Ask from the page that already has the relevant context.
- Keep threads focused.
- Use repository, issue, and PR context deliberately.
- Treat generated files as drafts.

## Slide 16: Copilot CLI pattern

- Use sessions like branches: one task, one focused context.
- Filter tool output before it enters the conversation.
- Delegate noisy discovery when available.
- Use usage/context visibility to teach the token mental model.

## Slide 17: Coding agent pattern

- Write issues like implementation briefs.
- Include acceptance criteria, validation commands, and files to avoid.
- Keep tasks small enough to review.
- Review the generated PR like any other teammate's work.

## Slide 18: Code review pattern

- Keep PRs small.
- Tune repo and path-specific review instructions.
- Watch automatic review policy and quota implications.
- Validate Copilot findings; review comments are not approvals.

## Slide 19: Context inventory exercise

- List every context source.
- Mark required, useful, stale, redundant, sensitive, or unknown.
- Decide what stays, what moves, what gets summarized, and what gets removed.

## Slide 20: Instruction diet exercise

- Keep stable rules always-on.
- Move targeted rules to path-specific instructions.
- Move repeated workflows to prompts, skills, or agents.
- Link long docs instead of copying them into instructions.

## Slide 21: Governance

- Content exclusion
- Model access policies
- Code review settings
- Budgets and alerts
- Telemetry and dashboard ownership

## Slide 22: Delivery tracks

- 1 hour: mental model, surface view, demo, checklist
- 2 hours: practitioner lab and prompt/context refactor
- 4 hours: customer environment review and team operating model

## Slide 23: What improvement looks like

- Fewer irrelevant tokens
- Faster answers
- Fewer retries
- Higher-signal reviews
- Clearer ownership of policy and measurement

## Slide 24: Takeaways

- Context is a design input, not a dumping ground.
- Token optimization and context engineering improve both cost and quality.
- Surface controls differ; the habits transfer.
- Start with three changes this week and measure.
