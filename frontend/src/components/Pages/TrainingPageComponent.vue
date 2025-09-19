<template>
  <SeoComponent v-if="trainings && trainings.seo?.id" :seo="trainings.seo" />

  <section class="text-text py-12">
    <div class="max-w-5xl mx-auto px-2 md:px-6">
      <TitleComponent
        v-if="trainings?.title"
        :title="trainings?.title"
        level="h2"
      />

      <TrainingComponent
        v-if="trainings?.trainings"
        v-for="(training, idx) in trainings.trainings"
        :key="idx"
        :training="training"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, toRefs, watch } from 'vue'
import { useContentLoader } from '@/composables/useContentLoader.ts'
import type { TrainingType } from '@/types/content/TrainingType.js'
import SeoComponent from '@/components/DesignSystem/Molecule/SeoComponent.vue'
import TrainingComponent from '@/components/DesignSystem/Molecule/TrainingComponent.vue'
import TitleComponent from '@/components/DesignSystem/Atoms/TitleComponent.vue'

const { content } = toRefs(useContentLoader('training'))

const trainings = ref<TrainingType>()

watch(
  content,
  (content) => {
    if (!content) return
    trainings.value = content
  },
  { immediate: true }
)
</script>
