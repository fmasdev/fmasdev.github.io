// src/types/content/ProjectType.ts

import type { MediaType } from '@types/content/MediaType.js'

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
  name: string
  info: string
  media: MediaType
}

export interface WebserviceType {
  name: string
  info: string
  media: MediaType
}
