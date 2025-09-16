<template>
  <RouterLink
    to="experience"
    class="px-6 py-3 rounded-lg font-medium shadow-md transition transform hover:-translate-y-0.5"
    :class="classList"
  >
    Voir mes expériences
  </RouterLink>
</template>

<script setup lang="ts">

const props = defineProps<{
  linkTo: string
  title: string
  classList?: string | null
}>()
console.log('ctacomponent')

</script>
