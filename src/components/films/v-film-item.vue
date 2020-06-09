<template>
<div>
  <div class="movie-info border-b border-gray-800">
    <div class="container mx-auto px-4 py-16 flex ">
      <img :src="require('../../assets/films/' + film.image)" alt="" class="w-96">
      <div  class="ml-24">
        <h2 class="text-4xl font-semibold">{{ film.name }}</h2>
        <div class="flex items-center text-gray-400 text-sm">
          <i class="fas fa-star"></i>
          <span class="ml-1">{{ film.rating }}</span>
          <span class="mx-2"> | </span>
          <span>{{ film.release }}</span>
          <span class="mx-2"> | </span>
          <span>{{ film.category }}</span>
        </div>

        <p class="text-gray-300 mt-8">
          {{ film.story }}
        </p>

        <div class="mt-12">
          <h4 class="text-white font-semibold">Featured Cast</h4>
          <div class="flex mt-4">
            <div>
              <div>{{ film.director }}</div>
              <div class="text-sm text-gray-400">Screenplay, Director, Story</div>
            </div>
            <div class="ml-8">
              <div>{{ film.writers }}</div>
              <div class="text-sm text-gray-400">Screenplay</div>
            </div>
          </div>
        </div>
        <VideoWindow
          :film_trailer="film.trailer"
        />
      </div>
    </div>
  </div>
  <!-- --end movie-info-- ------------->
    <Actors
      :film_actors="film.actors"
    />
  <!-- --end actors-info-- ------------->
    <FilmImages
      :film_images="film.film_images"
    />
</div>
</template>

<script>
// import { video } from '../video-mixin'
// import { mapGetters } from 'vuex'
import VideoWindow from './v-film-video-window.vue'
import Actors from './v-film-actors.vue'
import FilmImages from './v-film-images.vue'
export default {
  name: 'film-item',
  components: { VideoWindow, Actors, FilmImages },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    film () {
      return this.$store.getters.GET_FILM.find(b => b.id === this.id)
    }
  }
  // mixins: [video]
}
</script>

<style>
</style>
