// src/types/content/HomeType

import type { MediaType } from '@/types/content/MediaType.js'
import type { SeoType } from '@/types/content/SeoType.ts'

export interface HomeType {
  id: number
  presentation: HomePresentationType
  components: HomeComponentUnion[]
  seo: SeoType
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

export type HomeComponentUnion = HomeFigureCardBlockType | HomeCardBlockType

export interface HomeCardBlockType {
  id: number
  kind: 'CardBloc'
  title: string
  background: string
  cards: HomeCardType[]
}

export interface HomeCardType {
  id: number
  kind: 'Card'
  icon: string
  title: string
  text: string
  textCenter: string
  textColor: string
  titleColor: string
}

export interface HomeFigureCardBlockType {
  kind: 'FigureCardBloc'
  id: number
  title: string
  background: string
  cards: HomeFigureCardType[]
}

export interface HomeFigureCardType {
  id: number
  kind: 'FigureCard'
  title: string
  text: string
  caption?: string
  media?: MediaType
}

export type HomeCardUnion = HomeFigureCardType | HomeCardType
