<script setup lang="ts">
import AppImage from './components/common/AppImage.vue'
import AppMovies from './components/Movies/AppMovies.vue'
import Navbar from './components/Navbar/AppNavbar.vue'
</script>

<template>
  <header>
    <Navbar />
  </header>
  <section>
    <form class="w-full relative">
      <div class="w-5 absolute left-4 top-1/2 transform -translate-y-1/2">
        <AppImage src="/src/assets/search.svg" />
      </div>
      <input
        type="text"
        placeholder="Search A Movie"
        class="w-full bg-white h-12 placeholder:text-gray-500 pl-12 p-1 text-black"
      />
    </form>
  </section>
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
        <form class="relative">
          <input
            type="text"
            class="w-full bg-white rounded-4xl placeholder:text-gray-700 h-12 pl-5"
            placeholder="Search for a movie, tv show, person"
          />
          <button
            class="absolute right-0 bg-gradient-to-r h-full from-green-400 to-blue-400 text-white font-medium px-6 py-2 rounded-full shadow-md"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  </section>
  <main class="main-background pt-10 w-[90%] !m-auto">
    <AppMovies />
  </main>
</template>
