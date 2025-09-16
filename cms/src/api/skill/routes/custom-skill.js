
module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/skill-by-locale',
      handler: 'skill.findByLocale',
      config: {
        auth: false,
      },
    },
  ],
};
