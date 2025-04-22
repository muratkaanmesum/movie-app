import axios from 'axios'
import { defineStore } from 'pinia'

interface Movie {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

interface MovieState {
  movies: Movie[]
  page: number
}

export const useMovieStore = defineStore('movie', {
  state: (): MovieState => ({
    movies: [],
    page: 1,
  }),
  getters: {
    getMovies(): Movie[] {
      return this.movies
    },
  },
  actions: {
    setMovies(data: Movie[]) {
      this.movies = data
    },
    async fetchMovies() {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
          params: {
            include_adult: false,
            include_video: false,
            language: 'en-US',
            page: this.page,
            sort_by: 'popularity.desc',
            api_key: import.meta.env.VITE_API_KEY,
          },
          headers: {
            accept: 'application/json',
          },
        })
        this.setMovies(response.data.results)
      } catch (error) {
        console.error(error)
      }
    },
    incrementPage() {
      this.page++
    },
    decrementPage() {
      this.page--
    },
  },
})
