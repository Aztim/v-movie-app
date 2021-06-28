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
    posterBg: ''
  }),
  methods: {
    onChangePoster (poster) {
      this.posterBg = poster
    }
  }
}
</script>

<style>
</style>
