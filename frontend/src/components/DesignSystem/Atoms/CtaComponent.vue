<template>
  <RouterLink
    to="experience"
    :class="ctaClass"
    class="px-6 py-3 rounded-lg font-medium shadow-md transition transform hover:-translate-y-0.5"
  >
    {{ title }}
  </RouterLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  linkTo: string
  title: string
  background?: string
}>()

const ctaClass = computed(() => {
  switch (props.background) {
    case 'accent':
      return `!bg-accent`
    default:
      return ''
  }
})
</script>
