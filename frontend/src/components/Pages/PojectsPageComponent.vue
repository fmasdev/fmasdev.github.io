<template>
  <section v-if="projects" class="text-text py-12">
    <div class="max-w-5xl mx-auto px-2 md:px-6">
      <TitleComponent :title="projects?.title" level="h2" />
    </div>
  </section>
</template>

<script setup lang="ts">
import TitleComponent from '@components/DesignSystem/Atoms/TitleComponent.vue'

const projects = { title: 'todo' }
</script>
