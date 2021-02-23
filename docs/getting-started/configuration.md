---
id: configuration
title: Configure your first test automation pipeline
sidebar_label: Configuration
---

## Config File

When running `restqa` from the command line, RestQA will automatically try to resolve a config fiile named `.restqa.yml` inside the project root.

The most basic config file looks like this:

```yaml title=".restqa.yml"
version: 0.0.1
metadata:
  code: EXAMPLE
  name: Example app
  description: This is the example app description
environments:
  - name: local
    default: true
    data:
      channel: 'csv'
      config:
        folder: 'test/data'
        delimiter: ','
    secrets:
      userEmail: 'test@foo.com'
    plugins:
      - name: restqapi
        config:
          url: https://api.restqa.io
    outputs:
      - type: html
        enabled: true
```

You can aslo explicitly specify a confiig file to use with the `--config` CLI options (resolved relative to `cwd`)

```bash
restqa run --config my-restqa.yml
```

## Options

### version

* **Type:** `string`
* **Required:** `yes`


Define wich YAML schema version to use to execute the tests.
Available : `0.0.1`

### metadata

* **Type:** `object`
* **Required:** `yes`

Data that helps uniquely identify the object

### metadata.code

* **Type:** `string`
* **Required:** `yes`

Unique of the tested application.

### metadata.name

* **Type:** `string`
* **Required:** `yes`

Name of the tested application

### metadata.description

* **Type:** `string`
* **Required:** `yes`

Short description of the tested application

### environments

* **Type:** `[object]`
* **Required:** `yes`

Define an environment for your test, since it's a list you can imagine having a different configuration per environemet


### environments[].name

* **Type:** `string`
* **Required:** `yes`

Environment name (example: local or uat)

### environments[].default

* **Type:** `boolean`
* **Required:** `yes`

During the execution, if a specific environement is not pass, RestQA will pick the environment with the `default` value set to `true`

### environments[].data

* **Type:** `object`
* **Required:** `no`

Define the data strategy during the test execution

### environments[].data.channel

* **Type:** `string`
* **Required:** `yes`

Define the external data source to use as a test dataset

### environments[].data.config

* **Type:** `object`
* **Required:** `yes`

Define the specific configuration related to the external data source

### environments[].secrets

* **Type:** `object`
* **Required:** `no`

Key/Value object that will be load into the dataset in order be reused into the test scenario

### environments[].plugins

* **Type:** `Plugin[]`
* **Required:** `yes`

Array of plugins to use. See [Plugin API](../api/plugin-api.md) for more details on RestQA plugins.

### environments[].outputs

* **Type:** `outputs[]`
* **Required:** `yes`

Array of outputs to use. See [Ouputs API](../api/output-api.md) for more details on RestQA outputs.
