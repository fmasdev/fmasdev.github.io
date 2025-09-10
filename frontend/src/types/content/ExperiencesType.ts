// src/types/ExperiencesType.ts

import type { ProjectType } from '@types/content/ProjectType.js'
import type { SeoType } from '@types/content/SeoType.js'
import type { MediaType } from '@types/content/MediaType.js'

export interface ExperiencesType {
  title: string
  slug: string
  content: (ExperienceType | ExperienceExperienceType)[]
  seo: SeoType
}

export interface ExperienceType {
  id: number
  __component: 'experience.experience-item'
  title: string
  start: string
  stop: string
  content: string
  company: string
  region: string
  remote: 'FULL-REMOTE' | 'OFFICE' | 'HYBRID'
  project?: ProjectType[]
  logo: MediaType
}

export interface ExperienceExperienceType {
  id: number
  __component: 'experience.experience'
  title: string
  company: string
  city: string
  start: string
  stop: string
  content: string
  logo: MediaType
}
