const budgetPages = [
  {
    id: "enterprise",
    label: "Enterprise budget",
    badge: "Governance",
    badgeClass: "label--accent",
    title: "Enterprise budgets protect the shared AI credit pool",
    summary:
      "Enterprise-level budgets track Copilot usage across organizations, repositories, and cost centers that belong to the enterprise. They are the broadest guardrail for usage-based Copilot spending.",
    diagram: enterpriseDiagram,
    points: [
      "Each assigned Copilot Business or Copilot Enterprise license contributes included monthly AI credits to a shared billing-entity pool.",
      "Enterprise owners and billing managers can create budgets for the whole enterprise, a single organization, a repository, or a cost center.",
      "Budgets can alert at 75%, 90%, and 100%, and hard-stop usage when the limit is reached if that option is enabled.",
      "When included AI credits are exhausted, additional usage either continues as paid usage or is blocked based on configured policies."
    ],
    callout:
      "Use enterprise budgets to establish the executive spending envelope before delegating more specific controls to organizations and cost centers."
  },
  {
    id: "cost-center",
    label: "Cost center budget",
    badge: "Chargeback",
    badgeClass: "label--attention",
    title: "Cost center budgets align Copilot spend to business ownership",
    summary:
      "Cost-center-level budgets track spending for a single cost center, helping teams monitor usage against department, program, or project accountability.",
    diagram: costCenterDiagram,
    points: [
      "A cost center budget can apply within an enterprise scope, giving finance and platform teams a clearer view of who is consuming AI credits.",
      "It can be used alongside enterprise budgets, but overlapping limits should be planned carefully to avoid surprising users.",
      "Alerts keep owners informed before the budget is exhausted, while hard stops can enforce the limit where appropriate.",
      "Cost center budgets are useful when a central platform team funds Copilot but individual departments need transparent spend controls."
    ],
    callout:
      "Avoid confusing overlaps: a hard-stop budget at any applicable scope can block additional usage even when another budget still has room."
  },
  {
    id: "user",
    label: "User-level budget",
    badge: "Individual control",
    badgeClass: "label--success",
    title: "User-level budgets help manage power-user consumption",
    summary:
      "User-level budgets track spending for individual users. They are a precise way to provide extra usage while keeping each user's additional spend bounded.",
    diagram: userDiagram,
    points: [
      "A user-level budget can halt an individual user's Copilot access when exhausted, even if the organization or enterprise pool still has capacity.",
      "A $0 user-level budget means no access at all, so user budgets should be assigned intentionally.",
      "Additional usage budgets are set in US dollars, while usage is shown in GitHub AI Credits.",
      "Because 1 AI credit equals $0.01 USD, a $100 user-level budget represents 10,000 AI credits."
    ],
    callout:
      "User-level budgets are best paired with education on model choice, token usage, and when high-cost agent workflows are appropriate."
  }
];

function enterpriseDiagram() {
  return `
    <svg viewBox="0 0 720 320" role="img" aria-labelledby="enterprise-diagram-title">
      <title id="enterprise-diagram-title">Enterprise budget hierarchy diagram</title>
      <defs>${arrowMarker()}</defs>
      <rect class="diagram-box diagram-box--accent" x="250" y="20" width="220" height="58" rx="8" />
      <text class="diagram-text" x="360" y="47" text-anchor="middle">Enterprise budget</text>
      <text class="diagram-subtext" x="360" y="65" text-anchor="middle">Whole billing entity</text>
      <line class="diagram-line" x1="360" y1="78" x2="180" y2="126" />
      <line class="diagram-line" x1="360" y1="78" x2="360" y2="126" />
      <line class="diagram-line" x1="360" y1="78" x2="540" y2="126" />
      <rect class="diagram-box" x="70" y="130" width="220" height="58" rx="8" />
      <rect class="diagram-box" x="250" y="130" width="220" height="58" rx="8" />
      <rect class="diagram-box" x="430" y="130" width="220" height="58" rx="8" />
      <text class="diagram-text" x="180" y="157" text-anchor="middle">Organization A</text>
      <text class="diagram-text" x="360" y="157" text-anchor="middle">Organization B</text>
      <text class="diagram-text" x="540" y="157" text-anchor="middle">Cost centers</text>
      <text class="diagram-subtext" x="180" y="175" text-anchor="middle">Repos and members</text>
      <text class="diagram-subtext" x="360" y="175" text-anchor="middle">Repos and members</text>
      <text class="diagram-subtext" x="540" y="175" text-anchor="middle">Finance alignment</text>
      <line class="diagram-line" x1="360" y1="188" x2="360" y2="236" />
      <rect class="diagram-box diagram-box--success" x="220" y="240" width="280" height="58" rx="8" />
      <text class="diagram-text" x="360" y="266" text-anchor="middle">Shared included AI credit pool</text>
      <text class="diagram-subtext" x="360" y="284" text-anchor="middle">Drawn down by Copilot model usage</text>
    </svg>
  `;
}

