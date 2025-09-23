<template>
  <SeoComponent
    v-if="home?.seo"
    :seo="home.seo"
  />

  <main class="font-sans text-text bg-background">
    <section
      class="relative overflow-hidden bg-gradient-to-br from-primary to-secondary text-white"
    >
      <div
        class="max-w-7xl mx-auto px-6 lg:px-12 py-20 flex flex-col lg:flex-row items-center gap-12"
      >
        <div v-if="home" class="flex-1">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-title font-bold leading-tight">
            {{ home.presentation.title }}
          </h1>
          <p class="mt-6 text-lg sm:text-xl max-w-xl text-white/90">
            {{ home.presentation.presentation }}
          </p>

          <div class="mt-8 flex flex-wrap gap-4">
            <CtaComponent
              v-for="btn in home.presentation.cta"
              :link-to="btn.url"
              :title="btn.title"
              :background="btn.background ? btn.background : ''"
            />
          </div>
        </div>

        <div class="flex-1 flex justify-center">
          <div
            class="relative w-64 h-64 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/20"
          >
            <img
              :src="`/media/${me?.attributes.media.original.path}`"
              :alt="me?.attributes.media?.alternativeText || ''"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <HomeSectionComponent
      v-if="home && home.components.length"
      v-for="component in home.components"
      :key="component.id"
      :component="component"
    />

    <FooterComponent
      v-if="footerContent && meContent"
      :footerContent="footerContent"
      :meContent="meContent.attributes"
    />
  </main>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useContentLoader } from '@/composables/useContentLoader'
import type { MeType } from '@/types/content/MeType.js'
import type { HomeType } from '@/types/content/HomeType.js'
import type { FooterType } from '@/types/content/FooterType.js'
import FooterComponent from '@/components/DesignSystem/Organism/navigation/FooterComponent.vue'
import CtaComponent from '@/components/DesignSystem/Atoms/CtaComponent.vue'
import HomeSectionComponent from '@/components/DesignSystem/Organism/HomeSectionComponent.vue'
import SeoComponent from "@/components/DesignSystem/Molecule/SeoComponent.vue";

// Home content
const { content: homeContent } = useContentLoader('home')
const home = ref<HomeType>()
const expertise = ref()
const sportsHobby = ref()
const personnalValues = ref()

watch(
  homeContent,
  (homeContent) => {
    if (!homeContent) return
    home.value = homeContent
    console.log(home.value)
    expertise.value = homeContent.components[0]
    sportsHobby.value = homeContent.components[1]
    personnalValues.value = homeContent.components[2]
  },
  { immediate: true }
)

// Footer content
const { content: footerContent } = useContentLoader('footer')
const footer = ref<FooterType>()
watch(
  footerContent,
  (footerContent) => {
    if (!footerContent) return
    footer.value = footerContent
  },
  { immediate: true }
)

// me content
const { content: meContent } = useContentLoader<MeType>('me')
const me = ref<MeType>()

watch(
  meContent,
  (meContent) => {
    if (!meContent) return
    me.value = meContent
  },
  { immediate: true }
)
</script>

<style scoped>
/* Small adjustments for images */
.home-root img {
  display: block;
  width: 100%;
  height: auto;
}
</style>
