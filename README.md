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
- Vuex - para state management
- Chai - para un test de una función del store de Vuex
- Cypress - para un test e2e
- Librería Moment.js - formatear y mostrar fechas y horas

### Suposiciones realizadas
- Se abre el modal a través de un botón.
- Se cierra a través de la 'x' en la esquina superior derecha.

### Posibles mejoras
- Tipografía, iconos, medidas, detalles como triángulo que hace parece el mensaje un bocadillo que sale del icono de usuario.
- Aplicar TDD y tener tests unitarios de los componentes.