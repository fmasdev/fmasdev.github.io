'use strict';

/**
 * feed-back controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::feed-back.feed-back', ({ strapi }) => ({
  async findByLocale(ctx) {
    const {locale} = ctx.query;

    const entry = await strapi.entityService.findMany('api::feed-back.feed-back', {
      filters: { locale: locale || 'fr' },
      populate: 'deep',
    });

    if (!entry) {
      return ctx.notFound('Feed-back not found for this locale');
    }

    return entry;
  },
}))
