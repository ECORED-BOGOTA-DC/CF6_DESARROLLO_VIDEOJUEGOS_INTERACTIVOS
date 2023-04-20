<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 La idea y el concepto de videojuego

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-4
          .bloque-texto-g1__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img1.svg')})`}"
          )
          .bloque-texto-g1__texto.p-4
            p.mb-0 Los videojuegos son aplicaciones de #[i software] que se crean con el fin de entretener. Todos los videojuegos comienzan con una idea que puede variar en el transcurso del tiempo y que se restringe a aspectos como la plataforma de publicación, la plataforma de desarrollo, costos de desarrollo, gustos del grupo objetivo y oportunidades de innovación.

    .row.mb-5
      p En primer lugar, la idea de videojuego comprende la noción fundamental de jugabilidad, su narrativa, si ha de tenerla, sus personajes y plataforma de publicación. Se trata de establecer aspectos técnicos básicos pero que caracterizan todavía más el carácter del videojuego. A nivel de concepto de videojuego, es posible establecer una idea más profunda de las mecánicas, es decir, la jugabilidad unida con aspectos básicos de motivación y reto. Se puede ser más detallado en la concepción gráfica, el perfil de jugador y de plataforma de publicación.   

    separador

    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Narrativa, personajes y entorno

    .row.mb-5
      p Algunos aspectos fundamentales que determinan el discurso narrativo que puede llegar a tener un videojuego son la narrativa propiamente dicha, los personajes de la narración y el entorno donde se desarrolla.

    .row.mb-3
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon1
              img(src='@/assets/curso/temas/tema1/img2.svg', alt='')
          .list__txt
            h3.mb-0.tv.margin-icon La narración
    
    .row.mb-5
      p En primer lugar, es importante tener en cuenta que en un videojuego, como en cualquier tipo de contenido, se puede encontrar narrativa e historia como elementos que, aunque interdependientes, son diferentes el uno del otro. Todos los videojuegos tienen una historia, que se refiere al universo fantástico de la narración; en tal sentido, se refiere al discurso implícito de carácter ficticio en el que ocurren los eventos que se plantean en el videojuego. Por otro lado, la narrativa tiene relación con la forma como se cuenta dicha historia; en este sentido, involucra al jugador, la experiencia que tiene del juego y su apropiación de la narración, una vez la conoce. 

    .row.mb-5
      .tarjeta.tarjeta--gris.p-3.p-lg-5.tema1-bg1
        p Si bien no todos los videojuegos tienen en sí mismos una historia concreta, pueden discernirse relaciones de eventos y hechos en el transcurrir del juego, donde, al cumplir retos, el jugador construye sus propias narraciones, como es el caso de Pong, el primer videojuego desarrollado en la historia de este tipo de contenidos, publicado en 1972, y que consiste básicamente en una metáfora funcional del ping pong. Conceptualmente, se tienen dos tipos de interacción narrativa:  la narrativa embebida, que involucra la construcción en sí misma del universo a través de los mecanismos propios del videojuego (cinemáticas, mecánica de jugabilidad), y la narrativa emergente, que se define en la medida en que el jugador interactúa con el videojuego y se apropia de la historia general del mismo.
        p Pong

        figure
          img(src="@/assets/curso/temas/tema1/img3.svg", alt="alt")

    .row.mb-5
      p En términos generales, se puede decir que existen dos tipos de narrativas presentes en cualquier relato: las narrativas lineales, que, como su nombre indica, conllevan una linealidad en lo que se cuenta, en la interacción y comportamientos, y las narrativas no lineales, que pueden desbordar en diferentes puntos e incluso en diferentes desenlaces. Sea cual sea el caso, estas tipologías están orientadas fundamentalmente a la toma de decisiones que puede llegar a tener el jugador:

    .row.mb-5
      ol.lista-ol--cuadro
        li 
          .lista-ol--cuadro__vineta
            span a
          h4 Narrativas lineales

    .row.mb-5
      p.mb-3 Este primer tipo de estructura se caracteriza por ser simple, en lo que se refiere a las decisiones del jugador. Cada una de las etapas de la narración transcurre una después de la otra, e incluso al punto de discernir su desenlace final. Estas narraciones tienen objetivos específicos y no ofrecen la alternativa de tomar decisiones diferentes que conlleven a eventos diferentes. 
      p En las narrativas lineales, los eventos y los retos del jugador ocurren en una misma secuencia de tiempo, en un determinado orden cronológico. (Ejemplos: #[i The Last of Us, The Legend of Zelda: Ocarina of Time]).

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3
          p Figura 1. Narrativa lineal.

        figure
          img(src="@/assets/curso/temas/tema1/img4.svg", alt="alt")

    .row.mb-5
      p En este tipo de narrativas, se tiene un segundo tipo llamado collar de perlas (#[i String of pearls]), donde la narración lineal es interrumpida cierto tiempo, por periodos cortos, donde el jugador debe tomar decisiones, aparentemente basado en múltiples opciones, que, sin embargo, lo llevarán siempre a una misma línea narrativa que no afecta la narración ni el #[i gameplay] del videojuego. (Ejemplo: #[i Call of Duty, Quake])

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3
          p Figura 2. Videojuego #[i Quake]

        figure
          img(src="@/assets/curso/temas/tema1/img5.png", alt="alt")
          figcaption Referencia de la imagen: https://store.epicgames.com/es-ES/p/quake

    .row.mb-4
      h3.text-center Tipos de narrativas lineales:

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Narrativa ramificada")
        .row
          p Esta narrativa es quizás de las más importantes hoy en día y, sobre todo, la que más alternativas ofrece al jugador y más dinámica de jugabilidad. En este tipo de narrativa, tanto el esquema argumental como la dinámica de juegos, se ven afectados directamente por las decisiones que tome el jugador. Su nombre se debe a que el argumento ocupa la base central del tronco de la narración y las ramificaciones las constituyen cada una de las posibles variaciones que tenga la narrativa en función de las decisiones del jugador.
      
      .py-3.py-md-4(titulo="Ramificada binaria")
        .row
          .col-md-6.mb-4.mb-md-0
            p.mb-3 Este tipo de narrativa es limitada y apenas ofrece dos alternativas posibles de decisión, por lo tanto, se encausan directamente a un solo camino. (Ejemplo: #[i The Secret of Monkey Island, Beyond: Two Souls])
            
            figure
              img(src='@/assets/curso/temas/tema1/img7.svg', alt="alt")
              figcaption Videojuego #[i Beyond: Two Souls]
          
          .col-md-6
            h5.text-center.mb-3 Limitada o binaria:
            
            figure
              img(src='@/assets/curso/temas/tema1/img8.svg', alt="alt")

      .py-3.py-md-4(titulo="Ramificada abierta")
        .row
          .col-md-6.mb-4.mb-md-0
            p.mb-3 En esta narrativa se introducen eventos que invitan a decisiones posibles y múltiples, que permiten modificar la historia, de tal manera que el jugador tiene la sensación de estar modificando la historia general del videojuego. Este tipo de narración tiene una gran complejidad, teniendo en cuenta que deben poder abarcarse todos los finales, desenlaces o caminos posibles, para poder tener un control sobre la narración y sobre las decisiones, sin que se vea obvio el posible direccionamiento que debe dársele al jugador. (Ejemplo: #[i The Walking Dead]).
            
          
          .col-md-6
            h5.text-center.mb-3 Finales abiertos:
            
            figure
              img(src='@/assets/curso/temas/tema1/img9.svg', alt="alt")

      .py-3.py-md-4(titulo="Narrativa de embudo")
        .row
          .col-md-6.mb-4.mb-md-0
            p.mb-3 En este tipo de narrativa existen ramificaciones en la historia, sin embargo, en algún momento, algunas de estas ramas convergen en puntos específicos de la narración, que en sí mismos constituyen un cuello de botella o puntos de choque. Básicamente, el jugador, aún cuando explore diferentes alternativas, se verá involucrado en una misma línea de narración. (Ejemplo: #[i Far Cry 2, The Witcher 2]).
            
          
          .col-md-6
            h5.text-center.mb-3 Embudo:
            
            figure
              img(src='@/assets/curso/temas/tema1/img10.svg', alt="alt")

      .py-3.py-md-4(titulo="Narrativa de caminos críticos")
        .row
          .col-md-6.mb-4.mb-md-0
            p.mb-3 En esta narrativa el videojuego tiene en realidad un único camino, pero el jugador tiene la oportunidad de enfrentarse a retos secundarios, que finalmente conllevan a la línea general. Esta narrativa da la sensación de ofrecer diferentes alternativas y puede tener hasta tres niveles de reto, que le permiten cierta dinámica de juegos sin perder la noción de la línea general. (Ejemplo: #[i Grand Theft Auto V, The Witcher 3, Fallout 4])
            
          
          .col-md-6
            h5.text-center.mb-3 Caminos críticos:
            
            figure
              img(src='@/assets/curso/temas/tema1/img11.svg', alt="alt")

    .row.mb-5
      ol.lista-ol--cuadro
        li 
          .lista-ol--cuadro__vineta
            span b
          h4 Narrativas no lineales

    .row.mb-5
      p Como se mencionó anteriormente, las narrativas lineales ocurren en un determinado orden cronológico y dan la oportunidad de tomar ciertas decisiones y cierta capacidad de decisión en los jugadores. Muy diferentes a las narrativas no lineales, donde este tipo de circunstancias no ocurre.

    .row.mb-5
      AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
        .row(titulo="TNarración multinivel")
          .col-md-6.mb-4.mb-md-0
            p Se encuentra principalmente en los videojuegos de tipo MMO, como #[i League of Legends  y World of Warcraft]. En este tipo de esquema, es más importante el #[i player agency], o nivel de control del juego de un jugador, y la posibilidad de incursionar en el mayor número de misiones posible. En este tipo de narrativa, los bloques narrativos no tienen relación alguna entre sí y se hallan distribuidos en regiones del juego, de tal manera que el jugador tiene la posibilidad de unificar todas estas instancias de historia de eventos y de lugares en su cabeza, para construir él mismo el propósito del juego.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img12.svg', alt='alt')

        .row(titulo="Narrativa “parque de diversiones”")
          .col-md-6.mb-4.mb-md-0
            p En este tipo de narrativa, el carácter de diversidad lo dan los diferentes espacios y lugares en los que el jugador participante puede tener la opción de intervenir. Se llama parque de diversiones porque, precisamente, en un espacio global, se pueden encontrar pequeños lugares específicos, con retos y narraciones específicos. Este esquema de narración se basa en la exploración, teniendo en cuenta que las nuevas líneas narrativas surgen dependiendo de adonde se direccione el jugador. En este sentido, prima la iniciativa de explorar y no necesariamente el perseguir un solo objetivo en específico. En este tipo de videojuegos, existen varias subtramas que se relacionan necesariamente con una trama general, dando la oportunidad, incluso, de explorar el juego sin siquiera haber abordado alguna parte de la historia principal. Este tipo de narrativa se encuentra en los videojuegos de rol, donde cada uno de los jugadores encarna un personaje, permitiendo identificarse con él y, de esta manera, acercándose más a la narrativa que se plantea, en lugar de simplemente completar retos.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img13.svg', alt='alt')


    .row.mb-3
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon1
              img(src='@/assets/curso/temas/tema1/img2.svg', alt='')
          .list__txt
            h3.mb-0.tv.margin-icon Personajes

    .row.mb-5
      p Los personajes están constituidos por todas las entidades del videojuego que tienen en sí mismos una identidad, un rol y un papel narrativo y “actoral” dentro del juego; comprende el o los personajes controlados por el o los jugadores y los personajes no jugables o controlados por el sistema.

    .row.mb-3
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema1/icono1.svg', alt='')
          .list__txt
            h3.mb-0.tv.margin-icon Roles actanciales

    .row.mb-5
      p Los roles y las características de los personajes  cumplen una función importante en términos narrativos, desde el eje sistemático de lo que realizan dentro de una historia. En este sentido, el análisis será desde el tradicional esquema de los roles actanciales.
    
    .cajon.color-primario.p-4
      p Según Greimas, los roles actanciales son realizados por los “actantes” (persona, animal o cosa), por lo tanto, son los que realizan las acciones propias dentro de la narración. Se consideran actantes independientemente de cualquier determinación o de cualquier concepto externo, y su caracterización viene determinada por el rol que desempeñan.













</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
