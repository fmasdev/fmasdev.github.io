// config/datasources/StrapiDatasource.js

const {strapiDataSourceConfig: config, appConfig} = require("../config");
const axios = require("axios");

class StrapiDatasource {
  constructor() {
    this.http = axios.create({
      baseURL: config.url,
      timeout: 1000,
      headers: {
        'Authorization': `Bearer ${config.token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    })
  }

  async getLocalizedData(uri, locale = null, params = {}, useFallback = false) {
    const hasParams = Object.keys(params).length

    if (hasParams) {
      Object.entries(params).forEach(([key, value]) => {
        if (!uri.includes('?')) {
          uri += ('?')
        }
        uri += `${key}=${value}`
      })
    }

    const contentTypeName = uri.split('?')[0].replace('api/', '')
    const localizedUri = locale && locale !== appConfig.defaultLocale ?
      (hasParams ? `${uri}&locale=${locale}` : `${uri}?locale=${locale}`)
      : uri


    try {
      return await this.http.get(localizedUri)
    } catch (error) {
      if (!locale || !useFallback || error?.extensions?.response?.status !== 404) {
        if (!error.message.includes(contentTypeName)) {
          error.message = `on ${contentTypeName}: ${error.message}`
        }
      }

      throw error
    }
  }

  async getExperiences(locale = null) {
    try {
      const experiences = await this.getLocalizedData('experience-by-locale', locale, {'populate': 'deep'})
      console.log(JSON.stringify(experiences.data, null, 2))

    } catch (err) {
      console.error(err)
    }
  }

  async getConfig() {

  }

  async getFooter() {

  }

  async getMe() {

  }

  async getPersonnalProjects() {

  }

  async getSkills() {

  }

  async getTraining() {

  }

  async getIWorkWith() {

  }
}

module.exports = StrapiDatasource
