# Chapter 6: Chat History and Memory Strategies

## Core idea

Memory can improve continuity, but unmanaged memory can introduce stale preferences, hidden assumptions, and unnecessary context. Treat memory as durable configuration, not a dumping ground.

## Types of memory

- Personal preferences: communication style, preferred tools, recurring workflows.
- Repository conventions: testing commands, architecture rules, coding standards.
- Project decisions: active design choices and migration constraints.
- Session summaries: temporary handoff notes.

## What belongs in memory

- Stable facts used repeatedly.
- Rules that are hard to infer from one file.
- Team conventions that prevent mistakes.

## What does not belong in memory

- Temporary debugging guesses.
- Secrets, credentials, or customer-sensitive data.
- One-time task details.
- Opinions that may conflict with team standards.

## Memory review checklist

- Is it still true?
- Is it scoped correctly: personal, repo, team, or organization?
- Does it cite a source?
- Would another developer understand why it exists?
- Could it cause the model to ignore the current prompt?

## Hands-on lab

1. Write five candidate memories from a sample project.
2. Keep only the ones that are stable and reusable.
3. Rewrite them as short, source-backed facts.
4. Decide whether each belongs at personal, repo, or team scope.

## Practical recommendation

Use summaries for temporary continuity and memory for durable knowledge.
