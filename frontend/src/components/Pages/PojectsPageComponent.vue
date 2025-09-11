<template>
  <div class="max-w-5xl mx-auto px-6">
    <TitleComponent
      :title="project?.title"
      level="h2"
      class="text-3xl font-title text-primary mb-8"
    />




  </div>
</template>

<script setup lang="ts">
import TitleComponent from "@components/DesignSystem/Atoms/TitleComponent.vue";



const project = { title : 'todo'}
</script>
