<template>
  <div>
    <Header/>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/v-header.vue'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>
