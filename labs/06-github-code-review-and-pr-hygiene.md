# Lab 06: GitHub.com/Code Review Track - PR and Review Hygiene

## Concept

Copilot code review is a PR-shaped workflow. It works best when the pull request is small, the description is clear, and repository instructions are concise. It works poorly when a PR mixes unrelated changes or when review instructions are bloated, stale, or too broad.

Teach code review as a purpose-built review surface, not as a generic chat prompt.

## Surface mechanics

Important review habits:

- Keep pull requests small and focused.
- Explain intent, risk, and validation in the PR description.
- Keep repository and path-specific instructions concise.
- Treat Copilot comments as feedback, not approval.
- Review automatic review settings so draft-heavy or push-heavy repositories do not generate avoidable noise.

As of 2026-05-12, GitHub Docs should be re-verified before delivery for model availability, review instruction limits, automatic review behavior, and quota implications.

## Levers

| Lever | Code review habit |
| --- | --- |
| Context hygiene | Keep diffs small and remove unrelated files |
| Prompt discipline | Use PR descriptions to explain intent and validation |
| Model and surface routing | Use review for PR feedback, not broad implementation planning |
| Scope and tool control | Use path-specific review instructions where possible |
| Measurement | Track false positives, repeated comments, PR churn, and time to merge |

## Hands-on

Use [`../exercises/06-github-code-review-hygiene/README.md`](../exercises/06-github-code-review-hygiene/README.md).

1. Start with a broad PR description.
2. Add problem, approach, risk, and validation.
3. Identify unrelated files that should move to another PR.
4. Draft concise review instructions for one file area.
5. Decide which findings require human review before merge.

## Checklist

- I can explain why PR size affects review quality.
- I can write a review-ready PR description.
- I can keep review instructions short and targeted.
- I can separate Copilot feedback from required approval.
- I can measure review signal instead of only review volume.

## Sources

- https://docs.github.com/en/copilot/using-github-copilot/code-review/using-copilot-code-review
- https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot
- https://docs.github.com/en/copilot/managing-copilot/configuring-and-auditing-content-exclusion
