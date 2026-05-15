# Lab 02: VS Code/IDE Track - Instructions, Skills, Tools, and MCP

## Concept

Persistent customization should make Copilot more predictable without turning every request into a giant prompt. In VS Code, the main optimization is deciding what belongs in always-on instructions, what belongs in path-scoped guidance, what belongs in an on-demand skill, what can stay as a small prompt file, and what should be retrieved only when needed.

Skills are the better default for specialized workflows because the Skills.md contract keeps the workflow self-describing and loadable on demand. The agent sees a compact skill description, then only the selected skill instructions enter context when the work actually needs them. That avoids repeating long procedures in every chat, keeps repo instructions shorter, and preserves room for the current task, files, tool output, and validation evidence.

In this repo, project skills live as `.github/skills/<name>/SKILL.md`. The standard is often discussed as Skills.md or a Skill.md contract: a short, machine-readable skill file that tells the agent when to use the capability, what context to load, what tools or approvals may be needed, and what outputs to return.

## Surface mechanics

Use a layered instruction stack:

- `.github/copilot-instructions.md` for short, stable repository guidance.
- `.github/instructions/*.instructions.md` for path-scoped or file-type-specific rules.
- `.github/skills/*/SKILL.md` for specialized workflow instructions that should load only when relevant.
- `.github/prompts/*.prompt.md` only for small reusable chat starters, not long procedures.
- `.vscode/mcp.json` for workspace-scoped MCP servers.

Do not put every standard, policy, and workflow into one always-on file. That adds context to every request, even when the task does not need it.

Good instructions are short, declarative, and scoped. Prefer rules like "All exported functions: JSDoc required" over long procedures. If a rule only matters for one directory, file type, or workflow, move it out of the always-on file.

Good skills are narrow, named for the job, and explicit about when to use them. A `SKILL.md` should include a short description, trigger conditions, inputs, outputs, constraints, and validation expectations. Keep examples short. Link long standards instead of embedding them. If a skill needs tools or remote execution, document the approval gate, expected artifacts, logs, and ownership.

Use prompt files sparingly. A prompt file is useful when the whole reusable asset fits on one screen and only changes the wording of a request. A skill is better when the workflow has multiple steps, tool choices, handoffs, output contracts, or validation rules.

| Use | Prefer |
| --- | --- |
| One short reusable wording pattern | Prompt file |
| Multi-step workflow with rules, tools, or outputs | Skill |
| Guidance that should apply to every request | Repo or path instruction |
| Long standard or policy text | Linked source doc plus a short skill rule |

## Levers

| Lever | IDE customization habit |
| --- | --- |
| Context hygiene | Keep always-on instructions short and current |
| Skill discipline | Move specialized workflows into on-demand `SKILL.md` files |
| Prompt discipline | Keep prompt files as small starters, not procedure dumps |
| Context routing | Let the selected skill carry only the relevant workflow instructions into context |
| Scope and tool control | Prefer workspace MCP config over broad user-level tools and plugins |
| Measurement | Compare retries before and after instruction changes; use readiness/eval checks where available |

## Hands-on

Use [`../exercises/02-vscode-instructions-stack/README.md`](../exercises/02-vscode-instructions-stack/README.md).

1. Start with a bloated instruction file.
2. Keep only stable repository rules in the root instruction file.
3. Rewrite one imperative instruction as a shorter declarative guardrail.
4. Move file-type rules into `.instructions.md` files.
5. Move one specialized workflow into a `.github/skills/<name>/SKILL.md` file.
6. Explain why the skill is more token-efficient than a long prompt file.
7. Keep a `.prompt.md` file only if the reusable prompt is short and does not duplicate the skill.
8. Keep one MCP server in workspace scope and document why it exists.
9. Optional: run or simulate an AgentRC readiness/eval check to identify instruction drift.

## Checklist

- I can separate repo, path, skill, prompt, and MCP guidance.
- I can keep always-on instructions reviewable.
- I can explain why skills are more token-efficient than long prompts for specialized workflows.
- I can write a compact `SKILL.md` that loads only when the workflow is needed.
- I can explain why a workspace MCP server is enabled.
- I can audit CLI/IDE plugin overlap before enabling more tools.
- I can remove a rule that cannot be observed in output.
- I can test whether the instruction stack changes behavior.

## Sources

- https://skills.md/
- https://skills.md/agent.txt
- https://skills.md/docs/skills
- https://code.visualstudio.com/docs/copilot/customization/custom-instructions
- https://code.visualstudio.com/docs/copilot/customization/prompt-files
- https://code.visualstudio.com/docs/copilot/customization/mcp-servers
- https://bthomas2622.github.io/copilot-token-optimization/#tools
- https://github.com/microsoft/agentrc
- https://code.visualstudio.com/updates/v1_120
