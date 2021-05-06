// test.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('E2E test', () => {
    it('Visualizar botón para abrir modal', () => {
      cy.visit('http://localhost:8080/')
      cy.contains('button', 'Abrir modal')
    })

    it('Abrir el modal', () => {
      // Hace click para abrir modal
      cy.get('div#app > button[type="button"]').click()
    })

    it('Visualizar mensajes y entregas', () => {
      // Busca cabecera comentarios
      cy.get('.modal-header').contains('Comentarios')
      // Busca un comentario del alumno
      cy.get('.modal-body').contains('Buenas tardes, acabo de subir el primer archivo con el caso práctico, espero revisión.')
      // Busca un comentario del tutor
      cy.get('.modal-body').contains('¡Gran trabajo Silvia! Pero creo que deberías revisar el punto 3. Intenta añadir un poco más de contexto y un apartado final de conclusiones personales.')
      // Busca un comentario del alumno
      cy.get('.modal-body').contains('Título del archivo a subir 2.pdf')
    })

    it('Escribir, enviar y visualizar un mensaje', () => {
      // Escribe texto
      cy.get('input').type('Hola mundo')
      // Envía texto haciendo click en la flecha
      cy.get('.chat-arrow').click()
      // Visualiza texto enviado en pantalla
      cy.get('.modal-body').contains('Hola mundo')
    })


    it('Cierra el modal haciendo click en la X', () => {
      // Cierra el modal
      cy.get('.close').click()
      // No se visualiza el modal
      cy.get('.modal').not
    })
  })
  