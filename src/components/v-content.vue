<template>
  <div class="container mx-auto px-4 pt-16">
    <div class="popular-movies">
      <h2 class="uppercase tracking-wider text-orange-500 text-lg font-semibold">Popular Movies</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div
          class="mt-8"
          href="#"
          v-for="(film, index) in films"
          :key="index"
        >
          <router-link :to="{ name:'film', params:{ id:film.id }}">
            <img :src="require('../assets/films/' + film.image)" alt="" class="hover:opacity-75 transition ease-in-out duration-150">
          </router-link>
          <div class="mt-2">
            <router-link :to="{ name:'film', params:{ id:film.id }}" class="text-lg mt-2 hover:text-gray:300">
              {{ film.name }}
            </router-link>
            <div class="flex items-center text-gray-400 text-sm mt-1">
              <i class="fas fa-star"></i>
              <span class="ml-1">{{ film.rating }}</span>
              <span class="mx-2"> | </span>
              <span>{{ film.release }}</span>
            </div>
            <div class="text-gray-400 text-sm">
              {{ film.category }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'
import { getVideoData } from '../video-mixin'
export default {
  name: 'Content',
  // props: {
  //   film_data: {
  //     type: Array,
  //     default () {
  //       return []
  //     }
  //   }
  // },
  // data () {
  //   return {
  //     films: []
  //   }
  // },
  mixins: [getVideoData]
  // computed: {
  //   // ...mapGetters([
  //   //   'FILMS'
  //   // ])
  // }
  // methods: {
  //   ...mapActions([
  //     'GET_FILMS_FROM_API'
  //   ])
  // },
  // created () {
  //   this.GET_FILMS_FROM_API()
  //     .then((responce) => {
  //       if (responce.data) {
  //         for (const item of responce.data) {
  //           this.films.push(item)
  //         }
  //       }
  //     })
  // }
}
</script>

<style>
  .fas {
    color: yellow;
  }
</style>
