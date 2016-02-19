---
layout: page
title: Using Author Bios
---

Something that always seems to be missing in jekyll themes is the author bios page. I guess folks just assume that we're a lonely lot, writing blog posts on our own, in our parent's basement, eating a microwaved chimichanga, and polishing our Marvel comic book collection protective sleeves. (No offense to you DC fans out there!)

Well, Jaytch is here to put an end to that nonsense. GitHub is collaborative. Git is collaborative. And, doggone it, people like us!

## The Result

What? You'd like to include photos, bios, emails, websites, social media links, and killer haxx0r aliases? We've got you covered!

> ![Da' Crew!]({{ site.baseurl }}/docs/images/using-author-bios.png)

## The Configuration

Everything is driven by YAML. Here's an example from the Jaytch site, which was used to render the earlier image.

      authors: # the "admin" author alias is reserved, used as default when no author is specified
        groundh0g:
          name:       Joseph Hall
          alias:      groundh0g
          image:      images/groundh0g.png
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
          googleplus: groundh0g
          github:     groundh0g
          deviant:    groundh0g
          linkedin:   groundh0g
        plusjade:
          name:       Jade Dominguez
          alias:      plusjade
          image:      images/plusjade.jpg
          role:       Programmer
          bio: > # brief description goes here
            I owe everything I know to the Open Source community so all my work is
            Open and Free. My most popular project and claim to baby fame is
            JekyllBootstrap which ironically has the least amount of actual code than
            any of my other projects; a testament to the importance of being user and
            usability driven.
          email:      plusjade@gmail.com
          website:    http://plusjade.com/
          twitter:    plusjade
          github:     plusjade

It seems like a lot, but there's a lot to share with your throngs of adoring fans. 