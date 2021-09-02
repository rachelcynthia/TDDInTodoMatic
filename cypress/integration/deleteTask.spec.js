
describe('Edit and Save the Added Task', () => {
    it('Edits the task in the list', () => {
        cy.visit('http://localhost:3000');

        cy.get('[data-testid="taskText-todo-0"]')
            .invoke('text')
            .then((textToBeDeleted) => {

                cy.get('[data-testid="deleteTaskButton-todo-0"]')
                    .click()

                cy.get('[data-testid="todos"]')
                    .should('not.contain', textToBeDeleted)
            });




    })
});