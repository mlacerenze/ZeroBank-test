// Nombre del conjunto de pruebas
describe("Test suite - Zero Bank", () =>{

  // Hooks: funciones que nos permiten re utilizar codigo
  beforeEach(() => {
    // runs before each test in the block
    cy.visit("http://zero.webappsecurity.com/index.html") // prueba para validar si la pagina abre
  })

  // Cada it es una prueba independiente
  it("validar pagina de inicio", () =>{
    // cy.visit("http://zero.webappsecurity.com/index.html") // prueba para validar si la pagina abre
    cy.get('.active > img').should("be.visible") // validar si la imagen está visible
    cy.get('.active > .custom > h4').contains("Online Banking") // validar etiqueta
  })

  // Prueba E2E (ent to end)
  it("transferencia de fondos", () =>{
    // cy.visit("http://zero.webappsecurity.com/index.html") // prueba para validar si la pagina abre
    cy.get('#signin_button').click() // click en el boton
    cy.get('#user_login').type("username") // dentro de type se introducen los valores de entrada
    cy.get('#user_password').type("password")
    cy.get('.btn').click()
    cy.get('#transfer_funds_tab > a').click() // me dirijo a la pestaña que quiero realizar la tranferencia
    cy.get('#tf_fromAccountId').select('1') // cuenta origen (savings)
    cy.get('#tf_toAccountId').select('5') // cuenta destino (credit card)
    cy.get('#tf_amount').type('300') // monto de la transferencia
    cy.get('#tf_description').type("Test transfer funds")
    cy.get('#btn_submit').click()
    cy.get('#btn_submit').click()
    cy.get('.alert').contains("You successfully submitted your transaction.") // validar que salga el mensaje de transferencia exitosa
    
  })

  // Prueba para que el usuario pueda interactuar con el "Money Map"
  // it.only() selecciona solo la prueba que tiene la funcion para correr
  it("Prueba - validacion de autorizacion Money Map", () =>{
    // Inicio de sesion
    // cy.visit("http://zero.webappsecurity.com/index.html")
    cy.get('#signin_button').click()
    cy.get('#user_login').type("username") // dentro de type se introducen los valores de entrada
    cy.get('#user_password').type("password")
    cy.get('.btn').click()

    // Valido que la pagina con el mapa sea visible
    cy.get(':nth-child(3) > .dropdown-toggle').should('be.visible')

    // // Accedemos al mapa de dinero
    // cy.get('#money_map_tab > a').click()
    // cy.get('#ext-sprite-1259').should('be.visible') // chequear si esta visible
    // cy.get('#ext-sprite-1349 > tspan').click()
    // cy.get('#ext-sprite-1259').should('not.be.visible') // chequear si no esta visible
    // cy.get('#ext-sprite-1349 > tspan').click()
    // cy.get('#ext-sprite-1259').should('be.visible') // chequear si esta visible
    // // No se puede probar este ejercicio ya que trabaja con ID's dinamicos y estan cambiando con cada refresh

  })
})