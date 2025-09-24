// config/datasources/StrapiDatasource.js

const {
  strapiDataSourceConfig: config,
  appConfig,
} = require('../config/config')
const axios = require('axios')
const { cleanStrapiData } = require('../helpers/cleanStrapiData')

class StrapiDatasource {
  constructor() {
    this.baseUrl = config.url
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

      if (uri === 'page') {
        throw new Error(`❌ Error on fetch localized page ${params['filters[slug][$eq]']} : ${error.message}`)
      } else {
        throw new Error(`❌ Error on fetch localized ${uri} : ${error.message}`)
      }
    }
  }

  async getExperiences(locale) {
    try {
      const res = await this.getLocalizedData(`experience-by-locale`, {}, locale)
      return cleanStrapiData(res.data)
    } catch (err) {
      console.error(err.message)
    }
  }

  async getFeedBacks(locale) {
    try {
      const res = await this.getLocalizedData(`feed-back-by-locale`, {}, locale)
      return cleanStrapiData(res.data)
    } catch (err) {
      console.error(err.message)
    }
  }

  async getTrainings(locale) {
    try {
      const res = await this.getLocalizedData(`training-by-locale`, {}, locale)
      return cleanStrapiData(res.data)
    } catch (err) {
      console.error(err.message)
    }
  }

  async getHome(locale) {
    try {
      const res = await this.getLocalizedData(`home-by-locale`, {}, locale)
      return cleanStrapiData(res.data)
    } catch (err) {
      console.error(err.message)
    }
  }

  async getSkills(locale) {
    try {
      const res = await this.getLocalizedData(`skill-by-locale`, {}, locale)
      return cleanStrapiData(res.data)
    } catch (err) {
      console.error(err.message)
    }
  }

  async getFooter(locale) {
    try {
      const res = await this.getLocalizedData('footer-by-locale', {}, locale)
      return {
        socials: res.data.SocialBloc,
      }
    } catch (err) {
      console.error(err.message)
    }
  }

  async getMe() {
    try {
      const res = await this.getLocalizedData('me', { populate: 'deep' })
      return cleanStrapiData(res.data.data)
    } catch (err) {
      console.error(err.message)
    }
  }

  async getProjects() {
    try {
      const res = await this.getLocalizedData('projects', {populate: 'deep'})
      return cleanStrapiData(res.data.data)
    } catch (err) {
      console.error(err.message)
    }
  }

  async getMedia(fileUrl) {
    const url = String(`${this.baseUrl.replace('api/', '')}${fileUrl.slice(1)}`)
    try {
      return await this.http.get(url, {responseType: "arraybuffer"});
    } catch (err) {
      console.error("❌ Error on fetch medias :", err.message)
    }
  }
}

module.exports = StrapiDatasource