function costCenterDiagram() {
  return `
    <svg viewBox="0 0 720 320" role="img" aria-labelledby="cost-center-diagram-title">
      <title id="cost-center-diagram-title">Cost center budget flow diagram</title>
      <defs>${arrowMarker()}</defs>
      <rect class="diagram-box diagram-box--accent" x="50" y="35" width="180" height="64" rx="8" />
      <text class="diagram-text" x="140" y="62" text-anchor="middle">Enterprise</text>
      <text class="diagram-subtext" x="140" y="80" text-anchor="middle">Budget envelope</text>
      <line class="diagram-line" x1="230" y1="67" x2="306" y2="67" />
      <rect class="diagram-box diagram-box--attention" x="310" y="35" width="190" height="64" rx="8" />
      <text class="diagram-text" x="405" y="62" text-anchor="middle">Cost center</text>
      <text class="diagram-subtext" x="405" y="80" text-anchor="middle">Department or project</text>
      <line class="diagram-line" x1="500" y1="67" x2="576" y2="67" />
      <rect class="diagram-box" x="580" y="35" width="110" height="64" rx="8" />
      <text class="diagram-text" x="635" y="62" text-anchor="middle">Alerts</text>
      <text class="diagram-subtext" x="635" y="80" text-anchor="middle">75/90/100%</text>
      <line class="diagram-line" x1="405" y1="99" x2="250" y2="170" />
      <line class="diagram-line" x1="405" y1="99" x2="405" y2="170" />
      <line class="diagram-line" x1="405" y1="99" x2="560" y2="170" />
      <rect class="diagram-box" x="130" y="174" width="240" height="58" rx="8" />
      <rect class="diagram-box" x="285" y="174" width="240" height="58" rx="8" />
      <rect class="diagram-box" x="440" y="174" width="240" height="58" rx="8" />
      <text class="diagram-text" x="250" y="201" text-anchor="middle">Team usage</text>
      <text class="diagram-text" x="405" y="201" text-anchor="middle">Project usage</text>
      <text class="diagram-text" x="560" y="201" text-anchor="middle">Repository usage</text>
      <text class="diagram-subtext" x="405" y="286" text-anchor="middle">All applicable budgets are evaluated as AI credits are consumed.</text>
    </svg>
  `;
}

function userDiagram() {
  return `
    <svg viewBox="0 0 720 320" role="img" aria-labelledby="user-diagram-title">
      <title id="user-diagram-title">User-level budget decision diagram</title>
      <defs>${arrowMarker()}</defs>
      <rect class="diagram-box" x="50" y="35" width="170" height="64" rx="8" />
      <text class="diagram-text" x="135" y="62" text-anchor="middle">Copilot user</text>
      <text class="diagram-subtext" x="135" y="80" text-anchor="middle">Chat, CLI, agent</text>
      <line class="diagram-line" x1="220" y1="67" x2="302" y2="67" />
      <rect class="diagram-box diagram-box--success" x="306" y="35" width="180" height="64" rx="8" />
      <text class="diagram-text" x="396" y="62" text-anchor="middle">User budget</text>
      <text class="diagram-subtext" x="396" y="80" text-anchor="middle">$100 = 10,000 credits</text>
      <line class="diagram-line" x1="486" y1="67" x2="568" y2="67" />
      <rect class="diagram-box" x="572" y="35" width="110" height="64" rx="8" />
      <text class="diagram-text" x="627" y="62" text-anchor="middle">Usage</text>
      <text class="diagram-subtext" x="627" y="80" text-anchor="middle">Allowed</text>
      <line class="diagram-line" x1="396" y1="99" x2="396" y2="164" />
      <rect class="diagram-box diagram-box--attention" x="230" y="168" width="332" height="66" rx="8" />
      <text class="diagram-text" x="396" y="196" text-anchor="middle">When exhausted, access halts for that user</text>
      <text class="diagram-subtext" x="396" y="215" text-anchor="middle">There is no automatic fallback to lower-cost models.</text>
      <text class="diagram-subtext" x="396" y="286" text-anchor="middle">User limits can be stricter than enterprise or organization capacity.</text>
    </svg>
  `;
}

function arrowMarker() {
  return `
    <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#d0d7de"></path>
    </marker>
  `;
}

