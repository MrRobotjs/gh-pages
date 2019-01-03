const theme = require('./src/theme');

module.exports = {
  name: `Christopher's Portfolio`,
  short_name: `Christopher's Portfolio`,
  start_url: '/',
  background_color: theme.colors.background,
  theme_color: theme.colors.primaryColor,
  display: `standalone`,
  icon: 'media/icon.png',
};
