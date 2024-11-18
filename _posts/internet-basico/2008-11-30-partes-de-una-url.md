---
layout: post
title: Partes de una URL
excerpt: Artículo que explica en detalle las partes de una URL, que son protocolo, servidor, puerto, directorio y página.
categories: Internet-Basico
tags: [protocolo,servidor,puerto,url,dominio,subdominio,directorio]
last_modified_at: 2024-01-10
image:
  path: /images/covers/navegador.webp
  thumbnail: /images/covers/navegador.webp
  caption: Fotografía de [Freepik](https://www.freepik.es/autor/freepik)
comments: true
share: true
author: victor_cuervo
---

Es bueno conocer las partes de una [URL](https://www.ayudaenlaweb.com/internet-basico/que-es-la-url/) para ver cómo se conforman. Y es que el manejo de las [URL](https://www.ayudaenlaweb.com/internet-basico/que-es-la-url/) es algo cotidiano cuando nos movemos por Internet, ya que un porcentaje muy alto del tiempo nos lo dedicamos a escribir en el navegador direcciones [URL](https://www.ayudaenlaweb.com/internet-basico/que-es-la-url/). Si todavía no tienes claro que es una URL, te recomiendo que te leas el artículo [¿Qué es una URL?](https://www.ayudaenlaweb.com/internet-basico/que-es-la-url/)


Una vez adquirido este primer conocimiento, vamos a ver las partes de una [URL](https://www.ayudaenlaweb.com/internet-basico/que-es-la-url/).


## Partes de una URL


La estructura general de una URL es la siguiente:


> 💻 protocolo://servidor:puerto/directorio/pagina


Pero, ¿qué significan todas estas partes?


### Protocolo


Es el formato en el que se van a intercambiar los datos nuestro navegador y la máquina de destino. Existen diferentes protocolos, dependiendo del contenido que queramos intercambiar. Así, por ejemplo, el **http** (_hypertext transfer protocol)_ es para la visualización de páginas web, **ftp** (_file transfer protocol_) para transferir fichero, **mail** para transmitir correos electrónicos,…


### **Servidor**


Es el nombre de la máquina destino. Este se compone de tres partes. El nombre del servidor, el dominio y el subdominio.


Ejemplos de nombre de servidor serían: www.yahoo.com, www.google.com, ayudaenlaweb.blogspot.com, www.manualweb.net,…


**Nombre del servidor**


Es el nombre que se le haya dado a la máquina. Suele ser representativo del sitio al que estamos accediendo. Por ejemplo, google, yahoo, flickr, youtube,…


**Dominio de nivel superior**


Serían las ultimas tres letras del nombre del servidor. Son muy reconocibles y las más normales son .com, .net y .org. Aunque hay muchas variantes, .tv, .mil,… incluso asociadas a zonas geográficas .es, .fr, .uk,…


**Subdominio**


Se usa cuando queremos que una misma máquina atienda a varios nombres. Se antepone delante del nombre de la máquina. Por ejemplo, en el ejemplo ayudaenlaweb.blogspot.com tiene como subdominio, “ayudaenlaweb”. Siendo “blogspot” el nombre de la máquina y “.com” el dominio de nivel superior.


Como subdominios suele existir uno por defecto que es el www. Y hay otros que se suelen usar como «estándares» como el ftp,….


### **Puerto**


Es un número y corresponde a un punto específico de entrada a la máquina. Suele ir asociado al protocolo, es decir, al usar un protocolo, por defecto se le asigna un número de puerto. Así el protocolo http suele usar el puerto 80. Es por ello que no se especifica al poner la URL. Incluso, algunos navegadores, al ponerlo en la URL, lo ocultan. Otros puertos son el 21 para el ftp,


### **Directorio**


Esto es igual que los directorios de los sistemas operativos. Es decir, las carpetas de Windows. Nos sirve para organizar las páginas que tenemos en el servidor y su estructura es jerárquica. Podemos anidar unos directorios en otros.


### **Página**


Representa a la página web en concreto y es la que tiene el contenido en cuestión.


## Algunos ejemplos de URLs y sus partes


Vamos a destripar un par de URL:


**http://ayudaenlaweb.blogspot.com:80/2007/09/partes-de-un-email.html**

- **Protocolo:** http
- **Servidor:** ayudaenlaweb.blogspot.com
- **Puerto:** 80
- **Directorio:** /2007/09/
- **Página:** /partes-de-un-email.html

**ftp://ftp.servidorpruebas.org/ficheros/imagenes/**

- **Protocolo:** ftp
- **Servidor:** ftp.servidorpruebas.org
	- **Nombre del servidor:** servidorpruebas
	- **Dominio de nivel superior:** .org
	- **Subdominio:** ftp
- **Puerto:** No aplica
- **Directorio:** /ficheros/imagenes/
- **Página:** No Aplica

Espero que con esto ya puedas analizar cuales son las partes de una URL que te hayan pasado.

