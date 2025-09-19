// src/types/content/SkillsType.ts

import type { SeoType } from '@/types/content/SeoType.js'
import type { MediaType } from '@/types/content/MediaType.js'

export interface SkillsType {
  title: string
  slug: string
  locale: string
  content: SkillsContentType[]
  seo: SeoType[]
}

export interface SkillsContentType {
  characterTrait: CharacterTrait[]
  mediaSkills: MediaSkillsType[]
  softSkill: SoftSkillType[]
}

export interface MediaSkillsType {
  id: number
  name: string
  type: string
  language?: string
  advancement: number
  media?: MediaType
}

export interface SoftSkillType {
  kind: 'softskill'
  id: number
  name: string
  type: string
  media?: MediaType
}

export type SoftSkillArrayType =
  | SoftSkillStringArrayType
  | SoftSkillMediaArrayType

export interface SoftSkillStringArrayType {
  kind: 'string'
  items: string[]
}

export interface SoftSkillMediaArrayType {
  kind: 'media'
  items: SoftSkillType[]
}

export interface CharacterTrait {
  id: number
  name: string
}
