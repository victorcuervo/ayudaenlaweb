---
layout: post
title: ¿Qué es una IP?
excerpt: Una IP es una dirección que identifica dispositivos en Internet, y puede ser pública o privada, estática o dinámica.
categories: Internet-Basico
tags: [ip]
last_modified_at: 2025-03-09
image:
  path: /images/covers/cables.webp
  thumbnail: /images/covers/cables.webp
  caption: Fotografía de [wirestock](https://www.freepik.es/autor/wirestock)
comments: true
share: true
author: victor_cuervo
---

Seguro que cuando utilizas Internet o al leer noticias sobre la red te aparece más de una palabra IP. Pero, **¿qué es una IP?** y sobre todo, **¿para qué sirve una IP?** Y más pensando que soy un usuario normal de la red.


En este artículo vamos a intentar dar un poco más de luz sobre ¿qué es una IP? para que puedas utilizar esta terminología en tu día a día.


### ¿Qué es una IP?


Lo primero que tenemos que hacer es dar una definición sobre qué es una IP o, en su modo extendido, **Internet Protocol**.


Una IP se compone de 4 números separados por puntos en una estructura como la que sigue:


```sql
numero.numero.numero.numero
```


Dónde los números pueden ir desde el 0 hasta el 255. Por lo cual tendremos todas las combinaciones desde:


```sql
0.0.0.0
```


…hasta…


```sql
255.255.255.255
```


Si bien, hay algunas direcciones IP que están reservadas para temas de gestión, sobre todo las que tienen los valores 0 y 255, pero tu IP podría ser cualquier combinación del resto de números. Por ejemplo:


```sql
18.101.217.40
```


### ¿Para qué sirve una IP?


La IP nos va a servir para poder identificar a cada uno de los dispositivos que se conectan a Internet. Desde el ordenador o móvil en el cual estás visualizando este artículo, pasando por cualquier dispositivo de domótica que tengas en casa ya sean las Siri o Alexa, lavadoras o thermomix, hasta los servidores que tienen los servicios que consumimos ([webs](https://www.ayudaenlaweb.com/desarrollo-web/), [correo electrónico](https://www.ayudaenlaweb.com/correo-electronico/), gestores de vídeos,…)


### Tipos de IPs: privacidad y dinamismo


La IPs se pueden clasificar de dos formas. La primera atendiendo a la privacidad. En este caso si hablamos de **IPs por privacidad** tenemos:

- **IPs Públicas**: Son las direcciones IP que identifican de manera única a cada dispositivo conectado directamente a Internet. Estas son asignadas por los **proveedores de servicios de Internet (ISP)**, es decir, el proveedor que te da Internet, y son visibles para cualquier otro dispositivo en la red global.
- **IPs Privadas:** Son direcciones IP utilizadas dentro de redes locales o domésticas para identificar dispositivos internamente. Estas direcciones no son accesibles desde Internet y permiten que múltiples dispositivos en una red local se comuniquen entre sí de manera segura.

Es decir que dentro de tu casa lo más normal es que todos los dispositivos que tengas: móviles, dispositivos inteligentes,… tengan una **IP privada** y cuando estos salgan a Internet todos tengan una única **IP pública**.


Antes de hablar de la otra forma de tipificar las IPs atendiendo a su dinamismo queremos hacer notar una cosa y es que, si has hecho las cuentas, **solo tenemos unos 4.200 millones de IPs disponibles**. Que,a priori, pueden parecer muchas, si bien son escasas para la cantidad de dispositivos que existen en Internet.


Es por eso que nuestras IPs pueden ser estáticas o dinámicas, lo cual responde a la necesidad de gestionar eficientemente el número limitado de direcciones disponibles:

- **IP Estáticas**: Son direcciones que permanecen constantes y no cambian con el tiempo. Se utilizan principalmente en servidores y servicios que necesitan una dirección fija y predecible para su correcto funcionamiento.
- **IP Dinámicas**: Son direcciones que cambian periódicamente y se asignan de forma temporal a los dispositivos. Esta es la opción más común para usuarios domésticos, ya que permite reutilizar y gestionar mejor el pool de direcciones IP disponibles.

Por lo tanto hoy puedes tener una IP Pública asignada y mañana otra.


### **Versiones de IP: IPv4 vs. IPv6**


No queremos entrar en tecnicismos ya que desde [Ayuda en la Web](https://www.ayudaenlaweb.com/) buscamos más el hacer las cosas comprensibles, pero si que queremos contarte que hay dos versiones de protocolo de Internet (IP).


Todo lo que hemos visto hasta ahora es la versión 4 del Internet Protocol (IP).


Como hemos visto IP v4 tiene una limitación de direcciones IP con 4.200 millones de IPs. Para ello aparece IP v6 que tiene un formato más largo y que soporta muchas más direcciones IP.


En concreto son ocho grupos de cuatro caracteres en formato hexadecimal, es decir, base 16:


```sql
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F
```


Por lo cual el formato sería:


```sql
hexadecimal_4.hexadecimal_4.hexadecimal_4.hexadecimal_4.hexadecimal_4.hexadecimal_4.hexadecimal_4.hexadecimal_4
```


Un ejemplo de dirección IP v6 sería:


```sql
2001:0db8:85a3:0000:0000:8a2e:0370:7334
```


Cómo podéis ver es algo bastante más complejo, casi imposible de aprenderse, pero que cubriría muchos más dispositivos. La pregunta es, **¿cuántas IP tendríamos disponibles con IP v6?**


Pues hablamos de **340 sextillones de direcciones IP**. Con lo que tendríamos IPs hasta la eternidad.


### ¿Cuál es mi IP?


Ahora que ya hemos avanzado algo más sobre el conocimiento de ¿qué es una IP? y llegados a este punto, seguro que te surge la pregunta sobre **¿cuál es mi IP?**


Pues podemos mirar cuál es nuestra IP dentro de la configuración del ordenador, si bien hay un modo más sencillo que es acudiendo a un servicio de Internet el cual nos ayude a conocer cuál es mi IP. 


Te dejo algunos de ellos en los que podrás consultar la información sobre tu IP.

- [https://www.cualesmiip.com/](https://www.cualesmiip.com/)
- [https://nordvpn.com/es/what-is-my-ip/](https://nordvpn.com/es/what-is-my-ip/)
- [https://www.cual-es-mi-ip.net/](https://www.cual-es-mi-ip.net/)

Con esto esperamos que hayas aprendido un poco más sobre elementos de Internet Básico y que ahora puedas decir que ya sabes sobre qué es una IP.

