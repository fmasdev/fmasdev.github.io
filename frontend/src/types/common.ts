export interface NavItemType {
  labelKey: string
  path: string
  isActive: boolean
}

export interface TitleType {
  title: string
  level: TitleLevelType
  classes?: string
}

export type TitleLevelType =
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'

