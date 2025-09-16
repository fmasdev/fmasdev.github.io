// src/types/content/MeType.ts

import type {MediaType} from "@types/content/MediaType.js";

export interface MeType {
  id: number
  attributes: MeAttributesType
}

export interface MeAttributesType {
  name: string
  address: string
  postalCode: string
  city: string
  phone: string
  email: string
  media: MediaType
}
