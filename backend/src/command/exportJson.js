const StrapiDatasource = require('../config/datasources/StrapiDatasource')
const {localesConfig} = require('../config/config')

async function exportJson() {
  const strapi = new StrapiDatasource()

  Object.entries(localesConfig).forEach(([name, locale]) => {
    const experiences = strapi.getExperiences(locale)
  })



}


;(async () => {
  await exportJson()
})()


