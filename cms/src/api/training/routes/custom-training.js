
module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/training-by-locale',
      handler: 'training.findByLocale',
      config: {
        auth: false,
      },
    },
  ],
};
