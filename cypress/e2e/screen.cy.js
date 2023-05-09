/// <reference types="cypress" />

import { LoginPage } from '../support/pages/loginPage'
import { HomePage } from '../support/pages/homePage';
import { TodoListPage } from '../support/pages/todoListpage';


describe('pages objet model', () => {

  let loginData;
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const todoListPage = new TodoListPage();

    before('before',()=>{

      cy.fixture('fixtureSuite').then(data =>{
        loginData = data ;

    });

    });
    beforeEach('BeforeEach',()=>{
      cy.visit('');
      homePage.clickRegister()
      loginPage.escribirUsuario(loginData.test1.usuario.username);
      loginPage.escribircontraseña(loginData.test1.usuario.contraseña);
      loginPage.clickbuttonlogin();
    });
    it('deberia sacar screen del home page',()=>{
        cy.screenshot('foto del home page');
    });
    it('deberia sacar screen a los botones del home page',()=>{
        cy.get('[class="css-lbapbk"]').screenshot('botones del home page');
    });

});
//escribviendo npm test ya corre  cypress