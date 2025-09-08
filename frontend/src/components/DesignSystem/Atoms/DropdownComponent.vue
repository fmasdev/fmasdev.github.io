<template>
  <div :class="classList">
    <button
      @click="open = !open"
      class="relative flex items-center px-3 py-2 rounded-full bg-gray-800 text-white focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
    >
      <span class="sr-only">Open language menu</span>
      {{ $t(currentSelected.label) }}
      <svg
        class="ml-2 h-4 w-4"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M6 9l6 6 6-6"></path>
      </svg>
    </button>
    <div
      v-if="open"
      class="absolute right-0 mt-2 w-32 origin-top-right rounded-md bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
    >
      <button
        v-for="item in list"
        :key="item.value"
        @click="selectValue(item)"
        class="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
      >
        {{ $t(item.label) }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  selected: { label: string; value: string }
  list: { label: string; value: string }[]
  classList: string
}>()

const currentSelected = ref<{ label: string; value: string }>(props.selected)
const open = ref<boolean>(false)

const emit = defineEmits<{
  (e: 'selectValue', data: string): void
}>()

const selectValue = (data: { label: string; value: string }) => {
  currentSelected.value = data
  open.value = false
  emit('selectValue', data.value)
}
</script>
