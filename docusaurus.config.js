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
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/restqa',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} RestQA, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/restqa/documentation/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl:  'https://github.com/restqa/documentation/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
