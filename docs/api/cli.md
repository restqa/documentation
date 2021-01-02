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

## Generate Scenario (curl)

If you ready API is already developed and you want a test scenario to check the non-regression the best is just to generate a scenario from your curl command

Usage : 

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

If you want to export the content into a file, you will need to use the `-o` options

To export the generated scenario into the file Generated Scenario into the `generated.feature`

```bash
restqa generate  curl https://jsonplaceholder.typicode.com/todos/1 -o generated.feature
```

> You can also get the benefit of this feature from our Website : [https://api2scenario.restqa.io](https://api2scenario.restqa.io/) 😁

