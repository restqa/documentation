---
id: config-faker-plugin
sidebar_label: Configuration
title: 'Enable the Faker Plugin'
---

> Generate fake data for Test Scenarios

## Introduction

Are you not fed up of using John Doe in your test automation? 😆 

Or What will be the behavior of your product  on the production while using real data?

Thjs a good question right? And The best way to answer to it is to start thinking of having test scenario that are using different data each time.

This should help you on doint more exploration testing... And this exactly how this plugin want to help you.

Once installed this plugin will extend the RestQA capability in order to generate fake data on your scenario.

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
