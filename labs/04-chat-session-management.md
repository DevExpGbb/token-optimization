# Chapter 4: Chat Session Management

## Core idea

A chat session is a working context, not a permanent project record. Start new sessions when the task changes, summarize before switching, and avoid carrying stale history.

Different Copilot surfaces expose different session controls, but the habit transfers: isolate planning, implementation, testing, and review when mixing them would pollute context.

## When to continue a session

- You are iterating on the same bug, file, or design.
- The prior turns contain decisions still relevant to the task.
- The model needs continuity to avoid repeating work.

## When to start a new session

- You changed goals.
- The conversation contains failed experiments or outdated assumptions.
- You are moving from discovery to implementation or from implementation to review.
- The model starts referencing irrelevant prior context.

## Session handoff template

Use this when starting fresh:

```markdown
Task:
Current state:
Important files:
Decisions already made:
Constraints:
What I need next:
```

## Surface variants

| Surface | Session habit |
| --- | --- |
| Copilot CLI | Use a focused session per task; summarize before switching focus |
| VS Code | Use Ask, Plan, and Agent intentionally; start fresh when moving from planning to implementation if context is messy |
| GitHub.com | Use repository, issue, or PR context; keep threads and subthreads focused |
| Coding/cloud agent | Put durable task context in the issue or implementation brief |
| Code review | Keep pull requests small and reviewable; avoid mixing unrelated changes |

## Demo

Show a long conversation where the assistant keeps solving an old problem. Then start a fresh session with a five-line handoff and compare output quality.

## Hands-on lab

1. Take a messy chat transcript or simulated conversation.
2. Identify stale assumptions.
3. Write a concise handoff summary.
4. Continue from the handoff in a new session.

## Recommended habit

End important sessions with:

- What changed?
- What remains?
- What decisions were made?
- What should the next session know?
