---
title: Publishing Workflows for Jekyll Editors
author: mike
category: Tips
image:
image_featured: false
---


One of the reasons I love using Jekyll is my entire site can live in Git. With Git I can rollback to any previous version of my site, backup my repository to an offsite location and collaborate on my site with other developers. Developers understand and are empowered by Git but what about non-technical editors?

Our main goal at CloudCannon is to make collaboration between developers and non-technical editors seamless. To an extent we've achieved this with editing a Jekyll site; Editors can update HTML, Markdown, front matter, blog posts, collections and data files without knowing anything about Jekyll or HTML. Recently we've been working to achieve the same thing for Git workflows. In this post I'm going over some of the new workflows we support.

## Two way Git syncing

This isn't a new feature but it's worth mentioning as it's at the core of what we're trying to achieve. You can sync a repository from GitHub or Bitbucket to a site on CloudCannon. Developers work locally using their own tools, editors update on CloudCannon, everything stays in sync through a central Git repository.&nbsp;

![two way Git syncing](/images/blog/git-workflows/2-way-syncing.svg)

## Staging sites

You might want to preview new content or changes on a live testing website before pushing it to your production site. In CloudCannon, staging sites are achieved using Git branches.&nbsp;

The set up we typically see is you set up a CloudCannon site which syncs with the master branch on your repository. Editors can update this site without worrying about messing up the live site. They can see their changes on a live site with a testing domain. For the live site you create another CloudCannon site which syncs with a production branch in your repository. Editors wouldn't have access to this site and no changes should be made directly to it. When changes from the staging site need be pushed to production you simply merge master into production.

![two way Git syncing](/images/blog/git-workflows/staging-sites.svg)

## Build options, environments and environment variables

Build options allow you to customise the build differently for each environment. For example, on your staging site you can publish draft posts so editors can preview them on the live site. On your production site you probably want them hidden. To achieve this you can enable the `--drafts` flag in site settings-&gt;build on your staging site.

`--limit-posts` is another useful option for your staging site. If you have a site with thousands of posts your editors will spend minutes waiting for it build after making a change. For the staging site you can limit the number of posts that get published to drastically decrease build time.

Jekyll environments are a way to switch on/off features for particular environments. I've found the most common usecase for this is to only output the Google Analytics snippet in production. You can set the environment using the `JEKYLL_ENV` environment variable. Locally you can do this on the command when you run Jekyll:&nbsp;<br><br>```<br>JEKYLL_ENV=production bundle exec jekyll serve<br>```<br><br>On CloudCannon you can do this in your site settings-&gt;build.

Then in can access the current environment in liquid using `jekyll.environment`. To only output the Google Analytics snippet in production you would do this:

```
{% raw %}
{% if jekyll.environment == "production" %}
  (function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,"script","//www.google-analytics.com/analytics.js","ga");

    ga("create", key , param);
    ga("require", "linkid", "linkid.js");
    ga("send", "pageview");
  </script>
{% endif %}
{% endraw %}
```
## Merging

## Pull requests