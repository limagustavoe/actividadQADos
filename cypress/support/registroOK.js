Cypress.Commands.add("registroOk", (emailRandom, cuitRandom, telefonoRandom) => {
    cy.fixture("register.bad").then((user) => {
    
      cy.get('[data-cy="input-razon-social"]').type(user.razonSocial) //input-razon-social

      cy.get('[data-cy="input-cuit"]').type(cuitRandom)

      cy.get('[data-cy="select-provincia"]')
        .click()
        .type(`${user.provincia}{enter}`)

      cy.get('[data-cy="select-localidad"]')
        .click()
        .type(`${user.localidad}{enter}`)

      cy.get('[data-cy="input-direccion"]').type(user.direccion)
      cy.get('[data-cy="input-telefono"]').type(telefonoRandom)

      cy.get('[data-cy="input-email"]').type(emailRandom);
      cy.get('[data-cy="input-confirmar-email"]').type(emailRandom)

      cy.get('[data-cy="input-password"]').type(user.password)
      cy.get('[data-cy="input-repetir-password"]').type(user.repetirPassword)
      cy.get('input[data-react-aria-pressable="true"]').check({ force: true })
      cy.get('[data-cy="btn-registrarse"]').click()
    })

})
