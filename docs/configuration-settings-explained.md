---
layout: page
title: Configuration Settings Explained
---

This is a breakdown of the available settings for Jaytch.

### The **_config.yml** File

All relevant settings are in the `_config.yml` file, under the `jaytch:` section.

~~~
# Jaytch settings
jaytch:
  version : 0.1.0
~~~

The general settings include things like the site's title, tagline, and description.

~~~
  title: Jaytch!             # Your blog or site title.
  tagline: The Jekyll Helper # Your blog or site tagline.
  description: > # An awesome description of your blog or site.
    A rewite of JekyllBootstrap (plusjade/jekyll-bootstrap) that
    is built from the ground up to support Jekyll 3.x and Bootstrap 3.x,
    while targeting the dependencies of GitHub Pages.
~~~

### 404 File Not Found

Jaytch provides several ready-made 404 pages. Their usage is detailed in [Specifying a 404 Page]({{ site.baseurl }}/docs/specifying-a-404-page).

~~~
  page_404: sticky # badge | dog | droids | glass | link | milk | monster | potty | shrug | sticky | tweet | zork
  tweetHash:     "jaytch #blogs #OSS" # don't hash first tag
  tweetShoutOut: "GetJaytch"
~~~

### Searching Posts

Jaytch provides a JavaScript-based search function today. In the future, support may be added to include embedded search services such as Google, Bing, and others.

In general settings in this section accept one of three types of values.

* **true** - always search this field
* **false** - never search this field
* **{number}** - only include this field when there are fewer than {number+1} posts

~~~
  search: # valid values are: true | false | {number}
    title:     true # always search
    tags:      true # always search
    keywords:  true # always search
    excerpt:   2000 # only search when fewer than 2001 posts
    inclPages: true # valid values are: true | false
~~~

### Layout Structure

Jaytch separates the layout into three components:

* Framework - the underlying JavaScript and CSS (ex: Bootstrap)
* Theme - the overridden styles that vary the look and feel of the site
* Template - the basic structure of the site

For more details about this construct, see [Frameworks, Themes, and Templates]({{ site.baseurl }}/docs/layouts-frameworks-themes-and-templates).

~~~
  layout:
    minified: true          # Use *.min.css and *.min.js, when available.
    usecdn: false           # Use CDN (content delivery network), when supported.
    customcss: custom.css   # loaded after theme css files
    customjs:  custom.js    # loaded after theme js files
    framework: bootstrap-v3 # default | bootstrap-v3
    theme: cosmo            # When used by bootstrap-v3, valid values are:
                              #    default | cerulean | cosmo | cyborg |
                              #    darkly | flatly | journal | lumen | paper |
                              #    readable | sandstone | simplex | slate |
                              #    spacelab | superhero | united | yeti
    template:
      provider: project     # When used by bootstrap-v3, valid values are:
                              #    blog       - what 99% of folks will use
                              #    blog365    - a post-a-day site
                              #    book       - an open-source book
                              #    project    - a project or product site
                              #    soon       - a "coming soon" site
    ...
~~~

### Contributors and Author Bios

Jaytch supports associating posts to authors. Authors are described in the `_config.yml` file, and that data is used to populate the Contributors page. See [Using Author Bios]({{ site.baseurl }}/docs/using-author-bios) for more details.

~~~
  authors:
    groundh0g:
      name:       Joseph Hall
      alias:      groundh0g
      image:      images/contributors/groundh0g.png
      role:       Programmer / Writer
      bio: > # brief description goes here
        Joe lives with his wife and three daughters in Newnan, Georgia. Every
        summer, Joe teaches high school students how to write games during an
        intense weeklong course in North Carolina for Landry Academy. In his free
        time, Joe dabbles in sketching, cartooning, and creating 3D models. When
        you see his artistic creations, you’ll understand why he makes his living
        as a programmer.
      email:      hello@codetopia.com
      website:    http://codetopia.com/
      twitter:    groundh0g
      facebook:   groundh0g
      youtube:    groundh0g
      instagram:  groundh0g72
      github:     groundh0g
      deviant:    groundh0g
      linkedin:   groundh0g
      pinterest:  groundh0g
      ...
~~~

### Analytics

Several analytics vendors are supported.

~~~
  analytics : # settings for analytics, set 'provider' to the analytics provider you want to use
    provider : google # Set 'provider' to false to turn analytics off entirely
    gauges :
        site_id : 'SITE ID'
    google :
        tracking_id : 'UA-123-12'
    googleLegacy :
        tracking_id : 'UA-123-12'
    getclicky :
      site_id :
    mixpanel :
        token : '_MIXPANEL_TOKEN_'
    baidu :
        token : '_BAIDU_TOKEN_'
    piwik :
        baseURL : 'myserver.tld/piwik' # Piwik installation address (without protocol)
        idsite : '1'                   # the id of the site on Piwik
~~~

### Comments

Several comment providers are supported.

~~~
  comments : # settings for comments helper, set 'provider' to the comment provider you want to use
    provider : facebook # Set 'provider' to false to turn commenting off entirely
    disqus :
      short_name : myname
    livefyre :
      site_id : 123
    intensedebate :
      account : 123abc
    facebook :
      appid : 123
      num_posts: 5
      width: 580
      colorscheme: light
    duoshuo :
      short_name : myname
~~~