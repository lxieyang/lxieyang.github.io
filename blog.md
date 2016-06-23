---
layout: page
title: Blogs
navigation_weight: 5.5
---

<ul>
  {% for post in site.posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
