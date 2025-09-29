<template>
  <div
    class="text-sm text-gray-600"
    :class="classes"
  >
    <TitleComponent
      :title="title.title"
      :level="title.level"
    />

    <div class="flex items-center space-x-4 flex-wrap">
      <img
        v-for="item in list"
        :key="item.name ?? item.id"
        :alt="
          item.media ? (item.media.alternativeText ?? '') : (item.name ?? '')
        "
        :src="item.media ? `/media/${item.media.original.path}` : ''"
        class="max-h-10 lg:max-h-20 w-auto rounded border border-gray-300"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// import { computed } from 'vue'
import type { TitleType } from '@/types/common.js'
import type { StackType, WebserviceType } from '@/types/content/ProjectType.ts'
import type { SoftSkillType } from '@/types/content/SkillsType.ts'
import TitleComponent from '@/components/DesignSystem/Atoms/TitleComponent.vue'

defineProps<{
  title: TitleType
  list: (StackType | WebserviceType | SoftSkillType)[]
  classes?: string
}>()
</script>
