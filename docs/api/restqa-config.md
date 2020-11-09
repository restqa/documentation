---
id: restqa-config
title: RestQA configuration file sample
sidebar_label: .restqa.yml

---

A typical RestQa configuration :

```
---

version: 0.0.1
metadata:
  code: EXAMPLE-API
  name: An example API
  description: A simple RestQA file example
environments:
  - name: dev
    default: false
    plugins:
      - name: restqapi
        config:
          url: http://localhost:8080
    outputs:
      - type: file
        enabled: true
        config:
          path: 'restqa.report.json'
  - name: prod
    default: true
    plugins:
      - name: restqapi
        config:
          url: http://example.net
    outputs:
      - type: 'http-html-report' # Export into a html report hosted on your own server
        enabled: true
        config:
          url: http://mylocal-reportserver.com/test-report/
      - type: 'discord' #Export result to discord
        enabled: true
        config: 
          url: !env-var DISCORD_WEBHOOK
          onlyFailed: false
          showErrors: false
          reportUrl: 'http://mylocal-reportserver.com/test-report/{uuid}'
      - type: 'slack' # Export result to slack
        enabled: true
        config: 
          url: !env-var SLACK_WEBHOOK_URL
          onlyFailed: false
          showErrors: false
```
