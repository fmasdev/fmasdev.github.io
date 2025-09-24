module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/project-list-by-locale',
      handler: 'project-list.findByLocale',
      config: {
        auth: false,
      },
    },
  ],
};
