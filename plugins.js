module.exports = [{
  name: "RestQapi",
  repository: "",
  docs: [{
    input: "https://raw.githubusercontent.com/restqa/restqapi/master/README.md",
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
}]
