// src/helpers/cleanStrapiData.js

const cleanStrapiData = (data) => {
  if (Array.isArray(data)) {
    return data.map(cleanStrapiData)
  }

  if (data && typeof data === 'object') {
    // on clone sans les champs à supprimer
    const { createdAt, updatedAt, publishedAt, ...rest } = data

    // récursion sur chaque clé
    for (const key in rest) {
      rest[key] = cleanStrapiData(rest[key])
    }

    return rest
  }

  return data
}

module.exports = {
  cleanStrapiData
}
