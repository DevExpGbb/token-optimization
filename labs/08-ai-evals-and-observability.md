# Chapter 8: AI Evals and Observability

## Core idea

Token optimization should be measured with repeatable, customer-owned evals. Use Microsoft Waza as the workshop evaluation framework so teams can compare prompts, instructions, agents, models, and tool configurations without relying on proprietary third-party products.

## Required eval framework: Microsoft Waza

Use Waza for this chapter's lab and examples:

- Documentation: <https://microsoft.github.io/waza/>
- Repository: <https://github.com/microsoft/waza>
- Typical commands: `waza run`, `waza check`, `waza compare`, `waza coverage`, and `waza tokens`.
- CI integration: run Waza in GitHub Actions and publish the result files as workflow artifacts.

This repository includes the minimum workspace artifacts Waza and VS Code customizations need:

- `skills/token-optimization/SKILL.md` for the Waza skill under evaluation.
- `.github/skills/token-optimization.skill.md` as a workspace skill customization.
- `.github/prompts/context-triage.prompt.md` as a reusable prompt.
- `.github/instructions/token-optimization.instructions.md` as shared instructions.
- `.github/agents/token-eval-reviewer.agent.md` as a VS Code custom agent.
- `evals/token-optimization/eval.yaml` and task files for Waza.
- `.github/workflows/waza-evals.yml` to run the eval suite in Actions.

## What to evaluate

- Correctness: did the assistant solve the task?
- Groundedness: did it use the supplied repository facts?
- Cost: how many tokens, requests, and tool calls were needed?
- Latency: how long did the workflow take?
- Safety: did it avoid secrets, unsafe commands, or policy violations?
- Developer experience: was the answer actionable?

## Run Waza in GitHub Actions

The Actions workflow should:

1. Check out the repository.
2. Install Waza from the official Microsoft project.
3. Run `waza run evals/token-optimization/eval.yaml --verbose`.
4. Save JSON and JUnit results.
5. Upload results as artifacts for review.

Use the mock executor for quick pull request validation. Switch to a real executor only when the customer is ready to provide the required credentials and accept the cost and data handling implications.

## Minimal eval dataset

Start with 10-20 examples:

- 5 common coding tasks.
- 5 documentation or explanation tasks.
- 3 security or policy-sensitive tasks.
- 3 tool-use tasks.
- 2 failure cases where the model should ask clarifying questions.

## Hands-on lab

1. Open the repository's Waza workflow in `.github/workflows/waza-evals.yml`.
2. Review the skill, prompt, instruction, and agent customization files.
3. Run the Waza workflow from the Actions tab or by opening a pull request.
4. Download the Waza result artifacts and identify which task failed or passed.
5. Modify one prompt or instruction and rerun the workflow to compare results.
6. Decide whether the customization improved correctness, safety, and token efficiency.

## Run customer analyses in VS Code

Use the Chat Customizations Evaluations extensions for VS Code to help customers run the same style of analysis locally:

1. Install the VS Code extensions documented at <https://microsoft.github.io/waza/>.
2. Open the customer's repository in VS Code.
3. Add or review the workspace customizations: `*.skill.md`, `*.prompt.md`, `*.instructions.md`, and `*.agent.md`.
4. Run local evaluations against representative prompts and fixtures.
5. Compare local results with the GitHub Actions Waza results.
6. Promote only the customizations that improve measured outcomes.

## Practical recommendation

Use Waza evals to justify changes to model routing, instruction files, prompt templates, agent definitions, MCP configuration, and memory strategy. Keep the eval data small, explicit, customer-owned, and safe to run in CI.
