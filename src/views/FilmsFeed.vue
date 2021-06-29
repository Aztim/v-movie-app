<template>
 <div class="container mx-auto px-4 pt-1">
   <ErrorMessage v-if="error"/>
   <Loader v-if="loader" />
    <div class="popular-movies">
      <h2 class="uppercase tracking-wider text-orange-500 text-lg font-semibold">Popular Movies</h2>
      <div v-if="films" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div
          class="mt-1"
          href="#"
          v-for="(film, index) in films"
          :key="index"
        >
          <router-link :to="{ name:'filmData', params:{ id:film.id }}">
            <img :src="'https://image.tmdb.org/t/p/w500/' + film.poster_path" alt="poster" class="hover:opacity-75 transition ease-in-out duration-150">
          </router-link>
          <div class="mt-1">
            <router-link :to="{ name:'filmData', params:{id: film.id }}" class="text-lg mt-2 hover:text-gray:300">
              {{ film.title }}
            </router-link>
            <div class="flex items-center text-gray-400 text-sm mt-1">
              <i class="fas fa-star"></i>
              <span class="ml-1">{{ film.vote_average * 10 + '%' }}</span>
              <span class="mx-2"> | </span>
              <span>{{ film.release_date }}</span>
               <FavoritesButton :id="film.id" :iconSize="20"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ErrorMessage from '@/components/errorMessage'
import Loader from '@/components/loader'
import FavoritesButton from '@/components/addToFavoritesButton'

export default {
  name: 'films_feed',
  components: {
    ErrorMessage, Loader, FavoritesButton
  },
  data () {
    return {}
  },
  computed: {
    ...mapState({
      films: state => state.popularFilms.data,
      error: state => state.error.isShowError,
      loader: state => state.loader.isShowLoader
    })
  },
  mounted () {
    this.$store.commit('favoriteMovies/loadIdsFromLocalStorage')
    this.$store.dispatch('popularFilms/getPopularFilms')
  }
}
</script>

<style>
</style>
