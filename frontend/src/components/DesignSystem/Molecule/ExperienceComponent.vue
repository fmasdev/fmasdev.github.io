<template>
  <div class="mb-12 p-6 rounded-2xl shadow-md bg-white border border-gray-200  ">
    <div
      class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4"
    >
      <div>
        <TitleComponent
          :title="experience?.title"
          level="h3"
          class="text-2xl font-title text-primary mb-2"
        />
        <p class="text-sm text-gray-600">
          {{ experience.company }} • {{ experience.region }}
          <span
            v-if="jobMode"
            class="ml-2 px-2 py-0.5 rounded-full text-xs font-medium bg-primaryLight text-primary"
          >
            {{ $t(jobMode) }}
          </span>
        </p>
        <p class="text-sm text-gray-500 mt-2 sm:mt-0">
          {{ startDate }} – {{ stopDate || $t('experience.present') }}
        </p>
      </div>

      <div>
        <MediaComponent
          class=""
          :alt="experience.logo.media.alternativeText || ''"
          :src="`/media/${experience.logo.media.original.path}`"
        />
      </div>
    </div>

    <p class="text-gray-700 mb-4">
      {{ experience.content }}
    </p>

    <div
      class="mt-4"
      v-if="experience.__component === 'experience.experience-item'"
    >
      <TitleComponent
        :title="$t('experiences.experience.projects')"
        level="h4"
        class="text-lg font-semibold text-secondary mb-2"
      />

      <ProjectComponent
        v-for="(project, idx) in (experience as ExperienceType).project"
        :key="idx"
        :project="project"
        :class="idx > 0 ? 'mt-5' : ''"
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
import MediaComponent from '@components/DesignSystem/Atoms/MediaComponent.vue'
import TitleComponent from "@components/DesignSystem/Atoms/TitleComponent.vue";

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
