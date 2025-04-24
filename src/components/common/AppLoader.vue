<script setup lang="ts">
defineProps<{
  color?: string
  class?: string
  state: boolean
}>()
</script>
<template>
  <div :class="['loader', $props.class]" :style="{ borderColor: color }" v-show="state"></div>
</template>
