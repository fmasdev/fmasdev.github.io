<template>
  <section :class="`py-16 max-w-7xl mx-auto px-6 lg:px-12 ${section.background}`">
    <h2 class="text-3xl font-title text-primary mb-8 text-center">
      {{component.title}}
    </h2>
    <div
      :class="`grid md:grid-cols-${cardContainer.cols} gap-${cardContainer.gap}`">
<!--      <div-->
<!--        v-for="exp in expertise"-->
<!--        :key="exp.title"-->
<!--        class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition"-->
<!--      >-->
<!--        <div class="text-3xl mb-3">{{ exp.icon }}</div>-->
<!--        <h3 class="text-xl font-semibold text-secondary mb-2">{{ exp.title }}</h3>-->
<!--        <p class="text-sm text-text/80 leading-relaxed">{{ exp.desc }}</p>-->
<!--      </div>-->
    </div>
  </section>
</template>

<script setup lang="ts">

import type {HomeComponentType} from "@types/content/HomeType.js";

const props = defineProps<{
  component: HomeComponentType
}>()
const cardContainer = {
  gap: 12 - (2 * props.component.cards.length) ,
  cols: props.component.cards.length
}
const section = {

  background: props.component.background === "default" ? 'bg-background' : `bg-${props.component.background}`
}

console.log(props)
</script>

<style scoped>


</style>
