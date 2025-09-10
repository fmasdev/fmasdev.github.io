// src/helpers/cleanStrapiData.js

const cleanStrapiData = (data) => {
  if (Array.isArray(data)) {
    return data.map(cleanStrapiData)
  }

  if (data && typeof data === 'object') {
    // Clone without fields will be deleted
    const {createdAt, updatedAt, publishedAt, localizations, ...rest} = data

    const cleaned = {}

    for (const key in rest) {
      const value = rest[key]

      if (
          key === 'data'
          && Array.isArray(value)
          && value[0]?.attributes &&
          value[0].attributes.hasOwnProperty('alternativeText')
      ) {
        cleaned['media'] = mediaFormater(value[0].attributes)
      } else if (
          key === 'data'
          && typeof value === 'object'
          && value?.attributes
          && value.attributes.hasOwnProperty('alternativeText')
      ) {
        cleaned['media'] = mediaFormater(value.attributes)
      }
      else {
        // Recursive on each key
        const lcFirstKey = String(key).charAt(0).toLowerCase() + String(key).slice(1)
        cleaned[lcFirstKey] = cleanStrapiData(value)
      }
    }


    return cleaned
  }

  return data
}

const mediaFormater = (mediaItem) => {
  return {
    name: mediaItem.name,
    alternativeText: mediaItem.alternativeText,
    original: {
      path: `original/${mediaItem.name}`,
      height: mediaItem.height,
      width: mediaItem.width,
      mime: mediaItem.mime,
      size: mediaItem.size,
      strapiUrl: mediaItem.url,
    },
  }
}

module.exports = {
  cleanStrapiData,
}
