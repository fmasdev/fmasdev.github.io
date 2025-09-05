const {localProvider, s3Provider} = require('./upload')

// All custom plugins are in ./cms/plugins directory
// This dir is copied in ./cms/market/src/plugins in :
//   - docker container volumes for dev env
//   - DockerFileReadyProd for other env

module.exports = ({env}) => ({
  'config-sync': {
    enabled: true,
    // config: {
    //   importOnBootstrap: true, // not available on dev env --> @see @src/index.js:boostrap
    // },
  },
  'slugify': {
    enabled: false,
    config: {
      contentTypes: {},
      shouldUpdateSlug: true,
    },
  },
  i18n: {
    enabled: true,
    config: {
      defaultLocale: 'fr',
      locales: ['fr', 'en'],
    },
  },
})
