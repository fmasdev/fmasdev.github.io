// src/types/common/SeoType

import type { MediaType } from '@/types/content/MediaType.js'

export interface SeoType {
  id: number
  metaTitle: string
  metaDescription: string
  metaRobots?: string
  canonicalUrl?: string
  media?: MediaType
  metaSocial?: MetaSocialType[]
}

export interface MetaSocialType {
  platform: string
  title?: string
  description?: string
  media?: MediaType
  twitterCard?: 'summary' | 'summary_large_image'
}

export interface MetaType {
  name: 'description' | 'robots' | 'og:image'
  content: string
}

export interface MetaSocialLItemType {
  property: 'og:title' | 'og:description' | 'og:image' | 'twitter:card'
  content: string
}
