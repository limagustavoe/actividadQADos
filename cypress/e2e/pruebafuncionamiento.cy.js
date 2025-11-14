function generarEmailRandom() {
  const tiempoActual = Date.now()
  return `test${tiempoActual}@gmail.com`
}

function generarCUITRandom() {
  // Genera un CUIT Argentino válido
  const prefijos = [20, 23, 24, 27, 30, 33, 34]
  const dni = Math.floor(Math.random() * 90000000) + 10000000
  const prefijo = prefijos[Math.floor(Math.random() * prefijos.length)]
  const cuitBase = `${prefijo}${dni}`
  const pesos = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2]
  let suma = 0

  for (let i = 0; i < pesos.length; i++) {
    suma += parseInt(cuitBase[i], 10) * pesos[i]
  }

  let verificador = 11 - (suma % 11)
  if (verificador === 11) verificador = 0
  else if (verificador === 10) verificador = 9

  return `${prefijo}-${dni}-${verificador}`
}

function generarTelefonoRandom() {
  // Genera un Numero de Telefono de 10 dígitos
  const numeroTelefono = Math.floor(Math.random() * 9000000000) + 1000000000;
  return numeroTelefono.toString()
}

describe("Prueba de Funcionamiento", () => {
  beforeEach(() => {

    cy.visit("https://ticketazo.com.ar/auth/registerClient")
    
  })
it("Registro bad", ()=> {
      const emailRandom = generarEmailRandom()
      const cuitRandom = generarCUITRandom()
      const telefonoRandom = generarTelefonoRandom()
    cy.fixture("register.bad").then((user) => {
      cy.get('[data-cy="input-razon-social"]').type(user.razonSocial)
      cy.get('[data-cy="input-cuit"]').type(cuitRandom)
    
      cy.get('[data-cy="select-provincia"]')
        .click()
        .type(`${user.provincia}{enter}`)
    
      cy.get('[data-cy="select-localidad"]')
        .click()
        .type(`${user.localidad}{enter}`)
    
      cy.get('[data-cy="input-direccion"]').type(user.direccion)
      cy.get('[data-cy="input-telefono"]').type(telefonoRandom)
    
      cy.get('[data-cy="input-email"]').type(emailRandom)
      cy.get('[data-cy="input-confirmar-email"]').type(emailRandom)
    
      cy.get('[data-cy="input-password"]').type(user.password)
      cy.get('[data-cy="input-repetir-password"]').type(user.repetirPassword)
      cy.get('input[data-react-aria-pressable="true"]').check({ force: true })
      cy.get('[data-cy="btn-registrarse"]').click()
    })
})
})
