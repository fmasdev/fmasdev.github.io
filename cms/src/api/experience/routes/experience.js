'use strict';

/**
 * experience router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::experience.experience');

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/experience-by-locale',
      handler: 'experience.findByLocale',
      config: {
        auth: false,
      },
    },
  ],
};
