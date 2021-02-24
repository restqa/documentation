---
id: run
title: Test execution
---

In order to run your test scenario you will need to ensure your project contains a valid RestQA configuration file `.restqa.yml`

Then from there you can run the command:

```bash
restqa run
```

The command above will search for `*.feature` files recursively from the root folder and execute them.

### Specify the configuration file

You can also explicitly specify a configuration file to use with the `--config` CLI option (resolved relative to cwd):

```bash
restqa run --config my-config.yml
```

Or through the environment variable `RESTQA_CONFIG`

```bash
RESTQA_CONFIG=my-config.yml restqa run
```


### Specify the target environemt

You can also specify the environment to use with the `--env` CLI option:

```bash
restqa run --env uat
```

Or through the environment variable `RESTQA_ENV`

```bash
RESTQA_ENV=uat restqa run
```

