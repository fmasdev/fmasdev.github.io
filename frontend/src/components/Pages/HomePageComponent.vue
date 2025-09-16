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

            <div
              v-for="card in sportsHobby.cards"
            >
<!--              <figure-->
<!--                v-if="card.caption.length"-->
<!--                class="overflow-hidden rounded-xl shadow-md"-->
<!--              >-->
<!--&lt;!&ndash;                <img :src="`/media/${}`" alt="Ski" class="h-64 w-full object-cover hover:scale-105 transition" />&ndash;&gt;-->
<!--                <figcaption class="p-3 text-sm bg-white">{{ card.caption }}</figcaption>-->
<!--              </figure>-->
            </div>

            <figure class="overflow-hidden rounded-xl shadow-md">

              <figcaption class="p-3 text-sm bg-white">Ski alpin — précision et plaisir de la montagne</figcaption>
            </figure>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h3 class="text-lg font-semibold text-secondary mb-2">Randonnée nature</h3>
            <p class="text-sm text-text/80 leading-relaxed">
              Les randonnées m’offrent un équilibre entre effort et contemplation, un moyen de
              recharger mon énergie et d’alimenter ma créativité.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Valeurs -->
    <section class="py-16 bg-primary text-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <h3 class="text-2xl font-title mb-8 text-center">Mes valeurs</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div v-for="value in values" :key="value.title" class="bg-white/10 p-6 rounded-xl text-center">
            <div class="text-3xl mb-2">{{ value.icon }}</div>
            <div class="font-semibold text-lg">{{ value.title }}</div>
            <p class="text-sm text-white/80 mt-2">{{ value.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <FooterComponent
      v-if="footerContent && meContent"
      :footerContent="footerContent"
      :meContent="meContent"
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
import HomeSectionComponent from "@components/DesignSystem/organism/HomeSectionComponent.vue";

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
    console.log(expertise.value)
    console.log(sportsHobby.value)
  },
  {immediate: true}
)

// Footer content
// const {content: footerContent} = useContentLoader('footer')
const footer = ref<FooterType>()

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
//
// const expertise = [
//   {
//     icon: "💻",
//     title: "Développement fullstack",
//     desc: "Backend API Platform, Symfony & Strapi, intégration front moderne avec Vue.js et Nuxt.",
//   },
//   {
//     icon: "⚡",
//     title: "Performance & scalabilité",
//     desc: "Optimisation des plateformes, tests automatisés et infrastructures Docker.",
//   },
//   {
//     icon: "🌍",
//     title: "Projets multilingues",
//     desc: "Expérience sur des plateformes internationales, gestion fine des contenus et SEO.",
//   },
// ]

const values = [
  {icon: "🎯", title: "Rigueur", desc: "Précision, qualité et bonnes pratiques."},
  {icon: "🌱", title: "Curiosité", desc: "Apprentissage et veille technologique."},
  {icon: "🤝", title: "Esprit d'équipe", desc: "Collaboration et partage."},
  {icon: "🔧", title: "Créativité", desc: "Approches innovantes et solutions adaptées."},
]
</script>

<style scoped>


/* Contraste léger pour captions */
.home-root .bg-background {
  background-color: var(--background);
}

/* Small adjustments for images */
.home-root img {
  display: block;
  width: 100%;
  height: auto;
}
</style>
