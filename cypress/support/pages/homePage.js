export class HomePage {
    constructor(){
        this.todoListLink = '#todolistlink'
        this.register='#registertoggle'
    }

    clickTodolistLick(){
        cy.get(this.todoListLink).click();
    }
    clickRegister(){
        cy.get(this.register).dblclick();
    }

}