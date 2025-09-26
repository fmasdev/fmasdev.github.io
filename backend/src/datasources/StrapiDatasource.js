// config/datasources/StrapiDatasource.js

import { strapiDataSourceConfig as config} from '../config/config.js'
import axios from 'axios'
import { cleanStrapiData } from '../helpers/cleanStrapiData.js'
import qs from 'qs';

export default class StrapiDatasource {
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
      const query = qs.stringify(params, { encodeValuesOnly: true })
      uri += `?${query}`
    }
    console.log(uri)
    const contentTypeName = uri.split('?')[0].replace('api/', '')
    const localizedUri = locale
      ? hasParams
        ? `${uri}&locale=${locale}`
        : `${uri}?locale=${locale}`
      : uri
    console.log(JSON.stringify(localizedUri, null, 2))
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

  async getProjects(locale) {
    const params = {
      populate: {
        stack_items: { populate: { Logo: '*'} },
        webservices: { populate: { Logo: '*'} },
        media: { populate: { formats: '*'} }
      },
    }
    try {
      const res = await this.getLocalizedData('projects', params, locale)
      return cleanStrapiData(res.data.data)
    } catch (err) {
      console.error(err.message)
    }
  }

  async getProjectList(locale){
    try {
      const res = await this.getLocalizedData('project-list-by-locale', {}, locale)
      return cleanStrapiData(res.data)
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
