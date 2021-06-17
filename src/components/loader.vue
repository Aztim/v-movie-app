<template>
  <div class="loader-wrap">
    <FacebookLoader color="#1E90FF" />
  </div>
</template>

<script>
import { FacebookLoader } from 'vue-spinners-css'
export default {
  name: 'Loader',
  components: {
    FacebookLoader
  }
}
</script>

<style scoped>
.loader-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

</style>
