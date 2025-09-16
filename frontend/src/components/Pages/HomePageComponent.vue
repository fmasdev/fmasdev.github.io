<template>
  <!-- todo add seo -->
  <main class="font-sans text-text bg-background">

    <section class="relative overflow-hidden bg-gradient-to-br from-primary to-secondary text-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-12 py-20 flex flex-col lg:flex-row items-center gap-12">

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
              :classList="btn.background ? `bg-${btn.background}` : null"
            />
          </div>
        </div>

        <div class="flex-1 flex justify-center">
          <div class="relative w-64 h-64 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/20">
            <img :src="`/media/${me?.attributes.media.original.path}`"
                 :alt="me?.attributes.media?.alternativeText"
                 class="w-full h-full object-cover"/>
          </div>
        </div>
      </div>
    </section>

    <section
      v-if="expertise"
      class="py-16 max-w-7xl mx-auto px-6 lg:px-12"
    >
      <h2 class="text-3xl font-title text-primary mb-8 text-center">
        {{ expertise.title}}
      </h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="exp in expertise.cards"
          :key="exp.title"
          class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition"
        >
          <div class="text-3xl mb-3">{{ exp.icon }}</div>
          <h3 class="text-xl font-semibold text-secondary mb-2">{{ exp.title }}</h3>
          <p class="text-sm text-text/80 leading-relaxed">{{ exp.text }}</p>
        </div>
      </div>
    </section>

    <!-- Passions -->
    <section
      v-if="sportsHobby"
      class="py-16 bg-gradient-to-br from-background to-primaryLight/40"
    >
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 class="text-3xl font-title text-primary mb-8 text-center">
          {{ sportsHobby.title }}
        </h2>
        <div class="grid lg:grid-cols-3 gap-8 items-center">

          <div class="lg:col-span-2 grid sm:grid-cols-2 gap-6">


            <figure
              v-if="sportsHobby.cards[1].caption.length"
              class="overflow-hidden rounded-xl shadow-md"
            >
                <img
                  :src="`/media/${sportsHobby.cards[1].media.original.path}`"
                  :alt="sportsHobby.cards[1].media.name"
                  class="h-64 w-full object-cover hover:scale-105 transition"
                />
              <figcaption class="p-3 text-sm bg-white">
                {{ sportsHobby.cards[1].caption }}
              </figcaption>
            </figure>


            <figure
              v-if="sportsHobby.cards[2].caption.length"
              class="overflow-hidden rounded-xl shadow-md"
            >
              <img
                :src="`/media/${sportsHobby.cards[2].media.original.path}`"
                :alt="sportsHobby.cards[2].media.name"
                class="h-64 w-full object-cover hover:scale-105 transition"
              />
              <figcaption class="p-3 text-sm bg-white">
                {{ sportsHobby.cards[2].caption }}
              </figcaption>
            </figure>

          </div>
          <div
            v-if="!sportsHobby.cards[0].caption"
            class="bg-white p-6 rounded-xl shadow-md border border-gray-100"
          >
            <h3 class="text-lg font-semibold text-secondary mb-2">
              {{ sportsHobby.cards[0].title }}
            </h3>
            <p class="text-sm text-text/80 leading-relaxed">
              {{ sportsHobby.cards[0].text }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Valeurs -->
    <section
      v-if="personnalValues"
      class="py-16 bg-primary text-white"
    >
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <h3 class="text-2xl font-title mb-8 text-center">
          {{ personnalValues.title}}
        </h3>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="value in personnalValues.cards"
            :key="value.title"
            class="bg-white/10 p-6 rounded-xl text-center"
          >
            <div class="text-3xl mb-2">{{ value.icon }}</div>
            <div class="font-semibold text-lg">{{ value.title }}</div>
            <p class="text-sm text-white/80 mt-2">{{ value.text }}</p>
          </div>
        </div>

      </div>
    </section>

    <FooterComponent
      v-if="footerContent && meContent"
      :footerContent="footerContent"
      :meContent="meContent.attributes"
    />
  </main>
</template>

<script setup lang="ts">
import {useContentLoader} from "@composables/useContentLoader.js";
import type {MeType} from "@types/content/MeType.js";
import FooterComponent from "@components/DesignSystem/organism/navigation/FooterComponent.vue";
import CtaComponent from "@components/DesignSystem/Atoms/CtaComponent.vue";
import {ref, watch} from "vue";
import type {HomeType} from "@types/content/HomeType.js";
import type {FooterType} from "@types/content/FooterType.js";

// Home content
const {content: homeContent} = useContentLoader('home')
const home = ref<HomeType>()
const expertise = ref()
const sportsHobby = ref()
const personnalValues = ref()

watch(
  homeContent,
  (homeContent) => {
    if(!homeContent) return
    home.value = homeContent
    expertise.value = homeContent.components[0]
    sportsHobby.value = homeContent.components[1]
    personnalValues.value = homeContent.components[2]
  },
  {immediate: true}
)

// Footer content
const {content: footerContent} = useContentLoader('footer')
const footer = ref<FooterType>()
watch(
  footerContent,
  (footerContent) => {
    if (!footerContent) return
    console.log(footerContent)
    footer.value = footerContent
  },
  {immediate: true}
)

// me content
const {content: meContent} = useContentLoader<MeType>('me')
const me = ref<MeType>()

watch(
  meContent,
  (meContent) => {
    if(!meContent) return
    me.value = meContent
  },
  {immediate: true}
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
