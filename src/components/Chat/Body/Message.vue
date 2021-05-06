<template>
    <div>
        <ul class="list-unstyled">
          <li 
          v-if="!message.attachment && message.logged_as_user" 
          class="media m-2 ml-4">
            <div class="media-body">
              <div class="d-inline-block float-right p-3 ml-auto bg-primary text-white">
                <p class="mb-0">{{message.content}}</p>
                <p class="mb-0 mt-1 small">{{moment(message.timestamp).format('DD MMM YYYY / kk:mm A')}}</p>
              </div>
            </div>
            <img class="ml-3 align-self-center chat-picture" :src="'/images/' + message.user + '.jpg'" alt="Generic placeholder image">
          </li>
          <li 
          v-if="!message.attachment && !message.logged_as_user" 
          class="media m-2 ml-4">
          <img class="mr-3 align-self-center chat-picture" :src="'/images/' + message.user + '.jpg'" alt="Generic placeholder image">
            <div class="media-body">
              <div class="d-inline-block p-3 bg-light text-dark">
                <p class="mb-0">{{message.content}}</p>
                <p class="mb-0 mt-1 small">{{moment(message.timestamp).format('DD MMM YYYY / kk:mm A')}}</p>
              </div> 
            </div>
          </li>
          <li 
          v-if="message.attachment" 
          class="media m-2 ml-4">
            <div class="media-body">
              <hr v-if="index !== 0"/>
              <div class="d-flex flex-row justify-content-between">
                <div class="d-inline-block">
                  <p class="mb-0 text-uppercase font-weight-bold">Versión {{message.version}}</p>
                  <p class="mb-0"><a href="message.url">{{message.title}}</a></p>
                  <p class="mb-0 mt-1 small">
                    <span class="mr-3">Documento / {{message.file_type}} ({{message.file_size}})</span>
                    <span>{{moment(message.timestamp).format('DD MMM YYYY / kk:mm A')}}</span>
                  </p>
                </div>
                  <img src="../../../assets/icons/download_cloud.svg" class="mr-5 align-self-center chat-picture" />
              </div>
              <hr/>
            </div>
          </li>
        </ul> 
    </div>
</template>

<script>
  export default {
    name: 'Message',
    props: ['message', 'index'],
  }
</script>