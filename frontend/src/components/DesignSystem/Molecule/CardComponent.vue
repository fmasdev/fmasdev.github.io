<template>

  <div v-if="isCard(card)"
       class="p-6 rounded-xl"
       :class="cardClass">
    <div class="text-3xl mb-2">
      {{ card.icon }}
    </div>
    <div
      class="font-semibold text-lg"
      :class="titleClass">
      {{ card.title }}
    </div>
    <p class="card-text text-sm mt-2"
       :class="textClass">
      {{ card.text }}
    </p>
  </div>

  <div v-if="isFigureCard(card)">
    <figure v-if="card.caption" class="overflow-hidden rounded-xl shadow-md">
      <img
        :src="`/media/${card.media?.original.path}`"
        :alt="card.media?.name"
        class="h-64 w-full object-cover hover:scale-105 transition"
      />
      <figcaption class="p-3 text-sm bg-white">
        {{ card.caption }}
      </figcaption>
    </figure>

    <div
      v-else
      class="bg-white p-6 rounded-xl shadow-md border border-gray-100"
    >
      <h3 class="text-lg font-semibold text-secondary mb-2">
        {{ card.title }}
      </h3>
      <p class="text-sm text-text/80 leading-relaxed">
        {{ card.text }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type {
  HomeCardType,
  HomeCardUnion,
  HomeFigureCardType,
} from '@/types/content/HomeType.js'

const props = defineProps<{
  type: 'card' | 'figureCard' | null
  card: HomeFigureCardType | HomeCardType
}>()

const isCard = (card: HomeCardUnion): card is HomeCardType => {
  return card.kind === 'Card'
}

const isFigureCard = (card: HomeCardUnion): card is HomeFigureCardType => {
  return card.kind === 'FigureCard'
}

const cardClass = computed(() => {
  if (isCard(props.card)) {
    return [
      props.card.textColor === 'ternary'
        ? ' bg-white/10 h-full'
        : ' text-white/80 shadow-sm border border-gray-100 hover:shadow-md transition h-full',
      props.card.textCenter && ' text-center',
    ]
  }
  return ' bg-white/10 h-full'
})

const titleClass = computed(() =>
  isCard(props.card) && props.card.textColor === 'ternary'
    ? ' !text-ternary'
    : ' text-secondary'
)

const textClass = computed(() =>
  isCard(props.card) && props.card.textColor === 'ternary'
    ? ' text-white/80'
    : ' text-text'
)
</script>
