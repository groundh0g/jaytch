---
layout: page
title: Statistics
quote: All you need in this life is ignorance and confidence, and then success is sure. -- <a href="http://www.brainyquote.com/quotes/authors/m/mark_twain.html">Mark Twain</a>
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


---

{% include jaytch/snips/calendar.liquid %}

---

{% include jaytch/snips/quote.liquid quote="This is a test. This is only a test. No, really. This is just a test. Pay attention! -- Joe Hall" width="50%" %}
{% include jaytch/snips/quote.liquid %}

{% include jaytch/snips/countdown-script.liquid %}