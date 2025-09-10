<template>
  <RouterLink
    v-if="link?.url && src"
    :to="link?.url"
    :target="link.url?.target || '_self'"
  >
    <img
      :alt="alt"
      :src="src"
      class="max-h-20 w-auto rounded border border-gray-300"
    />
  </RouterLink>

  <img
    v-else-if="src"
    :alt="alt"
    :src="src"
    class="max-h-20 w-auto rounded border border-gray-300"
  />
</template>

<script setup lang="ts">
defineProps<{
  alt: string
  src: string | null
  class?: string
  link?: {
    url: string
    target?: '_self' | '_blank'
  }
}>()

</script>
