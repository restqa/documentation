---
id: plugin-api
title: Plugin API
---

RestQA plugins are the key processor of the test execution.

The plugins are the component that will import all the built-in step definition

In order to use a specific plugin you will need to import it into your configuration file under the environment section.


## Simple Example

* You can define RestQapi plugin for the uat environement

Using the following template:

```yaml {9-12}
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
```


## Options

### name

* **Type** `string`
* **Required** `yes`

Define the name of the plugin that need to be loaded

### config

* **Type** `object`
* **Required** `yes`

Specific configuration for a plugin 


