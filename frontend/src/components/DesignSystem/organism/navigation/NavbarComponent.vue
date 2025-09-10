<template>
  <nav class="bg-primary px-4 py-3">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <div class="text-xl font-title text-white">
        <!-- todo add photo -->
        <router-link to="/">
          Frédéric Mas - {{ $t('common.job') }}
        </router-link>
      </div>
      <div class="hidden sm:flex space-x-0">
        <router-link
          v-for="link in props.links"
          :key="link.path"
          :to="link.path"
          class="px-3 py-2 rounded-md text-sm font-medium text-white-600 hover:text-blue-500"
          active-class="text-blue-600 font-bold"
        >
          {{ $t(link.labelKey) }}
        </router-link>
      </div>

      <div>
        <DropdownComponent
          v-if="locales.length > 1"
          :selected="selectedLocale"
          :list="locales"
          class-list="hidden sm:flex space-x-0"
          @selectValue="setLocale"
        />
      </div>

      <button
        @click="open = !open"
        class="sm:hidden text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        ☰
      </button>
    </div>
    <!-- todo multilangue btn  -->
    <div v-if="open" class="mt-2 flex flex-col space-y-2">
      <router-link
        v-for="link in props.links"
        :key="link.path"
        :to="link.path"
        class="px-3 py-2 rounded-md text-sm font-medium text-white-600 hover:text-blue-500"
        active-class="text-blue-600 font-bold"
      >
        {{ $t(link.labelKey) }}
      </router-link>
    </div>
  </nav>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import type {NavItemType} from '@types/common.ts'
import DropdownComponent from '@components/DesignSystem/Atoms/DropdownComponent.vue'
import {useI18n} from 'vue-i18n'

const open = ref(false)
const props = defineProps<{
  links: NavItemType[]
}>()

// Locales
const {availableLocales, locale} = useI18n()
const locales = availableLocales.map((locale) => ({
  label: `locales.${locale}`,
  value: locale,
}))

const currentLocale = ref(locale.value)
const selectedLocale = {
  label: `locales.${currentLocale.value}`,
  value: currentLocale.value,
}

const setLocale = (newLocale: string) => {
  currentLocale.value = newLocale
  locale.value = newLocale
}
</script>
