// src/scripts/export.js

const StrapiDatasource = require('../datasources/StrapiDatasource')
const {localesConfig, dirConfig} = require('../config/config')
const {fileHelper} = require("../helpers/fileHelper");

async function exportData() {
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



    const saveData = []
    Object.keys(finalData).forEach((key) => {
      saveData.push(fileHelper.writeJson(`${dirConfig.export}${locale.substring(0, 2)}/${key}.json`, finalData[key]))
    })

    await Promise.all(saveData)
  }
}

;(async () => {
  await exportData()
})()


