// src/helpers/fileHelper.js

const fs = require('fs')
const path = require('path')
const util = require("node:util");

const fileHelper = {

  saveJson(filePath, data) {
    this.ensureDir(path.dirname(filePath));
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
  },

  ensureDir(dirPath) {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  },

  async downloadFile(media, destRoot, strapiDatasource) {
    const utilities = {
      original: {
        path: path.join(destRoot, media.original.path),
        url: media.original.strapiUrl
      }
    }

    if (media.thumbnail) {
      utilities.thumbnail = {
        path: path.join(destRoot, media.thumbnail.path),
        url: media.thumbnail.strapiUrl
      }
    }

    for (const key in utilities) {
      const filePath = utilities[key].path
      const dirPath = path.dirname(filePath)

      this.ensureDir(dirPath)

      const response = await strapiDatasource.getMedia(utilities[key].url)

      await fs.promises.writeFile(filePath, response.data)

      console.log(`✔ Saved ${filePath}`)
    }
  },
}

module.exports = {
  fileHelper,
}
