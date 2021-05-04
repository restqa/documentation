---
id: introduction
sidebar_label: Introduction
title: Understand the step definition
---

RestQa is based on [Cucumber](https://cucumber.io/), the test suite are using the **Gherkin** language.

**Gherkin** a fabulous language to translate human language into executable steps.
However it's important to understand the key concept :

```gherkin
Feature: Feature to test

Scenario: Business behavio

Given [Define the context]
When [trigger an event]
Then [Describe an expected outcome]
```

More information into the official [documentation](https://cucumber.io/docs/gherkin/reference/)

### RestQA Step definition

Dependending on the plugin enabled into your project you will have a set of pre-defined steps.

In order get the lists of the steps available on your project use the command:

```
restqa steps [keyword]
```

More detail about this command [here](../api/cli)



