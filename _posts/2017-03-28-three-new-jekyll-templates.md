---
title: Three New Jekyll Templates
header: Three New Jekyll Templates
category: Announcements
featured_image: /images/blog/3-new-jekyll-templates/base/1.jpeg
post_image: /images/blog/3-new-jekyll-templates/base/1.jpeg
post_image_type: image/png
post_image_width: 1600
post_image_height: 1000
author: mike
---

It's great to see the different ways people are using the [Jekyll templates we launched late last year](/announcements/2016/12/05/free-jekyll-templates/). To continue this success, we've put together three new templates ready for your next site. These are licensed under MIT to feel free to use them on client/commercial projects.


## [Base](https://learn.cloudcannon.com/templates/base/)

![Base template](/images/blog/3-new-jekyll-templates/base/1.jpeg)

## [Treat](https://learn.cloudcannon.com/templates/treat/)

![Treat template](/images/blog/3-new-jekyll-templates/treat/1.jpeg)

## [Fur](https://learn.cloudcannon.com/templates/fur/)

![Fur template](/images/blog/3-new-jekyll-templates/fur/1.jpeg)

## Usage

To use the new templates in CloudCannon, create a new site and select the **Choose a Template** option.

![Choose a jekyll template](/images/blog/7-free-jekyll-templates/choose.jpeg){:class="screenshot"}

From here you can browse through the templates and select your favourite.

![List of jekyll templates](/images/blog/7-free-jekyll-templates/templates.jpeg){:class="screenshot"}

These templates also work without CloudCannon, just fork the template repository on GitHub or download a zip.

## What's Next?

We have more Jekyll templates in the works. If there's a use case a Jekyll template would help you solve let us know in the comments below.

<script src="/js/lightslider.js"></script>

<script type="text/javascript">
	$(document).ready(function () {
		$(".photo-gallery img").each(function() {
			var $this = $(this);
			var src = $this.attr('src');
			$this.parent().attr('data-thumb', src);
			$this.parent().attr('data-src', src);
		});

		$(".photo-gallery").lightSlider({
			gallery: true,
			item: 1,
			loop: true,
			thumbItem: 5,
			thumbMargin: 20,
			slideMargin: 0,
			enableDrag: false,
			currentPagerPosition: "left",
		});
	});
</script>
