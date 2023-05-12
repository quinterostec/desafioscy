export class HomePagegx {
    constructor(){
        this.onlineShopLink = '#onlineshoplink';
    };
    clickOnlineShopLink(){
        cy.get(this.onlineShopLink).click();
    };
};

