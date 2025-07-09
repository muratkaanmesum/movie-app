<script setup lang="ts">
import MovieCarousel from './components/Movies/MovieCarousel.vue'
import Navbar from './components/Navbar/AppNavbar.vue'
import SearchForm from './components/common/SearchForm.vue'
import SearchResults from './components/common/SearchResults.vue'
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
          <SearchResults
            :results="searchStore.searchResults"
            :is-loading="searchStore.isLoading"
            :search-query="searchStore.searchQuery"
            :show-results="searchStore.showResults"
            @select-result="searchStore.selectResult"
          />
        </div>
      </div>
    </div>
  </section>
  <main class="main-background pt-10 w-[90%] !m-auto">
    <MovieCarousel />
  </main>
</template>
