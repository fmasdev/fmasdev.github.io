<template>
  <div>
    <TitleComponent :title="title" level="h4" />
    <div
      class="flex flex-col md:flex-row flex-wrap items-center justify-left mb-10"
    >
      <div v-for="skill in skillsList" :key="skill.id">
        <!--        <div class="flex flex-row justify-between">-->
        <MediaComponent
          v-if="skill?.media"
          :alt="skill.media.alternativeText || ''"
          :src="`/media/${skill.media.original.path}`"
          classList="block mr-5 lg:max-h-20"
        />

        <!--          <SkillCircle-->
        <!--            v-if="skill.advancement && skill.advancement > 0"-->
        <!--            :percentage="skill.advancement"-->
        <!--            class-list="max-w-15 inline"-->
        <!--          />-->
        <!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MediaSkillsType } from '@types/content/SkillsType.js'
import MediaComponent from '@components/DesignSystem/Atoms/MediaComponent.vue'
import TitleComponent from '@components/DesignSystem/Atoms/TitleComponent.vue'

const props = defineProps<{
  title: string
  skillsList: MediaSkillsType[]
}>()
</script>
