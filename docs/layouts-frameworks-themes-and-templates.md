---
layout: page
title: "Frameworks, Themes, &amp; Templates"
---

Jaytch tries to maximize reuse by splitting layouts into three components:

1. The **Framework** -- boilerplate HTML, CSS, and JS.
1. The **Theme** -- customized CSS, often specific to a framework.
1. The **Template** -- framework-specific site scaffolding.

![Layout Components]({{ site.baseurl }}/assets/images/jaytch-model.png)

In general, site *templates* are heavily coupled with a specific site *framework*, which can use a variety of site *themes*.

## The Framework

The **Framework** is the underlying boilerplate HTML components, CSS, and JS that's provided for your pages. Examples include [Bootstrap](http://getbootstrap.com/), [Foundation](http://foundation.zurb.com/), and [Skeleton](http://getskeleton.com/).

## The Theme

The **Theme** is a set of specific styles that are applied to the selected site *framework*. Examples include [Bootswatch](https://bootswatch.com/) and [Octopress Themes](http://octopressthemes.com/themes/1/index.html).

## The Template

The **Template** is a new construct for this release. It is, in concept, the kind of site that you're hosting -- a blog, a web app, a landing page for a product / project, ... whatever.