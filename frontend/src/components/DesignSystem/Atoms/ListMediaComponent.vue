<template>
  <div class="text-sm text-gray-600" :class="classes">
    <div class="font-semibold mb-2">{{ title }}:</div>
    <div class="flex items-center space-x-4 flex-wrap">
      <img
        v-for="item in list"
        :alt="item.logo.media.alternativeText || item.name"
        :src="`/media/${item.logo.media.original.path}`"
        class="md:max-h-10 max-h-20 w-auto rounded border border-gray-300"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MediaParentType } from '@types/content/MediaType.js'

defineProps<{
  title: string
  list: MediaParentType[]
  classes?: string
}>()
</script>
z
