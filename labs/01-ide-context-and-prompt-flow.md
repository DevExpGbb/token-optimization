# Lab 01: VS Code/IDE Track - Context and Prompt Flow

## Concept

VS Code is where many developers feel Copilot cost and quality most directly because the assistant sits next to code, selections, files, tests, terminals, and workspace context. Good IDE usage starts with deliberate context attachment and a clear mode choice.

The learner goal is simple: choose the smallest context shape that can answer the question or complete the change.

## Surface mechanics

VS Code exposes several context shapes:

- **Inline completions** for small, local code where a comment or partial implementation is enough.
- **Ask** for explanation, search, and read-only reasoning.
- **Edit** for targeted changes in known files or selections.
- **Agent** for multi-step implementation where tool use is worth the extra context and requests.
- **Plan** for design and sequencing before implementation.
- Explicit context such as `#selection`, `#file`, open editors, pasted logs, and `#codebase`.

The expensive pattern is not "Agent mode is bad." The expensive pattern is using broad agentic context before the task is clear. Start narrow, then escalate when the task requires broader search or multi-file edits.

## Levers

| Lever | IDE habit |
| --- | --- |
| Context hygiene | Start new chats when the task changes; remove stale attachments |
| Prompt discipline | Name the outcome, files, constraints, expected output, and success criteria |
| Model and surface routing | Use completions for local code, Ask for discovery, Plan for design, Edit/Agent for implementation |
| Scope and tool control | Prefer selected code and specific files before `#codebase` |
| Measurement | Track retries, broad file reads, failed edits, and manual rework |

## Hands-on

Use [`../exercises/01-vscode-context-attachments/README.md`](../exercises/01-vscode-context-attachments/README.md).

1. Start with a broad request: "Fix the login bug in this project."
2. Decide whether a comment plus inline completion could solve a small part before opening chat.
3. Rewrite it for Ask mode using a file, selection, or failing test.
4. Rewrite it for Plan mode with acceptance criteria.
5. Rewrite it for Agent mode only after the plan is clear.
6. Compare which version would likely read the most context and produce the most retries.

## Checklist

- I can explain Ask, Edit, Agent, and Plan in cost/quality terms.
- I can prefer inline completions for small, local code tasks.
- I can decide when `#codebase` is justified.
- I can use selection or file context before workspace context.
- I can split discovery, planning, implementation, and review.
- I can constrain output format when a short answer is enough.
- I can name one retry or rework signal to watch.

## Sources

- https://github.blog/ai-and-ml/github-copilot/copilot-ask-edit-and-agent-modes-what-they-do-and-when-to-use-them/
- https://code.visualstudio.com/docs/copilot/overview
- https://code.visualstudio.com/docs/copilot/chat/copilot-chat
- https://code.visualstudio.com/docs/copilot/reference/copilot-settings
- https://bthomas2622.github.io/copilot-token-optimization/#best-practices
- https://bthomas2622.github.io/copilot-token-optimization/#tools
