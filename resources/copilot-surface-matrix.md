# Copilot Surface Matrix

Last verified: 2026-05-12. Copilot capabilities and billing details change frequently; verify surface-specific claims against current GitHub Docs before delivery.

Use this as the living reference for the workshop. The deck should show a simplified version.

| Surface | Best for | Context controls | Routing and model controls | Measurement visibility | Recommended habits |
| --- | --- | --- | --- | --- | --- |
| Copilot CLI | Token-visible agentic work, repo exploration, command-heavy tasks | Session boundaries, working directory, file references, tool allow/deny, subagents, summaries, content exclusion | Model switching when available; delegate discovery, tasks, review, and long-running work | CLI usage/context commands and traces when configured | Start one session per task, summarize before switching focus, avoid raw logs, delegate noisy work |
| VS Code Copilot Chat | Day-to-day coding, selected code, planning, implementation, review | Selection, open files, workspace context, custom instructions, prompt files, custom agents, MCP tools, path-specific instructions | Ask/Plan/Agent modes; model picker when enabled; subagents when available | Used references, chat context indicators, code review comments, billing/usage views by plan | Use Ask for learning, Plan before complex edits, Agent for implementation, keep instructions short |
| GitHub.com web chat | Repository, issue, pull request, and discussion context | Repository/issue/PR context, attachments, generated files, subthreads, personal/repo/org instructions | Model picker and response regeneration when available | GitHub usage and billing views by plan; less live token visibility | Ask from the page that has the relevant context, keep threads focused, move durable guidance into repo assets |
| Copilot coding or cloud agent | Asynchronous implementation from issues or tasks | Issue body, acceptance criteria, linked files, repo instructions, path-specific instructions, tools configured for the agent | Agent profile and product defaults; model details may not be user-controlled | PRs, task outcomes, org/enterprise usage reporting where available | Write scoped issues, include validation commands, review generated PRs, require approval for risky changes |
| Copilot code review | PR feedback and suggested fixes | PR diff, base branch instructions, path-specific instructions, repository knowledge, excluded files | Purpose-built review system; user model switching is not supported | Review request/quota and billing views by plan; review comments and false-positive rate | Keep PRs small, tune instructions, avoid unnecessary auto-review on draft-heavy workflows, validate findings |

## What to do when a lever is unavailable

- If a surface does not expose live token usage, measure indirectly with billing views, review counts, retry rates, and time-to-merge.
- If a surface does not expose model switching, route the work to another surface or adjust the workflow scope.
- If a surface does not expose tool controls, use repository instructions, issue templates, content exclusion, and human review gates.
- If a workflow needs sensitive context, prefer local review, redaction, or a sandbox repository.

## Secondary surfaces

JetBrains, Visual Studio, Xcode, GitHub Mobile, and other IDEs support subsets of the same ideas. Teach them as variants unless the audience is centered on that tool.
