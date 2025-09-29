// src/types/content/ProjectType

import type { MediaType } from '@/types/content/MediaType.js'

// project dev
export interface ProjectType {
  __type: ''
  id: number
  contribution: string
  name: string
  isCompany: boolean
  stack_items: StackType[]
  webservices: WebserviceType[]
}

export interface StackType {
  kind?: 'stack'
  id?: number
  name: string
  info: string
  media?: MediaType
}

export interface WebserviceType {
  kind?: 'webservice'
  id?: number
  name: string
  info: string
  media?: MediaType
}

export interface StrapiListItemType {
  id: number
  attributes: {
    info: string
    media?: MediaType
    name: string
  }
}
