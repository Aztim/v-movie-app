<template>
  <div>
    <input
      type="text"
      class="bg-gray-800 rounded-full w-64 px-4 pl-8 py-1 focus:outline-none focus:shadow-outline"
      placeholder="Film"
      v-model="search"
      @keyup="searchInput"
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
        v-for="(s, index) in suggestions"
        :key="index"
        class="border-b border-gray-700"
        @click="chosenFilm"
        >
          <router-link
            class="block hover:bg-gray-700 px-3 py-3"
            flex items-center
            :to="{ name:'film', params:{ id:s.id }}"
          >
            <!-- <img :src="require('../assets/films/' + s.image)" alt="poster"> -->
            <span>{{ s.name }}</span>
          </router-link>
        </li>
      </ul>
      <div v-if="noResult" class="px-3 py-3">No results for {{ search }}</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      search: '',
      films: [],
      suggestions: [],
      noResult: false
    }
  },
  methods: {
    ...mapActions([
      'GET_FILMS_FROM_API'
    ]),
    searchInput () {
      const input = this.search
      if (input) {
        this.suggestions = this.films.filter(function (film) {
          return film.name.toLowerCase().startsWith(input)
        })
      } else {
        this.suggestions = ''
      }
      if (this.suggestions.length === 0) {
        this.noResult = true
      } if (input === '') {
        this.noResult = false
      } if (input && this.suggestions.length) {
        this.noResult = false
      }
    },
    chosenFilm (e) {
      this.search = ''
      this.suggestions = ''
      this.noResult = false
    }
  },
  created () {
    this.GET_FILMS_FROM_API()
      .then((responce) => {
        if (responce.data) {
          // console.log(responce.data)
          for (const item of responce.data) {
            this.films.push(item)
          }
        }
      })
  }
}
</script>

<style scoped>
</style>
