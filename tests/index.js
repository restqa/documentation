const fs = require('fs')


let feature = [
  __dirname + '/../docs/tests/restqapi/given.md',
  __dirname + '/../docs/tests/restqapi/when.md',
  __dirname + '/../docs/tests/restqapi/then.md',
].map(getContent).join('')


let content = `
Feature: Validator


Scenario: here
${feature}
`
fs.writeFileSync(__dirname + '/doc.feature', content)

function getContent(file) {
  file = fs.readFileSync(file).toString('utf-8')
  const items = file
    .match(/```gherkin([\S\s]*?)```/g)
    .map(_ => {
      return _.replace('```gherkin', '').replace('```', '')
    })
    return items.join('')
}
