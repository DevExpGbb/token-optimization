# Lab 04: GHCP CLI Track - Agents, Tools, and Cost Control

## Concept

Agentic CLI workflows are powerful because they can search, edit, test, delegate, and use MCP tools. They are expensive or risky when the user delegates vague work, enables too many tools, or lets raw discovery output flood the main session.

The optimization question is not "agent or no agent." It is "which work should stay in the main session, which work should be delegated, and what summary should come back?"

## Surface mechanics

Use a small decision tree:

1. Do the task directly when the files and commands are known.
2. Delegate read-only discovery when the search space is large.
3. Use specialist agents for bounded work with clear success criteria.
4. Keep MCP tools least-privilege and task-specific.
5. Require approval for risky writes, dependency changes, secrets, infrastructure, and production configuration.

The main session should receive concise findings, patches, and validation results. It should not receive every intermediate log line unless the log is the evidence.

Before an agent executes, shape the plan. Inline plan controls in supported Claude and Copilot CLI flows make this cheaper than correcting a bad plan after several tool calls. During execution, stop repeated failed commands, repeated file reads, or broad MCP calls instead of letting the loop continue.

For multi-project work, treat the Agents window as a scope boundary: one project or task per agent session, sync upstream before work starts, and review the full change set when the session completes.

## Levers

| Lever | CLI agent habit |
| --- | --- |
| Context hygiene | Return summaries, not raw exploration dumps |
| Prompt discipline | Give agents task scope, constraints, and validation |
| Model and surface routing | Escalate only when deeper reasoning or autonomy is needed |
| Scope and tool control | Enable only the tools needed for the task |
| Measurement | Compare direct work, delegated work, tool loops, retries, and final diff size |

## Hands-on

Use [`../exercises/04-cli-agent-tool-control/README.md`](../exercises/04-cli-agent-tool-control/README.md).

1. Pick a task with unknown files.
2. Decide what discovery can be delegated read-only.
3. Define tool boundaries and files to avoid.
4. Edit the plan before execution if the scope is unclear.
5. Ask for a summary before implementation.
6. Decide whether to proceed directly or delegate the patch.
7. Name one loop signal that would make you stop and intervene.

## Checklist

- I can decide when delegation reduces main-session context.
- I can write a bounded agent task.
- I can restrict tools and file scope.
- I can ask for summaries instead of full logs.
- I can intervene when an agent repeats a failing loop.
- I can use agent sessions as project/task boundaries.
- I can require human approval for risky operations.

## Sources

- https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-in-the-command-line
- https://docs.github.com/en/copilot/concepts/context/model-context-protocol
- https://docs.github.com/en/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/about-billing-for-github-copilot
- https://code.visualstudio.com/updates/v1_119
- https://code.visualstudio.com/updates/v1_120
- https://bthomas2622.github.io/copilot-token-optimization/#tools
- https://bthomas2622.github.io/copilot-token-optimization/#monitor
