<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.texto-blanco 5
      h1 Tipologías de prototipado

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-4
          .bloque-texto-g2__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img1.svg')})`}"
          )
          .bloque-texto-g2__texto.p-4
            p.mb-0 El propósito principal de los esquemas de prototipado es poder evidenciar y probar la funcionalidad del videojuego y cómo esta funcionalidad puede involucrar de manera específica las mecánicas o de manera global todos los aspectos de jugabilidad. Incluso, puede apenas relacionarse con aspectos visuales, como los escenarios y su apariencia y el recorrido delimitado para el jugador.

    separador

    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1 Prototipo físico

    .row 
      p En primer lugar, tenemos los prototipos físicos, que tienen como ventaja el poder enfocarse en la jugabilidad, sin concentrarse en la tecnología o el aspecto visual. Son relativamente de bajo costo, teniendo en cuenta que puede recurrirse casi que a cualquier elemento físico para poder utilizarlo como componente del prototipo (juguetes, dados, cartas). Permite hacer ajustes a las mecánicas sin pensar en su programación y obviamente sin utilizar una sola línea de código. Permite evaluar aspectos generales o específicos y solucionarlos de manera pronta. Puede intervenir todo el equipo de trabajo, aportando cada uno desde su área.

    .row.mt-5.justify-content-center.align-items-center 
      .col-6
        p Para la elaboración de un prototipo físico se deben tener en cuenta los siguientes aspectos conceptuales: 

        ol.lista-ol--cuadro.mt-5
          li 
            .lista-ol--cuadro__vineta
              span a
            | #[b.w-b Fundamentos:] se refiere principalmente a la evaluación de las mecánicas de núcleo, y para ello se pueden utilizar cartas, dados, papel, con el fin de replicar las mecánicas básicas del juego.
        hr
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span b
            | #[b.w-b Estructura:] en este aspecto es necesario replicar y evaluar la forma como se avanza en el juego, el poder de ataque y todo aquello que permita comprender la manera como se actúa en el juego.
        hr
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span c
            | #[b.w-b Detalles formales:] en este punto, se escriben las reglas y procesos que dan lugar a la normativa del juego y el cómo debe ser jugado.
        hr
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span d
            | #[b.w-b Refinamiento:] es el objetivo final y fundamental de un prototipo físico, en tanto que permite encontrar errores y determinar qué mecánicas funcionan correctamente y cuáles deben ser modificadas, al igual que mejorar las reglas y procesos generales de jugabilidad.
      .col-6
        figure
          img(src="@/assets/curso/temas/tema5/img2.png", alt="alt")

    .row.mb-3.mt-5
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon1
              img(src='@/assets/curso/temas/tema1/img2.svg', alt='')
          .list__txt
            h3.mb-0.tv.margin-icon Modelo wireframing

      p Tiene por objeto mostrar la funcionalidad del flujo de información y pantallas, enfocándose en las propiedades de la interfaz de usuario y los elementos gráficos del videojuego, en términos de comprensión de su información inherente y las condiciones de interacción con el jugador.

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-5
          p.mb-0 #[b Figura 10] <i>Wireframe</i> de interfaz de videojuego Marvel Trivia

        figure
          img(src="@/assets/curso/temas/tema5/img3.svg", alt="alt")

    .row.mb-3
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon1
              img(src='@/assets/curso/temas/tema1/img2.svg', alt='')
          .list__txt
            h3.mb-0.tv.margin-icon Modelo maqueta

      p El prototipado físico basado en maqueta tiene por objeto evaluar las mecánicas de juego, utilizando elementos físicos comunes, como implementos de papelería, y elementos de juego tradicional, como dados o mazos de cartas. 

      p Por otro lado, este tipo de modelo puede aplicarse para la construcción de elementos estructurales del videojuego, como vehículos, escenarios, o utilería. Incluso, pueden llegar a construirse los escenarios, para, a través de ellos, evaluar con mayor detalle determinadas mecánicas.

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-5
          p.mb-0 #[b Figura 11] Maqueta de prototipo físico Videojuego Ivarok

        figure
          img(src="@/assets/curso/temas/tema5/img4.jpg", alt="alt")

    .row.mb-3
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon1
              img(src='@/assets/curso/temas/tema1/img2.svg', alt='')
          .list__txt
            h3.mb-0.tv.margin-icon Storyboard experiencial      
      p Si bien un guion gráfico no se considera como un prototipo físico en sentido estricto, se trata de utilizar modelos de Role Play unidos a la metodología de guion gráfico, que puedan representar de manera física, visual y dramatizada la experiencia de usuario y, sobre todo, las connotaciones posibles que pueda llegar a tener el jugador al momento de jugar.  

    .row.justify-content-center.mb-5
      .col-lg-8
        figure
          img(src="@/assets/curso/temas/tema5/img5.svg", alt="alt")

    separador

    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2 Prototipo digital

    .row 
      p Los prototipos digitales sugieren la construcción de una versión del videojuego de manera digital, mínimamente programada y codificada, donde se hace énfasis en aspectos relativos a las mecánicas de juego, la estética, la kinestesia y la tecnología. Puede desarrollarse con los mínimos elementos y detalles posibles y apenas con el objetivo de verificar y evaluar la funcionalidad.

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-5
          p.mb-0 #[b Figura 12] Prototipo de videojuego realizado con <i>Game Builder</i> de Google

        figure
          img(src="@/assets/curso/temas/tema5/img6.svg", alt="alt")

      p.mt-5 Los aspectos importantes de prototipado a este nivel son:

    .row.mt-5.justify-content-center.align-items-center 
      .col-6

        ol.lista-ol--cuadro.mt-5
          li 
            .lista-ol--cuadro__vineta
              span a
            | #[b.w-b Prototipar las mecánicas de juegos:] algunas mecánicas pueden ser más fáciles de comprender y de evaluar cuando se analizan y se desarrollan en un sistema digital que en uno físico.
        hr
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span b
            | #[b.w-b Prototipar la estética del juego:] se enfoca fundamentalmente en la apariencia visual y gráfica del videojuego. En este tipo de prototipado, se trata de representar de manera simple las gráficas del juego. Puede ayudar a comprender el funcionamiento del juego y, entre otros, la manipulación y sentido de la interfaz de usuario.
        hr
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span c
            | #[b.w-b Prototipar la kinestesia del juego:] en este punto, se trata de reproducir la forma en la que el juego funciona y determinar cómo es el comportamiento corporal esperado en un jugador, bien sea lo que se refiere a las reacciones o a la interacción con dispositivos de control.
        hr
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span d
            | #[b.w-b Prototipar la tecnología:] en este último aspecto, se trata de evaluar la manera como la kinestesia se desenvuelve de acuerdo con un determinado tipo de tecnología, y cómo favorece o perjudica las mecánicas de juegos. Por ejemplo, simular el juego a través de una pantalla táctil o con joystick.
      .col-6
        figure
          img(src="@/assets/curso/temas/tema5/img7.png", alt="alt")

</template>

<script>
export default {
  name: 'Tema5',
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
