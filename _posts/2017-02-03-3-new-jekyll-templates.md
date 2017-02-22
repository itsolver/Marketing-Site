---
title: 3 New Jekyll Templates
header: 3 New Jekyll Templates
category: Announcements
post_image: /img/blog/lightweight-social-share-buttons/buttons@2x.png
post_image_type: image/png
post_image_width: 1600
post_image_height: 540
author: mike
templates:
  - name: Base
    repository: https://github.com/CloudCannon/base-jekyll-template
    demo_url: http://orange-ape.cloudvent.net/
    description: |-
      [Base](https://github.com/CloudCannon/base-jekyll-template) is a knowledge base template for Jekyll

      * Show off your latest work on the portfolio page.
      * Talk about the latest trends in the industry on the blog.
      * Get new business through the contact form.
    images:
      - image: /img/blog/3-new-jekyll-templates/base.jpeg
      - image: /img/blog/3-new-jekyll-templates/base2.jpeg
      - image: /img/blog/3-new-jekyll-templates/base3.jpeg
      - image: /img/blog/3-new-jekyll-templates/base4.jpeg
      - image: /img/blog/3-new-jekyll-templates/base5.jpeg

  - name: Treat
    repository: https://github.com/CloudCannon/treat-jekyll-template
    demo_url: http://spring-bat.cloudvent.net/
    description: |-
      [Justice](https://github.com/CloudCannon/justice-jekyll-template) is a law firm themed template for Jekyll which can be modified to fit any local business.

      * Show testimonials to add credibility to the business.
      * Your clients post advice on their blog.
      * Inbound leads get in touch on the contact form.
    images:
      - image: /img/blog/3-new-jekyll-templates/treat.jpeg
      - image: /img/blog/3-new-jekyll-templates/treat2.jpeg
      - image: /img/blog/3-new-jekyll-templates/treat3.jpeg
      - image: /img/blog/3-new-jekyll-templates/treat4.jpeg
      - image: /img/blog/3-new-jekyll-templates/treat5.jpeg
---

We've got 3 new Jekyll templates ready for you to use on your next site. These serve as a great starting point which you can tweak for your usecase.

## The Templates

{% for template in page.templates %}
<h3>
	<a href="{{ template.repository }}">{{ template.name }}</a>
	<small><a href="{{ template.demo_url }}" target="_blank">live demo <i class="fa fa-external-link" aria-hidden="true"></i></a></small>
</h3>

{{ template.description | markdownify }}

<ul class="photo-gallery">
	{% for image in template.images %}
		<li><img class="screenshot" src="{{ image.image }}" alt="{{ template.name }} Jekyll template"></li>
	{% endfor %}
</ul>
{% endfor %}