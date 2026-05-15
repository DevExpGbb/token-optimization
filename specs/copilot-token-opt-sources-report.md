# Source Research: Copilot Token-Optimization Materials Extension

**Date:** 2026-05-13 - **Confidence:** MIXED (HIGH for VS Code release notes and AgentRC; MEDIUM-HIGH for bthomas2622 workflow patterns; LOW for internal SE Resource Library reuse — see Limitations)

## Executive Summary

Five of six source groups retrieved cleanly enough to use. The bthomas2622 GitHub Pages content is a single-page site: route-style URLs such as `/best-practices`, `/tools`, and `/monitor` return 404, but the same-page anchors `#best-practices`, `#tools`, and `#monitor` retrieve the intended content. Use that source for workflow patterns and habits, not as the authority for volatile pricing or model availability claims. VS Code 1.119, VS Code 1.120, and `microsoft/agentrc` are strong sources for repository/project token optimization with GitHub Copilot. The SE Resource Library is on `octodemo.com` and remains internal-only; public-domain analogues should be used for customer-facing billing and governance material.

---

## 1-3. bthomas2622/copilot-token-optimization (Best Practices / Tools / Monitor)

[Best Practices](https://bthomas2622.github.io/copilot-token-optimization/#best-practices), [Tools](https://bthomas2622.github.io/copilot-token-optimization/#tools), [Monitor Your Usage](https://bthomas2622.github.io/copilot-token-optimization/#monitor) - Confidence: MEDIUM-HIGH for workflow patterns; verify pricing, model names, and discount claims against GitHub Docs before reuse.

### 1. Best Practices

This section is strongest as lab-ready habit guidance. It reinforces that token optimization is mostly context discipline: send less irrelevant context, ask for smaller outputs, and avoid retries caused by vague requests.

- **Prompt specificity.** Front-load language, framework, constraints, and output format so users do not spend extra turns clarifying the same task.
- **Completions before chat.** For small functions, loops, types, and local edits, inline completions or comments can be cheaper than a full chat turn.
- **Surgical context.** Prefer explicit `#file`, `#selection`, and small file sets over broad requests such as "read the codebase." Close unrelated tabs and avoid dragging discoverable or irrelevant files into chat.
- **Task decomposition.** Split large asks into scoped steps so wrong approaches fail small and do not waste long outputs.
- **Accept and edit.** If an answer is mostly right, accept it and manually adjust rather than regenerating the full response.
- **Context accumulation.** Teach that long conversations, tool output, logs, and command results keep increasing the working context. New topic = new session or compacted handoff.
- **Session hygiene.** Use `/compact` after a subtask, keep short session notes, and restart when the work changes shape.
- **Do your own reads.** If the human only needs to inspect a log, API response, or table, read it directly instead of asking the AI to load it into session context.
- **Reasoning and output control.** Use lower reasoning effort for mechanical work and add output constraints such as "code only," "3 bullets max," or "one sentence" where appropriate.
- **Instruction hygiene.** Compress always-on instructions, keep only rules the agent cannot infer, and write declarative guardrails such as "All exported functions: JSDoc required" instead of long procedures.

**Use in existing labs/materials:** Add or reinforce these patterns in `labs/00-foundations.md`, `labs/01-ide-context-and-prompt-flow.md`, `labs/02-ide-instructions-tools-and-mcp.md`, `resources/context-inventory-worksheet.md`, and `resources/instruction-diet-worksheet.md`.

### 2. Tools

This section maps token habits to Copilot surfaces. It is useful for teaching users when to choose completions, Ask, Edit, Agent, CLI, cloud agent, or MCP.

- **VS Code inline completions and Copilot Edits.** Use inline completions for local, well-defined code and Copilot Edits for scoped multi-file edits instead of repeated chat copy/paste loops.
- **VS Code references.** Use image attachments for UI work and `#file`, `#selection`, and `#codebase` references to avoid pasting large code blocks into prompts.
- **Ask/Edit/Agent routing.** Ask for explanation and scoping, Edit for direct code changes, and Agent only when the task truly needs autonomous file reads, commands, and iteration.
- **Agent loop awareness.** Agent mode can compound cost because tool results and repeated loops stack into context. Users should intervene when the agent repeats a failing command or keeps re-reading the same files.
- **Copilot CLI session controls.** Teach `/compact` vs `/clear`, direct `grep`/glob/view-style lookups for simple discovery, and sub-agents for larger read-heavy exploration where isolated context helps.
- **Cloud agent setup hygiene.** Write issues with clear acceptance criteria, validation commands, constraints, and files to avoid. Use setup steps so the agent does not spend turns discovering how to install or test the project.
- **Model selection.** Default to Auto for routine work, then override only when the task needs a faster/cheaper or stronger model. Treat model choice as a total-workflow-cost decision, not a prestige setting.
- **Context exclusion.** Use `.copilotignore` or equivalent ignore patterns to keep generated files, logs, lockfiles, build output, and dependency folders out of AI context when they are not needed.
- **MCP hygiene.** Prefer a small CLI command when it returns the needed answer with less context than an MCP tool response. Audit enabled MCP servers and use workspace-level `.vscode/mcp.json` for project-specific tools.
- **Scoped instructions.** Move large always-on instruction files into focused `.github/instructions/*.instructions.md` files with `applyTo` globs so only relevant guidance loads for matching paths.

**Use in existing labs/materials:** Add or reinforce these patterns in `labs/01-ide-context-and-prompt-flow.md`, `labs/02-ide-instructions-tools-and-mcp.md`, `labs/03-cli-context-and-tool-output.md`, `labs/04-cli-agents-tools-and-cost-control.md`, `labs/05-github-web-context-and-coding-agent.md`, `resources/copilot-surface-matrix.md`, `resources/monday-morning-checklist.md`, and `templates/mcp/README.md`.

### 3. Monitor Your Usage

This section is useful for measurement habits and governance language. Reuse the operational patterns, but cross-check plan details, included credits, model rates, and discount claims with GitHub Docs before putting them in customer-facing instructions.

- **AI Credit and billing checks.** Point users to GitHub Copilot and billing settings for plan usage, budgets, and billing visibility, but keep official pricing claims sourced to GitHub Docs.
- **Per-token cost awareness.** Teach that output tokens often cost more than input tokens and that agent/cloud-agent workflows can use many internal calls for one visible task.
- **Model tier awareness.** Route routine work to cheaper/faster models or Auto, and reserve premium/deeper reasoning models for architecture, ambiguous debugging, or high-value decisions.
- **Baseline first.** Pick a representative task, record the usage and quality result, apply one optimization, and rerun or compare a similar task. Without a baseline, teams are guessing.
- **CLI usage visibility.** Use `/usage` where available to make session-level cost and context visible during CLI workflows.
- **Context overload signals.** Treat repeated internal errors, dropped connections, or limit messages as a signal to compact, summarize, or restart rather than retrying the same overloaded conversation.
- **Runaway loop intervention.** Stop repeated failed commands, repeated file reads, or repeated retries. A small human correction can avoid many unnecessary turns.
- **Generated context file pruning.** Review generated instruction/context files and remove discoverable facts. Keep durable landmines, conventions, and constraints that the agent would otherwise miss.
- **Commit and review hygiene.** Keep commit messages and review comments terse and structured so repo history and PR context stay cheaper for future Copilot interactions.

**Use in existing labs/materials:** Add or reinforce these patterns in `labs/03-cli-context-and-tool-output.md`, `labs/04-cli-agents-tools-and-cost-control.md`, `labs/07-measurement-billing-and-governance.md`, `labs/08-applied-repo-review-and-adoption.md`, and `resources/monday-morning-checklist.md`.

**Complementary monitoring artifact:** Ben Thomas also owns [`copilot-metrics-export-action`](https://github.com/bthomas2622/copilot-metrics-export-action), a GitHub Action that calls the **Copilot Metrics API** and writes per-org / per-team / per-enterprise CSVs as workflow artifacts. PAT scope required: `copilot, manage_billing:copilot, admin:org, admin:enterprise, or manage_billing:enterprise`. This is useful as an optional reporting example for teams that need exports, not a substitute for the GitHub Pages guidance above.

---

## 4. VS Code Release Notes (1.119 and 1.120)

[Source](https://code.visualstudio.com/updates/v1_119) - Confidence: HIGH

### VS Code 1.119 (May 6, 2026)

- **`github.copilot.chat.agent.backgroundTodoAgent.enabled` (Experimental).** Offloads agent todo-list maintenance to a lightweight background model. Quote: "*every tool call the main model makes to update a todo list costs tokens... By offloading todo list management to a lightweight background agent, the main model can focus on the actual task while a smaller model keeps progress tracking in sync.*" Note: manual `#todo` or a custom agent's tool list overrides it. Disabled by default.
- **OpenTelemetry tracing for agent sessions.** Settings: `github.copilot.chat.otel.enabled`, `github.copilot.chat.otel.otlpEndpoint`. Emits GenAI-semantic-convention spans (`invoke_agent` root, `chat`, `execute_tool`, `execute_hook`). Quote: "*Spans report model and token usage, including cache read and cache creation breakdowns.*" Works with any OTLP backend (Aspire Dashboard called out). Covers local agent, **Copilot CLI background agent**, and Claude agent.
- **Per-response model + multiplier badge.** Setting: `github.copilot.chat.agent.modelDetails.enabled` (default on). For Copilot CLI and Claude agent, the **actual** model resolved by Auto (e.g., "Claude Sonnet 4.6") is shown live and preserved across history rebuilds.
- **UBB UI plumbing landed (not yet visible).** Quote: "*GitHub Copilot is transitioning to usage-based billing starting June 1. In preparation, this release includes internal changes to the chat status dashboard, chat input notifications, and model picker to support displaying billing and credit information.*"
- **Edit Mode deprecation timer.** Officially deprecated since 1.110; `chat.editMode.hidden` keeps it through 1.125, then fully removed. (Affects your existing "modes" slide — call out a sunset.)

**Token-optimization use in repos/projects:**

- Add a lab note that OpenTelemetry gives teams per-agent-session evidence for token usage, model choice, cache reads/creation, and tool execution. This supports optimization by showing which repo workflows create noisy tool output or repeated agent loops.
- Use the model/multiplier badge as a practical model-routing feedback loop: users can see what Auto resolved to, then decide whether the task belonged on a cheaper/faster model, Auto, or a stronger model.
- Teach `backgroundTodoAgent` as a product example of moving low-value bookkeeping away from the main model. The broader lesson is reusable: do not spend premium reasoning on progress tracking, repetitive summarization, or discoverable state.
- Treat UBB UI plumbing as a signal that billing visibility is becoming part of the developer workflow. Labs should teach users to connect cost signals to quality signals, not just chase low usage.
- Use Edit Mode deprecation to simplify mode guidance around Ask/Edit/Agent and avoid teaching sunset workflows.

**Use in existing labs/materials:** `labs/04-cli-agents-tools-and-cost-control.md`, `labs/07-measurement-billing-and-governance.md`, `resources/copilot-surface-matrix.md`, and `resources/monday-morning-checklist.md`.

### VS Code 1.120 (May 13, 2026)

[Source](https://code.visualstudio.com/updates/v1_120) - Confidence: HIGH

- **Terminal tool output compression (Preview).** Setting: `chat.tools.compressOutput.enabled`. Quote: "*Long terminal output from commands like `git diff`, `ls -l`, and `npm install` can consume a large share of the model's context window, which leaves less room for your code and the agent's reasoning.*" When enabled, VS Code compresses command output before sending it to the model: large unchanged diff hunks are collapsed, lockfile and snapshot diffs are dropped, `ls -l` is reduced to entry names, and noisy `npm install` output is stripped. This is the most directly token-optimization-relevant item in 1.120.
- **BYOK model token usage.** The Chat context-window control now shows accurate token usage and percent-full for Bring Your Own Key models. This helps users who route Copilot Chat through Anthropic, OpenAI, OpenRouter, custom OpenAI-compatible endpoints, or Azure OpenAI see context growth instead of guessing.
- **Thinking effort for BYOK reasoning models.** Users can configure thinking effort from the model picker for BYOK reasoning models. The release frames this as a tradeoff between response quality, speed, and cost.
- **Model picker organized by provider.** The Chat model picker now groups models by provider and supports model search. This makes model-routing labs more concrete for teams with built-in and BYOK model pools.
- **Agents window in Stable (Preview).** The Agents window supports working across multiple projects with agent sessions, persisted preferences, per-window setting overrides, clearer change review, and upstream sync before the agent starts. This is relevant for teaching scope control across projects: separate tasks and projects should not share one overloaded agent session.
- **Copilot CLI plugin discovery in VS Code.** Agent plugins installed with the GitHub Copilot CLI are picked up automatically by VS Code, reducing duplicated setup between CLI and IDE. The token-optimization angle is governance: teams should audit shared plugin/tool surfaces once, because they can now flow across both surfaces.
- **Risk assessment for terminal commands (Experimental).** Setting: `chat.tools.riskAssessment.enabled`. Terminal confirmations can include a risk badge and one-sentence explanation. This is not primarily a token feature, but it supports safer human approval, which can prevent costly destructive or noisy loops.
- **Plan mode control for Claude and Copilot CLI.** Setting: `chat.planWidget.inlineEditor.enabled`. Inline plan editing lets users shape plans before execution, reducing wasted agent iterations caused by vague or mis-scoped plans.
- **Markdown preview for diffs (Preview).** Rendered Markdown diffs can make agent or PR documentation changes easier to review. This is useful for this workshop repo because many deliverables are Markdown labs and worksheets.

**Token-optimization use in repos/projects:**

- Add terminal output compression to CLI/tool-output hygiene exercises as a first-class mitigation for oversized `git diff`, `ls -l`, and package-install output.
- Use BYOK token usage and thinking effort controls to teach measurement and model routing for teams that bring their own models or Azure OpenAI deployments.
- Teach the Agents window as a scope boundary: one project/task per session, review the full change set, sync upstream before work starts, and override settings per Agents window when agent workflows need different defaults.
- Update MCP/tool governance guidance to mention that Copilot CLI plugins can now appear in VS Code automatically; plugin audits should cover both CLI and IDE surfaces.
- Use inline plan control as a practical habit: edit the plan before execution instead of paying for agent loops after execution starts.

**Use in existing labs/materials:** `labs/03-cli-context-and-tool-output.md`, `labs/04-cli-agents-tools-and-cost-control.md`, `labs/07-measurement-billing-and-governance.md`, `resources/copilot-surface-matrix.md`, `resources/monday-morning-checklist.md`, and `templates/mcp/README.md`.

---

## 5. microsoft/agentrc

[Source](https://github.com/microsoft/agentrc) - Confidence: HIGH

**Direct answer to your standards question:** AgentRC is a **generator**, not a competing spec and not an aggregator that other tools read. Quote: "*AgentRC reads your codebase and generates the files that close that gap.*" It writes **into** the existing per-tool files; tools continue to read those files directly. For token optimization, the value is not "more instructions"; it is generating, evaluating, and drift-checking the smallest useful repo guidance so Copilot has the right project context without a large always-on tax. Specifically generated:

| File | Purpose |
|------|---------|
| `.github/copilot-instructions.md` | Repo conventions for Copilot |
| `.vscode/mcp.json` | MCP server wiring |
| `.vscode/settings.json` | VS Code AI tuning |
| `agentrc.eval.json` | Test cases to measure instruction quality |
| `AGENTS.md` (via `--output AGENTS.md`) | Multi-agent (Copilot + Claude + others) |

- **Three modes:** `agentrc readiness` (score), `agentrc instructions` (generate), `agentrc eval` (drift check in CI). CI gate: `agentrc readiness --fail-level 3 --json`.
- **Scoring framework:** "*9 pillars and a 5-level maturity model*" (pillar list lives in the docs/Concepts page, not the README).
- **Distinct from APM (Agent Package Manager).** APM distributes; AgentRC generates. The `.instructions.md` format is shared. Quote: "*AgentRC generates the content. APM distributes it.*"
- **Ships as CLI, VS Code extension, and CI pipeline.** Node.js 20+; works with GitHub and Azure DevOps; supports monorepos and multi-root workspaces. Status: "*Experimental — Under active development. Expect breaking changes.*"

**Token-optimization use in repos/projects:**

- Use `agentrc readiness` as a repo hygiene check before adding more custom instructions. If the repo is missing core AI context, fix the smallest high-impact gaps first.
- Use `agentrc instructions` to draft concise `.github/copilot-instructions.md` content, then prune aggressively so always-on context contains only durable conventions and landmines.
- Use generated `.vscode/mcp.json` as a prompt to scope MCP servers per workspace instead of enabling broad global tool sets that inflate every agent step.
- Use `.vscode/settings.json` output to document AI tuning decisions in the project, making model/surface behavior visible to the team.
- Use `agentrc.eval.json` and `agentrc eval` as an eval-driven instruction diet: catch regressions and drift before teams add more prose to instructions.
- Use optional `AGENTS.md` output when multiple agents need a shared concise baseline, but do not duplicate long repo documentation into every tool's always-on context.

**Use in existing labs/materials:** `labs/02-ide-instructions-tools-and-mcp.md`, `labs/08-applied-repo-review-and-adoption.md`, `resources/instruction-diet-worksheet.md`, `templates/copilot-instructions.md`, and `templates/mcp/README.md`.

---

## 6. SE Resource Library — Managing Copilot UBB Budgets

**Status: INTERNAL ONLY.** Hosted on `octodemo.com`, the GitHub SE/demo domain. **Do not paste any of its content verbatim into customer-facing materials.** For customer-facing labs and reusable materials, the same patterns are documented in public sources you can cite:

- **June 1, 2026 transition is official.** Quote from [GitHub Docs](https://docs.github.com/en/copilot/how-tos/manage-and-track-spending/monitor-premium-requests): "*Starting June 1, 2026, GitHub is moving Copilot from request-based billing to usage-based billing.*" Counters reset 1st of each month, 00:00:00 UTC.
- **Budget shape is "group of users + dollar cap."** Per [Xebia](https://xebia.com/blog/github-copilot-going-from-premium-request-units-to-usage-based-billing/): "*A budget is a group of users that together get access to the dollar amounts you configure in overage costs.*" Concrete example: *"$100 for 10 users... each PRU will cost $0.04. So for $100 you get 400 PRUs."*
- **Recommended alert pattern: 75% warning threshold, tiered escalation.** Xebia: "*we help customers implement a base budget with warning signals when the users have consumed 75% of that budget. Then update the budget to the next tier.*"
- **Auto mode = 10% discount on PRU cost.** Worth a callout if verified against current GitHub Docs — model-routing labs should make Auto the default baseline where supported, not just a fallback.
- **Dashboard pattern (customer-shareable):** the public [Copilot Metrics Viewer](https://octodemomvs.github.io/octodemo/) exposes IDE DAU, agent adoption %, most-used model, top feature, requests by interaction type, and completion acceptance rate. Use the screenshot/structure; do not cite octodemo as a customer-bound source.

**Use in existing labs/materials:** Add customer-safe governance guidance to `labs/07-measurement-billing-and-governance.md` and `resources/monday-morning-checklist.md`: budget groups with dollar caps, threshold alerts, and model policies for premium-model access. Path for policy: **Organization Settings > Copilot > Policies** (confirmed in [Medium guide](https://medium.com/@haseeb-dev/github-copilot-token-optimization-guide-5a32ec9465ea), aligns with GitHub Docs).

---

## What Should Change in Existing Labs and Materials

| Existing artifact | Change |
|----------------|--------|
| `labs/00-foundations.md` | Add the context accumulation mental model and "new topic = compact or restart" habit |
| `labs/01-ide-context-and-prompt-flow.md` | Add prompt specificity, completions-before-chat, surgical `#file` context, and output constraints |
| `labs/02-ide-instructions-tools-and-mcp.md` | Add compressed instructions, declarative guardrails, scoped `applyTo`, AgentRC, and MCP audit guidance |
| `labs/03-cli-context-and-tool-output.md` | Add `/usage`, `/compact` vs `/clear`, direct CLI lookup, CLI-over-MCP examples, and VS Code 1.120 terminal output compression |
| `labs/04-cli-agents-tools-and-cost-control.md` | Add sub-agent context isolation, runaway-loop intervention, model routing, VS Code telemetry hooks, inline plan editing, and Agents-window scope boundaries |
| `labs/05-github-web-context-and-coding-agent.md` | Add cloud-agent issue hygiene and setup-step guidance to reduce discovery loops |
| `labs/07-measurement-billing-and-governance.md` | Add baseline-first measurement, AI Credit/billing checks, OpenTelemetry signals, BYOK token visibility, thinking-effort controls, and budget/source caveats |
| `labs/08-applied-repo-review-and-adoption.md` | Add AgentRC readiness/eval as a repo adoption and instruction-drift exercise |
| `resources/context-inventory-worksheet.md` | Add prompts for stale tabs, generated files, logs, and tool output as context sources |
| `resources/instruction-diet-worksheet.md` | Add checks for always-on instruction length, scoped instruction candidates, and declarative guardrails |
| `resources/copilot-surface-matrix.md` | Add surface-routing guidance for completions, Ask, Edit, Agent, Agents window, CLI, cloud agent, BYOK models, and MCP |
| `resources/monday-morning-checklist.md` | Add weekly checks for usage, MCP/plugin scope, instruction bloat, terminal-output noise, model routing, and runaway loops |
| `templates/copilot-instructions.md` | Keep as a lean always-on example; avoid dense prose or discoverable project facts |
| `templates/mcp/README.md` | Add least-privilege MCP/plugin guidance and CLI-first comparison examples |

## Limitations

- The bthomas2622 content is available through same-page anchors. Route-style URLs such as `https://bthomas2622.github.io/copilot-token-optimization/best-practices`, `/tools`, and `/monitor` return 404 and should not be used.
- The bthomas2622 page is useful for workflow patterns, but model names, plan details, discounts, included credits, and percentage-savings claims should be checked against GitHub Docs before becoming customer-facing guidance.
- SE Resource Library is internal — explicit non-shareable flag stands regardless of access.
- Xebia is a partner blog (SECONDARY trust). Treat the $100/$0.04/10-user example as illustrative, not GitHub-official.

## Sources

1. https://bthomas2622.github.io/copilot-token-optimization/#best-practices
2. https://bthomas2622.github.io/copilot-token-optimization/#tools
3. https://bthomas2622.github.io/copilot-token-optimization/#monitor
4. https://code.visualstudio.com/updates/v1_119
5. https://code.visualstudio.com/updates/v1_120
6. https://github.com/microsoft/agentrc
7. https://github.com/bthomas2622/copilot-metrics-export-action
8. https://docs.github.com/en/copilot/how-tos/manage-and-track-spending/monitor-premium-requests
9. https://xebia.com/blog/github-copilot-going-from-premium-request-units-to-usage-based-billing/
10. https://octodemomvs.github.io/octodemo/
11. https://medium.com/@haseeb-dev/github-copilot-token-optimization-guide-5a32ec9465ea
