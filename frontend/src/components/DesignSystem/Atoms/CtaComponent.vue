<template>
  <RouterLink
    :to="linkTo"
    :class="[
      'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium shadow-md transition transform hover:-translate-y-0.5',
      textColor,
      ctaBg,
    ]"
  >
    <component
      v-if="props.icon && Icon && props.icon.position === 'left'"
      :is="Icon"
      :class="['w-4 h-4', textColor]"
    />

    {{ title }}

    <component
      v-if="props.icon && Icon && props.icon.position === 'right'"
      :is="Icon"
      :class="['w-4 h-4', textColor]"
    />
  </RouterLink>
</template>

<script setup lang="ts">
import {computed} from 'vue'

const props = defineProps<{
  linkTo: string
  title: string
  background?: 'accent' | 'primary' | 'primary-light'
  textColor?: string
  icon?: {
    position: 'right' | 'left'
    name: string
  }
}>()

const icons = import.meta.glob('@/assets/icons/*.svg', { eager: true })
const Icon = computed(() => {
  if (!props.icon?.name) return null
  return icons[`/src/assets/icons/${props.icon.name}.svg`] ?? null
})

const textColor = computed(() => {
  switch (props.textColor) {
    case 'accent':
      return `text-accent`
    case 'primaryLight':
      return  'text-primary-light'
    case 'secondary':
      return 'text-secondary'
    default:
      return ''
  }
})

const ctaBg = computed(() => {
  switch (props.background) {
    case 'accent':
      return `!bg-accent`
    case 'primary':
      return `!bg-primary`
    case 'primary-light':
      return `!bg-primary-light`
    default:
      return ''
  }
})
</script>
