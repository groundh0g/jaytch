---
layout: page
title: Contributors
---

<div class="contributors">
{% for author in site.jaytch.contributorBios %}
    {% if author[1].showInList != false %}
    <div class="contributor">
        <img src="{{ site.baseurl }}/assets/{{ author[1].image }}" alt="author[1].name" />
        <div class="meta">
            <hr/>
            <p> <h2>{{ author[1].name | default: "No Name Specified"}} {% if author[1].alias %}<small>[{{ author[1].alias }}]</small>{% endif %}</h2>
                {% if author[1].role %}<strong>{{ author[1].role }}</strong><br/>{% endif %}
                {% if author[1].role %}<a href="{{ author[1].website }}" target="_blank">{{ author[1].website }}</a><br/>{% endif %}
                {% if author[1].role %}<a href="mailto:{{ author[1].email }}">{{ author[1].email }}</a>{% endif %}
            </p>
            <p>{{ author[1].bio | default: "No bio specified."}}</p>
            <p>Social: 
                {% assign hasSocialMediaIcon=false %}
                {% if author[1].twitter %}{% if hasSocialMediaIcon %} | {% endif %}<a target="_blank" href="http://twitter.com/{{ author[1].twitter }}"><span style="white-space:nowrap;"><i class="fa fa-twitter"></i> @{{ author[1].twitter }}</span></a>{% assign hasSocialMediaIcon=true %}{% endif %}
                {% if author[1].github %}{% if hasSocialMediaIcon %} | {% endif %}<a target="_blank" href="http://github.com/{{ author[1].github }}"><span style="white-space:nowrap;"><i class="fa fa-github"></i> @{{ author[1].github }}</span></a>{% assign hasSocialMediaIcon=true %}{% endif %}
                {% if author[1].facebook %}{% if hasSocialMediaIcon %} | {% endif %}<a target="_blank" href="http://facebook.com/{{ author[1].facebook }}"><span style="white-space:nowrap;"><i class="fa fa-facebook"></i> {{ author[1].facebook }}</span></a>{% assign hasSocialMediaIcon=true %}{% endif %}
                {% if author[1].youtube %}{% if hasSocialMediaIcon %} | {% endif %}<a target="_blank" href="http://youtube.com/{{ author[1].youtube }}"><span style="white-space:nowrap;"><i class="fa fa-youtube"></i> {{ author[1].youtube }}</span></a>{% assign hasSocialMediaIcon=true %}{% endif %}
                {% if author[1].deviant %}{% if hasSocialMediaIcon %} | {% endif %}<a target="_blank" href="http://deviantart.com/{{ author[1].deviant }}"><span style="white-space:nowrap;"><i class="fa fa-deviantart"></i> {{ author[1].deviant }}</span></a>{% assign hasSocialMediaIcon=true %}{% endif %}
                {% if author[1].instagram %}{% if hasSocialMediaIcon %} | {% endif %}<a target="_blank" href="http://instagram.com/{{ author[1].instagram }}"><span style="white-space:nowrap;"><i class="fa fa-instagram"></i> {{ author[1].instagram }}</span></a>{% assign hasSocialMediaIcon=true %}{% endif %}
                {% if author[1].googleplus %}{% if hasSocialMediaIcon %} | {% endif %}<a target="_blank" href="http://googleplus.com/{{ author[1].googleplus }}"><span style="white-space:nowrap;"><i class="fa fa-google-plus"></i> {{ author[1].googleplus }}</span></a>{% assign hasSocialMediaIcon=true %}{% endif %}
                {% if author[1].linkedin %}{% if hasSocialMediaIcon %} | {% endif %}<a target="_blank" href="http://linkedin.com/in/{{ author[1].linkedin }}"><span style="white-space:nowrap;"><i class="fa fa-linkedin"></i> {{ author[1].linkedin }}</span></a>{% assign hasSocialMediaIcon=true %}{% endif %}
                {% if author[1].pinterest %}{% if hasSocialMediaIcon %} | {% endif %}<a target="_blank" href="http://pinterest.com/{{ author[1].pinterest }}"><span style="white-space:nowrap;"><i class="fa fa-pinterest"></i> {{ author[1].pinterest }}</span></a>{% assign hasSocialMediaIcon=true %}{% endif %}
                {% unless hasSocialMediaIcon %}No links specified.{% endunless %}
            </p>
        </div>
    </div>
    {% endif %}
{% endfor %}
<br/><br/>

</div>
