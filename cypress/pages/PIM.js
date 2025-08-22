class PIM  {
    // Navigation methods for PIM page
    open() {
        return cy.contains('span', 'PIM');
    }

    addEmployee() {
        return cy.contains('a', 'Add Employee');
    }

    employeeList() {
        return cy.contains('a', 'Employee List');
    }

    // Form add employee
    firstName() {
        return cy.get('input[name="firstName"]');
    }

    middleName() {
        return cy.get('input[name="middleName"]');
    }

    lastName() {
        return cy.get('input[name="lastName"]');
    }

    employeeId() {
        return cy.contains('label', 'Employee Id')
                .closest('.oxd-input-group')
                .find('input');
    }

    setEmployeeId(id) {
        this.employeeId()
            .invoke('attr', 'autocomplete', 'off') 
            .clear()
            .type(id, { delay: 0 })
            .should('have.value', id)
            .blur(); 
    }

    saveButton() {
        return cy.contains('form button[type="submit"]', 'Save');
    }

    // Feedback methods
    successMessage() {
        return cy.contains('.oxd-toast--success', 'Successfully Saved', { timeout: 10000 });
    }

    detailsHeader() {
        return cy.contains('.orangehrm-main-title', 'Personal Details', { timeout: 10000 });
    }

    // Search Employee methods
    employeeNameFilterInput() {
        return cy.contains('label', 'Employee Name')
            .closest('.oxd-input-group')
            .find('input');
    }

    employeeNameDropdown() {
        return cy.get('.oxd-autocomplete-dropdown', { timeout: 10000 });
    }

    selectEmployeeNameOption(fullName) {
        return this.employeeNameDropdown()
            .contains('.oxd-autocomplete-option', fullName);
    }

    searchEmployeeButton() {
        return cy.get('.oxd-form-actions')
            .contains('button', 'Search');
    }

    tableBody() {
        return cy.get('.oxd-table-body', { timeout: 10000 });
    }

    
    rowByName(empId, fullName) {
        const pattern = new RegExp(fullName.replace(/\s+/g, '\\s+'), 'i');

        return this.tableBody()
            .contains('.oxd-table-row', empId)
            .filter((_, el) => pattern.test(el.innerText))
            .first();  
    }

    actionCell(empId, fullName) {
        return this.rowByName(empId, fullName)
            .find('.oxd-table-cell-actions');
    }

    // Feedback methods for search
    resultContainer() {
        return cy.get('.orangehrm-paper-container', { timeout: 10000 });
    }

    recordFound() {
        return this.resultContainer()
            .contains('.oxd-text', /records?\s+found/i);
    }

    noRecordFound() {
        return this.resultContainer()
            .contains('.oxd-text', 'No Records Found');
    }

    // Edit Employee methods
    editEmployeeButton(empId, fullName) {
        return this.actionCell(empId, fullName)
            .find('button')
            .filter((_, btn) => btn.querySelector('i[class*="bi-pencil"]'))
            .first();
    }

    firstNameEditEmployee() {
        return cy.get('input[name="firstName"]');
    }

    successUpdateMessage() {
        return cy.contains('.oxd-toast--success', 'Successfully Updated', { timeout: 10000 });
    }

    // Delete Employee methods
    deleteEmployeeButton(empId, fullName) {
        return this.actionCell(empId, fullName)
            .find('button')
            .filter((_, btn) => btn.querySelector('i[class*="bi-trash"]'))
            .first();
    }

    confirmDeleteButton() {
        return cy.get('.orangehrm-modal-footer')
            .contains('button', 'Yes, Delete');
    }

    successDeleteMessage() {
        return cy.contains('.oxd-toast--success', 'Successfully Deleted', { timeout: 10000 });
    }
}

export default new PIM();