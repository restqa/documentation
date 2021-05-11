---
id: introduction
title: Performance Testing Integration
sidebar_label: Introduction
---

I think you'll agree with me when I say:

It's **REALLY** hard to maintain load test scenario.

This is why RestQA is offering you the way to maintain them for you by reusing your Gherkin scenario. And translate them into a your favorite load testing tool scenario 🤗.

### 1. Select the scenario to be translated

Firstly, you need to have a few scenario written in the gherkin format.
And then you simple need to add the tag `@perfomance` on top of each scenario that you want to reuse for your performance test.

Example: 
```gherkin title="tests/integration/get-product.feature" {1-1}
@performance
Scenario Outline: The product doesn't exist into the database
Given I have the api gateway
  And I have the path "/api/products/111112222233333"
  And I have the method "GET"
  And the header contains "accept-language" as "<language>"
  And the header contains "content-type" as "application/json"
When I run the API
Then I should receive a response with the status 404
  And the response body at "message" should equal "<message>"
  And the response time is under 1000 ms
Examples:
| language | message                    |
| en       | The product doesn't exist. |
| fr       | Le produit n'existe pas.   |
| it       | Le produit n'existe pas.   |
| default  | Le produit n'existe pas.   |

```

When we wiil run the test RestQA will detect the tag and translate the current scenario into your load testing scenario format.


### 2. Define your load testing tool

In order to define your testing tool you will need to specify it under the `@restqa/restqapi` plugin section.
Example:

```yaml {13-14} title=".restqa.yml"
version: 0.0.1
metadata:
  code: EXAMPLE
  name: Example app
  description: This is the example app description
environments:
  - name: local
    default: true
    plugins:
      - name: restqapi
        config:
          url: https://api.restqa.io
          performance:
            tool: artillery 
    outputs:
      - type: html
        enabled: true
```

As you can see we just need to specify the name of the tool that you are using to run your performance test.

#### Options

Under the `performance` setting a few option are available:

| *Property*     | *Description*                                                                                            | *Required* | *Default*           |
|:---------------|:---------------------------------------------------------------------------------------------------------|------------|:--------------------|
| `tool`         | The tool that you plan to use for your load testing                                                      | Yes        |                     |
| `outputFolder` | Specify the folder where the scenario should be generated                                                | No         | `tests/performance` |
| `onlySuccess`  | Define if you want to generate the performance scenario only for the functional scenario that passed     | No         | `true`              |


### 3. Generate the performance test scenario

Once the configuration has been setup, everytime you will launch the test using the command:

```
restqa run
```

This will generate the expected performance scenario respection the format of your performance test tool.

*Tips: If you just want to run to generate the performance scenario without running the full suite of test, use the command:*
```
restqa run -t @performance
```


:::note

This feature is avaiiable only if you have the `@restqa/restqapi` plugin enabled

:::

### 4. Run your performance test

Once your performance test scenario has been generated, the last step for you is just to reuse those scenarios into your favorite performance test and that is!
