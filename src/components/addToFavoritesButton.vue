<template>
  <div>
  <button  @click="addToFavorite" class="tooltip inline-flex items-center justify-center w-12 h-12 ml-5  transition-colors duration-150  rounded-full focus:shadow-outline hover:bg-gray-800">
     <span class="tooltiptext">{{ text }}</span>
    <i :class="[ isFavorite ? 'fas fa-heart' : 'far fa-heart', 'iconSize']" ></i>
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
    return {}
  },
  computed: {
    isFavorite () {
      return this.$store.getters['favoriteMovies/hasFilm'](this.id)
    },
    text () {
      return this.isFavorite ? 'Remove from favorite' : 'Add to favorite'
    }
  },
  methods: {
    addToFavorite (e) {
      this.$store.dispatch('favoriteMovies/addToFavoriteMoviesIdsList', this.id)
    }
  }
}
</script>

<style>
button {
  border-style: none;
}

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>
