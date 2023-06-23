<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.texto-blanco 1
      h1 La idea y el concepto de videojuego

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-4
          .bloque-texto-g1__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img1.svg')})`}"
          )
          .bloque-texto-g1__texto.p-4(data-aos="fade-right")
            p.mb-0 Los videojuegos son aplicaciones de #[i software] que se crean con el fin de entretener. Todos los videojuegos comienzan con una idea que puede variar en el transcurso del tiempo y que se restringe a aspectos como la plataforma de publicación, la plataforma de desarrollo, costos de desarrollo, gustos del grupo objetivo y oportunidades de innovación.

    .row.mb-5(data-aos="fade-left")
      p En primer lugar, la idea de videojuego comprende la noción fundamental de jugabilidad, su narrativa, si ha de tenerla, sus personajes y plataforma de publicación. Se trata de establecer aspectos técnicos básicos pero que caracterizan todavía más el carácter del videojuego. A nivel de concepto de videojuego, es posible establecer una idea más profunda de las mecánicas, es decir, la jugabilidad unida con aspectos básicos de motivación y reto. Se puede ser más detallado en la concepción gráfica, el perfil de jugador y de plataforma de publicación.   

    separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Narrativa, personajes y entorno

    .row.mb-5(data-aos="fade-left")
      p Algunos aspectos fundamentales que determinan el discurso narrativo que puede llegar a tener un videojuego son la narrativa propiamente dicha, los personajes de la narración y el entorno donde se desarrolla.

    .row.mb-3
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon1
              img(src='@/assets/curso/temas/tema1/img2.svg', alt='')
          .list__txt
            h3.mb-0.tv.margin-icon La narración
    
    .row.mb-5(data-aos="fade-left")
      p En primer lugar, es importante tener en cuenta que en un videojuego, como en cualquier tipo de contenido, se puede encontrar narrativa e historia como elementos que, aunque interdependientes, son diferentes el uno del otro. Todos los videojuegos tienen una historia, que se refiere al universo fantástico de la narración; en tal sentido, se refiere al discurso implícito de carácter ficticio en el que ocurren los eventos que se plantean en el videojuego. Por otro lado, la narrativa tiene relación con la forma como se cuenta dicha historia; en este sentido, involucra al jugador, la experiencia que tiene del juego y su apropiación de la narración, una vez la conoce. 

    .row.mb-5
      .tarjeta.tarjeta--gris.p-3.p-lg-5.tema1-bg1
        p(data-aos="fade-up") Si bien no todos los videojuegos tienen en sí mismos una historia concreta, pueden discernirse relaciones de eventos y hechos en el transcurrir del juego, donde, al cumplir retos, el jugador construye sus propias narraciones, como es el caso de #[i Pong], el primer videojuego desarrollado en la historia de este tipo de contenidos, publicado en 1972, y que consiste básicamente en una metáfora funcional del #[i ping-pong]. Conceptualmente, se tienen dos tipos de interacción narrativa:  la narrativa embebida, que involucra la construcción en sí misma del universo a través de los mecanismos propios del videojuego (cinemáticas, mecánica de jugabilidad), y la narrativa emergente, que se define en la medida en que el jugador interactúa con el videojuego y se apropia de la historia general del mismo.
        i(data-aos="fade-up") Pong

        figure.mt-4
          img(src="@/assets/curso/temas/tema1/img3.svg", alt="alt")

    .row.mb-5(data-aos="fade-left")
      p En términos generales, se puede decir que existen dos tipos de narrativas presentes en cualquier relato: las narrativas lineales, que, como su nombre indica, conllevan una linealidad en lo que se cuenta, en la interacción y comportamientos, y las narrativas no lineales, que pueden desbordar en diferentes puntos e incluso en diferentes desenlaces. Sea cual sea el caso, estas tipologías están orientadas fundamentalmente a la toma de decisiones que puede llegar a tener el jugador:

    .row.mb-5(data-aos="fade-right")
      ol.lista-ol--cuadro
        li 
          .lista-ol--cuadro__vineta
            span a
          | #[b.w-b Narrativas lineales]

    .row.mb-5
      p(data-aos="fade-left") Este primer tipo de estructura se caracteriza por ser simple, en lo que se refiere a las decisiones del jugador. Cada una de las etapas de la narración transcurre una después de la otra, e incluso al punto de discernir su desenlace final. Estas narraciones tienen objetivos específicos y no ofrecen la alternativa de tomar decisiones diferentes que conlleven a eventos diferentes. 
      p(data-aos="fade-left") En las narrativas lineales, los eventos y los retos del jugador ocurren en una misma secuencia de tiempo, en un determinado orden cronológico. (Ejemplos: #[i The Last of Us, The Legend of Zelda: Ocarina of Time]).

    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-5
          p.mb-0 #[b Figura 1] 
          i.mb-0 Narrativa lineal

        figure
          img(src="@/assets/curso/temas/tema1/img4.svg", alt="alt")

    .row.mb-5(data-aos="fade-left")
      p En este tipo de narrativas, se tiene un segundo tipo llamado collar de perlas (#[i String of pearls]), donde la narración lineal es interrumpida cierto tiempo, por periodos cortos, donde el jugador debe tomar decisiones, aparentemente basado en múltiples opciones, que, sin embargo, lo llevarán siempre a una misma línea narrativa que no afecta la narración ni el #[i gameplay] del videojuego. (Ejemplo: #[i Call of Duty, Quake]).

    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-5
          p.mb-0 #[b Figura 2]
          i.mb-0 Videojuego #[i Quake]

        figure
          img(src="@/assets/curso/temas/tema1/img5.png", alt="alt")
          figcaption Referencia de la imagen: https://store.epicgames.com/es-ES/p/quake

    .row.mb-4(data-aos="fade-down")
      h3.text-center Tipos de narrativas lineales

      TabsC.color-acento-contenido.mb-5
        .py-3.py-md-4(titulo="Narrativa ramificada")
          .row
            p Esta narrativa es quizás de las más importantes hoy en día y, sobre todo, la que más alternativas ofrece al jugador y más dinámica de jugabilidad. En este tipo de narrativa, tanto el esquema argumental como la dinámica de juegos, se ven afectados directamente por las decisiones que tome el jugador. Su nombre se debe a que el argumento ocupa la base central del tronco de la narración y las ramificaciones las constituyen cada una de las posibles variaciones que tenga la narrativa en función de las decisiones del jugador.
        
        .py-3.py-md-4(titulo="Ramificada binaria")
          .row
            .col-md-6.mb-4.mb-md-0
              p.mb-3 Este tipo de narrativa es limitada y apenas ofrece dos alternativas posibles de decisión, por lo tanto, se encausan directamente a un solo camino. (Ejemplo: #[i The Secret of Monkey Island, Beyond: Two Souls]).
              
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
              p.mb-3 En este tipo de narrativa existen ramificaciones en la historia, sin embargo, en algún momento, algunas de estas ramas convergen en puntos específicos de la narración, que en sí mismos constituyen un cuello de botella o puntos de choque. Básicamente, el jugador, aun cuando explore diferentes alternativas, se verá involucrado en una misma línea de narración. (Ejemplo: #[i Far Cry 2, The Witcher 2]).
              
            
            .col-md-6
              h5.text-center.mb-3 Embudo:
              
              figure
                img(src='@/assets/curso/temas/tema1/img10.svg', alt="alt")

        .py-3.py-md-4(titulo="Narrativa de caminos críticos")
          .row
            .col-md-6.mb-4.mb-md-0
              p.mb-3 En esta narrativa el videojuego tiene en realidad un único camino, pero el jugador tiene la oportunidad de enfrentarse a retos secundarios, que finalmente conllevan a la línea general. Esta narrativa da la sensación de ofrecer diferentes alternativas y puede tener hasta tres niveles de reto, que le permiten cierta dinámica de juegos sin perder la noción de la línea general. (Ejemplo: #[i Grand Theft Auto V, The Witcher 3, Fallout 4]).
              
            
            .col-md-6
              h5.text-center.mb-3 Caminos críticos:
              
              figure
                img(src='@/assets/curso/temas/tema1/img11.svg', alt="alt")

    .row.mb-5(data-aos="fade-right")
      ol.lista-ol--cuadro
        li 
          .lista-ol--cuadro__vineta
            span b
          | #[b.w-b Narrativas no lineales]

    .row.mb-5(data-aos="fade-left")
      p Como se mencionó anteriormente, las narrativas lineales ocurren en un determinado orden cronológico y dan la oportunidad de tomar ciertas decisiones y cierta capacidad de decisión en los jugadores. Muy diferentes a las narrativas no lineales, donde este tipo de circunstancias no ocurre.

    .row.mb-5
      AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
        .row(titulo="Narración multinivel")
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

    .row.mb-5(data-aos="fade-left")
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
      p.mb-5(data-aos="fade-left") Los roles y las características de los personajes  cumplen una función importante en términos narrativos, desde el eje sistemático de lo que realizan dentro de una historia. En este sentido, el análisis será desde el tradicional esquema de los roles actanciales.
    
      .cajon.color-primario.p-4.mb-5
        p.mb-0(data-aos="fade-up") Según Greimas, los roles actanciales son realizados por los “actantes” (persona, animal o cosa), por lo tanto, son los que realizan las acciones propias dentro de la narración. Se consideran actantes independientemente de cualquier determinación o de cualquier concepto externo, y su caracterización viene determinada por el rol que desempeñan.

      p.mb-4(data-aos="fade-left") Los tipos de personajes constituyen los modelos de personaje humano o animado que posee rasgos estereotípicos, físicos, psicológicos y morales prefijados por el común de usuario o consumidores de contenido.
      p(data-aos="fade-left") A continuación, se puede observar una tabla que reúne los principales roles actanciales desde las propuestas realizadas por tres autores diferentes (Hartt, 2019):


    .tabla-a.color-acento-botones.mb-5(data-aos="flip-left")
      table
        thead
          tr.text-white
            th Propp
            th Souriau
            th Greimas

        tbody
          tr.bgr-tr.text-center
            td Héroe
            td Fuerza temática orientada
            td Sujeto

          tr.text-center
            td Bien amado o deseado
            td Representante del bien deseado, del valor orientado
            td Objeto

          tr.bgr-tr.text-center
            td Donador o proveedor
            td Árbitro atribuidor del bien
            td Destinador

          tr.text-center
            td Mandador
            td Obtenedor virtual del bien
            td Destinatario
          
          tr.bgr-tr.text-center
            td Ayudante
            td Auxilio, reduplicación de una de las fuerzas
            td Ayudante

          tr.text-center
            td Villano o agresor
            td Oponente
            td Oponente

          tr.bgr-tr.text-center
            td Traidor o falso héroe
            td ***
            td Oponente

    .row.mb-3(data-aos="fade-left")
      p A partir del anterior esquema, se determinarán los siguientes #[b roles actanciales:]


    .row.mb-5
      SlyderF.mb-5.mt-5(columnas="col-lg-6 col-xl-4")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img14.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul-1.p-4
            h2.text-center.mt-5 Sujeto
            p.text-center Representado esencialmente por el personaje controlado por el jugador o el sistema, de acuerdo con el orden narrativo.

        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img15.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul-1.p-4
            h2.text-center.mt-5 Objeto
            p.text-center Constituye en sí mismo el objetivo o propósito del sujeto (ser amado, dinero, honor, felicidad).

        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img16.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul-1.p-4
            h2.text-center.mt-5 Ayudante
            p.text-center Está representado por la entidad o circunstancia que ayuda al sujeto a realizar su misión. También puede encontrarse un rol ayudante para los oponentes.

        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img17.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul-1.p-4
            h2.text-center.mt-5 Oponente
            p.text-center Es el rol némesis del sujeto. En este sentido, tiene como posible objetivo el mismo del sujeto, pero con intenciones completamente contradictorias. En el caso de los videojuegos, si el sujeto es controlado por el usuario, el oponente es controlado por el sistema u otro jugador o viceversa.

        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img18.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul-1.p-4
            h2.text-center.mt-5 Destinador
            p.text-center Es el rol que establece, arbitra y orienta los hechos en los que se ven involucrados los personajes. Puede estar representado por una entidad concreta, un fundamento o principio, o una emoción o sentimiento. Es el que motiva al sujeto a cumplir con el objetivo.

        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img19.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul-1.p-4
            h2.text-center.mt-5 Destinatario
            p.text-center Involucra el beneficio directo que logra el sujeto o el oponente al cumplir con las misiones. Puede tener una naturaleza social, ideológica, moral o material. Es quien recibe las acciones o metas del sujeto.

    .row.mb-5(data-aos="fade-left")
      p Desde estos roles, se pueden establecer #[b ejes de relación] entre cada uno de los tipos de actantes:


    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img20.svg' alt='AvatarTop')
          .tarjeta.tarjeta--morada
            .row.p-4.mt-4
              h4.text-center El eje destinador - destinatario
              p.text-center Involucra el control de los valores y, por lo tanto, de la ideología. Determina la creación de estos y su relación con los personajes.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img21.svg' alt='AvatarTop')
          .tarjeta.tarjeta--morada
            .row.p-4.mt-4
              h4.text-center El eje sujeto - objeto
              p.text-center Determina la trayectoria de la acción y lo que busca el protagonista o héroe de la historia. Determina el eje del deseo, es decir, el propósito que se busca lograr y los obstáculos que se encuentran.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img22.svg' alt='AvatarTop')
          .tarjeta.tarjeta--morada
            .row.p-4.mt-4
              h4.text-center El eje ayudante - opositor
              p.text-center Este eje determina la facilidad o la dificultad en la comunicación, produce las circunstancias y las acciones propias dentro de la narración. No necesariamente involucra personajes y puede, desde cierto punto de vista, hacer la proyección del esquema de personalidad del personaje sujeto.

    .row.mb-3
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon1
              img(src='@/assets/curso/temas/tema1/img2.svg', alt='')
          .list__txt
            h3.mb-0.tv.margin-icon Entorno

    .row.mb-5(data-aos="fade-left")
      p.mb-4 Desde el punto de vista narrativo, el entorno constituye el espacio físico en el cual se lleva a cabo la historia y las acciones de cada uno de los personajes. Necesariamente influye en cada uno de los eventos narrativos y cronológicos, y determina en gran medida aspectos de jugabilidad. A este concepto de entorno se añade el concepto de contexto, de tal manera que, no solamente se define en términos de espacialidad, sino en lo que lo caracteriza, en términos funcionales y la forma como se aborda y aporta en la historia. Las características o puntos de vista comprenden: la cronología, la ambientación, la funcionalidad (jugabilidad) y el estilo visual y narrativo. 
      p Por otro lado, y desde el punto de vista específico de jugabilidad, comprende la relación directa de interacción con el jugador, y se encuentran entornos y contextos basados en la exploración, el paso de obstáculos.

    .row.mb-5
      .col-lg-6
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img32.svg' alt='AvatarTop')
          .tarjeta.tarjeta-borde
            .p-3(data-aos="fade-up")
              h5 Punto de vista cronológico
              p Desde esta perspectiva, se encuentran entornos y contextos donde entra a jugar el tiempo y la época a la que se refiere el videojuego. Determinan tanto la narrativa como la ambientación de utilería, arquitectura y vestuario.

        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img33.svg' alt='AvatarTop')
          .tarjeta.tarjeta-borde
            .p-3(data-aos="fade-up")
              h5 Punto de vista ambiental
              p Desde esta perspectiva, es posible referirse a los aspectos propios de la sensación que causa un espacio como tal y la forma como puede ser simulado a través del videojuego. En este aspecto, es posible involucrar la iluminación, los ambientes naturales y urbanos, la decoración de interiores y la sensación de realismo de los materiales y texturas.


      .col-lg-6
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img34.svg' alt='AvatarTop')
          .tarjeta.tarjeta-borde
            .p-3(data-aos="fade-up")
              h5 Punto de vista funcional
              p En términos funcionales y de jugabilidad, se tiene la clasificación de elementos de acuerdo con su papel dentro de la mecánica de videojuegos: están la utilería, los espacios arquitectónicos, naturales y urbanos, y los vehículos. 
        
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img35.svg' alt='AvatarTop')
          .tarjeta.tarjeta-borde
            .p-3(data-aos="fade-up")
              h5 Punto de vista de estilo
              p Este aspecto involucra el entorno y el contexto, en términos de la apropiación de un estilo visual artístico específico. Comprende también el estilo y género narrativo que se haya implementado. Desde esta instancia, se entendería que para un videojuego de terror se implemente una ambientación, quizás una época, y una iluminación diferente, así se trate de un videojuego de aventuras.

    separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Mecánicas, dinámicas y estéticas

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-4
          .bloque-texto-g1__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img23.svg')})`}"
          )
          .bloque-texto-g1__texto.p-3(data-aos="fade-right")
            p.mb-0 En la actualidad, en el diseño de videojuegos, se especifica una tríada de aspectos que tienen que ver con la totalidad de elementos que deben determinar la experiencia de usuario, y son las mecánicas, las dinámicas y la estética. Las mecánicas se refieren a las reglas y sistemas que determinan la experiencia de juego en sí misma. Las dinámicas hacen referencia al comportamiento de las mecánicas en respuesta a las acciones que realiza un jugador. Y la estética hace referencia a la respuesta emocional que evoca el usuario y, al mismo tiempo, involucra el aspecto visual del videojuego como elemento de jugabilidad.

    .row.mb-5
      .cajon.color-primario.p-4
        p.mb-0(data-aos="fade-down") Dentro de este marco de diseño de videojuegos, se entiende que el jugador y el diseñador de juegos tienen una diferente perspectiva del videojuego. El propósito, en este sentido, es generar un puente entre el diseñador de videojuegos y el jugador.

    .row.mb-5(data-aos="fade-left")
      p Entendiendo los videojuegos como productos y servicios de entretenimiento, presentan un comportamiento imprevisible en sus momentos de consumo, y esto se debe, precisamente, a las motivaciones y a los procesos de inmersión e involucramiento emocional de los jugadores. Esto permite establecer los componentes de los videojuegos y descomponerlos en sus aspectos funcionales y su pertinencia alrededor de la acción de jugar; determinando así un esquema de elementos funcionales interactuantes entre sí, que determinan la relación coherente entre el videojuego y el jugador:

    .bg1
      .row.pt-4(data-aos="fade-right")
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span a
            | #[b.w-b Mecánica]

      .row.mb-3
        p.mb-3(data-aos="fade-left") Las mecánicas determinan los componentes del videojuego, es decir, definen las reglas como acciones y comportamientos permitidos al jugador, y restringen de una u otra manera su trayectoria en el videojuego. Involucra la programación.
        p(data-aos="fade-left") Dentro de la construcción de las mecánicas de juegos, y específicamente en este modelo de mecánicas, dinámicas y estéticas, a continuación se presentan las tipologías de mecánicas establecidas por Brenda Brathwaite e Ian Schreiber (Brathwaite y Schreiber, 2009):

      .row
        .col-lg-7
          .list.mb-3(data-aos="fade-down")
            .list__item
              .list__item__icon
                img(src='@/assets/curso/temas/tema1/icono2.svg', alt='')
            .list__txt
              p.mb-0.tv.margin-icon #[b Mecánicas de inicio:] comprenden esencialmente las reglas que describen la forma como debe empezar el videojuego.

          .list.mb-3(data-aos="fade-down")
            .list__item
              .list__item__icon
                img(src='@/assets/curso/temas/tema1/icono2.svg', alt='')
            .list__txt
              p.mb-0.tv.margin-icon #[b Mecánicas del triunfo:] comprenden las reglas que describen la manera cómo puede ganar el jugador el videojuego, estableciendo condiciones específicas para lograr la victoria.

          .list.mb-3(data-aos="fade-down")
            .list__item
              .list__item__icon
                img(src='@/assets/curso/temas/tema1/icono2.svg', alt='')
            .list__txt
              p.mb-0.tv.margin-icon #[b Progresión del juego:] comprenden las reglas que determinan cómo se avanza durante el juego, es decir, si existe una progresión por turnos o en tiempo real. En algunas ocasiones, se pueden encontrar videojuegos donde el jugador no tiene una alternancia de turnos, sin embargo, debe corresponder a determinados retos que establecen ciclos cortos de progresión.

          .list.mb-3(data-aos="fade-down")
            .list__item
              .list__item__icon
                img(src='@/assets/curso/temas/tema1/icono2.svg', alt='')
            .list__txt
              p.mb-0.tv.margin-icon #[b Acciones del jugador:] en este sentido, las mecánicas de juegos, dentro del patrón de acciones del jugador, deben establecerse como verbos o acciones propiamente dichas que puede realizar un jugador, como saltar, caminar, correr o disparar. Estas acciones del jugador pueden determinar específicamente las mecánicas de núcleo y, al mismo tiempo, determinar los efectos que pueden dar lugar para cambiar el estado del juego.

          .list.mb-3(data-aos="fade-down")
            .list__item
              .list__item__icon
                img(src='@/assets/curso/temas/tema1/icono2.svg', alt='')
            .list__txt
              p.mb-0.tv.margin-icon #[b Definición de la visión del juego:] son las reglas que determinan qué información será accesible para el jugador y en qué momento.

        .col-lg-5
          figure
            img(src='@/assets/curso/temas/tema1/img24.png', alt='alt')

    .bg2
      .row.pt-5(data-aos="fade-right")
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span b
            | #[b.w-b Dinámica]

      .row.mb-3
        p.mb-3(data-aos="fade-left") La dinámica comprende la descripción del modo de comportarse de una mecánica en específico durante el tiempo de juego, para definir así las interacciones entre los jugadores. Su propósito es crear las experiencias estéticas, las respuestas emocionales del jugador y, por consiguiente, determinar un direccionamiento comportamental. Involucra la motivación del jugador.
        p(data-aos="fade-left") En las dinámicas principales que pueden ser utilizadas dentro de la mecánica núcleo de un videojuego, es importante tener en cuenta que la combinación de una o varias de estas dinámicas puede facilitar la interacción entre el jugador y el videojuego, de tal manera que resulte verdaderamente atractivo e inmersivo:

        .col-lg-5
          figure
            img(src='@/assets/curso/temas/tema1/img25.png', alt='alt')

        .col-lg-7
          .list.mb-3(data-aos="fade-down")
            .list__item
              .list__item__icon
                img(src='@/assets/curso/temas/tema1/icono2.svg', alt='')
            .list__txt
              p.mb-0.tv.margin-icon #[b Adquisición territorial:] en esta dinámica se describe un tipo de juegos donde el jugador puede moverse a través del entorno virtual y su objetivo es poder controlar determinadas zonas de dicho territorio.

          .list.mb-3(data-aos="fade-down")
            .list__item
              .list__item__icon
                img(src='@/assets/curso/temas/tema1/icono2.svg', alt='')
            .list__txt
              p.mb-0.tv.margin-icon #[b Predicción:] dinámica en la que el jugador puede discernir una serie de eventos que pueden llegar a dar lugar a premios y recompensas. En este sentido, el objetivo es que el jugador, de manera predeterminada, pueda analizar y comprender la forma en la que puede jugar para ganar determinadas misiones o retos.

          .list.mb-3(data-aos="fade-down")
            .list__item
              .list__item__icon
                img(src='@/assets/curso/temas/tema1/icono2.svg', alt='')
            .list__txt
              p.mb-0.tv.margin-icon #[b Razonamiento espacial:] esta dinámica es característica de la mayoría de #[i puzzles], y consiste en la adquisición de determinadas habilidades y, por consiguiente, el logro de determinados retos a partir del razonamiento espacial adecuado.

          .list.mb-3(data-aos="fade-down")
            .list__item
              .list__item__icon
                img(src='@/assets/curso/temas/tema1/icono2.svg', alt='')
            .list__txt
              p.mb-0.tv.margin-icon #[b Supervivencia:] comprende el instinto fundamental del ser humano de sobrevivir y prosperar. Se trata de videojuegos donde el objetivo primordial es protegerse a sí mismo y sobrevivir durante el videojuego.

          .list.mb-3(data-aos="fade-down")
            .list__item
              .list__item__icon
                img(src='@/assets/curso/temas/tema1/icono2.svg', alt='')
            .list__txt
              p.mb-0.tv.margin-icon #[b Colección:] en esta dinámica se trata de coleccionar o reunir la mayor cantidad de elementos, teniendo en cuenta que estos pueden ser utilizados para cumplir con determinados retos o adquirir ciertas habilidades o puntajes.

    .row.mb-3.mt-5(data-aos="fade-right")
      ol.lista-ol--cuadro
        li 
          .lista-ol--cuadro__vineta
            span c
          | #[b.w-b Estética]

    .row.mb-5(data-aos="fade-left")
      p La estética describe la respuesta que tiene el jugador, desde el punto de vista emocional, en el momento de interactuar con el sistema de juego. Como propósito, la estética busca hacer que el juego sea divertido, y que sea agradable y excitante la búsqueda del objetivo final. Involucra la inmersión.

    separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Lineamientos artísticos

    .row.mb-5(data-aos="fade-left")
      p Los lineamientos artísticos hacen referencia a los esquemas de direccionamiento de arte que se hace sobre la estética de un videojuego, basándose principalmente en las tendencias de estilo que imperan en el mercado o bien aquellas que se proponen como iniciativa y con el fin de innovar. En términos generales, se espera que los lineamientos artísticos determinen tanto la calidad en la apariencia como los mecanismos de inversión a partir del apartado gráfico.

    .row.mb-3
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon1
              img(src='@/assets/curso/temas/tema1/img2.svg', alt='')
          .list__txt
            h3.mb-0.tv.margin-icon Estilos artísticos

    .row.my-5(data-aos="fade-zoom")
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/0Lwvze9cRqU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.mb-3
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema1/icono1.svg', alt='')
          .list__txt
            h3.mb-0.tv.margin-icon Estilo artístico según la tecnología gráfica

    .row.mb-5(data-aos="fade-left")
      p Un aspecto importante al momento de idear y plantear el esquema visual de un videojuego  es la tecnología con la cual se dispone para realizarlo. También es importante tener en cuenta las características y las posibilidades que tiene el motor del videojuego. Desde esta perspectiva, se establecen las siguientes tendencias de estilo posibles de acuerdo con las tecnologías presentes, teniendo en cuenta las limitaciones tanto de la plataforma de desarrollo como de la plataforma de publicación:

    .tarjeta.tarjeta--azul.p-4.tema1-bg2
      SlyderA(tipo="a").p-5
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Pixel Art
            p Es un estilo de arte para videojuegos donde los gráficos se construyen a partir de mosaicos que, a manera de mapas de pixeles, permiten realizar toda la gráfica y toda la apariencia basada principalmente en los aportes estilísticos de los videojuegos antiguos. Estos videojuegos tenían limitaciones técnicas que exigían la creación de los gráficos en bajísima calidad y con características de color bastante limitadas. Como estilo actual, ofrece la oportunidad de crear videojuegos utilizando el píxel como base de apariencia visual, sin las restricciones técnicas que las tecnologías antiguas tenían.
            p Un aspecto importante de este estilo es que es característico de algunos videojuegos independientes, ya que resulta económico implementarlo y generar toda una estética general para un videojuego, logrando resultados de atractivo y apariencia muy llamativa. 

          .col-md-6
            .row.justify-content-center
              .col-10
                .tarjeta.tarjeta--blanca.p-2
                  p.text-center Sword & Sworcery EP, Superbrothers
            figure
              img(src='@/assets/curso/temas/tema1/img26.svg', alt='Texto que describa la imagen').imgslyder

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Ilustración 2D
            p Del estilo del píxel art se pasa muy fácilmente al del recurso estilístico propio de la ilustración 2D. El propósito en la implementación de este estilo es brindar una apariencia similar a los dibujos animados, pero recurriendo a las actuales tecnologías de desarrollo,  bien sea el motor 3D o 2D.

          .col-md-6
            .row.justify-content-center
              .col-10
                .tarjeta.tarjeta--blanca.p-2
                  p.text-center Cuphead, Studio MDHR
            figure
              img(src='@/assets/curso/temas/tema1/img27.svg', alt='Texto que describa la imagen').imgslyder

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Vectorizados
            p Si bien los anteriores ejemplos se basan fundamentalmente en la construcción de imágenes basadas en píxeles, en este caso, los gráficos son creados a partir de geometrías en sistemas de coordenadas de tres a dos ejes, y el dibujo resultante, básicamente, es un vector que puede exigir un mayor esfuerzo de cálculo matemático, sin embargo, aporta un significativo valor estético.

          .col-md-6
            .row.justify-content-center
              .col-10
                .tarjeta.tarjeta--blanca.p-2
                  p.text-center Locoroco, SCE Japan Studio
            figure
              img(src='@/assets/curso/temas/tema1/img28.svg', alt='Texto que describa la imagen').imgslyder

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Polígonos
            p Es el principal recurso de construcción formal de los videojuegos 3D y básicamente se trata de la construcción de modelos tridimensionales mediante mallas poligonales. Como en el caso anterior, se trata de gráficos construidos con geometrías cuyo cálculo matemático es exigente, pero compensado con resultados de realismo y de impacto visual significativo.

          .col-md-6
            .row.justify-content-center
              .col-10
                .tarjeta.tarjeta--blanca.p-2
                  p.text-center Uncharted 3, Naughty Dog
            figure
              img(src='@/assets/curso/temas/tema1/img29.svg', alt='Texto que describa la imagen').imgslyder

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Voxels
            p En realidad, se trata de una construcción basada en los gráficos 3D, sin embargo, las formas de los elementos que componen el videojuego, bien sea arquitectura, vehículos, objetos, o personajes, se basa en la implementación de una unidad mínima de construcción que es una simple caja 3D. En la actualidad, más que una técnica de construcción, es un estilo visual.

          .col-md-6
            .row.justify-content-center
              .col-10
                .tarjeta.tarjeta--blanca.p-2
                  p.text-center Minecraft, Mojang
            figure
              img(src='@/assets/curso/temas/tema1/img30.svg', alt='Texto que describa la imagen').imgslyder

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Gráficos 2.5D, Pseudo 3D o Cámara Fija
            p En primer lugar, estos videojuegos pueden estar construidos en motores 2D o 3D, mediante modelos tridimensionales o #[i sprites], y lo que constituye su verdadero valor estético es la manera como se asume la perspectiva de cámara, generalmente perpendicular al plano general del videojuego.

          .col-md-6
            .row.justify-content-center
              .col-10
                .tarjeta.tarjeta--blanca.p-2
                  p.text-center Prince of Persia Classic (XBLA, Ubisoft)
            figure
              img(src='@/assets/curso/temas/tema1/img31.svg', alt='Texto que describa la imagen').imgslyder


    separador

    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Monetización

    .row.mb-5
      p.mb-4(data-aos="fade-left") Para establecer una correcta estrategia de monetización es importante tener claras las funcionalidades del videojuego, el grupo objetivo, sus hábitos de juegos y su estilo de vida, en términos de capacidad adquisitiva y gustos.
      p.mb-4(data-aos="fade-left") Desde el punto de vista de jugabilidad y de relación entre el usuario o jugador y el videojuego, la monetización suele considerarse como una mecánica más, que establece también una serie de dinámicas relativas a la interacción comercial, entendiendo el videojuego como un producto o servicio comercial. 
      p(data-aos="fade-left") En términos generales, se pueden dividir los videojuegos en dos tipos, de acuerdo con la forma como pueden ser adquiridos: aquellos que se ofrecen como #[i free], o gratuitos, y los de pago. A continuación, se relacionan las estrategias de monetización más comunes que pueden manejarse de manera independiente o combinada, de acuerdo con las pretensiones establecidas en el documento de diseño y, por consiguiente, el modelo de negocios.

    .row.mb-5
      .tarjeta.tarjeta--gris.px-5.pt-3.pb-5.tema1-bg3
        h4.text-center.texto-blanco.mb-5 $ Estrategias de monetización de los videojuegos $
        .row 
          .col-lg-8
            p.texto-blanco.mb-4(data-aos="fade-left") #[b 1. #[i Freemium] - Gratis + Oportunidades de monetización adicional:] Este es uno de los modelos de monetización más comunes y se trata básicamente de videojuegos de descarga gratuita y, una vez los jugadores se han mantenido bajo cierto nivel de fidelización, se puede optar por la monetización a partir del pago por contenido adicional. Dentro de los modelos #[i freemium] se puede encontrar:

            .row.justify-content-center.mb-4(data-aos="fade-up")
              .col-lg-3
                .row
                  .col-auto
                    a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
                      span.text-small Uso limitado
                      .indicador--click(v-if="mostrarIndicador")

                
                ModalA(:abrir-modal.sync="modal1")
                  .row.align-items-center
                    h4.mb-4 Uso limitado
                    p En este esquema, el videojuego puede jugarse gratis durante un tiempo específico y ofrece, en el caso de datos, un espacio de almacenamiento limitado. Pasado el tiempo de prueba o el espacio de almacenamiento se ofrece la alternativa de adquirir una cuenta o versión de pago, con mayores tiempos de juegos o espacio de almacenamiento.

              .col-lg-3
                .row
                  .col-auto
                    a.boton.color-acento-botones.indicador__container(@click="modal2 = true")
                      span.text-small Prueba gratis
                      .indicador--click(v-if="mostrarIndicador")

                
                ModalA(:abrir-modal.sync="modal2")
                  .row.align-items-center
                    h4.mb-4 Prueba gratis
                    p En este modelo, se ofrece el videojuego con todas las funcionalidades durante un tiempo limitado; posteriormente deberá adquirir una licencia que le permita continuar con el videojuego.

              .col-lg-3
                .row
                  .col-auto
                    a.boton.color-acento-botones.indicador__container(@click="modal3 = true")
                      span.text-small Funcionalidad
                      .indicador--click(v-if="mostrarIndicador")

                
                ModalA(:abrir-modal.sync="modal3")
                  .row.align-items-center
                    h4.mb-4 Funcionalidad
                    p En este modelo, los videojuegos se ofrecen con una limitada funcionalidad, por ejemplo, un número mínimo de niveles o un número mínimo de habilidades de los personajes. El propósito es que, en el momento de avanzar en el juego, el jugador se anime a comprar nuevos elementos de juegos como personajes habilidades o niveles.

              .col-lg-3
                .row
                  .col-auto
                    a.boton.color-acento-botones.indicador__container(@click="modal4 = true")
                      span.text-small Experiencia de usuario
                      .indicador--click(v-if="mostrarIndicador")

                
                ModalA(:abrir-modal.sync="modal4")
                  .row.align-items-center
                    h4.mb-4 Experiencia de usuario
                    p En este modelo, aparecen dos tipos de posibilidades de monetización que comprenden, por ejemplo, el pago por parte del usuario para que no aparezca publicidad in-app, y, al mismo tiempo, el pago de empresas anunciantes por la pauta a través de estos videojuegos. 

            p.texto-blanco.mb-4(data-aos="fade-left")  #[b 2. #[i Paid] o Pago por descarga:] este es un modelo de monetización tradicional, donde el usuario paga por anticipado por un videojuego para que le sea permitida su descarga. Una vez descargado, el jugador tendrá acceso a todas las funcionalidades y el estudio desarrollador no tendrá ningún otro medio de monetización.

            p.texto-blanco.mb-4(data-aos="fade-left")  #[b 3. Suscripción:] el modelo de suscripción requiere un pago regular, bien sea mensualmente o anualmente, que permita el completo uso funcional del videojuego. También pueden sugerir posibilidades de actualización periódicas del videojuego, a las cuales se tendrá derecho por haberlo adquirido y mantener constantes los pagos que se sugieren.

            p.texto-blanco.mb-4(data-aos="fade-left")  #[b 4. Publicidad #[i In-App:]]  En este caso, se trata de un modelo de monetización donde la publicidad se presenta constante, sin posibilidades de ser eliminada por el usuario, y que fácilmente puede fusionarse con el contenido para que forme parte de su diseño de nivel. Ejemplo de ello pueden ser los videojuegos donde se pueden observar edificios con vallas alusivas a empresas existentes.

            p.texto-blanco.mb-4(data-aos="fade-left")  #[b 5. #[i Paidmium: Paid] + Oportunidades de monetización adicionales:] en este tipo de modelo, además de pagar por la descarga del videojuego, el usuario tiene la oportunidad de adquirir servicios anexos al videojuego y, obviamente, pagar por ellos. La monetización se logra mediante compras desde el interior de la aplicación y que, básicamente, constituyen mejoras en la experiencia de usuario, por ejemplo, eliminar publicidad o comprar más contenidos o paquetes que le permitan mejorar su desempeño en el juego.

            p.texto-blanco.mb-4(data-aos="fade-left")  #[b 6 .#[i Sponsorship - Publisher:]]  el primer elemento constituye el modelo más generalizado en el desarrollo general de aplicaciones y consiste básicamente en la búsqueda de inversores que financien el proyecto de desarrollo, ofreciendo un modelo de ganancias compartidas. Para la segunda alternativa, la búsqueda de inversores se concentra fundamentalmente en las compañías de publicación que se especializan en la comercialización y difusión de videojuegos, y donde los esquemas de negociación se basan en ganancias compartidas a partir de cierto número de ventas del videojuego.



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
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
