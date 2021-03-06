---
id: cli
title: Cli

---


## Start a new restqa project

As mentioned from the [getting started page](../getting-started/quickstart.md), in order to run your test automation using RestQA you will need to have a `.restqa.yml` file in your folder.

Otherwise RestQA client provides a command to pre-configure it for your project.

```bash
restqa init
```

You can also initialize your project without answering the question by using the command : 

```bash
restqa init -y
```

## Install a new integration

Retrieve the list of available integration:

```bash
restqa install 
```

If you want to install Slack integration:


```bash
restqa install slack
```

example:

```bash
restqa install <INTEGRATION>
```

## Step definition

To get the list of different steps available for your scenario:

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

Example: 

![cli steps example](../assets/restqa-steps.gif)


There are options available:

| Parameter  | Alias | Description                                                  | Default                           | 
| ---------- | ----- | ------------------------------------------------------------ | --------------------------------- |
| ` --tag`   | `-t`  | Filter the step to a specific keyword                        |                                   |
| `--config` | `-c`  | Specify the configuration file to use                        | `.restqa.yml`                     |

## Run the test

You can run the test by using the command:

```bash
restqa run
```

or  

```bash
restqa r
```

A few options are available:

| Parameter  | Alias | Description                                                  | Default                           | 
| ---------- | ----- | ------------------------------------------------------------ | --------------------------------- |
| `--config` | `-c` | Specify the configuration file to use                         | `.restqa.yml`                     |
| ` --env`   | `-e` | Specify the environement to pick from the configuration file  | Default environment in the config |
| ` --tag`   | `-t` | Specify the tag to pre-select features or scenarios           |                              |

## Example project

RestQA provides a simple example that you can run using the command:

```bash
restqa example
```

or  

```bash
restqa ex
```

## Generate Scenario (curl)

If your API is already developed and you want a test scenario to check the non-regression, the best is just to generate a scenario from your curl command.

Usage: 

```bash
restqa generate curl https://jsonplaceholder.typicode.com/todos/1
```

Output (console):

```gherkin
Given I have the api gateway hosted on "https://jsonplaceholder.typicode.com"
  And I have the path "/todos/1"
  And I have the method "GET"
When I run the API
Then I should receive a response with the status 200
  And the response body should be equal to:
  """
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
  """
```

If you want to export the content into a file, you need to use the `-o` option.

To export the generated scenario into the file Generated Scenario into the `generated.feature`

```bash
restqa generate  curl https://jsonplaceholder.typicode.com/todos/1 -o generated.feature
```

## Dashboard

If your interested by a user interface to integrate your test.
Your wish has been granted!

Usage: 

```bash
restqa dashboard
```

There are options available:

| Parameter  | Alias | Description                                                  | Default       | 
| ---------- | ----- | ------------------------------------------------------------ | --------------|
| `--config` | `-c` | Specify the configuration file to use                         | `.restqa.yml` |
| ` --port`  | `-p` | Specify the running http port                                 | 8081          |


## Telemetry

The telemetry options can be enabled or disabled as you wishes.

Enable the telemetry:

```bash
restqa telemetry on
```

Disable the telemetry:

```bash
restqa telemetry off
```

## Environement variable

In order to override some options, you can use the environment variables below:

* `RESTQA_TELEMETRY`: enable or disable the telemetry (value: on | off)
* `RESTQA_CONFIG`: Define the location of the `.restqa.yml` configuration file
* `RESTQA_ENV`: Define the environement to select withing the `.restqa.yml`
