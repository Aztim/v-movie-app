<template>
  <div class="movie-cast border-b border-gray-800">
    <div class="container mx-auto px-4 py-16">
      <h2 class="text-4xl font-semibold">Cast</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div
            class="mt-8"
            v-for="(tv_actor, index) in tv_shows_actors"
            :key="index"
          >
            <!-- <router-link> -->
              <img :src="require('../../assets/actors_pictures/' + tv_actor.actors_name + '.jpg')" alt="" class="hover:opacity-75 transition ease-in-out duration-150">
            <!-- </router-link> -->
            <div class="mt-2">
                <!-- <router-link  class="text-lg mt-2 hover:text-gray:300"> -->
                  {{ tv_actor.actors_name }}
                <!-- </router-link> -->
                <div class="text-sm text-gray-400">
                  {{ tv_actor.character }}
                </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tv_shows_actors: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style>

</style>
