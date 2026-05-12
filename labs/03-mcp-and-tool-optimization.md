# Chapter 3: MCP and Tool Optimization

## Core idea

Tools and MCP servers can make agents more capable, but every enabled tool adds selection overhead, security considerations, and possible latency. Enable the smallest useful tool set for the task.

## Tool selection principles

- Prefer local repository search for code questions.
- Prefer official APIs for authoritative external data.
- Disable broad or experimental tools unless the task requires them.
- Use read-only tools by default; enable write tools only when needed.
- Document what each MCP server is for, who owns it, and what data it can access.

## MCP hygiene checklist

- Is this server needed for the current workflow?
- Does it expose sensitive data?
- Does it support least-privilege access?
- Are tool names and descriptions clear enough for the model to choose correctly?
- Are rate limits, costs, and audit logs understood?
- Is there a fallback if the server is unavailable?

## Demo

Run the same task with two configurations:

1. Too many tools: issue tracker, browser, database, cloud logs, file system, shell, and package registry.
2. Focused tools: repository search and issue tracker only.

Discuss differences in speed, safety, and answer focus.

## Hands-on lab

1. Choose a task: fix a bug, summarize an issue, or update docs.
2. List every tool the agent could use.
3. Remove tools that are not needed.
4. Define read/write boundaries.
5. Write a one-paragraph tool policy for the task.

## Practical recommendations

- Create task-based tool profiles: "docs only," "code edit," "incident read-only," and "release prep."
- Review MCP server access quarterly.
- Treat tool descriptions as product UX: clear descriptions reduce mistaken tool calls.
