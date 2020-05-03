<template>
  <div class="container mx-auto px-4 pt-16">
    <div class="popular-movies">
      <h2 class="uppercase tracking-wider text-orange-500 text-lg font-semibold">TV Shows</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div
          class="mt-8"
          href="#"
          v-for="(item, index) in tv"
          :key="index"
        >
          <router-link :to="{ name:'tvshow', params:{ id:item.id }}">
            <img :src="require('../../assets/tv_show/' + item.image )" alt="" class="hover:opacity-75 transition ease-in-out duration-150">
          </router-link>
          <div class="mt-2">
            <router-link :to="{ name:'tvshow', params:{ id:item.id }}" class="text-lg mt-2 hover:text-gray:300">
              {{ item.name }}
            </router-link>
            <div class="flex items-center text-gray-400 text-sm mt-1">
              <i class="fas fa-star"></i>
              <span class="ml-1">{{ item.rating }}</span>
              <span class="mx-2"> | </span>
              <span>{{ item.release }}</span>
            </div>
            <div class="text-gray-400 text-sm">
              {{ item.category }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
// import { getVideoData } from '../video-mixin'
export default {
  name: 'tv',
  data () {
    return {
      tv: []
    }
  },
  // mixins: [getVideoData]
  methods: {
    ...mapActions([
      'GET_TV_FROM_API'
    ])
  },
  created () {
    this.GET_TV_FROM_API()
      .then((responce) => {
        if (responce.data) {
          for (const item of responce.data) {
            this.tv.push(item)
            console.log(this.tv)
          }
        }
      })
  }
}
</script>

<style>

</style>
