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

## Levers

| Lever | IDE customization habit |
| --- | --- |
| Context hygiene | Keep always-on instructions short and current |
| Prompt discipline | Move repeatable workflows into prompt files |
| Model and surface routing | Use chat modes to steer tool and model behavior |
| Scope and tool control | Prefer workspace MCP config over broad user-level tools |
| Measurement | Compare retries before and after instruction changes |

## Hands-on

Use [`../exercises/02-vscode-instructions-stack/README.md`](../exercises/02-vscode-instructions-stack/README.md).

1. Start with a bloated instruction file.
2. Keep only stable repository rules in the root instruction file.
3. Move file-type rules into `.instructions.md` files.
4. Move repeated workflows into `.prompt.md` files.
5. Keep one MCP server in workspace scope and document why it exists.

## Checklist

- I can separate repo, path, prompt, chat mode, and MCP guidance.
- I can keep always-on instructions reviewable.
- I can explain why a workspace MCP server is enabled.
- I can remove a rule that cannot be observed in output.
- I can test whether the instruction stack changes behavior.

## Sources

- https://code.visualstudio.com/docs/copilot/customization/custom-instructions
- https://code.visualstudio.com/docs/copilot/customization/prompt-files
- https://code.visualstudio.com/docs/copilot/customization/custom-chat-modes
- https://code.visualstudio.com/docs/copilot/customization/mcp-servers
