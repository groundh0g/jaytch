---
layout: page
title: Sidebars, Widgets, &amp; Snips
---

There are several widgets and snips that make adding a little something to your posts easier. So, what are widgets and snips?

## Sidebars

Sidebars appear to the left and/or right of your page or post. They're defined in the `_config.yml` for the site. 

~~~
...
layouts_dir: ./_layouts/project
      ...
      project:
        title: My Project
        tagline: If it were any better, you'd need a permit!
        ...
>>      sidebar_left:
>>        sidebars: false
>>      sidebar_right:
>>        sidebars: ["tagcloud", "quote"]
>>        columns:  3
        ...
>>  sidebars:
>>    tagcloud:
>>      title:   "Tag Cloud"
>>      maxTags: 20
>>    quote:
>>      type: quote
>>      quote: Women are like teabags. We don't know our true strength until we are in hot water!
      ...
~~~

Multiple definitions may exist for the same type. So, you can add a couple of quotes, for example. 
The following text describes the available sidebar widgets.

### [Author]

FIXME: Content needed.

### Calendar

The calendar sidebar widget presents a list of clickable dates that visitors can use to navigate to your posts.

There are many options that you can specify for the widget.

>|arg|||default|
|-----------|
|headBGColor|||#000
|headFGColor|||#fff
|grayDateBGColor|||#eee
|grayDateFGColor|||#888
|postDateBGColor|||#efe
|width|||100%
|float|||*none*
|date|||*last post date*

~~~
    sidebars:
>>    calendar:
>>      date: # date of most recent post
>>      width: 100%
      ...
~~~

### Countdown

Generate buzz for your project-to-be with a countdown timer. The following values in `_config.yml` show how it may be used.

~~~
    sidebars:
>>    countdown:
>>      title:    Site Age
>>      class:    countup
>>      mode:     inline # (or block)
>>      datetime: # page.date
      ...
~~~


### Facebook

There's a sidebar widget for Facebook. The following values in `_config.yml` show how it may be used.

~~~
    sidebars:
>>    facebook: #https://developers.facebook.com/docs/plugins/page-plugin/
>>      page:   Fauxcabulary
>>      title:  Fauxcabulary.org
      ...
~~~

You can include more than one Facebook widget. Just ensure each has a unique name.

~~~
    sidebars:
      facebook: #https://developers.facebook.com/docs/plugins/page-plugin/
        page:   Fauxcabulary
        title:  Fauxcabulary.org
>>    facebook2:
>>      type:  facebook
>>      page:  Codetopia
      ...
~~~

### Google+

There's a sidebar widget for Google+. The following values in `_config.yml` show how it may be used.

~~~
    sidebars:
>>    googleplus: # https://www.kycosoftware.com/code/googleplus-feed-widget-2
>>      profileId: 113415901204258128457 # +JosephHall_groundh0g
      ...
~~~

You can include more than one Google+ widget. Just ensure each has a unique name.

~~~
    sidebars:
      googleplus: # https://www.kycosoftware.com/code/googleplus-feed-widget-2
        profileId: 113415901204258128457 # +JosephHall_groundh0g
>>    googleplus2: # https://www.kycosoftware.com/code/googleplus-feed-widget-2
>>      profileId: 000000000000000000000 # +SomeOne_else
      ...
~~~

### [Meta]

FIXME: Content needed.

### [Post Summary]

FIXME: Content needed.

### Quote

You can define as many quotes for the sidebar as you like. If you omit the quote text for a sidebar quote, it is 
populated from the `page.quote` variable, defined on the page. So, the following settings in `_config.yml` would
show two quotes in the right sidebar -- the first is static, and is shown on every post, where the other is pulled 
from the header variables for the post.

~~~
      project:
        ...
        sidebar_right:
>>        sidebars: ["tagcloud", "quote", "quote2"]
        ...
    sidebars:
      tagcloud:
        title:   "Tag Cloud"
        maxTags: 20
