<script setup lang="ts">
import AppMovies from './AppMovies.vue'
import { useMovieStore } from '@/stores/movie'
const movieStore = useMovieStore()
</script>
<template>
  <div class="flex gap-4 items-center !mb-4">
    <h3 class="text-2xl">Trending</h3>
    <div class="rounded-4xl border border-white relative">
      <div class="bg-white absolute w-1/2 h-full top-0 rounded-4xl z-0"></div>
      <button
        class="px-4 py-1 rounded-full cursor-pointer -z-20"
        @click="movieStore.setType('popular')"
      >
        <span class="z-10 text-green-300 font-semibold relative">Popular</span>
      </button>
      <button
        class="px-4 py-1 rounded-full cursor-pointer -z-20"
        @click="movieStore.setType('top_rated')"
      >
        <span class="z-10 text-green-300 font-semibold relative">Top Rated</span>
      </button>
    </div>
  </div>
  <AppMovies />
</template>
