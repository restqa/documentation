---
id: config-restqapi
sidebar_label: Configuration
title: 'Enable RestQapi'
---

## Description

By using the RestQapi plugin you will be able to access to a plenty of step definition suppporting you on create test scenario for your __Rest API__.

## Example

```yaml title=".restqa.yml" {9-12}
version: 0.0.1
metadata:
  code: EXAMPLE
  name: Example app
  description: This is the example app description
environments:
  - name: uat
    default: true
    plugins:
      - name: @restqa/restqapi
        config:
          url: https://uat.api.restqa.io
    outputs:
      - type: slack
        enabled: true
        config: 
          url: http://example.slack.com
```



## Options

### environments[].plugins.name

* **Type:** `string`
* **Required:** `yes`
* **value** `@restqa/restqapi`

Define plugin name

### environments[].plugins.config.url

* **Type:** `string`
* **Required:** `yes`

Define the Url host of your api gateway for the selected environment

