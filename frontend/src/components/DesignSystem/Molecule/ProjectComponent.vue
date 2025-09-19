<template>
  <div class="sm:w-full p-4 border border-gray-200 rounded-lg bg-gray-50">
    <p class="font-medium text-primary mb-3">{{ project.name }}</p>
    <p class="text-gray-700 mb-4">
      {{ project.contribution }}
    </p>
    <!-- stack  -->
    <ListMediaComponent
      v-if="stackList.length && isStackListMedia"
      :title="{
        title: $t('experiences.experience.project.stack'),
        level: 'h4',
      }"
      :list="stackList"
    />
    <ListStringComponent
      v-else-if="stackList.length"
      :title="{
        title: $t('experiences.experience.project.stack'),
        level: 'h4',
      }"
      :list="stackList"
    />

    <!--    &lt;!&ndash; webservices  &ndash;&gt;-->
    <!--    <ListMediaComponent-->
    <!--      v-if="webservicesList.length && isWebservicesListMedia"-->
    <!--      :title="{title: $t('experiences.experience.project.webservices'), level: 'h4'}"-->
    <!--      :list="webservicesList"-->
    <!--      classes="mt-4"-->
    <!--    />-->
    <!--    <ListStringComponent-->
    <!--      v-else-if="webservicesList.length"-->
    <!--      :title="{title: $t('experiences.experience.project.webservices'), level: 'h4'}"-->
    <!--      :list="webservicesList"-->
    <!--      classes="mt-4"-->
    <!--    />-->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { currentDeviceType } from '@/helpers/deviceHelper.ts'
import type {
  ProjectType,
  StackType,
  WebserviceType,
} from '@/types/content/ProjectType.js'
import ListStringComponent from '@/components/DesignSystem/Atoms/ListStringComponent.vue'
import ListMediaComponent from '@/components/DesignSystem/Atoms/ListMediaComponent.vue'

const props = defineProps<{
  project: ProjectType
}>()

// stack items
const stackList = ref()
const isStackListMedia =
  props.project?.stack_items.every((item: StackType) => item.media?.name) &&
  currentDeviceType.value !== 'mobile'

if (isStackListMedia) {
  stackList.value = props.project?.stack_items.map((item: StackType) => item)
} else {
  stackList.value = props.project?.stack_items.map(
    (item: StackType) => item.name
  )
}

// webservices
const webservicesList = ref()
const isWebservicesListMedia =
  props.project?.webservices.every(
    (item: WebserviceType) => item.media?.name
  ) && currentDeviceType.value !== 'mobile'

if (isWebservicesListMedia) {
  webservicesList.value = props.project?.webservices.map(
    (item: WebserviceType) => item
  )
} else {
  webservicesList.value = props.project?.webservices.map(
    (item: WebserviceType) => item.name
  )
}
</script>
