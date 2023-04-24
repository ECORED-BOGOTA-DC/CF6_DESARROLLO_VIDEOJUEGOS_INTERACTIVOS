<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p A continuación se explican conceptos básicos para el diseño de videojuegos, programación de comportamientos básicos y construcción de prototipos. Estos conocimientos serán útiles para planear videojuegos, de acuerdo con procedimientos y requisitos técnicos a partir de los requerimientos, permitiendo así, esquematizar el prototipo físico de las mecánicas del videojuego de acuerdo al concepto.
    
    .row.my-5(data-aos="fade-zoom")
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/11111111" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
