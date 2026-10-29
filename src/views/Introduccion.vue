<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      .row.justify-content-center.align-items-center.mb-3
        .col-xl.mb-4.mb-lg-0
          .caja-1(data-aos="fade-right")
            p.mb-0 La producción caprina constituye una actividad pecuaria que integra aspectos productivos, sanitarios, nutricionales y de manejo para obtener leche, carne y otros productos derivados. Su desarrollo requiere seleccionar sistemas de producción y razas acordes con las condiciones de la explotación, además de disponer de instalaciones, prácticas de manejo y recursos que favorezcan el desempeño de los animales.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/intro/img1.png', alt='' style="max-width: 500px").m-auto
      .row.justify-content-center.align-items-center.mb-3
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/intro/img2.png', alt=''  style="max-width: 500px").m-auto
        .col-xl
          .caja-1.color-1(data-aos="fade-left")
            p.mb-0 La aplicación de las Buenas Prácticas Ganaderas (BPG), el bienestar animal y la bioseguridad permite fortalecer la gestión del sistema productivo caprino. Estos componentes comprenden medidas relacionadas con la sanidad, el manejo humanitario, la prevención de enfermedades, la trazabilidad, la gestión ambiental y el cumplimiento de la normatividad vigente.
      p.mb-0 Asimismo, la alimentación y nutrición desempeñan un papel fundamental en la salud, el crecimiento, la reproducción y la productividad del hato. La identificación de los requerimientos nutricionales, la selección de alimentos, la formulación de raciones, la suplementación y el suministro permanente de agua de calidad permiten aprovechar adecuadamente los recursos disponibles y contribuir a una producción caprina eficiente y sostenible.

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
