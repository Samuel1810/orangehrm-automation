# OrangeHRM Cypress Automation Tests

This repository showcases End-to-End automated tests built with [Cypress](https://www.cypress.io/)
to validate critical business flows of the [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com/) application.

---

## Why this project exists
This project exists to demonstrate my approach as a QA Engineer when validating a real-world HR management system.
Instead of focusing on quantity, the goal is to showcase **test design, documentation, and conscious automation decisions**
using Cypress and JavaScript.

## What this project proves
- **Risk-based test design:** scenarios focus on core business flows (authentication and employee management via PIM).
- **Documentation-first QA mindset:** every automated test is backed by written test cases
  (traditional and Gherkin), available under `/docs/test-cases/`.
- **Automation as a tool, not a goal:** only high-value, stable scenarios were automated to maximize ROI.
- **Maintainable E2E structure:** clear test naming, reusable patterns, and fast local execution.

  > **Evidence:** Automated specs, Gherkin scenarios, and traditional test cases are all linked and maintained together.
  
  > **📌 Coverage** Map: see [`docs/coverage/coverage-map.md`](docs/coverage/coverage-map.md)


## Out of scope (intentional)
To keep the project focused and realistic, the following were intentionally left out:
- Full regression coverage of all OrangeHRM modules.
- Cross-browser and mobile testing.
- Performance, security, and accessibility testing.
- Complex edge cases unrelated to the main business flows.
- Exploratory testing sessions and usability assessments (typically executed manually).

These areas could be explored in a different type of test initiative, depending on project needs.

---

## Implemented Scenarios

### ✅ Positive
- **TC001 — Successful Login**
  - Valid credentials (`Admin / admin123`) → dashboard visible; PIM menu present.
- **TC003 — Successfully Add Employee**
  - PIM → Add Employee → fill data → Save → appears in list.
- **TC004 — Search Employee**
  - PIM → Employee List → search by name → result listed.
- **TC005 — Edit Employee**
  - Employee List → edit → update field(s) → save → change persists.
- **TC006 — Delete Employee**
  - Employee List → select employee → delete → confirm → not listed.

### ❌ Negative
- **TC002 — Invalid Login**
  - Wrong credentials → error “Invalid credentials” → stays on `/auth/login`.

---

## Test Case Documentation
Besides automated specs in `cypress/e2e/`, we keep written test cases under `docs/test-cases/`:
- `docs/test-cases/gherkin/` → BDD (Given/When/Then)
- `docs/test-cases/traditional/` → step-by-step

> Tip: link each doc to its spec, e.g.  
> `🔗 Automated: [tc001_successful_login.cy.js](cypress/e2e/tc001_successful_login.cy.js)`

---

## Requirements
- **Node.js** (LTS version recommended)  
- **Cypress** installed locally or globally  

---

## Project Structure
    cypress/
    e2e/
    tc001_successful_login.cy.js
    tc002_invalid_login.cy.js
    tc003_add_employee.cy.js
    tc004_search_employee.cy.js
    tc005_edit_employee.cy.js
    tc006_delete_employee.cy.js
    fixtures/
    pages/ # 
    support/
    docs/
    test-cases/
    gherkin/
    traditional/
    cypress.config.js
    cypress.env.json
    package.json

---

## Test Data
- **Valid Username:** `Admin`  
- **Valid Password:** `admin123`  
- **Sample Employee:**  
  - First Name: `Samuel`  
  - Last Name: `Costa`  
  - Employee ID: auto-generated  

---

## How to Run

### 1. Clone the repository
```bash
git clone https://github.com/Samuel1810/orangehrm-automation.git
cd orangehrm-cypress-tests
```
### 2. Install dependencies
    npm install
### 3. Create cypress.env.json for local creds
    { "username": "Admin", "password": "admin123" }
### 4. Open Cypress Test Runner (interactive)
    npx cypress open
### 5. Run tests in headless mode
    npx cypress run
### 6. Run a single spec in headless mode
    npx cypress run --spec "cypress/e2e/tc001_successful_login.cy.js"

### NPM Scripts
```json
{
    "scripts": {
        "cy:open": "cypress open",
        "cy:run": "cypress run"
    }
}
```
