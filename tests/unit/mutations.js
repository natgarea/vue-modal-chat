// mutations.js
export const mutations = {
    setMessage: (state) => {
        state.messages.push({
          "attachment":false,
          "user":"student",
          "logged_as_user":true,
          "timestamp": new Date(),
          "content":state.messageContent});
        state.messageContent = '';
      }
}