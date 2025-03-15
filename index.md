---
layout: home
title: Ayuda en la Web
entries_layout: grid
posts_limit: 12
excerpt: "Ayuda en la Web pretende ayudanos a conocer y poder utilizar de la mejor manera las aplicaciones que existen en Internet."
search: false
image:
  path: /images/portada.webp
  thumbnail: /images/portada.webp
  caption: Fotografía de [freepik](hhttps://www.freepik.es/autor/freepik)
---

Internet es un ecosistema en el que cada día aparecen nuevas aplicaciones. La cantidad de webs, aplicaciones y funcionalidades que podemos encontrar en la red es enorme. Es por ello que desde **Ayuda en la Web** queremos ayudaros a conocer y poder utilizar de la mejor manera esas aplicaciones.

<hr style="border: 1px solid;">

# Editorial
{% assign editorial = site.categories['Editorial'][0] %}

<article class="editorial">
  <header class="editorial-header">
    <a href="{{ editorial.url }}">
      <img src="{{ editorial.image.path }}" class="img-fluid" loading="lazy" width="1000" height="300" alt="{{ editorial.title }}">
      <h2>{{ editorial.title }}</h2>
    </a>
  </header>
  <div class="editorial-author"><i>{{ site.data.authors[editorial.author].name }}</i></div>
  <div class="editorial-summary">  
    {{ editorial.content | strip_html | truncatewords: 50 }} <a href="{{ site.url }}{{ editorial.url }}">Seguir leyendo</a>.  
  </div>
</article>

<hr style="border: 1px solid;">

# Últimos Artículos

