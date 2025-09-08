// src/types/common/TrainingType.ts

import type { SeoType } from '@types/content/SeoType.js'

export interface TrainingType {
  title: string
  slug: string
  locale: string
  content: TrainingContentType[]
  seo: SeoType
}

export interface TrainingContentType {
  id: number
  city: string
  company: string
  content: string
  start: string
  stop: string
  title: string
  __component: string
}
