
describe('Edit and Save the Added Task', () => {
    it('Edits the task in the list', () => {
        cy.visit('http://localhost:3000');

        cy.get('[data-testid="editTaskButton-todo-1"]')
            .click();

        cy.get('[data-testid="editTaskText-todo-1"]')
            .invoke('val', '')

        cy.get('[data-testid="editTaskText-todo-1"]')
            .type('Edited Task here!');

        cy.get('[data-testid="submitEditedTask-todo-1"]')
            .click();

        cy.contains('Edited Task here!');


    })
});

describe('Edit and Cancel the Added Task', () => {
    it('Edits the task in the list', () => {
        cy.visit('http://localhost:3000');

        cy.get('[data-testid="taskText-todo-1"]')
            .invoke('text')
            .then((previousText) => {

                cy.get('[data-testid="editTaskButton-todo-1"]')
                    .click();


                cy.get('[data-testid="editTaskText-todo-1"]')
                    .invoke('val', '')

                cy.get('[data-testid="editTaskText-todo-1"]')
                    .type('Edited Task here!');

                cy.get('[data-testid="cancelEditedTask-todo-1"]')
                    .click();

                cy.get('[data-testid="taskText-todo-1"]')
                    .invoke('text')
                    .should((canclledText) => {
                        expect(previousText).to.eq(canclledText);
                    })
            });
    });
});