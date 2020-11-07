---
id: cli
title: Cli

---


## Start a new restqa project

Test Automation 
Workflows can not only be started by triggers, webhooks, or manually via the Editor. It is also possible to start them directly via the CLI.

Execute a saved workflow by its ID:

```bash
restqa init
```

## Install a new plugin

Retrieve the list of available plugin:

```bash
restqa install 
```

If you want to install the slack plugin:


```bash
restqa install slack
```

example:

```bash
restqa install <PLUGIN>
```

## Step definition

To get the list of different steps available for your scenario

### Given

```bash
restqa steps given
```

### When

```bash
restqa steps when
```
### Then

```bash
restqa steps then
```

## Run the test

You can run the test by using the command

```bash
restqa run
```

A few options are available :

| Parameter  | Alias | Description                                                  | Default                           | 
| ---------- | ----- | ------------------------------------------------------------ | --------------------------------- |
| `--config` | `-c` | Specify the configuration file to use                        | `.restqa.yml`                     |
| ` --env`   | `-e` | Specify the environement to pick from the configuration file | Default environment in the config |
