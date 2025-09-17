'use strict';

/**
 * home controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::home.home', ({ strapi }) => ({
  async findByLocale(ctx) {
    const {locale} = ctx.query;

    const entry = await strapi.entityService.findOne('api::home.home', 1,{
      filters: { locale: locale || 'fr' },
      populate: {
        Presentation: {
          populate: {
            Cta: true
          }
        },
        Components: {
          populate: {
            Cards: {
              populate: {
                Photo: true,
              },
            },
          },
        },
      },
    });

    if (!entry) {
      return ctx.notFound('Home not found for this locale');
    }

    return entry;
  },
}))
