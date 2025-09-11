// src/scripts/export.js

const StrapiDatasource = require('../datasources/StrapiDatasource')
const { localesConfig, dirConfig } = require('../config/config')
const { fileHelper } = require('../helpers/fileHelper')
const {extractMediaUrls} = require("../helpers/extractUrls");

async function exportData() {
  console.log('## START EXPORT DATA')
  const strapi = new StrapiDatasource()

  // fetch untranslated single types
  const me = await strapi.getMe()

  for (const [name, locale] of Object.entries(localesConfig)) {
    console.log(`## Export data for locale ${name}`)

    const [
      experiences,
      training,
      skills,
      feedBacks,
      footer
    ] = await Promise.all([
        await strapi.getPage('experience-pro', locale),
        await strapi.getPage('training', locale),
        await strapi.getPage('skills', locale),
        await strapi.getPage('feed-back', locale),
        await strapi.getFooter(locale),
      ])

    const finalData = {
      experiences: experiences[0]?.attributes,
      training: training[0]?.attributes,
      skills: skills[0]?.attributes,
      feedBacks: feedBacks[0]?.attributes,
      footer: footer,
      me: me,
    }

    console.log(`## Exported data of locale ${name}`)


    // fileHelper.downloadFile
    Object.keys(finalData).forEach((key) => {
      fileHelper.saveJson(
        `${dirConfig.export}${locale.substring(0, 2)}/${key}.json`,
        finalData[key],
      )
    })

    console.log(`## Saved data of locale ${name}`)
    console.log(`## Extracting media URLs`)

    const medias = extractMediaUrls(finalData)

    console.log(`Found ${medias.length} media URLs`)

    await fileHelper.ensureDir(`${dirConfig.export}media`)

    for (const media of medias) {
      await fileHelper.downloadFile(media, `${dirConfig.export}media/`, strapi)
    }

    console.log(`## SavedMedia`)
    console.log('### Export success')
  }
}

;(async () => {
  await exportData()
})()
