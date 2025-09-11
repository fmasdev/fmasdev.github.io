<template>

  <div class="sm:w-full p-4 border border-gray-200 rounded-lg bg-gray-50">
    <p class="font-medium text-primary mb-3">{{ project.name }}</p>
    <p class="text-gray-700 mb-4">
      {{ project.contribution }}
    </p>
    <!-- stack  -->
    <ListMediaComponent
      v-if="stackList.length && isStackListMedia"
      :title="$t('experiences.experience.project.stack')"
      :list="stackList"
    />
    <ListStringComponent
      v-else-if="stackList.length"
      :title="$t('experiences.experience.project.stack')"
      :list="stackList"
    />

    <!-- webservices  -->
    <ListMediaComponent
      v-if="webservicesList.length && isWebservicesListMedia"
      :title="$t('experiences.experience.project.webservices')"
      :list="webservicesList"
      classes="mt-4"
    />
    <ListStringComponent
      v-else-if="webservicesList.length"
      :title="$t('experiences.experience.project.webservices')"
      :list="webservicesList"
      classes="mt-4"
    />
  </div>
</template>

<script setup lang="ts">
import type {
  ProjectType,
  StackType,
  WebserviceType,
} from '@types/content/ProjectType.js'
import ListStringComponent from '@components/DesignSystem/Atoms/ListStringComponent.vue'
import ListMediaComponent from '@components/DesignSystem/Atoms/ListMediaComponent.vue'
import {ref} from 'vue'
import {currentDeviceType} from "../../../helpers/deviceHelper.js";

const props = defineProps<{
  project: ProjectType
}>()

// stack items
const stackList = ref()
const isStackListMedia = props.project?.stack_items.data.every(
  (item: StackType) => item.attributes?.logo?.media && currentDeviceType.value !== 'mobile'
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
  (item: WebserviceType) => item.attributes?.logo.media && currentDeviceType.value !== 'mobile'
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
