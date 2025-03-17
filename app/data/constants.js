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
            imagePath: '/avatars/Luciana_Costa.png',
            name: 'Dra. Luciana Costa'
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
    ],
    priceTables: {
      title: 'Valores das Inscrições',
      tableSections: [
        {
          title: {
            tag: 'h2',
            text: ['XI Jornada Miniera de Radiologia e', 'XIV Congresso de Imaginologia da Mulher'],
            color: '#BB2426'
          },
          subtitle: {
            tag: 'h4',
            text: ['* necessário enviar comprovante'],
            color: '#f8f9fa'
          },
          bestBefore: {
            rowStart: 2,
            date: ['20042025', '20052025', '25062025', '28062025']
          },
          callToAct: {
            caption: 'Faça sua inscrição na Jornada',
            link: '#'
          },
          table: {
            headers: [
              { desktop: 'Categorias', mobile: 'Categ.' },
              { desktop: 'Vagas', mobile: 'Vagas' },
              { desktop: ['Desconto', 'até 20/04'], mobile: 'Até 20/04' },
              { desktop: ['Desconto', 'até 20/05'], mobile: 'Até 20/05' },
              { desktop: ['Desconto', 'até 25/06'], mobile: 'Até 25/06' },
              { desktop: 'No Local', mobile: 'No Local' }
            ],
            rows: [
              { cells: ['Médico Sócio SRMG/SOGIMIG', '', 'R$ 325', 'R$ 355', 'R$ 385', 'R$ 415'] },
              { cells: ['Médico Não Sócio ou Inadimplente', '', 'R$ 325', 'R$ 355', 'R$ 385', 'R$ 415'] },
              { cells: ['Residente Radiologia ou Ginecologia*', '', 'R$ 179', 'R$ 199', 'R$ 219', 'R$ 269'] },
              { cells: ['Acadêmico de Medicina Sócio SAMMG', {value: '80', rowspan: 2}, 'R$ 67', 'R$ 87', 'R$ 107', 'R$ 147'] },
              { cells: ['Acadêmico de Medicina não Sócio SAMMG*', '', 'R$ 177', 'R$ 197', 'R$ 217', 'R$ 297'] },
              { cells: ['Tecnólogos e Técnicos*', '100', 'R$ 68', 'R$ 88', 'R$ 108', 'R$ 148'] },
              { cells: ['Sala POCUS 28/06 (não Radiologia ou GO)*', '40', 'R$ 243,75', 'R$ 266,25', 'R$ 288,75', 'R$ 311.25'] },
              { cells: ['Day use: Médico Sócio Quite SRMG/SOGIMIG', '', 'R$ 243,75', 'R$ 266,25', 'R$ 288,75', 'R$ 311.25'] },
              { cells: ['Day use: Médico Não Sócio ou Inadimplente', '', 'R$ 243,75', 'R$ 266,25', 'R$ 288,75', 'R$ 311.25'] }
            ]
          }
        },
        {
          title: {
            tag: 'h2',
            text: ['Hands On', 'RM Pelve para Ginecologistas'],
            color: '#052c65'
          },
          subtitle: {
            tag: 'h4',
            text: ['* necessário enviar comprovante'],
            color: '#f8f9fa'
          },
          bestBefore: {
            rowStart: 1,
            date: ['20042025', '20052025', '25062025', '28062025']
          },
          callToAct: {
            caption: 'Faça sua inscrição no Hands On',
            link: '#'
          },
          table: {
            headers: [
              { desktop: 'Categorias', mobile: 'Categ.' },
              { desktop: ['Desconto', 'até 20/04'], mobile: 'Até 20/04' },
              { desktop: ['Desconto', 'até 20/05'], mobile: 'Até 20/05' },
              { desktop: ['Desconto', 'até 25/06'], mobile: 'Até 25/06' },
              { desktop: 'No Local', mobile: 'No Local' }
            ],
            rows: [
              { cells: ['Médico Sócio SRMG/SOGIMIG', 'R$ 297', 'R$ 322', 'R$ 347', 'R$ 372'] },
              { cells: ['Médico Não Sócio ou Inadimplente', 'R$ 597', 'R$ 622', 'R$ 647', 'R$ 672'] },
              { cells: ['Residente Radiologia ou Ginecologia*', 'R$ 179', 'R$ 199', 'R$ 219', 'R$ 269'] },
            ]
          }
        },
        {
          title: {
            tag: 'h2',
            text: 'Curso de Inteligência Artificial',
            color: '#052c65'
          },
          bestBefore: {
            rowStart: 1,
            date: ['20042025', '20052025', '25062025', '28062025']
          },
          callToAct: {
            caption: 'Faça sua inscrição no Curso de IA',
            link: '#'
          },
          table: {
            headers: [
              { desktop: 'Categorias', mobile: 'Categ.' },
              { desktop: ['Desconto', 'até 20/04'], mobile: 'Até 20/04' },
              { desktop: ['Desconto', 'até 20/05'], mobile: 'Até 20/05' },
              { desktop: ['Desconto', 'até 25/06'], mobile: 'Até 25/06' },
              { desktop: 'No Local', mobile: 'No Local' }
            ],
            rows: [
              { cells: ['Aberto ao Público', 'R$ 88', 'R$ 98', 'R$ 118', 'R$ 148'] }
            ]
          }
        }
      ]
    }
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
      soon: false,
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
              countdownTimer: 'November 01, 2024 18:00:00'
            }
          ]
        },
        {
          title: 'Programação Científica',
          orderBy: {
            date: true,
            title: true
          },
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
          orderBy: {
            date: true,
            title: true
          },
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
          orderBy: {
            date: true,
            title: true
          },
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
            imagePath: '/avatars/Luciana_Costa.png',
            name: 'Dra. Luciana Costa'
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
    ],
    priceTables: {
      title: 'Valores das Inscrições',
      tableSections: [
        {
          title: {
            tag: 'h2',
            text: ['X Jornada Miniera de Radiologia e', 'I Jornada Mineira POCUS ABRAMEDE/MG e SRMG'],
            color: '#BB2426'
          },
          bestBefore: {
            rowStart: 1,
            date: ['20102025', '30102025', '03112025']
          },
          callToAct: {
            caption: 'Emita o Seu Certificado',
            link: 'https://eventosis.com.br/credenciamento/jmr2024/'
          },
          table: {
            headers: [
              { desktop: 'Categorias', mobile: 'Categ.' },
              { desktop: ['Desconto', 'até 20/10'], mobile: 'Até 20/10' },
              { desktop: ['Desconto', 'até 30/10'], mobile: 'Até 30/10' },
              { desktop: 'No Local', mobile: 'No Local' }
            ],
            rows: [
              { cells: ['Associados Quites', 'R$ 290', 'R$ 330', 'R$ 420'] },
              { cells: ['Não Associados ou Inadimplentes', 'R$ 325', 'R$ 355', 'R$ 385'] },
              { cells: ['Residente', 'R$ 500', 'R$ 550', 'R$ 650'] },
              { cells: ['Acadêmicos', 'R$ 80', 'R$ 90', 'R$ 100'] },
            ]
          }
        },
        {
          title: {
            tag: 'h2',
            text: [
              'Além de Participar da Jornada,',
              'Você pode Adquirir Separadamente Módulos Hands On',
              '(BI-RADS ou Intervenção Mamária)'
            ],
            color: '#052c65'
          },
          subtitle: {
            tag: 'h4',
            text: [
              '*Valor Individual de Cada Módulo Hands On',
              '*Vagas Limitadas'],
            color: '#f8f9fa'
          },
          bestBefore: {
            rowStart: 1,
            date: ['20102025', '30102025', '03112025']
          },
          callToAct: {
            caption: 'Emita o Seu Certificado',
            link: 'https://eventosis.com.br/credenciamento/jmr2024/'
          },
          table: {
            headers: [
              { desktop: 'Categorias', mobile: 'Categ.' },
              { desktop: ['Desconto', 'até 20/10'], mobile: 'Até 20/10' },
              { desktop: ['Desconto', 'até 30/10'], mobile: 'Até 30/10' },
              { desktop: 'No Local', mobile: 'No Local' }
            ],
            rows: [
              { cells: ['Associados Quites', 'R$ 320', 'R$ 360', 'R$ 400'] },
              { cells: ['Não Associados ou Inadimplentes', 'R$ 460', 'R$ 500', 'R$ 550'] },
              { cells: ['Residente', 'R$ 260', 'R$ 300', 'R$ 340'] }
            ]
          }
        },
        {
          title: {
            tag: 'h2',
            text: ['Curso Intensivo de Inteligência Artificial'],
            color: '#052c65'
          },
          bestBefore: {
            rowStart: 1,
            date: ['20102025', '30102025', '03112025']
          },
          callToAct: {
            caption: 'Emita o Seu Certificado',
            link: 'https://eventosis.com.br/credenciamento/jmr2024/'
          },
          table: {
            headers: [
              { desktop: 'Categorias', mobile: 'Categ.' },
              { desktop: ['Desconto', 'até 20/10'], mobile: 'Até 20/10' },
              { desktop: ['Desconto', 'até 30/10'], mobile: 'Até 30/10' },
              { desktop: 'No Local', mobile: 'No Local' }
            ],
            rows: [
              { cells: ['Associados Quites', 'R$ 0', 'R$ 0', 'R$ 0'] },
              { cells: ['Não Associados ou Inadimplentes', 'R$ 0', 'R$ 0', 'R$ 0'] },
              { cells: ['Residente', 'R$ 0', 'R$ 0', 'R$ 0'] },
              { cells: ['Acadêmicos', 'R$ 0', 'R$ 0', 'R$ 0'] },
            ]
          }
        },
      ]
    },
    sponsorShip: {
      promoters: {
        title: 'Realização:',
        className: 'promoters',
        brands: [ {
            name: 'ABRAMEDE/MG',
            src: '/logo/abramed-mg.png',
            href: 'https://www.abramedemg.org.br/',
            width: 118.91,
            height: 43
          }, {
            name: 'SRMG',
            src: '/logo/srmg.png',
            href: 'http://www.srmg.org.br/',
            width: 150,
            height: 43
          },
        ]
      },
      sponsors: {
        title: 'Patrocinadores:',
        className: 'sponsors',
        level: {
          gold: {
            title: 'Ouro',
            className: 'gold',
            brands: [{
              name: 'Bayer',
              src: '/logo/bayer.png',
              href: 'https://www.bayer.com.br/pt/',
              width: 40,
              height: 40
            }, {
              name: 'Grupo Fleury',
              src: '/logo/fleury.png',
              href: 'https://www.fleury.com.br/',
              width: 100,
              height: 28.34
            }, {
              name: 'Hermes Pardini',
              src: '/logo/hermes-pardini.png',
              href: 'https://www.hermespardini.com.br/',
              width: 80,
              height: 36.55
            }],
          },
          silver: {
            title: 'Prata',
            className: 'silver',
            brands: [{
              name: 'Guerbet',
              src: '/logo/guerbet.png',
              href: 'https://www.guerbet.com/pt-br',
              width: 80,
              height: 25.39
            }, {
              name: 'Dasa',
              src: '/logo/dasa.png',
              href: 'https://www.dasa.com.br/',
              width: 50,
              height: 13.67
            }, {
              name: 'São Marcos',
              src: '/logo/sao-marcos.png',
              href: 'https://saomarcoslaboratorio.com.br/',
              width: 70,
              height: 42.52,
              className: 'saoMarcosClass',
            }, {
              name: 'Prontofar',
              src: '/logo/prontofar.png',
              href: 'https://www.prontofar.com.br/',
              width: 80,
              height: 36.42
            }, {
              name: 'Unimed BH',
              src: '/logo/unimed-bh.png',
              href: 'https://www.unimedbh.com.br/',
              width: 80,
              height: 33.47
            }],
          },
          bronze: {
            title: 'Bronze',
            className: 'bronze',
            brands: [{
              name: 'Agis',
              src: '/logo/agis.png',
              href: 'https://agismedical.com.br/',
              width: 60,
              height: 15.19
            }, {
              name: 'Bracco',
              src: '/logo/bracco.png',
              href: 'https://www.bracco.com.br/pt-br/',
              width: 40,
              height: 35.11
            }, {
              name: 'Canon Medical Systems',
              src: '/logo/canon-medical-systems.png',
              href: 'https://br.medical.canon/',
              width: 50,
              height: 18.84
            }, {
              name: 'Ceu Diagnósticos',
              src: '/logo/ceu-diagnosticos.png',
              href: 'https://www.clinicaceu.com.br/',
              width: 60,
              height: 32.36
            }, {
              name: 'Mhédica',
              src: '/logo/mhedica.png',
              href: 'https://www.mhedica.com.br/',
              width: 80,
              height: 20.94
            }, {
              name: 'Supri Medical',
              src: '/logo/supri-medical.png',
              href: 'https://www.supri-medical.com/',
              width: 100,
              height: 20.81
            }, {
              name: 'Gphantom',
              src: '/logo/gphantom.png',
              href: 'https://www.gphantom.com.br/',
              width: 60,
              height: 30.78
            }, {
              name: 'CRM MG',
              src: '/logo/crm-mg.png',
              href: 'https://crmmg.org.br/',
              width: 60,
              height: 18.84
            }, {
              name: 'Join',
              src: '/logo/join.png',
              href: 'https://www.joindigitalsolution.com.br/',
              width: 45,
              height: 42.75,
              rounded: true
            }],
          },
        },
      },
      supports: {
        title: 'Apoio:',
        className: 'promoters',
        brands: [{
          name: 'AMMG',
          src: '/logo/ammg.png',
          href: 'https://ammg.org.br/',
          width: 80,
          height: 28.58
        }, {
          name: 'CBR',
          src: '/logo/cbr.png',
          href: 'https://cbr.org.br/',
          width: 80,
          height: 40
        }],
      },
      organizer: {
        title: 'Organização:',
        className: 'promoters',
        brands: [{
          name: 'Core',
          src: '/logo/core.png',
          href: '#',
          width: 80,
          height: 32.63
        }],
      },
    }
  },
  2025: {
    title:
      'JMR 2025 & CIM 2025 – Inovação e excelência no diagnóstico por imagem | 27 e 28 de Junho de 2025',
    description:
      'Nos dias 27 e 28 de Junho de 2025, Belo Horizonte será palco de dois grandes eventos científicos: a Jornada Mineira de Radiologia 2025 (JMR), organizada pela SRMG, e o Congresso de Imaginologia da Mulher 2025 (CIM), realizado em parceria com a SOGIMIG. A JMR 2025 reunirá especialistas de diversas áreas da radiologia para discutir os avanços mais recentes em imagem abdominal, musculoesquelética, neurorradiologia, radiologia torácica, intervenção guiada por imagem e muito mais. Já o CIM 2025 trará um olhar aprofundado sobre a imagem da mulher, abordando inovações tecnológicas e diagnósticas. Com uma programação dinâmica de palestras, workshops e mesas-redondas, o evento será uma oportunidade única de aprendizado, atualização e networking. Garanta sua participação e esteja na vanguarda da radiologia! Nos vemos em junho de 2025! ',
    ogTitle: 'JMR 2025 - Jornada Mineira de Radiologia',
    ogDescription:
      'Junte-se à Jornada Mineira de Radiologia 2025 e descubra as inovações na área de diagnóstico por imagem.',
    bannerText: [
      'Vem aí a XI Jornada Mineira de Radiologia e o',
      'XIV Congresso de Imaginologia da Mulher'
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
      extendedDatePeriod: '27 e 28 de Junho de 2025',
      shortDatePeriod: '27 e 28/06/2025'
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
        caption: 'Em breve, faça a sua inscrição',
        link: 'https://eventosis.com.br/credenciamento/jmr2024/'
      },
      button02: {
        //caption: 'Se inscreva agora na Jornada',
        caption: 'Se inscreva, em breve, na Jornada',
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
        'JMR 2025 acontecerá nos dias 27 e 28 de Junho de 2025, na AMMG - Associação Médica de Minas Gerais, em Belo Horizonte - MG',
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
          color: '#00695C', // Dark Teal Green
          ratio: [125, 125],
          orderBy: {
            date: true,
            title: true
          },
          cardlist: [
            {
              date: '27 e 28/06',
              color: '#004D40', // Deep Teal Green
              title: 'POCUS',
              img: '/images/cards/pocus.png',
              width: '63',
              height: '125'
            },
            {
              date: '27/06',
              color: '#00695C', // Dark Teal Green
              title: 'Mama',
              link: '/pdf/01-11-mama.pdf',
              img: '/images/cards/mama.png',
              width: '126',
              height: '125'
            },
            {
              date: '27/06',
              color: '#00796B', // Medium Teal Green
              title: 'Geniturinário',
              link: '/pdf/01-11-geniturinário-01-out-lc.pdf',
              img: '/images/cards/geniturinario.png',
              width: '126',
              height: '125'
            },
            {
              date: '28/06',
              color: '#00897B', // Regular Teal Green
              title: 'Gastrointestinal',
              link: '/pdf/02-11-gastrointestinal_01-out-final.pdf',
              img: '/images/cards/gastrointestinal.png',
              width: '125',
              height: '125'
            },
            {
              date: '28/06',
              color: '#009688', // Primary Teal
              title: 'MSK',
              link: '/pdf/02-11-musculoesquelético-01-out-final.pdf',
              img: '/images/cards/msk.png',
              width: '75',
              height: '125'
            },
            {
              date: '27/06',
              color: '#26A69A', // Light Teal
              title: 'US Obstetrícia',
              img: '/images/cards/us-obstetricia.png'
            },
            {
              date: '27/06',
              color: '#4DB6AC', // Lighter Teal
              title: ['Pelve', 'Feminina'],
              img: '/images/cards/pelve-feminina.png'
            },
            {
              date: '27/06',
              color: '#80CBC4', // Very Light Teal
              title: 'Neurorradiol',
              img: '/images/cards/neurorradiol.png'
            },
            {
              date: '27/06',
              color: '#2E7D32', // Forest Green
              title: ['Cabeça e', 'Pescoço'],
              img: '/images/cards/cabeca-pescoco.png'
            },
            {
              date: '27/06',
              color: '#388E3C', // Dark Green
              title: 'US Ginecologia',
              img: '/images/cards/us-ginecologia.png'
            },
            {
              date: '27/06',
              color: '#43A047', // Medium Green
              title: ['Técnicas', 'Radiológicas'],
              img: '/images/cards/tecnicas-radiologicas.png'
            },
            {
              date: '27/06',
              color: '#4CAF50', // Regular Green
              title: 'Acadêmicos',
              img: '/images/cards/academicos.png',
              height: '125'
            },
            {
              date: '27/06',
              color: '#66BB6A', // Light Green
              title: 'Tórax',
              img: '/images/cards/torax.png'
            },
          ]
        },
        {
          title: 'Hands On',
          color: '#084298', // Black
          ratio: [125, 125],
          cardlist: [
            {
              date: '28/06',
              color: '#010101',
              title: ['RM Pelve para', 'Ginecologistas'],
              img: '/images/cards/rm-pelve-para-ginecologista.png'
            }
          ]
        },
        {
          title: 'Cursos Intensivos',
          color: '#010101',
          cardlist: [
            {
              date: '02/11',
              title: 'Inovação/IA',
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
            imagePath: '/avatars/Luciana_Costa.png',
            name: 'Dra. Luciana Costa'
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
    ],
    priceTables: {
      title: 'Valores das Inscrições',
      tableSections: [
        {
          title: {
            tag: 'h2',
            text: ['XI Jornada Miniera de Radiologia e', 'XIV Congresso de Imaginologia da Mulher'],
            color: '#BB2426'
          },
          subtitle: {
            tag: 'h4',
            text: ['* necessário enviar comprovante'],
            color: '#f8f9fa'
          },
          bestBefore: {
            rowStart: 2,
            date: ['20042025', '20052025', '25062025', '28062025']
          },
          callToAct: {
            caption: 'Faça sua inscrição na Jornada',
            link: '#'
          },
          table: {
            headers: [
              { desktop: 'Categorias', mobile: 'Categ.' },
              { desktop: 'Vagas', mobile: 'Vagas' },
              { desktop: ['Desconto', 'até 20/04'], mobile: 'Até 20/04' },
              { desktop: ['Desconto', 'até 20/05'], mobile: 'Até 20/05' },
              { desktop: ['Desconto', 'até 25/06'], mobile: 'Até 25/06' },
              { desktop: 'No Local', mobile: 'No Local' }
            ],
            rows: [
              { cells: ['Médico Sócio SRMG/SOGIMIG', '', 'R$ 325', 'R$ 355', 'R$ 385', 'R$ 415'] },
              { cells: ['Médico Não Sócio ou Inadimplente', '', 'R$ 325', 'R$ 355', 'R$ 385', 'R$ 415'] },
              { cells: ['Residente Radiologia ou Ginecologia*', '', 'R$ 179', 'R$ 199', 'R$ 219', 'R$ 269'] },
              { cells: ['Acadêmico de Medicina Sócio SAMMG', {value: '80', rowspan: 2}, 'R$ 67', 'R$ 87', 'R$ 107', 'R$ 147'] },
              { cells: ['Acadêmico de Medicina não Sócio SAMMG*', '', 'R$ 177', 'R$ 197', 'R$ 217', 'R$ 297'] },
              { cells: ['Tecnólogos e Técnicos*', '100', 'R$ 68', 'R$ 88', 'R$ 108', 'R$ 148'] },
              { cells: ['Sala POCUS 28/06 (não Radiologia ou GO)*', '40', 'R$ 243,75', 'R$ 266,25', 'R$ 288,75', 'R$ 311.25'] },
              { cells: ['Day use: Médico Sócio Quite SRMG/SOGIMIG', '', 'R$ 243,75', 'R$ 266,25', 'R$ 288,75', 'R$ 311.25'] },
              { cells: ['Day use: Médico Não Sócio ou Inadimplente', '', 'R$ 243,75', 'R$ 266,25', 'R$ 288,75', 'R$ 311.25'] }
            ]
          }
        },
        {
          title: {
            tag: 'h2',
            text: ['Hands On', 'RM Pelve para Ginecologistas'],
            color: '#052c65'
          },
          subtitle: {
            tag: 'h4',
            text: ['* necessário enviar comprovante'],
            color: '#f8f9fa'
          },
          bestBefore: {
            rowStart: 1,
            date: ['20042025', '20052025', '25062025', '28062025']
          },
          callToAct: {
            caption: 'Faça sua inscrição no Hands On',
            link: '#'
          },
          table: {
            headers: [
              { desktop: 'Categorias', mobile: 'Categ.' },
              { desktop: ['Desconto', 'até 20/04'], mobile: 'Até 20/04' },
              { desktop: ['Desconto', 'até 20/05'], mobile: 'Até 20/05' },
              { desktop: ['Desconto', 'até 25/06'], mobile: 'Até 25/06' },
              { desktop: 'No Local', mobile: 'No Local' }
            ],
            rows: [
              { cells: ['Médico Sócio SRMG/SOGIMIG', 'R$ 297', 'R$ 322', 'R$ 347', 'R$ 372'] },
              { cells: ['Médico Não Sócio ou Inadimplente', 'R$ 597', 'R$ 622', 'R$ 647', 'R$ 672'] },
              { cells: ['Residente Radiologia ou Ginecologia*', 'R$ 179', 'R$ 199', 'R$ 219', 'R$ 269'] },
            ]
          }
        },
        {
          title: {
            tag: 'h2',
            text: 'Curso de Inteligência Artificial',
            color: '#052c65'
          },
          bestBefore: {
            rowStart: 1,
            date: ['20042025', '20052025', '25062025', '28062025']
          },
          callToAct: {
            caption: 'Faça sua inscrição no Curso de IA',
            link: '#'
          },
          table: {
            headers: [
              { desktop: 'Categorias', mobile: 'Categ.' },
              { desktop: ['Desconto', 'até 20/04'], mobile: 'Até 20/04' },
              { desktop: ['Desconto', 'até 20/05'], mobile: 'Até 20/05' },
              { desktop: ['Desconto', 'até 25/06'], mobile: 'Até 25/06' },
              { desktop: 'No Local', mobile: 'No Local' }
            ],
            rows: [
              { cells: ['Aberto ao Público', 'R$ 88', 'R$ 98', 'R$ 118', 'R$ 148'] }
            ]
          }
        }
      ]
    }
  },
  2026: {
    title:
      'JMR 2025 & CIM 2025 – Inovação e excelência no diagnóstico por imagem | 27 e 28 de Junho de 2025',
    description:
      'Nos dias 27 e 28 de Junho de 2025, Belo Horizonte será palco de dois grandes eventos científicos: a Jornada Mineira de Radiologia 2025 (JMR), organizada pela SRMG, e o Congresso de Imaginologia da Mulher 2025 (CIM), realizado em parceria com a SOGIMIG. A JMR 2025 reunirá especialistas de diversas áreas da radiologia para discutir os avanços mais recentes em imagem abdominal, musculoesquelética, neurorradiologia, radiologia torácica, intervenção guiada por imagem e muito mais. Já o CIM 2025 trará um olhar aprofundado sobre a imagem da mulher, abordando inovações tecnológicas e diagnósticas. Com uma programação dinâmica de palestras, workshops e mesas-redondas, o evento será uma oportunidade única de aprendizado, atualização e networking. Garanta sua participação e esteja na vanguarda da radiologia! Nos vemos em junho de 2025! ',
    ogTitle: 'JMR 2025 - Jornada Mineira de Radiologia',
    ogDescription:
      'Junte-se à Jornada Mineira de Radiologia 2025 e descubra as inovações na área de diagnóstico por imagem.',
    bannerText: [
      'Vem aí a XI Jornada Mineira de Radiologia e o',
      'XIV Congresso de Imaginologia da Mulher'
    ],
    modal: {
      active: false,
      title: 'Sorteio de Inscrição',
      description: [
        'Inscreva-se no primeiro lote e concorra a 2 assinaturas anuais da MedHubX!',
        'A JMR/CIM2025 fechou uma parceria incrível com a MedHubX, a plataforma de ensino médico referência em radiologia.',
        'Garanta sua inscrição até 20/04 e tenha a chance de levar um ano de acesso completo a conteúdos exclusivos que transformarão sua prática na radiologia!',
        'O sorteio será realizado no dia 27/06 e o resultado será divulgado nas redes sociais da SRMG.',
        'Não perca essa oportunidade. Inscreva-se agora!'
      ],
      logos: [
        {
          name: 'Jornada Mineira de Radiologia',
          get alt() {
            return `Logo da ${this.name}`
          },
          link: 'https://www.srmg.org.br',
          src: '/logo_jornada/jmr2025.png',
          width: 286,
          height: 110
        },
        {
          name: 'MedHubX',
          get alt() {
            return `Logo da ${this.name}`
          },
          link: 'https://www.medhubx.com',
          src: '/logo/medhubx.png',
          width: 237,
          height: 60,
          bgcolor: '#f8f9fa'
        }
      ],
    },
    introduction: {
      text: ['Caros colegas,', 'Juntem-se a nós nos dias 27 e 28 de junho de 2025 para um evento imperdível! Excelências no diagnóstico por imagem estarão presentes em uma programação dinâmica com os maiores especialistas da área.', 'Esperamos por vocês!'],
      host: [{
        name: 'Dra. Luciana Costa',
        imagePath: '/introduction/Luciana_Costa.png',
        title: 'Presidente da SRMG'
      }, {
        name: 'Dra. Inessa Beraldo Bonomi',
        imagePath: '/introduction/Inessa_Beraldo_Bonomi.png',
        title: 'Presidente da SOGIMIG'
      }]
    },
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
      extendedDatePeriod: '27 e 28 de Junho de 2025',
      shortDatePeriod: '27 e 28/06/2025'
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
        caption: 'Inscrições em breve...',
        link: '#'
      },
      button02: {
        //caption: 'Se inscreva agora na Jornada',
        caption: 'Inscrições em breve...',
        link: 'https://eventosis.com.br/credenciamento/jmr2024/'
      },
      button03: {
        // caption: 'Se inscreva Workshop',
        caption: 'Inscrições em breve...',
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
        'JMR 2025 acontecerá nos dias 27 e 28 de Junho de 2025, na AMMG - Associação Médica de Minas Gerais, em Belo Horizonte - MG',
      rota: '/form/speakers',
      list: {
        title: 'Lista de palestrantes 2025',
        rota: '/speakers'
      }
    },
    events: {
      soon: false,
      cardSections: [
        {
          title: ' ',
          cardlist: [
            {
              date: '27/06',
              color: 'var(--primary-clr)',
              title: ['Abertura', 'Oficial'],
              img: '/images/cards/oppening.png',
              width: '125',
              height: '125',
              countdownTimer: 'June 27, 2025 18:00:00'
            }
          ]
        },
        {
          title: 'Programação Científica',
          color: '#00695C', // Dark Teal Green
          ratio: [125, 125],
          orderBy: {
            date: true,
            title: true
          },
          cardlist: [
            {
              date: '27/06',
              title: 'POCUS',
              subtitle: 'Geral',
              link: 'https://www.canva.com/design/DAGh0-qhaPE/mUjzHR3EZT8MI47KFWEvTg/view',
              img: '/images/cards/pocus.png',
              width: '63',
              height: '125'
            },
            {
              date: '27/06',
              title: 'Mama',
              priority: 1,
              color: '#6f0273',
              link: 'https://www.canva.com/design/DAGh1LZzE0w/Lc6mWTi3Uk0xUDs1JuXURg/view',
              img: '/images/cards/mama.png',
              width: '126',
              height: '125'
            },
            {
              date: '27/06',
              title: 'Geniturinário',
              link: 'https://www.canva.com/design/DAGh1t4A8-Q/BV5bJXlF9KbA-NVtmErnkQ/view',
              img: '/images/cards/geniturinario.png',
              width: '126',
              height: '125'
            },
            {
              date: '28/06',
              title: 'Gastrointestinal',
              link: 'https://www.canva.com/design/DAGh7MBnSts/5Ir0QqWnAq_fEp1SZhPGtA/view',
              img: '/images/cards/gastrointestinal.png',
              width: '125',
              height: '125'
            },
            {
              date: '27/06',
              title: 'MSK',
              link: 'https://www.canva.com/design/DAGh1T6O3po/_tdNT2-QrZT96uETpLkp3g/view',
              img: '/images/cards/msk.png',
              width: '75',
              height: '125'
            },
            {
              date: '28/06',
              priority: 1,
              title: 'US Ginecologia',
              color: '#6f0273',
              link: 'https://www.canva.com/design/DAGh8OP2SFM/Wf7m7bl948S7z-LD5jn42A/view',
              img: '/images/cards/us-ginecologia.png'
            },
            {
              date: '27/06',
              priority: 2,
              title: 'US Obstetrícia',
              color: '#6f0273',
              link: 'https://www.canva.com/design/DAGh8L_SDCs/cLgRjDSBHL-tqmulvwWxzQ/view',
              img: '/images/cards/us-obstetricia.png'
            },
            {
              date: '27/06',
              title: ['Pelve', 'Feminina'],
              link: 'https://www.canva.com/design/DAGh0uOB_8w/0MxWc7WhtPpR9LPSDuATMA/view',
              img: '/images/cards/pelve-feminina.png'
            },
            {
              date: '27/06',
              title: ['Neuror-', 'radiologia'],
              link: 'https://www.canva.com/design/DAGh1Pihvg0/S_7A4P5jxGtfauVqzbyp0A/view',
              img: '/images/cards/neurorradiol.png'
            },
            {
              date: '28/06',
              title: ['Cabeça e', 'Pescoço'],
              link: 'https://www.canva.com/design/DAGh7oGAB4E/g4BqkZ7C57SmtO89cO2qtg/view',
              img: '/images/cards/cabeca-pescoco.png'
            },
            {
              date: '28/06',
              title: ['Técnicas', 'Radiológicas'],
              link: 'https://www.canva.com/design/DAGh653sZtU/j7SPQ5rH6CCN4cDMqxci_g/view',
              img: '/images/cards/tecnicas-radiologicas.png'
            },
            {
              date: '28/06',
              title: 'Acadêmicos',
              link: 'https://www.canva.com/design/DAGh8cQYC6E/knKPerC6IYlF-TnpaHXwUQ/view',
              img: '/images/cards/academicos.png',
              height: '125'
            },
            {
              date: '28/06',
              title: 'Tórax',
              link: 'https://www.canva.com/design/DAGh6cSC_gM/9bhgBoXjky3UHoiu7Sw35A/view',
              img: '/images/cards/torax.png'
            },
            {
              date: '28/06',
              title: 'Intervenção não vascular',
              link: 'https://www.canva.com/design/DAGh7JhpDJs/h9JriVzK2_nKzV8qmnvFCA/view',
              img: '/images/cards/intervencao-nao-vascular.png'
            },
          ]
        },
        {
          title: 'Workshop',
          color: '#0a58ca', // Dark Blue
          ratio: [125, 125],
          cardlist: [
            {
              date: '27/06',
              title: ['RM Pelve para', 'Ginecologistas'],
              link: 'https://www.canva.com/design/DAGh71OirrI/rvExUrFJmzN6An4RtDXSqQ/view',
              img: '/images/cards/rm-pelve-para-ginecologista.png'
            }
          ]
        },
        {
          title: 'Cursos Intensivos',
          color: '#010101',
          cardlist: [
            {
              date: '28/06',
              title: ['Inteligência', 'Artificial'],
              link: 'https://www.canva.com/design/DAGh67UbIoI/wNMT_3Dit7XvK5hXhjqNKQ/view',
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
            imagePath: '/avatars/Marcelo_Silva.png',
            name: 'Dr. Marcelo Silva'
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
            imagePath: '/avatars/Aline_Lauda_Freitas_Chaves.png',
            name: 'Dra. Aline Lauda'
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
            imagePath: '/avatars/Luciana_Costa.png',
            name: 'Dra. Luciana Costa'
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
            imagePath: '/avatars/Renata_Furletti.png',
            name: 'Dra. Renata Furletti'
          },
          {
            imagePath: '/avatars/Rogeria_Nobre_Rodrigues.png',
            name: 'Dra. Rogéria Nobre Rodrigues'
          },
          {
            imagePath: '/avatars/Tatiana_Martins.png',
            name: 'Dra. Tatiana Martins'
          },
          {
            imagePath: '/avatars/Luciana_Batista_Nogueira.png',
            name: 'Profª. Luciana Batista Nogueira'
          },
          {
            imagePath: '/avatars/Rodrigo_Gadelha.png',
            name: 'Prof. Rodrigo Gadelha'
          },
          {
            imagePath: '/avatars/Rudolf_Moreira_Pfeilsticker.png',
            name: 'Dr. Rudolf Moreira Pfeilsticker'
          },
          {
            imagePath: '/avatars/Bernardo_Lopes_Cancado_Fonseca.png',
            name: 'Dr. Bernardo Lopes Cançado Fonseca'
          },
          {
            imagePath: '/avatars/Fabiano_F_M_Prado.png',
            name: 'Dr. Fabiano F M Prado'
          },
          {
            imagePath: '/avatars/Tereza_Sebastiao_Nogueira.png',
            name: 'Dra. Tereza Sebastião Nogueira'
          },
          {
            imagePath: '/avatars/Lauro_Santos_Silva.png.png',
            name: 'Dr. Lauro Santos Silva'
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
    ],
    priceTables: {
      title: 'Valores das Inscrições',
      tableSections: [
        {
          title: {
            tag: 'h2',
            text: ['XI Jornada Miniera de Radiologia e', 'XIV Congresso de Imaginologia da Mulher'],
            color: '#BB2426'
          },
          subtitle: {
            tag: 'h4',
            text: ['* necessário enviar comprovante'],
            color: '#f8f9fa'
          },
          bestBefore: {
            rowStart: 2,
            date: ['20042025', '20052025', '25062025', '28062025']
          },
          callToAct: {
            // caption: 'Faça sua inscrição na Jornada',
           caption: 'Inscrições em breve...',
            link: '#'
          },
          table: {
            headers: [
              { desktop: 'Categorias', mobile: 'Categ.' },
              { desktop: 'Vagas', mobile: 'Vagas' },
              { desktop: ['Desconto', 'até 20/04'], mobile: 'Até 20/04' },
              { desktop: ['Desconto', 'até 20/05'], mobile: 'Até 20/05' },
              { desktop: ['Desconto', 'até 25/06'], mobile: 'Até 25/06' },
              { desktop: 'No Local', mobile: 'No Local' }
            ],
            rows: [
              { cells: ['Médico Sócio SRMG/SOGIMIG', '', 'R$ 325', 'R$ 355', 'R$ 385', 'R$ 415'] },
              { cells: ['Médico Não Sócio ou Inadimplente', '', 'R$ 325', 'R$ 355', 'R$ 385', 'R$ 415'] },
              { cells: ['Residente Radiologia ou Ginecologia*', '', 'R$ 179', 'R$ 199', 'R$ 219', 'R$ 269'] },
              { cells: ['Acadêmico de Medicina Sócio SAMMG', {value: '80', rowspan: 2}, 'R$ 67', 'R$ 87', 'R$ 107', 'R$ 147'] },
              { cells: ['Acadêmico de Medicina não Sócio SAMMG*', '', 'R$ 177', 'R$ 197', 'R$ 217', 'R$ 297'] },
              { cells: ['Tecnólogos e Técnicos*', '100', 'R$ 68', 'R$ 88', 'R$ 108', 'R$ 148'] },
              { cells: ['Sala POCUS 28/06 (não Radiologia ou GO)*', '40', 'R$ 243,75', 'R$ 266,25', 'R$ 288,75', 'R$ 311.25'] },
              { cells: ['Day use: Médico Sócio Quite SRMG/SOGIMIG', '', 'R$ 243,75', 'R$ 266,25', 'R$ 288,75', 'R$ 311.25'] },
              { cells: ['Day use: Médico Não Sócio ou Inadimplente', '', 'R$ 243,75', 'R$ 266,25', 'R$ 288,75', 'R$ 311.25'] }
            ]
          }
        },
        {
          title: {
            tag: 'h2',
            text: ['Workshop', 'RM Pelve para Ginecologistas'],
            color: '#052c65'
          },
          subtitle: {
            tag: 'h4',
            text: ['* necessário enviar comprovante'],
            color: '#f8f9fa'
          },
          bestBefore: {
            rowStart: 1,
            date: ['20042025', '20052025', '25062025', '28062025']
          },
          callToAct: {
            // caption: 'Faça sua inscrição no Hands On',
            caption: 'Inscrições em breve...',
            link: '#'
          },
          table: {
            headers: [
              { desktop: 'Categorias', mobile: 'Categ.' },
              { desktop: ['Desconto', 'até 20/04'], mobile: 'Até 20/04' },
              { desktop: ['Desconto', 'até 20/05'], mobile: 'Até 20/05' },
              { desktop: ['Desconto', 'até 25/06'], mobile: 'Até 25/06' },
              { desktop: 'No Local', mobile: 'No Local' }
            ],
            rows: [
              { cells: ['Médico Sócio SRMG/SOGIMIG', 'R$ 297', 'R$ 322', 'R$ 347', 'R$ 372'] },
              { cells: ['Médico Não Sócio ou Inadimplente', 'R$ 597', 'R$ 622', 'R$ 647', 'R$ 672'] },
              { cells: ['Residente Radiologia ou Ginecologia*', 'R$ 179', 'R$ 199', 'R$ 219', 'R$ 269'] },
            ]
          }
        },
        {
          title: {
            tag: 'h2',
            text: 'Curso de Inteligência Artificial',
            color: '#052c65'
          },
          bestBefore: {
            rowStart: 1,
            date: ['20042025', '20052025', '25062025', '28062025']
          },
          callToAct: {
            // caption: 'Faça sua inscrição no Curso de IA',
            caption: 'Inscrições em breve...',
            link: '#'
          },
          table: {
            headers: [
              { desktop: 'Categorias', mobile: 'Categ.' },
              { desktop: ['Desconto', 'até 20/04'], mobile: 'Até 20/04' },
              { desktop: ['Desconto', 'até 20/05'], mobile: 'Até 20/05' },
              { desktop: ['Desconto', 'até 25/06'], mobile: 'Até 25/06' },
              { desktop: 'No Local', mobile: 'No Local' }
            ],
            rows: [
              { cells: ['Aberto ao Público', 'R$ 88', 'R$ 98', 'R$ 118', 'R$ 148'] }
            ]
          }
        }
      ]
    },
    sponsorShip: {
      promoters: {
        title: 'Realização:',
        className: 'promoters',
        brands: [ {
            name: 'SOGIMIG',
            src: '/logo/sogimig.png',
            href: 'https://www.sogimig.org.br/',
            width: 90,
            height: 60
          }, {
            name: 'SRMG',
            src: '/logo/srmg.png',
            href: 'http://www.srmg.org.br/',
            width: 150,
            height: 43
          },
        ]
      },
      sponsors: {
        title: 'Patrocinadores:',
        className: 'sponsors',
        level: {
          gold: {
            title: 'Ouro',
            className: 'gold',
            brands: [{
              name: 'Unimed BH',
              src: '/logo/unimed-bh.png',
              href: 'https://www.unimedbh.com.br/',
              width: 80,
              height: 33.47
            }],
          },
          silver: {
            title: 'Prata',
            className: 'silver',
            brands: [{
              name: 'Bayer',
              src: '/logo/bayer.png',
              href: 'https://www.bayer.com.br/pt/',
              width: 40,
              height: 40
            }, {
              name: 'Telelaudo',
              src: '/logo/telelaudo.png',
              href: 'https://www.telelaudo.com.br/',
              width: 84.73,
              height: 30
            }],
          },
          bronze: {
            title: 'Bronze',
            className: 'bronze',
            brands: [{
              name: 'Ceu Diagnósticos',
              src: '/logo/ceu-diagnosticos.png',
              href: 'https://www.clinicaceu.com.br/',
              width: 60,
              height: 32.36
            }],
          },
        },
      },
      supports: {
        title: 'Apoio:',
        className: 'promoters',
        brands: [{
          name: 'MedHubX',
          src: '/logo/medhubx.png',
          href: 'https://www.medhubx.com',
          width: 110,
          height: 27.86
        }],
      },
      institutionalSupports: {
        title: 'Apoio Institucional:',
        className: 'promoters',
        brands: [{
          name: 'AMMG',
          src: '/logo/ammg.png',
          href: 'https://ammg.org.br/',
          width: 80,
          height: 28.58
        }, {
          name: 'CBR',
          src: '/logo/cbr.png',
          href: 'https://cbr.org.br/',
          width: 80,
          height: 40
        }, {
          name: 'CRTR3',
          src: '/logo/crtr3.png',
          href: 'https://www.crtrmg.org.br/',
          width: 80,
          height: 36.47
        }, {
          name: 'SAMMG',
          src: '/logo/sammg.png',
          href: 'https://www.sammg.com.br/',
          width: 80,
          height: 15.39
        }],
      },
      organizer: {
        title: 'Organização:',
        className: 'promoters',
        brands: [{
          name: 'Core',
          src: '/logo/core.png',
          href: '#',
          width: 80,
          height: 32.63
        }],
      },
    }
  }
}