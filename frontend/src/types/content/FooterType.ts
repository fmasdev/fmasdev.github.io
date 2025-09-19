// src/types/common/FooterType

export interface FooterType {
  socials: FooterSocialType[]
}

export interface FooterSocialType {
  id: number
  Name: string
  Url: string
  Icon: string | null
}
