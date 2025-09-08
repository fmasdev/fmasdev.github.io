// src/helpers/cleanStrapiData.js

const cleanStrapiData = (data) => {
  if (Array.isArray(data)) {
    return data.map(cleanStrapiData)
  }

  if (data && typeof data === 'object') {
    // Clone without fields will be deleted
    const { createdAt, updatedAt, publishedAt, localizations, ...rest } = data

    const cleaned = {}
    // Recursive on each key
    for (const key in rest) {
      cleaned[key.toLowerCase()] = cleanStrapiData(rest[key])
    }

    return cleaned
  }

  return data
}

module.exports = {
  cleanStrapiData,
}