function renderHome() {
  return `
    <section class="hero" id="home">
      <div class="container">
        <p class="eyebrow"><span class="label label--accent">Usage-based billing</span> GitHub Copilot budgets</p>
        <h1>Plan, communicate, and control Copilot AI credit spend.</h1>
        <p>
          Copilot Business and Copilot Enterprise usage consumes GitHub AI Credits when users interact with AI-powered features such as Chat, CLI, cloud agent, Spaces, Spark, and third-party coding agents. Budgets help teams monitor that spend, alert stakeholders, and enforce limits where needed.
        </p>
        <div class="button-row">
          <a class="Button Button--primary" href="#enterprise">Explore budget types</a>
          <a class="Button" href="#request">Request user budget</a>
        </div>
        <div class="facts" aria-label="Key billing facts">
          <div class="fact"><strong>$0.01</strong><span>1 GitHub AI Credit equals one cent USD.</span></div>
          <div class="fact"><strong>1,900</strong><span>Monthly included AI credits per Copilot Business user.</span></div>
          <div class="fact"><strong>3,900</strong><span>Monthly included AI credits per Copilot Enterprise user.</span></div>
          <div class="fact"><strong>75/90/100%</strong><span>Budget alert thresholds available in GitHub billing.</span></div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2>Three budget scopes for practical governance</h2>
        <p class="lead">
          Start broad with enterprise controls, map accountability with cost centers, and tune individual access with user-level budgets.
        </p>
        <div class="grid grid-3">
          ${budgetPages
            .map(
              (page) => `
                <a class="Box card-link" href="#${page.id}">
                  <div class="Box-header">
                    <span class="label ${page.badgeClass}">${page.badge}</span>
                    <h3 class="Box-title">${page.label}</h3>
                  </div>
                  <div class="Box-body">
                    <p>${page.summary}</p>
                  </div>
                </a>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderBudgetPage(page) {
  return `
    <section class="section budget-page" id="${page.id}">
      <div class="container grid grid-2">
        <div>
          <span class="label ${page.badgeClass}">${page.badge}</span>
          <h2>${page.title}</h2>
          <p class="lead">${page.summary}</p>
          <ul class="list">
            ${page.points.map((point) => `<li>${point}</li>`).join("")}
          </ul>
          <div class="callout">${page.callout}</div>
        </div>
        <div class="diagram">${page.diagram()}</div>
      </div>
    </section>
  `;
}

function renderRequestForm() {
  return `
    <section class="section" id="request">
      <div class="container">
        <div class="Box form-card">
          <div class="Box-header">
            <span class="label label--success">Simulation</span>
            <h2 class="Box-title">Request additional user-level budget</h2>
          </div>
          <div class="Box-body">
            <p class="lead">
              Submit a simulated request for an additional user-level Copilot budget. This sample clears the form and shows a confirmation message without calling GitHub APIs.
            </p>
            <div class="budget-amount" aria-label="Requested budget amount">$100.00</div>
            <form id="budget-request-form">
              <div class="form-group">
                <label class="form-label" for="requester">Requester</label>
                <input class="form-control" id="requester" name="requester" type="text" autocomplete="name" required />
              </div>
              <div class="form-group">
                <label class="form-label" for="username">GitHub username</label>
                <input class="form-control" id="username" name="username" type="text" autocomplete="username" required />
              </div>
              <div class="form-group">
                <label class="form-label" for="reason">Business justification</label>
                <textarea class="form-control" id="reason" name="reason" required></textarea>
              </div>
              <button class="Button Button--primary" type="submit">Submit request</button>
              <div class="flash" id="request-status" role="status" aria-live="polite">Request submitted</div>
            </form>
          </div>
        </div>
        <div class="source-list">
          Sources:
          <a href="https://docs.github.com/en/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises">GitHub Copilot usage-based billing</a>
          and
          <a href="https://docs.github.com/en/billing/how-tos/set-up-budgets">GitHub budgets and alerts setup</a>.
        </div>
      </div>
    </section>
  `;
}

function attachFormHandler() {
  const form = document.querySelector("#budget-request-form");
  const status = document.querySelector("#request-status");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reset();
    status.classList.add("is-visible");
    status.textContent = "Request submitted";
    window.setTimeout(() => status.classList.remove("is-visible"), 5000);
  });
}

function renderApp() {
  const app = document.querySelector("#app");
  app.innerHTML = [
    renderHome(),
    ...budgetPages.map(renderBudgetPage),
    renderRequestForm()
  ].join("");
  attachFormHandler();
}

renderApp();
