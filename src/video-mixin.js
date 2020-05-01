import { mapActions } from 'vuex'
export const getVideoData = {
  data () {
    return {
      films: []
    }
  },
  methods: {
    ...mapActions([
      'GET_FILMS_FROM_API'
    ])
  },
  created () {
    this.GET_FILMS_FROM_API()
      .then((responce) => {
        if (responce.data) {
          for (const item of responce.data) {
            this.films.push(item)
          }
        }
      })
  }
}