>>    quote:
>>      type: quote
>>      quote: Women are like teabags. We don't know our true strength until we are in hot water!
>>    quote2:
>>      type: quote
>>      quote: # use the page's quote
      ...
~~~

Quotes may also be specified in the page header, but only one quote can be added in this way.

~~~
---
layout: post
title: My Awesome Post
quote: All you need in this life is ignorance and confidence, and then success is sure.
showTitle: true
---

This is the best post ever written. You won't be able to stop reading it once you've started....
~~~

Quotes can include an optional attribution.

~~~
quote: All you need in this life is ignorance and confidence, and then success is sure. -- Mark Twain
~~~

And quotes support HTML, so you can link to the author or cite the source of the quote.

~~~
quote: All we need is love. -- <a href="http://google.com/">The Beatles</a>
~~~

### Tag Cloud

I'm not a huge fan of them, but I know many folks are partial to tag clouds. Well, there's a sidebar widget for that!
The following values in the `_config.yml` could be used to render a tag cloud in the sidebar.

~~~
    sidebars:
>>    tagcloud:
>>      title:   "Tag Cloud"
>>      maxTags: 20
      ...
~~~

### Twitter

There's a sidebar widget for Twitter. The following values in `_config.yml` show how it may be used.

~~~
    sidebars:
      tagcloud:
        title:   "Tag Cloud"
        maxTags: 20
>>    twitter:    # https://twitter.com/settings/widgets/new
>>      name:     GetJaytch
>>      widgetId: 709112005668503552
      ...
~~~

You can include more than one Twitter widget. Just ensure each has a unique name.

~~~
    ...
        sidebar_right:
>>        sidebars: ["twitter", "twitter2"]
        ...
    sidebars:
      twitter:    # https://twitter.com/settings/widgets/new
        name:     GetJaytch
        widgetId: 709112005668503552
>>    twitter2:   # https://twitter.com/settings/widgets/new
>>      type:     twitter
>>      name:     groundh0g
>>      widgetId: 000000000000000000
      ...
~~~




## Widgets

Interchangeable snips - inline or sidebar? eg. Calendar, Countdown, Quote, ...

## Snips

### Calendar

To include a post calendar within your post or page, use the `calendar.liquid` snip. You can include as many 
calendars in your text as you like.

~~~
{{ "{% include" }} jaytch/snips/calendar.liquid width="50%" float="right" %}

This is some text that will appear alongside the calendar. ...
~~~

---

{% include jaytch/snips/calendar.liquid width="50%" %}

---

There are several options that you can specify for the snip. 
See the sidebar description for a complete list.

### Countdown

To include a countdown in your page or post, use the `countdown-banner.liquid` or `countdown-inline.liquid` snip. 
The only difference between the two is that banner uses div tags, and inline uses span tags. 
(*FIXME: Really? Use CSS to make tag inline or block!*)

~~~
Live for {{ "{% include" }} jaytch/snips/countdown.liquid datetime=site.time class="countup" mode="inline" %}.
~~~

---

This site has been up for {% include jaytch/snips/countdown.liquid datetime=site.time class="countup" mode="inline" %}.

---

The countdown widget supports two modes - countdown and countup.

### [Meta]

FIXME: Content needed.

### [Post Summary]

FIXME: Content needed.

### Quote

To include a quote within your post or page, use the `quote.liquid` snip. You can include as many quotes in your 
text as you like.

~~~
{{ "{% include" }} jaytch/snips/quote.liquid quote="This is only a test. -- Joe Hall" width="50%" %}

This is some text that will appear alongside the quote. Blah. Blah. Blah. ...
~~~

---

{% include jaytch/snips/quote.liquid width="50%" quote="When you are courting a nice girl an hour seems like a second. When you sit on a red-hot cinder a second seems like an hour. That's relativity. -- Albert Einstein" %}

---

If you omit the quote in the snip, the value in `page.quote` is used. If you omit the width, the quote will fill the 
entire width of the page. If you want to float the quote to the left (rather than the right, which is the default),
simply specify `float="left"` when including the snip.