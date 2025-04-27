
import axios from 'axios'

const BaseURL = 'https://api.themoviedb.org/3'

export const movieApi = axios.create({
  baseURL: BaseURL,
})

