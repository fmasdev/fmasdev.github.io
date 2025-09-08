// src/types/content/SkillsType.ts

import type { SeoType } from '@types/content/SeoType.js'

export interface SkillsType {
  title: string
  slug: string
  locale: string
  content: SkillsType
  seo: SeoType[]
}

export interface SkillType {}
