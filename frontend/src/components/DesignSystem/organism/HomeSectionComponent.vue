<template>
  <section class="py-16 " :class="outerClass">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <h2 class="text-3xl font-title mb-8 text-center" :class="headingClass">
        {{ component.title }}
      </h2>

      <div class="grid grid-cols-1"
           :class="[
             colAndGap.col === 4 ? 'md:grid-cols-4' : 'md:grid-cols-3',
             colAndGap.gap === 6 ? 'gap-6' : 'gap-4'
           ]">
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
import {computed, ref} from 'vue'
import type {
  HomeCardType,
  HomeCardUnion,
  HomeComponentUnion,
  HomeFigureCardType
} from '@/types/content/HomeType.js'
import CardComponent from '@/components/DesignSystem/Molecule/CardComponent.vue'

const props = defineProps<{
  component: HomeComponentUnion
}>()

const componentType = ref<'CardBloc' | 'FigureCardBloc'>()

const cards: HomeCardUnion[] = props.component.cards.map(item => {
  if (item.hasOwnProperty('media')) {
    componentType.value = 'FigureCardBloc'
    return {...item, kind: 'FigureCard'} as HomeFigureCardType
  } else {
    componentType.value = 'CardBloc'
    return {...item, kind: 'Card'} as HomeCardType
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

const headingClass = computed(() => [`text-${colors.textColor}`])
const outerClass = computed(() => [`bg-${colors.bg}`])
</script>
