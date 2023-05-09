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
      homePage.clickTodolistLick();
    });
    it('agregar 5 tareas',()=>{
      todoListPage.escribirTarea(loginData.test1.tareas.tarea1);
      todoListPage.clickSendTaskButton();
      todoListPage.escribirTarea(loginData.test1.tareas.tarea2);
      todoListPage.clickSendTaskButton();
      todoListPage.escribirTarea(loginData.test1.tareas.tarea3);
      todoListPage.clickSendTaskButton();
      todoListPage.escribirTarea(loginData.test1.tareas.tarea4);
      todoListPage.clickSendTaskButton();
      todoListPage.escribirTarea(loginData.test1.tareas.tarea5);
      todoListPage.clickSendTaskButton();
    });
    it('deberia validar los botones',()=>{
      todoListPage.validarAllButton();
      todoListPage.validarCompletedButton();
      todoListPage.validarActiveButton();
      todoListPage.validarRemoveButton();
    });
    it('permite agregar 2 tareas y completar la ultima tarea ingresada',()=>{
      todoListPage.escribirTarea(loginData.test1.tareas.tarea1);
      todoListPage.clickSendTaskButton();
      todoListPage.escribirTarea(loginData.test1.tareas.tarea2);
      todoListPage.clickSendTaskButton();
      todoListPage.clickCompletedButton();
      todoListPage.clickAllButton();
      todoListPage.borrarTarea2();
  });
    it('permite agregar 2 tareas y completar la primera ingresada',()=>{
      todoListPage.escribirTarea(loginData.test1.tareas.tarea1);
      todoListPage.clickSendTaskButton();
      todoListPage.escribirTarea(loginData.test1.tareas.tarea2);
      todoListPage.clickSendTaskButton();
      todoListPage.clickCompletedButton();
      todoListPage.clickAllButton();
      todoListPage.borrarTarea1();
  });

    it('deberia sacar screen del home page',()=>{
      cy.screenshot('foto del home page')
  })
});