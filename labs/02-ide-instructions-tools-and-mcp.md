# Lab 02: VS Code/IDE Track - Instructions, Tools, and MCP

## Concept

Persistent customization should make Copilot more predictable without turning every request into a giant prompt. In VS Code, the main optimization is deciding what belongs in always-on instructions, what belongs in path-scoped guidance, what belongs in prompt files or chat modes, and what should be retrieved only when needed.

## Surface mechanics

Use a layered instruction stack:

- `.github/copilot-instructions.md` for short, stable repository guidance.
- `.github/instructions/*.instructions.md` for path-scoped or file-type-specific rules.
- `.github/prompts/*.prompt.md` for repeated task workflows.
- `.github/chatmodes/*.chatmode.md` for mode-level tool and behavior boundaries.
- `.vscode/mcp.json` for workspace-scoped MCP servers.

Do not put every standard, policy, and workflow into one always-on file. That adds context to every request, even when the task does not need it.

Good instructions are short, declarative, and scoped. Prefer rules like "All exported functions: JSDoc required" over long procedures. If a rule only matters for one directory, file type, or workflow, move it out of the always-on file.

## Levers

| Lever | IDE customization habit |
| --- | --- |
| Context hygiene | Keep always-on instructions short and current |
| Prompt discipline | Move repeatable workflows into prompt files |
| Model and surface routing | Use chat modes to steer tool and model behavior |
| Scope and tool control | Prefer workspace MCP config over broad user-level tools and plugins |
| Measurement | Compare retries before and after instruction changes; use readiness/eval checks where available |

## Hands-on

Use [`../exercises/02-vscode-instructions-stack/README.md`](../exercises/02-vscode-instructions-stack/README.md).

1. Start with a bloated instruction file.
2. Keep only stable repository rules in the root instruction file.
3. Rewrite one imperative instruction as a shorter declarative guardrail.
4. Move file-type rules into `.instructions.md` files.
5. Move repeated workflows into `.prompt.md` files.
6. Keep one MCP server in workspace scope and document why it exists.
7. Optional: run or simulate an AgentRC readiness/eval check to identify instruction drift.

## Checklist

- I can separate repo, path, prompt, chat mode, and MCP guidance.
- I can keep always-on instructions reviewable.
- I can explain why a workspace MCP server is enabled.
- I can audit CLI/IDE plugin overlap before enabling more tools.
- I can remove a rule that cannot be observed in output.
- I can test whether the instruction stack changes behavior.

## Sources

- https://code.visualstudio.com/docs/copilot/customization/custom-instructions
- https://code.visualstudio.com/docs/copilot/customization/prompt-files
- https://code.visualstudio.com/docs/copilot/customization/custom-chat-modes
- https://code.visualstudio.com/docs/copilot/customization/mcp-servers
- https://bthomas2622.github.io/copilot-token-optimization/#tools
- https://github.com/microsoft/agentrc
- https://code.visualstudio.com/updates/v1_120
