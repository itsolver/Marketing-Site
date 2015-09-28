---
layout: post
title: Bitbucket Guest Post 2
header: Bitbucket Guest Post 2
category: guest
author: mike
---

## Updatable websites in Bitbucket and CloudCannon

*This guest post is written by Mike Neumegen, co-founder of CloudCannon.*

Bitbucket provides developers with great workflows for collaborating on software projects. So why can't we have these workflows when building websites for non-developers?

What if you could deploy websites straight from Bitbucket? What if you could build static websites and have the power of a full blown CMS? What if non-developers could update content and have changes pushed back to your Bitbucket repository?

The new CloudCannon Bitbucket Add-on makes this possible.

### What is CloudCannon?

[CloudCannon](http://cloudcannon.com) helps agencies and enterprises build websites for non-developers. **Developers** build a static or [Jekyll](http://jekyllrb.com) site and push it to a Bitbucket repository. CloudCannon synchronizes the files and deploys the site live. **Non-developers** log into CloudCannon and update content inline. All updates are synced between CloudCannon and Bitbucket.

CloudCannon sites are just static files yet advanced layouts, blogging, photo galleries are all possible. Compared to a database backed CMS, there are many advantages:

* Less complexity
* All source files are stored in a Bitbucket repository
* Website load times are faster sites as there’s no backend processing
* Minimal security risk


CloudCannon is also easy for non-developers:

* There's no need to preview content as editing is inline
* No design breaking changes as developers specify which content non-developers can change
* Changes can be tested on a live staging site before production with Git branching and multiple environments


[Netflix](http://cloudcannon.com/customers/netflix/), [Engine Yard](http://cloudcannon.com/customers/engine-yard/), [Xtendly](http://cloudcannon.com/customers/xtendly/) and [Brandon Setter](http://cloudcannon.com/customers/brandon-setter/) use CloudCannon to rapidly deploy websites for marketing teams and clients.

## Introducing the Bitbucket Connect Add-on

Having all your website source files living in Bitbucket gives you complete flexibility to work the way you want.

Working on a overhaul of the website design? Just create a new branch so it doesn't interfere with non-developers updating content.

Want to see what a website looked like six months ago? Just revert back to a commit at that time.

Have a complicated approval process? With pull requests and branching you can make the approval process as complex as you need.

With the CloudCannon Bitbucket Connect Add-on, you can work on websites without leaving Bitbucket. Deploy your static/Jekyll website repository and have non-developers update content in seconds.

To get started, navigate to the [Bitbucket Add-On directory](https://bitbucket.org/account/user/mikeneumegen/addon-directory) and install CloudCannon.

![](/uploads/versions/list---x----1000-625x---.png)

## How it works for Developers

Once you install the add-on, visit one of your repositories and a CloudCannon option will be available in the sidebar. Selecting this option will allow you to create sites from this repository. If you already have CloudCannon sites attached to this repository they will be visible here.​

![](/uploads/versions/bb-source---x----900-563x---.png)

Once you add a site, your files are cloned from your selected branch. In a few short moments you will have a live website to test out. CloudCannon automatically compiles, optimises and deploys your site to a CDN. Any changes you make on that branch will appear on CloudCannon. As a developer you can update the source as usual through git. Alternatively there is a built in code editor. Any changes made on CloudCannon are pushed back to Bitbucket.​

![](/uploads/versions/screen-shot-2015-09-28-at-1.12.43-am---x----900-563x---.png)

## How it works for Non-developers

Non-developer update content inline without the need to understand git or the underlying files. CloudCannon abstracts all of that away with a clean and easy to use interface.​

* Inline content editing shows what the content looks like before hitting save. This is controlled by adding `class="editable"` to any element. CloudCannon uses the semantics of the element to offer more or less controls.
* Front matter/metadata is updated using an intellegently generated settings panel. Anything from simple strings to our advanced image picker can be used by simply changing variable values or names. See [our documentation for more](http://docs.cloudcannon.com/editing/front-matter/).
* Markdown files are updated in a distraction free mode allowing writers to focus.


<style type="text/css">.embed-container { position: relative; padding-bottom: 62.5%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style>

<div class="embed-container"><iframe src="https://www.youtube.com/embed/AgbVpvk6sV8" frameborder="0" autohide="1" controls="0" modestbranding="1" showinfo="0"></iframe></div>

## A simpler way to work

CloudCannon streamlines the entire process of creating websites for non-developers so you can concentrate on creating stunning experiences. Developers can build faster and have more control when creating websites. Non-developers have a beautiful inline editing experience. The CloudCannon Bitbucket Connect Add-on means you can do all of this from with in Bitbucket.

 