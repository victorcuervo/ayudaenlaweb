---
layout: post
title: Imágenes estáticas de Google Maps
excerpt: Cómo proceder para poder incluir imágenes estáticas de Google Maps en tu web.
categories: Mapas
tags: [google maps,google]
image:
  path: /images/covers/google-maps.webp
  thumbnail: /images/covers/google-maps.webp
  caption: Fotografía de [Freepik](https://www.freepik.es/autor/freepik)
comments: true
share: true
author: victor_cuervo
---

[Google Maps](https://www.ayudaenlaweb.com/mapas/que-es-google-maps/) tiene un API de extensiones que nos permite capturar una imagen estática de un determinado mapa. Este API se conoce como Google Static Maps API.


La imagen estática no deja de ser una [URL](https://www.ayudaenlaweb.com/internet-basico/que-es-la-url/). Así que nos bastará con saber como está formada dicha [URL](https://www.ayudaenlaweb.com/internet-basico/que-es-la-url/).


La forma principal de la [URL](https://www.ayudaenlaweb.com/internet-basico/que-es-la-url/) es:


```text
http://maps.google.com/maps/api/staticmap
```


Los parámetros principales son:

- **center**, texto de búsqueda del mapa.
- **zoom**, nivel de zoom a aplicar sobre el mapa. Entre 0 y 21.
- **size**, tamaño de la imagen.
- **maptype**, tipo de mapa que queremos ver. Los valores serán: roadmap, satellite, hybrid y terrain.
- **sensor**, indica si se va a utilizar el sensor para identificar la posición del usuario.

Puedes encontrar mucha más [información sobre los parámetros](http://code.google.com/intl/es-ES/apis/maps/documentation/staticmaps/).


La [URL](https://www.ayudaenlaweb.com/internet-basico/que-es-la-url/) de [Google Maps](https://www.ayudaenlaweb.com/mapas/que-es-google-maps/) nos quedará de la siguiente forma:


```text
http://maps.google.com/maps/api/staticmap?center=Avila,Spain&zoom=15&size=512x512&maptype=roadmap&sensor=false
```


Así podremos utilizar la [URL](https://www.ayudaenlaweb.com/internet-basico/que-es-la-url/) junto a una etiqueta [IMG](http://w3api.com/wiki/HTML:IMG) para ponerla en tu página web:


```html
<img src="http://maps.google.com/maps/api/staticmap?center=Avila,Spain&zoom=15&size=512x512&maptype=roadmap&sensor=false"/>
```


Así obtendremos el siguiente resultado con nuestra imagen estática de [Google Maps](https://www.ayudaenlaweb.com/mapas/que-es-google-maps/):


![](http://maps.google.com/maps/api/staticmap?center=Avila,Spain&zoom=15&size=512x512&maptype=roadmap&sensor=false)


Avila

