export class TodoListPage {
    constructor(){
        this.taskInput ='#task';
        this.sendtaskButton = '#sendTask';
        this.completedButton = '#completed';
        this.allButton = '#all';
    };

    escribirTarea(tarea){
        cy.get(this.taskInput).type(tarea);
    }

    clickSendTaskButton(){
        cy.get(this.sendtaskButton).click();
    };

    completarTarea(tarea){
        cy.contains(tarea).click();
    };
    clickCompletedButton(){
        cy.get(this.completedButton).click();
    };

    returntarea(tarea){
       return cy.contains(tarea);
    };

    clickAllButton(){
        cy.get('#all').click();
    }
    borrarTarea1(){
        
        cy.get(':nth-child(1) > .css-vuy1kp > .chakra-button').click();
    }

    borrarTarea2(){
        cy.get(':nth-child(2) > .css-vuy1kp > .chakra-button').click();
    }

    validarAllButton(){
        cy.get('#all').should('exist');
    }
    validarCompletedButton(){
        cy.get('#completed').should('exist');
    }

    validarActiveButton(){
        cy.get('#active').should('exist');
    }

    validarRemoveButton(){
        cy.get('#removeAll').should('exist');
    }
};