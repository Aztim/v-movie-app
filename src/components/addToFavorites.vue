<template>
  <div>
    <button
      class="items-center bg-orange-500 text-gray-900 rounded font-semibold px-5 py-3 ml-5 hover:bg-orange-600 transition ease-in-out duration-150"
      @click="showVideoWindow"
    >
      <span class="ml-2">Add to </span>
      <i :class="[ isFavorite ? 'far fa-heart' : 'fas fa-heart']"></i>
      <!-- <i :class="{ 'far-heart': isFavorite, 'fas fa-heart': isFavorite}"></i> -->
      <!-- <i class="fas fa-heart"></i> -->
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isFavorite: true
      // favoritesText: ''
    }
  }
}
</script>

<style>
/* .fas {
  border-style: solid !important;
  border-color: coral !important;
} */
</style>
