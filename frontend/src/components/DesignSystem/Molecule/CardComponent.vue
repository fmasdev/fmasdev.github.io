<template>
  <div
    v-if="type === 'card'"
    class="p-6 rounded-xl"
    :class="cardClass"
  >
    <div class="text-3xl mb-2">
      {{ card.icon }}
    </div>
    <div
      class="font-semibold text-lg"
      :class="titleClass"
    >
      {{ card.title }}
    </div>
    <p
      class="text-sm  mt-2 text-ternary"
      :class="textClass"
    >
      {{ card.text }}
    </p>
  </div>

  <div v-if="type === 'figureCard'">
    <figure
      v-if="card.caption"
      class="overflow-hidden rounded-xl shadow-md"
    >
      <img
        :src="`/media/${card.media.original.path}`"
        :alt="card.media.name"
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
import type {HomeCardType, HomeFigureCardType} from "@types/content/HomeType.js";
import {computed} from "vue";

const props = defineProps<{
  type: 'card' | 'figureCard' | null
  card: HomeFigureCardType | HomeCardType
}>()

const cardClass = computed(() => [
  props.card.textColor === 'ternary'
    ? 'bg-white/10 h-full'
    : 'text-white/80 shadow-sm border border-gray-100 hover:shadow-md transition',
  props.card.textCenter && 'text-center',
])
const titleClass = props.card.textColor === 'ternary' ?
  '!text-ternary' : 'text-secondary'
const textClass = props.card.textColor === 'ternary' ?
  'text-white/80' : 'text-text'
</script>
