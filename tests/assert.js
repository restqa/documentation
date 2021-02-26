const result = require('./restqa-result.json')
const fs = require('fs')

let missingSteps = result
  .features[0]
  .elements[0]
  .steps
  .filter(step => step.result.status === 'undefined')
  .map(step => step.keyword  + step.name)

 console.log(missingSteps)
 console.log("number of errors", missingSteps.length)
 
 process.exit(missingSteps.length ? 1 : 0)

