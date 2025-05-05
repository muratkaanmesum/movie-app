<script setup lang="ts">
// Props for customization
defineProps({
  placeholder: {
    type: String,
    default: 'Search for a movie, tv show, person',
  },
  showButton: {
    type: Boolean,
    default: true,
  },
  buttonText: {
    type: String,
    default: 'Search',
  },
  inputClass: {
    type: String,
    default: 'w-full bg-white rounded-4xl placeholder:text-gray-700 h-12 pl-5',
  },
})

// Emit search event when form is submitted
const emit = defineEmits(['search'])

// Handle form submission
const handleSubmit = (event: Event) => {
  event.preventDefault()
  const form = event.target as HTMLFormElement
  const input = form.querySelector('input') as HTMLInputElement
  emit('search', input.value)
}
</script>

<template>
  <form class="relative" @submit="handleSubmit">
    <input type="text" :class="inputClass" :placeholder="placeholder" />
    <button
      v-if="showButton"
      class="absolute right-0 bg-gradient-to-r h-full from-green-400 to-blue-400 text-white font-medium px-6 py-2 rounded-full shadow-md"
    >
      {{ buttonText }}
    </button>
  </form>
</template>
