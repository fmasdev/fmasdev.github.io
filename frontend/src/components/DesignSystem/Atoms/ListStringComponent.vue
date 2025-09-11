<template>
  <p class="text-sm text-gray-600" :class="classes">
    <span class="font-semibold mb-2"> {{ title }}: </span>
    {{ list.join(', ') }}
  </p>
</template>
<script setup lang="ts">
defineProps<{
  title: string
  list: string[]
  classes?: string
}>()
</script>
