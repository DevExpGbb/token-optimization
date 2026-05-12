# Facilitator Delivery Guide

## Positioning

This workshop teaches token optimization and context engineering across GitHub Copilot surfaces. The delivery deck provides the narrative; the labs and worksheets provide the hands-on path.

Use Copilot CLI as the reference implementation because it exposes context, tools, subagents, and usage most visibly. Then generalize the same principles to VS Code, GitHub.com, Copilot coding/cloud agent, and Copilot code review.

## Artifacts

| Artifact | Use |
| --- | --- |
| `decks/token-optimization-context-engineering.pptx` | Starter live presentation |
| `decks/token-optimization-context-engineering.outline.md` | Source outline for deck edits |
| `decks/token-optimization-context-engineering.speaker-notes.md` | Presenter notes |
| `labs/README.md` | Track selection and student entry point |
| `resources/copilot-surface-matrix.md` | Living surface reference |
| `resources/*-worksheet.md` | Hands-on and customer review worksheets |

## Delivery tracks

### 1 hour: awareness and demo

Best for leaders, technical leads, and mixed audiences.

1. Explain the mental model.
2. Show the simplified surface matrix.
3. Run an instruction diet demo.
4. End with the Monday-morning checklist.

Avoid deep product configuration. Keep the call to action practical.

### 2 hours: practitioner workshop

Best for developers and enablement teams.

1. Teach the mental model and five levers.
2. Run the context inventory exercise.
3. Run a VS Code, web, or CLI prompt/context refactor.
4. Demo code review context hygiene if time allows.
5. Capture team commitments.

### 4 hours: applied environment review

Best for teams that can inspect their own repositories.

1. Confirm preflight and safety rules.
2. Teach the core mental model.
3. Complete context inventory and instruction diet worksheets.
4. Review code review, model, tool, and measurement settings.
5. Share anonymized findings.
6. Build a 30-day operating model.

Use a fallback public repository if the customer environment is not ready.

## Demo guidance

- Have screenshots or a recorded fallback for live demos.
- Do not rely on a billing or admin page being available in the room.
- Do not project proprietary source unless the customer explicitly approves it.
- Keep CLI demos short and visible: context, usage, compacting, and filtered tool output.
- In VS Code, show Ask, Plan, and Agent as different context shapes, not just different buttons.
- For code review, emphasize that Copilot review supplements human review and does not replace approval.

## Claims to verify before delivery

Date-stamp product-specific claims in slides or notes:

- Billing and usage model details
- Model availability and model switching
- Code review instruction limits
- Code review quota behavior
- Coding/cloud agent availability
- MCP and subagent availability by surface

## Facilitation tone

The goal is not "use less AI." The goal is to use AI deliberately, get better answers, and remove waste.
