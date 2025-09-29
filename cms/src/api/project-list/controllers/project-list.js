'use strict';

/**
 * project-list controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::project-list.project-list', ({ strapi }) => ({
  async findByLocale(ctx) {
    const {locale} = ctx.query;

    const entry = await strapi.entityService.findMany('api::project-list.project-list', {
      filters: { locale: locale || 'fr' },
      populate: 'deep',
    });

    if (!entry) {
      return ctx.notFound('Project-list not found for this locale');
    }

    return entry;
  },
}))
