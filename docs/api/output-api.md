---
id: output-api
title: Output API
---

RestQA outputs extends designs from the module [@restqa/cucumber-export](https://github.com/restqa/cucumber-export)

The outputs are defined per environment.


## Simple Example

* You can define Slack as an output for your UAT
* You can define Discord and html as an output for your production

Using the following templates:

```yaml {14-17,25-30}
version: 0.0.1
metadata:
  code: EXAMPLE
  name: Example app
  description: This is the example app description
environments:
  - name: uat
    default: true
    plugins:
      - name: restqapi
        config:
          url: https://uat.api.restqa.io
    outputs:
      - type: slack
        enabled: true
        config: 
          url: http://example.slack.com
  - name: prod
    default: true
    plugins:
      - name: restqapi
        config:
          url: https://api.restqa.io
    outputs:
      - type: html
        enabled: true
      - type: discord
        enabled: true
        config: 
          url: http://example.discord.com
```

## Options

### type

* **Type** `string`
* **Required** `yes`

Define the type of output, the list of types available on the sections:  Alerting and Monitoring

### enabled

* **Type** `boolean`
* **Required** `yes`

Define if the current output should be enabled.

### config

* **Type** `object`
* **Required** `condition`

Specific configuration for an output (ex: the Slack url, etc...)
