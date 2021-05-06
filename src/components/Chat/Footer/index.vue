<template>
    <div class="modal-footer">
      <form>
        <input type="text" v-model="messageContent" />
      </form>
      
        <img @click="sendMessage" src="../../../assets/icons/blue_arrow_right.svg" class="align-self-center chat-picture" />
      
    </div>
</template>

<script>
  import {mapMutations, mapActions} from 'vuex';

  export default {
    name: 'Footer',
    computed: {
      messageContent: {
        get () {
          return this.$store.state.messageContent
        },
        set (value) {
          this.$store.commit('updateContent', value)
          console.log(this.messageContent)
        }
      }
    },
    methods: {
      ...mapMutations(['setMessage', 'loadMessages']),
      ...mapActions(['sendMessage', 'getMessages']),
        updateContent(e) {
          this.$store.commit("updateContent",e.target.value);
        }
    },
    updated() {
      this.getMessages()
    }

  }
</script>