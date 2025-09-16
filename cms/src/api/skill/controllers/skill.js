'use strict';

/**
 * skill controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::skill.skill');

module.exports = createCoreController('api::skill.skill', ({ strapi }) => ({
  async findByLocale(ctx) {
    const {locale} = ctx.query;

    const entry = await strapi.entityService.findMany('api::skill.skill', {
      filters: { locale: locale || 'fr' },
      populate: 'deep',
    });

    if (!entry) {
      return ctx.notFound('Skill not found for this locale');
    }

    return entry;
  },
}))
