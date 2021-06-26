<template>
  <div>
    <button
      class="items-center bg-orange-500 text-gray-900 rounded font-semibold px-5 py-3 ml-5 hover:bg-orange-600 transition ease-in-out duration-150"
      @click="addToFavorite(id)"
    >
      <span class="ml-2">Add to </span>
      <i :class="[ isFavorite ? 'far fa-heart' : 'fas fa-heart']"></i>
      <!-- <i :class="{ 'far-heart': isFavorite, 'fas fa-heart': isFavorite}"></i> -->
    </button>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      isFavorite: true
    }
  },
  methods: {
    addToFavorite (id) {
      this.$store.dispatch('favoriteMovies/addToFavoriteMoviesIdsList', id)
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
