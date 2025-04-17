<script setup lang="ts">
import { ref } from 'vue'
import AppImage from './components/common/AppImage.vue'
import Navbar from './components/Navbar/AppNavbar.vue'

const val = ref('')
const test = (e: Event) => {
  e.preventDefault()
  alert(val.value)
}
</script>

<template>
  <header>
    <Navbar />
  </header>
  <section>
    <form class="w-full relative" @submit="test">
      <div class="w-5 absolute left-0 top-1/2 transform -translate-y-1/2">
        <AppImage src="/src/assets/search.svg" />
      </div>
      <input
        type="text"
        placeholder="Search A Movie"
        class="w-full bg-white placeholder:text-gray-500 pl-8 p-1 text-black"
        v-model="val"
      />
    </form>
  </section>
</template>
