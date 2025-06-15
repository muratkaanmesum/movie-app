<script setup lang="ts">
import { debounce } from '@/utils/utils'
import { ref } from 'vue'

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
    default:
      'w-full bg-white rounded-4xl placeholder:text-gray-700 h-12 pl-5 text-black outline-none',
  },
})

const emit = defineEmits(['search'])
const showResults = ref(false)
const searchValue = ref('')

// Temporary search results for the dropdown
const searchResults = ref([
  { id: 1, title: 'The Shawshank Redemption', type: 'movie' },
  { id: 2, title: 'The Godfather', type: 'movie' },
  { id: 3, title: 'The Dark Knight', type: 'movie' },
  { id: 4, title: 'Breaking Bad', type: 'tv' },
  { id: 5, title: 'Tom Hanks', type: 'person' },
])

const handleInput = debounce((event: Event) => {
  const input = event.target as HTMLInputElement
  searchValue.value = input.value
  
  if (input.value.trim()) {
    showResults.value = true
  } else {
    showResults.value = false
  }
  
  emit('search', input.value)
}, 500)

const handleSubmit = (event: Event) => {
  event.preventDefault()
  const form = event.target as HTMLFormElement
  const input = form.querySelector('input') as HTMLInputElement
  emit('search', input.value)
  showResults.value = false
}

const selectResult = (result: any) => {
  searchValue.value = result.title
  emit('search', result.title)
  showResults.value = false
}

// Close dropdown when clicking outside
const closeResults = () => {
  setTimeout(() => {
    showResults.value = false
  }, 200)
}
</script>

<template>
  <form class="relative" @submit="handleSubmit">
    <input type="text" :class="inputClass" :placeholder="placeholder" @input="handleInput" />
    <button
      v-if="showButton"
      class="absolute right-0 bg-gradient-to-r h-full from-green-400 to-blue-400 text-white font-medium px-6 py-2 rounded-full shadow-md"
    >
      {{ buttonText }}
    </button>
  </form>
</template>
