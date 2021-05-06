<template>
  <div id="modalContent"
    :class="isModalVisible ? 'modal fade show d-block' : 'modal hide d-none'"
    tabindex="-1"
    role="dialog"
    aria-labelledby="modalContentLabel"
    :aria-hidden="!isModalVisible">
    <div class="modal-dialog modal-lg" role="document">
      <Chat />
    </div>
  </div>
</template>

<script>
  import Chat from '@/components/Chat'
  import {mapState} from 'vuex';

  export default {
    components: {
      Chat
    },
    name: 'Modal',
    computed: {
      ...mapState(['isModalVisible']),
    },
  }
</script>