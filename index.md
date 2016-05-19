---
layout: home
title: The Landing Page
showTitle: false
---

{% comment %}
    This is the generic landing page (home page) for all layouts. The home page content
    can be customized in the layout-specific files, found in "./templates".
    
    To change to a different layout, edit the "_config.yml". Set "layouts_dir" to the
    layout you'd like to use. For example:
    
        layouts_dir: ./_layouts/blog
    
    If you're using the "blog" layout, then you'd edit the home page by editing the 
    content within "./templates/blog.md".
{% endcomment %}

{% assign layout_category = site.layouts_dir | split: '/' | last %}
{% include_relative templates/{{ layout_category }}.md %}

&nbsp;