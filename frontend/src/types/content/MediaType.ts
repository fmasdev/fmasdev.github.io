// src/types/common/MediaType.ts
export interface MediaType {
  id: number
  attributes: MediaAttributesType
}

export interface MediaAttributesType {
  name: string
  alternativeText: null
  caption: null
  width: number
  heignt: number
  format: MediaFormatType
}

export interface MediaFormatType extends MediaFormatCommonType {
  thumbnail: MediaFormatFormatType
  small: MediaFormatFormatType
  medium: MediaFormatFormatType
  previewUrl: string | null
  provider: string
  provider_metadata: string | null
}

export interface MediaFormatFormatType extends MediaFormatCommonType {
  name: string
  path: string | null
  width: number
  height: number
  sizeInBytes: number
}

export interface MediaFormatCommonType {
  hash: string
  ext: string
  mime: string
  size: number
  url: string
}
