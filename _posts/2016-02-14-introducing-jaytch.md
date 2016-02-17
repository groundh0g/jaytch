---
layout: post
title:  "Introducing Jaytch!"
categories: news
tags: jekyll, bootstrap
---

I posted the following to the [plusjade/jekyll-bootstrap](https://github.com/plusjade/jekyll-bootstrap/issues/298) issues after GitHub Pages upgraded to Jekyll 3.x, which broke existing sites. It's a good summary of what Jaytch is.

<hr/>

## Jekyll-bootstrap Rewrite ... v1.0.0

I run all my sites using [jekyll-bootstrap](https://github.com/plusjade/jekyll-bootstrap). I went to make the fixes, and it's easy enough to patch (each site, one by one), but I'm taking a different approach.

**I'm rebuilding everything from the ground up, using the latest [Jekyll](https://jekyllrb.com/), the latest [Bootstrap](http://getbootstrap.com/), and using markup/down that's restricted to [Github Pages dependencies](https://pages.github.com/versions/).**

The end result will be **jekyll-bootstrap v1.0.0**. I ran the idea by @plusjade and he was cool with it.

I'm doing the heavy lifting in my own repo. Codename is "[jaytch](https://github.com/groundh0g/jaytch)" (for "J.H." - Jekyll Helper). If you want to test the bleeding edge, head over to [groundh0g/jaytch](https://github.com/groundh0g/jaytch). I can't promise that I won't break things during the process, but I'll make sure everything is stable before pulling the code into the [plusjade/jekyll-bootstrap](https://github.com/plusjade/jekyll-bootstrap) repo.

### Planned Features

Liquid and Jekyll have come a long way since the first release of jekyll-bootstrap. This is an interesting way for me to explore those changes. Some cool planned features:

- Themes are switched by YAML, not Rake.
- Theme assets can be shared across themes. (One copy of bootstrap assets.)
- [Bootswatch](https://bootswatch.com/) theme support via YAML.
- Function-based themes (see my sites below).
- Multi-blog support? (Useful for multilingual blogs?)
- [Octopress themes](http://octopressthemes.com/themes/1/index.html)? (#283 - this one's iffy.)
- ...

### Fixes / Tweaks

And, of course, I'll try to incorporate the outstanding issues from this repo in the process.

- Use more built-in Jekyll functions (#286, ...)
- Add author pages? (#277)
- Fix collate and sort issues (#276, #258, ...)
- ...

### My Jekyll-Bootstrap Sites

Jekyll and Liquid are pretty powerful tools. Not all sites have to look the same. :smile: 

- [http://groundh0g.github.io/](http://groundh0g.github.io/) (My multi-blog test site. Click the "All" button to see sites.)
- [http://fauxcabulary.org/](http://fauxcabulary.org/) (A word-a-day site.)
- [http://codetopia.com/](http://codetopia.com/) (My base of operations.)
- [http://why2k.org/](http://why2k.org/) (2016 game dev camp scholarship site for girls.)
- [http://growyourknow.com/](http://growyourknow.com/) (Great intentions, limited action.)
- [http://moreoncode.com/](http://moreoncode.com/) (My all-in-one landing page.)
- ... and a few more. I know. It's an addiction.

### Want to Help?

I'd love to use an architecture that supports [git submodules](https://help.github.com/articles/using-submodules-with-pages/), but I'm trying to chase too many shiny objects as it is. If one of you fine folks would like to research and propose an approach for that, please feel free. Otherwise, it'll be a post v1.0.0 feature, and has the risk of being a breaking change.

### Feedback?

I'd love to get your feedback. If you have a pet peeve or desired feature, sound off in the comments below! Thanks.

-- @groundh0g