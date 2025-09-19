<template>
  <header class="fixed top-0 left-0 w-full bg-primary text-white z-50">
    <navbar-component
      v-if="meContent && links"
      :links="links"
      :me="meContent.attributes"
    />
  </header>
  <main class="bg-background text-text min-h-screen pt-16 px-0 md:px-6">
    <router-view />
  </main>
  <FooterComponent
    v-if="footerContent && meContent"
    :footerContent="footerContent"
    :meContent="meContent.attributes"
  />
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useContentLoader } from '@/composables/useContentLoader.ts'
import type { MeType } from '@/types/content/MeType.js'
import type { NavItemType } from '@/types/common.js'
import NavbarComponent from '@/components/DesignSystem/Organism/navigation/NavbarComponent.vue'
import FooterComponent from '@/components/DesignSystem/Organism/navigation/FooterComponent.vue'

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
