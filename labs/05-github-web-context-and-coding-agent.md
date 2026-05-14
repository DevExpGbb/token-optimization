# Lab 05: GitHub.com Track - Web Context and Coding Agent

## Concept

GitHub.com already has useful context: repositories, issues, pull requests, discussions, files, and Copilot Spaces. The optimization habit is to start from the page that contains the right context and to write scoped tasks when handing work to coding agent.

Use a sandbox or customer-approved demo organization. Do not assume a real customer org is safe to project. TODO(cody): confirm the standard demo organization or fallback repository before live delivery.

## Surface mechanics

Common GitHub.com context paths:

- Repository pages for file and architecture questions.
- Issues for scoped implementation tasks.
- Pull requests for review and follow-up questions.
- Copilot Spaces for curated cross-repo or document-backed knowledge.
- Coding agent for async implementation when the issue is clear enough to produce a reviewable PR.

A vague issue creates broad exploration, broad diffs, and harder review. A good coding-agent issue looks like a small implementation brief: goal, files in scope, files to avoid, acceptance criteria, validation commands, and reviewer expectations.

Setup hygiene matters too. If the agent has to discover how to install dependencies, seed data, run tests, or choose a validation command, it can spend extra turns before useful implementation starts. Keep reusable setup steps close to the repository workflow and include the expected validation path in the issue.

## Levers

| Lever | GitHub.com habit |
| --- | --- |
| Context hygiene | Ask from the page that already contains relevant context |
| Prompt discipline | Write issues as implementation briefs |
| Model and surface routing | Use coding agent for scoped async work, not vague exploration |
| Scope and tool control | Keep Spaces sources curated, issues narrow, and setup steps explicit |
| Measurement | Watch generated PR size, review cycles, retries, and time to merge |

## Hands-on

Use [`../exercises/05-github-coding-agent-scope/README.md`](../exercises/05-github-coding-agent-scope/README.md).

1. Start with a vague issue.
2. Add goal, constraints, files in scope, and files to avoid.
3. Add acceptance criteria and validation commands.
4. Add setup assumptions or a link to setup steps.
5. Add review expectations.
6. Decide whether the task is small enough for coding agent.

## Checklist

- I can pick the GitHub.com page that gives Copilot the right context.
- I can write a scoped coding-agent issue.
- I can include setup and validation details that reduce discovery loops.
- I can avoid projecting sensitive repositories in workshops.
- I can use Spaces for curated context instead of ad hoc dumping.
- I can review generated PRs like teammate work.

## Sources

- https://docs.github.com/en/copilot/using-github-copilot/coding-agent/about-copilot-coding-agent
- https://github.blog/changelog/2025-09-25-copilot-coding-agent-is-now-generally-available/
- https://docs.github.com/en/copilot/concepts/context/spaces
- https://github.blog/changelog/2025-05-29-introducing-copilot-spaces-a-new-way-to-work-with-code-and-context/
- https://bthomas2622.github.io/copilot-token-optimization/#tools
