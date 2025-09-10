<template>
  <p class="text-sm text-gray-600">
    <span class="font-semibold"> {{ title }}: </span>
    {{ list.join(', ') }}
  </p>
</template>
<script setup lang="ts">
defineProps<{
  title: string
  list: string[]
}>()
</script>
