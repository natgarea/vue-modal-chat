// mutations.spec.js
import { expect } from 'chai'
import { mutations } from './mutations'

const { setMessage } = mutations

describe('mutations', () => {
  it('Añadir mensaje a historial', () => {
    const state = { 
        // 'historial'
        messages: [],
        // contenido enviado
        messageContent: 'He pasado el test.'
    }

    setMessage(state);
    /* usamos la fecha que genera
    // dado que queremos ver que genera un obj completo
    // con el contenido enviado en 'messageContent' */
    let date = state.messages[0].timestamp;
    
    let expectedResult = {
        "attachment": false,
        "user":"student",
        "logged_as_user": true,
        "timestamp": date,
        "content": 'He pasado el test.'
    }

    expect(state.messages[0]).to.not.be.undefined;
    expect(state.messages[0]).to.deep.include(expectedResult);
  })
})