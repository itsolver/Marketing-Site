---
layout: post
title: Bitbucket Guest Post
header: Bitbucket Guest Post
category: guest
author: mike
---

## A Content Management System in your Bitbucket Repository

*This guest post is written by Mike Neumegen, co-founder of CloudCannon.*

Bitbucket provides developers with great workflows for collaborating on software projects. You can see exactly what has changed when someone makes an update, multiple people can make updates at the same time and new features can be separated into branches.

So why can't we have these workflows when building websites for non-developers? Database backed content management systems offer basic revision control but they lack the other benefits you get with Bitbucket.

The CloudCannon Bitbucket add-on gives developers the advantages of Bitbucket **and** non-developers the tools to update content.

### What is CloudCannon?

CloudCannon helps agencies and enterprises build websites for non-developers faster. Developers build a static or [Jekyll](http://jekyllrb.com) site and push it to a Bitbucket repository. CloudCannon synchronizes the files and deploys the site live. Non-developers log into CloudCannon and update content inline. All updates are kept in sync between CloudCannon and Bitbucket.

### Why use CloudCannon?

[Netflix](http://cloudcannon.com/customers/netflix/), [Engine Yard](http://cloudcannon.com/customers/engine-yard/), [Xtendly](http://cloudcannon.com/customers/xtendly/) and [Brandon Setter](http://cloudcannon.com/customers/brandon-setter/) use CloudCannon to rapidly deploy websites for marketing teams and clients.

CloudCannon sites are made of static files. Compared to a database backed CMS, there are a number of advantages:

* Less complexity
* All source files can be stored in Bitbucket
* Sites are served faster sites as there’s no backend processing
* Minimal security risk


CloudCannon makes it easier for non-developers:

* No need to preview content as editing is inline
* No design breaking changes as developers specify which content non-developers can modify
* Changes can be tested on a live staging site before production with Git branching and multiple environments


<div class="wistia_responsive_padding" style="padding:62.5% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="//fast.wistia.net/embed/iframe/lgi4qbkx0t?videoFoam=true" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" oallowfullscreen="oallowfullscreen" msallowfullscreen="msallowfullscreen" width="710" height="444" style="width: 710px; height: 444px;"></iframe></div></div>

<script src="//fast.wistia.net/assets/external/E-v1.js" async=""></script>

### How do I get started?

Getting a site live using the CloudCannon Bitbucket add-on is easy. First, navigate to the [Bitbucket Add-On directory](https://bitbucket.org/account/addon-directory/) and install CloudCannon.

![](/uploads/versions/list---x----1000-625x---.png)

Next, we need to create a repository with a static or Jekyll site. If you don't have one handy [here's a Jekyll site we prepared earlier](http://docs.cloudcannon.com/creative.zip).

![](/uploads/versions/bb-source---x----900-563x---.png) Click the CloudCannon button on the left sidebar.

![](/uploads/versions/bb-source---x----900-563x---.png)CloudCannon opens and shows the sites already connected to this repository (we don't have any yet).

![](/uploads/versions/screen-shot-2015-09-28-at-1.11.21-am-6b41e1a3aa4b16c96ade295043194685---x----900-563x---.png)

Let's create a site. Click on the plus and enter a site name. If you have multiple branches, select a branch.

![](/uploads/versions/screen-shot-2015-09-28-at-11.27.03-am-b34c9a32dbde11bedbeccc76d440760a---x----900-563x---.png)CloudCannon syncs your files from Bitbucket.

![](/uploads/versions/screen-shot-2015-09-28-at-1.12.43-am---x----900-563x---.png)The site is live. Click the generated domain at the top left to view it.

![](/uploads/versions/screen-shot-2015-09-28-at-1.41.24-am---x----900-563x---.png)Now it's time to make it easy to update. Go back to CloudCannon and click on `index.html`, then go to the code editor at the top right.

![](/uploads/versions/screen-shot-2015-09-28-at-1.13.16-am-d5d7c348bd205741b0a67b80d1bcfcc9---x----900-563x---.png)
Add `class="editable"` to elements you want to be updated. Save that and go to the visual editor view.

![](/uploads/versions/screen-shot-2015-09-28-at-1.13.44-am-397727f94432272d126c50df87d80f9c---x----900-563x---.png)Try updating the content. When you save, CloudCannon commits the changes back to your Bitbucket repository and pushes the changes to your live site.

Editing metadata is easy using front matter. Click the settings button to make changes to front matter.

![](/uploads/versions/screen-shot-2015-09-28-at-1.14.05-am---x----900-563x---.png)Blog posts, collection items and data files also have simple interfaces for updating content.

![](/uploads/versions/screen-shot-2015-09-28-at-1.54.07-am---x----900-563x---.png)Now you have a live site you can share with your team or clients. Best of all it's all done inside Bitbucket.

We've only scratched the surface of what CloudCannon can do. Install the CloudCannon Bitbucket add-on today and see how much faster you can build websites for non-developers. 

For a more in-depth tutorial, checkout our [Getting Started Guide](http://docs.cloudcannon.com/getting_started/introduction/).