// src/types/content/ProjectList.ts

import type { SeoType } from '@/types/content/SeoType.ts'
import type { MediaType } from '@/types/content/MediaType.ts'
import type { StackType, WebserviceType } from '@/types/content/ProjectType.ts'

export interface ProjectListType {
  id: number
  title: string
  projects: PersonalProjectSummaryType[]
  seo?: SeoType
}

export interface PersonalProjectSummaryType {
  title: string
  slug: string
  summary: string
  status: string
  media: MediaType
}

export interface PersonalProjectContainerType {
  id: string
  attributes: PersonalProjectType
}
export interface PersonalProjectType {
  title: string
  slug: string
  status: string
  detail: string
  summary: string
  media: MediaType
  stack_items: {
    data: StackType[]
  }
  webservices: {
    data: WebserviceType[]
  }
  slider?: {
    id: number
    medias: MediaType[] 
  }
  seo: SeoType
  link: Link[]
}

export interface Link {
  id: number
  title: string
  url: string
  info: string
}

export type ProjectListMediaType = {
  kind: 'listMedia'
  list: StackType[] | WebserviceType[]
}

export type ProjectListStringType = {
  kind: 'listString'
  list: string[]
}

export type PersonalProjectListType = 
  | ProjectListMediaType
  | ProjectListStringType