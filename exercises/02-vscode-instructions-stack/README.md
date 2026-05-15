# Exercise 02: VS Code Instructions and Skills Stack

## Goal

Split a bloated instruction file into targeted Copilot primitives, with specialized workflows moved into on-demand skills.

## Starting point

Imagine one always-on instruction file contains coding style, frontend accessibility, test conventions, release steps, docs style, source-material processing steps, and MCP guidance.

## Steps

1. Keep only stable repo-wide rules in `.github/copilot-instructions.md`.
2. Rewrite one long procedure as a short declarative guardrail.
3. Move frontend guidance to `.github/instructions/frontend.instructions.md`.
4. Move test guidance to `.github/instructions/tests.instructions.md`.
5. Move one specialized workflow to `.github/skills/<name>/SKILL.md`.
6. Write one sentence explaining why the skill is more token-efficient than a long prompt file.
7. Keep a `.github/prompts/*.prompt.md` file only if it is a short starter that does not duplicate the skill.
8. Move tool boundaries to the workspace MCP README.
9. Identify one readiness or eval check that would catch instruction drift.

## Output

Use the files in [`../../templates`](../../templates/README.md) to create a minimal instruction and skills stack.
