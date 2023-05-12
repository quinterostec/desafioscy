/// <reference types="cypress" />
import { RegisterPage } from "../support/pages/registerPagesgx";
import { LoginPagegx } from "../support/pages/loginPagegx";
import { HomePagegx } from "../support/pages/homePagegx";
import { ProductsPage } from "../support/pages/productsPage";
import { ShoppingCartPage } from "../support/pages/shoppingCartPage";
import { CheckoutPage } from "../support/pages/checkoutPage";

const constantes = require('../support/pages/constantes')
    describe('GX-4499',()=>{

        let datos ;
        const registerPagesgx = new RegisterPage();
        const loginPagegx = new LoginPagegx();
        const homePagegx = new HomePagegx(); 
        const productsPage = new ProductsPage();
        const shoppingCartPage = new ShoppingCartPage();
        const checkoutPage = new CheckoutPage();

        before('setear los datos',()=>{
            cy.fixture('GX-4499').then(data =>{
            datos = data;
        });

    });

    beforeEach('Precondiciones',()=>{
        cy.visit('');
        registerPagesgx.dblClickIniciarSesion();
        loginPagegx.escribirUsuario(constantes.CREDENCIALES.USUARIO);
        loginPagegx.escribirConstraseña(constantes.CREDENCIALES.CONSTRASEÑA);
        loginPagegx.clickLoginButton();
        homePagegx.clickOnlineShopLink();
        productsPage.agregarProducto(datos.producto.nombre1);
        productsPage.cerrarModelButton();
        productsPage.goshoppingCartButton();
        productsPage.validarText();
        shoppingCartPage.goCheckOut();
        checkoutPage.escribirNombre(datos.checkout.nombre);
        checkoutPage.escribirApellido(datos.checkout.apellido);
        checkoutPage.escribirNumeroTarjeta(datos.checkout.numeroTarjeta)
        checkoutPage.clickPurchaseButton();
        //pusimos el valor (el texto del error )del error en contantes
        checkoutPage.getErrorMessage().should('have.text', constantes.MENSAJESERROR.LIMITE_CARACTERS_CHECKOUT);
    });
    it('deberia validar el error',()=>{
        cy.log('aa')
    });
    



});