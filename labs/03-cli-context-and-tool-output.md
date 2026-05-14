# Lab 03: GHCP CLI Track - Session Context and Tool Output

## Concept

GitHub Copilot CLI is the clearest surface for teaching context management because the user can see commands, tool output, session boundaries, and summaries. The optimization habit is to keep the main session focused and prevent noisy terminal output from becoming permanent conversation context.

## Surface mechanics

Treat CLI sessions like branches:

- One session per task or closely related set of tasks.
- Summarize before switching focus.
- Filter logs, test output, and search results before putting them in the conversation.
- Prefer targeted file reads and searches over dumping directories or full command output.
- Use `/usage` when available to check session growth.
- Use `/compact` to summarize and continue; use `/clear` when the old topic should disappear.
- Use handoffs when the next step should continue without all previous noise.

Commands, stack traces, build logs, and search results can be useful. They can also dominate the context window and make the assistant chase irrelevant details.

When working through VS Code chat, enable terminal output compression where appropriate with `chat.tools.compressOutput.enabled`. It can collapse unchanged diff hunks, strip noisy package-install output, and keep generated terminal output from crowding out source context.

## Levers

| Lever | CLI habit |
| --- | --- |
| Context hygiene | Start fresh when the task changes; compact or summarize at boundaries |
| Prompt discipline | Ask for a diagnosis or plan before broad edits |
| Model and surface routing | Use CLI when tool visibility and session control matter |
| Scope and tool control | Run narrow searches and suppress verbose output |
| Measurement | Watch `/usage`, tool calls, repeated searches, retries, and context growth |

## Hands-on

Use [`../exercises/03-cli-session-scope/README.md`](../exercises/03-cli-session-scope/README.md).

1. Start with a noisy troubleshooting transcript.
2. Identify stale assumptions and irrelevant command output.
3. Replace one raw command dump with a filtered command, summary, or compressed output.
4. Rewrite the next request with only the useful findings.
5. Add file and command boundaries.
6. Write a five-line handoff summary for a fresh session.

## Checklist

- I can decide when a CLI session should continue or restart.
- I can summarize before changing task focus.
- I can filter command output before sharing it with the model.
- I can choose between `/compact`, `/clear`, and a fresh session.
- I can keep search and file reads targeted.
- I can preserve useful decisions without carrying all prior noise.

## Sources

- https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-in-the-command-line
- https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-cli
- https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/
- https://code.visualstudio.com/updates/v1_120
- https://bthomas2622.github.io/copilot-token-optimization/#tools
- https://bthomas2622.github.io/copilot-token-optimization/#monitor
