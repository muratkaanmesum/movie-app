<script setup lang="ts">
import AppImage from '../common/AppImage.vue'

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
})
</script>

<template>
  <div class="h-full w-36 min-w-[144px] flex-shrink-0 relative">
    <div class="mb-2">
      <AppImage :src="imageUrl" class="w-full h-auto rounded-md" />
    </div>
    <div class="mt-2">
      <header class="text-sm text-white font-bold truncate shadow">{{ name }}</header>
      <span class="text-xs text-gray-500">{{ date }}</span>
    </div>
    <div class="absolute bottom-12 left-0 bg-black rounded-full">
      <div class="relative w-10 h-10">
        <svg class="w-full h-full" viewBox="0 0 36 36">
          <path
            class="text-gray-700"
            stroke="currentColor"
            stroke-width="3"
            fill="none"
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            :class="{
              'text-lime-400': rating > 70,
              'text-yellow-400': rating > 40 && rating <= 70,
              'text-red-500': rating <= 40
            }"
            stroke="currentColor"
            stroke-width="3"
            :stroke-dasharray="`${rating}, 100`"
            fill="none"
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <div class="absolute inset-0 flex items-center justify-center text-white text-xs font-bold">
          {{ rating }}%
        </div>
      </div>
    </div>
  </div>
</template>
