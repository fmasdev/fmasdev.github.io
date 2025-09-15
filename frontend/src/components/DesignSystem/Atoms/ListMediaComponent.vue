<template>
  <div class="text-sm text-gray-600" :class="classes">
    <TitleComponent
      :title="title.title"
      :level="title.level"
    />

    <div class="flex items-center space-x-4 flex-wrap">
      <img
        v-for="item in list"
        :alt="item.logo.media.alternativeText || item.name"
        :src="`/media/${item.logo.media.original.path}`"
        class="max-h-10 lg:max-h-20 w-auto rounded border border-gray-300"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MediaParentType } from '@types/content/MediaType.js'
import TitleComponent from "@components/DesignSystem/Atoms/TitleComponent.vue";
import type {TitleType } from "@types/common.js";

defineProps<{
  title: TitleType
  list: MediaParentType[]
  classes?: string
}>()
</script>
z
