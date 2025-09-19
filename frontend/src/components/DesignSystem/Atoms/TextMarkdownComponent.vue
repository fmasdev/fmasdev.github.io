<template>
  <div
    v-if="text"
    class="markdown prose prose-sm text-text max-w-none"
    v-html="renderedContent"
  ></div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { marked } from 'marked'

const props = defineProps<{
  text: string | null
}>()

const renderedContent = computed(() => {
  if (!props.text) return ''
  return marked(props.text)
})
</script>
