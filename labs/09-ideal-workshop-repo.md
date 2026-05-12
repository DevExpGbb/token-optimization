# Chapter 9: Ideal External Workshop Repository

## Goal

The workshop repository should be safe, realistic, and small enough for attendees to understand quickly. It should demonstrate context management tradeoffs without exposing customer code.

## Recommended characteristics

- Public or easily shareable with external attendees.
- Uses a familiar stack such as TypeScript, Python, .NET, or Java.
- Contains 5-15 source files, 3-8 tests, and clear documentation.
- Includes realistic issues: a bug, a docs gap, a small refactor, and a test failure.
- Has enough structure for code search and tool use to matter.
- Avoids secrets, production data, private endpoints, or proprietary algorithms.
- Includes a small issue backlog for lab prompts.

## Suggested structure

```text
sample-workshop-repo/
  README.md
  CONTRIBUTING.md
  docs/
  src/
  tests/
  issues/
    01-bug.md
    02-docs-update.md
    03-refactor.md
    04-eval-case.md
  prompts/
    baseline-prompts.md
    improved-prompts.md
  evals/
    dataset.jsonl
    rubric.md
```

## Built-in lab scenarios

- Fix a localized bug with minimal context.
- Improve a prompt by removing irrelevant files.
- Compare model choices for a simple and complex task.
- Decide which tools/MCP servers are necessary.
- Create a session handoff summary.
- Run a small eval against two prompt variants.

## Repository README should include

- Setup instructions.
- Known lab tasks.
- Expected time per task.
- Safety note that the repo contains no real secrets.
- Guidance for resetting to the starting state.

## Optional enhancements

- Add intentionally noisy files to teach context filtering.
- Add a simulated usage report for billing discussions.
- Add a lightweight eval dataset with expected outcomes.
- Add role cards for developer, team lead, platform admin, and security reviewer.
