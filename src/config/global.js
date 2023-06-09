export default {
  global: {
    componenteFormativo: 'Diseño de videojuegos y prototipado',
    descripcionCurso:
      'Se explican conceptos básicos de diseño de videojuegos, programación de comportamientos básicos y construcción de prototipos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'La idea y el concepto de videojuego',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Narrativa, personajes y entorno',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Mecánicas, dinámicas y estéticas',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Lineamientos artísticos',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Monetización',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Algoritmia y lógica de programación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Descripción de la API de <i>Unity</i> (C-Sharp)',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Estructura y sintaxis básica de C-Sharp',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Programación de comportamientos básicos de juego',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Configuración de compilación y plataforma de publicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Configuración de compilación',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Configuraciones generales de jugador',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Características de jugador en términos de renderizado',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Diseño y construcción de prototipo físico de videojuegos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Modelos de mecánica de videojuegos',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Paradigmas de jugabilidad',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Tipologías de prototipado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Prototipo físico',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Prototipo digital',
            hash: 't_5_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_6_228108.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: '<i>Audio Clip</i>',
      significado:
        'Un contenedor para datos de audio en <i>Unity</i>. <i>Unity</i> admite activos de audio mono, estéreo y multicanal (hasta ocho canales). <i>Unity</i> puede importar formatos de archivo de audio .aif, .wav, .mp3 y .ogg, y formatos de módulo de seguimiento .xm, .mod, .it y .s3m.',
    },
    {
      termino: '<i>Asset</i>',
      significado:
        'Cualquier recurso susceptible de ser usado en los juegos y que está contenido en la carpeta de proyecto. Puede provenir de un archivo externo creado en un programa diferente de <i>Unity</i>, como un archivo 3D, un archivo de formato de audio o imagen. También se pueden crear algunos tipos de assets en <i>Unity</i>, como un <i>Animator Controller,</i> un <i>Audio Mixer o una Render Texture.</i>',
    },
    {
      termino: '<i>Asset package</i>',
      significado:
        'Es un conjunto de archivos recursos del proyecto de <i>Unity</i>, que se empaquetan de forma comprimida en un archivo similar a los archivos Zip, con la extensión <i>unitypackage</i>. Los paquetes de recursos son una forma práctica de compartir y reutilizar proyectos y colecciones de activos de <i>Unity</i>.',
    },
    {
      termino: '<i>Asset Server</i>',
      significado:
        '<i>legacy:</i> un sistema de control de activos y versiones, con una interfaz gráfica de usuario integrada en <i>Unity</i>. Permite a los miembros del equipo trabajar juntos en un proyecto en diferentes computadoras.',
    },
    {
      termino: '<i>Asset Store</i>',
      significado:
        'Es una biblioteca donde pueden encontrarse recursos gratuitos o comerciales creados por la comunidad de <i>Unity</i>, organizada por categorías y que abarca diferentes tipos de medios para integrar de manera automática a un proyecto de videojuego.',
    },
    {
      termino: '<i>Asset Store package</i>',
      significado:
        'Colección agrupada de activos disponibles para comprar o descargar en <i>Unity</i> Asset Store, comprimidos y almacenados en un archivo con la extensión <i>.unitypackage</i>, como un paquete de activos. Puede administrar sus paquetes de la tienda de activos en la tienda en línea o a través de la ventana Administrador de paquetes.',
    },
    {
      termino: '<i>Category</i>',
      significado:
        'Categoría <i>Profiler</i> identifica los datos de la carga de trabajo para un subsistema de <i>Unity</i> (por ejemplo, las categorías <i>Rendering, Scripting y Animation</i>). <i>Unity</i> aplica códigos de colores a las categorías para ayudar a distinguir visualmente los tipos de datos en la ventana <i>Profiler</i>.',
    },
    {
      termino: '<i>Compression</i>',
      significado:
        'Es un método de almacenamiento de datos que reduce la cantidad de espacio de almacenamiento que requiere. Consulte Compresión de textura, Compresión de animación, Compresión de audio, Compresión de compilación.',
    },
    {
      termino: '<i>Frustum</i>',
      significado:
        'Es la región del espacio 3D que una cámara en perspectiva puede ver y renderizar. En la vista de Escena, el tronco está representado por una pirámide rectangular truncada con su parte superior en el plano de recorte cercano de la cámara, un plano que limita qué tan cerca puede ver una cámara desde su posición actual. El plano es perpendicular a la dirección de avance (Z) de la cámara.',
    },
    {
      termino: '<i>GameObject</i>',
      significado:
        'Es el objeto fundamental en las escenas de <i>Unity</i>, que puede representar personajes, accesorios, escenarios, cámaras, <i>waypoints</i> y más. La funcionalidad de un <i>GameObject</i> está definida por los Componentes adjuntos a él.',
    },
    {
      termino: '<i>Level of Detail</i>',
      significado:
        'La técnica de nivel de detalle (LOD) es una optimización que reduce la cantidad de triángulos que <i>Unity</i> tiene que representar para un <i>GameObject</i> cuando aumenta su distancia de la cámara.',
    },
    {
      termino: '<i>Model</i>',
      significado:
        'Es una representación de modelo 3D de un objeto, como un personaje, un edificio o un mueble.',
    },
    {
      termino: '<i>Model file</i>',
      significado:
        'Un archivo que contiene datos 3D, que pueden incluir definiciones de mallas, huesos, animación, materiales y texturas.',
    },
    {
      termino: '<i>Package</i>',
      significado:
        'Es un contenedor que almacena varios tipos de características y activos para <i>Unity</i>, incluidas las herramientas y bibliotecas de Editor o <i>Runtime</i>, colecciones de activos y plantillas de proyectos. Los paquetes son unidades independientes que <i>Unity Package Manager</i> puede compartir entre los proyectos de Unity. La mayoría de las veces se denominan paquetes, pero ocasionalmente se denominan paquetes <i>Unity Package Manager</i> (UPM).',
    },
    {
      termino: '<i>Prefab</i>',
      significado:
        'Es un tipo de recurso que le permite contener un <i>GameObject</i> completo, con componentes y propiedades. Este tipo de recurso puede ser utilizado una y otra vez a través de copias o instancias.',
    },
    {
      termino: '<i>Profiler</i>',
      significado:
        'Es la ventana que te ayuda a optimizar tu juego. Muestra cuánto tiempo se pasa en las distintas áreas de su juego. Por ejemplo, puede informar el porcentaje de tiempo dedicado a renderizar, animar o en la lógica de su juego.',
    },
    {
      termino: '<i>Project</i>',
      significado:
        'En <i>Unity</i>, se usa un proyecto para diseñar y desarrollar un juego. Un proyecto almacena todos los archivos relacionados con un juego, como el activo y los archivos de escena.',
    },
    {
      termino: '<i>Project Settings</i>',
      significado:
        'Amplia colección de configuraciones que le permiten configurar cómo se comportan Física, Audio, Redes, Gráficos, Entrada y muchas otras áreas de su proyecto.',
    },
    {
      termino: '<i>Sprite Atlas</i>',
      significado:
        'Textura que se compone de varias texturas más pequeñas. También se conoce como atlas de texturas, <i>sprite</i> de imagen, hoja de <i>sprite</i> o textura empaquetada.',
    },
    {
      termino: '<i>State Machine</i>',
      significado:
        'Es el conjunto de estados en un <i>Animator Controller</i> en el que puede estar un personaje o <i>GameObject</i> animado, junto con un conjunto de transiciones entre esos estados y una variable para recordar el estado actual. Los estados disponibles dependerán del tipo de juego, pero los estados típicos incluyen cosas como inactivo, caminar, correr y saltar.',
    },
    {
      termino: '<i>State Machine Behaviour</i>',
      significado:
        'Es la secuencia de comandos que se adjunta a un estado dentro de una máquina de estado para controlar lo que sucede cuando la máquina de estado entra, sale o permanece dentro de un estado, como reproducir sonidos cuando se ingresan los estados.',
    },
  ],
  referencias: [
    {
      referencia:
        'Gibson, J. (2014). <i>Introduction to Game Design, Prototyping, and Development: From Concept to Playable Game with Unity and C#.</i> Addison-Wesley Educational Publishers Inc.',
      link: '',
    },
    {
      referencia:
        'Brathwaite, B. y Schreiber, I. (2009). <i>Challenges for Game Designers.</i> Charles River Media.',
      link: '',
    },
    {
      referencia:
        'Hartt, C. (2019). <i>Connecting Values to Action: Non-Corporeal Actants and Choice.</i> Emerald Publishing Limited.',
      link: '',
    },
    {
      referencia:
        'Mernard, M. (2011). <i>Game Development with Unity.</i> Cengage Learning PTR.',
      link: '',
    },
    {
      referencia:
        'Okita, A. (2014). <i>Learning C# Programming with Unity 3D.</i> Routledge.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricía Aristizábal Gutiérres',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Xiomara Becerra Aldana',
          cargo: 'Instructora Ambiental',
          centro: 'Centro de Gestión Industrial',
        },
        {
          nombre: 'Lubin Andrés Hernández Sanabria',
          cargo: 'Instructor',
          centro: 'Centro de Gestión Industrial',
        },
        {
          nombre: 'Jesús Ricardo Arias Munevar',
          cargo: 'Instructor',
          centro: 'Centro de Gestión Industrial',
        },
        {
          nombre: 'Javier Ricardo Luna Pineda',
          cargo: 'Diseñador Instruccional',
          centro: 'Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Evaluador Instruccional',
          centro: 'Centro de diseño y metrología',
        },
        {
          nombre: 'Rafael Neftali Lizcano Reyes',
          cargo: 'Asesor Pedagógico',
          centro: 'Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Martha Isabel Martínez Vargas',
          cargo: 'Productora audiovisual',
          centro: 'Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Gloria Amparo López Escudero',
          cargo: 'Adecuadora instruccional - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Metodólogo para la formación virtual - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesor metodológico',
          centro:
            'Centro de gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora web',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validadora de recursos educativos',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validadora de recursos educativos',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
