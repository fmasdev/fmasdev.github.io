<template>
  <footer class="bg-primary text-white py-10">
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
      <div class="space-y-2 text-left">
        <TitleComponent :title="$t('footer.about')" level="h3" />
        <p class="text-sm">
          Frédéric Mas – {{ $t('common.job') }}<br />
          CV & portfolio
        </p>
      </div>

      <div class="space-y-2 text-left">
        <TitleComponent :title="$t('footer.contact')" level="h3" />
        <p>
          <a :href="`mailto:${meContent.email}`" class="text-sm">
            {{ meContent.email }}
          </a>
        </p>
        <p>
          <a :href="`tel:${phoneNumberWithoutSpaces}`" class="text-sm">
            {{ meContent.phone }}
          </a>
        </p>
      </div>

      <div class="space-y-2 text-left">
        <TitleComponent :title="$t('footer.followMe')" level="h3" />
        <div class="space-x-4">
          <!-- todo rooter link -->
          <a
            v-for="social in footerContent.socials"
            :href="social.Url"
            class="hover:text-accent transition-colors footer-link"
          >
            {{ social.Name }}
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
import type { MeAttributesType } from '@/types/content/MeType.js'
import type { FooterType } from '@/types/content/FooterType.js'
import TitleComponent from '@/components/DesignSystem/Atoms/TitleComponent.vue'

const props = defineProps<{
  footerContent: FooterType
  meContent: MeAttributesType
}>()

const currentYear = computed(() => new Date().getFullYear())
const phoneNumberWithoutSpaces = props.meContent.phone.replace(/ /g, '')
</script>

<style scoped>
.footer-link {
  display: block;
}
</style>
