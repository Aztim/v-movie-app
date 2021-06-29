<template>
  <div id="app">
    <Header/>
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/header.vue'

export default {
  name: 'App',
  components: {
    Header
  },
  data: () => ({
  })
}
</script>

<style>
.fa-star {
    color: yellow;
  }
.fa-heart {
  color: #FF0000;
}
.far.fa-heart {
color: #DC143C
}
</style>
