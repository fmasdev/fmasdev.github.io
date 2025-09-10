// src/types/common/TrainingType.ts

import type { SeoType } from '@types/content/SeoType.js'
import type { MediaType } from '@types/content/MediaType.js'

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
  logo?: MediaType
  __component: string
}
