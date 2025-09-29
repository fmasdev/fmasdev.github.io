<template xmlns="http://www.w3.org/1999/html">
  <p
    class="text-sm text-gray-600 mb-5"
    :class="classes"
  >
    <TitleComponent
      v-if="title?.title"
      :title="title.title"
      :level="title.level"
    />
    <span
      v-if="titleString"
      class="font-semibold mb-2"
    >
      {{ titleString }}:
    </span>
    {{ listString }}
  </p>
</template>

<script setup lang="ts">
import type { TitleType } from '@/types/common.js'
import TitleComponent from '@/components/DesignSystem/Atoms/TitleComponent.vue'

const props = defineProps<{
  title?: TitleType
  titleString?: string
  list: string[]
  classes?: string
  listUcFirst?: boolean
}>()

let listString = props.list.join(', ')

if (props.listUcFirst) {
  listString = listString.charAt(0).toUpperCase() + listString.slice(1)
}
</script>
