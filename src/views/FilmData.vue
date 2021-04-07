<template>
<div v-if="filmData">
  <div class="movie-info border-b border-gray-800">
    <div class="container mx-auto px-4 py-16 flex ">
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
        <VideoWindow
          :trailer="filmData.videos.results[0].key"
        />
      </div>
    </div>
  </div>
  <!-- --end movie-info-- ------------->
    <Actors
      :actors="filmData.credits.cast"
    />
  <!-- --end actors-info-- ------------->
    <FilmImages
      :images="filmData.images.backdrops"
    />
</div>
</template>
<script>
// import { video } from '../video-mixin'
import { mapState } from 'vuex'
import VideoWindow from '@/components/films/filmVideoWindow'
import Actors from '@/components/films/filmActors.vue'
import FilmImages from '@/components/films/filmImages.vue'
export default {
  name: 'film-data',
  components: { VideoWindow, Actors, FilmImages },
  data () {
    return {}
  },
  computed: {
    ...mapState({
      filmData: state => state.popularFilms.filmData,
      filmCredit: state => state.popularFilms.filmCredit
    })
  },
  mounted () {
    this.$store.dispatch('popularFilms/getFilm', { id: this.$route.params.id })
  }
}
</script>

<style>
</style>
