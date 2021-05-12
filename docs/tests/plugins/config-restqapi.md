---
id: config-restqapi
sidebar_label: Configuration
title: 'Enable RestQapi'
---

## Description

By using the RestQapi plugin you'll get access to many step definition suppporting you on create test scenario for your __Rest API__.

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

Define the Url host of your API gateway for the selected environment.

### environments[].plugins.config.insecure

* **Type:** `boolean`
* **Required:** `no`
* **Default:**  `false`

Define if you want to ignore the SSL certificate for this specific url.

### environments[].plugins.config.performance.tool

* **Type:** `string`
* **Required:** `yes`
* **Available values** `artillery`

Define the tool that you want to use for your load testing

### environments[].plugins.config.performance.outputFolder

* **Type:** `string`
* **Required:** `no`
* **Default:**  `tests/performance`

Define the folder where the performance scenario should be generated

### environments[].plugins.config.performance.onlySuccess

* **Type:** `boolean`
* **Required:** `no`
* **Default:**  `true`

Define if you want to generate the performance scenario only for the functional scenario that passed
