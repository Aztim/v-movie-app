<template>
<div>
  <div class="movie-info border-b border-gray-800">
    <div class="container mx-auto px-4 py-16 flex ">
      <img :src="require('../../assets/tv_show/' + tv_shows.image)" alt="" class="w-96">
      <div  class="ml-24">
        <h2 class="text-4xl font-semibold">{{ tv_shows.name }}</h2>
        <div class="flex items-center text-gray-400 text-sm">
          <i class="fas fa-star"></i>
          <span class="ml-1">{{ tv_shows.rating }}</span>
          <span class="mx-2"> | </span>
          <span>{{ tv_shows.release }}</span>
          <span class="mx-2"> | </span>
          <span>{{ tv_shows.category }}</span>
          <!-- <div v-for="(act, index) in film.actors" :key="index">{{ act.actors_name }}</div> -->
        </div>

        <p class="text-gray-300 mt-8">
          {{ tv_shows.story }}
        </p>

        <div class="mt-12">
          <h4 class="text-white font-semibold">Creator</h4>
          <div class="flex mt-4">
            <div>
              <div>{{ tv_shows.director }}</div>
              <!-- <div class="text-sm text-gray-400">Screenplay, Director, Story</div> -->
            </div>
            <!-- <div class="ml-8">
              <div>{{ tv_shows.writers }}</div>
              <div class="text-sm text-gray-400">Screenplay</div>
            </div> -->
          </div>
        </div>
        <VideoWindow
          :tv_shows_trailer="tv_shows.trailer"
        />
      </div>
    </div>
  </div>
  <!-- --end tv-show-info-- ------------->
    <Actors
      :tv_shows_actors="tv_shows.actors"
    />
  <!-- --end actors-info-- ------------->
    <TVShowImages
      :tv_shows_images="tv_shows.tv_shows_images"
    />
</div>
</template>

<script>
// import { mapGetters } from 'vuex'
import VideoWindow from './v-tv-video-window.vue'
import Actors from './v-tv-actors.vue'
import TVShowImages from './v-tv-images.vue'
export default {
  name: 'tv-item',
  components: { VideoWindow, Actors, TVShowImages },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    tv_shows () {
      return this.$store.getters.GET_TV_SHOWS.find(b => b.id === this.id)
    }
  }
}
</script>

<style>
</style>
