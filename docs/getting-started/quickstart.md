---
id: quickstart
title: Quickstart

---


## Give RestQA a spin

To spin up RestQA, you can run:

```bash
npx @restqa/restqa init
```

It will download everything that is needed to start RestQA.

## Run with Docker

To play around with RestQA, you can also start it using Docker:

```bash
docker run -it --rm \
  --name restqa \
  -v $PWD:/app \
  restqa/restqa init
```

## Install with npm

To install n8n globally:

```bash
npm install @restqa/restqa -g
```

After the installation n8n can be started by typing in:

```bash
restqa init
```
