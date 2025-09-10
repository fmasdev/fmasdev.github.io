<template>
  <div
    v-if="text"
    class="markdown prose prose-sm text-text max-w-none"
    v-html="renderedContent"
  ></div>
</template>

<script setup lang="ts">
import MarkdownIt from 'markdown-it'
import { computed } from 'vue'

const props = defineProps<{
  text: string | null
}>()

const markdown = new MarkdownIt()

const renderedContent = computed(() => markdown.render(props?.text ?? ''))
</script>
