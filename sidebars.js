module.exports = {
  someSidebar: {
    'RestQA': [
      'introduction',
      'concept',
      'contributing'
    ],
    'Getting Started': [
      'getting-started/installation',
      'getting-started/manual-installation',
      'getting-started/configuration',
      'getting-started/environment-variable',
    ],
    'Test Suites': [
      'tests/features',
      {
        'Scenario': [
          'tests/scenario-request',
          'tests/scenario-trigger',
          'tests/scenario-response'
        ]
      }
    ],
    'Data integration': [
      'data/google-spreadsheet',
      'data/confluence',
      'data/excel'
    ],
    'CI/CD integration': [
      'ci-cd/github-action',
      'ci-cd/gitlab-ci',
      'ci-cd/bitbucket-pipeline',
      'ci-cd/docker'
    ],
    'Alerting': [
      'alerting/slack',
      'alerting/discord',
      'alerting/mattermost',
      'alerting/microsoft-teams',
      'alerting/line',
      'alerting/webhook'
    ],
    'Monitoring': [
      'monitoring/kibana',
      'monitoring/grafana',
    ],
    'Premium Contribution': [

    ],
    'Premium ': [

    ],
    'API Reference': [
      'api/cli',
      'api/restqa-config'
    ]
  },
};
