import PIM from '../../pages/PIM';

describe('PIM - Edit Employee', () => {
    it('should edit and update first name of an employee', () => {
        cy.login();
        
        const suffix = Date.now();
        const firstName = `Samuel${suffix}`;
        const lastName = `Costa`;    
        const fullName = `${firstName} ${lastName}`;
        const empId = `${Date.now().toString().slice(-9)}`; 
        
        PIM.open().click();
        PIM.addEmployee().click();

        cy.intercept('POST', '**/api/v2/pim/employees*').as('addEmployee');
        
        PIM.firstName().type(firstName);
        PIM.lastName().type(lastName);
        PIM.setEmployeeId(empId);

        PIM.saveButton().click();

        cy.wait('@addEmployee')
            .its('response.statusCode')
            .should('be.oneOf', [200, 201]);

        PIM.successMessage()
            .should('exist');
        PIM.detailsHeader()
            .should('be.visible');
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
        
        PIM.editEmployeeButton(empId, fullName)
            .should('be.visible')
            .click();

        PIM.detailsHeader()
            .should('be.visible');
        cy.url().should('include', '/pim/viewPersonalDetails')

        const newFirst = `QA_${suffix.toString().slice(-4)}`;

        PIM.firstNameEditEmployee()
            .should('be.visible')
            .clear()
            .type(newFirst);

        PIM.firstNameEditEmployee()
            .should('have.value', newFirst);

        cy.intercept('PUT', '**/api/v2/pim/employees/**/personal-details*').as('updateEmployee');

        PIM.saveButton()
            .should('be.visible')
            .click();

        cy.wait('@updateEmployee')
            .its('response.statusCode')
            .should('be.oneOf', [200, 201]);
        
        PIM.successUpdateMessage()
            .should('exist');

        PIM.firstNameEditEmployee()
            .should('have.value', newFirst);
    });
});