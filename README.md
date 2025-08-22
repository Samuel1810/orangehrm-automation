# OrangeHRM Cypress Automation Tests

This project contains End-to-End automated tests using [Cypress](https://www.cypress.io/) for the [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com/) website.

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
git clone https://github.com/your-username/orangehrm-cypress-tests.git
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
