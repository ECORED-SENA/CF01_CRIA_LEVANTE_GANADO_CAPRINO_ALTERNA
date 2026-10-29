<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Sistemas de producción y alimentación caprina',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la apropiación de conceptos sobre sistemas de producción, razas, Buenas Prácticas Ganaderas, bienestar, bioseguridad, nutrición y alimentación caprina.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
{
          id: 1,
          texto: '¿Qué integra un sistema de producción caprina?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Recursos naturales, humanos, tecnológicos, económicos y administrativos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solo animales e infraestructura.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Únicamente alimentación y sanidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo recursos naturales y comerciales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué caracteriza principalmente al sistema extensivo?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Confinamiento permanente y alta tecnificación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pastoreo con mínima suplementación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Alimentación balanceada sin pastoreo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Árboles y arbustos integrados obligatoriamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué sistema combina pastoreo con suplementación y mayor control sanitario?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Extensivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Semiintensivo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Estabulado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Orgánico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué sistema integra árboles, arbustos forrajeros, pasturas y animales?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Intensivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Extensivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Silvopastoril.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Estabulado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Cuál raza se presenta como representativa de la producción de carne?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Saanen.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Toggenburg.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Boer.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La Mancha.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué raza se identifica principalmente como de doble propósito?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Anglo Nubian.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Boer.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Saanen.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Toggenburg.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué buscan garantizar las Buenas Prácticas Ganaderas?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Producción segura, sostenible y eficiente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Mayor confinamiento de los animales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Uso exclusivo de concentrados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminación de registros productivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Cuál es un requisito para implementar las BPG?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar el plan sanitario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mantener registros actualizados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Restringir permanentemente el agua.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar la identificación de animales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué condición contribuye directamente al bienestar animal?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Agua limpia y permanente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Exposición climática extrema.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Manejo que incremente el estrés.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Atención sanitaria tardía.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Cuál es el propósito principal de la bioseguridad?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar la carga animal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir el riesgo de agentes infecciosos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir la alimentación balanceada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar los controles de acceso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué medida de bioseguridad se aplica a animales nuevos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cuarentena.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Pastoreo inmediato.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mezcla directa con el hato.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Supresión del registro de ingreso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿De qué factores dependen los requerimientos nutricionales de los caprinos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo de la raza.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Edad, peso, producción y estado fisiológico.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Únicamente del clima.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo del tipo de instalación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Qué nutriente debe mantenerse disponible permanentemente?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Agua.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Melaza.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cereal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Concentrado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué característica distingue a los forrajes?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Su contenido de fibra.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Su ausencia de nutrientes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Su uso exclusivo en lactancia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Su origen únicamente mineral.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Cuándo se utilizan los concentrados en la alimentación caprina?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cuando los forrajes no cubren los requerimientos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Para reemplazar siempre el agua.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo durante la cuarentena.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para eliminar la base forrajera.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Para qué se conservan forrajes como heno y ensilaje?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para periodos de sequía o baja disponibilidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Para sustituir permanentemente el agua.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para eliminar la suplementación mineral.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para aumentar la exposición sanitaria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿En qué consiste la formulación de raciones?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Combinar ingredientes para satisfacer requerimientos nutricionales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Suministrar un único alimento a todo el hato.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar el seguimiento de la condición corporal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Usar concentrados sin considerar los forrajes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Cuándo adquiere especial importancia la suplementación nutricional?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cuando los forrajes no aportan suficientes nutrientes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cuando la dieta ya excede los requerimientos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cuando se elimina el seguimiento nutricional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cuando se restringe el acceso al agua.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Qué puede ocasionar una alimentación desequilibrada?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Trastornos metabólicos y nutricionales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Mayor inocuidad automáticamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminación de necesidades sanitarias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Independencia del estado fisiológico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Qué condición debe cumplir el suministro de agua?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disponibilidad continua, suficiente y accesible.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Suministro ocasional durante el día.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Acceso exclusivo para animales adultos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Disponibilidad solo después de alimentarse.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        }
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
