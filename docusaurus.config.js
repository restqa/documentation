module.exports = {
  title: 'RestQA',
  tagline: 'The Open automation testing platform',
  url: 'https://docs.restqa.io',
  baseUrl: process.env.BASE_URL || '/',
  onBrokenLinks: 'throw',
  favicon: 'https://restqa.io/assets/img/favicon.png',
  organizationName: 'restqa', // Usually your GitHub org/user name.
  projectName: 'restqa', // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: true,
    googleAnalytics: {
       trackingID: 'UA-118770210-1'
    },
    algolia: {
      apiKey: '9d632c07174c5d214076c3d956358166',
      indexName: 'restqa',
      appId: '8XDCCY4LAB'
    },
    announcementBar: {
      id: 'support_us', // Any value that will identify this message.
      content:
        'Want to support <strong>RestQA</strong>, give a star on <strong><a target="_blank" rel="noopener noreferrer" href="https://github.com/restqa/restqa">Github</a></strong>  ⭐️   ',
      backgroundColor: '#7f00ff',
      textColor: '#fff'
    },
    prism: {
      additionalLanguages: ['gherkin'],
    },
    colorMode: {
      disableSwitch: true
    },
    navbar: {
      title: 'RestQA',
      logo: {
        alt: 'RestQA Logo',
        src: 'https://restqa.io/assets/img/logos/restqa-logo-colors.png',
      },
      items: [
        {
          href: 'https://restqa.io',
          label: 'Products',
          position: 'right',
        /*
        }, {
          href: 'https://restqa.io/#/blog',
          label: 'Blog',
          position: 'right',
        */
        }, {
          href: 'https://restqa.io/#/contact',
          label: 'Contact Us',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} RestQA, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/restqa/documentation/edit/master/',
        },
        /*
        blog: {
          showReadingTime: true,
          editUrl:  'https://github.com/restqa/documentation/edit/master/blog/',
        },
        */
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
