import PIM from "../../pages/PIM";

describe("PIM - Successfully Add Employee", () => {
    it("should successfully add an employee", () => {
        cy.login();

        const suffix = Date.now();
        const firstName = `Samuel${suffix}`;
        const lastName = `Costa`;    
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
    });
});