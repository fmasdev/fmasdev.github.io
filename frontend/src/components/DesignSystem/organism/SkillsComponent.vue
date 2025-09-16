<template>
  <SkillsListComponent
    v-for="(value, key) in skillList"
    :title="$t(`skills.listTitle.${key}`)"
    :skillsList="value"
  />
</template>

<script setup lang="ts">
import SkillsListComponent from '@components/DesignSystem/Molecule/SkillsListComponent.vue'
import type { MediaSkillsType } from '@types/content/SkillsType.js'
import { compare } from '../../../helpers/arrayHelper.js'

const props = defineProps<{
  skills: MediaSkillsType[]
}>()

console.log(props.skills)

const skillList = {
  languages: props.skills
    .filter(
      (skill: MediaSkillsType) =>
        skill.type === 'LANGUAGE' && skill.language !== null
    )
    .sort((a, b) => compare(a, b, 'language')),
  infrastructureToolsList: props.skills
    .filter((skill: MediaSkillsType) => skill.type === 'INFRASTUCTURE')
    .sort((a, b) => compare(a, b, 'name')),
  databases: props.skills
    .filter((skill: MediaSkillsType) => skill.type === 'DATABASE')
    .sort((a, b) => compare(a, b, 'name')),
  backendJsFrameworks: props.skills
    .filter(
      (skill: MediaSkillsType) =>
        skill.type === 'BACK' && skill.language === 'JAVA_SCRIPT'
    )
    .sort((a, b) => compare(a, b, 'name')),
  backendPhpFrameworks: props.skills
    .filter(
      (skill: MediaSkillsType) =>
        skill.type === 'BACK' && skill.language === 'PHP'
    )
    .sort((a, b) => compare(a, b, 'name')),
  gdsList: props.skills
    .filter((skill: MediaSkillsType) => skill.type === 'GDS')
    .sort((a, b) => compare(a, b, 'name')),
  cmsLis: props.skills
    .filter((skill: MediaSkillsType) => skill.type === 'CMS')
    .sort((a, b) => compare(a, b, 'name')),
  frontJsFrameworks: props.skills
    .filter(
      (skill: MediaSkillsType) =>
        (skill.type === 'FRONT_FRAMEWORK' || skill.type === 'MOBILE') &&
        skill.language === 'JAVA_SCRIPT'
    )
    .sort((a, b) => compare(a, b, 'name')),
  frontCssFrameworks: props.skills
    .filter(
      (skill: MediaSkillsType) =>
        skill.type === 'FRONT_FRAMEWORK' && skill.language === 'CSS'
    )
    .sort((a, b) => compare(a, b, 'name')),
}

console.log(skillList)
</script>
