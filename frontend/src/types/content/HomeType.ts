// src/types/content/HomeType.ts


import type {MediaType} from "@types/content/MediaType.js";

export interface HomeType {
  id: number
  presentation: HomePresentationType
  components: HomeComponentType[]
}

export interface HomePresentationType {
  id: number
  title: string
  presentation: string
  media: MediaType
  cta: HomeCta[]
}

export interface HomeCta {
  id: number
  background: string
  title: string
  url: string
}

export type HomeComponentType = HomeFigureCardBlockType | HomeCardBlockType

export interface HomeCardBlockType {
  id: number
  __component: 'card-bloc'
  title: string
  background: string
  cards: HomeCardType[]
}

export interface HomeCardType {
  id: number
  icon: string
  title: string
  text: string
  textCenter: string
  textColor: string
  titleColor: string
}

export interface HomeFigureCardBlockType {
  id: number
  __component: 'figure-card-bloc'
  title: string
  background: string
  cards: HomeFigureCardType[]
}

export interface HomeFigureCardType {
  title: string
  text: string
  caption?: string
  media?: string
}
