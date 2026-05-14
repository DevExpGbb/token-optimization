# Exercise 02: VS Code Instructions Stack

## Goal

Split a bloated instruction file into targeted Copilot primitives.

## Starting point

Imagine one always-on instruction file contains coding style, frontend accessibility, test conventions, release steps, docs style, and MCP guidance.

## Steps

1. Keep only stable repo-wide rules in `.github/copilot-instructions.md`.
2. Rewrite one long procedure as a short declarative guardrail.
3. Move frontend guidance to `.github/instructions/frontend.instructions.md`.
4. Move test guidance to `.github/instructions/tests.instructions.md`.
5. Move repeated workflows to `.github/prompts/*.prompt.md`.
6. Move tool boundaries to a chat mode or MCP README.
7. Identify one readiness or eval check that would catch instruction drift.

## Output

Use the files in [`../../templates`](../../templates/README.md) to create a minimal instruction stack.
