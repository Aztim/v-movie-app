<template>
  <div v-if="filmData">
    <ErrorMessage v-if="error"/>
    <Loader v-if="loader" />

    <div class="container mx-auto px-4 py-16 flex movie-info">
      <img :src="'https://image.tmdb.org/t/p/w500/' + filmData.poster_path" alt="" class="w-96">
      <div  class="ml-24">
        <h2 class="text-4xl font-semibold">{{ filmData.original_title }}</h2>
        <div class="flex items-center text-gray-400 text-sm">
          <i class="fas fa-star"></i>
          <span class="ml-1">{{ filmData.vote_average }}</span>
          <span class="mx-2"> | </span>
          <span>{{ filmData.release_date }}</span>
          <span class="mx-2"> | </span>
          <span
            v-for="(genre, index) in filmData.genres"
            :key="index"
          >
            {{ genre.name }}
            <span v-if="filmData.genres.length - 1 != index">,</span>
          </span>
        </div>

        <p class="text-gray-300 mt-8">
          {{ filmData.overview }}
        </p>

        <div class="mt-12">
          <h4 class="text-white font-semibold">Featured Cast</h4>
          <div class="flex mt-4">
            <div
              v-for="(crew, index) in filmData.credits.crew"
              :key="index"
            >
              <div class="mr-8" v-if="index < 2">
                {{ crew.name }}
                <div class="text-sm text-gray-400">{{ crew.job }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="test mt-12 flex ">
          <VideoWindow
            :trailer="filmData.videos"
          />
          <FavoritesButton
            :id="filmData.id"
            :iconSize="25"
          />
        </div>
      </div>
    </div>

    <Actors
      :actors="filmData.credits.cast"
    />

    <FilmImages
      :images="filmData.images.backdrops"
    />
  </div>
</template>
<script>
import ErrorMessage from '@/components/errorMessage'
import { mapState } from 'vuex'
import VideoWindow from '@/components/films/filmVideoWindowButton'
import FavoritesButton from '@/components/addToFavoritesButton'
import Actors from '@/components/films/filmActors.vue'
import FilmImages from '@/components/films/filmImages.vue'
import Loader from '@/components/loader'

export default {
  name: 'film-data',
  components: { VideoWindow, Actors, FilmImages, ErrorMessage, Loader, FavoritesButton },
  data () {
    return {}
  },
  computed: {
    ...mapState({
      filmData: state => state.popularFilmData.filmData,
      error: state => state.error.isShowError,
      loader: state => state.loader.isShowLoader
    })
  },
  watch: {
    '$route.params.id': {
      handler () {
        this.fetchMovie(this.$route.params.id)
      }
    }
  },
  methods: {
    fetchMovie (movieId) {
      this.$store.dispatch('popularFilmData/getFilm', movieId)
      this.$store.commit('favoriteMovies/loadIdsFromLocalStorage')
    }
  },
  mounted () {
    this.fetchMovie(this.$route.params.id)
  }
}
</script>

<style>
.test {
z-index: 999;
}
</style>
