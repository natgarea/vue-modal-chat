<template>
    <div class="modal-body">
      <div v-for="(message, index) of messages" :key="index">
        <Message :message="message" :index="index"/>
      </div>
    </div>
</template>

<script>
  import Message from '@/components/Chat/Body/Message.vue'
  import {mapState, mapMutations, mapActions} from 'vuex';

  export default {
    components: {
      Message
    },
    name: 'Body',
    computed: {
      ...mapState(['messages']),
      sortedMessages (state) {
        return state.messages.sort((x, y) => x.timestamp - y.timestamp);
      }
    },
    methods: {
      ...mapMutations(['loadMessages']),
      ...mapActions(['getMessages'])
    },
    created() {
      this.getMessages()
    }
  }
</script>