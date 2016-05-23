---
layout: page
title: Statistics
showTitle: false
---

## General Info

* There are {{ site.posts | size }} posts, and {{ site.pages | size }} pages.
* This site uses the '*{{ site.jaytch.page_404 }}*' page for 404 errors.
* This site uses the '*{{ site.jaytch.layout.framework }}*' framework, with the '*{{ site.jaytch.layout.theme }}*' theme.
* This site is currently using the '*{{ site.layouts_dir | split: '/' | last }}*' template.

## Health

* blah.
* Up and running for {% include jaytch/snips/countdown-inline.liquid datetime=site.time class="countup" %} 

{% include jaytch/snips/countdown-script.liquid %}