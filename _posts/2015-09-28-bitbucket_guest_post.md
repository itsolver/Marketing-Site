---
layout: post
title: Bitbucket Guest Post
header: Bitbucket Guest Post
category: guest
author: mike
---

## A Content Management System in your Bitbucket Repository

*This guest post is written by Mike Neumegen, co-founder of CloudCannon.*

With Bitbucket, developers have great workflows for collaborating on software projects. You can see exactly what has changed when someone makes an update, multiple people can make updates at the same time and new features can be separated into branches.

So why can't we have these workflows when building websites for non-technical users? Database backed content management systems offer basic revision control but they lack the other benefits you get with Bitbucket.

With the CloudCannon Bitbucket add-on, developers get all the advantages of using Bitbucket to build websites **and** non-technical people can update content.

### What is CloudCannon?

CloudCannon helps agencies and enterprises build websites for non-technical users faster.

Developers build a static or [Jekyll](http://jekyllrb.com) site and push it to a Bitbucket repository. CloudCannon synchronizes the files and deploys the site live.

Non-technical users log into CloudCannon and update content inline. All updates are kept in sync between CloudCannon and Bitbucket.

### Why use CloudCannon?

Companies like [Netflix](http://cloudcannon.com/customers/netflix/), [Engine Yard](http://cloudcannon.com/customers/engine-yard/), [Xtendly](http://cloudcannon.com/customers/xtendly/) and [Brandon Setter](http://cloudcannon.com/customers/brandon-setter/) now rapidly deploy websites for marketing teams and clients.

CloudCannon websites are just static websites which has numerous advantages over database backed CMSs:

* They're simpler to build.
* All the source files can live in Bitbucket.
* They load faster as there's no backend processing.
* There's less security risk.


CloudCannon also makes it easier for non-technical users:

* Editing is inline so there's no need to preview content.
* Developers control what content and metadata can be updated so there's not an overwhelming array of options.
* Through git branching CloudCannon support multiple environments so changes can be testing on a live site before it's sent to production.


### How do I get started?

Getting a site live using the CloudCannon Bitbucket add-on is easy. First head over to the [Bitbucket Add-On directory](https://bitbucket.org/account/addon-directory/) and install CloudCannon.

![](/uploads/versions/list---x----1000-625x---.png)

Next we need to create a repository with a static or Jekyll site. If you don't have one handy [here's a Jekyll site we prepared earlier](http://docs.cloudcannon.com/creative.zip).

![](/uploads/versions/bb-source---x----900-563x---.png) Click the CloudCannon button on the left sidebar.

![](/uploads/versions/screen-shot-2015-09-28-at-1.11.21-am---x----900-563x---.png)

Create a site. CloudCannon syncs your files from Bitbucket.

![](/uploads/versions/screen-shot-2015-09-28-at-1.12.43-am---x----900-563x---.png)The site is live. Click the generated domain at the top left to view it.

![](/uploads/versions/screen-shot-2015-09-28-at-1.41.24-am---x----900-563x---.png)Now it's time to make it easy to update. Go back to CloudCannon and click on `index.html`, then go to the code editor at the top right.

![](/uploads/versions/screen-shot-2015-09-28-at-1.13.16-am---x----900-563x---.png)Here you add `class="editable"` to elements you want to be updated. Save that and go to the visual editor view.

![](/uploads/versions/screen-shot-2015-09-28-at-1.13.44-am---x----900-563x---.png)Try updating the content. When you save, CloudCannon commits the changes back to your Bitbucket repository and pushes the changes to your live site.

Editing meta data is easy using front matter. Click the settings button to make changes to front matter.

![](/uploads/versions/screen-shot-2015-09-28-at-1.14.05-am---x----900-563x---.png)Blog posts, collection items and data files also have simple interfaces for updating content.

![](/uploads/versions/screen-shot-2015-09-28-at-1.54.07-am---x----900-563x---.png)Now you have a live site you can share with your team or clients! That should be enough to get you started. If you're looking for a more in-depth tutorial, checkout our [Getting Started Guide](http://docs.cloudcannon.com/getting_started/introduction/).