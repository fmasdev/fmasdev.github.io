// src/types/content/MeType.ts

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
}
