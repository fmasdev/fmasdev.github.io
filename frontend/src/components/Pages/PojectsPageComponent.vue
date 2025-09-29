<template>
  <section
    v-if="projectList"
    class="text-text py-12"
  >
    <div class="max-w-5xl mx-auto px-2 md:px-6">
      <TitleComponent
        :title="projectList.title"
        level="h2"
      />
    </div>

    <div
      v-for="project in projectList.projects"
      class="flex items-stretch h-90 relative mb-30"
    >
      <div class="w-1/3 h-full overflow-hidden relative group">
        <img
          :src="`/media/${project.media.original.path}`"
          :alt="project.media.alternativeText ?? ''"
          class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div class="w-2/3 h-full bg-white relative">
        <div
          class="absolute left-0 top-0 h-full w-12 bg-white -skew-x-6 -translate-x-1/2 z-10 shadow-lg"
        ></div>

        <div
          class="relative z-20 p-8 flex flex-col justify-between h-full ml-5"
        >
          <TitleComponent
            :title="project.title"
            level="h3"
          />

          <TextMarkdownComponent :text="project.summary" />

          <div class="flex flex-row justify-between">
            <p class="text-gray-600">{{ $t(getStatus(project.status)) }}</p>
            <CtaComponent
              :title="$t('projectList.moreInformations')"
              :link-to="`/project/${project.slug}`"
              text-color="accent"
              :icon="{ position: 'right', name: 'arrow-right' }"
            />
            <!-- todo arrow right icon to add to cta component -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useContentLoader } from '@/composables/useContentLoader.ts'
import type { ProjectListType } from '@/types/content/ProjectList.ts'
import TitleComponent from '@/components/DesignSystem/Atoms/TitleComponent.vue'
import TextMarkdownComponent from '@/components/DesignSystem/Atoms/TextMarkdownComponent.vue'
import CtaComponent from '@/components/DesignSystem/Atoms/CtaComponent.vue'
import { ProjectStatusEnum } from '@/enums/ProjectStatusEnum.ts'

const { content } = useContentLoader('projectList')
const projectList = ref<ProjectListType>()

const getStatus = (projectStatus: string): string => {
  const keys = Object.keys(ProjectStatusEnum) as Array<
    keyof typeof ProjectStatusEnum
  >

  if (keys.includes(projectStatus as keyof typeof ProjectStatusEnum)) {
    return ProjectStatusEnum[projectStatus as keyof typeof ProjectStatusEnum]
  }
  return ''
}

watch(
  content,
  (content) => {
    if (!content) return
    projectList.value = content
    console.log(projectList)
  },
  { immediate: true }
)
</script>
