// src/types/ExperiencesType

import type { ProjectType } from '@/types/content/ProjectType.js'
import type { SeoType } from '@/types/content/SeoType.js'
import type { MediaType } from '@/types/content/MediaType.js'

export interface ExperiencesType {
  title: string
  slug: string
  experience: (ExperienceType | ExperienceExperienceType)[]
  seo: SeoType
}

export interface ExperienceType {
  id: number
  kind: 'ExperienceItem'
  title: string
  start: string
  stop: string
  content: string
  company: string
  region: string
  remote: 'FULL-REMOTE' | 'OFFICE' | 'HYBRID'
  project?: ProjectType[]
  media: MediaType
}

export interface ExperienceExperienceType {
  id: number
  kind: 'Experience'
  title: string
  company: string
  city: string
  start: string
  stop: string
  content: string
  media: MediaType
  region?: string
}
