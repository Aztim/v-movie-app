import axios from '@/api/axios'
const apiKey = process.env.VUE_APP_TITLE

const getFilms = () => {
  return axios.get(`movie/popular?api_key=${apiKey}&language=en-US&page=1`)
}

const getFilmsGenre = () => {
  return axios.get(`genre/movie/list?api_key=${apiKey}&language=en-US`)
}

const getFilmData = id => {
  console.log(id)
  return axios.get(`movie/${id}?api_key=${apiKey}&append_to_response=videos,images,credits`)
  // return axios.get(`/articles/${slug}`).then(response => response.data.article)
}
// const getFilmData = id => {
//   console.log(id)
//   return axios.get(`movie/${id}?api_key=${apiKey}&language=en-US`)
//   // return axios.get(`/articles/${slug}`).then(response => response.data.article)
// }
const getFilmCredit = id => {
  return axios.get(`movie/${id}/credits?api_key=${apiKey}&language=en-US`).then(response => response.data)
}

export default {
  getFilms,
  getFilmsGenre,
  getFilmData,
  getFilmCredit
}
