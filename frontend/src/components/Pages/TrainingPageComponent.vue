<template>
  <SeoComponent
    v-if="seoData?.id"
    :seo="seoData"
  />

  <section v-if="trainings" class="text-text py-12">
    <div class="max-w-5xl mx-auto px-2 md:px-6">
      <TitleComponent :title="trainings?.title" level="h2" />

      <TrainingComponent
        v-for="(training, idx) in trainings.content"
        :key="idx"
        :training="training"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import {ref, toRefs, watch} from 'vue'
import TrainingComponent from '@components/DesignSystem/Molecule/TrainingComponent.vue'
import { useContentLoader } from '@composables/useContentLoader.js'
import TitleComponent from '@components/DesignSystem/Atoms/TitleComponent.vue'
import SeoComponent from "@components/DesignSystem/Molecule/SeoComponent.vue";

const { content: trainings } = toRefs(useContentLoader('training'))

const seoData = ref()

watch(
  trainings,
  (trainings) => {
    if (!trainings) return
    seoData.value = trainings.seo
  },
  { immediate: true }
)
</script>
