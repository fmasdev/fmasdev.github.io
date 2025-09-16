module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/home-by-locale',
      handler: 'home.findByLocale',
      config: {
        auth: false,
      },
    },
  ],
};
