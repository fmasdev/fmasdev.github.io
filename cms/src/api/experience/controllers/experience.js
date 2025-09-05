'use strict';

/**
 * experience controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::experience.experience');

module.exports = createCoreController('api::experience.experience', ({ strapi }) => ({
  async findByLocale(ctx) {
    const { locale } = ctx.query;

    const entry = await strapi.db.query('api::experience.experience').findOne({
      where: { locale: locale || 'en' }, // par défaut EN
      populate: { localizations: true, deep: true },
    });

    if (!entry) {
      return ctx.notFound('Experience not found for this locale');
    }

    return entry;
  },
}));
