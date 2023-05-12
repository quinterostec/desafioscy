export class CheckoutPage{
    constructor(){
        this.nombreInput = '#FirstName',
        this.apellidoInput = '#lastName',
        this.numeroTarjetaInput = '#cardNumber',
        this.purchaseButton = 'Purchase'
        this.errorMessage = '#errorMessage'
    }
    //cy.contains(this.checkoutButton).click();
    escribirNombre(nombre){
        cy.get(this.nombreInput).type(nombre);
    };
    escribirApellido(apellido){
        cy.get(this.apellidoInput).type(apellido);
    };
    escribirNumeroTarjeta(tarjeta){
        cy.get(this.numeroTarjetaInput).type(tarjeta);
    };
    clickPurchaseButton(){
        cy.contains(this.purchaseButton).click()
    };

    getErrorMessage(){
       return cy.get(this.errorMessage);
    }
};