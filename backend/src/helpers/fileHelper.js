// src/helpers/fileHelper.js

import fs from 'fs'
import path from 'path'
import util from "node:util"

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

export default fileHelper
