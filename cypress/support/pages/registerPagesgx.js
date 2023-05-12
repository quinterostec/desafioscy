export class RegisterPage{
    constructor(){
        this.iniciarSesionLink = '#registertoggle'
    };


    dblClickIniciarSesion(){
        cy.get(this.iniciarSesionLink).dblclick();
    };
};