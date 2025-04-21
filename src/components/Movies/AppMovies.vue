<script setup lang="ts">
import { useMovieStore } from '@/stores/movie'
import AppMovie from './AppMovie.vue'
import { watch } from 'vue'

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
    class="overflow-hidden w-[90%] !m-auto overflow-x-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-400 scrollbar-thumb-rounded-md hover:scrollbar-thumb-gray-500"
  >
    <div class="flex gap-10">
      <AppMovie
        v-for="movie in movieStore.movies"
        :key="movie.id"
        :name="movie.original_title"
        :date="movie.release_date"
        :imageUrl="`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`"
      />
    </div>
  </div>
  <div class="flex gap-4">
    <button class="bg-gray-700 p-2" @click="movieStore.decrementPage">LeftArrow</button>
    <button class="bg-gray-700 p-2" @click="movieStore.incrementPage">RightArrow</button>
    <span class="text-black">{{ movieStore.page }}</span>
  </div>
</template>
