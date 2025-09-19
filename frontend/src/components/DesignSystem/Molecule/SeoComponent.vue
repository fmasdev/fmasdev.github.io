<template></template>

<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@unhead/vue'
import type {
  MetaSocialLItemType,
  MetaSocialType,
  MetaType,
  SeoType,
} from '@/types/content/SeoType.js'

const props = defineProps<{
  seo: SeoType
}>()

const meta = ref<(MetaSocialLItemType | MetaType | null)[]>([
  {
    name: 'description',
    content: props.seo.metaDescription,
  },
  props.seo.metaRobots
    ? {
        name: 'robots',
        content: props.seo.metaRobots,
      }
    : null,
  props.seo.media
    ? {
        property: 'og:image',
        content: `/media/${props.seo.media.original.path}`,
      }
    : null,
])

if (props.seo?.metaSocial) {
  meta.value.concat(
    props.seo.metaSocial.flatMap((metaSocial: MetaSocialType) => [
      metaSocial.title
        ? {
            property: 'og:title',
            content: metaSocial.title,
          }
        : null,
      metaSocial.description
        ? {
            property: 'og:description',
            content: metaSocial.description,
          }
        : null,
      metaSocial.media?.original
        ? {
            property: 'og:image',
            content: `/media/${metaSocial.media.original.path}`,
          }
        : null,
      metaSocial.twitterCard
        ? {
            property: 'twitter:card',
            content: metaSocial.twitterCard,
          }
        : null,
    ])
  )
}

useHead({
  title: props.seo.metaTitle,
  meta: meta.value.filter(Boolean),
  link: props.seo.canonicalUrl
    ? [{ rel: 'canonical', href: props.seo.canonicalUrl }]
    : [],
})
</script>
