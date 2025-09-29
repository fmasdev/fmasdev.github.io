<template>
  <div
    v-if="project"
    class="w-full"
  >
    <!-- Hero -->
    <header
      class="flex flex-col md:flex-row items-stretch relative mb-12 md:mb-30"
    >
      <!-- Texte -->
      <div
        class="z-10 w-full md:w-2/3 relative group flex flex-col justify-center p-6 md:pl-20"
      >
        <TitleComponent
          :title="project.title"
          level="h2"
          class="text-3xl md:text-5xl font-bold mb-4"
        />

        <span
          class="inline-block px-4 py-1 mb-6 rounded-full text-sm font-semibold tracking-wide"
        >
          {{ $t(getStatus(project.status)) }}
        </span>
      </div>

      <!-- Image -->
      <div class="relative w-full md:w-1/3 h-64 md:h-96">
        <!-- Barre oblique -->
        <div
          class="absolute inset-0 bg-white -skew-x-6 origin-top-left shadow-lg hidden md:block -translate-x-[10px]"
        ></div>

        <img
          :src="`media/${project.media.original.path}`"
          alt="main project image"
          class="absolute inset-0 w-full h-full object-cover object-top"
        />
      </div>
    </header>

    <!-- Description -->
    <section class="mx-5 mb-12 max-w-5xl md:mx-auto">
      <TextMarkdownComponent
        :text="project.detail"
        class="text-lg leading-relaxed text-gray-700"
      />
    </section>

    <section class="mb-12 text-center max-w-3xl mx-auto">
      <!-- Stack list -->
      <div
        v-if="stackList"
        class="mb-10"
      >
        <ListMediaComponent
          v-if="stackList.kind === 'listMedia' && stackList.list.length"
          :title="{ title: $t('project.technical'), level: 'h3' }"
          :list="stackList.list"
        />
        <ListStringComponent
          v-if="stackList.kind === 'listString' && stackList.list.length"
          :title="{ title: $t('project.technical'), level: 'h3' }"
          :list="stackList.list"
        />
      </div>

      <!-- Webservices -->
      <div v-if="webservicesList?.list?.length">
        <ListMediaComponent
          v-if="
            webservicesList.kind === 'listMedia' && webservicesList.list.length
          "
          :title="{ title: $t('project.technical'), level: 'h3' }"
          :list="webservicesList.list"
        />
        <ListStringComponent
          v-if="
            webservicesList.kind === 'listString' && webservicesList.list.length
          "
          :title="{ title: $t('project.webservice'), level: 'h3' }"
          :list="webservicesList.list"
        />
      </div>
    </section>

    <!-- Links -->
    <section
      v-if="project.link.length"
      class="flex gap-4 mb-10 justify-around"
    >
      <CtaComponent
        v-for="link in project.link"
        :key="link.id"
        target="_blank"
        :title="link.title"
        :link-to="link.url"
        class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useContentLoader } from '@/composables/useContentLoader.ts'
import type {
  PersonalProjectContainerType,
  PersonalProjectListType,
  PersonalProjectType,
  ProjectListMediaType,
  ProjectListStringType,
} from '@/types/content/ProjectList.ts'
import type { StrapiListItemType } from '@/types/content/ProjectType'
import { currentDeviceType } from '@/helpers/deviceHelper.ts'
import { ProjectStatusEnum } from '@/enums/ProjectStatusEnum.ts'
import TitleComponent from '@/components/DesignSystem/Atoms/TitleComponent.vue'
import TextMarkdownComponent from '@/components/DesignSystem/Atoms/TextMarkdownComponent.vue'
import CtaComponent from '@/components/DesignSystem/Atoms/CtaComponent.vue'
import ListMediaComponent from '@/components/DesignSystem/Atoms/ListMediaComponent.vue'
import ListStringComponent from '@/components/DesignSystem/Atoms/ListStringComponent.vue'

const route = useRoute()
const slug = route.params.slug

const { content } = useContentLoader('projects')
const project = ref<PersonalProjectType>()
const stackList = ref<ProjectListMediaType | ProjectListStringType>()
const webservicesList = ref<ProjectListMediaType | ProjectListStringType>()

watch(
  content,
  (content) => {
    if (!content) return
    const currentProject = content.find(
      (project: PersonalProjectContainerType) =>
        project.attributes.slug === slug
    ).attributes

    project.value = currentProject
    stackList.value = getList(currentProject.stack_items.data)
    webservicesList.value = getList(currentProject.webservices.data)
  },
  { immediate: true }
)

const getStatus = (projectStatus: string): string => {
  const keys = Object.keys(ProjectStatusEnum) as Array<
    keyof typeof ProjectStatusEnum
  >

  if (keys.includes(projectStatus as keyof typeof ProjectStatusEnum)) {
    return ProjectStatusEnum[projectStatus as keyof typeof ProjectStatusEnum]
  }
  return ''
}

const getList = (list: StrapiListItemType[]): PersonalProjectListType => {
  const isListMedia =
    list.every((item) => item.attributes.media?.name) &&
    currentDeviceType.value !== 'mobile'

  if (isListMedia) {
    return {
      list: list.map((item) => item.attributes),
      kind: 'listMedia',
    }
  }

  return {
    list: list.map((item) => item.attributes.name),
    kind: 'listString',
  }
}
</script>
