// config/config.js
const dotenv = require("dotenv");

dotenv.config();

const appConfig = {
  defaultLocale: 'fr'
}

const strapiDataSourceConfig = {
  url: process.env.STRAPI_BASE_URL || 'http://localhost:1337/api/',
  token: process.env.STRAPI_API_TOKEN || null
}

const frontConfig = {
  path: process.env.FRONT_JSON_PATH || null
}

const localesConfig = {
  'France': 'fr',
  // 'English': 'en'
}

module.exports = {
  strapiDataSourceConfig,
  frontConfig,
  localesConfig,
  appConfig,
}
