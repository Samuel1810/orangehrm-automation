# Coverage Map — OrangeHRM Cypress Automation Tests

## How to read this map
This table explains **what is covered**, **why it matters (risk)**, **how it is tested**, and **where the evidence lives**
(spec files + written test cases).

**Risk legend**
- **High:** core business flow, blocks usage, or impacts data integrity
- **Medium:** important but with workaround / limited blast radius
- **Low:** cosmetic or low-impact behavior

---

## Coverage Table

| ID | Area / Flow | Risk | What we validate | Test Type | Automated? | Evidence (spec) | Evidence (docs) | Notes / QA decision |
|---|---|---:|---|---|---|---|---|---|
| TC001 | Authentication — Valid login | High | User can authenticate and access dashboard; key navigation visible (PIM) | E2E UI | ✅ Yes | `cypress/e2e/tc001_successful_login.cy.js` | `docs/test-cases/traditional/TC001_*.md` + `docs/test-cases/gherkin/TC001_*.feature` | Core entry point; chosen as first automation due to business criticality |
| TC002 | Authentication — Invalid login | High | Invalid creds are blocked; error message shown; stays on login route | E2E UI | ✅ Yes | `cypress/e2e/tc002_invalid_login.cy.js` | `docs/test-cases/traditional/TC002_*.md` + `docs/test-cases/gherkin/TC002_*.feature` | Negative coverage to validate guardrails and messaging |
| TC003 | PIM — Add employee | High | Create employee with required fields; record is created successfully | E2E UI | ✅ Yes | `cypress/e2e/tc003_add_employee.cy.js` | `docs/test-cases/traditional/TC003_*.md` + `docs/test-cases/gherkin/TC003_*.feature` | CRUD creation is data-integrity critical; automating gives high ROI |
| TC004 | PIM — Search employee | Medium | Employee appears in list/search; search returns expected result | E2E UI | ✅ Yes | `cypress/e2e/tc004_search_employee.cy.js` | `docs/test-cases/traditional/TC004_*.md` + `docs/test-cases/gherkin/TC004_*.feature` | Validates findability after creation and basic filtering behavior |
| TC005 | PIM — Edit employee | High | Update persists after save; edited fields are reflected correctly | E2E UI | ✅ Yes | `cypress/e2e/tc005_edit_employee.cy.js` | `docs/test-cases/traditional/TC005_*.md` + `docs/test-cases/gherkin/TC005_*.feature` | High risk because it changes persisted data; validates update flow |
| TC006 | PIM — Delete employee | High | Deletion removes record; employee no longer visible in list | E2E UI | ✅ Yes | `cypress/e2e/tc006_delete_employee.cy.js` | `docs/test-cases/traditional/TC006_*.md` + `docs/test-cases/gherkin/TC006_*.feature` | Destructive action; validates confirmation + state after delete |

---

## Intentional gaps (manual / future candidates)

These are **valuable** tests, but intentionally excluded from the automated E2E suite to keep scope focused and stable.

| Candidate ID | Area / Flow | Risk | What to validate | Recommended Type | Automated now? | Why not automated (yet) |
|---|---|---:|---|---|---|---|
| M001 | Role-based access / permissions | High | Different roles see different menus/actions; unauthorized actions blocked | Exploratory + API/Contract (if available) | ❌ No | Needs multiple accounts/roles; often better validated via dedicated permission strategy |
| M002 | Form validations (Add Employee) | Medium | Required fields, invalid formats, boundary lengths, inline errors | Component/UI validations + exploratory | ❌ No | Many combinations → can bloat suite; pick 1–2 highest value cases later |
| M003 | File upload (employee photo) | Medium | Upload constraints, preview, persistence, supported types | Exploratory | ❌ No | Flaky in E2E; better as targeted test with controlled fixtures |
| M004 | Search filters (multiple criteria) | Medium | Combined filters, empty state, pagination | Exploratory + targeted E2E | ❌ No | Adds time/maintenance; can be added incrementally if needed |
| M005 | Cross-browser / responsive | Medium | Layout and interaction differences across browsers/devices | Cross-browser run | ❌ No | Out of scope for now; belongs to CI matrix when required |
| M006 | Accessibility smoke | Medium | Basic keyboard nav, labels, contrast (spot-check) | a11y audit | ❌ No | Separate initiative/tooling; not the goal of this repo |

---

## Maintenance rule (keep it simple)
- Every automated TC must have:
  - 1 spec file under `cypress/e2e/`
  - 1 written test case (traditional and/or gherkin) under `/docs/test-cases/`
- When a new TC is added, update this map in the same PR/commit.