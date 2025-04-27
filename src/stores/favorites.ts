import { defineStore } from 'pinia'

interface FavoritesState {
  favoriteIds: number[]
}

export const useFavoritesStore = defineStore('favorites', {
  state: (): FavoritesState => ({
    favoriteIds: [],
  }),

  getters: {
    getFavorites(): number[] {
      return this.favoriteIds
    },

    isFavorite:
      (state) =>
      (movieId: number): boolean => {
        return state.favoriteIds.includes(movieId)
      },
  },

  actions: {
    toggleFavorite(movieId: number) {
      const index = this.favoriteIds.indexOf(movieId)
      if (index === -1) {
        this.favoriteIds.push(movieId)
      } else {
        this.favoriteIds.splice(index, 1)
      }
    },

    addFavorite(movieId: number) {
      if (!this.favoriteIds.includes(movieId)) {
        this.favoriteIds.push(movieId)
      }
    },

    removeFavorite(movieId: number) {
      const index = this.favoriteIds.indexOf(movieId)
      if (index !== -1) {
        this.favoriteIds.splice(index, 1)
      }
    },
  },

  persist: true,
})
