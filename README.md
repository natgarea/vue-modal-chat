# vue-modal-chat

## Preparación
```
git clone https://github.com/natgarea/vue-modal-chat.git
cd vue-modal-chat
npm install
```

### Ejecutar
```
npm run serve
```

### Ejecutar
```
npm run build
```

### Ejecutar tests
```
npm run test:unit
npm run test:e2e
```
En el caso de cypress cuando se abra la ventana correspondiente habrá que hacer doble click en 'test.spec.js' para que se ejecute.

## Notas

### Herramientas adicionales
- [Vuex](https://vuex.vuejs.org/) - para state management
- [Chai](https://www.chaijs.com/) - para un test de una función del store de Vuex
- [Cypress](https://www.cypress.io/) - para un test e2e
- Librería [Moment.js](https://momentjs.com/) - formatear y mostrar fechas y horas

### Suposiciones realizadas
- Se abre el modal a través de un botón.
- Se cierra a través de la 'x' en la esquina superior derecha.

### Posibles mejoras
- Tipografía, iconos, medidas, detalles como el triángulo que hace parece el mensaje un bocadillo que sale del icono de usuario.
- Aplicar TDD y tener tests unitarios de los componentes.

### Otros
Hice un [primer intento](https://github.com/natgarea/vue-primer-intento) que incluía [Bootstrap Vue](https://bootstrap-vue.org/) pero como no lo conozco mucho, decidí que acabaría usando simplemente [Bootstrap](https://getbootstrap.com/).