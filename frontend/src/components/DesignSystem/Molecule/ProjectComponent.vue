<template>
  <ul class="space-y-3">
    <li class="p-4 border border-gray-200 rounded-lg bg-gray-50">
      <p class="font-medium text-primary">{{ project.name }}</p>
      <p class="text-gray-700 mb-4">
        {{ project.contribution }}
      </p>

      <ListComponent
        v-if="stackNameList.length"
        :title="$t('experiences.experience.project.stack')"
        :list="stackNameList"
      />

      <list-component
        v-if="webservicesList.length"
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
import ListComponent from '@components/DesignSystem/Atoms/ListMediaComponent.vue'

const props = defineProps<{
  project: ProjectType
}>()

const stackNameList = props.project?.stack_items.data.map(
  (item: StackType) => item.attributes.name
)
const webservicesList = props.project?.webservices.data.map(
  (item: WebserviceType) => item.attributes.name
)
console.log(webservicesList)
</script>
