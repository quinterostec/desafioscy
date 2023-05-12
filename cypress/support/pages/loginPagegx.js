export class LoginPagegx {
    constructor(){
        this.usernameImput = '#user'
        this.passwordImput = '#pass'
        this.loginButton = '#submitForm'
    };

    escribirUsuario(usuario){
        cy.get(this.usernameImput).type(usuario)
    };
    escribirConstraseña(contraseña){
        cy.get(this.passwordImput).type(contraseña)
    };
    clickLoginButton(){
        cy.get(this.loginButton).click();
    };
};