<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Algoritmia y lógica de programación

    .row.mb-5
      p En el presente capítulo, se observarán las nociones fundamentales que tienen que ver con la programación orientada a objetos aplicada en videojuegos y, en específico, al motor de videojuegos Unity 3D.

    separador

    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Descripción de la API de Unity (C-Sharp)

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-4
          .bloque-texto-g1__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img1.svg')})`}"
          )
          .bloque-texto-g1__texto.p-4
            p.mb-0 El concepto API significa interfaz de programación de aplicaciones y reúne un conjunto de protocolos que permiten la interacción entre dos componentes de software independientes. Para la  documentación que contiene descripciones detalladas de la API de secuencias de comandos que proporciona #[i Unity], es necesario estar acostumbrado o con cierto nivel de conocimiento en programación con #[i Unity.]

    .row.mb-5
      p La referencia de secuencias de comandos se organiza de acuerdo con las clases disponibles para las secuencias de comandos que se describen, junto con sus funciones, métodos, y demás elementos de sintaxis necesarios para programar correctamente.

    .row.mb-5
      .cajon.color-primario.p-4.mb-5
        p.mb-0 Las API se agrupan por categorías, dependiendo del tipo de elemento estructural de programación, y se pueden seleccionar en el menú de la izquierda. En términos de programación, la sección de #[i UnityEngine] será el principal recurso de búsqueda.

    .row.mb-5
      p #[b Soporte de entorno de desarrollo integrado (IDE):] El entorno de desarrollo integrado (IDE) es una pieza de software de computadora que proporciona herramientas e instalaciones para facilitar el desarrollo de otras piezas de software. Unity admite los siguientes IDE:

    .row.justify-content-center.mb-5
      .col-lg-6.mb-5
        .tarjeta-numerada.color-acento-contenido.p-lg-5.p-4
          .tarjeta-numerada__numero
            .h2.texto-blanco 1
          h4.mt-5.mt-lg-0 Visual Studio (IDE predeterminado en Windows y macOS)          
          p Visual Studio se instala de forma predeterminada cuando se instala Unity en Windows y MacOS. En Windows, puede optar por excluirlo cuando seleccione qué componentes descargar e instalar. Visual Studio está configurado como Editor de scripts externos en Preferencias (#[i Unity > Preferences > External Tools > External Script Editor]). Con esta opción habilitada, Unity inicia Visual Studio y lo usa como el editor predeterminado para todos los archivos de secuencia de comandos.
          p En MacOS, Unity incluye Visual Studio para sistema operativo Mac como el IDE de C#. Visual Studio Tools para Unity (VSTU), proporciona la integración de Unity para Visual Studio para Mac (VS4M).

      .col-lg-6.mb-5
        .tarjeta-numerada.color-primario.p-lg-5.p-4
          .tarjeta-numerada__numero
            .h2 2
          h4.mt-5.mt-lg-0 Visual Studio Code (Windows, macOS, Linux):
          p.mb-0 En Unity, la edición de archivos de programación se hace en #[i Visual Studio Code] (VS Code). Para abrir scripts en VS Code, selecciónelo como Editor de script externo en las Preferencias del editor (menú: Unity> Preferencias> Herramientas externas> Editor de script externo). Para obtener información sobre el uso de VS Code con Unity, consulte la documentación de Visual Studio sobre Desarrollo de Unity con VS Code.

    .row.justify-content-center.my-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-5
          p.mb-0 #[b Figura 3.] Ventana de referencia de script

        figure
          img(src="@/assets/curso/temas/tema2/img2.svg", alt="alt")

    separador

    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Estructura y sintaxis básica de C-Sharp

    .row.mb-5
      p Las líneas de instrucción de los archivos de programación les definen a los GameObjects cómo comportarse.  En este sentido, la programación en el motor de videojuegos difiere de los métodos de programación pura en que en el motor se definen archivos de programación que serán interpretados y compilados para la plataforma específica de publicación.

    .row.justify-content-center.mb-5
      .col-lg-11
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-4
          .bloque-texto-g1__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img3.svg')})`}"
          )
          .bloque-texto-g1__texto.p-4
            p Una cualidad muy importante del motor es que permite realizar multitud de tareas de manera simultánea y es el desarrollador el encargado de establecer todas estas relaciones funcionales, además de la participación de cada uno de los miembros del equipo de desarrollo, permitiendo utilizar la enorme versatilidad de Unity.
            p.mb-0 Es importante que en el desarrollo del videojuego se logren optimizar todas las secuencias de instrucción de código para que pueda correr de manera fluida, a la mayor velocidad posible, y realizando todas las tareas que le han sido programadas.

    .row.mb-5
      .cajon.color-primario.p-4
        p.mb-0 Un archivo #[i script] debe estar necesariamente asignado a un #[i GameObject] en la escena para que Unity pueda utilizarlo en escena, es decir, invocarlo. Los archivos de programación deben estar escritos en un lenguaje comprensible por el motor.

    .row.mb-5
      p El lenguaje de programación que utiliza Unity se llama C# o C Sharp, que es un lenguaje orientado a objetos. Como cualquier lenguaje de programación, tiene una estructura de sintaxis, es decir, una manera de escribirse y con unas características semánticas específicas. A continuación se podrá observar un ejemplo de estructura de código en C#.

    .row.justify-content-center.mb-5
      .col-lg-6
        figure
          img(src="@/assets/curso/temas/tema2/img4.svg", alt="alt")      

    .row.justify-content-center.mb-5
      .col-lg-8























































</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
