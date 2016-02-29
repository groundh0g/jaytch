---
layout: page
title: The Landing Page
showTitle: false
---

{% case site.jaytch.layout.template.provider %}

{% when 'blog' %}
{% include boilerplate/blog.md %}

{% when 'blog365' %}
{% include boilerplate/blog365.md %}

{% when 'book' %}
{% include boilerplate/book.md %}

{% when 'project' %}
{% include boilerplate/project.md %}

{% when 'soon' %}
{% include boilerplate/soon.md title="Latest News" %}

{% else %}
{% include boilerplate/blog.md %}

{% endcase %}