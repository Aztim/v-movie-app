<template>
  <div>
    <input
      type="text"
      class="bg-gray-800 rounded-full w-64 px-4 pl-8 py-1 focus:outline-none focus:shadow-outline"
      placeholder="Film"
      v-model="searchFilm"
    >
    <div class="absolute top-0">
      <svg
        class="fill-current w-4 text-gray-500 mt-2 ml-2"
        viewBox="0 0 24 24">
        <path class="heroicon-ui" d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z"/>
      </svg>
    </div>
    <div class="absolute bg-gray-800 text-sm rounded w-64 mt-4">
      <ul class="suggestions" v-if="showSearchResult">
        <li :key="index" v-for="(result, index) in searchResult">
          <router-link
            v-if="index < 10"
            :to="`/films/${result.id}`"
            @click.native="showSearchResult = false"
            class="flex items-center border-b border-gray-500 p-1"
          >
            <img :src="posterPath(result.poster_path)" alt="" class="w-10" />
            <span class="ml-3">{{ result.title }}</span>
          </router-link>
        </li>
      </ul>
      <div v-if="searchResult.length == 0 && showSearchResult" class="px-3 py-3">No results for {{ searchFilm }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      searchFilm: '',
      showSearchResult: false,
      searchResult: []
    }
  },
  methods: {
    keyboardEvents () {
      window.addEventListener('click', (e) => {
        if (!this.$el.contains(e.target)) {
          this.showSearchResult = false
          this.searchFilm = ''
        }
      })

      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.showSearchResult = false
          this.searchFilm = ''
        }
      })
    },
    posterPath (path) {
      if (path) {
        return 'https://image.tmdb.org/t/p/w500/' + path
      } else {
        return 'https://via.placeholder.com/50x75'
      }
    }
  },
  computed: {
    ...mapState({
      getResult: state => state.searchFilms.films
    })
  },
  watch: {
    searchFilm () {
      const data = this.searchFilm.trim()
      if (data.length !== 0) {
        this.$store.dispatch('searchFilms/getSearchFilms', data)
      }
    },
    getResult () {
      this.searchResult = this.getResult
      this.showSearchResult = true
    }
  },
  mounted () {
    this.keyboardEvents()
  }
}
</script>

<style scoped>
</style>
