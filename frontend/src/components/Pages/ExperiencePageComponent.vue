<template>
  <section v-if="experiences" class="bg-background text-text py-12">
    <div class="max-w-5xl mx-auto px-6">
      <TitleComponent
        :title="experiences?.title"
        level="h2"
        class="text-3xl font-title text-primary mb-8"
      />

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
import TitleComponent from "@components/DesignSystem/Atoms/TitleComponent.vue";

const { content: experiences } = toRefs(useContentLoader('experiences'))
</script>
