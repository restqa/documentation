---
id: telemetry
title: Telemetry
---

Getting feedback about the actual behavior is important for us in order to improve RestQA.

Then RestQA is collecting a few anonymous usage data. 

While the user initiates the project for the first time using the command `restqa init`, user will be ask if he allows RestQA to collect anonymous data.
Only if the user answer Yes, then data will be collected.

## How to update your consent on RestQA?

If you change your mind and do not want RestQA to collect anonymous data, you can run the command:

```
restqa telemetry off
```

Or you can use the environment variable `RESTQA_TELEMETRY` such as:

```
RESTQA_TELEMETRY=off restqa run
```

## What does RestQA tracks?

The information that we track are the following:

* Date
* Command name
* RestQA version
* Node version
* Operating system
* Dashboard UI actions

No personal information is track.

[Check on the source Code](https://github.com/restqa/restqa/blob/master/bin/restqa)

## Where does RestQA stored the collected data?

As of now, we store the information in our Google Analytics.

## Any concern or query?

For any concern you might have about consent, feel free to contact us by [email](contact@restqa.io) or on [discord](https://restqa.io/chat)
