<template>
    <div class="container mx-auto px-4 py-16">
      <h2 class="text-4xl font-semibold">Popular Actors</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div
            class="mt-8"
            v-for="(name, index) in actors"
            :key="index"
          >
            <!-- <router-link> -->
              <img :src="require('../../assets/actors_pictures/' + name + '.jpg')" alt="" class="hover:opacity-75 transition ease-in-out duration-150">
            <!-- </router-link> -->
            <div class="mt-2">
                <!-- <router-link  class="text-lg mt-2 hover:text-gray:300"> -->
                  <a href="#" class="text-lg hover:text-gray-300">{{ name }}</a>
                <!-- </router-link> -->
            </div>
          </div>
        </div>
    </div>
</template>

<script>
// import { getVideoData } from '../../video-mixin'
// import Actor from './v-actors-item'
import { mapActions } from 'vuex'
export default {
  name: 'actors',
  // components: { Actor },
  data () {
    return {
      actors: []
    }
  },
  // mixins: [getVideoData]
  methods: {
    ...mapActions([
      'GET_ACTORS_FROM_API'
    ])
  },
  created () {
    this.GET_ACTORS_FROM_API()
      .then((responce) => {
        if (responce.data) {
          for (const item of responce.data) {
            console.log(responce.data)
            this.actors.push(item)
          }
        }
      })
  }
}
</script>

<style>

</style>
