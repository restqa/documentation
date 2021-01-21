---
id: slack
title: Slack
---

Setting a **Slack** alerting is simple:

## Pre-requisite

 * 1 minute  🚀
 * Create a slack incoming webhook : [Create an Incoming WebHook integration ](https://slack.com/intl/en-th/help/articles/115005265063-Incoming-webhooks-for-Slk)
 * Valid RestQA config file.

## Configuration 

```yaml
environments:
  - name: sandbox
    outputs:
      - type: 'slack'
        enabled: true
        config: 
          url: !env-var SLACK_WEBHOOK_URL
          onlyFailed: false
          showErrors: false
          reportUrl: 'http://example.com/test-report/{uuid}'
```

## Command 

If you don't want configure this part manually you can also use the command line :

```
restqa install slack
```

### Options

| *Property*   | *Description*                                                                                | *Default*          |
|:-------------|:---------------------------------------------------------------------------------------------|:-------------------|
| `url`        | The slack incoming webhook url                                                               |                    |
| `onlyFailed` | Trigger the hook only for test failure                                                       | `true`             |
| `showErrors` | Show the error message within slack                                                          | `false`            |
| `reportUrl`  | The url to access to your detail test report if you have one (`{uuid}` is a placeholder)     |                    |


> About the `config.url` we recommend to use the `!env-var` keyword in order to use an [environment variable](/getting-started/environment-variable) and not expose a sensitve url into your configuration.

## Example

![slack example](../assets/cucumber-export-slack.png)

