export class ProductsPage {

     constructor(){
        this.closeModalButton = '#closeModal'
        this.shoppingCartButton ='#goShoppingCart'
     }


    agregarProducto(producto){
//hicimos el comando con variable para que podamos poner cualquier tipo de producto y pueda variar el test sin tener que hacer un test de cada producto
//los distintos productos estan en el fixture
        cy.get(`[value='${producto}']`).click();
    
    };

    cerrarModelButton(){
        cy.get(this.closeModalButton).click();
    };
    
    goshoppingCartButton(){
        cy.get(this.shoppingCartButton).click();
    }

    /*validarText (){
        cy.get('#productName').invoke('text').then(texto => {
           assert.equal(texto, 'White Pants');
        });
    };*/
    validarText() {
        cy.get('#productName').should('have.text', 'White Pants')
    };

};