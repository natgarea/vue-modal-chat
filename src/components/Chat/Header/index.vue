<template>
    <div class="modal-header">
        <div class="container">
            <div class="row">
                <div class="col"></div>
                <div class="col" md="10">
                    <h6 class="mb-0 mt-1 text-center font-weight-bold">Comentarios</h6>
                </div>
                <div class="col">
                    <button type="button" class="close" @click="closeChat">
                    <span aria-hidden="true" class="text-primary">&times;</span>
                    </button>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
    import {mapState,mapMutations,mapActions} from 'vuex';

    export default ({
        name: 'Header',
        computed: {
        ...mapState(['isModalVisible'])  
        },
        methods: {
        ...mapMutations(['closeModal']),
        ...mapActions(['closeChat'])
        },
    })        
</script>