<template>
  <RouterLink
    v-if="link?.url && src"
    :to="link?.url"
  >
    <img
      :alt="alt"
      :src="src"
      class="max-h-20 w-auto rounded border border-gray-300"
      :class="classList"
    />
  </RouterLink>

  <img
    v-else-if="src"
    :alt="alt"
    :src="src"
    class="max-h-20 w-auto rounded border border-gray-300"
    :class="classList"
  />
</template>

<script setup lang="ts">
defineProps<{
  alt: string
  src: string | null
  classList?: string
  link?: {
    url: string
    target?: '_self' | '_blank'
  }
}>()
</script>
