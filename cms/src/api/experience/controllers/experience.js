'use strict';

/**
 * experience controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::experience.experience', ({ strapi }) => ({
  async findByLocale(ctx) {
    const {locale} = ctx.query;

    const entry = await strapi.entityService.findMany('api::experience.experience', {
      filters: { locale: locale || 'fr' },
      populate: 'deep',
    });

    if (!entry) {
      return ctx.notFound('Experience not found for this locale');
    }

    return entry;
  },
}))
