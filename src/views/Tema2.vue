<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Alimentación y nutrición del ganado caprino
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.ajuste-1(data-aos="fade-right")
            p.mb-0 La #[b alimentación y nutrición del ganado caprino] influyen directamente en la productividad, la reproducción, la sanidad y el bienestar animal. Un programa nutricional adecuado debe cubrir los requerimientos de mantenimiento, crecimiento, gestación, lactancia y producción, de acuerdo con la edad, el estado fisiológico, el sistema productivo y la disponibilidad de recursos forrajeros.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img1.png', alt='' style="max-width: 400px").m-auto
      p.mb-5 La planificación alimentaria también debe considerar la calidad e inocuidad de los alimentos, el suministro permanente de agua, el aprovechamiento de los recursos disponibles y la aplicación de las #[b Buenas Prácticas Ganaderas (BPG)] y la normatividad vigente.
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Requerimientos nutricionales
      .caja-3(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t2/img2.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-3_p
            p Los #[b requerimientos nutricionales] corresponden a la cantidad de nutrientes que un caprino necesita diariamente para mantener sus funciones vitales, crecer, reproducirse y producir leche o carne. Estos requerimientos varían según la edad, el peso corporal, la raza, el nivel de producción, el estado fisiológico y las condiciones ambientales.
            p.mb-0 Una nutrición balanceada favorece el bienestar animal, fortalece el sistema inmunológico, mejora los indicadores productivos y reproductivos y disminuye la incidencia de trastornos metabólicos y nutricionales.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Importancia de la nutrición
      p.mb-5 La nutrición adecuada constituye una base fundamental de la producción caprina porque influye en la salud, el crecimiento, la reproducción y la rentabilidad del sistema productivo. Sus principales aportes son:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img3.png", alt="" style="width: 400px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Crecimiento y desarrollo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Una alimentación adecuada favorece el crecimiento de los animales y permite atender las necesidades nutricionales asociadas con el desarrollo corporal.
            .row(titulo="Producción").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El aporte equilibrado de nutrientes contribuye a mantener la producción de leche y carne de acuerdo con la capacidad productiva y el estado fisiológico de los animales.
            .row(titulo="Reproducción").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Una nutrición adecuada favorece la eficiencia reproductiva y contribuye al mantenimiento de una condición corporal acorde con las diferentes etapas fisiológicas.
            .row(titulo="Salud").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El suministro apropiado de nutrientes fortalece el sistema inmunológico y contribuye a disminuir la presentación de trastornos relacionados con deficiencias o desequilibrios nutricionales.
            .row(titulo="Bienestar animal").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Una dieta ajustada a los requerimientos contribuye a mantener una condición corporal adecuada y favorece el bienestar de los animales.
            .row(titulo="Eficiencia y rentabilidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La planificación de la alimentación permite optimizar el aprovechamiento de los recursos forrajeros y contribuir a la rentabilidad de la explotación.
      p.mb-5 Una alimentación deficiente puede ocasionar pérdida de peso, retraso en el crecimiento, disminución de la fertilidad, baja producción de leche, mayor susceptibilidad a enfermedades y pérdidas económicas.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Nutrientes esenciales
      p.mb-5 Los caprinos requieren una dieta equilibrada que aporte los nutrientes indispensables para el funcionamiento del organismo. Cada nutriente cumple funciones específicas y debe obtenerse mediante fuentes apropiadas dentro del programa de alimentación.
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Agua
                  p.mb-0 Participa en el transporte de nutrientes, la regulación de la temperatura y la digestión. Debe suministrarse limpia y mantenerse disponible permanentemente.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Energía
                  p.mb-0 Es necesaria para el mantenimiento, el crecimiento, la reproducción y la producción. Puede obtenerse de pastos, forrajes, cereales y concentrados.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Proteínas
                  p.mb-0 Participan en la formación de músculos, tejidos, leche y enzimas. Entre sus fuentes se encuentran las leguminosas, las tortas proteicas y los concentrados.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Carbohidratos
                  p.mb-0 Constituyen una fuente importante de energía para el animal. Se encuentran principalmente en gramíneas, forrajes y cereales utilizados en la dieta.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Grasas
                  p.mb-0 Funcionan como reserva energética y participan en la absorción de vitaminas. Pueden suministrarse mediante semillas oleaginosas y suplementos energéticos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img8.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Vitaminas
                  p.mb-0 Intervienen en la regulación de procesos metabólicos, el crecimiento y la inmunidad. Pueden aportarse mediante forrajes verdes, sales mineralizadas y suplementos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img9.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Minerales
                  p.mb-0 Participan en la formación ósea, la reproducción, el crecimiento y la producción. Sus fuentes incluyen sales mineralizadas, bloques nutricionales y suplementos minerales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img10.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Dentro del balance nutricional, el #[b agua] constituye un nutriente indispensable y debe permanecer disponible. Asimismo, es necesario mantener un equilibrio entre energía y proteína y prevenir deficiencias o excesos de vitaminas y minerales que puedan afectar el crecimiento, la fertilidad y la producción.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Requerimientos según la etapa fisiológica
      p.mb-5 Las necesidades nutricionales cambian según la etapa productiva y fisiológica del animal. Por esta razón, la alimentación debe ajustarse a cada categoría para atender sus requerimientos y favorecer un desempeño adecuado.
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Cabritos
                  p.mb-0 La alimentación debe favorecer el crecimiento y desarrollo. Comprende el consumo de calostro, leche, concentrado iniciador y forrajes de alta calidad.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img11.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Animales en crecimiento
                  p.mb-0 El objetivo es favorecer el desarrollo muscular y óseo mediante una dieta balanceada que aporte proteína, energía y minerales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img12.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Hembras gestantes
                  p.mb-0 La alimentación debe atender el desarrollo fetal y la preparación para la lactancia. Durante el último tercio de gestación aumentan las necesidades de energía y proteína.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img13.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Hembras en lactancia
                  p.mb-0 Requieren un mayor aporte de energía, proteína, minerales y agua para atender las demandas asociadas con la producción de leche.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img14.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Machos reproductores
                  p.mb-0 La alimentación debe contribuir al mantenimiento de la fertilidad y de una condición corporal adecuada, evitando tanto la obesidad como la desnutrición.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img15.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Animales de ceba
                  p.mb-0 La alimentación se orienta a favorecer la ganancia diaria de peso mediante dietas energéticas con un balance adecuado de nutrientes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img16.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 El ajuste de la alimentación a cada etapa fisiológica contribuye a mejorar el desempeño productivo y a disminuir el riesgo de problemas nutricionales y metabólicos.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Factores que afectan los requerimientos nutricionales
      p.mb-5 Los requerimientos nutricionales no son iguales para todos los animales. Su determinación debe considerar factores propios del caprino, las condiciones ambientales, la disponibilidad de alimentos y las características del sistema productivo. Los #[b principales factores que influyen en la productividad del sistema caprino] y sus efectos se presentan a continuación:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img3.png", alt="" style="width: 400px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Edad y peso corporal").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los animales jóvenes presentan necesidades asociadas con el crecimiento y requieren aportes adecuados de proteína y energía. El peso corporal también influye en la cantidad de nutrientes requerida.
            .row(titulo="Raza y nivel de producción").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Las características genéticas y la capacidad productiva modifican las necesidades nutricionales, especialmente en animales destinados a la producción de leche o carne.
            .row(titulo="Gestación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Las necesidades nutricionales aumentan durante la gestación, particularmente al final de la preñez, debido al desarrollo fetal y la preparación para la lactancia.
            .row(titulo="Lactancia").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Constituye una etapa de elevada demanda nutricional, especialmente de energía, proteína y agua, debido a los requerimientos asociados con la producción de leche.
            .row(titulo="Condición corporal").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite orientar los ajustes de la alimentación y determinar si el aporte nutricional corresponde con las necesidades y el estado productivo del animal.
            .row(titulo="Forrajes disponibles").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La calidad, cantidad y disponibilidad estacional de los forrajes determinan el aporte de nutrientes y la necesidad de implementar estrategias de suplementación.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Sistema de producción").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los sistemas extensivos, semiintensivos e intensivos presentan diferentes condiciones de alimentación, disponibilidad de recursos y niveles de manejo.
            .row(titulo="Clima").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Las condiciones ambientales, especialmente el frío y el calor extremos, pueden modificar el consumo y las necesidades energéticas de los animales.
            .row(titulo="Estado sanitario").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Las enfermedades y el parasitismo pueden disminuir el consumo de alimento e incrementar las necesidades nutricionales asociadas con la recuperación.
            .row(titulo="Estrés").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Las situaciones de estrés derivadas del manejo o el transporte pueden modificar el consumo y afectar el aprovechamiento de los nutrientes.
            .row(titulo="Disponibilidad de agua").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El acceso permanente al agua es indispensable para el consumo de alimento, la digestión y el mantenimiento de las funciones fisiológicas.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img17.png", alt="" style="width: 500px").m-auto
      p.mb-0 La alimentación debe formularse de acuerdo con la categoría y el estado fisiológico, ajustarse a la disponibilidad estacional de los recursos y complementarse con el seguimiento de la condición corporal y la suplementación mineral y vitamínica cuando corresponda. Estas acciones deben integrarse con los programas de sanidad, bienestar animal y #[b Buenas Prácticas Ganaderas (BPG)].
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Alimentos para caprinos
      p.mb-5 Los #[b alimentos para caprinos] deben aportar los nutrientes necesarios para satisfacer los requerimientos de mantenimiento, crecimiento, reproducción y producción. Su selección debe considerar la calidad, la inocuidad, la composición nutricional, la disponibilidad de recursos y las condiciones del sistema productivo.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Clasificación de los alimentos
      p.mb-5 A continuación, se presenta un recurso educativo sobre la clasificación de los alimentos utilizados en la alimentación caprina, de acuerdo con su composición nutricional y la función que cumplen dentro de la dieta.
      .row.align-items-center.m-0.mb-5
        .col-xl
          .row.align-items-center.justify-content-center.caja-7(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t2/img18.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="&quot;Clasificación de los alimentos en la alimentación caprina&quot;"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t2/img19.png" style="max-width: 510px").m-auto
      .caja-8.mb-5(data-aos="fade-right")   
        h4.mb-0 Forrajes
      p.mb-5 Los #[b forrajes] constituyen la base de la alimentación caprina debido a su aporte de fibra efectiva, indispensable para el funcionamiento del rumen. Su calidad y disponibilidad influyen directamente en el aporte nutricional de la dieta. Los principales recursos forrajeros incluidos son:
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t2/img20.png', alt=''  style="max-width: 380px").m-auto
        .col-xl
          .caja-2.color-5.ajuste-2(data-aos="fade-left")
            .row.align-items-center
              .col-xl-6.mb-4.mb-lg-0
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Pasto Brachiaria. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Pasto Estrella. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Guinea. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Angleton. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Kikuyo, en zonas frías. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Pasto Elefante. 
              .col-xl-6
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Pastos de corte. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Alfalfa. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Leucaena. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Kudzu. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Centrosema. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Clitoria. 
      p.mb-5 Los forrajes deben suministrarse en condiciones adecuadas de calidad. Se recomienda utilizar material joven, evitar recursos contaminados o con mohos y planificar su conservación para mantener disponibilidad durante las épocas de menor producción.
      .caja-8.mb-5(data-aos="fade-right")   
        h4.mb-0 Arbustos y bancos de proteína
      p.mb-5 Los #[b arbustos forrajeros y bancos de proteína] constituyen recursos para complementar la alimentación, especialmente durante periodos en los que disminuyen la cantidad o calidad de los forrajes disponibles. Las #[b principales especies utilizadas en la alimentación caprina] y sus aportes nutricionales se presentan a continuación:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Leucaena (#[i Leucaena leucocephala])
                  p.mb-0 Es una de las especies incluidas como recurso para bancos de proteína y suplementación forrajera, debido a su aporte proteico dentro de la alimentación caprina.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img21.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Botón de oro (#[i Tithonia diversifolia])
                  p.mb-0 Se emplea como arbusto forrajero y puede incorporarse como recurso complementario para mejorar el aporte nutricional de la dieta.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img22.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Matarratón (#[i Gliricidia sepium])
                  p.mb-0 Se incluye entre las especies utilizadas como fuente forrajera y proteica para complementar la alimentación de los caprinos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img23.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Morera (#[i Morus alba])
                  p.mb-0 Puede utilizarse como recurso forrajero dentro de estrategias destinadas a complementar el suministro de proteína y mejorar la calidad de la dieta.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img24.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Nacedero (#[i Trichanthera gigantea])
                  p.mb-0 Forma parte de los recursos arbustivos empleados para complementar la alimentación y fortalecer la disponibilidad de forraje dentro del sistema productivo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img25.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 El uso de estos recursos puede aportar proteína, favorecer la digestibilidad, contribuir a la producción de leche y carne y reducir parcialmente la dependencia de concentrados.
      .caja-8.mb-5(data-aos="fade-right")   
        h4.mb-0 Concentrados
      p.mb-5 Los #[b concentrados] complementan la alimentación cuando los forrajes disponibles no cubren completamente los requerimientos nutricionales. Entre los ingredientes utilizados se encuentran maíz, sorgo, salvado de trigo, afrecho de arroz, harina de soya, palmiste y melaza. Su utilización debe responder a las necesidades particulares de los animales. 
      .row.justify-content-center.align-items-center.mb-5
        .col-xl
          .caja-2.color-5.ajuste-4(data-aos="fade-right")
            p Se emplean principalmente en:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | Cabritos. 
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | Hembras en lactancia. 
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | Reproductores. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Animales en ceba. 
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img26.png', alt=''  style="max-width: 800px").m-auto
      p.mb-5 El suministro de concentrados debe integrarse con la base forrajera y ajustarse al estado fisiológico, nivel productivo y requerimientos nutricionales de cada categoría.
      .caja-8.mb-5(data-aos="fade-right")   
        h4.mb-0 Suplementos minerales y vitamínicos
      p.mb-5 Los #[b minerales y vitaminas] participan en diferentes procesos fisiológicos y metabólicos, por lo que su suministro debe formar parte de una alimentación equilibrada. Los principales nutrientes incluidos en la suplementación son:
      .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
        .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5.mb-4.mb-lg-0.text-white
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t2/img27.svg', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 Minerales
          p.mb-0 Incluyen calcio, fósforo, magnesio, sodio, zinc, cobre y selenio. Participan en procesos relacionados con el crecimiento, la reproducción, la formación ósea y el funcionamiento del organismo.
        .col-xl-6.col-md-10.tarjeta.color-primario.p-5
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t2/img28.svg', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 Vitaminas
          p.mb-0 Se destacan las vitaminas A, D y E, cuya disponibilidad debe considerarse dentro de la planificación nutricional de acuerdo con las características de la dieta.
      p.mb-5 Las sales mineralizadas deben permanecer disponibles según el programa de alimentación. La suplementación debe ajustarse con base en la composición de los recursos utilizados y, cuando corresponda, en los análisis de suelos y forrajes, evitando tanto deficiencias como excesos.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Conservación de alimentos: heno y ensilaje
      p.mb-5 La #[b conservación de forrajes] permite mantener reservas de alimento para periodos de sequía o baja disponibilidad. Entre las alternativas incluidas se encuentran el heno y el ensilaje:
      .row.justify-content-center.mb-5
        .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-4.h-100.text-white.color-4
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img29.png', alt="" ).m-auto
              h4 Heno
              .caja-4_p
                p.mb-0 Se obtiene mediante la deshidratación del forraje hasta alcanzar aproximadamente un #[b 15 % de humedad]. Facilita el almacenamiento y permite conservar alimento para periodos de escasez, con menores pérdidas nutritivas cuando el proceso se desarrolla adecuadamente.
        .col-xl-6.col-md-9(data-aos="fade-left")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img30.png', alt="" ).m-auto
              h4 Ensilaje
              .caja-4_p
                p.mb-0 Se obtiene mediante la fermentación anaerobia de forrajes con alto contenido de humedad. Permite conservar su valor nutritivo, mantener una alta palatabilidad y disponer de alimento durante periodos de menor oferta forrajera.
      p.mb-0 La conservación debe planificarse de acuerdo con la disponibilidad estacional de forrajes y las necesidades alimentarias del hato.
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Formulación y manejo de la alimentación
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img31.png')})` }")
        .bloque-texto-g__texto.p-4
          p La #[b formulación y el manejo de la alimentación] comprenden la planificación de dietas y las prácticas necesarias para suministrarlas adecuadamente. Una dieta balanceada debe aportar energía, proteína, fibra, minerales, vitaminas y agua en cantidades acordes con la edad, el peso, la condición corporal, el estado fisiológico, el nivel productivo y el sistema de producción.
          br
          br
          p La alimentación representa uno de los costos relevantes dentro de la explotación caprina. Por esta razón, su planificación debe optimizar el uso de los recursos disponibles, disminuir pérdidas y favorecer la eficiencia productiva.
      p.mb-5 El manejo alimenticio comprende también la frecuencia de suministro, la calidad de los forrajes, la disponibilidad permanente de agua, el almacenamiento de los insumos y el seguimiento del consumo y de la condición corporal del hato. Además, debe adaptarse a las variaciones climáticas y estacionales mediante alternativas como bancos de proteína, heno, ensilaje y suplementos nutricionales.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Balance nutricional
      .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img32.png')})` }")
        .bloque-texto-g__texto.p-4
          p El #[b balance nutricional] consiste en suministrar una dieta equilibrada que cubra las necesidades de mantenimiento, crecimiento, reproducción y producción mediante un aporte adecuado de energía, proteína, fibra, vitaminas, minerales y agua.
          br
          br
          p La proporción apropiada entre estos nutrientes favorece el funcionamiento del sistema digestivo, especialmente del rumen, la fermentación microbiana y el aprovechamiento de los alimentos. Cuando el balance es adecuado, contribuye al mantenimiento de la condición corporal, la resistencia a enfermedades, los indicadores reproductivos y la producción de leche y carne.
      p.mb-5 Por el contrario, los desequilibrios nutricionales pueden ocasionar pérdidas productivas, disminución de la fertilidad, retraso en el crecimiento y mayor susceptibilidad a trastornos metabólicos y parasitarios. Por esta razón, el balance debe evaluarse periódicamente y ajustarse de acuerdo con la etapa fisiológica y las condiciones productivas del hato.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Formulación de raciones
      p.mb-5 La #[b formulación de raciones] consiste en combinar diferentes ingredientes para elaborar una dieta que satisfaga los requerimientos nutricionales de los caprinos al menor costo posible, sin comprometer el desempeño productivo y reproductivo.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl
          .caja-2.color-5.ajuste-4(data-aos="fade-right")
            p Para formular una ración deben considerarse:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Peso vivo. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Edad. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Raza. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Estado fisiológico. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Condición corporal. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Nivel de producción. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Calidad de los forrajes disponibles. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Disponibilidad de recursos alimenticios.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img33.png', alt=''  style="max-width: 600px").m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t2/img34.png', alt='').m-auto
        .col-xl
          .row.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img4.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 La formulación debe apoyarse en información técnica, como tablas de requerimientos nutricionales, análisis bromatológicos de los alimentos y, cuando sea posible, programas informáticos especializados.
          p.mb-0 Posteriormente, la respuesta de los animales debe evaluarse mediante el seguimiento de la condición corporal, la producción de leche, la ganancia diaria de peso y los indicadores reproductivos. Esta información permite efectuar los ajustes necesarios para mantener el equilibrio nutricional.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Estrategias de suplementación
      p.mb-5 La #[b suplementación nutricional] complementa la dieta cuando los forrajes disponibles no aportan suficientes nutrientes para satisfacer los requerimientos. Su utilización adquiere especial importancia durante la gestación, la lactancia, el crecimiento de los cabritos, la época reproductiva y los periodos de sequía. Las principales estrategias son:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Sales mineralizadas
                  p.mb-0 Complementan el aporte de minerales cuando los recursos de la dieta no satisfacen completamente los requerimientos de los animales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img35.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Bloques multinutricionales
                  p.mb-0 Constituyen una alternativa de suplementación que permite complementar diferentes nutrientes dentro del programa de alimentación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img36.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Concentrados
                  p.mb-0 Los concentrados comerciales y otras fuentes energéticas o proteicas complementan la dieta cuando el aporte de los forrajes resulta insuficiente.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img37.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Bancos de proteína y arbustos forrajeros
                  p.mb-0 Permiten aprovechar recursos vegetales con aporte proteico y fortalecer la disponibilidad de alimento, especialmente durante periodos de menor oferta forrajera.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img38.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Heno y ensilaje
                  p.mb-0 Constituyen reservas de forraje conservado que permiten mantener el suministro de alimento durante periodos de sequía o baja disponibilidad.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img39.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La suplementación debe planificarse de acuerdo con las necesidades de cada categoría animal, evitando deficiencias y excesos que puedan afectar la salud y el desempeño productivo.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Trastornos nutricionales
      p.mb-5 Los #[b trastornos nutricionales] son alteraciones relacionadas con una alimentación insuficiente, excesiva o desequilibrada que pueden afectar el metabolismo, la salud, el bienestar y el desempeño productivo de los caprinos. Entre los #[b trastornos nutricionales más frecuentes en los caprinos] se encuentran:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img3.png", alt="" style="width: 400px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Desnutrición y obesidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se relacionan con aportes insuficientes o excesivos de nutrientes y pueden alterar la condición corporal, el desempeño productivo y la reproducción.
            .row(titulo="Acidosis ruminal").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Corresponde a uno de los trastornos metabólicos asociados con desequilibrios alimentarios y puede afectar el funcionamiento digestivo y el estado general del animal.
            .row(titulo="Cetosis").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se incluye entre las alteraciones metabólicas que pueden presentarse cuando existen desequilibrios entre las necesidades del animal y el aporte nutricional.
            .row(titulo="Hipocalcemia").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se relaciona con alteraciones en el equilibrio del calcio y puede comprometer el funcionamiento normal del organismo.
            .row(titulo="Timpanismo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Es una alteración digestiva que puede presentarse como consecuencia de condiciones inadecuadas de alimentación y afectar el funcionamiento ruminal.
            .row(titulo="Deficiencias minerales").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Las deficiencias de calcio, fósforo, cobre, zinc y selenio pueden afectar diferentes funciones fisiológicas, productivas y reproductivas.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .caja-2.ajuste-7(data-aos="fade-right")
            p.mb-0 Estas alteraciones pueden relacionarse con pérdida de peso, disminución del consumo, baja producción de leche, retraso en el crecimiento, problemas reproductivos, disminución de la inmunidad y mayor susceptibilidad a enfermedades.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img40.png', alt='').m-auto
        .col-xl.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img6.svg', alt='' style="width: 70px")
          p.mb-0 La prevención se fundamenta en la planificación nutricional, el suministro de dietas balanceadas, la suplementación cuando sea necesaria, el seguimiento de la condición corporal y la articulación con los programas sanitarios y las #[b Buenas Prácticas Ganaderas (BPG)].
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.4 Agua de bebida
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-3.color-6(data-aos="zoom-in").mb-3
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t2/img41.png', alt='' style="width: 350px").m-auto
              .col-xl.caja-3_p
                p.mb-0 El #[b agua] es un nutriente esencial para los caprinos, ya que constituye entre el #[b 60 % y el 70 % del peso corporal] y cumple funciones fundamentales en el organismo. Participa en la digestión, la absorción y el transporte de nutrientes, la regulación de la temperatura corporal, la eliminación de productos de desecho y la producción de leche.
          p.mb-0 La restricción del suministro puede reducir el consumo de alimento, disminuir la productividad y comprometer la salud y el bienestar animal. Por esta razón, debe garantizarse disponibilidad permanente de agua limpia y de buena calidad mediante sistemas de suministro adecuados.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img3.png', alt='' style="max-width: 280px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img2.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Importancia del agua
      p.mb-5 El #[b agua cumple funciones esenciales en el organismo de los caprinos], relacionadas con la digestión, el transporte de nutrientes, la regulación de la temperatura corporal, la eliminación de desechos y la producción de leche. Estas funciones se describen a continuación:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t2/img17.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img42.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Digestión
                  p.mb-0.text-center Favorece el funcionamiento del sistema digestivo y participa en los procesos relacionados con el aprovechamiento de los alimentos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img43.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Transporte de nutrientes
                  p.mb-0.text-center Participa en la circulación y distribución de los nutrientes requeridos por los diferentes tejidos y órganos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img44.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Regulación térmica
                  p.mb-0.text-center Contribuye a regular la temperatura corporal y adquiere especial importancia frente a variaciones en las condiciones ambientales.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img45.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Eliminación de desechos
                  p.mb-0.text-center Interviene en los procesos mediante los cuales el organismo elimina sustancias resultantes del metabolismo.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img46.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Producción de leche
                  p.mb-0.text-center Constituye un componente fundamental de la leche, por lo que una disminución en su consumo puede repercutir en la producción de las hembras lactantes.
      p.mb-5 El suministro permanente de agua limpia y fresca favorece el consumo de alimento, la digestión ruminal y el mantenimiento de las condiciones sanitarias y productivas del hato. Su disponibilidad debe garantizarse durante las #[b 24 horas del día].
      .caja-8.mb-5(data-aos="fade-right")   
        h4.mb-0 Requerimientos diarios
      p.mb-5 Las necesidades de agua varían según la edad, el peso, el estado fisiológico, la temperatura ambiental, el tipo de alimentación y el nivel de producción. Un caprino adulto consume en promedio entre #[b 3 y 10 litros de agua al día]. Este requerimiento puede aumentar durante la lactancia, la gestación avanzada, el consumo de alimentos secos o los periodos de altas temperaturas. Por esta razón, es importante controlar diariamente el consumo, ya que una disminución puede estar asociada con enfermedad, estrés o dificultades en el sistema de suministro.
      .caja-8.mb-5(data-aos="fade-right")   
        h4.mb-0 Calidad del agua
      .caja-3.color-7(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t2/img47.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-3_p
            p El agua destinada al consumo animal debe reunir condiciones adecuadas de #[b calidad física, química y microbiológica]. Debe permanecer limpia, fresca, transparente, inodora y libre de sustancias tóxicas, microorganismos patógenos o contaminantes que puedan afectar la salud de los animales.
            p.mb-0 Como parte de las #[b Buenas Prácticas Ganaderas (BPG)], se recomienda realizar análisis periódicos de la calidad del agua, limpiar y desinfectar los bebederos y proteger las fuentes hídricas frente a posibles fuentes de contaminación. Estas acciones contribuyen a mantener un suministro seguro y adecuado para el hato.
      .caja-8.mb-5(data-aos="fade-right")   
        h4.mb-0 Sistemas de suministro
      p.mb-5 Los #[b sistemas de suministro de agua] deben garantizar disponibilidad continua, cantidad suficiente y fácil acceso para todos los animales. Su elección depende del tamaño de la explotación, el número de caprinos, la disponibilidad del recurso hídrico y el sistema de producción. Las principales alternativas se presentan a continuación:
      .row.justify-content-center.mb-3
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-5.h-100.color-5
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t2/img48.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Bebederos automáticos
              p.mb-0.text-center Permiten disponer de agua de manera continua y facilitan el acceso de los animales cuando cuentan con mantenimiento y funcionamiento adecuados.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-5.h-100.color-5
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t2/img49.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Tanques elevados
              p.mb-0.text-center Permiten almacenar y distribuir el agua hacia los puntos de suministro establecidos dentro de la explotación.
        .col-xl-4.col-md-9(data-aos="zoom-in")
          .caja-5.h-100.color-5
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t2/img50.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Redes de distribución
              p.mb-0.text-center Conducen el agua hacia los diferentes puntos de abastecimiento y facilitan su disponibilidad en las áreas destinadas a los animales.
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-5.h-100.color-5
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t2/img51.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Bebederos móviles
              p.mb-0.text-center Facilitan el suministro en áreas donde los animales cambian de ubicación o donde se requiere trasladar periódicamente el punto de abastecimiento.
        .col-xl-4.col-md-9(data-aos="zoom-in")
          .caja-5.h-100.color-5
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t2/img52.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Captación y almacenamiento de agua lluvia
              p.mb-0.text-center Constituyen una alternativa para almacenar recurso hídrico y complementar los sistemas de abastecimiento disponibles en la explotación.
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img53.png')})` }")
        .bloque-texto-g__texto.p-4
          p Todos los sistemas requieren mantenimiento periódico para garantizar el suministro permanente de agua de calidad y reducir pérdidas ocasionadas por fugas o contaminación.
          br
          br
          p La planificación integral de la #[b alimentación, nutrición y suministro de agua] debe relacionar los requerimientos de cada categoría animal con la disponibilidad y calidad de los recursos alimenticios. El balance de nutrientes, la conservación de forrajes, la suplementación, el seguimiento de la condición corporal y el acceso permanente a agua de calidad contribuyen al desempeño productivo, reproductivo y sanitario del hato y al cumplimiento de las #[b Buenas Prácticas Ganaderas (BPG)].

</template>

<script>
import audio1 from '@/assets/curso/podcast/clasificacion.mp3'
export default {
  name: 'Tema2',
  data: () => ({
    audio1,
    mostrarIndicadorTarjetaAudio: true,
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
