<template>
  <SeoComponent
    v-if="seoData?.id"
    :seo="seoData"
  />

  <section v-if="pageTitle" class="bg-background text-text py-12">
    <div class="max-w-5xl mx-auto px-2 md:px-6">
      <TitleComponent :title="pageTitle" level="h2" />

      <div
        v-if="characterTrait"
        class="mb-12 p-6 rounded-2xl shadow-md bg-white border border-gray-200"
      >
        <div class="sm:items-center mb-4">
          <ListStringComponent
            :title="{title: $t('skills.title.characterTrait'), level: 'h3'}"
            :list="characterTrait"
            :list-uc-first="true"
          />
        </div>
      </div>

      <div
        v-if="softSkills"
        class="mb-12 p-6 rounded-2xl shadow-md bg-white border border-gray-200"
      >
        <div class="sm:items-center mb-4">
          <TitleComponent
            :title="$t('skills.title.methodAndTools')"
            level="h3"
          />
          <SoftSkillComponent
            :skillList="softSkills" />
        </div>
      </div>

      <div
        v-if="mediaSkills"
        class="mb-12 p-6 rounded-2xl shadow-md bg-white border border-gray-200"
      >
        <div class="sm:items-center mb-4">
          <TitleComponent
            :title="$t('skills.title.technical')"
            level="h3"
          />
          <SkillsComponent
            :skills="mediaSkills"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useContentLoader } from '@composables/useContentLoader.js'
import TitleComponent from '@components/DesignSystem/Atoms/TitleComponent.vue'
import ListStringComponent from '@components/DesignSystem/Atoms/ListStringComponent.vue'
import SoftSkillComponent from '@components/DesignSystem/Molecule/SoftSkillComponent.vue'
import type { CharacterTrait, MediaSkillsType,  SoftSkillType } from '@types/content/SkillsType.js'
import SkillsComponent from '@components/DesignSystem/organism/SkillsComponent.vue'
import type {SeoType} from "@types/content/SeoType.js";
import SeoComponent from "@components/DesignSystem/Molecule/SeoComponent.vue";

const seoData = ref<SeoType>()
const pageTitle = ref<string>('')
const characterTrait = ref<string[]>()
const softSkills = ref<SoftSkillType[]>()
const mediaSkills = ref<MediaSkillsType[]>()

const { content } = useContentLoader('skills')

watch(
  content,
  (skills) => {
    if (!skills) return
    seoData.value = skills.seo
    pageTitle.value = skills.title
    characterTrait.value = skills.skills[0].characterTrait.map(
      (trait: CharacterTrait) => trait.name
    )
    softSkills.value = skills.skills[0].softSkill ?? []
    mediaSkills.value = skills.skills[0].mediaSkills ?? []
  },
  { immediate: true }
)
</script>
