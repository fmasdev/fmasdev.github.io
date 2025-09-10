<template>
  <ul class="space-y-3">
    <li class="p-4 border border-gray-200 rounded-lg bg-gray-50">
      <p class="font-medium text-primary">{{ project.name }}</p>
      <p class="text-gray-700 mb-4">
        {{ project.contribution }}
      </p>
      <!-- stack  -->
      <ListMediaComponent
        v-if="isStackListMedia && stackList.length"
        :title="$t('experiences.experience.project.stack')"
        :list="stackList"
      />
      <ListStringComponent
        v-else
        :title="$t('experiences.experience.project.stack')"
        :list="stackList"
      />

      <!-- webservices  -->
      <ListMediaComponent
        v-if="isWebservicesListMedia && webservicesList.length"
        :title="$t('experiences.experience.project.webservices')"
        :list="webservicesList"
      />
      <ListStringComponent
        v-else
        :title="$t('experiences.experience.project.webservices')"
        :list="webservicesList"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import type {
  ProjectType,
  StackType,
  WebserviceType,
} from '@types/content/ProjectType.js'
import ListStringComponent from '@components/DesignSystem/Atoms/ListStringComponent.vue'
import ListMediaComponent from '@components/DesignSystem/Atoms/ListMediaComponent.vue'
import { ref } from 'vue'

const props = defineProps<{
  project: ProjectType
}>()

// stack items
const stackList = ref()
const isStackListMedia = props.project?.stack_items.data.every(
  (item: StackType) => item.attributes?.logo?.media
)

if (isStackListMedia) {
  stackList.value = props.project?.stack_items.data.map(
    (item: StackType) => item.attributes
  )
} else {
  stackList.value = props.project?.stack_items.data.map(
    (item: StackType) => item.attributes.name
  )
}

// webservices
const webservicesList = ref()
const isWebservicesListMedia = props.project?.webservices.data.every(
  (item: WebserviceType) => item.attributes?.logo.media
)

if (isWebservicesListMedia) {
  webservicesList.value = props.project?.webservices.data.map(
    (item: WebserviceType) => item.attributes
  )
} else {
  webservicesList.value = props.project?.webservices.data.map(
    (item: WebserviceType) => item.attributes.name
  )
}
</script>
