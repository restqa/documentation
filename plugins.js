module.exports = [{
  name: "REST API Plugin (default)",
  enabled: true,
  repository: "",
  docs: [{
    output: "tests/plugins/config-restqapi.md"
  },{
    input: "https://raw.githubusercontent.com/restqa/restqapi/master/docs/features.md",
    output: "tests/restqapi/features.md",
    metadata: {
      id: 'features',
      sidebar_label: 'Gherkin References',
      title: 'Gherkin References'
    },
    jsdoc: false
  },{
    input: "https://raw.githubusercontent.com/restqa/restqapi/master/src/restqapi/steps/1-given/index.js",
    output: "tests/restqapi/given.md",
    metadata: {
      id: 'given',
      sidebar_label: 'Given',
      title: 'Given: Describe your context'
    },
    jsdoc: true
  },{
    input: "https://raw.githubusercontent.com/restqa/restqapi/master/src/restqapi/steps/2-when/index.js",
    output: "tests/restqapi/when.md",
    metadata: {
      id: 'when',
      sidebar_label: 'When',
      title: 'When: Describe an event'
    },
    jsdoc: true
  },{
    input: "https://raw.githubusercontent.com/restqa/restqapi/master/src/restqapi/steps/3-then/index.js",
    output: "tests/restqapi/then.md",
    metadata: {
      id: 'then',
      sidebar_label: 'Then',
      title: 'Then: Describe an expected outcome'
    },
    jsdoc: true
  }]
},{
  name: "Fake data Plugin",
  enabled: true,
  repository: "",
  docs: [{
    output: "tests/plugins/config-faker-plugin.md"
  },{
    input: "https://raw.githubusercontent.com/restqa/faker-plugin/master/docs/features.md",
    output: "tests/faker-plugin/features.md",
    metadata: {
      id: 'features',
      sidebar_label: 'Gherkin References',
      title: 'Gherkin References'
    },
    jsdoc: false
  }, {
    input: "https://raw.githubusercontent.com/restqa/faker-plugin/master/src/faker-plugin/steps/1-given/index.js",
    output: "tests/faker-plugin/given.md",
    metadata: {
      id: 'given',
      sidebar_label: 'Given',
      title: 'Given: Describe your context'
    },
    jsdoc: true
  }]
},{
  name: "RestQkube Plugin",
  enabled: false,
  repository: "",
  docs: [{
    input: "https://raw.githubusercontent.com/restqa/restqkube/master/docs/features.md",
    output: "tests/restqkube/features.md",
    metadata: {
      id: 'features',
      sidebar_label: 'Gherkin References',
      title: 'Gherkin References'
    },
    jsdoc: false
  },{
    input: "https://raw.githubusercontent.com/restqa/restqkube/master/src/restqkube/steps/1-given/index.js",
    output: "tests/restqkube/given.md",
    metadata: {
      id: 'given',
      sidebar_label: 'Given',
      title: 'Given: Describe your context'
    },
    jsdoc: true
  },{
    input: "https://raw.githubusercontent.com/restqa/restqkube/master/src/restqkube/steps/2-when/index.js",
    output: "tests/restqkube/when.md",
    metadata: {
      id: 'when',
      sidebar_label: 'When',
      title: 'When: Describe an event'
    },
    jsdoc: true
  },{
    input: "https://raw.githubusercontent.com/restqa/restqkube/master/src/restqkube/steps/3-then/index.js",
    output: "tests/restqkube/then.md",
    metadata: {
      id: 'then',
      sidebar_label: 'Then',
      title: 'Then: Describe an expected outcome'
    },
    jsdoc: true
  }]
}]
