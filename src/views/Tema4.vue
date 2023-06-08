<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.texto-blanco 4
      h1 Diseño y construcción de prototipo físico de videojuegos

    separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Modelos de mecánica de videojuegos

    .row.mb-5
      p(data-aos="fade-left") A continuación, se describirán algunos modelos de mecánicas de videojuego, donde se determinan diferentes elementos y, por consiguiente, conceptualmente diferentes formas de allanar grupos o estructuras de mecánica de juegos. Sin embargo, ofrecen una manera amplia de analizar y determinar los aspectos de jugabilidad del videojuego a diseñar.

    .row.mb-5(data-aos="fade-right")
      ol.lista-ol--cuadro
        li 
          .lista-ol--cuadro__vineta
            span a
          | #[b.w-b Modelo de Jesse Schell]

    .row.mb-5
      p(data-aos="fade-left") En este modelo se especifican los siguientes elementos o tipologías de mecánicas básicas:

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta--morada.p-3.mb-4
          .row
            .col-6.col-lg-1
              figure
                img(src="@/assets/curso/temas/tema4/img1.svg", alt="alt").tm2-img17
            
            .col-lg-11(data-aos="fade-left")
              p.mb-0 #[b El espacio del juego:] comprende fundamentalmente el entorno espacial (arquitectura espacios naturales) donde se desarrolló el videojuego y donde tiene lugar toda la serie de eventos acciones en que el personaje interactúa.

        .tarjeta--morada.p-3.mb-4
          .row
            .col-6.col-lg-1.mt-3
              figure
                img(src="@/assets/curso/temas/tema4/img2.svg", alt="alt").tm2-img17
            
            .col-lg-11(data-aos="fade-left")
              p.mb-0.mt-2 #[b Los objetos que hay en el videojuego:] en este esquema, se trata precisamente de todos los objetos con los cuales pueden interactuar los personajes del juego. En esencia, se trata de elementos que pueden determinar el triunfo o fracaso del jugador, que pueden facilitar el logro de objetivos o metas, o constituirse en obstáculos para la consecución de objetivos.

        .tarjeta--morada.p-3.mb-4
          .row
            .col-6.col-lg-1.mt-1
              figure
                img(src="@/assets/curso/temas/tema4/img3.svg", alt="alt").tm2-img17
            
            .col-lg-11(data-aos="fade-left")
              p.mb-0.mt-2 #[b Las acciones del jugador:] en este caso se trata de las mecánicas de núcleo, es decir, lo que en esencia debe realizar el jugador para ganar el juego. Generalmente, pueden describirse a manera de verbos como caminar, correr, saltar.

        .tarjeta--morada.p-3.mb-4
          .row
            .col-6.col-lg-1.mt-4
              figure
                img(src="@/assets/curso/temas/tema4/img4.svg", alt="alt").tm2-img17
            
            .col-lg-11(data-aos="fade-left")
              p.mb-0.mt-2 #[b Las habilidades del jugador:] si bien la habilidad de un jugador no está determinada ni forma parte de manera estricta con el proceso de diseño del videojuego, sí puede establecerse, a partir de determinados esquemas de programación, como una medición del rendimiento del jugador en el juego, o desde una perspectiva más simple, definir pautas de progresión en la dificultad del juego en la medida en que el jugador demuestra cierto nivel de aprendizaje y habilidad.

        .tarjeta--morada.p-3.mb-4
          .row
            .col-6.col-lg-1
              figure
                img(src="@/assets/curso/temas/tema4/img5.svg", alt="alt").tm2-img17
            
            .col-lg-11(data-aos="fade-left")
              p.mb-0.mt-4 #[b El chance:] entendido como elementos, circunstancias que pueden facilitar el logro de determinado reto.

    .row.mb-5(data-aos="fade-right")
      ol.lista-ol--cuadro
        li 
          .lista-ol--cuadro__vineta
            span b
          | #[b.w-b Modelo de David Parlett]

    .row.mb-5(data-aos="fade-left")
      p En este modelo, se especifican los siguientes elementos o tipologías de mecánicas básicas:

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta--morada.p-3.mb-4
          .row
            .col-6.col-lg-1
              figure
                img(src="@/assets/curso/temas/tema4/img1.svg", alt="alt").tm2-img17
            
            .col-lg-11(data-aos="fade-left")
              p.mb-0.mt-2 #[b Reglas operacionales:] comprende las reglas que determinan la manera como opera y funciona de manera esencial del videojuego.

        .tarjeta--morada.p-3.mb-4
          .row
            .col-6.col-lg-1.mt-2
              figure
                img(src="@/assets/curso/temas/tema4/img2.svg", alt="alt").tm2-img17
            
            .col-lg-11(data-aos="fade-left")
              p.mb-0.mt-2 #[b Reglas de comportamiento:] especifican la manera como ha de comportarse el jugador, aplicable en el caso de algunos juegos de rol o en su representación el personaje de acuerdo a los objetivos del juego y el rol actancial del personaje.

        .tarjeta--morada.p-3.mb-4
          .row
            .col-6.col-lg-1
              figure
                img(src="@/assets/curso/temas/tema4/img3.svg", alt="alt").tm2-img17
            
            .col-lg-11(data-aos="fade-left")
              p.mb-0.mt-2 #[b Reglas escritas:] se refiere a las reglas que pueden estar definidas de manera arbitraria y que pueden encontrarse en manuales de usuario del videojuego.

        .tarjeta--morada.p-3.mb-4
          .row
            .col-6.col-lg-1
              figure
                img(src="@/assets/curso/temas/tema4/img4.svg", alt="alt").tm2-img17
            
            .col-lg-11(data-aos="fade-left")
              p.mb-0.mt-2 #[b Reglas oficiales:] puede entenderse como regla oficial aquella que está integrada directamente en el videojuego y que ha sido aceptada por la comunidad de jugadores.

        .tarjeta--morada.p-3.mb-4
          .row
            .col-6.col-lg-1
              figure
                img(src="@/assets/curso/temas/tema4/img5.svg", alt="alt").tm2-img17
            
            .col-lg-11(data-aos="fade-left")
              p.mb-0 #[b Reglas de advertencia:] se refiere específicamente a aquellas reglas que procuran un modelo de conducta o de desenvolvimiento del juego, tratando de minimizar acciones que limiten o perjudiquen el correcto desarrollo del juego.

    separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Paradigmas de jugabilidad

    .row.mb-5(data-aos="fade-left")
      p Las configuraciones y acciones de jugabilidad son diferentes y específicas a cada videojuego, sin embargo, se pueden encontrar aspectos comunes y que definen comportamientos, al margen de lo que ya establecen las dinámicas y las mecánicas del juego.

    .row.mb-5(data-aos="fade-right")
      ol.lista-ol--cuadro
        li 
          .lista-ol--cuadro__vineta
            span a
          | #[b.w-b Toma de decisiones]

    .row.justify-content-center.mb-5
      .col-lg-6
        p.mb-5(data-aos="fade-left") Los jugadores se enfrentan a cada momento del juego a una serie de circunstancias que, de acuerdo con las mecánicas de jugabilidad, definen opciones de acción que, en sí mismas, son parámetros de decisiones. A continuación, se definen las más preponderantes:

        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema1/icono2.svg', alt='')
          .list__txt
            p.mb-0.tv.margin-icon #[b Intercambio:] esquema de decisión donde el jugador tiene la alternativa de elegir el cambio o sustitución de un elemento de juego.

        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema1/icono2.svg', alt='')
          .list__txt
            p.mb-0.tv.margin-icon #[b Persistencia:] esquema de decisión donde el jugador debe mantenerse en un evento de juego, a partir de una decisión tomada y como consecuencia.

        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema1/icono2.svg', alt='')
          .list__txt
            p.mb-0.tv.margin-icon #[b Situacional:] esquema de decisión donde las situaciones definen la pertinencia o conveniencia de una determinada decisión.

        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema1/icono2.svg', alt='')
          .list__txt
            p.mb-0.tv.margin-icon #[b Personalización:] esquema de decisión donde el jugador tiene la oportunidad de diseñar un estilo propio de juego, basado en un perfil de decisiones.

      .col-lg-6
        figure
          img(src="@/assets/curso/temas/tema4/img6.svg", alt="alt")

    .row.mb-5(data-aos="fade-right")
      ol.lista-ol--cuadro
        li 
          .lista-ol--cuadro__vineta
            span b
          | #[b.w-b Desafíos y mecánicas]

    .row.mb-5
      p(data-aos="fade-left") Las mecánicas definen el funcionamiento de los desafíos, la forma como se activan, las condiciones que las delimitan. En términos generales, los esquemas de desafío pueden ser activos o pasivos.

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta--morada.p-3.mb-4
          .row
            .col-6.col-lg-1
              figure
                img(src="@/assets/curso/temas/tema4/img1.svg", alt="alt").tm2-img17
            
            .col-lg-11(data-aos="fade-left")
              p.mb-0 #[b Desafíos pasivos:] son aquellos que comprenden la interacción con elementos ya presentes en el nivel de juego y, por lo tanto, son objetos de juego físicos del nivel, por ejemplo, una pared de un edificio donde el desafío es escalarla.

        .tarjeta--morada.p-3.mb-4
          .row
            .col-6.col-lg-1
              figure
                img(src="@/assets/curso/temas/tema4/img2.svg", alt="alt").tm2-img17
            
            .col-lg-11(data-aos="fade-left")
              p.mb-0.mt-2 #[b Desafíos activos:] pueden denominarse desafíos propiamente dichos, y están delimitados por las reglas y mecánicas del juego. El combate y derrota con entidades de AI son un ejemplo de este tipo de desafíos.

    .row.mb-5(data-aos="fade-right")
      ol.lista-ol--cuadro
        li 
          .lista-ol--cuadro__vineta
            span c
          | #[b.w-b Acciones y desafíos]

    .row.mb-5(data-aos="fade-left")
      p Las acciones que los jugadores realizan se deciden con el fin de cumplir con los desafíos que se presentan en juego. Un mismo desafío puede sugerir una serie específica de acciones o la elección variable de multitud de opciones. Existen dos tipos de acciones desde el enfoque de lo que pueden hacer los jugadores:

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta--morada.p-3.mb-4
          .row
            .col-6.col-lg-1
              figure
                img(src="@/assets/curso/temas/tema4/img1.svg", alt="alt").tm2-img17
            
            .col-lg-11(data-aos="fade-left")
              p.mb-0.mt-2 #[b Acciones operativas:] son las acciones que el jugador puede realizar, y forman parte de su mecánica de núcleo. Por ejemplo, en #[i Mario Bros], el jugador puede caminar, correr y saltar.

        .tarjeta--morada.p-3.mb-4
          .row
            .col-6.col-lg-1.mt-4
              figure
                img(src="@/assets/curso/temas/tema4/img2.svg", alt="alt").tm2-img17
            
            .col-lg-11(data-aos="fade-left")
              p.mb-0 #[b Acciones resultantes:] son aquellas acciones que tienen un valor significativo, con relación al cumplimiento de determinados desafíos. De una acción operativa, pueden derivarse diferentes acciones resultantes. Por ejemplo, de la acción saltar, puede derivarse una acción resultante de saltar encima de un enemigo, que puede dar lugar a su neutralización, que sería diferente a una acción resultante de saltar sobre un obstáculo como una roca o un muro. Las acciones resultantes sugieren interacciones más específicas con el contexto de juego y surgen de las particularidades de cada mecánica de videojuego.




</template>

<script>
export default {
  name: 'Tema4',
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
