// config/datasources/StrapiDatasource.js

const {
  strapiDataSourceConfig: config,
  appConfig,
} = require('../config/config')
const axios = require('axios')
const { cleanStrapiData } = require('../helpers/cleanStrapiData')

class StrapiDatasource {
  constructor() {
    this.http = axios.create({
      baseURL: config.url,
      timeout: 1000,
      headers: {
        Authorization: `Bearer ${config.token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
  }

  async getLocalizedData(uri, params = {}, locale = null, useFallback = false) {
    const hasParams = !!Object.keys(params).length

    if (hasParams) {
      Object.entries(params).forEach(([key, value]) => {
        if (!uri.includes('?')) {
          uri += '?'
        }
        uri +=
          value === params[Object.keys(params)[0]]
            ? `${key}=${value}`
            : `&${key}=${value}`
      })
    }

    const contentTypeName = uri.split('?')[0].replace('api/', '')
    const localizedUri = locale
      ? hasParams
        ? `${uri}&locale=${locale}`
        : `${uri}?locale=${locale}`
      : uri

    try {
      return await this.http.get(localizedUri)
    } catch (error) {
      if (
        !locale ||
        !useFallback ||
        error?.extensions?.response?.status !== 404
      ) {
        if (!error.message.includes(contentTypeName)) {
          error.message = `on ${contentTypeName}: ${error.message}`
        }
      }

      throw error
    }
  }

  async getPage(slug, locale) {
    const params = {
      'filters[slug][$eq]': slug,
      populate: 'deep',
    }

    try {
      const res = await this.getLocalizedData(`pages`, params, locale)
      return cleanStrapiData(res.data.data)
    } catch (err) {
      console.error(err)
    }
  }

  async getFooter(locale) {
    try {
      const res = await this.getLocalizedData('footer-by-locale', {}, locale)

      return {
        socials: res.data.SocialBloc,
      }
    } catch (err) {
      console.error(err.status)
    }
  }

  async getMe() {
    try {
      const res = await this.getLocalizedData('me', { populate: 'deep' })
      return cleanStrapiData(res.data.data)
    } catch (err) {
      console.error(err)
    }
  }
}

module.exports = StrapiDatasource
