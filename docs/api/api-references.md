---
id: api-reference
title: API Reference

---

Each method can be destructed from the object returned by `require('@restqa/restqa')`. 

---

#### `Generate(cmd)`

Generate a scenario from a curl command, the process will use the parameter from the curl command to call your server then catch the response and generate a valid RestQA Test Scenario (Gherkin format)

* `cmd` (string) : The curl command of your request (example: curl https://jsonplaceholder.typicode.com/todos/1)


Example:


```js
const { Generate } = require('./src/index')

async function main() {
  let result = await Generate('curl https://jsonplaceholder.typicode.com/todos/1')
  console.log(result)
}

main()
```

Output:

```gherkin
Given I have the api gateway hosted on "https://jsonplaceholder.typicode.com"
  And I have the path "/todos/1"
  And I have the method "GET"
When I run the API
Then I should receive a response with the status 200
  And the response body should be equal to:
  """
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
  """
```


