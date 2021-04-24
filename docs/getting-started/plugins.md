---
id: plugins
sidebar_label: Plugins
title: Extend RestQA capabilies
---

## Introduction

The RestQA promise is to be able to fit to your project, however this a huge challenge. Each user has a different need.
By tackling this challenge we decided to build RestQA on Plugin system.
This plugin system enable the modularity requied in order to extend the initial capababilities of RestQA.

A plugin will import built-in step definition. For your information all the step definition added by default into RestQA are coming from the plugin [RestQapi](https://github.com/restqa/restqapi)

Since RestQA aims to be a community driven tool, we can imagine that at some point we will have the plugin available to cover the needs of everyone.

## Installation
 
Plugin are based on NodeJs, then it means they should be availabe on a package directory (usually Npm).
As any npm package you will need to install into your project directory such as:

```bash
npm install @restqa/faker-plugin
```

or

```bash
yarn add @restqa/faker-plugin
```

Once the module is installed you have to edit your `.restqa.yml` in order to enable the plugin into your project.
Example:

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

As you can see under the section plugin we added the lines:

```yaml
- name: @restqa/faker-plugin
  config:
    locale: 'en' 
    prefix: 'faker'
```

It means from now, you can use all the built-in step definition from the `@restqa/faker-plugin` into your feature files.

> When you are installing plugin do not forget to save the plugin into the `package.json` and update your continuous integration tool to add the step `npm install` before running your tests.

## Finding plugins

You will be able to find the all the official RestQA plugin within this documentation under the section [Step Definition](../tests/introduction)

However to access to a larger list of plugin mostly created by the community, you should take a look at the [restqa plugin available on npmjs.com](https://www.npmjs.com/search?q=keywords:restqa-plugin)

