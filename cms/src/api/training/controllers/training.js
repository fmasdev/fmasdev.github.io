'use strict';

/**
 * training controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::training.training');

module.exports = createCoreController('api::training.training', ({ strapi }) => ({
  async findByLocale(ctx) {
    const {locale} = ctx.query;

    const entry = await strapi.entityService.findMany('api::training.training', {
      filters: { locale: locale || 'fr' },
      populate: 'deep',
    });

    if (!entry) {
      return ctx.notFound('Training not found for this locale');
    }

    return entry;
  },
}))
