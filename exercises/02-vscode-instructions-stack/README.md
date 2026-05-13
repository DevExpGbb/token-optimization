# Exercise 02: VS Code Instructions Stack

## Goal

Split a bloated instruction file into targeted Copilot primitives.

## Starting point

Imagine one always-on instruction file contains coding style, frontend accessibility, test conventions, release steps, docs style, and MCP guidance.

## Steps

1. Keep only stable repo-wide rules in `.github/copilot-instructions.md`.
2. Move frontend guidance to `.github/instructions/frontend.instructions.md`.
3. Move test guidance to `.github/instructions/tests.instructions.md`.
4. Move repeated workflows to `.github/prompts/*.prompt.md`.
5. Move tool boundaries to a chat mode or MCP README.

## Output

Use the files in [`../../templates`](../../templates/README.md) to create a minimal instruction stack.
