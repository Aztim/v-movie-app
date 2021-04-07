<template>
  <div>
    <input
      type="text"
      class="bg-gray-800 rounded-full w-64 px-4 pl-8 py-1 focus:outline-none focus:shadow-outline"
      placeholder="Film"
      v-model="desiredFilm"
      @keyup="searchDesiredFilm"
    >
    <div class="absolute top-0">
      <svg
        class="fill-current w-4 text-gray-500 mt-2 ml-2"
        viewBox="0 0 24 24">
        <path class="heroicon-ui" d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z"/>
      </svg>
    </div>
    <div class="absolute bg-gray-800 text-sm rounded w-64 mt-4">
      <ul class="suggestions">
        <li
        v-for="(result, index) in searchingResult"
        :key="index"
        class="border-b border-gray-700"
        @click="chosenFilm"
        >
          <router-link
            class="block hover:bg-gray-700 px-3 py-3"
            flex items-center
            :to="{ name:result.path, params:{ id:result.id }}"
          >
            <!-- <img :src="require('../assets/films/' + result.image)" alt="poster"> -->
            <span>{{ result.name }}</span>
          </router-link>
        </li>
      </ul>
      <div v-show ="noResults" class="px-3 py-3">No results for {{ desiredFilm }}</div>
    </div>
  </div>
</template>

<script>
// import { getVideoData } from '../mixins/getVideoData'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      desiredFilm: '',
      searchingResult: [],
      noResults: false
    }
  },
  // mixins: [getVideoData],
  methods: {
    searchDesiredFilm () {
      const input = this.desiredFilm
      if (input) {
        this.searchingResult = this.films.filter(function (film) {
          // return film.name.toLowerCase().startsWith(input)
          return film.name.startsWith(input.toUpperCase())
        })
      } else {
        this.searchingResult = ''
      }
      if (this.searchingResult.length === 0) {
        this.noResults = true
      } if (input === '') {
        this.noResults = false
      } if (input && this.searchingResult.length) {
        this.noResults = false
      }
    },
    chosenFilm () {
      this.desiredFilm = ''
      this.searchingResult = []
      this.noResults = false
    }
  },
  computed: {
    ...mapGetters({ films: 'getFilmsData' })
  }
}
</script>

<style scoped>
</style>
