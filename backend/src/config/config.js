// config/config.js

const dotenv = require("dotenv");

dotenv.config();
const pojectPath = './'

const appConfig = {
  defaultLocale: 'fr'
}

const strapiDataSourceConfig = {
  url: process.env.STRAPI_BASE_URL || 'http://localhost:1337/api/',
  token: process.env.STRAPI_API_TOKEN || null
}

const dirConfig = {
  export: `${pojectPath}exports/`,
  import: `${pojectPath}imports/`
}

const localesConfig = {
  'France': 'fr-FR',
  // 'English': 'en-GB'
}

module.exports = {
  strapiDataSourceConfig,
  dirConfig,
  localesConfig,
  appConfig,
}
