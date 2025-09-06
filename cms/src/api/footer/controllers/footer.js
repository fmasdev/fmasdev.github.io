'use strict';

/**
 * footer controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::footer.footer');

module.exports = createCoreController('api::footer.footer', ({ strapi }) => ({
  async findByLocale(ctx) {
    const {locale} = ctx.query;

    const entry = await strapi.db.query('api::footer.footer').findOne({
      where: {locale: locale || 'fr'},
      populate: {
        localizations: true,
        SocialBloc: true
      },
    });

    if (!entry) {
      return ctx.notFound('Footer not found for this locale');
    }

    return entry;
  },
}))
