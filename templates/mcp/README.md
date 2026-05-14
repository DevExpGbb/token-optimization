# Workspace MCP Starter

Use workspace MCP when a tool is needed for one repository or workshop. Use user-profile MCP only when the same tool should be available across many projects.

Prefer a direct CLI command when it returns a small, sufficient answer. MCP tools are valuable when they add authenticated access, structured operations, or repeatable workflows; they are wasteful when they return large JSON payloads for a question a short command could answer.

## Checklist

- The server has a clear owner.
- The data it can access is understood.
- Read-only tools are preferred by default.
- Write tools require human approval.
- The server is removed when the workflow no longer needs it.
- CLI plugins that surface in both Copilot CLI and VS Code are audited as one shared tool surface.
- Verbose tool responses are summarized before they enter long-running sessions.

The starter config uses MarkItDown so Copilot clients can convert `.pptx`, `.csv`, and other source files into reusable text.
