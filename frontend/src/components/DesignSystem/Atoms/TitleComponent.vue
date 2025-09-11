<template>
  <component
    :is="level"
    :class
  >
    {{ title }}
  </component>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  class?: string
}>()
</script>
