const imgSrc = (env) => {
  return [
    "'self'",
    'data:',
    'blob:',
    'dl.airtable.com',
    env('AWS_BUCKET') && `${env('AWS_BUCKET')}.s3.${env('AWS_REGION')}.amazonaws.com`,
    env('CDN_DOMAIN'),
  ].filter(Boolean)
}

module.exports = ({ env }) => [
  'strapi::logger',
  'strapi::errors',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': imgSrc(env),
          'media-src': imgSrc(env),
          'upgradeInsecureRequests': null,
        },
      },
    },
  },
]
