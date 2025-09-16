<template>
  <SeoComponent
    v-if="experiences?.seo.id"
    :seo="experiences.seo"
  />

  <section v-if="experiences" class="bg-background text-text py-12">
    <div class="max-w-5xl mx-auto px-2 md:px-6">
      <TitleComponent :title="experiences?.title" level="h2" />

      <ExperienceComponent
        v-for="(experience, idx) in experiences.experience"
        :key="idx"
        :experience="experience"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import {ref, toRefs, watch} from 'vue'
import { useContentLoader } from '@composables/useContentLoader'
import ExperienceComponent from '@components/DesignSystem/Molecule/ExperienceComponent.vue'
import TitleComponent from '@components/DesignSystem/Atoms/TitleComponent.vue'
import SeoComponent from "@components/DesignSystem/Molecule/SeoComponent.vue";
import type {ExperiencesType} from "@types/content/ExperiencesType.js";

const { content: experiencesContent } = toRefs(useContentLoader('experiences'))
const experiences = ref<ExperiencesType>()

watch(
  experiencesContent,
  (experiencesContent) => {
    if (!experiencesContent) return
    experiences.value = experiencesContent
  },
  { immediate: true }
)
</script>
