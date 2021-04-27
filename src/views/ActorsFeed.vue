<template>
    <div class="container mx-auto px-4 py-16">
      <ErrorMessage v-if="error"/>
      <!-- <h2 class="text-4xl font-semibold">Popular Actors</h2> -->
      <h2 class="uppercase tracking-wider text-orange-500 text-lg font-semibold">Popular Actors</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div
            class="mt-8"
            v-for="(actor, index) in actors"
            :key="index"
          >
            <router-link :to="{ name:'actorData', params:{ id: actor.id }}">
              <img :src="'https://image.tmdb.org/t/p/w500/' + actor.profile_path" alt="" class="hover:opacity-75 transition ease-in-out duration-150">
            </router-link>
            <div class="mt-2">
              <router-link :to="{ name:'actorData', params:{ id: actor.id }}">
                <a href="#" class="text-lg hover:text-gray-300">{{ actor.name }}</a>
              </router-link>
            </div>
          </div>
        </div>
        <!-- <div class="flex justify-between mt-16">
          <a href="#">Previous</a>
          <a href="#">Next</a>
        </div> -->
    </div>
</template>

<script>
import ErrorMessage from '@/components/errorMessage'
// import Actor from './v-actors-item'
import { mapState } from 'vuex'
export default {
  name: 'actors',
  components: { ErrorMessage },
  data () {
    return { }
  },
  computed: {
    ...mapState({
      actors: state => state.popularActors.data,
      error: state => state.popularActors.error
    })
  },
  mounted () {
    this.$store.dispatch('popularActors/getActors')
  }
}
</script>

<style>

</style>
