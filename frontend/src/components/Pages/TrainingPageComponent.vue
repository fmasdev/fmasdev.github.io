<template>
  <section v-if="trainings" class="text-text py-12">
    <div class="max-w-5xl mx-auto px-6">
      <h2 class="text-3xl font-title text-primary mb-8">
        {{ trainings.title }}
      </h2>

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

const {content: trainings} = toRefs(useContentLoader('training'))
</script>
