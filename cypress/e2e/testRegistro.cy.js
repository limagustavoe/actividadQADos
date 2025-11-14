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

describe("Actividad_dos", () => {
  beforeEach(() => {
    cy.visit("https://ticketazo.com.ar/auth/registerClient");
  })
})
it("Error de registro ", () => {
  //Varialbles Random
  const emailRandom = generarEmailRandom()
  const cuitRandom = generarCUITRandom()
  const telefonoRandom = generarTelefonoRandom()
  cy.registroBad(emailRandom, cuitRandom, telefonoRandom)
})
