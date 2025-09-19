<template>
  <section class="py-16 mx-auto px-6 lg:px-12" :class="outerClass">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <h2 class="text-3xl font-title mb-8 text-center" :class="headingClass">
        {{ component.title }}
      </h2>

      <div class="max-w-7xl grid items-center" :class="innerClass">
        <CardComponent
          v-if="component.cards.length"
          v-for="card in cards"
          :key="card.id"
          :card="card"
          :type="resolveCardType(component.kind)"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type {HomeCardType, HomeCardUnion, HomeComponentType, HomeFigureCardType} from '@/types/content/HomeType.js'
import CardComponent from '@/components/DesignSystem/Molecule/CardComponent.vue'

const props = defineProps<{
  component: HomeComponentType
}>()

const calcColAndGap = (cardNumber: number) => {
  return {
    col: cardNumber,
    gap: 12 - (cardNumber - 1) * 2,
  }
}

const colAndGap = calcColAndGap(props.component.cards.length)
const colors =
  props.component.background === 'default'
    ? {
        bg: 'background',
        textColor: 'primary',
      }
    : {
        bg: props.component.background,
        textColor: 'white',
      }

const cards: HomeCardUnion[] = props.component.cards.map(item => {
  if (item.hasOwnProperty('media')) {
    return { ...item, kind: 'FigureCard' } as HomeFigureCardType

  } else {
    return { ...item, kind: 'Card' } as HomeCardType
  }
})

const resolveCardType = (componentType: string) => {
  switch (componentType) {
    case 'CardBloc':
      return 'card'
    case 'FigureCardBloc':
      return 'figureCard'
    default:
      return null
  }
}

const innerClass = computed(() => [
  `md:grid-cols-${colAndGap.col} gap-${colAndGap.gap}`,
  resolveCardType(props.component.kind) === 'card' &&
  props.component.cards.length === 4
    ? 'sm:grid-cols-2 lg:grid-cols-4'
    : '',
])
const headingClass = computed(() => [`text-${colors.textColor}`])
const outerClass = computed(() => [`bg-${colors.bg}`])
</script>
