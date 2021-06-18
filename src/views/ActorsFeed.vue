<template>
    <div class="container mx-auto px-4 py-16">
      <ErrorMessage v-if="error"/>
      <Loader v-if="loader" />

      <h2 class="uppercase tracking-wider text-orange-500 text-lg font-semibold">Popular Actors</h2>

      <div class="text-center mt-5">
        <a href="" v-on:click.prevent="previous()">
          Previous
        </a>
        <a href="" v-on:click.prevent="next()" class="ml-5">
          Next
        </a>
      </div>
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
    </div>
</template>

<script>
import ErrorMessage from '@/components/errorMessage'
import { mapState } from 'vuex'
import Loader from '@/components/loader'

export default {
  name: 'actors',
  components: { ErrorMessage, Loader },
  data () {
    return {
      currentPage: 1
    }
  },
  computed: {
    ...mapState({
      actors: state => state.popularActors.data,
      error: state => state.error.isShowError,
      loader: state => state.loader.isShowLoader
    })
  },
  mounted () {
    // this.$store.dispatch('popularActors/getActors')
    this.fetchActors(this.currentPage)
  },
  methods: {
    fetchActors (page) {
      this.$store.dispatch('popularActors/getActors', page)
    },
    next () {
      this.currentPage += 1
      this.fetchActors(this.currentPage)
    },
    previous () {
      if (this.currentPage <= 1) {
        return
      }
      this.currentPage -= 1
      this.fetchActors(this.currentPage)
    }
  }
}
</script>

<style>
  a:hover {
    color: #ED8936;
  }
</style>
