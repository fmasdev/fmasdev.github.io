<template>
  <SeoComponent
    v-if="feedBacks?.seo?.id"
    :seo="feedBacks.seo"
  />

  <section class="bg-background text-text py-12">
    <div class="max-w-5xl mx-auto px-2 md:px-6">
      <TitleComponent
        v-if="feedBacks?.title"
        :title="feedBacks.title"
        level="h2"
      />

      <FeedBackComponent
        v-if="feedBacks?.feedBackItems"
        v-for="feedBack in feedBacks.feedBackItems"
        :key="feedBack.id"
        :feed-back="feedBack"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useContentLoader } from '@/composables/useContentLoader'
import type { FeedbackType } from '@/types/content/FeedbackType.js'
import SeoComponent from '@/components/DesignSystem/Molecule/SeoComponent.vue'
import TitleComponent from '@/components/DesignSystem/Atoms/TitleComponent.vue'
import FeedBackComponent from '@/components/DesignSystem/Organism/FeedBackComponent.vue'

const { content } = useContentLoader('feedBacks')

const feedBacks = ref<FeedbackType>()

watch(
  content,
  (content) => {
    if (!content) return
    feedBacks.value = content
  },
  { immediate: true }
)
</script>
