---
name: source-material-ingestion
description: Read and reduce source material such as PowerPoint decks and CSV files before reusing it in prompts, labs, or workshop content. Use this when asked to ingest, summarize, or extract content from `.pptx` or `.csv` files.
---

# Source Material Ingestion

Use this skill when the user provides workshop source material and wants it turned into usable working context without wasting tokens.

## Workflow

1. For `.pptx` and `.csv` files, use the explicit `markitdown` MCP tool if it is available. If MCP tools are not loaded but Python tooling is available, use the MarkItDown CLI.
2. Convert the file to markdown first. Do not work from the binary file directly.
3. Confirm the conversion includes the expected deck sections, slide numbers, table text, or CSV rows before relying on it.
4. Summarize the converted content into the smallest useful form for the task:
   - deck outline
   - speaker-note bullets
   - table summary
   - key metrics or themes
   - open questions or gaps
5. Carry forward only the relevant excerpts into later prompts or artifacts.
6. Prefer filenames, slide numbers, section headings, or row-group labels when citing source material.

## Token Optimization Rules

- Ingest only the files the current task actually needs.
- Do not paste the full converted markdown into the chat unless the user asks for it.
- If a deck or CSV is large, provide a structured summary first and ask for narrower follow-up only when needed.
- Prefer short extracted tables or bullet lists over long prose copies.

## Tool Notes

- `markitdown` is not native by itself; it must be installed and loaded through workspace MCP configuration.
- In this repo, the MCP declaration lives in `.vscode/mcp.json`.
- For PowerPoint support, install `markitdown[pptx]`.
- CSV support is part of MarkItDown's text-format handling.
- MarkItDown is appropriate for full textual extraction from deck slides, tables, and CSV rows. It is not a full-fidelity PPTX inspector for animations, embedded media, or every binary object in a presentation.
