---
name: repo-review
description: Review a repository for instruction bloat, tool sprawl, and token-waste patterns. Use this when asked to audit Copilot customization or reduce unnecessary context.
---

# Repo Review Skill

Use this skill when the task is a targeted Copilot customization or context-efficiency review, not a general code review.

## Workflow

1. Inventory only the Copilot customization files relevant to the request.
2. Separate always-on rules, path-specific rules, skill instructions, prompt starters, agents, and MCP tools.
3. Flag duplicated, stale, broad, or unobservable guidance.
4. Recommend the smallest move that preserves behavior:
   - trim always-on instructions
   - move path rules to `.instructions.md`
   - move specialized workflows to `SKILL.md`
   - keep prompts short
   - disable unused MCP tools
5. Suggest one validation or eval that proves the change helped.

## Output

- Short finding summary
- Recommended file moves
- Token-efficiency rationale
- Validation step
