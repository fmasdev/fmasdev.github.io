<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, provide } from 'vue'
import { updateDeviceType, currentDeviceType } from './helpers/deviceHelper.js'

onMounted(() => {
  updateDeviceType()
  window.addEventListener('resize', updateDeviceType)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateDeviceType)
})

provide('deviceType', currentDeviceType)
</script>
