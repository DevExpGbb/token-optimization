# Chapter 1: Context Management Basics

## Core idea

Every AI request has a context budget. More context can help, but irrelevant context increases cost, latency, and confusion. Good context management is the discipline of giving the model enough information to succeed and no more.

## Common waste patterns

- Pasting entire files when only one function matters.
- Asking broad questions before defining the task.
- Keeping old chat history after the topic changes.
- Loading too many tools, MCP servers, memories, or instruction files.
- Using a high-capacity model for simple search, rewrite, or formatting work.

## Practical context checklist

Before sending a request, ask:

1. What outcome do I want?
2. What files, functions, logs, or examples are truly required?
3. What constraints should the model follow?
4. What can be omitted because it is stale, unrelated, or discoverable?
5. Should this be a new chat/session?

## Demo

Start with an overloaded prompt:

> Review this repository and improve the auth flow. Here are 8 files, the full README, a stack trace, old chat history, and unrelated requirements.

Refactor it:

> In `src/auth/session.ts`, identify why expired sessions are not rejected. Use the failing test output below. Do not modify unrelated files. Return a concise diagnosis and patch plan first.

## Hands-on lab

1. Pick a real task from the sample repo.
2. Write the largest prompt you might naturally send.
3. Remove irrelevant history, files, and requirements.
4. Add explicit success criteria.
5. Compare expected token usage, clarity, and answer quality.

## Facilitator notes

- Emphasize that "less context" does not mean "less information." It means higher signal.
- Encourage attendees to separate discovery, implementation, and review into different turns.
