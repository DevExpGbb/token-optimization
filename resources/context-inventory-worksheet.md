# Context Inventory Worksheet

Use this worksheet before a hands-on task or during the 4-hour customer environment review.

## Task

```markdown
Task:
Surface:
Repository or project:
Success criteria:
Human approval needed before:
```

## Inventory

| Context item | Source | Type | Needed? | Risk | Action |
| --- | --- | --- | --- | --- | --- |
| Example: `.github/copilot-instructions.md` | Repo | Always-on instruction | Yes | Long or stale | Trim to stable rules |
| Example: build log | Terminal | Tool output | Maybe | Verbose | Summarize or grep first |
|  |  |  |  |  |  |

## Context types

- Always-on instruction
- Path-specific instruction
- Prompt file or skill
- Agent definition
- Repository documentation
- Issue or PR context
- Selected code or file reference
- Tool output
- Retrieved documentation
- Conversation history
- Human review gate

## Decisions

1. What context is required?
2. What context can be summarized?
3. What context should stay out of the session?
4. What should become a durable repo asset?
5. What should be measured after the task?
