<script setup lang="ts">
import { useMovieStore } from '@/stores/movie'
import AppMovie from './AppMovie.vue'
import { watch } from 'vue'
import AppLoader from '../common/AppLoader.vue'

const movieStore = useMovieStore()
movieStore.fetchMovies()

watch(
  () => movieStore.page,
  () => {
    movieStore.fetchMovies()
  },
)
</script>

<template>
  <div
    class="flex flex-col justify-center w-full items-center overflow-hidden overflow-x-auto scrollbar-thin scrollbar-thumb-white"
  >
    <AppLoader :state="movieStore.loading" :color="'black'" />
    <div class="w-full" v-show="!movieStore.loading">
      <div class="flex gap-10">
        <AppMovie
          v-for="movie in movieStore.movies"
          :key="movie.id"
          :name="movie.original_title"
          :date="movie.release_date"
          :imageUrl="`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`"
          :rating="Math.ceil(movie.vote_average * 10)"
        />
      </div>
    </div>
  </div>
  <div class="flex gap-4">
    <button class="bg-gray-700 p-2" @click="movieStore.decrementPage" type="button">
      LeftArrow
    </button>
    <button class="bg-gray-700 p-2" @click="movieStore.incrementPage" type="button">
      RightArrow
    </button>
    <span class="text-white">{{ movieStore.page }}</span>
  </div>
</template>
