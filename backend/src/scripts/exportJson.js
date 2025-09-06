// src/scripts/exportJson.js

const StrapiDatasource = require('../datasources/StrapiDatasource')
const {localesConfig, dirConfig} = require('../config/config')
const {fileHelper} = require("../helpers/fileHelper");

async function exportJson() {
  console.log('## START EXPORT DATA')
  const strapi = new StrapiDatasource()

  // fetch untranslated single types
  const me = await strapi.getMe()

  for(const [name, locale] of Object.entries(localesConfig)) {
    console.log(`## Export data for locale ${name}`)

    const [
      professionalExperiences,
      training,
      skills,
      feedBacks,
      footer,
    ] = await Promise.all([
      strapi.getPage('experience-pro', locale),
      strapi.getPage('training', locale),
      strapi.getPage('skills', locale),
      strapi.getPage('feed-back', locale),
      await strapi.getFooter(locale),
    ])

    const finalData = {
      proExperience: professionalExperiences[0]?.attributes,
      training: training[0]?.attributes,
      skills: skills[0]?.attributes,
      feedBacks: feedBacks[0]?.attributes,
      footer: footer,
      me: me
    }

    console.log(`## Exported data of locale ${name}`)

    // save localized json file
    await fileHelper.writeJson(`${dirConfig.export}/${locale}.json`, finalData)
  }
}


;(async () => {
  await exportJson()
})()


