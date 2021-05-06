<template>
  <div id="app">
    <button type="button" class="btn btn-primary" @click="openChat">
      Abrir modal
    </button>
    <Modal />
  </div>
</template>

<script>
import Modal from './components/Modal.vue'
import {mapMutations, mapActions} from 'vuex';

export default {
  name: 'App',
  components: {
    Modal
  },
  methods: {
    ...mapMutations(['openModal']),
    ...mapActions(['openChat'])
  }
}
</script>

<style>
  @import './assets/styles/styles.css';
</style>