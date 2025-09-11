<template>
  <section v-if="skills" class="bg-background text-text py-12">
    <div class="max-w-5xl mx-auto px-6">
      <TitleComponent
        :title="skills?.title"
        level="h2"
        class="text-3xl font-title text-primary mb-8"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import {toRefs} from 'vue'
import {useContentLoader} from '@composables/useContentLoader.js'
import TitleComponent from "@components/DesignSystem/Atoms/TitleComponent.vue";

const {content: skills} = toRefs(useContentLoader('skills'))
const {content: feedbacks} = toRefs(useContentLoader('feedBacks'))


console.log(skills)
console.log(feedbacks)
</script>
