<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Configuración de compilación y plataforma de publicación

    .row
      p Para la configuración de plataforma y jugador, se verán los aspectos esenciales a tener en cuenta para el proceso de configuración de compilación y plataforma de publicación.

    separador

    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Configuración de compilación

    .row  
      p En el siguiente recuadro, se pueden observar los elementos fundamentales a configurar durante el proceso de compilación del videojuego. Cabe resaltar que es necesario determinar los valores de estas variables antes de iniciar con cualquier gestión dentro del proyecto de videojuego, es decir, en el momento de crear la carpeta del proyecto, se deben determinar de antemano estas características:

    .tabla-a.color-acento-botones 
      table
        thead
          tr.text-white
            th Configuración
            th Descripción

        tbody
          tr.bgr-tr.text-center
            th.size-tab <i>Target Platform</i>
            td 

          tr.text-center
            th.size-tab <i>Windows</i>
            td Compilación para Windows

          tr.bgr-tr.text-center
            th.size-tab <i>MacOS X (not available on Linux)</i>
            td Compilación para MacOS

          tr.text-center
            th.size-tab <i>Linux (not available on Mac)</i>
            td Compilación para <i>Linux</i>

          tr.bgr-tr.text-center
            th.size-tab <i>Architecture | Not available on macOS</i>

            td 

          tr.text-center
            th.size-tab <i>x86</i>
            td 32-bit CPU

          tr.bgr-tr.text-center
            th.size-tab <i>x86_64</i>
            td 64-bit CPU

          tr.text-center
            th.size-tab <i>x86 + x86_64 (Universal)</i>
            td All CPU devices for <i>Linux</i>

          tr.bgr-tr.text-center
            th.size-tab <i>Server Build</i>
            td Habilite esta configuración para crear el reproductor para uso del servidor y sin elementos visuales (sin cabeza), sin la necesidad de ninguna opción de línea de comando. Cuando habilita esta configuración, <i>Unity</i> crea scripts administrados con la definición de <i>UNITY_SERVER</i>, lo que significa que puede escribir código específico del servidor para su aplicación. También puede compilar la versión de Windows como una aplicación de consola para acceder a <i>stdin</i> y <i>stdout</i>. Los registros de <i>Unity</i> van a la salida estándar de forma predeterminada.

          tr.text-center
            th.size-tab <i>Copy PDB files (Windows only)</i>
            td Habilite esta configuración para incluir archivos de base de datos de programas de <i>Microsoft</i> (.pdb) en el reproductor independiente integrado. Los archivos .pdb contienen información de depuración de la aplicación que puede utilizar para depurar su aplicación. La copia de archivos .pdb puede aumentar el tamaño de su reproductor, por lo que debe deshabilitar esta configuración para las compilaciones destinadas a la publicación. Esta configuración está deshabilitada de forma predeterminada.

          tr.bgr-tr.text-center
            th.size-tab <i>Create Visual Studio Solution (Windows only)</i>
            td Habilite esta configuración para generar archivos de la solución de Visual Studio para su proyecto, de modo que pueda crear su ejecutable final en Visual Studio.

          tr.text-center
            th.size-tab <i>Create Xcode Project (Mac Only)</i>
            td Habilite esta configuración para generar un proyecto de <i>Xcode</i> para que pueda construir su paquete de aplicación final en <i>Xcode. Xcode</i> tiene soporte integrado para la firma de código y la carga de la aplicación en la <i>Mac App Store</i>.

          tr.bgr-tr.text-center
            th.size-tab <i>Development Build</i>
            td Habilite esta configuración para incluir símbolos de depuración de secuencias de comandos e incluir <i>Profiler</i> en su construcción. Cuando habilita esta configuración, se establece la definición de <i>scripting Development_Build</i>. Debe utilizar esta opción cuando desee probar su aplicación.

          tr.text-center
            th.size-tab <i>Autoconnect profiler</i>
            td Requiere que se habilite la opción <i>Development Build</i>. Cuando se habilita esta configuración, <i>Unity Profiler</i> se conecta automáticamente a su compilación.

          tr.bgr-tr.text-center
            th.size-tab <i>Deep Profiling Support</i>
            td Requiere que se habilite la opción Development Build. Deep Profiling Support permite que <i>Unity</i> Profiler registre datos más detallados, instrumentando cada llamada de función. Habilitar la creación de perfiles profundos puede ralentizar la ejecución del script.

          tr.text-center
            th.size-tab <i>Script debugging</i>
            td Requiere que se habilite la opción <i>Development Build</i>. Cuando se habilita esta configuración, <i>Unity</i> agrega símbolos de depuración a su código de secuencia de comandos.

          tr.bgr-tr.text-center
            th.size-tab <i>Scripts Only Build</i>
            td Requiere que se habilite la opción <i>Development Build</i>. Cuando habilita esta configuración, puede reconstruir solo los scripts para su aplicación, mientras deja intactos los archivos de datos de una compilación que ha ejecutado previamente. La compilación de <i>scripts</i> solo mejora significativamente los tiempos de iteración si solo está cambiando el código en su aplicación. Debe compilar todo el proyecto una vez, antes de poder utilizar esta configuración.

    separador

    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Configuraciones generales de jugador

    .row.mb-4
      p En la siguiente tabla, se pueden observar las configuraciones generales de jugador en términos de las propiedades de pantalla:
          
    .tabla-a.color-acento-botones 
      table
        thead
          tr.text-white
            th Propiedad
            th Función

        tbody
          tr.bgr-tr.text-center
            th.size-tab <i>Fullscreen Mode</i>
            td Elija el modo de pantalla completa. Esto define el modo de ventana predeterminado al inicio.

          tr.text-center
            th.size-tab <i>Fullscreen Window</i>
            td Configure la ventana de su aplicación a la resolución nativa de pantalla completa de la pantalla. #[i Unity] procesa el contenido de la aplicación con la resolución establecida por el #[i script] (o por la selección del usuario cuando se inicia la aplicación construida), pero lo escala para llenar la ventana. Al escalar, #[i Unity] agrega barras negras a la salida renderizada para que coincida con la relación de aspecto elegido en la configuración del reproductor, para que el contenido no se estire. Este proceso se llama formato de pantalla ancha.

          tr.bgr-tr.text-center
            th.size-tab <i>Exclusive Fullscreen (Windows only)</i>
            td Configure su aplicación para mantener el uso exclusivo de pantalla completa de una pantalla. A diferencia de la ventana de pantalla completa, este modo cambia la resolución del sistema operativo de la pantalla para que coincida con la resolución elegida por la aplicación. Esta opción solo es compatible con Windows; en otras plataformas, la configuración vuelve a la ventana de pantalla completa.

          tr.text-center
            th.size-tab <i>Maximized Window (Mac only)</i>
            td Configure la ventana de la aplicación con la definición del sistema operativo de "maximizada". En MacOS, esto significa una ventana de pantalla completa con una barra de menú y un muelle que se ocultan automáticamente. Esta opción solo es compatible con MacOS; en otras plataformas, la configuración vuelve a la ventana de pantalla completa.

          tr.bgr-tr.text-center
            th.size-tab <i>Windowed</i>
            td Configure su aplicación en una ventana móvil estándar, que no sea de pantalla completa, cuyo tamaño depende de la resolución de la aplicación. En este modo, la ventana se puede cambiar de tamaño de forma predeterminada. Para deshabilitar esto, deshabilite la configuración de Ventana de tamaño variable.

          tr.text-center
            th.size-tab <i>Default Is Native Resolution</i>
            td Habilite esta opción para que el juego use la resolución predeterminada utilizada en la máquina de destino. Esta opción no está disponible si el Modo de pantalla completa está configurado en Ventana.

          tr.bgr-tr.text-center
            th.size-tab <i>Default Screen Width</i>
            td Establecer el ancho predeterminado de la pantalla del juego en píxeles. Esta opción solo está disponible si el Modo de pantalla completa está configurado en Ventana.

          tr.text-center
            th.size-tab <i>Default Screen Height</i>
            td Establece la altura predeterminada de la pantalla del juego en píxeles. Esta opción solo está disponible si el Modo de pantalla completa está configurado en Ventana.

          tr.bgr-tr.text-center
            th.size-tab <i>Mac Retina Support</i>
            td Habilite esta opción para habilitar la compatibilidad con pantallas de alta DPI (Retina) en  Mac. Unity lo habilita de forma predeterminada. Esto mejora los proyectos en una pantalla Retina, pero consume algo de recursos cuando está activo. 

          tr.text-center
            th.size-tab <i>Run In background</i>
            td Habilite esta opción para que el juego siga funcionando (en lugar de pausar) si la aplicación pierde el foco.

          tr.bgr-tr.text-center
            th.size-tab <i>Capture Single Screen</i>
            td Habilite esta opción para asegurarse de que los juegos independientes, en el modo de pantalla completa, no oscurezcan el monitor secundario en configuraciones de varios monitores. Esto no es compatible con Mac OS X.

          tr.text-center
            th.size-tab <i>Use Player Log</i>
            td Habilite esta opción para escribir un archivo de registro con información de depuración. Predeterminado a habilitado. Advertencia: si planea enviar su solicitud a la Mac App Store, deje esta opción deshabilitada. Para obtener más información, consulte Publicación en Mac App Store.

          tr.bgr-tr.text-center
            th.size-tab <i>Resizable Window</i>
            td Habilite esta opción para permitir cambiar el tamaño de la ventana del reproductor independiente. Nota: si desactiva esta opción, su aplicación no podrá utilizar el modo de pantalla completa con ventana. 

          tr.text-center
            th.size-tab <i>Visible in Background</i>
            td Habilite esta opción para mostrar la aplicación en segundo plano si se utiliza el modo de pantalla completa con ventana (en Windows).

          tr.bgr-tr.text-center
            th.size-tab <i>Allow Fullscreen Switch</i>
            td Habilite esta opción para permitir que las pulsaciones predeterminadas de las teclas de pantalla completa del sistema operativo cambien entre los modos de pantalla completa y ventana.
            
          tr.text-center
            th.size-tab <i>Force Single Instance</i>
            td Habilite esta opción para restringir los reproductores independientes a una sola instancia en ejecución simultánea.

          tr.bgr-tr.text-center
            th.size-tab <i>Supported Aspect Ratios</i>
            td Habilite cada relación de aspecto que desee que aparezca en el cuadro de diálogo Resolución al inicio (siempre que sean compatibles con el monitor del usuario).



    separador

    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3 Características de jugador en términos de renderizado

          
    .tabla-a.color-acento-botones 
      table
        thead
          tr.text-white
            th Propiedad
            th Función

        tbody
          tr.bgr-tr.text-center
            th.size-tab <i>Color Space</i>
            td Elija qué espacio de color se debe utilizar para el renderizado: Gamma o Lineal.

          tr.text-center
            th.size-tab <i>Auto Graphics API for Windows</i>
            td Habilite esta opción para usar la mejor API de gráficos en la máquina con Windows en la que se ejecuta el juego. Deshabilítela para agregar y eliminar API de gráficos compatibles.

          tr.bgr-tr.text-center
            th.size-tab <i>Auto Graphics API for Mac</i>
            td Habilite esta opción para usar la mejor API de gráficos en la <i>Mac</i> en la que se ejecuta el juego. Deshabilítela para agregar y eliminar API de gráficos compatibles.

          tr.text-center
            th.size-tab <i>Auto Graphics API for Linux</i>
            td Habilite esta opción para usar la mejor API de gráficos en la máquina <i>Linux</i> en la que se ejecuta. Deshabilítela para agregar y eliminar API de gráficos compatibles.

          tr.bgr-tr.text-center
            th.size-tab <i>Color Gamut for Mac</i>
            td Puede agregar o eliminar gamas de colores para que las plataformas <i>Mac</i> independientes las utilicen para la renderización. Haga clic en el icono más (+) para ver una lista de las gamas disponibles. Una gama de colores define una posible gama de colores disponibles para un dispositivo determinado (como un monitor o una pantalla). La gama sRGB es la gama predeterminada (y obligatoria).

          tr.text-center
            th.size-tab <i>Metal Editor Support</i>
            td Habilite esta opción para usar la API de Metal en <i>Unity Editor</i> y desbloquee una iteración de <i>Shader</i> más rápida para apuntar a la API de Metal.

          tr.bgr-tr.text-center
            th.size-tab <i>Metal API Validation</i>
            td Habilite esta opción cuando necesite depurar problemas de <i>Shader</i>. Nota: La validación aumenta el uso de la CPU, por lo tanto, úsela solo para depurar.

          tr.text-center
            th.size-tab <i>Metal Write-Only Backbuffer</i>
            td Permitir un rendimiento mejorado en la orientación del dispositivo no predeterminada. Esto establece el indicador <i>frameBufferOnly</i> en el búfer de retroceso, lo que evita la lectura del búfer de retroceso pero habilita cierta optimización del controlador.

          tr.bgr-tr.text-center
            th.size-tab <i>Memoryless Depth</i>
            td Elija cuándo usar texturas de renderizado sin memoria. Las texturas de renderizado sin memoria se almacenan temporalmente en la memoria del mosaico cuando se renderizan, no en la memoria de la CPU o GPU. Esto reduce el uso de memoria de su aplicación, pero no puede leer ni escribir en estas texturas de renderizado. Nota: Las texturas de renderizado sin memoria solo son compatibles con iOS, tvOS 10.0+ Metal y <i>Vulkan</i>. Las texturas de renderizado están protegidas contra lectura/escritura y se almacenan en la memoria de la CPU o GPU en otras plataformas.

          tr.text-center
            th.size-tab <i>Unused</i>
            td Nunca use la profundidad del búfer de cuadros sin memoria.

          tr.bgr-tr.text-center
            th.size-tab <i>Forced</i>
            td Utilice siempre la profundidad de framebuffer sin memoria.

          tr.text-center
            th.size-tab <i>Automatic</i>
            td Deje que <i>Unity</i> decida cuándo utilizar la profundidad del búfer de tramas sin memoria.

          tr.bgr-tr.text-center
            th.size-tab <i>Static Batching</i>
            td Habilite esta opción para utilizar el procesamiento por lotes estático.

          tr.text-center
            th.size-tab <i>Dynamic Batching</i>
            td Habilite esta opción para usar <i>Dynamic Batching</i> en su compilación (habilitada de forma predeterminada). <b>Nota:</b> el procesamiento por lotes dinámico no tiene ningún efecto cuando una canalización de procesamiento de secuencias de comandos está activa, por lo que esta configuración solo es visible cuando no se establece nada en la configuración Gráficos de activos de canalización de procesamiento de secuencias de comandos.

          tr.bgr-tr.text-center
            th.size-tab <i>Compute Skinning</i>
            td Habilite esta opción para habilitar la máscara de cómputo de la GPU DX11 / ES3, liberando recursos de la CPU.
            
          tr.text-center
            th.size-tab <i>Graphics Jobs</i>
            td Habilite esta opción para indicar a <i>Unity</i> que descargue tareas de gráficos (bucles de procesamiento) en subprocesos de trabajo que se ejecutan en otros núcleos de CPU. Esto tiene como objetivo reducir el tiempo que se pasa en <i>Camera.Render</i> en el hilo principal, que a menudo es un cuello de botella.

          tr.bgr-tr.text-center
            th.size-tab <i>Lightmap Encoding</i>
            td Elija Calidad normal o Alta calidad para configurar la codificación del mapa de luz. Esta configuración afecta el esquema de codificación y el formato de compresión de los mapas de luz.

          tr.text-center
            th.size-tab <i>Lightmap Streaming</i>
            td Habilite esta opción para cargar solo los mapas <i>mip</i> de mapa de luz según sea necesario para representar las cámaras del juego actual. Este valor se aplica a las texturas del mapa de luz a medida que se generan. <b>Nota</b>: Para utilizar esta configuración, debe habilitar la configuración de Calidad de transmisión de texturas.

          tr.bgr-tr.text-center
            th.size-tab <i>Streaming Priority</i>
            td Establezca la prioridad de transmisión del mapa <i>mip</i> de mapa de luz para resolver conflictos de recursos. Estos valores se aplican a las texturas del mapa de luz a medida que se generan. Los números positivos dan mayor prioridad. Los valores válidos oscilan entre –128 y 127.

          tr.text-center
            th.size-tab <i>Frame Timing Stats</i>
            td Habilite esta propiedad para recopilar estadísticas de tiempo de trama de CPU y GPU. Use esto junto con la configuración de la cámara de resolución dinámica para determinar si su aplicación está vinculada a la CPU o GPU.

          tr.bgr-tr.text-center
            th.size-tab <i>Use Display In HDR Mode (Windows Only)</i>
            td Habilite esta casilla de verificación para que el juego cambie automáticamente a la salida del modo HDR cuando se ejecute. Esto solo funciona en pantallas que admitan esta función. Si la pantalla no admite el modo HDR, el juego se ejecuta en modo estándar.

          tr.text-center
            th.size-tab <i>Swap Chain Bit Depth</i>
            td Seleccione el número de bits en cada canal de color para los búferes de cadena de intercambio. Solo disponible si el modo HDR está habilitado.

          tr.bgr-tr.text-center
            th.size-tab <i>Bit Depth 10</i>
            td <i>Unity</i> utilizará el formato de búfer R10G10B10A2 y primarios Rec2020 con codificación ST2084 PQ.

          tr.text-center
            th.size-tab <i>Bit Depth 16</i>
            td <i>Unity</i> utilizará el formato de búfer R16G16B16A16 y primarios Rec709 con color lineal (sin codificación).


</template>

<script>
export default {
  name: 'Tema3',
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
