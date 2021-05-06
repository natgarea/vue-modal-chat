<template>
    <div class="modal-footer col-md-12">
      <!-- <form role="form" class="m-0"> -->
        <div class="container-fluid">
          <div class="row d-flex">
            <div class="col-11">
            <input class="form-control" type="text" v-model="messageContent" />
            </div>
            <div class="col">
              <img @click="sendMessage" 
              src="../../../assets/icons/blue_arrow_right.svg" class="align-self-center chat-arrow" />
            </div>
          </div>
        </div>
      <!-- </form> -->
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