<template>
  <component
    :is="level"
    :class="classes"
  >
    {{ title }}
  </component>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { TitleLevelType } from '@/types/common.js'

const props = defineProps<{
  title: string
  level: TitleLevelType
  classList?: string
}>()

const getTitleClass = (level: TitleLevelType): string => {
  switch (level) {
    case 'h2':
      return 'text-3xl font-title text-primary mb-8'
    case 'h3':
      return 'text-2xl font-title text-primary mb-2'
    case 'h4':
      return 'text-lg font-semibold text-secondary mb-2'
    case 'h5':
      return 'text-base font-medium text-secondary mb-1'
    case 'h6':
      return 'text-sm font-medium text-text uppercase tracking-wide mb-1'
  }
}

const titleClasses = getTitleClass(props.level)
const classes = ref<string>(titleClasses)

onMounted(() => {
  if (props.classList && props.classList.length) {
    classes.value += props.classList
  }
})
</script>
