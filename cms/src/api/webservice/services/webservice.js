'use strict';

/**
 * webservice service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::webservice.webservice');
