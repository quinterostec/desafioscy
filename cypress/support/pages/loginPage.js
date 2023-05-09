//los nombres de las clases siempre empiezan con Mayuscula
export class LoginPage {
    //vamos a crear un constructor para todos los selectores de usuario , contraseña para el boton de login 
    //el THIS hace referencia a la clase
    //tambien es importante usar  el constructor porque si lo llamamos varias veces al logeo , con que vengamos y cambiemos aca ya estariamos modificando a todos los test sin la necesidad de cambiar uno por uno
    //SOLO HACER CONTRUCTORES CON INFORMACION QUE NO CAMBIA , QUE NO SEA DINAMICO (NOMBRES CAMBIAN , UYSUARIOS CMABIAN ESO NO VA)
    constructor(){
    
            this.usuario ='#user';
            this.contraseña ='#pass';
            this.loginButton ='#submitForm';
        };
    //entonces los metodos van a usar estas variables (this.usuario)que se van a declarar arriba para que quede mejor acomodado
        escribirUsuario (usuario){
            cy.get(this.usuario).type(usuario);
        };
    
        escribircontraseña(contraseña){
            cy.get(this.contraseña).type(contraseña);
    
        };
    
        clickbuttonlogin(){
            cy.get(this.loginButton).click();
    
        };
    };