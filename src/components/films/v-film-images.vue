<template>
  <div class="movie-images">
    <div class="container mx-auto px-4 py-16">
      <h2 class="text-4xl font-semibold">Images</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div
            class="mt-8"
            v-for="(image, index) in film_images"
            :key="index"
          >
            <!-- <router-link> -->
              <img @click="popUp" :src="require('../../assets/film-pictures/' + image.f_image)" alt="" class="hover:opacity-75 transition ease-in-out duration-150">
            <!-- </router-link>   -->
          </div>
        </div>

        <div
          style="background-color: rgba(0, 0, 0, .5);"
          class="fixed top-0 left-0 w-full h-full flex items-center shadow-lg overflow-y-auto"
          v-if="visible"
          ref="popup_wrapper"
        >
          <div class="container mx-auto lg:px-32 rounded-lg overflow-y-auto">
            <div class="bg-gray-900 rounded">
              <div class="flex justify-end pr-4 pt-2">
                <button @click="visible = !visible" class="text-3xl leading-none hover:text-gray-300">&times;</button>
              </div>
              <div class="modal-body px-8 py-8">
                <img :src="image" alt="poster" style="width:100%">
              </div>
            </div>
          </div>
        </div>
    </div>
  </div> <!-- end movie-images -->
</template>

<script>
export default {
  props: {
    film_images: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      visible: false,
      image: ''
    }
  },
  methods: {
    popUp (e) {
      this.image = e.target.src
      this.visible = true
    },
    closePopup () {
      this.visible = false
    }
  },
  mounted () {
    const vm = this
    document.addEventListener('click', function (e) {
      if (e.target === vm.$refs.popup_wrapper) {
        vm.closePopup()
      }
    })
  }
}
</script>

<style>
</style>
