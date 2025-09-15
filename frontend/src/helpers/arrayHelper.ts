// src/helper/arrayHelper.ts

export type DirectionType = 'asc' | 'desc'

export const compare = (a: {}, b: {}, key: string) => {
  if (a[key] < b[key]) return -1
  if (a[key] > b[key]) return 1
  return 0
}

// todo compare for multi sort: key = {(key:string): (value: sortDirection)}
