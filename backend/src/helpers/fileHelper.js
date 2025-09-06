// src/helpers/fileHelper.js
const {promises: fs} = require('node:fs')

const fileHelper = {

  async writeJson(filePath,content)  {
    console.log(filePath)
    try {
      await fs.writeFile(filePath, JSON.stringify(content, null, 2), { encoding: "utf-8" });
      console.log("✅ Fichier JSON écrit avec succès :", filePath);
    } catch (err) {
      console.error("❌ Erreur lors de l'écriture du fichier :", err);
    }
  }
}

module.exports = {
  fileHelper
}
