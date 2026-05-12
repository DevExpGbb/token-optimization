# Instruction Diet Worksheet

Use this to reduce always-on Copilot context while preserving useful guidance.

## Instruction file under review

```markdown
File:
Owner:
Last reviewed:
Primary surfaces affected:
```

## Sort the content

| Current instruction or section | Keep always-on? | Better home | Reason |
| --- | --- | --- | --- |
|  | Yes / No | Repo instruction / path instruction / prompt / skill / agent / docs / remove |  |

## Where guidance belongs

| Guidance type | Best home |
| --- | --- |
| Stable project purpose, stack, and must-follow rules | `.github/copilot-instructions.md` |
| Rules for specific languages, directories, or file types | `.github/instructions/**/*.instructions.md` |
| Repeatable task workflow | `.github/prompts/*.prompt.md` |
| Specialized workflow guidance loaded on demand | `.github/skills/*/SKILL.md` |
| Specialist role with tools and boundaries | `.github/agents/*.agent.md` |
| Long standards, diagrams, onboarding, or architecture detail | Linked docs |

## Checklist

- [ ] Remove team history and onboarding essays from always-on instructions.
- [ ] Remove rules that the model can infer from code.
- [ ] Split path-specific rules by file type or directory.
- [ ] Replace copied policy text with links to source-of-truth docs.
- [ ] Keep examples short and concrete.
- [ ] Check for conflicts across personal, repo, path-specific, agent, and organization guidance.
- [ ] Re-test one representative task after trimming.
