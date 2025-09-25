<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold">Projet : {{ slug }}</h2>
    <p>Ici tu affiches les détails du projet correspondant au slug.</p>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useContentLoader } from '@/composables/useContentLoader.ts'
import type { ProjectType } from '@/types/content/ProjectType.ts'
import type { PersonalProjectContainerType } from '@/types/content/ProjectList.ts'

const route = useRoute()
const slug = route.params.slug

const { content } = useContentLoader('projects')
const project = ref<ProjectType>()

watch(
  content,
  (content) => {
    if (!content) return
    project.value = content.find(
      (project: PersonalProjectContainerType) =>
        project.attributes.slug === slug
    ).attributes
  },
  { immediate: true }
)

console.log(slug)
</script>
