---
id: environment-variable
title: Use Environment variable
sidebar_label: Environment variable
---

In order to avoid credential leaks into your configuration file we recommend you to use environement variables.
Each environment variable needs to be represented by the tag :

`!env-var ENV_VAR` where ENV_VAR is the value need to be replace by an environement variable

Example : 

```
# .restqa.yml
...
 - type: 'slack'
   enabled: true
   config: 
     url: !env-var SLACK_WEBHOOK_URL
     onlyFailed: false
     showErrors: false
```


