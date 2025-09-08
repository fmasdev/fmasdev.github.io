// src/types/content/ProjectType.ts

import type { MediaType } from '@types/content/MediaType.js'

// project dev
export interface ProjectType {
  __type: ''
  id: number
  contribution: string
  name: string
  isCompany: boolean
  stack_items: {
    data: StackType[]
  }
  webservices: {
    data: WebserviceType[]
  }
}

export interface StackType {
  id: string
  attributes: StackItemType
}

export interface StackItemType {
  name: string
  info: string
  logo: MediaType
}

export interface WebserviceType {
  id: string
  attributes: WebservicesItemType
}
export interface WebservicesItemType {
  name: string
  info: string
  logo: MediaType
}
