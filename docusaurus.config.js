module.exports = {
  title: 'RestQA',
  tagline: 'The Open automation testing platform',
  url: 'https://restqa.io',
  baseUrl: process.env.BASE_URL || '/',
  onBrokenLinks: 'throw',
  favicon: 'https://restqa.io/assets/img/favicon.png',
  organizationName: 'restqa', // Usually your GitHub org/user name.
  projectName: 'restqa', // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: false,
    googleAnalytics: {
       trackingID: 'UA-118770210-1'
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
        }, {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        }, {
          to: 'blog',
          label: 'Blog',
          position: 'right',
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
          editUrl: 'https://github.com/restqa/documentation/edit/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl:  'https://github.com/restqa/documentation/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
