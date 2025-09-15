<template>
  <div v-if="methods?.items.length">
      <ListMediaComponent
        v-if="methods.kind === 'media'"
        :title="{ title: $t('skills.title.method'), level: 'h4' }"
        :list="methods.items"
      />
      <ListStringComponent
        v-else-if="methods.kind === 'string'"
        :title="{ title: $t('skills.title.method'), level: 'h4' }"
        :list="methods.items"
      />
  </div>

  <div v-if="tools?.items.length">
    <ListMediaComponent
      v-if="tools?.kind === 'media'"
      :title="{ title: $t('skills.title.tools'), level: 'h4' }"
      :list="tools.items"
    />
    <ListStringComponent
      v-else-if="tools?.kind === 'string'"
      :title="{ title: $t('skills.title.tools'), level: 'h4' }"
      :list="tools.items"
    />
  </div>

</template>

<script setup lang="ts">
import {ref} from "vue";
import {compare} from "../../../helpers/arrayHelper.js";
import ListStringComponent from "@components/DesignSystem/Atoms/ListStringComponent.vue";
import ListMediaComponent from "@components/DesignSystem/Atoms/ListMediaComponent.vue";
import type {
  SoftSkillArrayType,
  SoftSkillMediaArrayType,
  SoftSkillType
} from '@types/content/SkillsType.js'

const props = defineProps<{
  skillList: SoftSkillType[]
}>()

const tools = ref<SoftSkillArrayType>()
const methods = ref<SoftSkillArrayType>()

// TOOLS
const toolItems = props.skillList
  .filter((skill: (SoftSkillType | SoftSkillMediaArrayType) )=> skill.type === 'TOOL')
  .sort((a, b) => compare(a, b, 'name'))

if (toolItems.every((tool: SoftSkillType) => tool?.logo?.media)) {
  tools.value = {
    kind: 'media',
    items: toolItems
  }
} else {
  tools.value = {
    kind: 'string',
    items: toolItems.map(tool => tool.name)
  }
}

// METHODS
const methodItems = props.skillList
  .filter((skill: SoftSkillType) => skill.type === 'METHOD')
  .sort((a, b) => compare(a, b, 'name'))

if (methodItems.every((method: SoftSkillType) => method?.logo?.media)) {
    methods.value = {
      kind: "media",
      items: methodItems
    }
} else {
    methods.value = {
      kind: 'string',
      items: methodItems.map(method => method.name)
    }
}
</script>
