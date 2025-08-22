import PIM from "../../pages/PIM";

describe("PIM - Delete Employee", () => {
    it("should successfully delete an employee", () => {
        cy.login();
        
        const suffix = Date.now();
        const firstName = `Samuel${suffix}`;
        const lastName = `Costa`;    
        const fullName = `${firstName} ${lastName}`;
        const empId = `${Date.now().toString().slice(-9)}`; 
        
        PIM.open().should('be.visible').click();
        PIM.addEmployee().should('be.visible').click();

        cy.intercept('POST', '**/api/v2/pim/employees*').as('addEmployee');
        
        PIM.firstName().type(firstName);
        PIM.lastName().type(lastName);
        PIM.setEmployeeId(empId);

        PIM.saveButton().should('be.visible').click();

        cy.wait('@addEmployee')
            .its('response.statusCode')
            .should('be.oneOf', [200, 201]);

        PIM.successMessage().should('exist');
        PIM.detailsHeader().should('be.visible');
        cy.url().should('include', '/pim/viewPersonalDetails');

         PIM.employeeList().click();
        
        cy.intercept('GET', '**/api/v2/pim/employees*').as('searchEmployee');

        PIM.employeeNameFilterInput().should('be.visible').clear().type(fullName);
        PIM.employeeNameDropdown().should('be.visible');
        PIM.selectEmployeeNameOption(fullName).should('be.visible').click();

        PIM.searchEmployeeButton().should('be.visible').click();

        cy.wait('@searchEmployee')
            .its('response.statusCode')
            .should('eq', 200);
            
        PIM.recordFound().should('be.visible');
        PIM.noRecordFound().should('not.exist');

        PIM.tableBody().should('be.visible');
        PIM.rowByName(empId, fullName)
            .should('be.visible')
            .should('contain.text', fullName);

        PIM.deleteEmployeeButton(empId, fullName)
            .should('be.visible')
            .click();

        cy.intercept('DELETE', `**/api/**/pim/**/employees*`).as('deleteEmployee');

        PIM.confirmDeleteButton()
            .should('be.visible')
            .click();

        cy.wait('@deleteEmployee')
            .its('response.statusCode')
            .should('be.oneOf', [200, 202, 204]);

        PIM.successDeleteMessage().should('exist');

        PIM.employeeNameFilterInput().should('be.visible').clear().type(fullName);

        cy.intercept('GET', '**/api/v2/pim/employees*').as('searchAfterDelete');

        PIM.searchEmployeeButton().should('be.visible').click();

        cy.wait('@searchAfterDelete')
            .its('response.statusCode')
            .should('eq', 200);

        PIM.noRecordFound().should('be.visible');
    });
});