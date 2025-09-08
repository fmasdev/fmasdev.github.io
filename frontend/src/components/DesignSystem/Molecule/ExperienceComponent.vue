<template>
  <div class="mb-12 p-6 rounded-2xl shadow-md bg-white border border-gray-200">
    <div
      class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4"
    >
      <div>
        <h3 class="text-xl font-semibold text-primary">
          {{ experience.title }}
        </h3>
        <p class="text-sm text-gray-600">
          {{ experience.company }} • {{ experience.region }}
          <span
            v-if="jobMode"
            class="ml-2 px-2 py-0.5 rounded-full text-xs font-medium bg-primaryLight text-primary"
          >
            {{ $t(jobMode) }}
          </span>
        </p>
      </div>

      <p class="text-sm text-gray-500 mt-2 sm:mt-0">
        {{ startDate }} – {{ stopDate || $t('experience.present') }}
      </p>
    </div>

    <p class="text-gray-700 mb-4">
      {{ experience.content }}
    </p>

    <div
      class="mt-4"
      v-if="experience.__component === 'experience.experience-item'"
    >
      <h4 class="text-lg font-semibold text-secondary mb-2">
        {{ $t('experiences.experience.projects') }} :
      </h4>

      <ProjectComponent
        v-for="(project, idx) in (experience as ExperienceType).project"
        :key="idx"
        :project="project"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { dateHelper } from '../../../helpers/dateHelper.js'
import { JobModeEnum } from '../../../enums/JobModeEnum.js'
import ProjectComponent from '@components/DesignSystem/Molecule/ProjectComponent.vue'
import type {
  ExperienceExperienceType,
  ExperienceType,
} from '@types/content/ExperiencesType.js'

const props = defineProps<{
  experience: ExperienceType | ExperienceExperienceType
}>()

const startDate = dateHelper.dateStringFormatToString(props.experience.start)
const stopDate = dateHelper.dateStringFormatToString(props.experience.stop)

let jobMode: string | null = null

if (props.experience.__component === 'experience.experience-item') {
  jobMode = JobModeEnum[props.experience.remote]
}
</script>
