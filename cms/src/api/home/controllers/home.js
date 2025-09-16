'use strict';

/**
 * home controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::home.home', ({ strapi }) => ({
  async findByLocale(ctx) {
    const {locale} = ctx.query;

    const entry = await strapi.entityService.findMany('api::home.home', {
      filters: { locale: locale || 'fr' },
      populate: 'deep',
    });

    if (!entry) {
      return ctx.notFound('Home not found for this locale');
    }

    return entry;
  },
}))
