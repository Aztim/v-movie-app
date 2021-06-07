<template>
 <div id="example" class="container mx-auto px-4 pt-16 mb-56">
    <ErrorMessage v-if="error"/>
    <h2 class="uppercase
      tracking-wider
      text-orange-500
      text-lg
      font-semibold"
    >
      Upcoming Movies
    </h2>
    <carousel-3d
      :controls-visible="true"
      :clickable="false"
      :key="movies.length"
      :listData="movies"
      :height="500"
    >
      <slide :index="i" :key="i" v-for="(movie, i) in movies">
        <figure>
          <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" />
          <figcaption>
            <router-link :to="`/movie/${movie.id}`">
              {{ movie.title }}
            </router-link>
          </figcaption>
        </figure>
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ErrorMessage from '@/components/errorMessage'
import { Carousel3d, Slide } from 'vue-carousel-3d'
export default {
  data () {
    return {
      upcomingMovies: []
    }
  },
  computed: {
    ...mapState({
      movies: state => state.upcomingMovies.upcomingData,
      error: state => state.upcomingMovies.error
    })
  },
  components: {
    Carousel3d,
    Slide,
    ErrorMessage
  },
  created () {
    this.$store.dispatch('upcomingMovies/getUpcomingMovies')
  }
  // watch: {
  //   movies () {
  //     this.upcomingMovies = this.movies
  //   }
  // }
}
</script>

<style>
html {
    width:100vw;
    overflow-x:hidden;
}
.carousel-3d-container figure {
  margin: 0
}

.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  bottom: 0;
  position: absolute;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
}

.next span,
.prev span {
  color: white
}
</style>
