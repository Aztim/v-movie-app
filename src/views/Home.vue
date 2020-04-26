<template>
  <div>
    <Header/>
    <Content/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/v-header.vue'
import Content from '@/components/v-content.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Content
  }
}
</script>
