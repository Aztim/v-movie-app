<template>
  <div class="movie-cast border-b border-gray-800">
    <div class="container mx-auto px-4 py-1">
      <h2 class="text-4xl font-semibold">Cast</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          <div
            class="mt-8"
            v-for="(actor, index) in actors"
            :key="index"
          >
            <div v-if="index < 5">
              <!-- <router-link> -->
              <img :src="'https://image.tmdb.org/t/p/w300/' + actor.profile_path " alt="" class="hover:opacity-75 transition ease-in-out duration-150">
              <!-- </router-link> -->

              <div class="mt-2">
                <!-- <router-link  class="text-lg mt-2 hover:text-gray:300"> -->
                {{ actor.name }}
                <!-- </router-link> -->
                <div class="text-sm text-gray-400">
                  {{ actor.character }}
                </div>
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
    actors: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>

</style>
