---
layout: page
title: The Landing Page
showTitle: false
---

{% case site.jaytch.layout.template.provider %}

{% when 'blog' %}
{% include_relative templates/blog.md %}

{% when 'book' %}
{% include_relative templates/book.md %}

{% when 'humor' %}
{% include_relative templates/humor.md %}

{% when 'project' %}
{% include_relative templates/project.html %}

{% when 'soon' %}
{% include_relative templates/soon.md title="Latest News" %}

{% else %}
{% include_relative templates/blog.md %}

{% endcase %}

&nbsp;