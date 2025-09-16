
module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/experience-by-locale',
      handler: 'experience.findByLocale',
      config: {
        auth: false,
      },
    },
  ],
};
