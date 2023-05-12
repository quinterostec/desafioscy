export class ShoppingCartPage {
    constructor(){
        this.checkoutButton = 'Go to Checkout'
    };

    goCheckOut(){
        cy.contains(this.checkoutButton).click();
    };
};