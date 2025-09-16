<template>
  <SeoComponent
    v-if="seoData?.id"
    :seo="seoData"
  />

  <section v-if="feedBackContent" class="bg-background text-text py-12">
    <div class="max-w-5xl mx-auto px-2 md:px-6">
      <TitleComponent
        v-if="pageTitle"
        :title="pageTitle"
        level="h2"
      />

      <FeedBackComponent
        v-if="feedBackContent.length"
        v-for="feedBack in feedBackContent"
        :key="feedBack.id"
        :feed-back="feedBack"
      />
    </div>
  </section>


</template>

<script setup lang="ts">
import {ref, watch} from "vue";
import {useContentLoader} from "@composables/useContentLoader.js";
import SeoComponent from "@components/DesignSystem/Molecule/SeoComponent.vue";
import type {SeoType} from "@types/content/SeoType.js";
import type {FeedbackContentType} from "@types/content/FeedbackType.js";
import TitleComponent from "@components/DesignSystem/Atoms/TitleComponent.vue";
import FeedBackComponent from "@components/DesignSystem/organism/FeedBackComponent.vue";

const {content} = useContentLoader('feedBacks')

const seoData = ref<SeoType>()
const pageTitle = ref<string>()
const feedBackContent = ref<FeedbackContentType[]>()

watch(
  content,
  (feedBacks) => {
    if (!feedBacks) return
    seoData.value = feedBacks.seo
    pageTitle.value = feedBacks.title
    feedBackContent.value = feedBacks.content
  },
  {immediate: true}
)
</script>
