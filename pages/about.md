---
layout: page
title: About
sub_heading: The team and our mission
permalink: /about/
description: Discover the motivations behind creating CloudCannon. Meet the team developing and maintaining the Cloud CMS for Jekyll and static sites.
---

## We love static

We're static fanatics at CloudCannon. We love static sites because they're:

* simple
* easy to scale
* fast
* secure
* resilient
* the entire site can live in Git

We believe the main reason static site generators aren't more popular is because they're difficult for editors to update.

## Our mission

We enable developers to use static site generators by giving editors an initiative editing interface for content on their website.

## Our team

Hailing from way down under in Dunedin, New Zealand. Our team is passionate about doing our part in making static site generators mainstream.  

<ul class="staff">
	{% for team_member in site.staff %}
		<li class="profile">
			<img src="{{ team_member.image_path }}" width="200" height="200" alt="{{ team_member.name }}">
			<h3>
				<a target="_blank" href="https://twitter.com/{{ team_member.twitter_ }}">
					{{ team_member.name }}
				</a>
			</h3>
			<p>{{ team_member.position }}</p>
		</li>
	{% endfor %}
</ul>