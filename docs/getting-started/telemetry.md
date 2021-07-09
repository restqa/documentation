---
id: telemetry
title: Telemetry
---

Getting feedback about the actual behavior is important for us in order to improve the RestQA.

Then RestQA is collecting a few anonymous usage data. 

While the user will initiate the project for the first time using the command `restqa init`, he will be asked if he is allowing RestQA to collect anonymous data.
Only if the user answer yes, the data will be collected.

## How to update your consent ?

If you change your mind and do not want RestQA to collect anonymous data you can run the command:

```
restqa telemetry off
```

or you can use the environment variable `RESTQA_TELEMETRY` such as:

```
RESTQA_TELEMETRY=off restqa run
```

## What are we tracking ?

The information that we are tracking are:

* Date
* command name
* restqa version
* node version
* operating system
* Dashboard UI actions.

No personal information are tracked.

[Check on the source Code](https://github.com/restqa/restqa/blob/master/bin/restqa)

## Where are we storing the collected data ?

As of now we storing the information into google analytics.

## Any concern ?

If you have any concern feel free to contact us by [email](contact@restqa.io) or on [discord](https://restqa.io/chat)
