# Copilot Starter Templates

Copy these files into a project when you want a small, reviewable starting point for Copilot customization.

## How to use

1. Copy only the templates that match the workflow you are enabling.
2. Keep always-on instructions short.
3. Move path-specific rules into `.instructions.md` files.
4. Move specialized workflows into `SKILL.md` files so they load only when relevant.
5. Use `.prompt.md` files only for short reusable chat starters.
6. Scope MCP servers to the workspace when the tool is only needed for that repository.

## Recommended destinations

| Template | Copy to |
| --- | --- |
| `copilot-instructions.md` | `.github/copilot-instructions.md` |
| `instructions/*.instructions.md` | `.github/instructions/` |
| `skills/*/SKILL.md` | `.github/skills/` |
| `prompts/*.prompt.md` | `.github/prompts/` or `.vscode/prompts/` |
| `agents/*.agent.md` | `.github/agents/` |
| `mcp/workspace.mcp.json` | `.vscode/mcp.json` |

## License and reuse

These templates are MIT-licensed under the repository [`LICENSE`](../LICENSE). Copy them into your own repository and modify them freely.
