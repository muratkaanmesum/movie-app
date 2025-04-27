import { movieApi } from '@/utils/utils'
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
  loading: boolean
  type: 'popular' | 'top_rated'
}

export const useMovieStore = defineStore('movie', {
  state: (): MovieState => ({
    movies: [],
    page: 1,
    loading: true,
    type: 'popular',
  }),
  getters: {
    getMovies(): Movie[] {
      return this.movies
    },
    getPage(): number {
      return this.page
    },
    getLoading(): boolean {
      return this.loading
    },
    getType(): 'popular' | 'top_rated' {
      return this.type
    },
  },
  actions: {
    setMovies(data: Movie[]) {
      this.movies = data
    },
    async fetchMovies() {
      this.loading = true
      try {
        const response = await movieApi.get(`/movie/${this.type}?language=en-US`, {
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
      this.loading = false
    },
    incrementPage() {
      if (this.page >= 20) {
        this.page = 1
      } else {
        this.page++
      }
    },
    decrementPage() {
      if (this.page <= 1) {
        this.page = 20
      } else {
        this.page--
      }
    },
    setType(type: 'popular' | 'top_rated') {
      if (this.type === type) {
        return
      }
      this.type = type
    },
  },
})
