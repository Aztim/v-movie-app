<template>
  <div id="app">
    <Header/>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import Header from '@/components/v-header.vue'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
</style>
