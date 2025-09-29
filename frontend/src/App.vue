<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, provide, watch } from 'vue'
import { updateDeviceType, currentDeviceType } from './helpers/deviceHelper'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

watch(
  () => locale.value,
  (lang) => {
    if (!lang) return

    document.documentElement.lang = lang
  },
  { immediate: true }
)

onMounted(() => {
  updateDeviceType()
  window.addEventListener('resize', updateDeviceType)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateDeviceType)
})

provide('deviceType', currentDeviceType)
</script>
