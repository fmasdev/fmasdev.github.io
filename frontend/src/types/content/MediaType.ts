// src/types/common/MediaType

export interface MediaType {
  name: string
  alternativeText: string | null
  original: OriginalMediaType
  thumbnail?: ThumbnailMediaType
}

export interface OriginalMediaType extends MediaContentType {}

export interface ThumbnailMediaType extends MediaContentType {}

export interface MediaContentType {
  path: string
  height: number
  width: number
  size: number
  mime: string
  strapiUrl: string
}
