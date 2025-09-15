// src/types/common/FeedbackType.ts

import type { SeoType } from '@types/content/SeoType.js'

export interface FeedbackType {
  __component: string
  title: string
  slug: string
  content: FeedbackContentType[]
  seo: SeoType
}

export interface FeedbackContentType {
  id: number
  __component: string
  title: string
  content: string
  date: string
  author: string
  job: string
}
