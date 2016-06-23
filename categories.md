---
layout: page
title: Categories
showTitle: true
---

This is a list of the categories that are used in the posts. They're listed alphabetically.

{% assign sorted = site.categories | sort %}
{% for category in sorted %}
{% assign catName = category | first | uri_escape | downcase %}
* [{{ catName | capitalize }}]({{ site.baseurl }}categories#{{ catName }}-ref) (x{{ category | last | size }})
{% for post in site.categories[catName] | sort: "title" %}
  * [{{ post.title }}]({{ site.baseurl }}{{ post.url }})
{% endfor %}
{% endfor %}
