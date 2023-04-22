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
          p.mb-0 #[b Figura 3] Ventana de referencia de script

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
        .cajon.color-primario.p-4
          p.mb-0 La anatomía básica de un script en C Sharp (C#) está constituida fundamentalmente de variables, funciones y clases.


    .row.justify-content-center.mb-5
      .col-lg-6
        p Las variables son elementos en la sintaxis del programa que tienen la capacidad de contener valores e información referente a determinados objetos y tienen una utilidad importante en función de esta información o de estos valores. Los nombres de las variables deben escribirse en minúscula. 
        p Las funciones son pequeñas estructuras de código que realizan tareas específicas y permiten comparar y manipular variables. Los nombres de las funciones comienzan con la primera letra en mayúscula. El código de programación se organiza en funciones para que sea fácilmente utilizable por el programa.
        p Las clases son estructuras de código que permiten organizar conjuntos de variables y funciones, que funcionan como plantillas, definiendo propiedades de un objeto que pueden ser utilizadas de diferentes formas. Escribir códigos de programación es, en esencia, una labor de comparación entre objetos, sus comportamientos, estados y valores actuales; determinando resultados lógicos y secuencias lógicas.

      .col-lg-6.mt-5
        figure
          img(src="@/assets/curso/temas/tema2/img5.svg", alt="alt")      

    .row.mb-3
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon1
              img(src='@/assets/curso/temas/tema1/img2.svg', alt='')
          .list__txt
            h3.mb-0.tv.margin-icon Variables

    .row.justify-content-center.mb-5
      p.mb-5 En Unity, los archivos de programación se deben comenzar, por lo general, con la mención o declaración de las variables, estableciendo si serán visibles o no, es decir públicas o privadas, al mismo tiempo que el tipo y el nombre de la variable, en este orden de secuencia.

      .col-lg-6
        figure
          img(src="@/assets/curso/temas/tema2/img6.svg", alt="alt")      

    .row.mb-5
      .tarjeta.tarjeta--gris.p-3.p-lg-5.tema2-bg1
        .row.justify-content-center
          .col-lg-5.mt-5
            p Al declarar variables visibles o de forma pública, pueden ser observables a través del inspector del motor y es una manera muy sencilla de poder controlarlas, para así modificar sus valores y por lo tanto su comportamiento. Cuando la variable es declarada como privada, no puede verse a través del inspector y sólo puede cambiarse su valor a través de la intervención del código de programación.
            p Además, cuando se hacen públicas las variables, se puede acceder a ellas a través de otros scripts u otras clases, permitiendo la interacción entre diferentes scripts y haciendo más dinámica la jugabilidad. 
            p Además de este carácter público o privado, también está el tipo de variable, es decir, la especificación del tipo de información que puede almacenar y, por lo tanto, el tipo de valor que podría mantener en memoria. En términos generales, es necesario especificar el tipo de variable que se está declarando para poder indicarle al motor cómo debe manejar la información o valor que contenga.

          .col-lg-5
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 4] Panel del inspector
            figure
              img(src="@/assets/curso/temas/tema2/img7.svg", alt="alt")    

    .row.mb-5
      p #[b Control de variables en el Inspector de Unity:] es importante que las variables tengan un nombre específico, de acuerdo con la información a contener o almacenar, y que al mismo tiempo pueda ser diferenciable de las demás variables que pueda llegar a tener el script. Al mismo tiempo, tener en cuenta que la variable no se puede nombrar con un número al inicio, ni contener espacios vacíos. 
      p En la denominación de una variable se suele utilizar un estilo o convención de nomenclatura que es  cameICase. Esta forma de nombrar la variable  comienza con una letra en minúscula y, si se trata de parejas de palabras, se escriben unidas, y la primera letra de la segunda palabra se escribe en mayúsculas, por ejemplo: “myLight”.
      p Tal  cómo puede observarse en la siguiente imagen, Unity permite, una vez compilado el código, ver los nombres de las variables separados en el inspector.

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 5] Panel de inspector - componente script   


        figure
          img(src="@/assets/curso/temas/tema2/img8.svg", alt="alt")        

    .row.mb-3
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon1
              img(src='@/assets/curso/temas/tema1/img2.svg', alt='')
          .list__txt
            h3.mb-0.tv.margin-icon Funciones

    .row.justify-content-center.mb-5
      p.mb-5 Los scripts permiten controlar variables a través de funciones. En términos generales, las funciones más utilizadas se ejecutan de manera automática en el motor, sin embargo, es posible también indicar en qué momento se pueden ejecutar estas funciones de manera controlada. 

      .col-lg-6
        figure
          img(src="@/assets/curso/temas/tema2/img9.svg", alt="alt")      

    .row.mb-5
      p Las principales funciones en Unity son:

    .row.mb-5
      .col-lg-6
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema1/icono2.svg', alt='')
          .list__txt
            p.mb-0.tv.margin-icon #[b #[i Awake:]] Se ejecuta sólo una vez en el momento de iniciarse el objeto del juego que contenga el script. Hay que tener en cuenta que esta función se ejecuta siempre y cuando el objeto de juegos se encuentre inactivo, aún cuando no esté habilitado a través del editor.

        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema1/icono2.svg', alt='')
          .list__txt
            p.mb-0.tv.margin-icon #[b #[i Start:]] De la misma manera que la función anterior, la función #[i Start] se ejecutará si el GameObject que tiene asignado el script está activo, siempre y cuando el componente de script esté habilitado.

        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema1/icono2.svg', alt='')
          .list__txt
            p.mb-0.tv.margin-icon #[b #[i Update:]] Esta función se ejecuta una vez cada fotograma y es la función donde se escribe la generalidad de la lógica que se programa y establece para ese script específico. Vale decir que, al ejecutarse una vez cada fotograma, contendría instrucciones que siempre estarán operando, siempre y cuando así se establezca o suceda algo en específico.

        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema1/icono2.svg', alt='')
          .list__txt
            p.mb-0.tv.margin-icon #[b #[i FixedUpdate:]]  esta función se utiliza sobre todo en efectos de física o efectos de animación, y tiene como fin poder ejecutar relativas acciones independientes de los fotogramas por segundo, de tal manera que el efecto o la animación sea más fluido y eficiente.

        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema1/icono2.svg', alt='')
          .list__txt
            p.mb-0.tv.margin-icon #[b #[i LateUpdate:]]  Esta función se asemeja a #[i Update], pero #[i LateUpdate] se ejecuta al final del #[i frame] o cuadro. Básicamente, el motor utilizará esta función #[i LateUpdate] para ejecutar acciones actualizadas hasta el final del #[i frame.]

      .col-lg-6.mt-5
        figure
          img(src='@/assets/curso/temas/tema2/img10.svg', alt='alt')

    
    .row.justify-content-center.mb-5
      p.mb-5 Al escribir una función, es importante recordar que debe empezar por el tipo de función seguido del nombre de la función, escribiendo la primera letra del nombre en mayúscula, seguido de los parámetros entre paréntesis (si corresponde). El cuerpo de la función, es decir, las acciones que se realizan, se escriben entre llaves o corchetes:

      .col-lg-6.mb-5
        figure
          img(src="@/assets/curso/temas/tema2/img11.svg", alt="alt")

      p.text-center.mb-5 ¿Cómo se llama a esta función?

      .col-lg-6.mb-5
        figure
          img(src="@/assets/curso/temas/tema2/img12.svg", alt="alt") 

      p Las funciones pueden realizar cálculos y posteriormente presentar un valor, sin embargo, pueden procesar información y no obtener de la función ninguna respuesta. Estas funciones son de tipo #[i “void”.]

    .row.mb-3
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon1
              img(src='@/assets/curso/temas/tema1/img2.svg', alt='')
          .list__txt
            h3.mb-0.tv.margin-icon Clases

    .row.justify-content-center.mb-5
      p.mb-5 Son paquetes o conjuntos de variables y funciones. En términos generales, un archivo de #[i script] es en sí mismo una clase y la clase debe tener el mismo nombre del #[i script:]
      
      .col-lg-6.mb-5
        figure
          img(src="@/assets/curso/temas/tema2/img13.svg", alt="alt")
      
      p.mb-4 Por otro lado, una vez el #[i script] se integra a un #[i GameObject], debe derivarse de la clase de base,  llamada #[i MonoBehaviour.] Las clases también pueden ser públicas o privadas.
      p.mb-5 En Unity, se pueden crear clases personalizadas, como en el siguiente ejemplo, y deben solicitarse de manera serializada, lo que significa que se convertirán en datos digeribles y comprensibles por el motor, de tal manera que puedan también observarse y hacerse visibles en el inspector.

      .col-lg-6.mb-5
        figure
          img(src="@/assets/curso/temas/tema2/img14.svg", alt="alt")

    .row.mb-5
      .cajon.color-primario.p-4
        p.mb-0 Las funciones, sus variables y las estructuras de clases son fundamentales para comprender la manera en la que se escribe código de programación en el motor de Unity.

    separador

    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.3 Programación de comportamientos básicos de juego

    .row.mb-5
      p Los videojuegos, en su jugabilidad, y específicamente las mecánicas de videojuego, se relacionan directamente con los procesos de codificación o programación de comportamientos. Desde un ejemplo práctico, se verá cómo se plantea una lógica de programación basada en tres mecánicas básicas: movimiento, colisión y premio / castigo.

    .row.justify-content-center.my-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-5
          p.mb-0 #[b Figura 6] Ventana de gameplay

        figure
          img(src="@/assets/curso/temas/tema2/img15.svg", alt="alt")




















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
