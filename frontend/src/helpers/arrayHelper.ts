// src/helper/arrayHelper.ts

export const compare = <T, K extends keyof T>(a: T, b: T, key: K) => {
  if (a[key] < b[key]) return -1
  if (a[key] > b[key]) return 1
  return 0
}
