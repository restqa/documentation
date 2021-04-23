---
id: config-faker-plugin
sidebar_label: Configuration
title: 'Enable the Faker Plugin'
---

> Generate fake data for Test Scenarios

## Introduction

Are you not fed up John Doe ? or reusing every time the same information for your test data ? How your product will react on the production with a different real data?

The best way to answer to the question is to have test scenario that are testing your product with different data each time.

This is close to exploration testing... this exactly how this plugin want to help you.
It will extend the RestQA capability in order to generate fake data on your scenario.

This plugins is based on the [faker.js](https://github.com/Marak/faker.js) library

## Installation

You will need to use npm:

```
npm install @restqa/faker-plugin
```

Then in your `.restqa.yml` configuration file you will have to add the follow snippet under the `environments.*.plugins` section:

```
- name: @restqa/faker-plugin
  config:
    locale: 'en' 
    prefix: 'faker'
  
```


### Example

```yaml title=".restqa.yml" {13-16}
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
      - name: @restqa/faker-plugin
       config:
         locale: 'fr' # default en
         prefix: 'faker' # the prefix used for the place holders
    outputs:
      - type: discord
        enabled: true
        config: 
          url: http://example.discord.com
```

## Options

### environments[].plugins.name

* **Type:** `string`
* **Required:** `yes`
* **value** `@restqa/faker-plugin`

Define plugin name

### environments[].plugins.config.locale

* **Type:** `string`
* **Required:** `no`
* **Default** `en`

The local to use in order to generate fake data [available values](https://github.com/Marak/Faker.js#Localization)

### environments[].plugins.config.prefix

* **Type:** `string`
* **Required:** `no`
* **Default** `faker`

The prefix to identify the placeholder that required to be faked (example: `{{ faker.music.genre }}`)
