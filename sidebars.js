const Plugins = require('./plugins')

const pluginList = Plugins.reduce((result, plugin) => {
  result[plugin.name] = plugin.docs.map( doc => doc.output.replace('.md', ''))
  return result
}, {})

module.exports = {
  someSidebar: {
    '🚦  RestQA': [
      'introduction',
//      'concept',
      'contributing'
    ],
    '🚀  Getting Started': [
      'getting-started/quickstart',
      //'getting-started/manual-installation',
      //'getting-started/configuration',
      'getting-started/environment-variable',
    ],
    '🎯  Test Suites': [
      'tests/introduction',
      pluginList
    ],
    '📚  Data integration': [
      'data/google-spreadsheet',
      //'data/confluence',
      'data/excel'
    ],
    '📦  CI/CD integration': [
      'ci-cd/github-action',
      'ci-cd/gitlab-ci',
      'ci-cd/bitbucket-pipeline',
      'ci-cd/docker'
    ],
    '📣  Alerting': [
      'alerting/slack',
      'alerting/discord',
      'alerting/mattermost',
      'alerting/microsoft-teams',
      'alerting/line',
      'alerting/webhook'
    ],
    '📈  Monitoring': [
      'monitoring/kibana',
      'monitoring/grafana',
    ],
    'Premium Contribution': [

    ],
    'Premium ': [

    ],
    '🖥 API Reference': [
      'api/cli',
      'api/api-reference',
      'api/restqa-config',
      'api/create-plugin'
    ]
  },
};
