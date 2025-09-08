<template>
  <section v-if="experiences" class="bg-background text-text py-12">
    <div class="max-w-5xl mx-auto px-6">
      <h2 class="text-3xl font-title text-primary mb-8">
        {{ experiences?.title }}
      </h2>

      <ExperienceComponent
        v-for="(experience, idx) in experiences.content"
        :key="idx"
        :experience="experience"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import ExperienceComponent from '@components/DesignSystem/Molecule/ExperienceComponent.vue'
import { useContentLoader } from '@composables/useContentLoader'
import { toRefs } from 'vue'

const { content: experiences } = toRefs(useContentLoader('experiences'))
console.log(experiences)
</script>
