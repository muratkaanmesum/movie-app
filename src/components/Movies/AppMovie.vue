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
})
</script>

<template>
  <div class="h-full w-36 min-w-[144px] flex-shrink-0">
    <div class="mb-2">
      <AppImage :src="imageUrl" class="w-full h-auto rounded-md" />
    </div>
    <div class="mt-2">
      <header class="text-sm text-black font-bold truncate">{{ name }}</header>
      <span class="text-xs text-gray-500">{{ date }}</span>
    </div>
  </div>
</template>
