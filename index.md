---
layout: home
title: Ayuda en la Web
entries_layout: grid
posts_limit: 9
excerpt: "Análisis de tecnologías por Arquitectos IT"
search: false
image:
  path: /images/portada.jpeg
  thumbnail: /images/covers/navegador.jpeg
  caption: Fotografía de [freepik](hhttps://www.freepik.es/autor/freepik)
---

La cantidad de webs, aplicaciones y funcionalidades que nos ofrece la web es enorme. Desde Ayuda en la Web


La época de Internet ha permitido un gran crecimiento en el número de aplicaciones que tenemos disponibles. Ayuda en la Web quiere ayudarte con las aplicaciones.

Cada día aparecen nuevas aplicaciones en diferentes ámbitos, ya sean redes sociales, para gestionar música o vídeos, herramientas para la gestión del tiempo, suites ofimáticas,…

Además con la incorporación de los múltiples dispositivos podemos contar con estas aplicaciones en móviles y tablets. Multiplicando, si aún cabe más, la oferta a la que podemos acceder.

Desde Ayuda en la Web intentamos explicarte de una forma sencilla para qué sirven las aplicaciones (ya sean web, para móvil o dispositivo tablet) más famosas y como podemos operar con ellas, explicando las acciones y conceptos básicos en estas aplicaciones. 

De esta forma ya nunca más podrás decir que no envías tweets en Twitter, o resolver cómo ver las fotos de tus amigos en el Facebook o subir un vídeo a Youtube… es hora de empezar a aprender.



<hr style="border: 1px solid;">

# Editorial
{% assign editorial = site.categories['editorial'][0] %}

<article class="editorial">
  <header class="editorial-header">
    <a href="{{ site.url }}{{ editorial.url }}">
      <img src="{{ site.url }}{{ editorial.image.path }}" class="img-fluid">        
      <h2>{{ editorial.title }} </h2>
    </a>
  </header>
  <div class="editorial-author"><i>{{ site.data.authors[editorial.author].name }}</i></div>
  <div class="editorial-summary">  
    {{ editorial.content | strip_html | truncatewords: 50 }} <a href="{{ site.url }}{{ editorial.url }}">Seguir leyendo</a>.  
  </div>
</article>

<hr style="border: 1px solid;">

# Últimos Artículos
