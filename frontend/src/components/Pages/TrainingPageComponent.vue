<template>
  <section v-if="trainings" class="text-text py-12">
    <div class="max-w-5xl mx-auto px-6">
      <TitleComponent
        :title="trainings?.title"
        level="h2"
        class="text-3xl font-title text-primary mb-8"
      />

      <TrainingComponent
        v-for="(training, idx) in trainings.content"
        :key="idx"
        :training="training"
      />

    </div>
  </section>
</template>

<script setup lang="ts">
import {toRefs} from 'vue'
import TrainingComponent from '@components/DesignSystem/Molecule/TrainingComponent.vue'
import {useContentLoader} from '@composables/useContentLoader.js'
import TitleComponent from "@components/DesignSystem/Atoms/TitleComponent.vue";

const {content: trainings} = toRefs(useContentLoader('training'))
</script>
