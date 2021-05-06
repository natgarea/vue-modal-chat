<template>
    <div class="modal-content">
      <Header />
      <Body />
      <Footer />
    </div>
</template>

<script>
  import Header from '@/components/Chat/Header'
  import Body from '@/components/Chat/Body'
  import Footer from '@/components/Chat/Footer'


  export default {
    components: {
      Header,
      Body,
      Footer
    },
    name: 'Chat'
  }
</script>