<template>
  <footer class="bg-primary text-white py-10">
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
      <div class="space-y-2 text-left">
        <h3 class="font-title text-lg">
          {{ $t('footer.about') }}
        </h3>
        <p class="text-sm">
          Frédéric Mas – {{ $t('common.job') }}<br />
          CV & portfolio
        </p>
      </div>

      <div class="space-y-2 text-left">
        <h3 class="font-title text-lg">
          {{ $t('footer.contact') }}
        </h3>

        <p class="text-sm">email@example.com</p>
        <p class="text-sm">+33 6 12 34 56 78</p>
      </div>

      <div class="space-y-2 text-left">
        <h3 class="font-title text-lg">{{ $t('footer.followMe') }}</h3>
        <div class="space-x-4">
          <!-- todo rooter link -->
          <a href="#" class="hover:text-accent transition-colors footer-link">
            LinkedIn
          </a>
          <a href="#" class="hover:text-accent transition-colors footer-link">
            GitHub
          </a>
        </div>
      </div>
    </div>
    <div class="mt-8 text-center text-sm text-primaryLight">
      © {{ currentYear }} Frédéric Mas. {{ $t('footer.rights') }}
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { MeType } from '@types/content/MeType.js'
import type { FooterType } from '@types/content/FooterType.js'

defineProps<{
  footerContent: FooterType
  meContent: MeType
}>()

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer-link {
  display: block;
}
</style>
