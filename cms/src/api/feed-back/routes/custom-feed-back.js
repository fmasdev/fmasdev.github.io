module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/feed-back-by-locale',
      handler: 'feed-back.findByLocale',
      config: {
        auth: false,
      },
    },
  ],
};
