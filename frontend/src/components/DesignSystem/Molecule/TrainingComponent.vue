<template>
  <div class="mb-12 p-6 rounded-2xl shadow-md bg-white border border-gray-200">
    <header
      class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4"
    >
      <div>
        <TitleComponent :title="training?.title" level="h3" />

        <div class="text-sm text-gray-600 flex items-center gap-2">
          <span>{{ startDate }}</span>
          <span>-</span>
          <span>{{ stopDate }}</span>
        </div>
      </div>

      <div>
        <MediaComponent
          :alt="training.logo?.media.alternativeText || ''"
          :src="`/media/${training?.logo.media.original.path}` || null"
          class="max-h-20xl"
        />
      </div>
    </header>

    <div class="mb-4">
      <p class="font-semibold text-gray-800">
        {{ training.company }}
      </p>
      <p class="text-sm text-gray-600">
        {{ training.city }}
      </p>
    </div>

    <TextMarkdownComponent :text="training.content" />
  </div>
</template>
<script setup lang="ts">
import type { TrainingContentType } from '@types/content/TrainingType.js'
import { dateHelper } from '../../../helpers/dateHelper.js'
import TextMarkdownComponent from '@components/DesignSystem/Atoms/TextMarkdownComponent.vue'
import MediaComponent from '@components/DesignSystem/Atoms/MediaComponent.vue'
import TitleComponent from '@components/DesignSystem/Atoms/TitleComponent.vue'

const props = defineProps<{
  training: TrainingContentType
}>()

const startDate = dateHelper.dateStringFormatToString(props.training.start)
const stopDate = dateHelper.dateStringFormatToString(props.training.stop)
</script>
