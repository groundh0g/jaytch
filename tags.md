---
layout: page
title: Tags
showTitle: true
---

This is a list of the tags that are used in the posts. They're listed alphabetically.

{% assign sorted = site.tags | sort %}
{% for tag in sorted %}
{% assign tagName = tag | first | uri_escape | downcase %}
* [{{ tagName | capitalize }}]({{ site.baseurl }}tags#{{ tagName }}-ref) (x{{ tag | last | size }})
{% for post in site.tags[tagName] | sort: "title" %}
  * [{{ post.title }}]({{ site.baseurl }}{{ post.url }})
{% endfor %}
{% endfor %}
