<template>
  <!-- Cercle de fond -->
  <svg
    class="w-full h-full rotate-[-90deg]"
    viewBox="0 0 36 36"
    :class="classList"
  >
    <circle
      class="text-gray-200"
      stroke-width="4"
      stroke="currentColor"
      fill="none"
      cx="18"
      cy="18"
      r="16"
    />
    <circle
      class="text-primary"
      stroke-width="4"
      :stroke="color"
      stroke-dasharray="100"
      :stroke-dashoffset="100 - percentage"
      stroke-linecap="round"
      fill="none"
      cx="18"
      cy="18"
      r="16"
    />
  </svg>
  <!--  <span class="absolute inset-0 flex items-center justify-center text-sm font-semibold text-text">-->
  <!--    {{ percentage }}%-->
  <!--  </span>-->
</template>

<script setup lang="ts">
defineProps({
  percentage: { type: Number, required: true },
  color: { type: String, default: '#0038A8' }, // bleu alpine profond de ton thème
  classList: { type: String, required: false },
})
</script>

<style scoped></style>
