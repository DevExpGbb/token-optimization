# token-optimization
A customer-facing engagement for context management and token optimization

This repository contains source material for a practical developer workshop on token optimization, context engineering, agent customization, tool/MCP hygiene, model choice, AI evals, usage visibility, and sustainable team practices.

Start with [`labs/README.md`](labs/README.md) for 1-hour, 2-hour, and 4-hour delivery outlines, then use the track labs, deck outline, surface matrix, templates, exercises, and worksheets as modular source material.

## Sample web app

This repository also includes a static JavaScript sample app for GitHub Copilot Usage-Based Budgeting. It includes budget-scope guidance and a per-surface estimator that uses user-supplied token rates instead of hardcoded future pricing.

To run it locally:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080` in a browser.

## Copilot primitives

This repo now includes a minimal set of Copilot customization assets for building workshop-ready token optimization content:

- `.github/copilot-instructions.md` for concise repository guidance
- `.github/agents/workshop-content-builder.agent.md` for GPT-5.5 content creation across labs, decks, and teaching materials
- `.github/agents/cost-rubber-duck.agent.md` for Claude Opus 4.7 second-opinion reviews
- `.github/prompts/build-workshop-content.prompt.md` for repeatable workshop-content generation
- `.github/skills/source-material-ingestion/SKILL.md` for `.pptx` and `.csv` ingestion workflows
- `.github/skills/workshop-authoring/SKILL.md` for labs, decks, and facilitator material workflows
- `.vscode/mcp.json` for Microsoft Learn and source-file ingestion via MarkItDown MCP

### Why skills here

The repo uses small project skills for workflows that should only load when relevant. That keeps always-on instructions shorter and aligns with the token-optimization guidance taught by the workshop.

### Tool setup notes

- The explicit file-ingestion tool is `markitdown` in `.vscode/mcp.json`.
- This is **not** a native built-in reader in the repo by itself. `.vscode/mcp.json` only declares the MCP server the client should use.
- Use MarkItDown to open and convert both `.pptx` and `.csv` files into markdown before reusing them in labs, prompts, or presentations.
- Install MarkItDown MCP with PPTX support before using the PowerPoint reader flow:

  ```bash
  pip install "markitdown[pptx]" markitdown-mcp
  ```

- After the MCP server is installed and your Copilot client loads workspace MCP servers, pass in a `.pptx` or `.csv` file by attaching the file or by asking the agent to read that file path with the `markitdown` tool.
- Use Microsoft Learn MCP for current Microsoft guidance.
- CSV support is included in MarkItDown's core text-based format handling.
- Treat PPTX conversion as full textual extraction for slides, tables, and reusable deck content, not full-fidelity inspection of animations, embedded media, or every binary object.
- Use the agent's web tools for current GitHub documentation when the answer depends on latest behavior.

## Workshop goals

- Help customers reduce avoidable AI usage and improve answer quality.
- Build trust after billing and usage model changes by showing transparent, practical controls.
- Give attendees repeatable habits they can apply in other projects.
- Introduce eval-driven improvement so teams can measure whether changes help.

## Curriculum tracks

| Track | Labs |
| --- | --- |
| VS Code/IDE users | [`00`](labs/00-foundations.md), [`01`](labs/01-ide-context-and-prompt-flow.md), [`02`](labs/02-ide-instructions-tools-and-mcp.md), [`07`](labs/07-measurement-billing-and-governance.md), [`08`](labs/08-applied-repo-review-and-adoption.md) |
| GitHub Copilot CLI users | [`00`](labs/00-foundations.md), [`03`](labs/03-cli-context-and-tool-output.md), [`04`](labs/04-cli-agents-tools-and-cost-control.md), [`07`](labs/07-measurement-billing-and-governance.md), [`08`](labs/08-applied-repo-review-and-adoption.md) |
| GitHub.com/code review users | [`00`](labs/00-foundations.md), [`05`](labs/05-github-web-context-and-coding-agent.md), [`06`](labs/06-github-code-review-and-pr-hygiene.md), [`07`](labs/07-measurement-billing-and-governance.md), [`08`](labs/08-applied-repo-review-and-adoption.md) |
| Full cross-surface practitioner | [`00`](labs/00-foundations.md) through [`08`](labs/08-applied-repo-review-and-adoption.md) |

## Contents

- [`labs/README.md`](labs/README.md) - overview, prerequisites, and timed agendas
- [`decks/token-optimization-context-engineering.pptx`](decks/token-optimization-context-engineering.pptx) - primary workshop delivery deck with embedded speaker notes
- [`decks/token-optimization-context-engineering.executive.pptx`](decks/token-optimization-context-engineering.executive.pptx) - executive briefing visual variant
- [`decks/token-optimization-context-engineering.technical.pptx`](decks/token-optimization-context-engineering.technical.pptx) - technical deep dive visual variant
- [`decks/token-optimization-context-engineering.outline.md`](decks/token-optimization-context-engineering.outline.md) - editable delivery deck outline
- [`decks/token-optimization-context-engineering.speaker-notes.md`](decks/token-optimization-context-engineering.speaker-notes.md) - speaker notes for the delivery deck
- [`tools/generate_context_deck.py`](tools/generate_context_deck.py) - regenerates the styled PPTX variants from the Markdown sources
- [`resources/copilot-surface-matrix.md`](resources/copilot-surface-matrix.md) - living reference for Copilot surfaces and context controls
- [`resources/context-inventory-worksheet.md`](resources/context-inventory-worksheet.md)
- [`resources/instruction-diet-worksheet.md`](resources/instruction-diet-worksheet.md)
- [`resources/customer-preflight-checklist.md`](resources/customer-preflight-checklist.md)
- [`resources/monday-morning-checklist.md`](resources/monday-morning-checklist.md)
- [`templates/README.md`](templates/README.md) - copy/paste starter Copilot customization files
- [`exercises/README.md`](exercises/README.md) - track-specific hands-on exercises
- [`facilitator/delivery-guide.md`](facilitator/delivery-guide.md)
- [`labs/00-foundations.md`](labs/00-foundations.md)
- [`labs/01-ide-context-and-prompt-flow.md`](labs/01-ide-context-and-prompt-flow.md)
- [`labs/02-ide-instructions-tools-and-mcp.md`](labs/02-ide-instructions-tools-and-mcp.md)
- [`labs/03-cli-context-and-tool-output.md`](labs/03-cli-context-and-tool-output.md)
- [`labs/04-cli-agents-tools-and-cost-control.md`](labs/04-cli-agents-tools-and-cost-control.md)
- [`labs/05-github-web-context-and-coding-agent.md`](labs/05-github-web-context-and-coding-agent.md)
- [`labs/06-github-code-review-and-pr-hygiene.md`](labs/06-github-code-review-and-pr-hygiene.md)
- [`labs/07-measurement-billing-and-governance.md`](labs/07-measurement-billing-and-governance.md)
- [`labs/08-applied-repo-review-and-adoption.md`](labs/08-applied-repo-review-and-adoption.md)
- [`labs/MIGRATION.md`](labs/MIGRATION.md)

## Regenerating the deck

The PPTX files are generated from the Markdown outline and speaker notes so content remains easy to review.

```powershell
python -m pip install -r requirements-dev.txt
python tools\generate_context_deck.py
```

The generator produces workshop, executive briefing, and technical deep dive variants. All generated PPTX files include embedded PowerPoint speaker notes from `decks/token-optimization-context-engineering.speaker-notes.md`.
