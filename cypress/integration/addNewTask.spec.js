describe('Creating a task',()=>{
    it('Displays the task in the list',()=>{
        cy.visit('http://localhost:3000');
        
        cy.get('[data-testid="newTaskText"]')
        .type('New Task to be added');

        cy.get('[data-testid="submitNewTask"]')
        .click();

        cy.get('[data-testid="newTaskText"]')
        .should('have.value','');

        cy.contains('New Task to be added')
    })
})