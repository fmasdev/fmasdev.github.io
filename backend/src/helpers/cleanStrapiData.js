// src/helpers/cleanStrapiData.js

const cleanStrapiData = (data) => {
  if (Array.isArray(data)) {
    return data.map(cleanStrapiData)
  }

  if (data && typeof data === 'object') {
    // Clone without fields will be deleted
    const {createdAt, updatedAt, publishedAt, localizations, ...rest} = data
    const imageKeys = ['image', 'logo', 'photo', 'media']
    const cleaned = {}

    for (const key in rest) {
      const value = rest[key]
      // console.log(key)
      // console.log(value)
      if (
        value
        && imageKeys.includes(key.toLowerCase())
        && Array.isArray(value)
        && value[0].hasOwnProperty('alternativeText')
      ) {
        value.forEach(item => {
          cleaned['media'].push(mediaFormater(item))
        })
      } else if (
        value
        && imageKeys.includes(key.toLowerCase())
        && typeof value === 'object'
        && (value.hasOwnProperty('alternativeText') || value?.data.hasOwnProperty('alternativeText'))
      ) {
        cleaned['media'] = mediaFormater(value)
      } else if (
        value
        && imageKeys.includes(key.toLowerCase())
        && value.hasOwnProperty('data')
        && value.data.attributes.hasOwnProperty('alternativeText')
      ) {
        cleaned['media'] = mediaFormater(value.data.attributes)
      } else {

        // Recursive on each key
        const formatedKey = key === 'URL'
          ? key.toLowerCase()
          : String(key).charAt(0).toLowerCase() + String(key).slice(1)

        cleaned[formatedKey] = cleanStrapiData(value)
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
