# Chapter 8: AI Evals and Observability

## Core idea

Token optimization should be measured. AI evals help teams compare prompts, instructions, models, memories, and tool configurations using repeatable examples instead of anecdotes.

## Interpreting "waza"

If "waza" referred to W&B, consider Weights & Biases Weave for tracing, prompt/model comparison, and qualitative evaluation workflows. Confirm the intended tool name with the customer before presenting it as a requirement.

## What to evaluate

- Correctness: did the assistant solve the task?
- Groundedness: did it use the supplied repository facts?
- Cost: how many tokens, requests, and tool calls were needed?
- Latency: how long did the workflow take?
- Safety: did it avoid secrets, unsafe commands, or policy violations?
- Developer experience: was the answer actionable?

## Recommended tools to consider

- W&B Weave: tracing, prompt/version comparison, human review workflows.
- promptfoo: lightweight prompt and model regression testing.
- LangSmith: tracing, datasets, and eval workflows for LangChain-based systems.
- OpenAI Evals or provider-native eval tools: model and prompt comparison.
- Azure AI Evaluation: useful for Azure-hosted AI workflows.
- Ragas or DeepEval: evaluation patterns for retrieval-augmented generation.
- Custom GitHub Actions or CI checks: simple regression suites for prompts and agent instructions.

## Minimal eval dataset

Start with 10-20 examples:

- 5 common coding tasks.
- 5 documentation or explanation tasks.
- 3 security or policy-sensitive tasks.
- 3 tool-use tasks.
- 2 failure cases where the model should ask clarifying questions.

## Hands-on lab

1. Select three representative prompts.
2. Run each with two instruction sets or two models.
3. Score outputs from 1-5 on correctness, usefulness, and cost.
4. Decide which change should become the new default.

## Practical recommendation

Use evals to justify changes to model routing, instruction files, MCP configuration, and memory strategy.
