describe ( "API testing", ()=>{
//GET: Obtener información
//POST: Agregar información
//PUT: Reemplazar la información
//PATCH: Actualizar alguna información
//DELETE: Borrar información
    it("hacer una consulta HTTP tipo GET",()=>{

        cy.request('').then(respuesta=>{
            cy.log(respuesta)
            expect(respuesta.status).is.equal(200)
            //afirmamos que esperamos que status sea igual a 200 , es para hacer una asersion 
            //expect(respuesta.status).is.equal(200)
        })

    })
        //en este caso seria lo mismo pero llamamos solo lo que nos interesa de la base de datos , en este caso a "body","status"
        //solo llamamos a esos valores y con una asersion de estatus
        it("hacer una consulta HTTP tipo GET con destructuring", () => {
            cy.request('http://localhost:3000/posts/').then(({ body, status }) => {
                cy.log(body);
                cy.log(status);
                expect(status).is.equal(200);
            });
        })
        //aca lo que estamos haciendo es llamar una variable de la informacion de la base de datos que tenga esa url 
        //con esa query (informacion)poniendo un parametro que es que llamamos un ID que tenga como parametro 5 
        //tambien abajo hicimos una asersion de que el id sea 5 
        //otra asersion del que el titulo sea "titulo 5"
        it("hacer una consulta HTTP tipo GET agregando parametros", () => {
            cy.request({
                method: "GET",
                url: "http://localhost:3000/posts/",
                qs: {
                    id: 5
                }
            }).then((respuesta) => {
                cy.log(respuesta)
                //para acceder al id 5 tenemos que poner primero que paso por body  y que su valor es 0 , es como selectores
                expect(respuesta.body[0].id).is.equal(5);
                expect(respuesta.body[0].title).is.equal("titulo 5");
            })
        })
        it("hacer una consulta HTTP tipo GET ordenando desendente", () => {
            cy.request({
                method: "GET",
                url: "http://localhost:3000/posts/",
                qs: {
                    _sort: 'id',
                    _order: 'desc'
                }
            }).then((respuesta) => {
                cy.log(respuesta)
            })
        })
    //indicamos de que posicion hasta que posicion de nuestros datos va a buscar lo que le pedimos
    //cuando usamos este metodo no nos va a traer el 5 ni el 10 , ya que comienza desde esos y no los cuenta
    //ej: 5 al 10 : 6,7,8,9   (pero no cuenta ni el 5 ni el 10)tendriamos que llamar del 4 al 11 para que  los cuente
        it("hacer una consulta HTTP tipo GET slices", () => {
            cy.request({
                method: "GET",
                url: "http://localhost:3000/posts/",
                qs: {
                    _start: '5',
                    _end: '10'
                }
            }).then((respuesta) => {
                cy.log(respuesta)
            })
        })
        //este metodo si incluye los extremos 5 y 10 pero para que se pueda usar itenen que tener como id valores numericos , como el de arriba
        it("hacer una consulta HTTP tipo GET rangos", () => {
            cy.request({
                method: "GET",
                url: "http://localhost:3000/posts/",
                qs: {
                    id_gte: '5',
                    id_lte: '10'
                }
            }).then((respuesta) => {
                cy.log(respuesta)
            })
        })
        //excluye valores    tambien puede ser uno solo      id_ne : '5'   o dos  id_ne: ['5', '8']
        it("hacer una consulta HTTP tipo GET exlucyendo", () => {
            cy.request({
                method: "GET",
                url: "http://localhost:3000/posts/",
                qs: {
                    id_ne: ['5', '8'],
                    title_ne: ['titulo 7']
                }
            }).then((respuesta) => {
                cy.log(respuesta)
            })
        })

        //aca eliminamos el id 18 para poder agregar otro valor de body con diferente valor
        it("hacer una consulta HTTP tipo POST", () => {
            const id = 18
            cy.request({
                method: "DELETE",
                url: `http://localhost:3000/posts/${id}`,
            }).then((respuesta) => {
                cy.log(respuesta)
            });
    
            cy.request({
                method: "POST",
                url: "http://localhost:3000/posts/",
                body: {
                    "id": id,
                    "title": "titulo 18",
                    "author": "Fabrizio Otranto"
                }
            }).then((respuesta) => {
                cy.log(respuesta)
            })
        })
        //reemplazamos el valor de author  a Fabrizio Otrato
        it("hacer una consulta HTTP tipo PUT", () => {
            cy.request({
                method: "PUT",
                url: "http://localhost:3000/posts/10",
                body: {
                    "id": 10,
                    "title": "titulo 10",
                    "author": "Fabrizio Otranto"
                }
            }).then((respuesta) => {
                cy.log(respuesta)
            })
        })
        it('Deberia agragar, editar, eliminar y verificar que fue eliminado el documento', () => {
            const id = 159
            const author = 'Pushing IT'
            const title = "title"
            cy.request({
                url: 'http://localhost:3000/posts/',
                method: "POST",
                body: {
                    id: id,
                    author: author,
                    title: title
                }
            }).then(respuesta => {
    
                expect(respuesta.status).is.equal(201)
                expect(respuesta.body.id).is.equal(id)
                expect(respuesta.body.title).is.equal(title)
                expect(respuesta.body.author).is.equal(author)
    
                cy.request({
                    method: "PUT",
                    url: `http://localhost:3000/posts/${respuesta.body.id}`,
                    body: {
                        body: {
                            id: respuesta.body.id,
                            author: `${respuesta.body.author} editado`,
                            title: `${respuesta.body.title} editado`
                        }
                    }
                }).then(respuesta2 => {
                    cy.log(respuesta2)
                    expect(respuesta2.status).is.equal(200)
                    expect(respuesta2.body.id).is.equal(id)
                    expect(respuesta2.body.title).is.equal(`${title} editado`)
                    expect(respuesta2.body.author).is.equal(`${author} editado`)
    
                    cy.request({
                        url: `http://localhost:3000/posts/${respuesta2.body.id}`,
                        method: "DELETE"
                    }).then(respuesta3 => {
                        expect(respuesta3.status).is.equal(200)
    
                        cy.request({
                            method: 'GET',
                            url: `http://localhost:3000/posts/${id}`,
                            failOnStatusCode: false
                        })
                    }).then(respuesta => {
                        expect(respuesta.status).is.equal(404)
                    })
                })
            })
        });
        it.only('Deberia iniciar sesion en pushingIT utilizando request', () => {
            cy.request({
                url: "https://pushing-it-backend.herokuapp.com/api/login",
                method: 'POST',
                body: {
                    username: 'pushingit',
                    password: '123456!'
                }
            }).then(respuesta => {
                window.localStorage.setItem('token', respuesta.body.token);
                window.localStorage.setItem('user', respuesta.body.user.username);
            })
    
            cy.visit('')
        })
        
    
    
})