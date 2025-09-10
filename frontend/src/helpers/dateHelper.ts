// src/helpers/dateHelper.ts

export const dateHelper = {
  dateStringFormatToString: (dateString: string) => {
    const date = new Date(dateString)
    return `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`
  },
}
