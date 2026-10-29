export default {
  global: {
    Name: 'Implementación de sistemas de producción y alimentación caprina',
    Description:
      'La alimentación y nutrición caprina son fundamentales para mantener la salud, el bienestar y la productividad del hato. Una dieta equilibrada debe aportar agua, energía, proteínas, vitaminas, minerales y fibra según la etapa fisiológica. El uso adecuado de forrajes, concentrados, suplementos y alimentos conservados permite prevenir trastornos nutricionales, optimizar recursos y fortalecer la eficiencia productiva y reproductiva del sistema caprino.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Sistemas de producción e instalaciones para caprinos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Sistemas de producción caprina',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Razas caprinas y aptitudes productivas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Buenas Prácticas Ganaderas (BPG)',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Bienestar animal en la producción caprina',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Bioseguridad y normatividad vigente',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Alimentación y nutrición del ganado caprino',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Requerimientos nutricionales',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Alimentos para caprinos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Formulación y manejo de la alimentación',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Agua de bebida',
            hash: 't_2_4',
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
        download: 'downloads/dist.pdf',
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
      termino: 'Balance nutricional',
      significado: 'suministro de una dieta equilibrada que cubre las necesidades de mantenimiento, crecimiento, reproducción y producción.',
    },
    {
      termino: 'Bienestar animal',
      significado: 'condiciones de manejo que garantizan alimentación adecuada, agua limpia, instalaciones seguras, atención sanitaria, manejo humanitario y reducción del estrés.',
    },
    {
      termino: 'Bioseguridad',
      significado: 'medidas de prevención y control sanitario aplicadas para disminuir los riesgos de ingreso y propagación de enfermedades en la explotación.',
    },
    {
      termino: 'Buenas Prácticas Ganaderas (BPG)',
      significado: 'principios, procedimientos y actividades orientados a garantizar una producción caprina segura, sostenible y eficiente.',
    },
    {
      termino: 'Ensilaje',
      significado: 'conservación de forrajes con alto contenido de humedad mediante fermentación anaerobia.',
    },
    {
      termino: 'Heno',
      significado: 'forraje conservado mediante deshidratación hasta alcanzar aproximadamente un 15 % de humedad.',
    },
    {
      termino: 'Infraestructura',
      significado: 'instalaciones, equipos y obras necesarias para el funcionamiento de la explotación caprina, como apriscos, corrales, comederos, bebederos y bodegas.',
    },
    {
      termino: 'Mejoramiento genético',
      significado: 'proceso de selección y cruzamiento de animales superiores para incrementar la productividad y obtener mejores características.',
    },
    {
      termino: 'Requerimientos nutricionales',
      significado: 'cantidad de nutrientes que un caprino necesita diariamente para mantener sus funciones vitales, crecer, reproducirse y producir leche o carne.',
    },
    {
      termino: 'Sistema de producción caprina',
      significado: 'conjunto organizado de recursos que interactúan para desarrollar eficientemente la explotación de cabras.',
    },
    {
      termino: 'Suplementación nutricional',
      significado: 'práctica destinada a complementar la dieta cuando los forrajes disponibles no aportan suficientes nutrientes.',
    },
    {
      termino: 'Trastornos nutricionales',
      significado: 'alteraciones ocasionadas por una alimentación insuficiente, excesiva o desequilibrada que afectan la salud, el bienestar y el desempeño productivo.',
    },
  ],
  referencias: [
    {
      referencia: 'Food and Agriculture Organization of the United Nations. (2012). Phenotypic characterization of animal genetic resources. FAO.',
      link: '',
    },
    {
      referencia: 'Food and Agriculture Organization of the United Nations. (2013). Good practices for biosecurity in the pig sector: Issues and options in developing and transition countries. FAO.',
      link: '',
    },
    {
      referencia: 'Instituto Colombiano Agropecuario. (2020). Buenas prácticas ganaderas en la producción primaria. ICA.',
      link: '',
    },
    {
      referencia: 'National Research Council. (2007). Nutrient requirements of small ruminants: Sheep, goats, cervids, and New World camelids. The National Academies Press.',
      link: '',
    },
    {
      referencia: 'Smith, M. C., & Sherman, D. M. (2009). Goat medicine (2nd ed.). Wiley-Blackwell.',
      link: '',
    },
    {
      referencia: 'Solaiman, S. G. (Ed.). (2010). Goat science and production. Wiley-Blackwell.',
      link: '',
    },
    {
      referencia: 'Underwood, W. J., Blauwiekel, R., Delano, M. L., Gillesby, R., Mischler, S. A., & Schoell, A. (2015). Biology and diseases of ruminants (sheep, goats, and cattle). En J. G. Fox et al. (Eds.), Laboratory animal medicine (3rd ed., pp. 623–694). Academic Press.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06 - Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ana Roció Rosero Cortes',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Leonardo Camacho Acevedo',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alba Mireya Orjuela Toro',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Cristancho Cubillos',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Angelica Gómez Morales',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paula Marcela Vidal Quintero',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jorge David Barbosa Losada',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristian Fernando Martínez Sánchez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
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
}
