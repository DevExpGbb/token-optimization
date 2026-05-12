# Chapter 2: Instructions and Agent Customizations

## Core idea

Instructions, custom agents, memory, repository guidance, and tool configuration shape every response. They should be intentional, short, current, and testable.

## What to manage

- Organization or team instructions.
- Repository instructions such as coding standards and security rules.
- Path-specific instructions for file types, folders, or review concerns.
- Agent definitions and specialized roles.
- Personal preferences and saved memories.
- Prompt templates and reusable task checklists.
- Skills for detailed workflows that should load only when relevant.

## Good instruction patterns

- Put stable rules in shared documentation.
- Put task-specific constraints in the current prompt.
- Keep instructions short enough that developers can review them.
- Use positive, concrete rules: "Prefer small diffs" instead of "Do not make huge changes."
- Include source-of-truth links rather than copying long policy text.
- Split targeted guidance into `.github/instructions/**/*.instructions.md`, prompt files, skills, or agents instead of growing one always-on file.

## Bad instruction patterns

- Conflicting rules across personal, repo, and org scopes.
- Large copied policies that crowd out task context.
- Hidden agent behavior that developers cannot explain.
- Outdated examples that no longer match the repository.

## Demo

Compare these two instructions:

Poor:

> Always write perfect code, follow all best practices, be secure, be concise, be helpful, and optimize everything.

Better:

> For this repository, make minimal changes, preserve public APIs, include tests for behavior changes, and explain any security tradeoff before implementing it.

## Hands-on lab

1. Draft a repository instruction file for the sample repo.
2. Limit it to 10-15 bullets.
3. Separate rules into: coding style, testing, security, documentation, and review.
4. Remove any rule that cannot be observed in a diff or answer.
5. Ask an AI assistant to perform a small task with and without the instruction set.

## Code review note

Copilot code review has product-specific instruction behavior. As of 2026-05-12, GitHub Docs state that code review reads only the first 4,000 characters of custom instruction files and uses instructions from the pull request base branch. Re-verify this before delivery and keep review-focused instructions concise.

## Customer relationship message

Instruction management is a shared responsibility. We help customers reduce usage and improve outcomes by making customization visible, understandable, and maintainable.
