---
slug: open-source-community
title: It's only about community
author: Olivier R.
author_title: CEO @ Atalent Consulting
author_url: https://github.com/olivierodo
author_image_url: https://avatars0.githubusercontent.com/u/4768226?s=400&v=4
tags: [restqa, api, testing, open source, test automation]
---

Hello Everyone,

In this post i just want to share a little bit more about API testing. There is plenty of article or tool to help to do api testing.
However everytime i feel an important flavor is missing. The why...
In fact testing is a big part of software development, when we think about it, we spend 20% of the time to develop the feature and 80% of time testing it, unit test, integration test, ui test or a lot of manual test over and over.
By knowing this we also realize that developer try to get a product consitency across the different feature. But most of the time on the QA side this is chaos.
Everyone worked with developer knows that developer tend to build and rebuild, refactor even when it's not necessary. We  which it could be the same for the QA but it's not because it's time consuming.
And this is why we start ending we test that never pass.. but it's okay. Or an inconsistency about what we are covering with automation test and what we are covering with manual test.

In fact this is i start think about restqa. Starting from this problem how can we be sure that the automation testing tool stay consistent.
The key missing part on QA is a real community. Look at the React, the docker or the Kubernetes Community. They are gathering and sharing their approach, their problem, their solution around one tool.
This is contributing to create Best Practice among Frontend Engineer for React or Best practices among Devops for Kubernets.

Here is our first steping stone for restqa, Build an open source tool that could help the QA Automation Community to carry their own Best pratices instead of leaving it paid products.

## What is the Challenge ?

In fact comparing to others, as Automation QA it's very hard to get a testing framework ready in less than a day... There is so many dependencies to manage.
The data, test scenario, the processing, the output...
And this is only when you know exactly what you want or how you plan to setup. But for most of the people it's a new discovery everytime...
Because it's important to understand that there is  gap between the QA skils and the actual target setup.
If we plan to do automation it means we will requires then support of the devops, if this one is free and know how to help we have a change to get the setup ready very fast if not that gonna be another story.


## RestQA, The Open test automation framework ready in a minute.

It's exactly the vision behind RestQA : Provide to the QA a way to setup his test automation framework in a minute, regardless of his skills.
As A QA we just want to do our Job, Which is checking the product quality, but the reality is that when you are bringing automation into the picture, we spend more time to tweak our tool instead of challenging the Product quality.
Here we are RestQa supposed to release the QA from the automation complexity, and focus only on what matter.

### How do we plan  to reach that vision ?

It's very simple, with restqa we just aim at connecting with every tool that your team are already using.
Since we really want to reduce the learning curve, and the installation time at the maximum we took the decision to build a lot of connectors to let RestQA to be a just plug and play framework.


