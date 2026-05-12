---
name: workshop-authoring
description: Create workshop-ready labs, slide outlines, speaker notes, and facilitator content about token optimization, Copilot customization, MCP hygiene, model choice, usage visibility, and evals. Use this when asked to build or revise teaching material.
---

# Workshop Authoring

Use this skill when the user wants to build teaching content, not just answer a one-off question.

## Default Approach

1. Identify the audience and artifact type:
   - lab
   - deck outline
   - speaker notes
   - facilitator guide
   - prompt template
2. Reuse the existing repo labs and README before inventing new structure.
3. Check current GitHub Docs or Microsoft Learn only for details that may have changed.
4. Keep the output concise, practical, and easy to present live.

## Content Rules

- Teach one concept per section.
- Favor checklists, examples, comparisons, and exercises over dense explanation.
- Tie recommendations to quality, security, cost, or developer experience.
- Prefer minimal necessary context and explicit tradeoffs.
- If source `.pptx` or `.csv` files are part of the input, use the `source-material-ingestion` skill first.

## Recommended Artifact Shapes

- Labs: core idea, demo, hands-on exercise, practical recommendations
- Decks: section title, 3 to 5 bullets, speaker note, optional demo
- Facilitator notes: timing, goal, common failure mode, recovery guidance

## Escalation

- Use GPT-5.5 for primary content construction.
- Ask the Cost Rubber Duck for a second opinion when tradeoffs, model routing, or cost guidance need a challenge pass.
