# Chapter 11: Copilot Surfaces and Context Boundaries

## Core idea

The same context engineering principles apply across GitHub Copilot surfaces, but the controls are different. Do not teach surface parity. Teach which levers are available, which are hidden, and what to do when a lever is not exposed.

Use [`../resources/copilot-surface-matrix.md`](../resources/copilot-surface-matrix.md) as the living reference.

## Primary surfaces

| Surface | Best teaching role |
| --- | --- |
| Copilot CLI | Reference implementation for visible context, session hygiene, subagents, tools, and usage feedback |
| VS Code | Daily practitioner workflow for Ask, Plan, Agent, code review, prompt files, custom instructions, and selected context |
| GitHub.com web chat | Repository, issue, pull request, and discussion context for lightweight planning and explanation |
| Copilot coding or cloud agent | Asynchronous implementation work where issue scope, acceptance criteria, and review discipline matter most |
| Copilot code review | PR-focused context where custom instructions, diff hygiene, and validation habits shape review quality |

## Surface-specific guidance

### Copilot CLI

- Use new sessions for unrelated tasks.
- Use compacting and summaries before switching focus.
- Keep working directories tight.
- Delegate discovery and command-heavy work when available so the main session receives summaries instead of raw output.
- Use usage and context visibility as the clearest live demo of token burn.

### VS Code

- Use Ask for explanation, Plan for design, and Agent for multi-step implementation.
- Prefer selected code, open files, and explicit file references over broad workspace requests.
- Use prompt files for repeatable workflows.
- Use custom instructions for stable project guidance, and keep them concise.
- Use review flows for selected code or uncommitted changes when the task is review-focused.

### GitHub.com web chat

- Ask from the repository, issue, or pull request where the relevant context already exists.
- Use short threads or subthreads to avoid mixing unrelated questions.
- Regenerate or compare model responses when model choice is available.
- Treat generated files as drafts that need review before reuse.

### Copilot coding or cloud agent

- Write issues like implementation briefs: goal, constraints, files to avoid, acceptance criteria, and validation commands.
- Prefer small scoped issues over broad "modernize this repo" tasks.
- Review generated pull requests like any other PR.
- Use human approval gates for risky changes, dependency changes, security-sensitive areas, and production configuration.

### Copilot code review

- Keep pull requests small enough for high-signal review.
- Keep repository-wide instructions concise and move path-specific guidance to `.github/instructions/**/*.instructions.md`.
- Date-stamp product-specific guidance. As of 2026-05-12, GitHub Docs state that Copilot code review reads only the first 4,000 characters of custom instruction files and uses instructions from the base branch.
- Do not treat Copilot review as an approval. It supplements human review.
- Review automatic review policies so draft-heavy or push-heavy repositories do not create avoidable quota usage.

## Hands-on lab

1. Choose one task and map it across the five primary surfaces.
2. For each surface, identify:
   - What context is automatically available?
   - What context must the user attach or reference?
   - What controls are available?
   - What cannot be measured directly?
3. Pick the best surface for the task and explain why.

## Facilitator notes

- Keep the matrix lightweight in slides. Use the resource file as the durable source of truth.
- Call out where the answer is "not available on this surface" instead of implying every surface can do everything.
- Secondary surfaces such as JetBrains, Visual Studio, Xcode, GitHub Mobile, and other IDEs can be covered in appendix or Q&A.
