<script setup lang="ts">
import AppImage from '../common/AppImage.vue'
import AppRating from '../common/AppRating.vue'
import { useFavoritesStore } from '@/stores/favorites'

defineProps({
  name: {
    type: String,
    default: 'Movie Name',
  },
  date: {
    type: String,
    default: '2025',
  },
  imageUrl: {
    type: String,
    default:
      'https://plus.unsplash.com/premium_photo-1666777247416-ee7a95235559?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fHww',
  },
  rating: {
    type: Number,
    default: 0,
  },
  id: {
    type: Number,
    default: 0,
  },
})

const favoritesStore = useFavoritesStore()
</script>

<template>
  <div class="h-full w-36 min-w-[144px] flex-shrink-0 relative">
    <button
      @click="favoritesStore.toggleFavorite(id)"
      class="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center"
    >
      <img
        v-if="favoritesStore.isFavorite(id)"
        src="@/assets/star-blue.svg"
        class="w-4 h-4"
        alt="Favorite"
      />
      <img v-else src="@/assets/star-black.svg" class="w-4 h-4" alt="Not favorite" />
    </button>
    <div class="mb-2">
      <AppImage :src="imageUrl" class="w-full h-auto rounded-md" />
    </div>
    <div class="mt-2">
      <header class="text-sm text-white font-bold truncate shadow">{{ name }}</header>
      <span class="text-xs text-gray-500">{{ date }}</span>
    </div>
    <div class="absolute bottom-12 left-1">
      <AppRating :rating="rating" />
    </div>
  </div>
</template>
