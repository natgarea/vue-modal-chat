import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Body from '@/components/Chat/Body/index.vue'

describe('Body', () => {
    let wrapper;
    beforeEach( () => {
        wrapper = shallowMount(Body, {
        })
    })

    it('renderiza el componente', () => {
        expect(wrapper.exists()).toBe(true);
    })





/*   it('renderiza mensajes cuando se le pasan', () => {
    
    
    // const msg = [{
    //     "attachment":false,
    //     "user":"student",
    //     "logged_as_user":true,
    //     "timestamp":"May 6, 2021 21:00:00",
    //     "content":"Mensaje de prueba."
    //  }]
    const wrapper = shallowMount(Body, {})
    expect(wrapper.text()).to.include(msg)
  }) */

//   it('establece los datos correctos por defecto', () => {
//     expect(typeof Body.data).toBe('function')
//     expect(Body.computed.messages).to.be.an('array')
//   })
})
