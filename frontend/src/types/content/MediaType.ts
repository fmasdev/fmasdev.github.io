// src/types/common/MediaType.ts
import type {
  StackItemType,
  WebservicesItemType,
} from '@types/content/ProjectType.js'
import type {SoftSkillArrayType, SoftSkillMediaType, SoftSkillType} from "@types/content/SkillsType.js";

// todo review type
export interface MediaType {
  name: string
  alternativeText: string | null
  original: OriginalMediaType
  thumbnail?: ThumbnailMediaType
}

export interface OriginalMediaType extends MediaContentType {
}

export interface ThumbnailMediaType extends MediaContentType {
}

export interface MediaContentType {
  path: string
  height: number
  width: number
  size: number
  mime: string
  strapiUrl: string
}

export type MediaParentType =
  | StackItemType
  | WebservicesItemType
  | SoftSkillMediaType
