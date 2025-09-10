<template>
  <header class="fixed top-0 left-0 w-full bg-primary text-white z-50">
    <navbar-component :links="links" />
  </header>
  <main class="bg-background text-text min-h-screen pt-16 px-6">
    <router-view />
  </main>
  <FooterComponent
    v-if="footerContent && meContent"
    :footerContent="footerContent"
    :meContent="meContent"
  />
</template>

<script setup lang="ts">
import NavbarComponent from '@components/DesignSystem/organism/navigation/NavbarComponent.vue'
import FooterComponent from '@components/DesignSystem/organism/navigation/FooterComponent.vue'
import { useRouter } from 'vue-router'
import { useContentLoader } from '@composables/useContentLoader.js'
import type { NavItemType } from '@types/common.js'
import type { MeType } from '@types/content/MeType.js'

// Navigation
const router = useRouter()
const currentRoute = router?.currentRoute?.value.path
const links: NavItemType[] = router
  .getRoutes()
  .map((route) => ({
    labelKey: route.meta.labelKey,
    path: route.path,
    isActive: currentRoute === route.path,
  }))
  .filter((route) => !!route.labelKey && route.path !== '/')

// Footer content
const { content: footerContent } = useContentLoader('footer')

// me content
const { content: meContent } = useContentLoader<MeType>('me')
</script>

<style scoped></style>
