// Codigo para incluir no calendário início do evento no dia 01 as 08:30 e fim no dia 02 as 18:00
// const startDate = '20241101T083000-0300'; // Data de início no formato GMT -3
// const endDate = '20241102T180000-0300'; // Data de término no formato GMT -3
// const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&dates=${startDate}/${endDate}&details=${eventDetails}&location=${eventLocation}`;

// Codigo para incluir no calendário início do evento no dia 01 das 08:30 as 18:00, se repetindo no dia 02 das 08:30 as 18:00
export const eventData = {
  2000: {
    year: 2000,
    title:
      'X Jornada Mineira de Radiologia & I Jornada Mineira de POCUS ABRAMEDE/MG e SRMG | 01 e 02 de Novembro de 2024',
    description:
      'A X Jornada Mineira de Radiologia e Diagnóstico por Imagem (JMR) e a I Jornada de POCUS ABRAMEDE/MG e SRMG acontecerão nos dias 1º e 2 de novembro de 2024, na Associação Médica de Minas Gerais, em Belo Horizonte. O encontro vai reunir profissionais renomados, especialistas e estudantes para discutir as mais recentes inovações e técnicas em radiologia e ultrassonografia, com foco no aprimoramento de práticas clínicas ligadas ao abdômen,  radiologia musculoesquelética e intervenção guiada por imagem. Durante os dias de evento, os participantes terão a oportunidade de assistir a palestras, workshops e mesas-redondas, abordando temas relevantes e atuais que impactam diretamente o dia a dia dos profissionais da saúde. Além disso, a JMR 2024 será uma excelente oportunidade para networking, permitindo a troca de experiências entre colegas e o fortalecimento das conexões profissionais. O evento é promovido pela Sociedade de Radiologia e Diagnóstico por Imagem de Minas Gerais (SRMG) e pela Associação Brasileira de Medicina de Emergência (Abramede) - MG.',
    ogTitle: 'JMR 2024 - Jornada Mineira de Radiologia',
    ogDescription:
      'Junte-se à Jornada Mineira de Radiologia 2024 e descubra as inovações na área de diagnóstico por imagem.',
    bannerText: [
      'Vem aí a XI Jornada Mineira de Radiologia e a',
      'II Jornada de POCUS ABRAMEDE/MG e SRMG'
    ],
    promoters: [
      {
        name: 'Sociedade de Radiologia e Diagnóstico por Imagem de Minas Gerais (SRMG)',
        shortName: 'SRMG',
        link: 'https://www.srmg.org.br',
        alt: 'Logo da SRMG',
        src: '/logo/srmg.png'
      },
      {
        name: 'Associação Brasileira de Medicina de Emergência (ABRAMED/MG)',
        shortName: 'ABRAMEDE/MG',
        link: 'https://www.abramedemg.org.br/',
        alt: 'Logo da ABRAMEDE/MG',
        src: '/logo/abramed-mg.png'
      }
    ],
    date: {
      start: '20241101T083000-0300',
      end: '20241102T180000-0300',
      extendedDatePeriod: '01 e 02 de Novembro de 2024',
      shortDatePeriod: '01 e 02/11/2024'
    },
    recurrenceRule: 'RRULE:FREQ=DAILY;COUNT=2',
    location: {
      name: 'Associação Médica de Minas Gerais',
      city: 'Belo Horizonte',
      state: 'MG',
      street: 'Av. João Pinheiro',
      StreetNumber: '161',
      neighborhood: 'Centro',
      zipCode: '30130-183',
      get fullAddress() {
        return `${this.name} - ${this.street}, ${this.StreetNumber} - ${this.neighborhood}, ${this.city} - ${this.state}, ${this.zipCode}`
      }
    },
    social: {
      instagram: 'https://www.instagram.com/sociedaderadiologiamg'
    },
    callToAct: {
      button01: {
        // caption: 'Faça sua inscrição',
        caption: 'Emita o seu certificado',
        link: 'https://eventosis.com.br/credenciamento/jmr2024/'
      },
      button02: {
        //caption: 'Se inscreva agora na Jornada',
        caption: 'Emita o seu certificado',
        link: 'https://eventosis.com.br/credenciamento/jmr2024/'
      },
      button03: {
        // caption: 'Se inscreva Hands On',
        caption: 'Emita o seu certificado',
        link: 'https://eventosis.com.br/credenciamento/jmr2024/'
      },
      button04: {
        // caption: 'Se inscreva na Jornada',
        caption: 'Emita o seu certificado',
        link: 'https://eventosis.com.br/credenciamento/jmr2024/'
      },
      button05: {
        // caption: 'Se inscreva no Curso de IA',
        caption: 'Emita o seu certificado',
        link: 'https://eventosis.com.br/credenciamento/jmr2024/'
      }
    },
    speakersForm: {
      title:
        'Formulário de inscrição de palestrantes / convidados da  XI JORNADA MINEIRA DE RADIOLOGIA | JMR 2025',
      description:
        'JMR 2025 acontecerá nos dias 27 e 28 de junho de 2025, na AMMG - Associação Médica de Minas Gerais, em Belo Horizonte - MG',
      rota: '/form/speakers',
      list: {
        title: 'Lista de palestrantes',
        rota: '/speakers'
      }
    },
    events: {
      cardSections: [
        {
          title: ' ',
          cardlist: [
            {
              date: '01/06',
              color: '#68517f',
              title: ['Abertura', 'Oficial'],
              link: '/pdf/01-11-abertura-oficial-30-out.pdf',
              img: '/images/cards/oppening.png',
              width: '125',
              height: '125',
              countdownTimer: 'June 01, 2025 18:00:00'
            }
          ]
        },
        {
          title: 'Programação Científica',
          cardlist: [
            {
              date: '01 e 02/11',
              color: '#052c65',
              title: 'POCUS',
              subtitle: 'SRMG ABRAMEDE/MG',
              link: '/pdf/01-e-02-11-pocus.pdf',
              img: '/images/cards/pocus.png',
              width: '63',
              height: '125'
            },
            {
              date: '01/11',
              color: '#084298',
              title: 'Mama',
              link: '/pdf/01-11-mama.pdf',
              img: '/images/cards/mama.png',
              width: '126',
              height: '125'
            },
            {
              date: '01/11',
              color: '#0a58ca',
              title: 'Geniturinário',
              link: '/pdf/01-11-geniturinário-01-out-lc.pdf',
              img: '/images/cards/geniturinario.png',
              width: '126',
              height: '125'
            },
            {
              date: '02/11',
              color: '#3d8bfd',
              title: 'Gastrointestinal',
              link: '/pdf/02-11-gastrointestinal_01-out-final.pdf',
              img: '/images/cards/gastrointestinal.png',
              width: '125',
              height: '125'
            },
            {
              date: '02/11',
              color: '#6ea8fe',
              title: 'MSK',
              link: '/pdf/02-11-musculoesquelético-01-out-final.pdf',
              img: '/images/cards/msk.png',
              width: '75',
              height: '125'
            }
          ]
        },
        {
          title: 'Hands On',
          cardlist: [
            {
              date: '02/11',
              color: '#010101',
              title: 'BI-RADS',
              link: '/pdf/02-11-hands-on-bi-rads.pdf',
              img: '/images/cards/bi-rads.png',
              width: '180',
              height: '120'
            },
            {
              date: '02/11',
              color: '#616161',
              title: 'Intervenção Mamária',
              link: '/pdf/02-11-hands-on-intervenção-mamaria.pdf',
              img: '/images/cards/intervencao-mamaria.png',
              width: '118',
              height: '125'
            }
          ]
        },
        {
          title: 'Cursos Intensivos',
          cardlist: [
            {
              date: '01/11',
              color: '#00695c',
              title: 'Intervenção não vascular',
              link: '/pdf/01-11_radiologia-intervencionista-não-vascular.pdf',
              img: '/images/cards/intervencao-nao-vascular.png',
              width: '106',
              height: '142'
            },
            {
              date: '02/11',
              color: '#26a69a',
              title: 'Inovação/IA',
              link: '/pdf/02-11-inovacao-inteligencia-artificial-em-radiologia.pdf',
              img: '/images/cards/ia.png',
              width: '166',
              height: '164'
            }
          ]
        }
      ]
    },
    comissions: [ {
        name: 'SRMG',
        get title() {
          return `Comissão Científica ${this.name}`
        },
        title: 'Comissão Científica SRMG',
        link: 'https://www.srmg.org.br',
        src: '/logo/srmg.png',
        width: 210,
        height: 60,
        members: [
          {
            imagePath: '/avatars/Benito_Pio_Ceccato_Junior.png',
            name: 'Dr. Benito Pio Ceccato Júnior'
          },
          {
            imagePath: '/avatars/Dierre_Roberto_Alvim.png',
            name: 'Dr. Dierre Roberto Alvim'
          },
          {
            imagePath: '/avatars/Elisio_Jose_Salgado_Ribeiro.png',
            name: 'Dr. Elísio José Salgado Ribeiro'
          },
          {
            imagePath: '/avatars/Flavio_Coelho_Barros.png',
            name: 'Dr. Flávio Coelho Barros'
          },
          {
            imagePath: '/avatars/Francisco_Ribeiro_Teixeira_Junior.png',
            name: 'Dr. Francisco Ribeiro Teixeira Junior'
          },
          {
            imagePath: '/avatars/Leonardo _Campos_de_Queiroz.png',
            name: 'Dr. Leonardo  Campos de Queiroz'
          },
          {
            imagePath: '/avatars/Luis_Ronan_MF_de_Souza.png',
            name: 'Dr. Luis Ronan MF de Souza'
          },
          {
            imagePath: '/avatars/Luiz_Ernani_Meira_Junior.png',
            name: 'Dr. Luiz Ernani Meira Júnior'
          },
          {
            imagePath: '/avatars/Paulo_Ramos_Botelho_Antunes.png',
            name: 'Dr. Paulo Ramos Botelho Antunes'
          },
          {
            imagePath: '/avatars/Pedro_Paulo_Nunes_Pereira.png',
            name: 'Dr. Pedro Paulo Nunes Pereira'
          },
          {
            imagePath: '/avatars/Raphael_Guedes.png',
            name: 'Dr. Raphael Guedes'
          },
          {
            imagePath: '/avatars/Robertson_Correa_Bernardo.png',
            name: 'Dr. Robertson Corrêa Bernardo'
          },
          {
            imagePath: '/avatars/Rogerio_Augusto_Pinto_Silva.png',
            name: 'Dr. Rogerio Augusto Pinto Silva'
          },
          {
            imagePath: '/avatars/Ana_Paula_Campos_Rocha.png',
            name: 'Dra.Ana Paula Campos Rocha'
          },
          {
            imagePath: '/avatars/Bruna_Cesario_Senna.png',
            name: 'Dra.Bruna Cesário Senna.jpg'
          },
          {
            imagePath: '/avatars/Adriene_Moraes_Campos.png',
            name: 'Dra. Adriene Moraes Campos'
          },
          {
            imagePath: '/avatars/Anna_Christina_Gruber.png',
            name: 'Dra. Anna Christina Gruber'
          },
          {
            imagePath: '/avatars/Ivie_Braga_de_Paula.png',
            name: 'Dra. Ivie Braga de Paula'
          },
          {
            imagePath: '/avatars/Luciana_Costa_Silva.png',
            name: 'Dra. Luciana Costa Silva'
          },
          {
            imagePath: '/avatars/Luisa_Leitao.png',
            name: 'Dra. Luisa Leitão'
          },
          {
            imagePath: '/avatars/Maria_de_Fatima_Vilaca_Lobato.png',
            name: 'Dra. Maria de Fátima Vilaça Lobato'
          },
          {
            imagePath: '/avatars/Maria_Fernanda_Borges_Abreu.png',
            name: 'Dra. Maria Fernanda Borges Abreu'
          },
          {
            imagePath: '/avatars/Patricia_El_Bacha.png',
            name: 'Dra. Patrícia El Bacha'
          },
          {
            imagePath: '/avatars/Paula_Figueiredo_Rocha.png',
            name: 'Dra. Paula Figueiredo Rocha'
          },
          {
            imagePath: '/avatars/Raquel_Del-Fraro_Rabelo.png',
            name: 'Dra. Raquel Del-Fraro Rabelo'
          },
          {
            imagePath: '/avatars/Raquel_Sadala_Mendes.png',
            name: 'Dra. Raquel Sadala Mendes'
          },
          {
            imagePath: '/avatars/Rogeria_Nobre_Rodrigues.png',
            name: 'Dra. Rogéria Nobre Rodrigues'
          },
          {
            imagePath: '/avatars/Tatiana_Martins.png',
            name: 'Dra. Tatiana Martins'
          }
        ]
      },
      {
        name: 'SOGIMIG',
        get title() {
          return `Comissão Científica ${this.name}`
        },
        link: 'https://www.sogimig.org.br',
        src: '/logo/sogimig.png',
        width: 150,
        height: 60,
        members: [
          {
            imagePath: '/avatars/Cassio_Furtini_Haddad.png',
            name: 'Dr. Cássio Furtini Haddad'
          },
          {
            imagePath: '/avatars/Angelica_Lemos_Debs_Diniz.png',
            name: 'Dra. Angélica Lemos Debs Diniz'
          },
          {
            imagePath: '/avatars/Ines_Katerina_Damasceno.png',
            name: 'Dra. Ines Katerina Damasceno'
          },
          {
            imagePath: '/avatars/Inessa_Beraldo_Bonomi.png',
            name: 'Dra. Inessa Beraldo Bonomi'
          },
          {
            imagePath: '/avatars/Joana_Sara_Fonseca_Dumont.png',
            name: 'Dra. Joana Sara Fonseca Dumont'
          },
          {
            imagePath: '/avatars/Lara_Rodrigues_Felix.png',
            name: 'Dra. Lara Rodrigues Félix'
          },
          {
            imagePath: '/avatars/Liv_Braga_de_Paula.png',
            name: 'Dra. Liv Braga de Paula'
          },
          {
            imagePath: '/avatars/Mariana_Seabra.png',
            name: 'Dra. Mariana Seabra'
          }
        ]
      }
    ]
  },
  2024: {
    title:
      'X Jornada Mineira de Radiologia & I Jornada Mineira de POCUS ABRAMEDE/MG e SRMG | 01 e 02 de Novembro de 2024',
    description:
      'A X Jornada Mineira de Radiologia e Diagnóstico por Imagem (JMR) e a I Jornada de POCUS ABRAMEDE/MG e SRMG acontecerão nos dias 1º e 2 de novembro de 2024, na Associação Médica de Minas Gerais, em Belo Horizonte. O encontro vai reunir profissionais renomados, especialistas e estudantes para discutir as mais recentes inovações e técnicas em radiologia e ultrassonografia, com foco no aprimoramento de práticas clínicas ligadas ao abdômen,  radiologia musculoesquelética e intervenção guiada por imagem. Durante os dias de evento, os participantes terão a oportunidade de assistir a palestras, workshops e mesas-redondas, abordando temas relevantes e atuais que impactam diretamente o dia a dia dos profissionais da saúde. Além disso, a JMR 2024 será uma excelente oportunidade para networking, permitindo a troca de experiências entre colegas e o fortalecimento das conexões profissionais. O evento é promovido pela Sociedade de Radiologia e Diagnóstico por Imagem de Minas Gerais (SRMG) e pela Associação Brasileira de Medicina de Emergência (Abramede) - MG.',
    ogTitle: 'JMR 2024 - Jornada Mineira de Radiologia',
    ogDescription:
      'Junte-se à Jornada Mineira de Radiologia 2024 e descubra as inovações na área de diagnóstico por imagem.',
    bannerText: [
      'Vem aí a XI Jornada Mineira de Radiologia e a',
      'II Jornada de POCUS ABRAMEDE/MG e SRMG'
    ],
    promoters: [
      {
        name: 'Sociedade de Radiologia e Diagnóstico por Imagem de Minas Gerais (SRMG)',
        shortName: 'SRMG',
        link: 'https://www.srmg.org.br',
        alt: 'Logo da SRMG',
        src: '/logo/srmg.png'
      },
      {
        name: 'Associação Brasileira de Medicina de Emergência (ABRAMED/MG)',
        shortName: 'ABRAMEDE/MG',
        link: 'https://www.abramedemg.org.br/',
        alt: 'Logo da ABRAMEDE/MG',
        src: '/logo/abramed-mg.png'
      }
    ],
    date: {
      start: '20241101T083000-0300',
      end: '20241102T180000-0300',
      extendedDatePeriod: '01 e 02 de Novembro de 2024',
      shortDatePeriod: '01 e 02/11/2024'
    },
    recurrenceRule: 'RRULE:FREQ=DAILY;COUNT=2',
    location: {
      name: 'Associação Médica de Minas Gerais',
      city: 'Belo Horizonte',
      state: 'MG',
      street: 'Av. João Pinheiro',
      StreetNumber: '161',
      neighborhood: 'Centro',
      zipCode: '30130-183',
      get fullAddress() {
        return `${this.name} - ${this.street}, ${this.StreetNumber} - ${this.neighborhood}, ${this.city} - ${this.state}, ${this.zipCode}`
      }
    },
    social: {
      instagram: 'https://www.instagram.com/sociedaderadiologiamg'
    },
    callToAct: {
      button01: {
        // caption: 'Faça sua inscrição',
        caption: 'Emita o seu certificado',
        link: 'https://eventosis.com.br/credenciamento/jmr2024/'
      },
      button02: {
        //caption: 'Se inscreva agora na Jornada',
        caption: 'Emita o seu certificado',
        link: 'https://eventosis.com.br/credenciamento/jmr2024/'
      },
      button03: {
        // caption: 'Se inscreva Hands On',
        caption: 'Emita o seu certificado',
        link: 'https://eventosis.com.br/credenciamento/jmr2024/'
      },
      button04: {
        // caption: 'Se inscreva na Jornada',
        caption: 'Emita o seu certificado',
        link: 'https://eventosis.com.br/credenciamento/jmr2024/'
      },
      button05: {
        // caption: 'Se inscreva no Curso de IA',
        caption: 'Emita o seu certificado',
        link: 'https://eventosis.com.br/credenciamento/jmr2024/'
      }
    },
    speakersForm: {
      title:
        'Formulário de inscrição de palestrantes / convidados da  XI JORNADA MINEIRA DE RADIOLOGIA | JMR 2024',
      description:
        'JMR 2025 acontecerá nos dias 27 e 28 de junho de 2025, na AMMG - Associação Médica de Minas Gerais, em Belo Horizonte - MG',
      rota: '/form/speakers',
      list: {
        title: 'Lista de palestrantes',
        rota: '/speakers'
      }
    },
    events: {
      cardSections: [
        {
          title: ' ',
          cardlist: [
            {
              date: '01/11',
              color: '#68517f',
              title: ['Abertura', 'Oficial'],
              link: '/pdf/01-11-abertura-oficial-30-out.pdf',
              img: '/images/cards/oppening.png',
              width: '125',
              height: '125',
              countdownTimer: 'November 27, 2025 18:00:00'
            }
          ]
        },
        {
          title: 'Programação Científica',
          cardlist: [
            {
              date: '01 e 02/11',
              color: '#052c65',
              title: 'POCUS',
              subtitle: 'SRMG ABRAMEDE/MG',
              link: '/pdf/01-e-02-11-pocus.pdf',
              img: '/images/cards/pocus.png',
              width: '63',
              height: '125'
            },
            {
              date: '01/11',
              color: '#084298',
              title: 'Mama',
              link: '/pdf/01-11-mama.pdf',
              img: '/images/cards/mama.png',
              width: '126',
              height: '125'
            },
            {
              date: '01/11',
              color: '#0a58ca',
              title: 'Geniturinário',
              link: '/pdf/01-11-geniturinário-01-out-lc.pdf',
              img: '/images/cards/geniturinario.png',
              width: '126',
              height: '125'
            },
            {
              date: '02/11',
              color: '#3d8bfd',
              title: 'Gastrointestinal',
              link: '/pdf/02-11-gastrointestinal_01-out-final.pdf',
              img: '/images/cards/gastrointestinal.png',
              width: '125',
              height: '125'
            },
            {
              date: '02/11',
              color: '#6ea8fe',
              title: 'MSK',
              link: '/pdf/02-11-musculoesquelético-01-out-final.pdf',
              img: '/images/cards/msk.png',
              width: '75',
              height: '125'
            }
          ]
        },
        {
          title: 'Hands On',
          cardlist: [
            {
              date: '02/11',
              color: '#010101',
              title: 'BI-RADS',
              link: '/pdf/02-11-hands-on-bi-rads.pdf',
              img: '/images/cards/bi-rads.png',
              width: '180',
              height: '120'
            },
            {
              date: '02/11',
              color: '#616161',
              title: 'Intervenção Mamária',
              link: '/pdf/02-11-hands-on-intervenção-mamaria.pdf',
              img: '/images/cards/intervencao-mamaria.png',
              width: '118',
              height: '125'
            }
          ]
        },
        {
          title: 'Cursos Intensivos',
          cardlist: [
            {
              date: '01/11',
              color: '#00695c',
              title: 'Intervenção não vascular',
              link: '/pdf/01-11_radiologia-intervencionista-não-vascular.pdf',
              img: '/images/cards/intervencao-nao-vascular.png',
              width: '106',
              height: '142'
            },
            {
              date: '02/11',
              color: '#26a69a',
              title: 'Inovação/IA',
              link: '/pdf/02-11-inovacao-inteligencia-artificial-em-radiologia.pdf',
              img: '/images/cards/ia.png',
              width: '166',
              height: '164'
            }
          ]
        }
      ]
    },
    comissions: [ {
        name: 'srmg',
        get title() {
          return `Comissão Científica ${this.name}`
        },
        link: 'https://www.srmg.org.br',
        src: '/logo/srmg.png',
        width: 210,
        height: 60,
        members: [
          {
            imagePath: '/avatars/Augusto_Antunes.png',
            name: 'Dr. Augusto Antunes'
          },
          {
            imagePath: '/avatars/Benito_Pio_Ceccato_Junior.png',
            name: 'Dr. Benito Pio Ceccato Júnior'
          },
          {
            imagePath: '/avatars/Elisio_Jose_Salgado_Ribeiro.png',
            name: 'Dr. Elísio José Salgado Ribeiro'
          },
          {
            imagePath: '/avatars/Flavio_Coelho_Barros.png',
            name: 'Dr. Flávio Coelho Barros'
          },
          {
            imagePath: '/avatars/Francisco_Ribeiro_Teixeira_Junior.png',
            name: 'Dr. Francisco Ribeiro Teixeira Junior'
          },
          {
            imagePath: '/avatars/Julio_Guerra_Domingues.png',
            name: 'Dr. Júlio Guerra Domingues'
          },
          {
            imagePath: '/avatars/Luis_Ronan_MF_de_Souza.png',
            name: 'Dr. Luis Ronan MF de Souza'
          },
          {
            imagePath: '/avatars/Marcus_Vinicius_Amorim.png',
            name: 'Dr. Marcus Vinicius Amorim'
          },
          {
            imagePath: '/avatars/Rogerio_Augusto_Pinto_Silva.png',
            name: 'Dr. Rogerio Augusto Pinto Silva'
          },
          {
            imagePath: '/avatars/Thales_Matheus_M_Santos.png',
            name: 'Dr. Thales Matheus M Santos'
          },
          {
            imagePath: '/avatars/Adriene_Moraes_Campos.png',
            name: 'Dra. Adriene Moraes Campos'
          },
          {
            imagePath: '/avatars/Anna_Christina_Gruber.png',
            name: 'Dra. Anna Christina Gruber'
          },
          {
            imagePath: '/avatars/Ivie_Braga_de_Paula.png',
            name: 'Dra. Ivie Braga de Paula'
          },
          {
            imagePath: '/avatars/Luciana_Costa_Silva.png',
            name: 'Dra. Luciana Costa Silva'
          },
          {
            imagePath: '/avatars/Maria_Fernanda_Borges_Abreu.png',
            name: 'Dra. Maria Fernanda Borges Abreu'
          },
          {
            imagePath: '/avatars/Paula_Figueiredo_Rocha.png',
            name: 'Dra. Paula Figueiredo Rocha'
          },
          {
            imagePath: '/avatars/Raquel_Del-Fraro_Rabelo.png',
            name: 'Dra. Raquel Del-Fraro Rabelo'
          },
          {
            imagePath: '/avatars/Raquel_Sadala_Mendes.png',
            name: 'Dra. Raquel Sadala Mendes'
          }
        ]
      },
      {
        name: 'abramede',
        get title() {
          return `Comissão Científica ${this.name}`
        },
        link: 'https://www.abramedemg.org.br',
        src: '/logo/abramed-mg.png',
        width: 150,
        height: 60,
        members: [
          {
            imagePath: '/avatars/Arthur_Elias_de_Aguiar_Machado.png',
            name: 'Dr. Arthur Elias de Aguiar Machado'
          },
          {
            imagePath: '/avatars/Luiz_Ernani_Meira_Junior.png',
            name: 'Dr. Luiz Ernani Meira Júnior'
          },
          {
            imagePath: '/avatars/Marcus_Vinicius_Melo_Andrade.png',
            name: 'Dr. Marcus Vinicius Melo Andrade'
          },
          {
            imagePath: '/avatars/Maria_Aparecida_Braga.png',
            name: 'Dra. Maria Aparecida Braga'
          }
        ]
      }
    ]
  },
  2025: {
    title:
      'JMR 2025 & CIM 2025 – Inovação e excelência no diagnóstico por imagem | 27 e 28 de Junho de 2025',
    description:
      'Nos dias 01 e 02 de junho de 2025, Belo Horizonte será palco de dois grandes eventos científicos: a Jornada Mineira de Radiologia 2025 (JMR), organizada pela SRMG, e o Congresso de Imagem da Mulher 2025 (CIM), realizado em parceria com a SOGIMIG. A JMR 2025 reunirá especialistas de diversas áreas da radiologia para discutir os avanços mais recentes em imagem abdominal, musculoesquelética, neurorradiologia, radiologia torácica, intervenção guiada por imagem e muito mais. Já o CIM 2025 trará um olhar aprofundado sobre a imagem da mulher, abordando inovações tecnológicas e diagnósticas. Com uma programação dinâmica de palestras, workshops e mesas-redondas, o evento será uma oportunidade única de aprendizado, atualização e networking. Garanta sua participação e esteja na vanguarda da radiologia! Nos vemos em junho de 2025! ',
    ogTitle: 'JMR 2025 - Jornada Mineira de Radiologia',
    ogDescription:
      'Junte-se à Jornada Mineira de Radiologia 2025 e descubra as inovações na área de diagnóstico por imagem.',
    bannerText: [
      'Vem aí a XI Jornada Mineira de Radiologia e 0',
      'XIV Congresso de Imunologia da Mulher'
    ],
    promoters: [
      {
        name: 'Sociedade de Radiologia e Diagnóstico por Imagem de Minas Gerais (SRMG)',
        shortName: 'SRMG',
        link: 'https://www.srmg.org.br',
        alt: 'Logo da SRMG',
        src: '/logo/srmg.png'
      },
      {
        name: 'Associação de Ginecologistas e Obstetras de Minas Gerais (SOGIMIG)',
        shortName: 'SOGIMIG',
        link: 'https://sogimig.org.br/',
        alt: 'Logo da SOGIMIG',
        src: '/logo/sogimig.png'
      }
    ],
    date: {
      start: '20250627T083000-0300',
      end: '20250628T180000-0300',
      extendedDatePeriod: '01 e 02 de Junho de 2025',
      shortDatePeriod: '01 e 02/06/2025'
    },
    recurrenceRule: 'RRULE:FREQ=DAILY;COUNT=2',
    location: {
      name: 'Associação Médica de Minas Gerais',
      city: 'Belo Horizonte',
      state: 'MG',
      street: 'Av. João Pinheiro',
      StreetNumber: '161',
      neighborhood: 'Centro',
      zipCode: '30130-183',
      get fullAddress() {
        return `${this.name} - ${this.street}, ${this.StreetNumber} - ${this.neighborhood}, ${this.city} - ${this.state}, ${this.zipCode}`
      }
    },
    social: {
      instagram: 'https://www.instagram.com/sociedaderadiologiamg'
    },
    callToAct: {
      button01: {
        // caption: 'Faça sua inscrição',
        caption: 'Emita o seu certificado',
        link: 'https://eventosis.com.br/credenciamento/jmr2024/'
      },
      button02: {
        //caption: 'Se inscreva agora na Jornada',
        caption: 'Emita o seu certificado',
        link: 'https://eventosis.com.br/credenciamento/jmr2024/'
      },
      button03: {
        // caption: 'Se inscreva Hands On',
        caption: 'Emita o seu certificado',
        link: 'https://eventosis.com.br/credenciamento/jmr2024/'
      },
      button04: {
        // caption: 'Se inscreva na Jornada',
        caption: 'Emita o seu certificado',
        link: 'https://eventosis.com.br/credenciamento/jmr2024/'
      },
      button05: {
        // caption: 'Se inscreva no Curso de IA',
        caption: 'Emita o seu certificado',
        link: 'https://eventosis.com.br/credenciamento/jmr2024/'
      }
    },
    speakersForm: {
      title:
        'Formulário de inscrição de palestrantes / convidados da  XI JORNADA MINEIRA DE RADIOLOGIA | JMR 2025',
      description:
        'JMR 2025 acontecerá nos dias 01 e 02 de junho de 2025, na AMMG - Associação Médica de Minas Gerais, em Belo Horizonte - MG',
      rota: '/form/speakers',
      list: {
        title: 'Lista de palestrantes 2025',
        rota: '/speakers'
      }
    },
    events: {
      soon: true,
      cardSections: [
        {
          title: ' ',
          cardlist: [
            {
              date: '01/11',
              color: '#68517f',
              title: ['Abertura', 'Oficial'],
              link: '/pdf/01-11-abertura-oficial-30-out.pdf',
              img: '/images/cards/oppening.png',
              width: '125',
              height: '125',
              countdownTimer: 'June 01, 2025 18:00:00'
            }
          ]
        },
        {
          title: 'Programação Científica',
          cardlist: [
            {
              date: '01 e 02/11',
              color: '#052c65',
              title: 'POCUS',
              subtitle: 'SRMG ABRAMEDE/MG',
              link: '/pdf/01-e-02-11-pocus.pdf',
              img: '/images/cards/pocus.png',
              width: '63',
              height: '125'
            },
            {
              date: '01/11',
              color: '#084298',
              title: 'Mama',
              link: '/pdf/01-11-mama.pdf',
              img: '/images/cards/mama.png',
              width: '126',
              height: '125'
            },
            {
              date: '01/11',
              color: '#0a58ca',
              title: 'Geniturinário',
              link: '/pdf/01-11-geniturinário-01-out-lc.pdf',
              img: '/images/cards/geniturinario.png',
              width: '126',
              height: '125'
            },
            {
              date: '02/11',
              color: '#3d8bfd',
              title: 'Gastrointestinal',
              link: '/pdf/02-11-gastrointestinal_01-out-final.pdf',
              img: '/images/cards/gastrointestinal.png',
              width: '125',
              height: '125'
            },
            {
              date: '02/11',
              color: '#6ea8fe',
              title: 'MSK',
              link: '/pdf/02-11-musculoesquelético-01-out-final.pdf',
              img: '/images/cards/msk.png',
              width: '75',
              height: '125'
            }
          ]
        },
        {
          title: 'Hands On',
          cardlist: [
            {
              date: '02/11',
              color: '#010101',
              title: 'BI-RADS',
              link: '/pdf/02-11-hands-on-bi-rads.pdf',
              img: '/images/cards/bi-rads.png',
              width: '180',
              height: '120'
            },
            {
              date: '02/11',
              color: '#616161',
              title: 'Intervenção Mamária',
              link: '/pdf/02-11-hands-on-intervenção-mamaria.pdf',
              img: '/images/cards/intervencao-mamaria.png',
              width: '118',
              height: '125'
            }
          ]
        },
        {
          title: 'Cursos Intensivos',
          cardlist: [
            {
              date: '01/11',
              color: '#00695c',
              title: 'Intervenção não vascular',
              link: '/pdf/01-11_radiologia-intervencionista-não-vascular.pdf',
              img: '/images/cards/intervencao-nao-vascular.png',
              width: '106',
              height: '142'
            },
            {
              date: '02/11',
              color: '#26a69a',
              title: 'Inovação/IA',
              link: '/pdf/02-11-inovacao-inteligencia-artificial-em-radiologia.pdf',
              img: '/images/cards/ia.png',
              width: '166',
              height: '164'
            }
          ]
        }
      ]
    },
    comissions: [ {
        name: 'SRMG',
        get title() {
          return `Comissão Científica ${this.name}`
        },
        title: 'Comissão Científica SRMG',
        link: 'https://www.srmg.org.br',
        src: '/logo/srmg.png',
        width: 210,
        height: 60,
        members: [
          {
            imagePath: '/avatars/Benito_Pio_Ceccato_Junior.png',
            name: 'Dr. Benito Pio Ceccato Júnior'
          },
          {
            imagePath: '/avatars/Dierre_Roberto_Alvim.png',
            name: 'Dr. Dierre Roberto Alvim'
          },
          {
            imagePath: '/avatars/Elisio_Jose_Salgado_Ribeiro.png',
            name: 'Dr. Elísio José Salgado Ribeiro'
          },
          {
            imagePath: '/avatars/Flavio_Coelho_Barros.png',
            name: 'Dr. Flávio Coelho Barros'
          },
          {
            imagePath: '/avatars/Francisco_Ribeiro_Teixeira_Junior.png',
            name: 'Dr. Francisco Ribeiro Teixeira Junior'
          },
          {
            imagePath: '/avatars/Leonardo _Campos_de_Queiroz.png',
            name: 'Dr. Leonardo  Campos de Queiroz'
          },
          {
            imagePath: '/avatars/Luis_Ronan_MF_de_Souza.png',
            name: 'Dr. Luis Ronan MF de Souza'
          },
          {
            imagePath: '/avatars/Luiz_Ernani_Meira_Junior.png',
            name: 'Dr. Luiz Ernani Meira Júnior'
          },
          {
            imagePath: '/avatars/Paulo_Ramos_Botelho_Antunes.png',
            name: 'Dr. Paulo Ramos Botelho Antunes'
          },
          {
            imagePath: '/avatars/Pedro_Paulo_Nunes_Pereira.png',
            name: 'Dr. Pedro Paulo Nunes Pereira'
          },
          {
            imagePath: '/avatars/Raphael_Guedes.png',
            name: 'Dr. Raphael Guedes'
          },
          {
            imagePath: '/avatars/Robertson_Correa_Bernardo.png',
            name: 'Dr. Robertson Corrêa Bernardo'
          },
          {
            imagePath: '/avatars/Rogerio_Augusto_Pinto_Silva.png',
            name: 'Dr. Rogerio Augusto Pinto Silva'
          },
          {
            imagePath: '/avatars/Ana_Paula_Campos_Rocha.png',
            name: 'Dra.Ana Paula Campos Rocha'
          },
          {
            imagePath: '/avatars/Bruna_Cesario_Senna.png',
            name: 'Dra.Bruna Cesário Senna.jpg'
          },
          {
            imagePath: '/avatars/Adriene_Moraes_Campos.png',
            name: 'Dra. Adriene Moraes Campos'
          },
          {
            imagePath: '/avatars/Anna_Christina_Gruber.png',
            name: 'Dra. Anna Christina Gruber'
          },
          {
            imagePath: '/avatars/Ivie_Braga_de_Paula.png',
            name: 'Dra. Ivie Braga de Paula'
          },
          {
            imagePath: '/avatars/Luciana_Costa_Silva.png',
            name: 'Dra. Luciana Costa Silva'
          },
          {
            imagePath: '/avatars/Luisa_Leitao.png',
            name: 'Dra. Luisa Leitão'
          },
          {
            imagePath: '/avatars/Maria_de_Fatima_Vilaca_Lobato.png',
            name: 'Dra. Maria de Fátima Vilaça Lobato'
          },
          {
            imagePath: '/avatars/Maria_Fernanda_Borges_Abreu.png',
            name: 'Dra. Maria Fernanda Borges Abreu'
          },
          {
            imagePath: '/avatars/Patricia_El_Bacha.png',
            name: 'Dra. Patrícia El Bacha'
          },
          {
            imagePath: '/avatars/Paula_Figueiredo_Rocha.png',
            name: 'Dra. Paula Figueiredo Rocha'
          },
          {
            imagePath: '/avatars/Raquel_Del-Fraro_Rabelo.png',
            name: 'Dra. Raquel Del-Fraro Rabelo'
          },
          {
            imagePath: '/avatars/Raquel_Sadala_Mendes.png',
            name: 'Dra. Raquel Sadala Mendes'
          },
          {
            imagePath: '/avatars/Rogeria_Nobre_Rodrigues.png',
            name: 'Dra. Rogéria Nobre Rodrigues'
          },
          {
            imagePath: '/avatars/Tatiana_Martins.png',
            name: 'Dra. Tatiana Martins'
          }
        ]
      },
      {
        name: 'SOGIMIG',
        get title() {
          return `Comissão Científica ${this.name}`
        },
        link: 'https://www.sogimig.org.br',
        src: '/logo/sogimig.png',
        width: 150,
        height: 60,
        members: [
          {
            imagePath: '/avatars/Cassio_Furtini_Haddad.png',
            name: 'Dr. Cássio Furtini Haddad'
          },
          {
            imagePath: '/avatars/Angelica_Lemos_Debs_Diniz.png',
            name: 'Dra. Angélica Lemos Debs Diniz'
          },
          {
            imagePath: '/avatars/Ines_Katerina_Damasceno.png',
            name: 'Dra. Ines Katerina Damasceno'
          },
          {
            imagePath: '/avatars/Inessa_Beraldo_Bonomi.png',
            name: 'Dra. Inessa Beraldo Bonomi'
          },
          {
            imagePath: '/avatars/Joana_Sara_Fonseca_Dumont.png',
            name: 'Dra. Joana Sara Fonseca Dumont'
          },
          {
            imagePath: '/avatars/Lara_Rodrigues_Felix.png',
            name: 'Dra. Lara Rodrigues Félix'
          },
          {
            imagePath: '/avatars/Liv_Braga_de_Paula.png',
            name: 'Dra. Liv Braga de Paula'
          },
          {
            imagePath: '/avatars/Mariana_Seabra.png',
            name: 'Dra. Mariana Seabra'
          }
        ]
      }
    ]
  },
  2026: {
    title:
      'JMR 2025 & CIM 2025 – Inovação e excelência no diagnóstico por imagem | 27 e 28 de Junho de 2025',
    description:
      'Nos dias 01 e 02 de junho de 2025, Belo Horizonte será palco de dois grandes eventos científicos: a Jornada Mineira de Radiologia 2025 (JMR), organizada pela SRMG, e o Congresso de Imagem da Mulher 2025 (CIM), realizado em parceria com a SOGIMIG. A JMR 2025 reunirá especialistas de diversas áreas da radiologia para discutir os avanços mais recentes em imagem abdominal, musculoesquelética, neurorradiologia, radiologia torácica, intervenção guiada por imagem e muito mais. Já o CIM 2025 trará um olhar aprofundado sobre a imagem da mulher, abordando inovações tecnológicas e diagnósticas. Com uma programação dinâmica de palestras, workshops e mesas-redondas, o evento será uma oportunidade única de aprendizado, atualização e networking. Garanta sua participação e esteja na vanguarda da radiologia! Nos vemos em junho de 2025! ',
    ogTitle: 'JMR 2025 - Jornada Mineira de Radiologia',
    ogDescription:
      'Junte-se à Jornada Mineira de Radiologia 2025 e descubra as inovações na área de diagnóstico por imagem.',
    bannerText: [
      'Vem aí a XI Jornada Mineira de Radiologia e 0',
      'XIV Congresso de Imunologia da Mulher'
    ],
    promoters: [
      {
        name: 'Sociedade de Radiologia e Diagnóstico por Imagem de Minas Gerais (SRMG)',
        shortName: 'SRMG',
        link: 'https://www.srmg.org.br',
        alt: 'Logo da SRMG',
        src: '/logo/srmg.png'
      },
      {
        name: 'Associação de Ginecologistas e Obstetras de Minas Gerais (SOGIMIG)',
        shortName: 'SOGIMIG',
        link: 'https://sogimig.org.br/',
        alt: 'Logo da SOGIMIG',
        src: '/logo/sogimig.png'
      }
    ],
    date: {
      start: '20250627T083000-0300',
      end: '20250628T180000-0300',
      extendedDatePeriod: '01 e 02 de Junho de 2025',
      shortDatePeriod: '01 e 02/06/2025'
    },
    recurrenceRule: 'RRULE:FREQ=DAILY;COUNT=2',
    location: {
      name: 'Associação Médica de Minas Gerais',
      city: 'Belo Horizonte',
      state: 'MG',
      street: 'Av. João Pinheiro',
      StreetNumber: '161',
      neighborhood: 'Centro',
      zipCode: '30130-183',
      get fullAddress() {
        return `${this.name} - ${this.street}, ${this.StreetNumber} - ${this.neighborhood}, ${this.city} - ${this.state}, ${this.zipCode}`
      }
    },
    social: {
      instagram: 'https://www.instagram.com/sociedaderadiologiamg'
    },
    callToAct: {
      button01: {
        // caption: 'Faça sua inscrição',
        caption: 'Emita o seu certificado',
        link: 'https://eventosis.com.br/credenciamento/jmr2024/'
      },
      button02: {
        //caption: 'Se inscreva agora na Jornada',
        caption: 'Emita o seu certificado',
        link: 'https://eventosis.com.br/credenciamento/jmr2024/'
      },
      button03: {
        // caption: 'Se inscreva Hands On',
        caption: 'Emita o seu certificado',
        link: 'https://eventosis.com.br/credenciamento/jmr2024/'
      },
      button04: {
        // caption: 'Se inscreva na Jornada',
        caption: 'Emita o seu certificado',
        link: 'https://eventosis.com.br/credenciamento/jmr2024/'
      },
      button05: {
        // caption: 'Se inscreva no Curso de IA',
        caption: 'Emita o seu certificado',
        link: 'https://eventosis.com.br/credenciamento/jmr2024/'
      }
    },
    speakersForm: {
      title:
        'Formulário de inscrição de palestrantes / convidados da  XI JORNADA MINEIRA DE RADIOLOGIA | JMR 2025',
      description:
        'JMR 2025 acontecerá nos dias 01 e 02 de junho de 2025, na AMMG - Associação Médica de Minas Gerais, em Belo Horizonte - MG',
      rota: '/form/speakers',
      list: {
        title: 'Lista de palestrantes 2025',
        rota: '/speakers'
      }
    },
    events: {
      soon: true,
      cardSections: [
        {
          title: ' ',
          cardlist: [
            {
              date: '01/11',
              color: '#68517f',
              title: ['Abertura', 'Oficial'],
              link: '/pdf/01-11-abertura-oficial-30-out.pdf',
              img: '/images/cards/oppening.png',
              width: '125',
              height: '125',
              countdownTimer: 'June 01, 2025 18:00:00'
            }
          ]
        },
        {
          title: 'Programação Científica',
          cardlist: [
            {
              date: '01 e 02/11',
              color: '#052c65',
              title: 'POCUS',
              subtitle: 'SRMG ABRAMEDE/MG',
              link: '/pdf/01-e-02-11-pocus.pdf',
              img: '/images/cards/pocus.png',
              width: '63',
              height: '125'
            },
            {
              date: '01/11',
              color: '#084298',
              title: 'Mama',
              link: '/pdf/01-11-mama.pdf',
              img: '/images/cards/mama.png',
              width: '126',
              height: '125'
            },
            {
              date: '01/11',
              color: '#0a58ca',
              title: 'Geniturinário',
              link: '/pdf/01-11-geniturinário-01-out-lc.pdf',
              img: '/images/cards/geniturinario.png',
              width: '126',
              height: '125'
            },
            {
              date: '02/11',
              color: '#3d8bfd',
              title: 'Gastrointestinal',
              link: '/pdf/02-11-gastrointestinal_01-out-final.pdf',
              img: '/images/cards/gastrointestinal.png',
              width: '125',
              height: '125'
            },
            {
              date: '02/11',
              color: '#6ea8fe',
              title: 'MSK',
              link: '/pdf/02-11-musculoesquelético-01-out-final.pdf',
              img: '/images/cards/msk.png',
              width: '75',
              height: '125'
            }
          ]
        },
        {
          title: 'Hands On',
          cardlist: [
            {
              date: '02/11',
              color: '#010101',
              title: 'BI-RADS',
              link: '/pdf/02-11-hands-on-bi-rads.pdf',
              img: '/images/cards/bi-rads.png',
              width: '180',
              height: '120'
            },
            {
              date: '02/11',
              color: '#616161',
              title: 'Intervenção Mamária',
              link: '/pdf/02-11-hands-on-intervenção-mamaria.pdf',
              img: '/images/cards/intervencao-mamaria.png',
              width: '118',
              height: '125'
            }
          ]
        },
        {
          title: 'Cursos Intensivos',
          cardlist: [
            {
              date: '01/11',
              color: '#00695c',
              title: 'Intervenção não vascular',
              link: '/pdf/01-11_radiologia-intervencionista-não-vascular.pdf',
              img: '/images/cards/intervencao-nao-vascular.png',
              width: '106',
              height: '142'
            },
            {
              date: '02/11',
              color: '#26a69a',
              title: 'Inovação/IA',
              link: '/pdf/02-11-inovacao-inteligencia-artificial-em-radiologia.pdf',
              img: '/images/cards/ia.png',
              width: '166',
              height: '164'
            }
          ]
        }
      ]
    },
    comissions: [ {
        name: 'SRMG',
        get title() {
          return `Comissão Científica ${this.name}`
        },
        title: 'Comissão Científica SRMG',
        link: 'https://www.srmg.org.br',
        src: '/logo/srmg.png',
        width: 210,
        height: 60,
        members: [
          {
            imagePath: '/avatars/Benito_Pio_Ceccato_Junior.png',
            name: 'Dr. Benito Pio Ceccato Júnior'
          },
          {
            imagePath: '/avatars/Dierre_Roberto_Alvim.png',
            name: 'Dr. Dierre Roberto Alvim'
          },
          {
            imagePath: '/avatars/Elisio_Jose_Salgado_Ribeiro.png',
            name: 'Dr. Elísio José Salgado Ribeiro'
          },
          {
            imagePath: '/avatars/Flavio_Coelho_Barros.png',
            name: 'Dr. Flávio Coelho Barros'
          },
          {
            imagePath: '/avatars/Francisco_Ribeiro_Teixeira_Junior.png',
            name: 'Dr. Francisco Ribeiro Teixeira Junior'
          },
          {
            imagePath: '/avatars/Leonardo _Campos_de_Queiroz.png',
            name: 'Dr. Leonardo  Campos de Queiroz'
          },
          {
            imagePath: '/avatars/Luis_Ronan_MF_de_Souza.png',
            name: 'Dr. Luis Ronan MF de Souza'
          },
          {
            imagePath: '/avatars/Luiz_Ernani_Meira_Junior.png',
            name: 'Dr. Luiz Ernani Meira Júnior'
          },
          {
            imagePath: '/avatars/Paulo_Ramos_Botelho_Antunes.png',
            name: 'Dr. Paulo Ramos Botelho Antunes'
          },
          {
            imagePath: '/avatars/Pedro_Paulo_Nunes_Pereira.png',
            name: 'Dr. Pedro Paulo Nunes Pereira'
          },
          {
            imagePath: '/avatars/Raphael_Guedes.png',
            name: 'Dr. Raphael Guedes'
          },
          {
            imagePath: '/avatars/Robertson_Correa_Bernardo.png',
            name: 'Dr. Robertson Corrêa Bernardo'
          },
          {
            imagePath: '/avatars/Rogerio_Augusto_Pinto_Silva.png',
            name: 'Dr. Rogerio Augusto Pinto Silva'
          },
          {
            imagePath: '/avatars/Ana_Paula_Campos_Rocha.png',
            name: 'Dra.Ana Paula Campos Rocha'
          },
          {
            imagePath: '/avatars/Bruna_Cesario_Senna.png',
            name: 'Dra.Bruna Cesário Senna.jpg'
          },
          {
            imagePath: '/avatars/Adriene_Moraes_Campos.png',
            name: 'Dra. Adriene Moraes Campos'
          },
          {
            imagePath: '/avatars/Anna_Christina_Gruber.png',
            name: 'Dra. Anna Christina Gruber'
          },
          {
            imagePath: '/avatars/Ivie_Braga_de_Paula.png',
            name: 'Dra. Ivie Braga de Paula'
          },
          {
            imagePath: '/avatars/Luciana_Costa_Silva.png',
            name: 'Dra. Luciana Costa Silva'
          },
          {
            imagePath: '/avatars/Luisa_Leitao.png',
            name: 'Dra. Luisa Leitão'
          },
          {
            imagePath: '/avatars/Maria_de_Fatima_Vilaca_Lobato.png',
            name: 'Dra. Maria de Fátima Vilaça Lobato'
          },
          {
            imagePath: '/avatars/Maria_Fernanda_Borges_Abreu.png',
            name: 'Dra. Maria Fernanda Borges Abreu'
          },
          {
            imagePath: '/avatars/Patricia_El_Bacha.png',
            name: 'Dra. Patrícia El Bacha'
          },
          {
            imagePath: '/avatars/Paula_Figueiredo_Rocha.png',
            name: 'Dra. Paula Figueiredo Rocha'
          },
          {
            imagePath: '/avatars/Raquel_Del-Fraro_Rabelo.png',
            name: 'Dra. Raquel Del-Fraro Rabelo'
          },
          {
            imagePath: '/avatars/Raquel_Sadala_Mendes.png',
            name: 'Dra. Raquel Sadala Mendes'
          },
          {
            imagePath: '/avatars/Rogeria_Nobre_Rodrigues.png',
            name: 'Dra. Rogéria Nobre Rodrigues'
          },
          {
            imagePath: '/avatars/Tatiana_Martins.png',
            name: 'Dra. Tatiana Martins'
          }
        ]
      },
      {
        name: 'SOGIMIG',
        get title() {
          return `Comissão Científica ${this.name}`
        },
        link: 'https://www.sogimig.org.br',
        src: '/logo/sogimig.png',
        width: 150,
        height: 60,
        members: [
          {
            imagePath: '/avatars/Cassio_Furtini_Haddad.png',
            name: 'Dr. Cássio Furtini Haddad'
          },
          {
            imagePath: '/avatars/Angelica_Lemos_Debs_Diniz.png',
            name: 'Dra. Angélica Lemos Debs Diniz'
          },
          {
            imagePath: '/avatars/Ines_Katerina_Damasceno.png',
            name: 'Dra. Ines Katerina Damasceno'
          },
          {
            imagePath: '/avatars/Inessa_Beraldo_Bonomi.png',
            name: 'Dra. Inessa Beraldo Bonomi'
          },
          {
            imagePath: '/avatars/Joana_Sara_Fonseca_Dumont.png',
            name: 'Dra. Joana Sara Fonseca Dumont'
          },
          {
            imagePath: '/avatars/Lara_Rodrigues_Felix.png',
            name: 'Dra. Lara Rodrigues Félix'
          },
          {
            imagePath: '/avatars/Liv_Braga_de_Paula.png',
            name: 'Dra. Liv Braga de Paula'
          },
          {
            imagePath: '/avatars/Mariana_Seabra.png',
            name: 'Dra. Mariana Seabra'
          }
        ]
      }
    ]
  }
}