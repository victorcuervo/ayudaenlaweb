---
layout: post
title: Partes de una URL
excerpt: Artículo que explica en detalle las partes de una URL, que son protocolo, servidor, puerto, directorio y página.
categories: Internet-Basico
tags: [protocolo,servidor,puerto,url]
image:
  path: /images/covers/navegadors.webp
  thumbnail: /images/covers/navegadors.webp
  caption: Fotografía de [Freepik](https://www.freepik.es/autor/freepik)
comments: true
share: true
author: victor_cuervo
---

El manejo de las URL es algo cotidiano cuando nos movemos por Internet, ya que un porcentaje muy alto del tiempo nos lo dedicamos a escribir en el navegador direcciones URL.


Yo te recomendaría que si todavía no tienes claro que es una URL, te leas el artículo [¿Qué es una URL?](https://www.ayudaenlaweb.com/internet-basico/que-es-la-url/)


Una vez adquirido este primer conocimiento, vamos a ver que partes conforman las URL.


La estructura general de una URL es la siguiente:


protocolo://servidor:puerto/directorio/pagina


Pero, ¿qué significan todas estas partes?

- **Protocolo**, es el formato en el que se van a intercambiar los datos nuestro navegador y la máquina de destino. Existen diferentes protocolos, dependiendo del contenido que queramos intercambiar. Así, por ejemplo, el http (_hypertext transfer protocol)_ es para la visualización de páginas web, ftp (_file transfer protocol_) para transferir fichero, mail para transmitir correos electrónicos,…
- **Servidor**, es el nombre de la máquina destino. Este se compone de dos partes. El nombre del servidor y el dominio. Ejemplos de nombre de servidor serían: www.yahoo.com, www.google.com, ayudaenlaweb.blogspot.com, www.manualweb.net,…
	- _**Nombre del servidor**_, es el nombre que se le haya dado a la máquina. Suele ser representativo del sitio al que estamos accediendo. Por ejemplo, google, yahoo, flickr, youtube,…
	- _**Dominio de nivel superior**_, serían las ultimas tres letras del nombre del servidor. Son muy reconocibles y las más normales son .com, .net y .org. Aunque hay muchas variantes, .tv, .mil,… incluso asociadas a zonas geográficas .es, .fr, .uk,…
	- _**Subdominio**_, se usa cuando queremos que una misma máquina atienda a varios nombres. Se antepone delante del nombre de la máquina. Por ejemplo, nuestro nombre de servidor tiene subdominio, ayudaenlaweb. Siendo blogspot el nombre de la máquina y .com el dominio de nivel superior.Suele existir uno por defecto que es el www. Y hay otros que se suelen usar como «estándares» como el ftp,….
- **Puerto**, es un número y corresponde a un punto específico de entrada a la máquina. Suele ir asociado al protocolo, es decir, al usar un protocolo, por defecto se le asigna un número de puerto. Así el protocolo http suele usar el puerto 80. Es por ello que no se especifica al poner la URL. Incluso, algunos navegadores, al ponerlo en la URL, lo ocultan. Otros puertos son el 21 para el ftp,…
- **Directorio**, esto es igual que los directorios de los sistemas operativos. Es decir, las carpetas de Windows. Nos sirve para organizar las páginas que tenemos en el servidor y su estructura es jerárquica. Podemos anidar unos directorios en otros.
- **Página**, representa a la página web en concreto y es la que tiene el contenido en cuestión.

Vamos a destripar un par de URL:


**http://ayudaenlaweb.blogspot.com:80/2007/09/partes-de-un-email.html**


_Protocolo:_ http


_Servidor:_ ayudaenlaweb.blogspot.com


_Nombre del servidor:_ blogspot


_Dominio de nivel superior:_ .com


_Subdominio:_ ayudaenlaweb


_Puerto:_ 80


_Directorio:_ /2007/09/


_Página:_ /partes-de-un-email.html


**ftp://ftp.servidorpruebas.org/ficheros/imagenes/**


_Protocolo:_ ftp


_Servidor:_ ftp.servidorpruebas.org


_Nombre del servidor:_ servidorpruebas


_Dominio de nivel superior:_ .org


_Subdominio:_ ftp


_Puerto:_ No aplica


_Directorio:_ /ficheros/imagenes/


_Página:_ No Aplica


¿Quieres que analicemos alguna URL para destriparla y ver de que partes se corresponde? Proponernos alguna en los comentarios.

