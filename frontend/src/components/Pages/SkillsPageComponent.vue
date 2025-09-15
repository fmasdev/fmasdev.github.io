<template>
  <SeoComponent
    v-if="seoData?.id"
    :seo="seoData"
  />

  <section v-if="skillsContent" class="bg-background text-text py-12">
    <div class="max-w-5xl mx-auto px-2 md:px-6">
      <TitleComponent :title="pageTitle" level="h2" />

      <div
        v-if="skillsContent.characterTrait.length"
        class="mb-12 p-6 rounded-2xl shadow-md bg-white border border-gray-200"
      >
        <div class="sm:items-center mb-4">
          <ListStringComponent
            :title="{title: $t('skills.title.characterTrait'), level: 'h3'}"
            :list="skillsContent.characterTrait"
            :list-uc-first="true"
          />
        </div>
      </div>

      <div
        v-if="skillsContent.softSkills.length"
        class="mb-12 p-6 rounded-2xl shadow-md bg-white border border-gray-200"
      >
        <div class="sm:items-center mb-4">
          <TitleComponent
            :title="$t('skills.title.methodAndTools')"
            level="h3"
          />
          <SoftSkillComponent
            :skillList="skillsContent.softSkills" />
        </div>
      </div>

      <div
        v-if="skillsContent.mediaSkills.length"
        class="mb-12 p-6 rounded-2xl shadow-md bg-white border border-gray-200"
      >
        <div class="sm:items-center mb-4">
          <TitleComponent
            :title="$t('skills.title.technical')"
            level="h3"
          />
          <SkillsComponent
            :skills="skillsContent.mediaSkills"
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

const pageTitle = ref<string>('')
const seoData = ref<SeoType>()
const skillsContent = ref<{
  characterTrait: string[]
  mediaSkills: MediaSkillsType[]
  softSkills: SoftSkillType[]
}>({
  characterTrait: [],
  mediaSkills: [],
  softSkills: [],
})

const { content } = useContentLoader('skills')

watch(
  content,
  (skills) => {
    if (!skills) return
    seoData.value = skills.seo
    skillsContent.value.characterTrait = skills.content[0].characterTrait.map(
      (trait: CharacterTrait) => trait.name
    )
    skillsContent.value.mediaSkills = skills.content[0].mediaSkills ?? []
    skillsContent.value.softSkills = skills.content[0].softSkill ?? []
    pageTitle.value = skills.title ?? ''
  },
  { immediate: true }
)
</script>
