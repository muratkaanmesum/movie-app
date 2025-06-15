<script setup lang="ts">
import MovieCarousel from './components/Movies/MovieCarousel.vue'
import Navbar from './components/Navbar/AppNavbar.vue'
import SearchForm from './components/common/SearchForm.vue'
import { useSearchStore } from './stores/search'
import { debounce } from '@/utils/utils.ts'

const searchStore = useSearchStore()

const handleSearch = debounce((query: string) => {
  searchStore.searchMovies(query)
}, 500)
</script>

<template>
  <header>
    <Navbar />
  </header>

  <section>
    <div
      class="w-full h-96 bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style="background-image: url('/src/assets/moviePoster.jpg')"
    >
      <div class="text-white flex gap-20 flex-col">
        <div class="">
          <h1 class="font-bold text-5xl">Welcome</h1>
          <h3 class="text-4xl">Millions of movies, TV shows and people to discover. Explore now</h3>
        </div>
        <div class="relative">
          <SearchForm @search="handleSearch" @blur="searchStore.closeResults" />
          <div
            v-if="searchStore.showResults || searchStore.isLoading"
            class="absolute z-32 mt-1 w-full bg-white rounded-lg shadow-lg max-h-64 overflow-y-auto"
          >
            <div v-if="searchStore.isLoading" class="flex justify-center items-center py-4">
              <div class="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
            </div>

            <div
              v-else-if="searchStore.searchResults.length === 0 && searchStore.searchQuery"
              class="py-4 px-4 text-center text-gray-500"
            >
              No movies found matching "{{ searchStore.searchQuery }}"
            </div>

            <ul v-else class="py-2">
              <li
                v-for="result in searchStore.searchResults"
                :key="result.id"
                class="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                @mousedown="searchStore.selectResult(result)"
              >
                <div class="w-10 h-14 flex-shrink-0 mr-3">
                  <img
                    v-if="result.poster_path"
                    :src="`https://image.tmdb.org/t/p/w92${result.poster_path}`"
                    :alt="result.title"
                    class="w-full h-full object-cover rounded"
                  />
                  <div
                    v-else
                    class="w-full h-full bg-gray-200 rounded flex items-center justify-center text-gray-400 text-xs"
                  >
                    No image
                  </div>
                </div>

                <div class="flex-1">
                  <div class="font-medium text-gray-900">{{ result.title }}</div>
                  <div v-if="result.release_date" class="text-sm text-gray-500">
                    {{ new Date(result.release_date).getFullYear() }}
                  </div>
                </div>
                <div class="text-xs bg-gray-200 rounded-full px-2 py-1 text-gray-700 capitalize">
                  {{ result.type }}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <main class="main-background pt-10 w-[90%] !m-auto">
    <MovieCarousel />
  </main>
</template>
