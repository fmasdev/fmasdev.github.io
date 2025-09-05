/**
 * @returns {Object}
 */
const uploadOptions = {
  breakpoints: {
    xlarge: 2560,
    large: 1920,
    medium: 1170,
    small: 570,
    xsmall: 370,
  },
}

/**
 * @param {function} env
 * @returns {Object}
 */
const localProvider = (env) => ({
  ...uploadOptions,
  provider: 'local',
})

/**
 * @see https://market.strapi.io/providers/@strapi-provider-upload-aws-s3
 *
 * @param {function} env
 * @returns {Object}
 */
const s3Provider = (env) => ({
  ...uploadOptions,
  provider: 'aws-s3',
  providerOptions: {
    baseUrl: env('CDN_URL'),
    rootPath: env('CDN_ROOT_PATH') || 'market',
    s3Options: {
      region: env('AWS_REGION'),
      params: {
        ACL: 'private',
        Bucket: env('AWS_BUCKET'),
      },
    },
  },
  actionOptions: {
    upload: {},
    uploadStream: {},
    delete: {},
  },
})

module.exports = {
  localProvider,
  s3Provider,
}
