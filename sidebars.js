const Plugins = require('./plugins')

const pluginList = Plugins
  .filter(docs => docs.enabled)
  .reduce((result, plugin) => {
    result[plugin.name] = plugin.docs.map( doc => doc.output.replace('.md', ''))
    return result
  }, {})

module.exports = {
  someSidebar: {
    '🚦  RestQA': [
      'introduction',
      //'concept',
      'contributing'
    ],
    '🚀  Getting Started': [
      'getting-started/quickstart',
      'getting-started/installation',
      'getting-started/configuration',
      'getting-started/environment-variable',
      'getting-started/run',
      'getting-started/version'
    ],
    '🎯  Step definition': [
      'tests/introduction',
      pluginList
    ],
    '📚  Data integration': [
      'data/google-spreadsheet',
      //'data/confluence',
      'data/excel',
      'data/storage'
    ],
    '📦  CI/CD integration': [
      'ci-cd/github-action',
      'ci-cd/gitlab-ci',
      'ci-cd/circle-ci',
      'ci-cd/travis-ci',
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
    '📊  Reporting': [
      'reporting/html',
      //'reporting/html-remote',
      'reporting/json',
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
      'api/plugin-api',
      'api/output-api',
      //'api/restqa-config',
      //'api/create-plugin'
    ]
  },
};
