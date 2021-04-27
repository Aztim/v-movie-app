import axios from '@/api/axios'
const apiKey = process.env.VUE_APP_TITLE

const getActors = () => {
  return axios.get(`person/popular?api_key=${apiKey}&language=en-US&page=1`)
}

const getActorData = id => {
  // return axios.get(`person/${id}?api_key=${apiKey}`)
  return axios.get(`person/${id}?api_key=${apiKey}&language=en-US`)
}

const getCombinedCredits = id => {
  return axios.get(`person/${id}/combined_credits?api_key=${apiKey}&language=en-US`)
}
const getExternal = id => {
  return axios.get(`person/${id}/external_ids?api_key=${apiKey}&language=en-US`)
}

export default {
  getActors,
  getActorData,
  getCombinedCredits,
  getExternal
}
