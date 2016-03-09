{% if include.title %}
<h2 style="font-weight:bold;">{{ include.title }}</h2>
{% endif %}

{% include jaytch/snips/post-summary.liquid limit=25 showArchiveLink=true archiveUrl="/archive.html" %}
