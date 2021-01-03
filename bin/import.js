/*
 * Script importing Documentation from other repository
 *
 *
 * 
 * */ 
const Got = require('../node_modules/got')
const CommentParser = require('comment-parser')
const config = require('../plugins')
const fs = require('fs')
const path = require('path')

async function main() {
  const all = config.map(generate)
  let result = await Promise.all(all)
  result.forEach(docs => {
    docs.forEach(doc => {
      console.log('Document imported: ', doc.output)
    })
  })
}

async function generate(plugin) {

  const list = plugin.docs.map(async doc => {
    let { body } = await Got(doc.input)
    doc.content = body
    if (true === doc.jsdoc) {
       const categories = CommentParser(body)
        .filter( step => {
          return step.tags.filter(tag => tag.tag === 'example').length
        })
        .reduce((result, step) => {
          let category = ((step.tags.find(tag => tag.tag === 'category') || {}).name )|| 'Undefined'
          result[category] = result[category] || []
          result[category].push(step)
          return result
        }, {})

        doc.content = Object.keys(categories)
          .map(category => {
            let head = `## ${category}`
            let body = categories[category]
              .map(formatStepDefintion)
              .join('\n\n---\n\n')
            return head + '\n\n\n' + body
          })
          .join('\n')
    }
    createFile(doc)

    return doc
  })

  return Promise.all(list)
}

function formatStepDefintion(step) {
  //console.log(step)
  const content = [
    step.description
  ]
  step.tags
    .forEach(({tag, source}) => {
      if (tag !== 'example') return
      const lines = source.split('\n')
      let example = lines[0]
        .replace('@example', 'Example:')
        .replace('<caption>', '*')
        .replace('</caption>', '*')
      content.push(example)
      content.push('```gherkin')
      content.push(lines.splice(1).join('\n'))
      content.push('```')
    })
  return content.join('\n\n')
}

function createFile(doc) {
  // create folder if not exist
  path.dirname(doc.output).split(path.sep)
    .reduce((pathname, dir)  => {
      pathname = path.resolve(pathname, dir)
      if (false === fs.existsSync(pathname)) {
        fs.mkdirSync(pathname)
      }
      return pathname

    }, 'docs')

  const filename = path.resolve('docs', doc.output)
  const content = [
    '---',
    `id: ${doc.metadata.id}`,
    `sidebar_label: ${doc.metadata.sidebar_label}`,
    `title: '${doc.metadata.title}'`,
    '---',
    '',
    doc.content
  ].join('\n')
  fs.writeFileSync(filename, content)
}

main()
