<template>
  <div
    class="relative inline-block"
    @mouseenter="isVisible = true"
    @mouseleave="isVisible = false"
  >
    <slot />

    <transition name="fade">
      <div
        v-if="isVisible"
        class="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg bg-gray-800 text-white text-xs whitespace-nowrap shadow-lg z-50"
      >
        {{ text }}
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  text: string
}>()

const isVisible = ref(false)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
