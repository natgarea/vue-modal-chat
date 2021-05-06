import Vue from 'vue'
import Vuex from 'vuex'
import preloadedMessages from '@/assets/data/messages.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages: [],
    newMessage: {},
    messageContent: '',
    isModalVisible: false
  },
  mutations: {
      loadMessages(state, messagesAction) {
        state.messages = messagesAction;
      },
      setMessage(state) {
        state.messages.push({
          "attachment":false,
          "user":"student",
          "logged_as_user":true,
          "timestamp": new Date(),
          "content":state.messageContent});
        state.messageContent = '';
      },
      updateContent (state, content) {
        state.messageContent = content
      },
      openModal (state) {
        state.isModalVisible = true;
      },
      closeModal (state) {
        state.isModalVisible = false;
      }
  },
  actions: {
    getMessages: function({ commit }) {
      commit('loadMessages', preloadedMessages)
    },
    sendMessage: function({ commit, state }) {
      commit('setMessage', state.messageContent)
    },
    openChat: function({ commit, state }) {
      commit('openModal', state.isModalVisible)
    },
    closeChat: function({ commit, state }) {
      commit('closeModal', state.isModalVisible)
    }
  },
  modules: {
  }
})