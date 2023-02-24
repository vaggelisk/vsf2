const GTM_TAG = 'GTM-WMDC3CP';

module.exports = {
  title: 'VSF2 - Magento - Resistance',
  base: '/',
  description: 'Documentation for prolet needs and social resistance',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    // Google Tag Manager
    [
      'script',
      {},
      [
        `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${GTM_TAG}');
    `,
      ],
    ],
  ],

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#configurewebpack
   */
  configureWebpack: (config) => {
    // Add support for webp images
    config.module.rules.push({
      test: /\.(webp)(\?.*)?$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'assets/img/[name].[hash:8].[ext]',
          },
        },
      ],
    });

    // Fix image loading. Ref: https://github.com/vuejs/vue-loader/issues/1612#issuecomment-559366730
    config.module.rules = config.module.rules.map((rule) => {
      rule.use =
        rule.use &&
        rule.use.map((useRule) => {
          if (useRule.loader === 'url-loader') {
            useRule.options.esModule = false;
          }

          return useRule;
        });

      return rule;
    });
  },


  themeConfig: {
    GTM_TAG,
    sidebarDepth: 0,
    repo: 'https://github.com/vaggelisk/vsf2/',
    editLinks: true,
    docsDir: 'docs',
    docsBranch: 'main',
    editLinkText: 'Edit this page',
    logo: 'https://user-images.githubusercontent.com/1626923/137092657-fb398d20-b592-4661-a1f9-4135db0b61d5.png',
    nav: [
      { text: 'Vue Storefront', link: 'https://vuestorefront.io/' },
      { text: 'Core Documentation', link: 'https://docs.vuestorefront.io/v2/' },
      { text: 'Our Live', link: 'https://evia.app.pyconero.gr/' },
      { text: 'Our Discord', link: 'https://docs.vuestorefront.io/magento/guide/environments.html' },
      { text: 'Core Project GitHub', link: 'https://github.com/vuestorefront/magento2' }
    ],
    sidebar: [
      {
        title: 'Very First Steps',
        collapsable: true,
        children: [
          ['/', 'Introduction'],
          ['/starting-point/starting-webstorm-editor', 'Starting with Webstorm Editor'],
          ['/starting-point/starting-git', 'Starting with git'],
          ['/starting-point/setup-the-project-locally', 'Setup the Project locally'],
          ['/starting-point/contributing-via-git', 'Contributing to the collective Project (git)'],
        ],
      },
      {
        title: 'Advanced',
        collapsable: true,
        children: [
          ['/advanced/loggedin-customer/duration', 'Logged-in Customer Duration'],
          ['/advanced/makingVuexVariable', 'Making a vuex variable'],
          ['/advanced/redisCacheSetup/changingPrices', 'Redis Cache (quite advanced)'],
        ],
      },
      {
        title: 'Learn Vue Storefront',
        collapsable: true,
        children: [
          ['https://docs.vuestorefront.io/v2/getting-started/introduction.html', 'What is Vue Storefront?'],
          ['https://docs.vuestorefront.io/v2/getting-started/project-structure.html', 'Project structure'],
          ['https://docs.vuestorefront.io/v2/getting-started/configuration.html', 'Configuration'],
          ['https://docs.vuestorefront.io/v2/getting-started/layouts-and-routing.html', 'Layouts and Routing'],
          ['https://docs.vuestorefront.io/v2/getting-started/theme.html', 'Theme'],
          ['https://docs.vuestorefront.io/v2/getting-started/internationalization.html', 'Internationalization'],
        ],
      },
    ],
  },
};
