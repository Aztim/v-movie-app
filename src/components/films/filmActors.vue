<template>
  <div class="container mx-auto  border-b border-gray-600 px-4 py-4">
    <h2 class="text-4xl font-semibold mb-5">
      Cast
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div class="mr-2"
        :key="index"
        v-for="(actor, index) in actors"
      >
        <div v-if="index < 8">
          <img
            :src="castProfileImage(actor)"
            alt=""
            class="hover:opacity-75 tansition easy-in-out duration-150"
          />
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
</template>

<script>
export default {
  props: {
    actors: {
      type: Array,
      required: true
    }
  },
  methods: {
    castProfileImage (actor) {
      if (actor.profile_path) {
        return 'https://image.tmdb.org/t/p/w300/' + actor.profile_path
      } else {
        return 'https://via.placeholder.com/300x450'
      }
    }
  }
}
</script>

<style>

</style>
