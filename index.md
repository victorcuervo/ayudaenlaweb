---
layout: home
title: Ayuda en la Web
entries_layout: grid
posts_limit: 9
excerpt: "Análisis de tecnologías por Arquitectos IT"
search: false
image:
  path: /images/portada.webp
  thumbnail: /images/portada.webp
  caption: Fotografía de [freepik](hhttps://www.freepik.es/autor/freepik)
---



Internet es un ecosistema en el que cada día aparecen nuevas aplicaciones. La cantidad de webs, aplicaciones y funcionalidades que podemos encontrar en la red es enorme. Es por ello que desde **Ayuda en la Web** queremos ayudaros a conocer y poder utilizar de la mejor manera esas aplicaciones.

Las nuevas aplicaciones viven en diferentes ámbitos, ya sean [redes sociales][rrss], herramientas de creación de contenido, plataformas de colaboración, aplicaciones para gestionar [música][musica], [vídeos][videos] o [fotografía][fotografia] herramientas para la gestión del tiempo, suites ofimáticas,… Estas aplicaciones las encontramos para todos los dispositivos ya sean en la web, móviles o tablets.

Además la generalización de la adopción de la [Inteligencia Artificial][ia] hace que las aplicaciones nos proporcionen muchas más funcionalidades y que aparezcan múltiples aplicaciones que nos ayuden en el día a día.

De esta forma ya nunca más podrás decir que no sabes cómo funciona la última red social de moda, que no encuentras información sobre algún tema o que no sabes como utilizar la [Inteligencia Artificial][ia] en tu día a día.

<hr style="border: 1px solid;">

# Editorial
{% assign editorial = site.categories['Editorial'][0] %}

<article class="editorial">
  <header class="editorial-header">
    <a href="{{ editorial.url }}">
      <img src="{{ editorial.image.path }}" class="img-fluid">        
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


[rrss]: /redes-sociales/
[musica]: /musica/
[fotografia]: /fotografia/
[videos]: /gestores-videos/
[ia]: /inteligencia-artificial/