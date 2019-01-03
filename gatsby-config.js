const contentful = require('contentful');
const manifestConfig = require('./manifest-config');
require('dotenv').config();

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://christopher-portfolio.netlify.com',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

const { ACCESS_TOKEN, SPACE_ID } = process.env;

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

module.exports = client.getEntries().then(entries => {
  const aboutEntry = entries.items.find(
    entry => entry.sys.contentType.sys.id === 'about',
  );

  const about = aboutEntry.fields;

  return {
    plugins: [
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-netlify-cache',
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
          trackingId: "UA-131673013-1",
        },
      },
      {
        resolve: 'gatsby-plugin-robots-txt',
        options: {
          host: "https://christopher-portfolio.netlify.com",
          sitemap: "https://christopher-portfolio.netlify.com/sitemap.xml",
          resolveEnv: () => NETLIFY_ENV,
          env: {
            production: {
              policy: [{ userAgent: '*' }]
            },
            'branch-deploy': {
              policy: [{ userAgent: '*', disallow: ['/'] }],
              sitemap: null,
              host: null
            },
            'deploy-preview': {
              policy: [{ userAgent: '*', disallow: ['/'] }],
              sitemap: null,
              host: null
            },
          },
        },
      },
      {
        resolve: 'gatsby-plugin-manifest',
        options: manifestConfig,
      },
      'gatsby-plugin-styled-components',
      {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [`cabin`, `Open Sans`, `Roboto Mono`],
        },
      },
      {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: SPACE_ID,
          accessToken: ACCESS_TOKEN,
        },
      },
      {
        resolve: `gatsby-source-medium`,
        options: {
          username: about.mediumUser,
        },
      },
      'gatsby-transformer-remark',
      'gatsby-plugin-offline',
    ],
  };
});
