# Facilitator Delivery Guide

## Positioning

This workshop teaches token optimization and context engineering across GitHub Copilot surfaces. The delivery deck provides the narrative; the labs and worksheets provide the hands-on path.

Use Copilot CLI as the reference implementation because it exposes context, tools, subagents, and usage most visibly. Then generalize the same principles to VS Code, GitHub.com, Copilot coding/cloud agent, and Copilot code review.

## Artifacts

| Artifact | Use |
| --- | --- |
| `decks/token-optimization-context-engineering.pptx` | Primary workshop presentation with embedded speaker notes |
| `decks/token-optimization-context-engineering.executive.pptx` | Executive briefing visual variant |
| `decks/token-optimization-context-engineering.technical.pptx` | Technical deep dive visual variant |
| `decks/token-optimization-context-engineering.outline.md` | Source outline for deck edits |
| `decks/token-optimization-context-engineering.speaker-notes.md` | Presenter notes embedded into generated PPTX files |
| `tools/generate_context_deck.py` | Regenerates all deck variants from the Markdown sources |
| `labs/README.md` | Track selection and student entry point |
| `templates/README.md` | Copy/paste starter Copilot customization files |
| `exercises/README.md` | Track-specific hands-on exercises |
| `resources/copilot-surface-matrix.md` | Living surface reference |
| `resources/*-worksheet.md` | Hands-on and customer review worksheets |

## Deck format options

- Use the workshop deck for the standard 1, 2, and 4-hour deliveries.
- Use the executive briefing variant when the audience needs a cleaner leadership narrative before hands-on material.
- Use the technical deep dive variant when the room is mostly engineers and the discussion will focus on controls, workflows, and review mechanics.
- Regenerate all variants after deck edits with `python tools\generate_context_deck.py`.

## Delivery tracks

### 1 hour: awareness and demo

Best for leaders, technical leads, and mixed audiences.

1. Run lab `00` for the shared mental model.
2. Pick one track demo: VS Code/IDE, GHCP CLI, or GitHub.com/code review.
3. Show the surface estimator in the sample app.
4. End with lab `08` and the Monday-morning checklist.

Avoid deep product configuration. Keep the call to action practical.

### 2 hours: practitioner workshop

Best for developers and enablement teams.

1. Teach lab `00`.
2. Run one complete track bundle: `01-02`, `03-04`, or `05-06`.
3. Run the matching exercise from `exercises/`.
4. Use lab `07` to connect cost and quality signals.
5. Capture commitments with lab `08`.

### 4 hours: applied environment review

Best for teams that can inspect their own repositories.

1. Confirm preflight and safety rules.
2. Teach lab `00`.
3. Rotate through labs `01` through `06` or split learners by track.
4. Review billing, governance, and measurement with lab `07`.
5. Share anonymized findings.
6. Build a 30-day operating model with lab `08`.

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
