// get courses() {
//   return [
//     ...publicCourses('courses', 2028),
//     ...[]
//   ]
// },
const publicCourses = (branch, year) => {
  return [...eventData[year].registrationForm.categories[0]?.[branch]] || [];
}
const publicGetGeneralProgram = (branchs = [], year) => {
  const generalProgram = branchs.map(branch => {
    return eventData[year].registrationForm?.generalProgram?.[branch];
  });
  return [...generalProgram];
}

export const eventData = {
  2024: {
    event: {
      name: 'Jornada Mineira de Radiologia 2024',
      shortName: 'JMR & CIM 2024',
      date: '1 e 2 de novembro de 2024',
      shortDate: '01 e 02/11/2024',
      email: 'srmg@srmg.org.br',
      bcc: 'jmr@@srmg.org.br',
      phone: '(27)98133-0708',
    },
    title:
      'X Jornada Mineira de Radiologia & I Jornada Mineira de POCUS ABRAMEDE/MG e SRMG | 01 e 02 de Novembro de 2024',
    description:
      'A X Jornada Mineira de Radiologia e Diagnóstico por Imagem (JMR) e a I Jornada de POCUS ABRAMEDE/MG e SRMG acontecerão nos dias 1º e 2 de novembro de 2024, na Associação Médica de Minas Gerais, em Belo Horizonte. O encontro vai reunir profissionais renomados, especialistas e estudantes para discutir as mais recentes inovações e técnicas em radiologia e ultrassonografia, com foco no aprimoramento de práticas clínicas ligadas ao abdômen,  radiologia musculoesquelética e intervenção guiada por imagem. Durante os dias de evento, os participantes terão a oportunidade de assistir a palestras, workshops e mesas-redondas, abordando temas relevantes e atuais que impactam diretamente o dia a dia dos profissionais da saúde. Além disso, a JMR 2024 será uma excelente oportunidade para networking, permitindo a troca de experiências entre colegas e o fortalecimento das conexões profissionais. O evento é promovido pela Sociedade de Radiologia e Diagnóstico por Imagem de Minas Gerais (SRMG) e pela Associação Brasileira de Medicina de Emergência (Abramede) - MG.',
    ogTitle: 'JMR 2024 - Jornada Mineira de Radiologia',
    ogDescription:
      'Junte-se à Jornada Mineira de Radiologia 2024 e descubra as inovações na área de diagnóstico por imagem.',
    banner: {
      description: [
        'Emita o seu certificado',
        'clicando em um dos botões abaixo.'
      ],
    },
    promoters: {
      callToAct: {
        link: 'https://eventosis.com.br/credenciamento/jmr2024/'
      },
      brands:[{
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
      ]
    },
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
      callToAct: {
        link: 'https://eventosis.com.br/credenciamento/jmr2024/'
      },
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
            text: ['X Jornada Mineira de Radiologia e', 'I Jornada Mineira POCUS ABRAMEDE/MG e SRMG'],
            color: '#BB2426'
          },
          bestBefore: {
            rowStart: 1,
            date: ['20102024', '30102024', '03112024']
          },
          callToAct: {
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
            date: ['20102024', '30102024', '03112024']
          },
          callToAct: {
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
            date: ['20102024', '30102024', '03112024']
          },
          callToAct: {
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
    event: {
      name: 'Jornada Mineira de Radiologia e Congresso de Imaginologia da Mulher 2025',
      shortName: 'JMR & CIM 2025',
      date: '27 e 28 de Junho de 2025',
      shortDate: '27 e 28/06/2025',
      email: 'srmg@srmg.org.br',
      bcc: 'jmr@srmg.org.br',
      phone: '(27)98133-0708',
      subscriptionsOpened: false,
      subscriptionsClosed: true,
      certificatesAvailable: false,
    },
    title:
      'JMR & CIM 2025 – Inovação e excelência no diagnóstico por imagem | 27 e 28 de Junho de 2025',
    description:
      [
        'Nos dias 27 e 28 de Junho de 2025, Belo Horizonte será palco de dois grandes eventos científicos: a Jornada Mineira de Radiologia 2025 (JMR), organizada pela SRMG, e o Congresso de Imaginologia da Mulher 2025 (CIM), realizado em parceria com a SOGIMIG.',
        'JMR 2025 reunirá especialistas de diversas áreas da radiologia para discutir os avanços mais recentes em imagem abdominal, musculoesquelética, neurorradiologia, radiologia torácica, intervenção guiada por imagem e muito mais.',
        'Já o CIM 2025 trará um olhar aprofundado sobre a imagem da mulher, abordando inovações tecnológicas e diagnósticas.',
        'Com uma programação dinâmica de palestras, workshops e mesas-redondas, o evento será uma oportunidade única de aprendizado, atualização e networking.',
        'Garanta sua participação e esteja na vanguarda da radiologia!',
        'Nos vemos em junho de 2025!'
      ],
    keywords: [
      'Jornada Mineira de Radiologia 2025',
      'Congresso de Imaginologia da Mulher 2025',
      'JMR 2025',
      'CIM 2025',
      'Radiologia',
      'Diagnóstico por imagem',
      'Inovação em radiologia',
      'Excelência em diagnóstico',
      'Congresso de Radiologia',
      'Radiologia Intervencionista',
      'Radiologia Musculoesquelética',
      'Radiologia Torácica',
      'Radiologia Abdominal',
      'Neurorradiologia',
      'Imagem da Mulher',
      'Imagem Abdominal',
      'Imagem Musculoesquelética',
      'Imagem Torácica',
      'Inteligencia Artificial em Radiologia'
    ],
    ogTitle: 'JMR & CIM 2025 - Jornada Mineira de Radiologia e Congresso de Imaginologia da Mulher',
    ogDescription:
      'Junte-se à Jornada Mineira de Radiologia e ao Congresso de Imaginologia da Mulher 2025 e descubra as inovações na área de diagnóstico por imagem.',
    banner: {
      description: ['Regulamento Submissão de', 'Trabalhos JMR/CIM2025'],
      button: {
        caption: 'Clique aqui para acessar o regulamento!',
        link: 'https://www.canva.com/design/DAGjujtuRg8/UE46Fq6VPopeumkfxUrFZw/view'
      }
    },
    modal: [
      {
        id: 1,
        active: false,
        expireAt: '2025-04-30T23:59:59-0300',
        title: 'Sorteio de Inscrição',
        description: [
          'Inscreva-se no primeiro lote e concorra a 2 assinaturas anuais da MedHubX!',
          'A JMR/CIM2025 fechou uma parceria incrível com a MedHubX, a plataforma de ensino médico referência em radiologia.',
          'Garanta sua inscrição até 30/04 e tenha a chance de levar um ano de acesso completo a conteúdos exclusivos que transformarão sua prática na radiologia!',
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
            width: 207.92,
            height: 80
          },
          {
            name: 'MedHubX',
            get alt() {
              return `Logo da ${this.name}`
            },
            link: 'https://www.medhubx.com',
            src: '/logo/medhubx.png',
            width: 172.17,
            height: 43.62,
            bgcolor: '#f8f9fa'
          }
        ],
      }, {
        id: 2,
        active: true,
        activeAt: '2025-05-31T00:00:00-0300',
        expireAt: '2025-06-08T23:59:59-0300',
        title: 'Comunicado Oficial – Adiamento da Divulgação dos Trabalhos Científicos Aprovados',
        description: [
          'A Comissão Organizadora da Jornada Mineira de Radiologia 2025 / Congresso de Imagem da Mulher 2025 (JMR 2025 / CIM 2025) informa que, devido a um problema técnico imprevisto, a divulgação dos resultados dos trabalhos científicos aprovados, inicialmente prevista para o dia 05 de junho, será reprogramada para o dia 09 de junho de 2025.',
          'Lamentamos sinceramente o ocorrido e reforçamos nosso compromisso com a seriedade e o rigor científico em todas as etapas do evento. Sabemos da expectativa dos autores e autoras que submeteram seus trabalhos e agradecemos profundamente pela compreensão e paciência.',
          'A nova data garantirá a finalização adequada do processo de avaliação, assegurando a qualidade que é marca registrada da JMR/CIM.',
          'Estamos à disposição para eventuais dúvidas e seguimos trabalhando para oferecer um congresso científico de excelência.',
          'Atenciosamente,',
          'Comissão Organizadora da JMR 2025 / CIM 2025'
        ],
      }, {
        id: 3,
        active: false,
        activeAt: '2025-06-10T15:00:00-0300',
        expireAt: '2025-06-25T23:59:59-0300',
        title: 'Sorteio de Inscrição',
        description: [
          'Inscreva-se no terceiro lote e concorra a 3 vagas no Curso Rads do Grupo "Radiologia Abdominal - Educação em Radiologia"!',
          'A JMR/CIM2025 fechou uma parceria incrível com a Radiologia Abdominal - @radiologiabdominal, atual referência em radiologia abdominal.',
          'Garanta sua inscrição até 25/06 e tenha a chance de aprender os RADS e transformar sua prática na radiologia abdominal!',
          'O sorteio será realizado no dia 28/06 e o resultado será divulgado nas redes sociais da SRMG.',
          'Não perca essa oportunidade. Inscreva-se JÁ!'
        ],
        logos: [
          {
            name: 'Jornada Mineira de Radiologia',
            get alt() {
              return `Logo da ${this.name}`
            },
            link: 'https://www.srmg.org.br',
            src: '/logo_jornada/jmr2025.png',
            width: 207.92,
            height: 80
          },
          {
            name: 'MedHubX',
            get alt() {
              return `Logo da ${this.name}`
            },
            link: 'https://www.instagram.com/radiologiabdominal',
            src: '/logo/radiologiabdominal.png',
            width: 172.17,
            height: 76.62
          }
        ],
      }, {
        id: 4,
        active: true,
        activeAt: '2025-06-09T00:00:00-0300',
        expireAt: '2025-06-25T23:59:59-0300',
        title: 'Relação de trabalhos científicos aprovados para apresentação na JMR2025 & CIM2025',
        description: [
          'Segue abaixo a seleção dos trabalhos científicos aprovados para apresentação no evento.',
          'Aqueles selecionados como aprovado para apresentação oral, são trabalhos que a Comissão avaliadora considerou adequados para este tipo de apresentação.',
          'Obs: vide observação ao final do documento!'
        ],
        logos: [
          {
            name: 'Resultado Trabalhos Científicos',
            get alt() {
              return `Logo dos ${this.name}`
            },
            link: 'https://www.canva.com/design/DAGh1JJ42l0/ZIo-xU82XfaKEbC-7w0tJg/view',
            src: '/images/aviso2.png',
            width: 207.92,
            height: 80
          },
          {
            name: 'Resultado Trabalhos Científicos',
            get alt() {
              return `Logo dos ${this.name}`
            },
            link: 'https://www.canva.com/design/DAGh1JJ42l0/ZIo-xU82XfaKEbC-7w0tJg/view',
            src: '/images/aviso.png',
            width: 172.17,
            height: 76.62
          }
        ],
        button: {
          caption: 'Lista de trabalhos científicos classificados!',
          link: 'https://www.canva.com/design/DAGh1JJ42l0/ZIo-xU82XfaKEbC-7w0tJg/view'
        }
      }, {
        id: 5,
        active: true,
        activeAt: '2025-06-25T00:00:00-0300',
        expireAt: '2025-06-27T23:59:59-0300',
        title: 'Participe do MOMENTO ESPECIAL JMR/CIM 2025',
        description: [
          'Uma pausa na programação científica para homenagear histórias que nos inspiram',
          'e nos fazem refletir sobre o propósito da medicina.',
          'Dia 28/06 às 12h30, no Teatro Oromar Moreira!',
          'Aguardamos todos vocês!'
        ],
        logos: []
      }, {
        id: 6,
        active: true,
        activeAt: '2025-06-27T00:00:00-0300',
        expireAt: '2025-06-27T23:59:59-0300',
        backgroundImage: {
          src: '/images/resumo_programacao_jmr_cim_27062025.jpeg',
          width: 707,
          height: 1000
        },
        button: {
          caption: 'Clique aqui para ver a Programação do dia de Hoje!',
          link: 'https://www.canva.com/design/DAGh1JJ42l0/ZIo-xU82XfaKEbC-7w0tJg/view',
          selfCaption: true
        }
      }, {
        id: 7,
        active: true,
        activeAt: '2025-06-28T00:00:00-0300',
        expireAt: '2025-06-28T23:59:59-0300',
        backgroundImage: {
          src: '/images/resumo_programacao_jmr_cim_28062025.jpeg',
          width: 707,
          height: 1000
        },
        button: {
          caption: 'Clique aqui para ver a Programação do dia de Hoje!',
          link: 'https://www.canva.com/design/DAGh1JJ42l0/ZIo-xU82XfaKEbC-7w0tJg/view',
          selfCaption: true
        }
      }
    ],
    introduction: {
      text: {
        greeting: null,
        paragraph: ['Juntem-se a nós nos dias 27 e 28 de junho de 2025 para um evento imperdível! Excelências no diagnóstico por imagem estarão presentes em uma programação dinâmica com os maiores especialistas da área.', 'Esperamos por vocês!']
      },
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
    promoters: {
      callToAct: {
        caption: 'Clique aqui para fazer sua inscrição!',
        link: '#tables',
      },
      brands: [{
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
      ]
    },
    date: {
      start: '20250627T083000-0300',
      end: '20250628T180000-0300',
      extendedDatePeriod: '27 e 28 de Junho de 2025',
      shortDatePeriod: '27 e 28/06/2025'
    },
    recurrenceRule: 'RRULE:FREQ=DAILY;COUNT=2',
    location: {
      name: 'Associação Médica de Minas Gerais - AMMG',
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
    registrationForm: {
      title: 'Formulário de inscrição',
      description: 'A JMR 2025 / CIM 2025 acontecerão  nos dias 27 e 28 de Junho de 2025, na AMMG - Associação Médica de Minas Gerais, em Belo Horizonte - MG',
      paymentConfig: {
        billingType: 'UNDEFINED',
        dueDays: 3,
        url: 'https://jornada.srmg.org.br',
      },
      openToPublic: {
        title: 'Público em Geral',
        description: 'Curso aberto ao público em geral.',
        image: '/images/svg/publico.svg',
        member: [],
        receipt: {
          enabled: false
        },
        courses: [{
          title: 'Curso de Inteligência Artificial',
          description: ['Curso de Inteligência Artificial, aberto ao público em geral.'],
          image: '/images/svg/courses.svg',
          prices: [
            { bestBefore: '30/04/2025', value: 'R$ 88' },
            { bestBefore: '30/05/2025', value: 'R$ 98' },
            { bestBefore: '25/06/2025', value: 'R$ 105' },
            { bestBefore: '27/06/2025', value: 'R$ 111' },
          ]
        }],
        workshops: [],
        dayUse: null
      },
      categories: [
        {
          id: 1,
          title: 'Médico Sócio',
          description: [
            '✓Categoria destinada a médicos associados da SRMG ou SOGIMIG com anuidade 2025 quitada.',
            '✓Podem adquirir separadamente a programação científica, workshops e curso de IA. A aquisição de um não dá acesso aos demais. É necessário adquirir cada módulo separadamente.',
            '✓Caso o sistema não tenha validado a sua associação, será necessário o envio do comprovante de quitação do ano 2025.'
          ],
          image: '/images/svg/medico.svg',
          member: ['SRMG', 'SOGIMIG'],
          receipt: {
            enabled: false
          },
          journey: {
            title: 'JMR/CIM 2025',
            description: ['Adquira o acesso completo à JMR/CIM 2025'],
            image: '/images/svg/journey.svg',
            prices: [
              { bestBefore: '30/04/2025', value: 'R$ 325' },
              { bestBefore: '30/05/2025', value: 'R$ 355' },
              { bestBefore: '25/06/2025', value: 'R$ 385' },
              { bestBefore: '27/06/2025', value: 'R$ 415' },
            ],
          },
          workshops: [{
            title: 'RM Pelve para Ginecologistas',
            description: ['Workshop exclusivo para médicos.'],
            image: '/images/svg/workshops.svg',
            prices: [
              { bestBefore: '30/04/2025', value: 'R$ 70' },
              { bestBefore: '30/05/2025', value: 'R$ 80' },
              { bestBefore: '25/06/2025', value: 'R$ 87' },
              { bestBefore: '27/06/2025', value: 'R$ 94' },
            ]
          }],
          courses: [{
            title: 'Curso de Inteligência Artificial',
            description: ['Curso de Inteligência Artificial, aberto ao público em geral.'],
            image: '/images/svg/courses.svg',
            prices: [
              { bestBefore: '30/04/2025', value: 'R$ 88' },
              { bestBefore: '30/05/2025', value: 'R$ 98' },
              { bestBefore: '25/06/2025', value: 'R$ 105' },
              { bestBefore: '27/06/2025', value: 'R$ 111' },
            ]
          }],
          dayUse: {
            title: 'Day use',
            description: [
              'Acesso limitado à um único dia de evento, à escolha do participante.',
              'Verifique horários antes de adquirir cursos ou workshops.',
              'Não inclui acesso a outras atividades, que devem ser adquiridas separadamente.'
            ],
            image: '/images/svg/dayuse.svg',
            prices: [
              { bestBefore: '30/04/2025', value: 'R$ 243,75' },
              { bestBefore: '30/05/2025', value: 'R$ 266,25' },
              { bestBefore: '25/06/2025', value: 'R$ 288,75' },
              { bestBefore: '27/06/2025', value: 'R$ 311,25' },
            ],
          }
        }, {
          id: 2,
          title: 'Médico Não Sócio',
          description: [
            '✓Categoria destinada à médicos não associados da SMRG/SOGIMIG ou inadimplentes com a anuidade 2025.',
            '✓Podem adquirir separadamente a programação científica, workshops e curso de IA. A aquisição de um não dá acesso aos demais.  É necessário adquirir cada módulo separadamente.'
          ],
          image: '/images/svg/medico.svg',
          member: [],
          receipt: {
            enabled: false
          },
          journey: {
            title: 'JMR/CIM 2025',
            description: ['Adquira o acesso completo à JMR/CIM 2025'],
            image: '/images/svg/journey.svg',
            prices: [
              { bestBefore: '30/04/2025', value: 'R$ 705' },
              { bestBefore: '30/05/2025', value: 'R$ 735' },
              { bestBefore: '25/06/2025', value: 'R$ 755' },
              { bestBefore: '27/06/2025', value: 'R$ 795' },
            ]
          },
          workshops: [{
            title: 'RM Pelve para Ginecologistas',
            description: ['Workshop exclusivo para médicos.'],
            image: '/images/svg/workshops.svg',
            prices: [
              { bestBefore: '30/04/2025', value: 'R$ 158' },
              { bestBefore: '30/05/2025', value: 'R$ 165' },
              { bestBefore: '25/06/2025', value: 'R$ 170' },
              { bestBefore: '27/06/2025', value: 'R$ 180' },
            ]
          },],
          courses: [{
            title: 'Curso de Inteligência Artificial',
            description: ['Curso de Inteligência Artificial, aberto ao público em geral.'],
            image: '/images/svg/courses.svg',
            prices: [
              { bestBefore: '30/04/2025', value: 'R$ 88' },
              { bestBefore: '30/05/2025', value: 'R$ 98' },
              { bestBefore: '25/06/2025', value: 'R$ 105' },
              { bestBefore: '27/06/2025', value: 'R$ 111' },
            ]
          }],
          // get courses() {
          //   return [
          //     ...publicCourses('courses', 2028),
          //     ...[]
          //   ]
          // },
          dayUse: {
            title: 'Day use',
            description: [
              'Acesso limitado à um único dia de evento, à escolha do participante.',
              'Verifique horários antes de adquirir cursos ou workshops.',
              'Não inclui acesso a outras atividades, que devem ser adquiridas separadamente.'
            ],
            image: '/images/svg/dayuse.svg',
            prices: [
              { bestBefore: '30/04/2025', value: 'R$ 528,75' },
              { bestBefore: '30/05/2025', value: 'R$ 551,25' },
              { bestBefore: '25/06/2025', value: 'R$ 566,25' },
              { bestBefore: '27/06/2025', value: 'R$ 596,25' },
            ]
          }
        }, {
          id: 3,
          title: 'Residente ou Especializando',
          description: [
            '✓Necessário envio de comprovante atualizado de vínculo com programa de Residência, Especialização ou Fellowship em 2025.',
            '✓Podem adquirir separadamente a programação científica, workshops e curso de IA. A aquisição de um não dá acesso aos demais. É necessário adquirir cada módulo separadamente.'
          ],
          image: '/images/svg/residente.svg',
          member: ['SRMG', 'SOGIMIG'], // CPF encontrado no checkSocietyMembership
          receipt: {
            enabled: true,
            title: 'Comprovante de Residência, Especialização ou Fellowship'
          },
          journey: {
            title: 'JMR/CIM 2025',
            description: ['Adquira o acesso completo à JMR/CIM 2025'],
            image: '/images/svg/journey.svg',
            prices: [
              { bestBefore: '30/04/2025', value: 'R$ 179' },
              { bestBefore: '30/05/2025', value: 'R$ 199' },
              { bestBefore: '25/06/2025', value: 'R$ 219' },
              { bestBefore: '27/06/2025', value: 'R$ 269' },
            ],
          },
          workshops: [{
            title: 'RM Pelve para Ginecologistas',
            description: ['Workshop exclusivo para médicos.'],
            image: '/images/svg/workshops.svg',
            prices: [
              { bestBefore: '30/04/2025', value: 'R$ 60' },
              { bestBefore: '30/05/2025', value: 'R$ 70' },
              { bestBefore: '25/06/2025', value: 'R$ 80' },
              { bestBefore: '27/06/2025', value: 'R$ 90' },
            ]
          },
          ],
          courses: [{
            title: 'Curso de Inteligência Artificial',
            description: ['Curso de Inteligência Artificial, aberto ao público em geral.'],
            image: '/images/svg/courses.svg',
            prices: [
              { bestBefore: '30/04/2025', value: 'R$ 88' },
              { bestBefore: '30/05/2025', value: 'R$ 98' },
              { bestBefore: '25/06/2025', value: 'R$ 105' },
              { bestBefore: '27/06/2025', value: 'R$ 111' },
            ]
          }]
        }, {
          id: 4,
          title: 'Acadêmico de Medicina Sócio',
          description: [
            '✓Caso o sistema não tenha validado a sua associação, será necessário o envio do comprovante de quitação do ano 2025.',
            '✓Programação exclusiva no dia 28/06, com opção de frequentar quaisquer salas da programação científica no dia 27/06.',
            '✕Não têm acesso aos workshops.'
          ],
          image: '/images/svg/academico.svg',
          member: ['SAMMG'],
          receipt: {
            enabled: false
          },
          places: 80,
          journey: {
            title: 'JMR/CIM 2025',
            description: ['Adquira o acesso completo à JMR/CIM 2025'],
            image: '/images/svg/journey.svg',
            prices: [
              { bestBefore: '30/04/2025', value: 'R$ 67' },
              { bestBefore: '30/05/2025', value: 'R$ 87' },
              { bestBefore: '25/06/2025', value: 'R$ 107' },
              { bestBefore: '27/06/2025', value: 'R$ 147' },
            ]
          },
          courses: [{
            title: 'Curso de Inteligência Artificial',
            description: ['Curso de Inteligência Artificial, aberto ao público em geral.'],
            image: '/images/svg/courses.svg',
            prices: [
              { bestBefore: '30/04/2025', value: 'R$ 88' },
              { bestBefore: '30/05/2025', value: 'R$ 98' },
              { bestBefore: '25/06/2025', value: 'R$ 105' },
              { bestBefore: '27/06/2025', value: 'R$ 111' },
            ]
          }]
        }, {
          id: 5,
          title: 'Acadêmico de Medicina',
          description: [
            '✓Obrigatório o envio de comprovante de matrícula da Faculdade ano 2025.',
            '✓Programação exclusiva no dia 28/06, com opção de frequentar quaisquer salas da programação científica no dia 27/06.',
            '✕Não têm acesso aos workshops.'
          ],
          image: '/images/svg/academico.svg',
          member: [],
          receipt: {
            enabled: true,
            title: 'Comprovante de matrícula da Faculdade'
          },
          places: 80,
          journey: {
            title: 'JMR/CIM 2025',
            description: ['Adquira o acesso completo à JMR/CIM 2025'],
            image: '/images/svg/journey.svg',
            prices: [
              { bestBefore: '30/04/2025', value: 'R$ 177' },
              { bestBefore: '30/05/2025', value: 'R$ 197' },
              { bestBefore: '25/06/2025', value: 'R$ 217' },
              { bestBefore: '27/06/2025', value: 'R$ 297' },
            ]
          },
          courses: [{
            title: 'Curso de Inteligência Artificial',
            description: ['Curso de Inteligência Artificial, aberto ao público em geral.'],
            image: '/images/svg/courses.svg',
            prices: [
              { bestBefore: '30/04/2025', value: 'R$ 88' },
              { bestBefore: '30/05/2025', value: 'R$ 98' },
              { bestBefore: '25/06/2025', value: 'R$ 105' },
              { bestBefore: '27/06/2025', value: 'R$ 111' },
            ]
          }]
        }, {
          id: 6,
          title: 'Tecnólogo e Técnico',
          description: [
            '✓Obrigatório envio de comprovante de atividade em técnicas radiológicas.',
            '✓Programação exclusiva no dia 28/06, voltada ao público técnico, conforme Resolução CFM nº 2.217/2018.',
            '✕Não têm acesso aos workshops.'
          ],
          image: '/images/svg/tecnico.svg',
          member: [],
          receipt: {
            enabled: true,
            title: 'Comprovante de atividade em técnicas radiológicas'
          },
          places: 100,
          journey: {
            title: 'JMR/CIM 2025',
            description: ['Adquira o acesso completo à JMR/CIM 2025'],
            image: '/images/svg/journey.svg',
            prices: [
              { bestBefore: '30/04/2025', value: 'R$ 68' },
              { bestBefore: '30/05/2025', value: 'R$ 88' },
              { bestBefore: '25/06/2025', value: 'R$ 108' },
              { bestBefore: '27/06/2025', value: 'R$ 148' },
            ]
          },
          courses: [{
            title: 'Curso de Inteligência Artificial',
            description: ['Curso de Inteligência Artificial, aberto ao público em geral.'],
            image: '/images/svg/courses.svg',
            prices: [
              { bestBefore: '30/04/2025', value: 'R$ 88' },
              { bestBefore: '30/05/2025', value: 'R$ 98' },
              { bestBefore: '25/06/2025', value: 'R$ 105' },
              { bestBefore: '27/06/2025', value: 'R$ 111' },
            ]
          }]
        }, {
          id: 7,
          title: 'Público em Geral',
          description: [
            '✓Curso aberto ao público em geral.',
            '✓Os curso de Inteligência Artificial em Medicina e Gestão e Qualidade são abertos a qualquer pessoa com interesse no tema, incluindo médicos, acadêmicos da área da saúde, ciências biológicas ou da computação.',
            '✓A inscrição é feito por curso, com cobrança individual para cada um deles.',
            '✓A inscrição pode ser feita de forma independente, sem necessidade de participação na programação científica da Jornada.'
          ],
          image: '/images/svg/publico.svg',
          member: [],
          receipt: {
            enabled: false
          },
          courses: [{
            title: 'Curso de Inteligência Artificial',
            description: ['Curso de Inteligência Artificial, aberto ao público em geral.'],
            image: '/images/svg/courses.svg',
            prices: [
              { bestBefore: '30/04/2025', value: 'R$ 88' },
              { bestBefore: '30/05/2025', value: 'R$ 98' },
              { bestBefore: '25/06/2025', value: 'R$ 105' },
              { bestBefore: '27/06/2025', value: 'R$ 111' },
            ]
          }]
        }
      ]
    },
    events: {
      soon: false,
      callToAct: {
        caption: 'Clique aqui para fazer sua inscrição!',
        link: '#tables',
      },
      cardSections: [
        {
          title: ' ',
          color: 'var(--primary-clr)',
          cardlist: [
            {
              date: '27/06',
              title: ['Início do Evento', 'JMR/CIM 2025'],
              img: '/images/cards/oppening.png',
              width: '125',
              height: '125',
              countdownTimer: 'June 27, 2025 18:00:00'
            }, {
              date: '27/06',
              title: ['Atividades', 'Não Técnicas'],
              img: '/images/cards/relax.png',
              link: 'https://www.canva.com/design/DAGUJkf_kqM/QxLpU9VyWCREdAycJkn8XQ/view',
              width: '125',
              height: '125'
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
            // {
            //   date: '27/06',
            //   title: 'POCUS',
            //   subtitle: 'Geral',
            //   link: 'https://www.canva.com/design/DAGh0-qhaPE/mUjzHR3EZT8MI47KFWEvTg/view',
            //   img: '/images/cards/pocus.png',
            //   width: '63',
            //   height: '125'
            // },
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
              link: 'https://www.canva.com/design/DAGh8L_SDCs/cLgRjDSBHL-tqmulvwWxzQ/view',
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
              priority: 1,
              title: ['Pelve', 'Feminina'],
              color: '#6f0273',
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
            {
              date: '28/06',
              title: ['Cabeça e', 'Pescoço'],
              link: 'https://www.canva.com/design/DAGh7oGAB4E/g4BqkZ7C57SmtO89cO2qtg/view',
              img: '/images/cards/cabeca-pescoco.png'
            }
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
    comissions: [{
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
          name: 'Dra.Bruna Cesário Senna'
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
          imagePath: '/avatars/Lauro_Santos_Silva.png',
          name: 'Dr. Lauro Santos Silva'
        },
        {
          imagePath: '/avatars/Augusto_Antunes.png',
          name: 'Dr. Augusto Antunes'
        },
        {
          imagePath: '/avatars/Julio_Guerra_Domingues.png',
          name: 'Dr. Julio Guerra Domingues'
        },
        {
          imagePath: '/avatars/Thales_Matheus_M_Santos.png',
          name: 'Dr. Thales Matheus M. Santos'
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
            text: ['XI Jornada Mineira de Radiologia e', 'XIV Congresso de Imaginologia da Mulher'],
            color: '#BB2426'
          },
          subtitle: {
            tag: 'h4',
            text: [
              '* Necessário enviar comprovante',
              '** Inscrições no site até as 11h do dia 26/07. Nos dias do evento (27 e 28), inscrições apenas No Local e pagamento via Pix.'
            ],
            color: '#f8f9fa'
          },
          bestBefore: {
            rowStart: 3,
            date: ['30042025', '30052025', '25062025', '28062025']
          },
          callToAct: {
            caption: 'Clique aqui para fazer sua inscrição!',
          },
          table: {
            headers: [
              { desktop: 'Categorias', mobile: 'Categ.' },
              { desktop: 'Vagas', mobile: 'Vagas' },
              { desktop: ['Desconto', 'até 30/04'], mobile: 'Até 30/04 ' },
              { desktop: ['Desconto', 'até 30/05'], mobile: 'Até 30/05' },
              { desktop: ['Desconto', 'até 25/06'], mobile: 'Até 25/06' },
              { desktop: ['Pix/No Local**', 'até 26/06'], mobile: 'Pix No Local' }
            ],
            rows: [
              { cells: ['Médico Sócio SRMG/SOGIMIG', '', { validar: ['SRMG', 'SOGIMIG'], comprovante: false }, 'R$ 325', 'R$ 355', 'R$ 385', 'R$ 415'] },
              { cells: ['Médico Não Sócio ou Inadimplente', '', { validar: [], comprovante: false }, 'R$ 705', 'R$ 735', 'R$ 755', 'R$ 795'] },
              { cells: ['Residente Radiologia ou Ginecologia*', '', { validar: [], comprovante: true }, 'R$ 179', 'R$ 199', 'R$ 219', 'R$ 269'] },
              { cells: ['Acadêmico de Medicina Sócio SAMMG', { value: '80', rowspan: 2 }, { validar: ['SAMMG'], comprovante: false }, 'R$ 67', 'R$ 87', 'R$ 107', 'R$ 147'] },
              { cells: ['Acadêmico de Medicina não Sócio SAMMG*', '', { validar: [], comprovante: true }, 'R$ 177', 'R$ 197', 'R$ 217', 'R$ 297'] },
              { cells: ['Tecnólogos e Técnicos*', '100', { validar: [], comprovante: true }, 'R$ 68', 'R$ 88', 'R$ 108', 'R$ 148'] },
              { cells: ['Day use: Médico Sócio Quite SRMG/SOGIMIG', '', { validar: ['SRMG', 'SOGIMIG'], comprovante: false }, 'R$ 243,75', 'R$ 266,25', 'R$ 288,75', 'R$ 311.25'] },
              { cells: ['Day use: Médico Não Sócio ou Inadimplente', '', { validar: false, comprovante: false }, 'R$ 528,75', 'R$ 551,25', 'R$ 566,25', 'R$ 596.25'] }
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
            text: ['* Necessário enviar comprovante',
              '* Workshops são exclusivos para médicos.',
              '* Médicos residentes deverão enviar comprovante atualizado de vínculo com programa de Residência, Especialização ou Fellowship referente ao ano de 2025.',
              '** Inscrições no site até as 11h do dia 26/07. Nos dias do evento (27 e 28), inscrições apenas No Local e pagamento via Pix.'
            ],
            color: '#f8f9fa'
          },
          bestBefore: {
            rowStart: 2,
            date: ['30042025', '30052025', '25062025', '28062025']
          },
          callToAct: {
            caption: 'Clique aqui para fazer sua inscrição!',
          },
          table: {
            headers: [
              { desktop: 'Categorias', mobile: 'Categ.' },
              { desktop: ['Desconto', 'até 30/04'], mobile: 'Até 30/04 ' },
              { desktop: ['Desconto', 'até 30/05'], mobile: 'Até 30/05' },
              { desktop: ['Desconto', 'até 25/06'], mobile: 'Até 25/06' },
              { desktop: ['Pix/No Local**', 'até 26/06'], mobile: 'Pix No Local' }
            ],
            rows: [
              { cells: ['Médico Sócio SRMG/SOGIMIG', { validar: ['SRMG', 'SOGIMIG'], comprovante: false }, 'R$ 70', 'R$ 80', 'R$ 87', 'R$ 94'] },
              { cells: ['Médico Não Sócio ou Inadimplente', { validar: false, comprovante: true }, 'R$ 158', 'R$ 165', 'R$ 170', 'R$ 180'] },
              { cells: ['Residente Radiologia ou Ginecologia*', { validar: false, comprovante: true }, 'R$ 60', 'R$ 70', 'R$ 80', 'R$ 90'] },
            ]
          }
        },
        {
          title: {
            tag: 'h2',
            text: [
              'Curso de Inteligência Artificial'],
            color: '#052c65'
          },
          subtitle: {
            tag: 'h4',
            text: [
              '* Aberto ao público geral.',
              '* Não há necessidade de comprovantes.',
              '** Inscrições no site até as 11h do dia 26/07. Nos dias do evento (27 e 28), inscrições apenas No Local e pagamento via Pix.'
            ],
            color: '#f8f9fa'
          },
          bestBefore: {
            rowStart: 2,
            date: ['30042025', '30052025', '25062025', '28062025']
          },
          callToAct: {
            caption: 'Clique aqui para fazer sua inscrição!',
          },
          table: {
            headers: [
              { desktop: 'Categorias', mobile: 'Categ.' },
              { desktop: ['Desconto', 'até 30/04'], mobile: 'Até 30/04 ' },
              { desktop: ['Desconto', 'até 30/05'], mobile: 'Até 30/05' },
              { desktop: ['Desconto', 'até 25/06'], mobile: 'Até 25/06' },
              { desktop: ['Pix/No Local**', 'até 26/06'], mobile: 'Pix No Local' }
            ],
            rows: [
              { cells: ['Aberto ao Público', { validar: false, comprovante: false }, 'R$ 88', 'R$ 98', 'R$ 105', 'R$ 111'] }
            ]
          }
        }
      ]
    },
    sponsorShip: {
      promoters: {
        title: 'Realização:',
        className: 'promoters',
        brands: [{
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
              href: 'https://www.unimedbh.com.br',
              width: 80,
              height: 33.47
            }, {
              name: 'Prontofar',
              src: '/logo/prontofar.png',
              href: 'http://prontofar.com.br',
              width: 84,
              height: 15.39
            }, {
              name: 'iCare Group',
              src: '/logo/icare.png',
              href: 'https://icaremedicalgroup.com.br',
              width: 80,
              height: 27.19
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
              }, {
                name: 'VX',
                src: '/logo/vx.png',
                href: 'https://www.vx.med.br/',
                width: 90,
                height: 25.65
            }, {
              name: 'Canon Medical Systems',
              src: '/logo/canon-medical-systems.png',
              href: 'https://br.medical.canon/',
              width: 60,
              height: 22.61
            }, {
              name: 'Konica Minolta',
              src: '/logo/konica-minolta.png',
              href: 'https://www.konicaminolta.com/br-pt',
              width: 65.52,
              height: 38
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
            }, {
              name: 'Mater Dei',
              src: '/logo/mater-dei.png',
              href: 'https://www.materdei.com.br/',
              width: 104.45,
              height: 25
            }, {
              name: 'Hermes Pardini',
              src: '/logo/hermes-pardini.png',
              href: 'https://www.hermespardini.com.br/',
              width: 80,
              height: 36.55
            }, {
              name: 'Guerbet',
              src: '/logo/guerbet.png',
              href: 'https://www.guerbet.com/pt-br',
              width: 80,
              height: 25.39
            }, {
              name: 'Supri Medical',
              src: '/logo/supri-medical.png',
              href: 'https://www.supri-medical.com/',
              width: 100,
              height: 20.81
            }, {
              name: 'Mhédica',
              src: '/logo/mhedica.png',
              href: 'https://www.mhedica.com.br/',
              width: 80,
              height: 20.94
            }, {
              name: 'Dopsom',
              src: '/logo/dopsom.png',
              href: 'https://dopsom.com.br/',
              width: 86,
              height: 17.76
            }, {
              name: 'Orizonti',
              src: '/logo/orizonti.png',
              href: 'https://hospitalorizonti.com.br/',
              width: 80,
              height: 33
            }, {
              name: 'Agis',
              src: '/logo/agis.png',
              href: 'https://agismedical.com.br/',
              width: 60,
              height: 15.19
            }]
          }
        }
      },
      supports: {
        title: 'Apoio:',
        className: 'promoters',
        brands: [{
          name: 'Espaço Namah - Yoga',
          src: '/logo/namah.png',
          href: 'https://espaconamah.com.br',
          width: 74.33,
          height: 37
        }, {
          name: 'Sorveteria Universal',
          src: '/logo/sorveteria-universal.png',
          href: 'https://www.instagram.com/sorveteriauniversal',
          width: 90.00,
          height: 35.24
        }, {
          name: 'Pipocando',
          src: '/logo/pipocando.png',
          href: '#',
          width: 90.00,
          height: 35.24
        }, {
          name: 'LifePong',
          src: '/logo/lifepong.png',
          href: 'https://lifepong.com.br/',
          width: 40,
          height: 40
        }, {
          name: 'Janaina Pacheco',
          src: '/logo/janaina-pacheco.png',
          href: 'https://www.instagram.com/janainapachecoarquitetura/',
          width: 90,
          height: 41.09
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
        }, {
          name: 'CI-IA',
          src: '/logo/ci-ia.png',
          href: 'https://ciia-saude.dcc.ufmg.br/',
          width: 80,
          height: 34
        }, {
          name: 'Biblioteca Virtual',
          src: '/logo/bibliotecavirtual.png',
          href: 'http://www.bibliotecavirtual.org.br',
          width: 95.70,
          height: 27.86
        }, {
          name: 'CRM-MG',
          src: '/logo/crm-mg.png',
          href: 'https://crmmg.org.br/',
          width: 80,
          height: 25.14
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
    societies: [
      {
        name: 'Sociedade de Radiologia e Diagnóstico por Imagem de Minas Gerais (SRMG)',
        shortName: 'SRMG',
        link: 'https://www.srmg.org.br',
        alt: 'Logo da SRMG',
        src: '/logo/srmg.png',
        affiliated: [
          {
            "name": "Augusto Goncalves dos Santos Filho",
            "cpf": "563.585.046-49"
          },
          {
            "name": "Caroline Sormanti Schnaider Azevedo",
            "cpf": "031.233.816-33"
          },
          {
            "name": "Claudia Magalhaes de Vasconcelos Rocha",
            "cpf": "957.765.676-53"
          },
          {
            "name": "Douglas Ribeiro Bomfim",
            "cpf": "056.494.256-12"
          },
          {
            "name": "Flavio Guabiroba Coelho",
            "cpf": "426.948.506-00"
          },
          {
            "name": "Jacques Scarpelli Cabral",
            "cpf": "777.728.906-30"
          },
          {
            "name": "Jovita Lane Soares Santos Zanini",
            "cpf": "039.689.766-57"
          },
          {
            "name": "Juliana Naves de Souza",
            "cpf": "306.741.478-04"
          },
          {
            "name": "Julio Gontijo Fernandes",
            "cpf": "620.441.926-91"
          },
          {
            "name": "Junia Maria de Oliveira Lapertosa",
            "cpf": "533.153.086-91"
          },
          {
            "name": "Luiz Lustosa Rubiao",
            "cpf": "642.319.096-87"
          },
          {
            "name": "Raphael Guedes Andrade",
            "cpf": "054.254.036-31"
          },
          {
            "name": "Thais Abreu de Castro",
            "cpf": "469.557.716-04"
          },
          {
            "name": "LEONARDO CAMPOS DE QUEIROZ",
            "cpf": "00227147669",
            "email": "leocqueiroz@gmail.com"
          },
          {
            "name": "Géssica Lafetá Rabelo",
            "cpf": "09565629652",
            "email": "ge_rabelo@yahoo.com.br"
          },
          {
            "name": "LUCIANA COSTA SILVA",
            "cpf": "02527422659",
            "email": "lucianacosta@me.com"
          },
          {
            "name": "ANNA FLÁVIA FIGUEIREDO AZEVEDO",
            "cpf": "05095106639",
            "email": "anna.azevedo@oi.com.br"
          },
          {
            "name": "JULIANA CRISTINA DE SOUZA DIAS",
            "cpf": "06213486607",
            "email": "julianacsd@hotmail.com"
          },
          {
            "name": "LUISA LAGES DE ABREU PALADINO",
            "cpf": "06785126630",
            "email": "lages6147@gmail.com"
          },
          {
            "name": "MARIA FERNANDA BORGES ABREU",
            "cpf": "08265777680",
            "email": "mf.borges.abreu@gmail.com"
          },
          {
            "name": "MARY CLAUDIA FELICIANO",
            "cpf": "80079750630",
            "email": "mary.feliciano@terra.com.br"
          },
          {
            "name": "RUDOLF MOREIRA PFEILSTICKER",
            "cpf": "06996855675",
            "email": "rudolfmp@gmail.com"
          },
          {
            "name": "SAMUEL TEIXEIRA MARTINS",
            "cpf": "08946378603",
            "email": "teixeira.samuel@yahoo.com.br"
          },
          {
            "name": "MARIA BEATRIZ SANTOS WANDERLEY",
            "cpf": "03274022616",
            "email": "biawanderley@hotmail.com"
          },
          {
            "name": "RAQUEL FERNANDES DOS SANTOS DIAS",
            "cpf": "06436027637",
            "email": "quelfsdias@gmail.com"
          },
          {
            "name": "WILSON CAMPOS TAVARES JUNIOR",
            "cpf": "04006765673",
            "email": "wilsoncamp2000@yahoo.com.br"
          },
          {
            "name": "PETERSON AZEVEDO FERNANDES",
            "cpf": "03738546685",
            "email": "doutorpeterson@gmail.com"
          },
          {
            "name": "CRISTIANE TURANO MOTA MALVEIRA",
            "cpf": "05692542641",
            "email": "cristurano@hotmail.com"
          },
          {
            "name": "MARCELL DE BARROS DUARTE PEREIRA",
            "cpf": "03287914669",
            "email": "marcellbarros@gmail.com"
          },
          {
            "name": "SERGIO RIBEIRO DE ANDRADE",
            "cpf": "87387875634",
            "email": "sandrade1970@gmail.com"
          },
          {
            "name": "LUIS RONAN MARQUEZ FERREIRA DE SOUZA",
            "cpf": "94747822615",
            "email": "luisronan@gmail.com"
          },
          {
            "name": "JÚLIO GUERRA DOMINGUES",
            "cpf": "08557515685",
            "email": "juliogdomingues@gmail.com"
          },
          {
            "name": "ANA PAULA CAMPOS ROCHA",
            "cpf": "07242349699",
            "email": "anacrocha@gmail.com"
          },
          {
            "name": "JOSÉ TÁCIO GODINHO",
            "cpf": "40145948668",
            "email": "godinhonjt@gmail.com"
          },
          {
            "name": "ADRIANO MURTA MAIA",
            "cpf": "03434848622",
            "email": "admmaia@hotmail.com"
          },
          {
            "name": "MARIA HELENA ARAUJO TEIXEIRA",
            "cpf": "22935975634",
            "email": "mariahelenaateixeira@yahoo.com.br"
          },
          {
            "name": "ADRIANA MARIA LAMEGO REZENDE",
            "cpf": "80786294604",
            "email": "adrianalamegorezende@gmail.com"
          },
          {
            "name": "ANA AMELIA ALFENAS SILVA MESQUITA",
            "cpf": "05617221612",
            "email": "anaalfenassilva@gmail.com"
          },
          {
            "name": "MARCOS VINÍCIUS FONSECA NORONHA",
            "cpf": "05749068609",
            "email": "mvfnoronha@gmail.com"
          },
          {
            "name": "ANDRE VOLANI MORGANTI",
            "cpf": "06612498676",
            "email": "avmorganti@gmail.com"
          },
          {
            "name": "RAQUEL DEL-FRARO RABELO",
            "cpf": "04043695616",
            "email": "raqueldelfraro@gmail.com"
          },
          {
            "name": "FRANCISCO RIBEIRO TEIXEIRA JUNIOR",
            "cpf": "04968734662",
            "email": "franciscoteixeirajr@gmail.com"
          },
          {
            "name": "ROGERIO AUGUSTO PINTO DA SILVA",
            "cpf": "27528170615",
            "email": "rapsilva@gmail.com"
          },
          {
            "name": "PATRICIA MARTINS GOMES EL BACHA",
            "cpf": "05128888681",
            "email": "drapatriciamartinsbacha@gmail.com"
          },
          {
            "name": "LUISA FARIA",
            "cpf": "07728363611",
            "email": "luisaleitao@icloud.com"
          },
          {
            "name": "ANNA CHRISTINA TORRES GRUBER",
            "cpf": "10519689682",
            "email": "annactgruber@gmail.com"
          },
          {
            "name": "MARCELO HENRIQUE SILVA",
            "cpf": "12309563609",
            "email": "eumarcelohenrique@yahoo.com"
          },
          {
            "name": "PATRICIA CRISTINA SILVA LIMA FERNANDES",
            "cpf": "56927916687",
            "email": "patriciacslfernandes@gmail.com"
          },
          {
            "name": "WILSON VAZ HESPANHOL",
            "cpf": "80390137715",
            "email": "wilsonhespanhol@uol.com.br"
          },
          {
            "name": "JOSE LANES MOURAO",
            "cpf": "25662864691",
            "email": "lanesmourao@gmail.com"
          },
          {
            "name": "ISABELA REZENDE",
            "cpf": "11602771685",
            "email": "deletado___isabela@zeitdigital.com.br"
          },
          {
            "name": "RAQUEL SADALA MENDES",
            "cpf": "80866530649",
            "email": "raquelsadala@gmail.com"
          },
          {
            "name": "IBRAHIM EDUARDO DE FARIA ELIAS",
            "cpf": "04273758601",
            "email": "dredfaria@yahoo.com.br"
          },
          {
            "name": "LAURO DOS SANTOS E SILVA",
            "cpf": "11137536683",
            "email": "laurosantosesilva@gmail.com"
          },
          {
            "name": "ANA RITA DA GLORIA SOARES",
            "cpf": "02843966647",
            "email": "soares.args@gmail.com"
          },
          {
            "name": "GUILHERME LOURENÇO DE LIMA REIS",
            "cpf": "00016959671",
            "email": "guilhermellreis@gmail.com"
          },
          {
            "name": "ALICE DUARTE DE CARVALHO",
            "cpf": "05640957611",
            "email": "acarva@gmail.com"
          },
          {
            "name": "ANA FLÁVIA MAGALHÃES LEAL",
            "cpf": "02701590612",
            "email": "anafmleal@gmail.com"
          },
          {
            "name": "IVIE BRAGA DE PAULA",
            "cpf": "03226848623",
            "email": "iviepaula@gmail.com"
          },
          {
            "name": "THAIS ABREU DE CASTRO",
            "cpf": "46955771604",
            "email": "tacastro99@gmail.com"
          },
          {
            "name": "ADRIENE MORAES CAMPOS",
            "cpf": "63313880606",
            "email": "adrienemoraes@uol.com.br"
          },
          {
            "name": "LUANN SANTOS ANDRADE",
            "cpf": "10026197693",
            "email": "luann.andrade@outlook.com.br"
          },
          {
            "name": "RENATA LOPES FURLETTI CALDEIRA DINIZ",
            "cpf": "00363067620",
            "email": "renatafurletti@yahoo.com.br"
          },
          {
            "name": "TATIANA MARTINS",
            "cpf": "01344407650",
            "email": "tatimartins@hotmail.com"
          },
          {
            "name": "LUCIANA COSTA TESTE",
            "cpf": "42192935668",
            "email": "lucianafmufmg@gmail.com"
          },
          {
            "name": "BERNARDO ALVARENGA DE MELO",
            "cpf": "12256001628",
            "email": "bernardoalvm@gmail.com"
          },
          {
            "name": "PEDRO SILVA",
            "cpf": "22695465041",
            "email": "costaluciana@ufmg.br"
          },
          {
            "name": "RAPHAEL GUEDES ANDRADE",
            "cpf": "05425403631",
            "email": "raphaelgandrade@gmail.com"
          },
          {
            "name": "ROGÉRIA NOBRE RODRIGUES",
            "cpf": "70308950615",
            "email": "ronobre25@gmail.com"
          },
          {
            "name": "VINICIUS ALVES LARA DOS SANTOS",
            "cpf": "01371743657",
            "email": "vlara1104@gmail.com"
          },
          {
            "name": "BERNARDO FONSECA",
            "cpf": "63073269649",
            "email": "blcfonseca@gmail.com"
          },
          {
            "name": "FRANCISCO MELO",
            "cpf": "56907176653",
            "email": "xikomagda@gmail.com"
          },
          {
            "name": "CLÁUDIA SOUZA FREITAS FALEIRO ",
            "cpf": "03239445662",
            "email": "claudiaimagem@gmail.com"
          },
          {
            "name": "LUCAS AVELAR",
            "cpf": "00212061127",
            "email": "lucasavelar@gmail.com"
          },
          {
            "name": "PEDRO ROCHA GONÇALVES",
            "cpf": "13626706699",
            "email": "pedrorochagoncalves@hotmail.com"
          },
          {
            "name": "VINICIUS GALDINO",
            "cpf": "01549875574",
            "email": "viniacad@gmail.com"
          },
          {
            "name": "LEANDRA OTTONI TOSTES",
            "cpf": "03747622607",
            "email": "leandratostes@gmail.com"
          },
          {
            "name": "ANA LUÍSA FERNANDES MADEIRA",
            "cpf": "11688361669",
            "email": "ana_luisa_madeira@hotmail.com"
          },
          {
            "name": "EDSON JÚNIO VIEIRA DOS SANTOS ",
            "cpf": "11599852608",
            "email": "edsonjuniovs@gmail.com"
          },
          {
            "name": "LUÍLA CRISTINA GONÇALVES RIBEIRO ",
            "cpf": "11581784686",
            "email": "luilacgribeiro@gmail.com"
          },
          {
            "name": "Lucas Hudson",
            "cpf": "09753332670",
            "email": "lucasalves.mhudson@gmail.com"
          },
          {
            "name": "MARCELA PIRES LAZZARINI ARAUJO",
            "cpf": "10248863606",
            "email": "marcelapiresl@hotmail.com"
          },
          {
            "name": "FERNANDA LOPES DE CARVALHO ",
            "cpf": "10681963603",
            "email": "fernandalopesdec20@gmail.com"
          },
          {
            "name": "VICTOR HENRIQUE VERSIANI ALEXANDRIA",
            "cpf": "11920860665",
            "email": "victoralexandria@yahoo.com.br"
          },
          {
            "name": "ANA PAULA MORAIS CORRÊA MACHADO",
            "cpf": "10898265673",
            "email": "anapaulamcmachado@hotmail.com"
          },
          {
            "name": "GABRIELA FONSECA OLIVEIRA",
            "cpf": "10150376669",
            "email": "gabifoliveira@yahoo.com.br"
          },
          {
            "name": "PAULA RIBEIRO DE BRITTO BORGES ",
            "cpf": "05283747530",
            "email": "paulabrittoborges@gmail.com"
          },
          {
            "name": "TALITA MOTA GONÇALVES ",
            "cpf": "10846346605",
            "email": "talita.m.goncalves@gmail.com"
          },
          {
            "name": "MARCELA BOMFIM",
            "cpf": "08262340620",
            "email": "mar_celinhaa@hotmail.com"
          },
          {
            "name": "MATHEUS HENRIQUE Alves Barbosa ",
            "cpf": "12490145657",
            "email": "matheushenriquealvesbarbosa@gmail.com"
          },
          {
            "name": "NADIA VIEIRA ALVES ALVARENGA ",
            "cpf": "12471184600",
            "email": "nadiavieiraalves@hotmail.com"
          },
          {
            "name": "MARCELA OLIVEIRA NEPOMUCENO",
            "cpf": "06287594608",
            "email": "marcelaanepomuceno@gmail.com"
          },
          {
            "name": "PAULO MAURÍCIO CAMPOS VIANA",
            "cpf": "12372880616",
            "email": "paulomed001@gmail.com"
          },
          {
            "name": "RAFAEL VICENTINI VEIGA DE BRITO",
            "cpf": "12827200660",
            "email": "rafael.veigadebrito19@gmail.com"
          },
          {
            "name": "MARCUS VINICIUS ALVERNAZ DE FARIA",
            "cpf": "13499943670",
            "email": "alv.marcus@outlook.com"
          },
          {
            "name": "LETÍCIA BIANCO GOMES DE ALMEIDA",
            "cpf": "08953456681",
            "email": "leticia.bianco@hotmail.com"
          },
          {
            "name": "PEDRO PAULO NUNES PEREIRA",
            "cpf": "05450814674",
            "email": "pedropnp@msn.com"
          },
          {
            "name": "CLARA NOVAIS",
            "cpf": "12392342601",
            "email": "clara.nma@hotmail.com"
          },
          {
            "name": "LUDIMILA SANTOS VIANA",
            "cpf": "05348383597",
            "email": "ludisviana@gmail.com"
          },
          {
            "name": "ANA ELISA CHAVES",
            "cpf": "13489736665",
            "email": "ana-elisachaves@hotmail.com"
          },
          {
            "name": "PEDRO MARTINS CORRÊA",
            "cpf": "08391909646",
            "email": "pedroufopmedxv@gmail.com"
          },
          {
            "name": "MONIQUE GEORGES LAMBRAKOS",
            "cpf": "11800016646",
            "email": "mo.lambrakos@hotmail.com"
          },
          {
            "name": "THALES MATHEUS MENDONÇA SANTOS",
            "cpf": "09422839610",
            "email": "thalesmmsradio@gmail.com"
          },
          {
            "name": "CLAUDIO SALIBA DE AVELAR ",
            "cpf": "51246864649",
            "email": "claudiosaliba.rad@gmail.com"
          },
          {
            "name": "FABIANO FRANCO MONTEIRO PRADO",
            "cpf": "97700851620",
            "email": "fabianoprado@outlook.com"
          },
          {
            "name": "RODRIGO GOUTHIER",
            "cpf": "81143311604",
            "email": "rodrigorg@terra.com.br"
          },
          {
            "name": "RENAN FARIA DE REZENDE TEIXEIRA ",
            "cpf": "13941157680",
            "email": "renanfrt@yahoo.com"
          },
          {
            "name": "ADRIANA MARIA LAMEGO REZENDE",
            "cpf": "80786294604",
            "email": "adrianalamegorezende@gmail.com"
          },
          {
            "name": "ADRIANA VIANNA CANCADO",
            "cpf": "57077860663",
            "email": "adrianavcancado@gmail.com"
          },
          {
            "name": "ADRIANO MURTA MAIA",
            "cpf": "03434848622",
            "email": "admmaia@hotmail.com"
          },
          {
            "name": "ALESSANDRA MAGNAVACA GUIMARAES GUEDES",
            "cpf": "76526216668",
            "email": "lekaguedes34@gmail.com"
          },
          {
            "name": "ALEXANDRE TONELLI DE FARIA",
            "cpf": "00414901690",
            "email": "financeiro@boavistaagropecuaria.com.br"
          },
          {
            "name": "ANA AMELIA ALFENAS SILVA MESQUITA",
            "cpf": "05617221612",
            "email": "anaalfenassilva@gmail.com"
          },
          {
            "name": "ANA RITA DA GLORIA SOARES",
            "cpf": "02843966647",
            "email": "soares.args@gmail.com"
          },
          {
            "name": "ANDREA BOUERI TICLE LIMA",
            "cpf": "78631521604",
            "email": "bouerilima@ig.com.br"
          },
          {
            "name": "ANTONIO LOPES DA CUNHA JUNIOR",
            "cpf": "85118982634",
            "email": "antoniolopescunhajr@gmail.com"
          },
          {
            "name": "BERNARDO AUGUSTO QUINTAO FONSECA",
            "cpf": "02904496696",
            "email": "bernaquin@gmail.com"
          },
          {
            "name": "CARLA CRISTINA DE SOUSA RESENDE CABRAL",
            "cpf": "00504070665",
            "email": "cc.resende@bol.com.br"
          },
          {
            "name": "CARLOS DE ASSIS JUNIOR",
            "cpf": "94913137620",
            "email": "carlosassis.jr@hotmail.com"
          },
          {
            "name": "DENISE CRISTINA FERREIRA",
            "cpf": "82563500672",
            "email": "ferreira.dc@uol.com.br"
          },
          {
            "name": "EDSON BATISTA DE LIMA",
            "cpf": "55882943604",
            "email": "edsonrad@gmail.com"
          },
          {
            "name": "EDUARDO CARVALHO MIRANDA",
            "cpf": "97387223653",
            "email": "mirandaceduardo@gmail.com"
          },
          {
            "name": "EDUARLEY AYRAN MORAIS",
            "cpf": "66550980682",
            "email": "eduayran@gmail.com"
          },
          {
            "name": "ELVECIO STARLING DINIZ FILHO",
            "cpf": "65577396620",
            "email": "elveciostarling@gmail.com"
          },
          {
            "name": "ENIO SIQUEIRA FIUZA",
            "cpf": "32546874691",
            "email": "eniofiuza@gmail.com"
          },
          {
            "name": "FABRICIO MAIA TORRES ALVES",
            "cpf": "03200049618",
            "email": "fabriciocaca@hotmail.com"
          },
          {
            "name": "FLAVIA MARIA WANDERLEY RODRIGUES",
            "cpf": "85525308649",
            "email": "flaviamwr@gmail.com"
          },
          {
            "name": "FLAVIO AUGUSTO TEIXEIRA RONZANI",
            "cpf": "69953228604",
            "email": "ronzani@terra.com.br"
          },
          {
            "name": "GERALDO MOL STARLING FILHO",
            "cpf": "59991119604",
            "email": "geraldostarling@mac.com"
          },
          {
            "name": "GUSTAVO DE VASCONCELOS BELLO",
            "cpf": "65639286687",
            "email": "gubello@gmail.com"
          },
          {
            "name": "IVIE BRAGA DE PAULA",
            "cpf": "03226848623",
            "email": "iviepaula@gmail.com"
          },
          {
            "name": "JAMES ANDERSON DE ALMEIDA PINTO",
            "cpf": "72293721604",
            "email": "jamesaapinto@gmail.com"
          },
          {
            "name": "JEAN PATRICK DE MAGALHAES ANDRADE",
            "cpf": "02772033686",
            "email": "jpma1977@yahoo.com.br"
          },
          {
            "name": "JESIANA FERREIRA PEDROSA",
            "cpf": "05775536665",
            "email": "jesianafp@gmail.com"
          },
          {
            "name": "JULIANA CASAES GOMES HIGINO",
            "cpf": "83716475653",
            "email": "juliannacasaes@hotmail.com"
          },
          {
            "name": "JULIO GUERRA DOMINGUES",
            "cpf": "08557515685",
            "email": "juliogdomingues@gmail.com"
          },
          {
            "name": "JÚNIA DE VASCONCELOS BELLO",
            "cpf": "65639294604",
            "email": "juvbello@gmail.com"
          },
          {
            "name": "LUCIANA BATISTA ROCHA RUGANI",
            "cpf": "91517036615",
            "email": "lurugani@yahoo.com.br"
          },
          {
            "name": "LUISA LAGES DE ABREU PALADINO",
            "cpf": "06785126630",
            "email": "lages6147@gmail.com"
          },
          {
            "name": "LUIZ GABRIEL MENEZES SANGUINETTE AZEVEDO",
            "cpf": "07789520610",
            "email": "lgmsa3@gmail.com"
          },
          {
            "name": "LUIZ GONZAGA DA SILVEIRA FILHO",
            "cpf": "62823361634",
            "email": "luizfilho@gonzagasilveira.com.br"
          },
          {
            "name": "MARCELL DE BARROS DUARTE PEREIRA",
            "cpf": "03287914669",
            "email": "marcellbarros@gmail.com"
          },
          {
            "name": "MARCELO COLLARES RODRIGUES",
            "cpf": "03186383633",
            "email": "collares.geo@gmail.com"
          },
          {
            "name": "MARCELO DE QUEIROZ GARCIA",
            "cpf": "49444522687",
            "email": "mqgarcia62@gmail.com"
          },
          {
            "name": "MARCOS SILVA DUARTE",
            "cpf": "40934250600",
            "email": "marcos.duarte.bhz@gmail.com"
          },
          {
            "name": "MARCOS VINICIUS FONSECA NORONHA",
            "cpf": "05749068609",
            "email": "mvfnoronha@gmail.com"
          },
          {
            "name": "MARIA DAS GRAÇAS MACHADO TORRES",
            "cpf": "64643239620",
            "email": "gracetowers@hotmail.com"
          },
          {
            "name": "MARIA LETICIA LEONE ROCHA",
            "cpf": "65873238634",
            "email": "mleticialeone@gmail.com"
          },
          {
            "name": "MARIA PAULA BRASIL DE MELLO",
            "cpf": "82913420672",
            "email": "paulabrasilm@gmail.com"
          },
          {
            "name": "MATEUS PEREIRA SILVA",
            "cpf": "07274273698",
            "email": "mateuspsilva30@yahoo.com.br"
          },
          {
            "name": "PATRICIA CRISTINA SILVA LIMA FERNANDES",
            "cpf": "56927916687",
            "email": "fernandes.path@hotmail.com"
          },
          {
            "name": "PATRICIA PEREIRA LOPES",
            "cpf": "03650635682",
            "email": "patplopes@hotmail.com"
          },
          {
            "name": "PAULA FIGUEIREDO ROCHA",
            "cpf": "03893136614",
            "email": "paulafigrocha@gmail.com"
          },
          {
            "name": "PAULO RAMOS BOTELHO ANTUNES",
            "cpf": "01296856666",
            "email": "palu.mg@gmail.com"
          },
          {
            "name": "PAULO SEVERO BARBOSA CORTES",
            "cpf": "59879297687",
            "email": "cortespaulo@hotmail.com"
          },
          {
            "name": "PETERSON AZEVEDO FERNANDES",
            "cpf": "03738546685",
            "email": "doutorpeterson@gmail.com"
          },
          {
            "name": "RAFAEL COUTO MARQUES",
            "cpf": "84096390682",
            "email": "rafaelc.marques@yahoo.com.br"
          },
          {
            "name": "RENATO MACEDO ROSA",
            "cpf": "76827445615",
            "email": "renatomrosa67@gmail.com"
          },
          {
            "name": "RODRIGO OTAVIO MASCARENHAS REIS",
            "cpf": "83003770691",
            "email": "rotavio1970@gmail.com"
          },
          {
            "name": "ROGÉRIO TELES DE MELO",
            "cpf": "84766476620",
            "email": "rogeriotmelo@yahoo.com.br"
          },
          {
            "name": "SALVADOR REAL NETO",
            "cpf": "20309066620",
            "email": "salvador@gavazza.com.br"
          },
          {
            "name": "SILENE HIGINO FIUZA SILVA",
            "cpf": "29677327615",
            "email": "silenefiuza@me.com"
          },
          {
            "name": "SILVANA MANGEON MEIRELLES GUIMARAES",
            "cpf": "69311595691",
            "email": "smangeon@gmail.com"
          },
          {
            "name": "SILVIO CAETANO VITOI",
            "cpf": "68848919634",
            "email": "scvitoi@uol.com.br"
          },
          {
            "name": "SIMONE DE ANDRADE BAIAO GONCALVES",
            "cpf": "05273964601",
            "email": "simone.baiao@gmail.com"
          },
          {
            "name": "TIAGO PAES GOMIDE",
            "cpf": "01327964651",
            "email": "tiago.paes.gomide@gmail.com"
          },
          {
            "name": "ULISSES CAMPANHA PARENTE",
            "cpf": "55915299687",
            "email": "ucparente@gmail.com"
          },
          {
            "name": "VICENTE MAURICIO REGO",
            "cpf": "78867193600",
            "email": "vicentemrego@hotmail.com"
          },
          {
            "name": "WERNER FERNANDES PIANA",
            "cpf": "54268869620",
            "email": "wepiana@gmail.com"
          },
          {
            "name": "WILSON CAMPOS TAVARES JUNIOR",
            "cpf": "04006765673",
            "email": "wilsoncamp2000@yahoo.com.br"
          },
          {
            "name": "ANA LUCIA KEFALÁS OLIVEIRA",
            "cpf": "62866982649",
            "email": "sociosrmg01@softaliza.com.br"
          },
          {
            "name": "ANA PAULA REISS DE ARAUJO DIAS GOMES",
            "cpf": "02676972484",
            "email": "sociosrmg02@softaliza.com.br"
          },
          {
            "name": "FERNANDO EDUARDO NUNES MARIZ",
            "cpf": "52799557449",
            "email": "sociosrmg03@softaliza.com.br"
          },
          {
            "name": "MARLIVIA ALMEIDA ROMANELLI",
            "cpf": "80953255620",
            "email": "sociosrmg04@softaliza.com.br"
          },
          {
            "name": "ÓLIVER NAVARRO RIBEIRO POMPEI",
            "cpf": "06186561623",
            "email": "sociosrmg05@softaliza.com.br"
          }
        ]
      }, {
        name: 'Associação de Ginecologistas e Obstetras de Minas Gerais (SOGIMIG)',
        shortName: 'SOGIMIG',
        link: 'https://sogimig.org.br/',
        alt: 'Logo da SOGIMIG',
        src: '/logo/sogimig.png',
        affiliated: [
          {
              "Nome": "Abelardo Franco",
              "E-mail": "abelardofranco@hotmail.com",
              "CPF": "734.275.946-53"
          },
          {
              "Nome": "Adelaide Maria Ferreira Campos D Avila",
              "E-mail": "adelaidedavila@gmail.com",
              "CPF": "622.165.976-00"
          },
          {
              "Nome": "Adilson Goncalves",
              "E-mail": "adilsoneireli@gmail.com",
              "CPF": "390.277.916-00"
          },
          {
              "Nome": "Adriana Carvalho de Vasconcellos",
              "E-mail": "drixvasc2006@hotmail.com",
              "CPF": "541.108.666-34"
          },
          {
              "Nome": "Adriana Coelho da Silveira",
              "E-mail": "drics@hotmail.com",
              "CPF": "027.979.486-02"
          },
          {
              "Nome": "Adriana Garcia Vieira Bueno",
              "E-mail": "lucianageraldo07@hotmail.com",
              "CPF": "044.649.277-93"
          },
          {
              "Nome": "Adriana Mendes Carvalho Arantes",
              "E-mail": "adrianaarantes.mc@gmail.com",
              "CPF": "907.626.656-53"
          },
          {
              "Nome": "Adriana Paula Alves dos Santos",
              "E-mail": "dr.adri@hotmail.com",
              "CPF": "025.299.936-37"
          },
          {
              "Nome": "Adriana Salvador Rocha Almeida",
              "E-mail": "adrianasalvadorrocha@hotmail.com",
              "CPF": "528.122.946-04"
          },
          {
              "Nome": "Adryelle Alves Vinhadelli Rodrigues",
              "E-mail": "adryelleab@gmail.com",
              "CPF": "009.140.051-11"
          },
          {
              "Nome": "Afonso Messias Perez Abreu",
              "E-mail": "afonsomessiasmoc@yahoo.com.br",
              "CPF": "368.314.256-15"
          },
          {
              "Nome": "Afranio SebastiÃo Borges",
              "E-mail": "afranioborges@terra.com.br",
              "CPF": "755.500.596-49"
          },
          {
              "Nome": "Agildo Pereira Leal",
              "E-mail": "afale@uol.com.br",
              "CPF": "099.884.326-15"
          },
          {
              "Nome": "Agnaldo Lopes da Silva Filho",
              "E-mail": "agnaldo.ufmg@gmail.com",
              "CPF": "814.686.366-34"
          },
          {
              "Nome": "Alana dos Santos",
              "E-mail": "alanadocs@gmail.com",
              "CPF": "048.025.921-67"
          },
          {
              "Nome": "Alana Zanolli Spadetto",
              "E-mail": "alanaspadetto@gmail.com",
              "CPF": "134.934.957-73"
          },
          {
              "Nome": "Alba Larissa dos Santos EsperidiÃo",
              "E-mail": "alba.esperidiao@gmail.com",
              "CPF": "105.933.466-61"
          },
          {
              "Nome": "Alberto Borges Peixoto",
              "E-mail": "albertobpeixoto@gmail.com",
              "CPF": "011.985.876-28"
          },
          {
              "Nome": "Alcir Fernando de Matos",
              "E-mail": "alcirmatos@gmail.com",
              "CPF": "090.696.076-20"
          },
          {
              "Nome": "Alda Luiza Alves Silva",
              "E-mail": "aldaluiza.alves@hotmail.com",
              "CPF": "146.349.546-30"
          },
          {
              "Nome": "Alessandra Alves Pinto",
              "E-mail": "alessandraalvespinto99195@gmail.com",
              "CPF": "793.836.456-87"
          },
          {
              "Nome": "Alessandra Carvalho Botelho",
              "E-mail": "lelecbotelho@hotmail.com",
              "CPF": "060.229.886-59"
          },
          {
              "Nome": "Alessandra Duarte Clarizia",
              "E-mail": "aclarizia@gmail.com",
              "CPF": "915.168.116-15"
          },
          {
              "Nome": "Alessandra Santana Lopes Rocha",
              "E-mail": "alessandrasantana@hotmail.com",
              "CPF": "106.400.186-61"
          },
          {
              "Nome": "Alessandra Silvestrini Lacerda",
              "E-mail": "alessandrasilvestrini07@gmail.com",
              "CPF": "036.451.826-08"
          },
          {
              "Nome": "Alessandro Silva Scherr",
              "E-mail": "asscherr@hotmail.com",
              "CPF": "060.931.826-81"
          },
          {
              "Nome": "Alex Sandro LeÃo",
              "E-mail": "asleao@uol.com.br",
              "CPF": "145.962.668-08"
          },
          {
              "Nome": "Alexander Cangussu Silva",
              "E-mail": "ACSMED@gmail.com",
              "CPF": "822.648.216-04"
          },
          {
              "Nome": "Alexandre Cesar Della Garza Ronzani",
              "E-mail": "acronzani@gmail.com",
              "CPF": "675.126.406-25"
          },
          {
              "Nome": "Alexandre Macedo de Oliveira",
              "E-mail": "zavbhe@hotmail.com",
              "CPF": "038.030.246-25"
          },
          {
              "Nome": "Aléxia Sousa Guimarães",
              "E-mail": "alexiaguimaraes96@hotmail.com",
              "CPF": "125.900.646-83"
          },
          {
              "Nome": "Alexon MelgaÇo Racilan",
              "E-mail": "ALEXONRACILAN@GMAIL.COM",
              "CPF": "001.962.056-03"
          },
          {
              "Nome": "Alicce Abreu da Mata",
              "E-mail": "alicceabreudamata@gmail.com",
              "CPF": "089.852.426-10"
          },
          {
              "Nome": "Alice Maciel Fonseca E Santos",
              "E-mail": "jessykaalencar@gmail.com",
              "CPF": "013.874.966-38"
          },
          {
              "Nome": "Alice MagalhÃes Garcia",
              "E-mail": "alicemgarcia@hotmail.com",
              "CPF": "076.255.806-79"
          },
          {
              "Nome": "Alice Rodrigues Ferreira",
              "E-mail": "alice.rodrigues.ferreira@hotmail.com",
              "CPF": "133.606.026-33"
          },
          {
              "Nome": "Alice Viana de Ávila Oliveira",
              "E-mail": "alicevoliveira@hotmail.com",
              "CPF": "113.307.466-94"
          },
          {
              "Nome": "Alim Alves Demian",
              "E-mail": "alim.demian@gmail.com",
              "CPF": "633.387.696-87"
          },
          {
              "Nome": "Aline Caixeta Dias",
              "E-mail": "alinecaixetad@gmail.com",
              "CPF": "112.236.996-41"
          },
          {
              "Nome": "Aline Caixeta Ribeiro",
              "E-mail": "alinecaixetaribeiro@yahoo.com.br",
              "CPF": "086.829.316-48"
          },
          {
              "Nome": "Aline Coelho de Queiroz",
              "E-mail": "alinequeirozmed@yahoo.com.br",
              "CPF": "049.936.296-99"
          },
          {
              "Nome": "Aline Cordeiro Lins de Oliveira Costa",
              "E-mail": "alinecloc@gmail.com",
              "CPF": "079.224.326-90"
          },
          {
              "Nome": "Aline Dessimoni Salgado",
              "E-mail": "alinesalgado03@gmail.com",
              "CPF": "098.951.236-39"
          },
          {
              "Nome": "Aline Gabriela Santos Costa",
              "E-mail": "linesancost@hotmail.com",
              "CPF": "097.310.216-04"
          },
          {
              "Nome": "Aline Otero Fernandez Santos",
              "E-mail": "alineotero.fernandez@gmail.com",
              "CPF": "118.681.276-13"
          },
          {
              "Nome": "Alinne Pereira GonÇalves Costa",
              "E-mail": "alinne.p@yahoo.com",
              "CPF": "030.554.846-81"
          },
          {
              "Nome": "Allan Gomes Batista",
              "E-mail": "allan33353@gmail.com",
              "CPF": "006.585.146-36"
          },
          {
              "Nome": "Allana Lopes Pereira",
              "E-mail": "allana_lopespereira@hotmail.com",
              "CPF": "104.763.386-89"
          },
          {
              "Nome": "Almyr Diniz Pipa",
              "E-mail": "almyrpi@oi.com.br",
              "CPF": "102.611.766-68"
          },
          {
              "Nome": "Aluizio Bolivar Pereira",
              "E-mail": "aluiziobp@uol.com.br",
              "CPF": "370.676.136-04"
          },
          {
              "Nome": "Álvaro Henrique Correia da Silva Barcellos",
              "E-mail": "alvarohenrique.ipa@hotmail.com",
              "CPF": "082.458.756-19"
          },
          {
              "Nome": "Alvaro Luiz Lage Alves",
              "E-mail": "alvarolalves@task.com.br",
              "CPF": "812.888.166-34"
          },
          {
              "Nome": "Amador Martins da Silva",
              "E-mail": "dr.amadormartins@gmail.com",
              "CPF": "485.967.106-63"
          },
          {
              "Nome": "Amanda Arantes Perez",
              "E-mail": "amandaperez1408@yahoo.com.br",
              "CPF": "269.121.178-99"
          },
          {
              "Nome": "Amanda Barbosa Moraes",
              "E-mail": "amandabarbosabh@yahoo.com.br",
              "CPF": "089.638.076-90"
          },
          {
              "Nome": "Amanda Cristina dos Santos",
              "E-mail": "amandacristinalora@hotmail.com",
              "CPF": "121.895.286-58"
          },
          {
              "Nome": "Amanda de Oliveira Vial",
              "E-mail": "amandavial.med@gmail.com",
              "CPF": "100.849.766-59"
          },
          {
              "Nome": "Amanda Freitas Vilela",
              "E-mail": "amandafreitasvilela@gmail.com",
              "CPF": "112.334.686-00"
          },
          {
              "Nome": "Amanda Helena Borges",
              "E-mail": "amandahelenaborges@gmail.com",
              "CPF": "112.668.536-42"
          },
          {
              "Nome": "Amanda Helena Novaes Saldanha Ruy de Almeida",
              "E-mail": "dra.amandahelena@gmail.com",
              "CPF": "104.633.576-63"
          },
          {
              "Nome": "Amanda Marques Rodrigues",
              "E-mail": "amandarrma@gmail.com",
              "CPF": "118.012.776-56"
          },
          {
              "Nome": "Amanda Mudesto Dias Costa",
              "E-mail": "amandamdiasc@gmail.com",
              "CPF": "125.253.956-89"
          },
          {
              "Nome": "Amanda Otoni Duarte",
              "E-mail": "amandaotoni10@hotmail.com",
              "CPF": "118.631.866-03"
          },
          {
              "Nome": "Amanda Ribeiro do Amaral",
              "E-mail": "amandamedufvjm@gmail.com",
              "CPF": "121.397.436-44"
          },
          {
              "Nome": "Amanda Santos CerÁvolo",
              "E-mail": "amandasceravolomed@gmail.com",
              "CPF": "077.410.156-30"
          },
          {
              "Nome": "Amanda Sarah Lima",
              "E-mail": "amanda.s99lima@outlook.com",
              "CPF": "022.577.036-93"
          },
          {
              "Nome": "Amanda Vieira Rocha Rodrigues",
              "E-mail": "amandajf2005@hotmail.com",
              "CPF": "079.480.986-31"
          },
          {
              "Nome": "Amaury Teixeira Leite Andrade",
              "E-mail": "amandrade@terra.com.br",
              "CPF": "003.605.116-00"
          },
          {
              "Nome": "Amelia Resende Rocha",
              "E-mail": "e.7mpty@febrasgo.org.br",
              "CPF": "239.650.966-72"
          },
          {
              "Nome": "Ana Alicia Morett",
              "E-mail": "alicia.morett@gmail.com",
              "CPF": "168.885.257-32"
          },
          {
              "Nome": "Ana Beatriz Batista do Rêgo",
              "E-mail": "ana_beatrizbr@hotmail.com",
              "CPF": "029.691.711-71"
          },
          {
              "Nome": "Ana Beatriz Campos Gomes",
              "E-mail": "a.beatrizgomes@hotmail.com",
              "CPF": "021.828.686-40"
          },
          {
              "Nome": "Ana Beatriz Guimarães Custódio",
              "E-mail": "beatriz.abc@hotmail.com",
              "CPF": "124.050.376-88"
          },
          {
              "Nome": "Ana Carla Cruz Oliveira",
              "E-mail": "anacarlaco@outlook.com",
              "CPF": "095.041.776-97"
          },
          {
              "Nome": "Ana Carolina Araújo Lage Santos",
              "E-mail": "lage.anacarolina@yahoo.com",
              "CPF": "139.376.246-86"
          },
          {
              "Nome": "Ana Carolina Cunha Rocha",
              "E-mail": "anacarol.cunhar@gmail.com",
              "CPF": "111.970.336-02"
          },
          {
              "Nome": "Ana Carolina da Silva Rocha",
              "E-mail": "akarolsr@gmail.com",
              "CPF": "148.054.357-80"
          },
          {
              "Nome": "Ana Carolina Ribeiro Costa",
              "E-mail": "carolina.ribc@hotmail.com",
              "CPF": "127.031.266-97"
          },
          {
              "Nome": "Ana Carolina Tubaldini Vilela",
              "E-mail": "carol.tvilela@hotmail.com",
              "CPF": "092.853.446-40"
          },
          {
              "Nome": "Ana Caroline Ferreira Macedo",
              "E-mail": "anacaroline.fmacedo@gmail.com",
              "CPF": "032.785.071-00"
          },
          {
              "Nome": "Ana Christina de Lacerda Lobato",
              "E-mail": "anacllobato@gmail.com",
              "CPF": "000.700.326-96"
          },
          {
              "Nome": "Ana Clara de Carvalho Barone",
              "E-mail": "accbarone@gmail.com",
              "CPF": "377.966.578-62"
          },
          {
              "Nome": "Ana Clara França de Souza",
              "E-mail": "anaclarafrancadesouza@gmail.com",
              "CPF": "079.770.886-30"
          },
          {
              "Nome": "Ana Clara Galvão Cavalieri",
              "E-mail": "anaclaragcavalieri@hotmail.com",
              "CPF": "485.196.468-40"
          },
          {
              "Nome": "Ana Clara Loyola de Aguiar Andrade",
              "E-mail": "anaclaralaa26@gmail.com",
              "CPF": "085.180.016-50"
          },
          {
              "Nome": "Ana Clara Rodrigues Luz",
              "E-mail": "anaclararluz@gmail.com",
              "CPF": "115.730.206-80"
          },
          {
              "Nome": "Ana Cláudia Barros de Laurentys",
              "E-mail": "ana_barros96@hotmail.com",
              "CPF": "134.934.496-66"
          },
          {
              "Nome": "Ana ClÁudia Clemente Coelho Fontes",
              "E-mail": "acccfontes@yahoo.com.br",
              "CPF": "862.627.936-15"
          },
          {
              "Nome": "Ana Cláudia Felipe Santiago",
              "E-mail": "anacfsantiago@outlook.com",
              "CPF": "126.394.336-52"
          },
          {
              "Nome": "Ana Cláudia Rocha Gonçalves",
              "E-mail": "anaclaudiarochag27@gmail.com",
              "CPF": "104.219.956-61"
          },
          {
              "Nome": "Ana Cristina CorrÊa Costa",
              "E-mail": "aninhaexames1@gmail.com",
              "CPF": "551.399.306-68"
          },
          {
              "Nome": "Ana Elisa Pereira Lopes",
              "E-mail": "anaelisa2406@gmail.com",
              "CPF": "111.709.796-02"
          },
          {
              "Nome": "Ana FlÁvia Esteves Costa",
              "E-mail": "anafzk@yahoo.com.br",
              "CPF": "083.107.846-43"
          },
          {
              "Nome": "Ana Ines Coura Teixeira",
              "E-mail": "aicoura96@gmail.com",
              "CPF": "703.662.096-04"
          },
          {
              "Nome": "Ana Isabel Ladeira",
              "E-mail": "bebelladeira@hotmail.com",
              "CPF": "133.747.636-69"
          },
          {
              "Nome": "Ana Laura Araújo Rodrigues",
              "E-mail": "analauraaraujorodrigues@gmail.com",
              "CPF": "119.943.216-44"
          },
          {
              "Nome": "Ana Laura de Sousa Franklin",
              "E-mail": "analaurasfranklin@gmail.con",
              "CPF": "104.493.486-79"
          },
          {
              "Nome": "Ana Laura Peixoto Cavalcanti",
              "E-mail": "analpcavalcanti@gmail.com",
              "CPF": "125.047.996-75"
          },
          {
              "Nome": "Ana Laura Rocha Alves",
              "E-mail": "alrochaalves@gmail.com",
              "CPF": "105.071.316-81"
          },
          {
              "Nome": "Ana Lucia Ribeiro Valadares",
              "E-mail": "anarvaladares@gmail.com",
              "CPF": "414.328.436-72"
          },
          {
              "Nome": "Ana Luisa CÉzar",
              "E-mail": "analuisacezar@hotmail.com",
              "CPF": "077.677.916-88"
          },
          {
              "Nome": "Ana Luiza Carvalho Gontijo",
              "E-mail": "anagontijo5@hotmail.com",
              "CPF": "143.982.406-16"
          },
          {
              "Nome": "Ana Luiza Lunardi Rocha",
              "E-mail": "ana_lunardi@yahoo.com.br",
              "CPF": "035.250.646-67"
          },
          {
              "Nome": "Ana Luiza Pereira Saramago",
              "E-mail": "ana_saramago@yahoo.com.br",
              "CPF": "079.723.296-64"
          },
          {
              "Nome": "Ana Luiza Silva Costa",
              "E-mail": "ana.silva.c@hotmail.com",
              "CPF": "109.607.156-81"
          },
          {
              "Nome": "Ana Luiza Werneck Soares de Paula",
              "E-mail": "analuizaw@hotmail.com",
              "CPF": "112.129.636-01"
          },
          {
              "Nome": "Ana Maria Fonseca de Luca",
              "E-mail": "anaddeluca@hotmail.com",
              "CPF": "516.642.596-00"
          },
          {
              "Nome": "Ana Paola Cruz Lunguinho",
              "E-mail": "apclunguinho@hotmail.com",
              "CPF": "111.687.266-89"
          },
          {
              "Nome": "Ana Paula Borges Peres Duarte",
              "E-mail": "anapaulaperesduarte@gmail.com",
              "CPF": "117.455.496-76"
          },
          {
              "Nome": "Ana Paula Borges Vasconcelos",
              "E-mail": "apbv1976@hotmail.com",
              "CPF": "006.079.416-00"
          },
          {
              "Nome": "Ana Paula de Castro Gomes Gervásio",
              "E-mail": "anacastrogervasio@gmail.com",
              "CPF": "100.738.106-06"
          },
          {
              "Nome": "Ana Paula Soares Mendes",
              "E-mail": "anapaulasoaresm@yahoo.com.br",
              "CPF": "128.327.876-65"
          },
          {
              "Nome": "Ana Raphaela Simões",
              "E-mail": "ar-simoes@hotmail.com",
              "CPF": "126.709.386-20"
          },
          {
              "Nome": "Ana Tercia Beltrame Carvalho",
              "E-mail": "anaterciabc@gmail.com",
              "CPF": "117.750.156-29"
          },
          {
              "Nome": "Ana Tereza de Freitas Lanza",
              "E-mail": "anaterezalanza@gmail.com",
              "CPF": "101.276.526-12"
          },
          {
              "Nome": "Ana Theresa Simões Rosa Borges",
              "E-mail": "anattborges@gmail.com",
              "CPF": "018.682.246-43"
          },
          {
              "Nome": "Ananda Massoli Oliveira Vilela",
              "E-mail": "massoliananda@gmail.com",
              "CPF": "129.262.076-54"
          },
          {
              "Nome": "Ananda Peixoto Silva",
              "E-mail": "ANANDA.PEIXOTO@HOTMAIL.COM",
              "CPF": "061.743.816-17"
          },
          {
              "Nome": "Anastacio Soares de Oliveira",
              "E-mail": "anastaciomutum@yahoo.com.br",
              "CPF": "654.881.136-49"
          },
          {
              "Nome": "Anderson Azevedo Andrade",
              "E-mail": "dr.andersonazevedo@uol.com.br",
              "CPF": "040.607.496-80"
          },
          {
              "Nome": "Anderson de Souza Bruno",
              "E-mail": "anderson.brunobh@gmail.com",
              "CPF": "900.663.166-34"
          },
          {
              "Nome": "AndrÉ Luis Canuto",
              "E-mail": "alc@barbacena.com.br",
              "CPF": "765.596.616-87"
          },
          {
              "Nome": "André Ribeiro Alexandre",
              "E-mail": "andre0ribeiro2@gmail.com",
              "CPF": "121.536.186-65"
          },
          {
              "Nome": "Andre Ricardo Silva da Costa",
              "E-mail": "andrericardosc@yahoo.com.br",
              "CPF": "529.520.026-49"
          },
          {
              "Nome": "Andre Soares Martins Pinheiro",
              "E-mail": "drandrepinheiro@gmail.com",
              "CPF": "625.077.966-34"
          },
          {
              "Nome": "Andrea Aparecida Brito Alves",
              "E-mail": "andreabalves@uol.com.br",
              "CPF": "419.625.326-15"
          },
          {
              "Nome": "Andrea Gazzinelli Castro Dantes",
              "E-mail": "deiacd@hotmail.com",
              "CPF": "064.487.006-09"
          },
          {
              "Nome": "Andrea Vilela Toledo",
              "E-mail": "avtoledo1979@gmail.com",
              "CPF": "013.116.396-59"
          },
          {
              "Nome": "AndrÉia Couto Domingos",
              "E-mail": "andreiacoutodomingos@hotmail.com",
              "CPF": "912.731.456-15"
          },
          {
              "Nome": "Andresa Barbosa",
              "E-mail": "andresa.barbosa@gmail.com",
              "CPF": "056.695.326-94"
          },
          {
              "Nome": "Andresa Vieira Silveira",
              "E-mail": "andresavsilveira@gmail.com",
              "CPF": "130.273.046-07"
          },
          {
              "Nome": "Andressa Dias Correa",
              "E-mail": "dessadias@hotmail.com",
              "CPF": "069.502.636-43"
          },
          {
              "Nome": "Andressa Lima Porto",
              "E-mail": "portoandressa58@gmail.com",
              "CPF": "050.606.905-20"
          },
          {
              "Nome": "Andressa Pamela de Oliveira",
              "E-mail": "andressapamoliveira@gmail.com",
              "CPF": "115.231.506-45"
          },
          {
              "Nome": "Andreza Ritielle Alves Pereira Lyra",
              "E-mail": "ad.alves16@gmail.com",
              "CPF": "098.240.076-44"
          },
          {
              "Nome": "Anelise Oliveira de Morais",
              "E-mail": "ane.omorais@gmail.com",
              "CPF": "110.622.256-35"
          },
          {
              "Nome": "Anelise Silva Franca",
              "E-mail": "anelisesilvafranca@gmail.com",
              "CPF": "088.663.426-10"
          },
          {
              "Nome": "Angelica Lemos Debs Diniz",
              "E-mail": "angelyca@uai.com.br",
              "CPF": "866.345.506-20"
          },
          {
              "Nome": "Anna Dias Salvador",
              "E-mail": "adiassalvador@gmail.com",
              "CPF": "016.087.086-08"
          },
          {
              "Nome": "Anna Laura Franca Gontijo Mendes",
              "E-mail": "annalaura.franca@hotmail.com",
              "CPF": "139.268.126-05"
          },
          {
              "Nome": "Anne Karollyny Martins Monteiro Oliveira",
              "E-mail": "annekarollyny@gmail.com",
              "CPF": "107.646.106-94"
          },
          {
              "Nome": "Anne Marie Cunze",
              "E-mail": "marie.cunze@gmail.com",
              "CPF": "114.680.216-13"
          },
          {
              "Nome": "Anteia Galati Acioli Lindoso",
              "E-mail": "anteialindoso@gmail.com",
              "CPF": "105.187.006-23"
          },
          {
              "Nome": "Antonio Carlos Pinto Guimaraes",
              "E-mail": "acpgui@gmail.com",
              "CPF": "133.654.526-72"
          },
          {
              "Nome": "Antonio Fernandes Lages",
              "E-mail": "aflages@hotmail.com",
              "CPF": "343.410.726-68"
          },
          {
              "Nome": "AntÔnio Francisco Terra Oliveira",
              "E-mail": "antonnioterra@uol.com.br",
              "CPF": "211.050.066-20"
          },
          {
              "Nome": "Antonio Gabriel de Vasconcelos Costa",
              "E-mail": "agabrielvc@yahoo.com",
              "CPF": "254.857.416-49"
          },
          {
              "Nome": "Antonio Leite Silva",
              "E-mail": "antonio.leitesilva@yahoo.com.br",
              "CPF": "158.305.436-72"
          },
          {
              "Nome": "Antonio Rafael Alves",
              "E-mail": "antonioralves1954@gmail.com",
              "CPF": "222.091.316-34"
          },
          {
              "Nome": "Aquia Lacerda Garcia Pedrosa",
              "E-mail": "aquia.alp@gmail.com",
              "CPF": "047.911.056-56"
          },
          {
              "Nome": "Ariane Miranda Vaz",
              "E-mail": "arimvaz@hotmail.com",
              "CPF": "122.498.446-31"
          },
          {
              "Nome": "Aricia Dutra Cardoso",
              "E-mail": "ariciacardoso@gmail.com",
              "CPF": "131.988.946-89"
          },
          {
              "Nome": "Ariela Raissa de Assis Avelino",
              "E-mail": "ariela.avelino@famed.ufal.br",
              "CPF": "087.232.536-90"
          },
          {
              "Nome": "Aristoteles dos Santos Chaves",
              "E-mail": "amaralchaves@uol.com.br",
              "CPF": "470.981.806-10"
          },
          {
              "Nome": "Arlene de Oliveira Fernandes",
              "E-mail": "arleneofernandes@gmail.com",
              "CPF": "893.309.786-49"
          },
          {
              "Nome": "Armando Sadao Nonaka",
              "E-mail": "armandononaka@ig.com.br",
              "CPF": "920.162.606-10"
          },
          {
              "Nome": "Arnaldo da Cunha Pereira",
              "E-mail": "acpereira38@gmail.com",
              "CPF": "804.813.296-68"
          },
          {
              "Nome": "Arthur Cesario de Castro Neto",
              "E-mail": "arthurccneto@gmail.com",
              "CPF": "132.187.266-62"
          },
          {
              "Nome": "Aurora Silva Oliveira",
              "E-mail": "aurorasofce@gmail.com",
              "CPF": "153.884.176-20"
          },
          {
              "Nome": "Ayla Nazareth Cunha Mascarenhas Lomanto",
              "E-mail": "aylalomanto@outlook.com",
              "CPF": "114.156.076-30"
          },
          {
              "Nome": "Barbara Carmita da Silva Silveira",
              "E-mail": "barbaracsilveira@hotmail.com",
              "CPF": "079.734.646-54"
          },
          {
              "Nome": "BÁrbara CatÃo Ferreira de Morais",
              "E-mail": "barbaracataofm@gmail.com",
              "CPF": "118.903.246-55"
          },
          {
              "Nome": "Barbara Coelho Pereira",
              "E-mail": "barbaracoep@gmail.com",
              "CPF": "130.465.706-00"
          },
          {
              "Nome": "Bárbara Larissa Silva",
              "E-mail": "barbaralarissasilva@hotmail.com",
              "CPF": "129.452.656-13"
          },
          {
              "Nome": "Bárbara Luiza Klein",
              "E-mail": "barbaralklein2@gmail.com",
              "CPF": "103.902.616-88"
          },
          {
              "Nome": "Bárbara Machado Garcia",
              "E-mail": "barbaramgarcia1234@gmail.com",
              "CPF": "127.293.956-10"
          },
          {
              "Nome": "Barbara Oliveira Ferreira",
              "E-mail": "barbaraondosreis@gmail.com",
              "CPF": "119.634.147-80"
          },
          {
              "Nome": "Bárbara Paula de Barros Carvalho Pinto",
              "E-mail": "barbaracarvalhomedicina@outlook.com",
              "CPF": "087.675.826-05"
          },
          {
              "Nome": "Bárbara Santos Pereira Neres",
              "E-mail": "barbara_spn@hotmail.com",
              "CPF": "124.737.576-58"
          },
          {
              "Nome": "Bárbara Soares Parreira",
              "E-mail": "barbara_soares96@hotmail.com",
              "CPF": "099.213.406-46"
          },
          {
              "Nome": "Beatriz AmÉlia Monteiro de Andrade",
              "E-mail": "biamandrade@yahoo.com.br",
              "CPF": "036.099.436-96"
          },
          {
              "Nome": "Beatriz Camilo de Oliveira",
              "E-mail": "bea_camilo@yahoo.com.br",
              "CPF": "058.701.386-98"
          },
          {
              "Nome": "Beatriz Cazarim de Souza",
              "E-mail": "biacazarim@gmail.com",
              "CPF": "130.095.716-66"
          },
          {
              "Nome": "Beatriz da Silva Deslandes",
              "E-mail": "beatrizsdeslandes@gmail.com",
              "CPF": "690.522.476-68"
          },
          {
              "Nome": "Beatriz Fonseca de Luca",
              "E-mail": "bfluca@gmail.com",
              "CPF": "516.640.546-34"
          },
          {
              "Nome": "Beatriz Martins Guerra Pantuza Almeida",
              "E-mail": "biapantuza@hotmail.com",
              "CPF": "139.372.506-62"
          },
          {
              "Nome": "Beatriz Oliveira Botrel",
              "E-mail": "biaobotrel@hotmail.com",
              "CPF": "111.451.696-19"
          },
          {
              "Nome": "Beatriz Souto Barbosa Muzzi",
              "E-mail": "biamuzzi99@gmail.com",
              "CPF": "146.090.926-70"
          },
          {
              "Nome": "Beatriz Teles Aragão",
              "E-mail": "bt.aragao98@gmail.com",
              "CPF": "069.575.913-28"
          },
          {
              "Nome": "Benedito Fabiano dos Reis",
              "E-mail": "benefabiano@uol.com.br",
              "CPF": "027.311.666-57"
          },
          {
              "Nome": "Benito Pio Vitorio Ceccato Junior",
              "E-mail": "benitopio@gmail.com",
              "CPF": "217.446.026-20"
          },
          {
              "Nome": "Bethânia de Lima Figueiredo Niman",
              "E-mail": "bethanialima_02@hotmail.com",
              "CPF": "123.950.516-75"
          },
          {
              "Nome": "Bianca Carvalho Freire Pimentel",
              "E-mail": "biancafpimentel@gmail.com",
              "CPF": "126.019.636-46"
          },
          {
              "Nome": "Bianca de Paula Salles de Oliveira",
              "E-mail": "biancapsalles@hotmail.com",
              "CPF": "109.945.526-02"
          },
          {
              "Nome": "Bianca Maria Fernandes Salgado Soares",
              "E-mail": "bianca_mfss@hotmail.com",
              "CPF": "123.901.106-73"
          },
          {
              "Nome": "Brena Leticia Carlos Bento",
              "E-mail": "brena.bento@yahoo.com.br",
              "CPF": "011.874.676-69"
          },
          {
              "Nome": "Brenda Andrade Marquesine",
              "E-mail": "BRENDAMARQUEZINE@HOTMAIL.COM",
              "CPF": "111.048.356-22"
          },
          {
              "Nome": "Brenda de Sousa Campos",
              "E-mail": "brendasousacampos@hotmail.com",
              "CPF": "134.787.626-00"
          },
          {
              "Nome": "Brenda Paixão Marinho",
              "E-mail": "bpaixao.bh@gmail.com",
              "CPF": "080.841.346-55"
          },
          {
              "Nome": "Brenda Peixoto Menezes",
              "E-mail": "brendaphn@hotmail.com",
              "CPF": "071.806.666-96"
          },
          {
              "Nome": "Brenda Pereira da Costa Martiniano",
              "E-mail": "brenda.martiniano24@gmail.com",
              "CPF": "173.105.037-24"
          },
          {
              "Nome": "Brenda Senra Duque Ramos",
              "E-mail": "BRENDASENRA2010@GMAIL.COM",
              "CPF": "098.213.806-70"
          },
          {
              "Nome": "Bruna Antero Borba",
              "E-mail": "bruna_antero@hotmail.com",
              "CPF": "058.461.396-20"
          },
          {
              "Nome": "Bruna Aparecida dos Santos Toneto",
              "E-mail": "brunatoneto@yahoo.com.br",
              "CPF": "096.080.156-18"
          },
          {
              "Nome": "Bruna Costa Queiroz",
              "E-mail": "bruna.costaqueiroz@gmail.com",
              "CPF": "097.075.986-03"
          },
          {
              "Nome": "Bruna Cristina Ribeiro Andrade Figueiredo",
              "E-mail": "brunacrandrade@hotmail.com",
              "CPF": "060.030.996-74"
          },
          {
              "Nome": "Bruna Destro Werner",
              "E-mail": "brunadwerner@gmail.com",
              "CPF": "119.174.686-01"
          },
          {
              "Nome": "Bruna Martins Grassi Sedlmaier",
              "E-mail": "brunamgsedlmaier@gmail.com",
              "CPF": "013.086.745-46"
          },
          {
              "Nome": "Bruna Máximo de Carvalho",
              "E-mail": "brunamcar12@hotmail.com",
              "CPF": "102.573.266-93"
          },
          {
              "Nome": "Bruna Pereira Vilaça",
              "E-mail": "brunavilaca79@gmail.com",
              "CPF": "116.791.186-50"
          },
          {
              "Nome": "Bruna Pimenta Valente",
              "E-mail": "bruna.p.valente@gmail.com",
              "CPF": "104.645.416-11"
          },
          {
              "Nome": "Bruna Rezende Bonfim",
              "E-mail": "bruna_rbonfim@hotmail.com",
              "CPF": "089.314.556-40"
          },
          {
              "Nome": "Bruna Ribeiro Maia Alves",
              "E-mail": "bubruna06@gmail.com",
              "CPF": "117.929.806-39"
          },
          {
              "Nome": "Bruna Rodrigues Leão",
              "E-mail": "brunaleaomed@gmail.com",
              "CPF": "060.678.256-78"
          },
          {
              "Nome": "Bruna Schettino Morato Barreira",
              "E-mail": "brunasmbarreira@gmail.com",
              "CPF": "135.016.466-66"
          },
          {
              "Nome": "Bruna Souza Macedo",
              "E-mail": "brunamacedo223@gmail.com",
              "CPF": "186.727.037-40"
          },
          {
              "Nome": "Bruno Mattiello Gomes",
              "E-mail": "bruno_mattiello@hotmail.com",
              "CPF": "095.901.946-48"
          },
          {
              "Nome": "Cairo AntÔnio Guedes JÚnior",
              "E-mail": "drcairoguedes@gmail.com",
              "CPF": "796.147.606-72"
          },
          {
              "Nome": "Camila Bacelar Bastos",
              "E-mail": "camilabacelar7@gmail.com",
              "CPF": "091.334.256-47"
          },
          {
              "Nome": "Camila Caetano de Paula Miranda Valladares",
              "E-mail": "MILA_MIRANDA_@HOTMAIL.COM",
              "CPF": "105.435.736-64"
          },
          {
              "Nome": "Camila de Oliveira Santos",
              "E-mail": "mila_o_s@hotmail.com",
              "CPF": "121.572.096-38"
          },
          {
              "Nome": "Camila de Paula Lorenzotti",
              "E-mail": "camilalourenzotti@live.com",
              "CPF": "114.019.596-44"
          },
          {
              "Nome": "Camila Freitas Caram GuimarÃes",
              "E-mail": "camilafcaram@gmail.com",
              "CPF": "043.342.876-70"
          },
          {
              "Nome": "Camila Gabriele Silva Gama",
              "E-mail": "camilags.ufjf@gmail.com",
              "CPF": "024.792.311-78"
          },
          {
              "Nome": "Camila Karam",
              "E-mail": "cami.karam@gmail.com",
              "CPF": "114.680.466-08"
          },
          {
              "Nome": "Camila Lobo Mendes",
              "E-mail": "camilalobom@gmail.com",
              "CPF": "056.826.446-03"
          },
          {
              "Nome": "Camila Marinho Couto de Almeida Braga",
              "E-mail": "braga.camila@gmail.com",
              "CPF": "059.789.766-27"
          },
          {
              "Nome": "Camila Martins de Carvalho",
              "E-mail": "mcarvalho.camila@gmail.com",
              "CPF": "056.411.156-22"
          },
          {
              "Nome": "Camila Pereira",
              "E-mail": "camila_gomes_pereira@outlook.com",
              "CPF": "137.804.397-94"
          },
          {
              "Nome": "Camila Perim de Lima",
              "E-mail": "camilaperimlima@gmail.com",
              "CPF": "139.183.186-13"
          },
          {
              "Nome": "Camila Silva Abreu",
              "E-mail": "camilyabreu@gmail.com",
              "CPF": "070.497.516-50"
          },
          {
              "Nome": "Camila Siqueira Araujo",
              "E-mail": "camilasiqueiraaraujo@hotmail.com",
              "CPF": "094.549.416-58"
          },
          {
              "Nome": "Camila Toffoli Ribeiro",
              "E-mail": "camtoffoli@yahoo.com.br",
              "CPF": "039.708.756-09"
          },
          {
              "Nome": "Camile Gomes Teles",
              "E-mail": "dracamilegomesteles@gmail.com",
              "CPF": "054.648.766-18"
          },
          {
              "Nome": "Camilla Russi Rezende",
              "E-mail": "millajf14@hotmail.com",
              "CPF": "106.755.036-47"
          },
          {
              "Nome": "Camilla Vilela Marcolino",
              "E-mail": "camillavilela40@gmail.com",
              "CPF": "054.464.555-33"
          },
          {
              "Nome": "Cantidio Cotta de Figueiredo",
              "E-mail": "cantidiocotta@gmail.com",
              "CPF": "004.337.216-34"
          },
          {
              "Nome": "Carla Alves Amorim",
              "E-mail": "carlaaamorim1@gmail.com",
              "CPF": "063.057.115-50"
          },
          {
              "Nome": "Carla Baiao de Mello Dias",
              "E-mail": "carlabmdias@hotmail.com",
              "CPF": "031.943.896-10"
          },
          {
              "Nome": "Carla Cristina da Silva Lamounier Boaventura",
              "E-mail": "clamounierboaventura@yahoo.com.br",
              "CPF": "036.100.216-59"
          },
          {
              "Nome": "Carla Victória Moreira Vasconcelos",
              "E-mail": "carlamvasconcelos7@gmail.com",
              "CPF": "136.822.366-43"
          },
          {
              "Nome": "Carlos Eduardo de Miranda Pimentel",
              "E-mail": "carlosepimentel@gmail.com",
              "CPF": "615.937.376-53"
          },
          {
              "Nome": "Carlos Eduardo Senne de Moraes",
              "E-mail": "carlosesmoraes04@gmail.com",
              "CPF": "627.376.946-04"
          },
          {
              "Nome": "Carlos Henrique Mascarenhas Silva",
              "E-mail": "carloshenrique@materdei.com.br",
              "CPF": "807.858.326-53"
          },
          {
              "Nome": "Carlos Henrique Souza de Jesus",
              "E-mail": "carloshsjesus@gmail.com",
              "CPF": "565.686.306-91"
          },
          {
              "Nome": "Carlos Martins de Sa Filho",
              "E-mail": "carlos.gob2000@gmail.com",
              "CPF": "908.359.486-68"
          },
          {
              "Nome": "Carlos Mercado Alves",
              "E-mail": "carlosmercadoalves@gmail.com",
              "CPF": "263.513.907-53"
          },
          {
              "Nome": "Carlos Rogerio Junqueira Ribeiro",
              "E-mail": "carlosrogeriojr@hotmail.com",
              "CPF": "729.517.966-68"
          },
          {
              "Nome": "Carlos Washington Vieira da Silva",
              "E-mail": "cwvieiras@yahoo.com.br",
              "CPF": "000.802.926-15"
          },
          {
              "Nome": "Carolina Alves Melo",
              "E-mail": "carolmelo2111@gmail.com",
              "CPF": "019.456.716-88"
          },
          {
              "Nome": "Carolina Andrade Vitoi",
              "E-mail": "carolvitoi@hotmail.com",
              "CPF": "117.082.166-93"
          },
          {
              "Nome": "Carolina dos Santos Cruz",
              "E-mail": "carolina-carolsantos@hotmail.com",
              "CPF": "103.713.906-21"
          },
          {
              "Nome": "Carolina Flores Tavares Braga",
              "E-mail": "carolflorestavares@yahoo.com.br",
              "CPF": "289.522.378-54"
          },
          {
              "Nome": "Carolina Murta Lage",
              "E-mail": "carol_murta@hotmail.com",
              "CPF": "087.708.236-77"
          },
          {
              "Nome": "Carolina Paixão Teixeira",
              "E-mail": "carolinapaixaot@gmail.com",
              "CPF": "118.758.586-60"
          },
          {
              "Nome": "Carolina Pinho E Godinho",
              "E-mail": "carolgodinho70@gmail.com",
              "CPF": "140.339.826-71"
          },
          {
              "Nome": "Carolina Policena Melo",
              "E-mail": "cpmelo45@gmail.com",
              "CPF": "083.636.406-62"
          },
          {
              "Nome": "Carolina Soares Barros de Melo",
              "E-mail": "carolsbmelo@yahoo.com.br",
              "CPF": "088.047.816-02"
          },
          {
              "Nome": "Carolina Toigo do Espirito Santo",
              "E-mail": "carolinatoigo@hotmail.com",
              "CPF": "069.170.321-31"
          },
          {
              "Nome": "Caroline CÁssia de Morais",
              "E-mail": "carolinecmorais@hotmail.com",
              "CPF": "096.581.706-76"
          },
          {
              "Nome": "Caroline Kissilla Pereira Pascoal",
              "E-mail": "carolkissilla@gmail.com",
              "CPF": "047.051.876-60"
          },
          {
              "Nome": "Caroline Miranda Araújo",
              "E-mail": "carolaraujo0209@gmail.com",
              "CPF": "134.758.496-07"
          },
          {
              "Nome": "Caroline Vilela de Lima",
              "E-mail": "carolvilelalima@hotmail.com",
              "CPF": "103.843.096-82"
          },
          {
              "Nome": "Cassia Desiree Marra",
              "E-mail": "cassia.desiree@gmail.com",
              "CPF": "599.060.146-87"
          },
          {
              "Nome": "CÁssio Furtini Haddad",
              "E-mail": "cassiohaddad@hotmail.com",
              "CPF": "030.001.386-84"
          },
          {
              "Nome": "Cecilia Nogueira Monnerat",
              "E-mail": "cecilianmonnerat@hotmail.com",
              "CPF": "118.796.596-03"
          },
          {
              "Nome": "Cesar Augusto Ferrari Teixeira",
              "E-mail": "cesarferrari_fly@hotmail.com",
              "CPF": "021.780.668-60"
          },
          {
              "Nome": "Cesar Guido Antezana Martinez",
              "E-mail": "cesarantezana@ig.com.br",
              "CPF": "071.701.816-49"
          },
          {
              "Nome": "Chirlei Aparecida Ferreira",
              "E-mail": "ferreira1007@yahoo.com.br",
              "CPF": "568.405.276-20"
          },
          {
              "Nome": "Christiane Helena Carvalho Gomes",
              "E-mail": "chrishcg2004@yahoo.com.br",
              "CPF": "074.299.976-94"
          },
          {
              "Nome": "Cid Vasconcelos Westin",
              "E-mail": "empty@febrasgo.org.br",
              "CPF": "039.886.356-34"
          },
          {
              "Nome": "Cinara Carvalho Silva",
              "E-mail": "cinaracarvalho50@gmail.com",
              "CPF": "131.402.246-64"
          },
          {
              "Nome": "Cindy Lima Vidigal Malta",
              "E-mail": "maltacindy@yahoo.com.br",
              "CPF": "129.530.786-30"
          },
          {
              "Nome": "Cinthya Regina de Medeiros Borém Rocha",
              "E-mail": "cinthyaborem@gmail.com",
              "CPF": "920.957.476-15"
          },
          {
              "Nome": "CÍntia Aparecida Santos Oliveira",
              "E-mail": "cintiagob@gmail.com",
              "CPF": "031.429.686-79"
          },
          {
              "Nome": "Cintia Porto de Souza",
              "E-mail": "cintiaportodesouza@hotmail.com",
              "CPF": "130.589.176-78"
          },
          {
              "Nome": "Clara Calazans de Oliveira Costa",
              "E-mail": "claracalazansc@gmail.com",
              "CPF": "137.422.476-62"
          },
          {
              "Nome": "Clara Coelho Cecato",
              "E-mail": "claracecato@gmail.com",
              "CPF": "108.292.526-81"
          },
          {
              "Nome": "Clara Duarte Costa Pinto",
              "E-mail": "claraduarte974@gmail.com",
              "CPF": "137.100.686-57"
          },
          {
              "Nome": "Clara Jamarino Braga de Almeida",
              "E-mail": "clarajamarino@gmail.com",
              "CPF": "132.147.756-26"
          },
          {
              "Nome": "Clara Vieira Magalhães",
              "E-mail": "claravieiramagalhaes@gmail.com",
              "CPF": "131.903.846-81"
          },
          {
              "Nome": "Clarice Guimaraes Miglio",
              "E-mail": "claricemiglio@hotmail.com",
              "CPF": "051.790.286-98"
          },
          {
              "Nome": "Clarissa Rocha Panconi Piccinini",
              "E-mail": "clarissapanconi@hotmail.com",
              "CPF": "063.727.546-22"
          },
          {
              "Nome": "Cláudia Alessandra Galvão Xavier",
              "E-mail": "claudia.alessandra2@gmail.com",
              "CPF": "058.478.474-08"
          },
          {
              "Nome": "Claudia Heloísa Santos Santana",
              "E-mail": "claudiasantanamed23@gmail.com",
              "CPF": "064.501.745-01"
          },
          {
              "Nome": "Claudia Lourdes Soares Laranjeira",
              "E-mail": "cls.laranjeira@gmail.com",
              "CPF": "864.481.966-68"
          },
          {
              "Nome": "Claudia Lucia Barbosa Salomao",
              "E-mail": "ginecoinfantopub@yahoo.com.br",
              "CPF": "537.500.046-68"
          },
          {
              "Nome": "Claudia Navarro Carvalho Duarte Lemos",
              "E-mail": "cclaudian@terra.com.br",
              "CPF": "709.872.546-34"
          },
          {
              "Nome": "ClÁudia Rosa Carvalho Giannini",
              "E-mail": "jmcsgiannini@gmail.com",
              "CPF": "803.613.406-30"
          },
          {
              "Nome": "Claudia Teixeira da Costa Lodi",
              "E-mail": "claudiatclodi@gmail.com",
              "CPF": "631.305.726-00"
          },
          {
              "Nome": "Clayton Leite BrandÃo",
              "E-mail": "claytonleitebrandao@hotmail.com",
              "CPF": "818.027.066-15"
          },
          {
              "Nome": "Clea Maria Pimenta Fernandes",
              "E-mail": "clea.pimenta@hotmail.com",
              "CPF": "600.094.206-06"
          },
          {
              "Nome": "Clecio Alberto Pimenta",
              "E-mail": "cleciopimenta@hotmail.com",
              "CPF": "567.360.966-34"
          },
          {
              "Nome": "Clecio Enio Murta de Lucena",
              "E-mail": "cemlucena@gmail.com",
              "CPF": "513.233.976-04"
          },
          {
              "Nome": "Climenia Zacarelli Del Fraro",
              "E-mail": "sirlene.oliveiravga@hotmail.com",
              "CPF": "312.183.346-49"
          },
          {
              "Nome": "Consuelo Rodrigues Gallo",
              "E-mail": "consuelo.2205@hotmail.com",
              "CPF": "574.340.856-49"
          },
          {
              "Nome": "Cristiane Carine Rodrigues",
              "E-mail": "criscarinego@hotmail.com",
              "CPF": "821.405.296-34"
          },
          {
              "Nome": "Cristiane EmÍlia Dutra ValadÃo",
              "E-mail": "crisvaladao@gmail.com",
              "CPF": "068.828.306-30"
          },
          {
              "Nome": "Cristiane Mendes de Resende",
              "E-mail": "cristianemresende@yahoo.com.br",
              "CPF": "990.820.716-49"
          },
          {
              "Nome": "Cristiane Oliveira E Sousa",
              "E-mail": "cristioliveira01@yahoo.com.br",
              "CPF": "032.824.176-83"
          },
          {
              "Nome": "Cristina Cabral Geo Vercoza",
              "E-mail": "crisvercoza@gmail.com",
              "CPF": "642.191.356-34"
          },
          {
              "Nome": "Cristina Kallas Hueb",
              "E-mail": "kallashueb@uol.com.br",
              "CPF": "984.646.556-49"
          },
          {
              "Nome": "Cristina Sousa Araújo Schlemper",
              "E-mail": "cris_araujo_@msn.com",
              "CPF": "072.160.986-41"
          },
          {
              "Nome": "Cristine Moreira Silva Benetti",
              "E-mail": "cristine_benetti@hotmail.com",
              "CPF": "064.466.646-30"
          },
          {
              "Nome": "Cynara Pereira Marra",
              "E-mail": "cynaramarra26.cm@gmail.com",
              "CPF": "811.175.746-87"
          },
          {
              "Nome": "Dacio Jose Ribeiro",
              "E-mail": "dacioj.ribeiro@yahoo.com.br",
              "CPF": "100.679.811-00"
          },
          {
              "Nome": "Daiene Brunelli Neiva Batista",
              "E-mail": "daienebrunelli@gmail.com",
              "CPF": "115.263.126-89"
          },
          {
              "Nome": "Daisy Martins Rodrigues",
              "E-mail": "daisymartinsrodrigues@hotmail.com",
              "CPF": "990.112.556-15"
          },
          {
              "Nome": "Dania Brancalhao de Souza",
              "E-mail": "danette@netsite.com.br",
              "CPF": "713.621.006-25"
          },
          {
              "Nome": "Daniel da Silva Vieira",
              "E-mail": "drdanielvieira@outlook.com",
              "CPF": "881.644.626-91"
          },
          {
              "Nome": "Daniel Henrique da Silva Luz",
              "E-mail": "danielhenrique0407@gmail.com",
              "CPF": "056.631.821-01"
          },
          {
              "Nome": "Daniel Oliva Brito",
              "E-mail": "danielolivabrito@gmail.com",
              "CPF": "071.970.796-08"
          },
          {
              "Nome": "Daniela Cristina Machado TameirÃo",
              "E-mail": "danielacmtameirao@gmail.com",
              "CPF": "541.451.206-04"
          },
          {
              "Nome": "Daniela Cruz Pereira",
              "E-mail": "danielacruz-86@hotmail.com",
              "CPF": "080.709.076-06"
          },
          {
              "Nome": "Daniela Elianete Soares",
              "E-mail": "danielaesoares@yahoo.com.br",
              "CPF": "088.157.936-07"
          },
          {
              "Nome": "Daniela GuimarÃes Silva",
              "E-mail": "danielags.med@gmail.com",
              "CPF": "070.345.546-09"
          },
          {
              "Nome": "Daniela Marcia Rodrigues Caldeira",
              "E-mail": "dmrdaniela45@gmail.com",
              "CPF": "030.850.816-58"
          },
          {
              "Nome": "Daniela Rezende Moreira",
              "E-mail": "danielarezendemoreira@gmail.com",
              "CPF": "121.623.576-74"
          },
          {
              "Nome": "Danielle Barbosa de Santis",
              "E-mail": "danibsantis@gmail.com",
              "CPF": "101.836.416-12"
          },
          {
              "Nome": "Danielle Cunha Martins",
              "E-mail": "dradaniellemartins@gmail.com",
              "CPF": "074.876.406-20"
          },
          {
              "Nome": "Dara Brettas Veloso",
              "E-mail": "darabrettas@yahoo.com.br",
              "CPF": "154.631.536-55"
          },
          {
              "Nome": "Dara de Paula Rodrigues",
              "E-mail": "daradpr@gmail.com",
              "CPF": "099.526.716-28"
          },
          {
              "Nome": "Darlan Bergamaschi Souza Costa",
              "E-mail": "darlan.bergamaschi@gmail.com",
              "CPF": "067.401.506-13"
          },
          {
              "Nome": "Dayse Maria Oliviera SÁ",
              "E-mail": "daysesa.com@gmail.com",
              "CPF": "742.049.806-78"
          },
          {
              "Nome": "Debora Cristina de Freitas Batista",
              "E-mail": "deboracfbatista@gmail.com",
              "CPF": "079.976.506-60"
          },
          {
              "Nome": "DÉbora da Silva Nora Henri Guitton",
              "E-mail": "deborasnorahguitton@gmail.com",
              "CPF": "947.079.527-04"
          },
          {
              "Nome": "Débora de Paula Silva",
              "E-mail": "deboradepaula95@gmail.com",
              "CPF": "114.349.746-50"
          },
          {
              "Nome": "Débora Letícia Rodrigues Santos",
              "E-mail": "deboraleticia21@hotmail.com",
              "CPF": "078.912.476-92"
          },
          {
              "Nome": "Debora Marinzek Teixeira",
              "E-mail": "deboramarinzek@hotmail.com",
              "CPF": "565.284.186-91"
          },
          {
              "Nome": "Debora Rodrigues Tolentino",
              "E-mail": "debora.tolentino98@gmail.com",
              "CPF": "090.670.586-02"
          },
          {
              "Nome": "Débora Vianna D'almeida Lucas Macharet",
              "E-mail": "deboravdlucas@gmail.com",
              "CPF": "016.479.086-12"
          },
          {
              "Nome": "Delzio Salgado Bicalho",
              "E-mail": "DELZIOBICALHO@gmail.com",
              "CPF": "486.505.286-00"
          },
          {
              "Nome": "Denilson Procopio de Castro",
              "E-mail": "denilson.med@hotmail.com",
              "CPF": "045.993.406-69"
          },
          {
              "Nome": "Denise Almeida Araujo Basso",
              "E-mail": "denisebasso@hotmail.com",
              "CPF": "117.042.806-13"
          },
          {
              "Nome": "Denise Aparecida Batista",
              "E-mail": "batistadab@yahoo.com.br",
              "CPF": "391.006.856-15"
          },
          {
              "Nome": "Denise Aparecida GuimarÃes",
              "E-mail": "deniseusgo@gmail.com",
              "CPF": "814.041.586-34"
          },
          {
              "Nome": "Denise Ferreira de Oliveira",
              "E-mail": "denisefo@uai.com.br",
              "CPF": "876.660.146-00"
          },
          {
              "Nome": "Denise Morais Carneiro",
              "E-mail": "deniserecreio@yahoo.com.br",
              "CPF": "000.099.366-29"
          },
          {
              "Nome": "Denise Vilela Brandao Andrade",
              "E-mail": "denisevbrand@gmail.com",
              "CPF": "412.269.926-68"
          },
          {
              "Nome": "Diana Cupertino Milagres",
              "E-mail": "dianamilagres@gmail.com",
              "CPF": "099.416.426-21"
          },
          {
              "Nome": "Diego da Rocha",
              "E-mail": "diegodarocha89@gmail.com",
              "CPF": "032.129.371-14"
          },
          {
              "Nome": "Drauzio Oppenheimer",
              "E-mail": "drdrauzio@hotmail.com",
              "CPF": "516.928.726-72"
          },
          {
              "Nome": "Drieu Paraizo Garcia",
              "E-mail": "drieu@terra.com.br",
              "CPF": "116.728.466-68"
          },
          {
              "Nome": "Duval GuimarÃes Camilo",
              "E-mail": "duvalgcamilo@yahoo.com.br",
              "CPF": "270.301.726-04"
          },
          {
              "Nome": "Ecimar Gonçalves da Silva Junior",
              "E-mail": "ecimarjr2011@hotmail.com",
              "CPF": "017.863.661-42"
          },
          {
              "Nome": "Eddie Fernando Candido Murta",
              "E-mail": "eddiemurta@gmail.com",
              "CPF": "476.680.326-49"
          },
          {
              "Nome": "Edilamar Rodrigues da Cruz Freitas",
              "E-mail": "edilacruz@hotmail.com",
              "CPF": "311.795.506-25"
          },
          {
              "Nome": "Edna Maria Lopes de Castro",
              "E-mail": "flavic@uai.com.br",
              "CPF": "004.181.886-53"
          },
          {
              "Nome": "Edson Morato",
              "E-mail": "madamorato@yahoo.com.br",
              "CPF": "148.007.486-15"
          },
          {
              "Nome": "Eduarda Araújo Ribeiro",
              "E-mail": "duda.araujo.98@gmail.com",
              "CPF": "118.170.396-44"
          },
          {
              "Nome": "Eduarda Estanislau Moreira",
              "E-mail": "eduarda.estm@gmail.com",
              "CPF": "121.182.256-79"
          },
          {
              "Nome": "Eduarda Franco de Castro",
              "E-mail": "eduardafcastrocm@gmail.com",
              "CPF": "139.009.736-60"
          },
          {
              "Nome": "Eduarda Lara Resende",
              "E-mail": "dudalararesende@yahoo.com.br",
              "CPF": "103.105.226-76"
          },
          {
              "Nome": "Eduarda Ramos de Moura",
              "E-mail": "dudsrm@gmail.com",
              "CPF": "105.267.416-00"
          },
          {
              "Nome": "Eduardo Batista Candido",
              "E-mail": "candidoeb@gmail.com",
              "CPF": "029.571.446-89"
          },
          {
              "Nome": "Eduardo Biagioni Filho",
              "E-mail": "empty@febrasgo.org.br",
              "CPF": "000.339.016-00"
          },
          {
              "Nome": "Eduardo Cunha da Fonseca",
              "E-mail": "edu.cunhafonseca@gmail.com",
              "CPF": "614.374.926-49"
          },
          {
              "Nome": "Eduardo Ferreira da Silva",
              "E-mail": "eduardo_medicina@outlook.com",
              "CPF": "101.210.506-70"
          },
          {
              "Nome": "Eduardo Siqueira Fernandes",
              "E-mail": "fernandes.es@gmail.com",
              "CPF": "053.675.546-95"
          },
          {
              "Nome": "Edval Nacle Estefen",
              "E-mail": "edval.nacle@uol.com.br",
              "CPF": "088.600.766-68"
          },
          {
              "Nome": "Elaine Silva Azevedo",
              "E-mail": "elaineazev@yahoo.com.br",
              "CPF": "322.932.308-48"
          },
          {
              "Nome": "Elaine Travaglia Santos",
              "E-mail": "etravaglia11@gmail.com",
              "CPF": "957.126.746-53"
          },
          {
              "Nome": "Eliana Maria Guimaraes Costa Maia",
              "E-mail": "elianamgcmaia@live.com",
              "CPF": "677.535.406-10"
          },
          {
              "Nome": "Eliana Motta Castanheira",
              "E-mail": "elianacastanheira@gmail.com",
              "CPF": "402.597.656-00"
          },
          {
              "Nome": "Elielton Ribeiro Nunes",
              "E-mail": "elielton.nunes@yahoo.com",
              "CPF": "008.624.316-03"
          },
          {
              "Nome": "Elisa Delgado de Oliveira",
              "E-mail": "elisaadelgado18@gmail.com",
              "CPF": "098.639.516-17"
          },
          {
              "Nome": "Elisa Milagres Maciel",
              "E-mail": "elisa_12maciel@hotmail.com",
              "CPF": "119.819.246-12"
          },
          {
              "Nome": "Elizabeth da Silva",
              "E-mail": "drelizabethdasilva@hotmail.com",
              "CPF": "422.125.966-34"
          },
          {
              "Nome": "Elke Nascimento Gomes do Valle",
              "E-mail": "elke.valle@hotmail.com",
              "CPF": "056.572.475-40"
          },
          {
              "Nome": "Elsa Akemi Watanabe Pena",
              "E-mail": "elsaawp@hotmail.com",
              "CPF": "091.845.918-46"
          },
          {
              "Nome": "Elyssa Carvalho Silva",
              "E-mail": "elyssacarvalho@hotmail.com",
              "CPF": "224.086.968-28"
          },
          {
              "Nome": "Emanuel de Oliveira ThimÓteo",
              "E-mail": "emanuelthimoteo@hotmail.com",
              "CPF": "069.339.746-26"
          },
          {
              "Nome": "Emanuelle Scarlath Tomaz",
              "E-mail": "EMANUELLE.SCARLATH@GMAIL.COM",
              "CPF": "121.277.206-79"
          },
          {
              "Nome": "Emanuelly Canária Torres",
              "E-mail": "emanuelly.torres@yahoo.com",
              "CPF": "116.165.776-22"
          },
          {
              "Nome": "Emilly Damasceno Martins",
              "E-mail": "Damascenoemillymed@gmail.com",
              "CPF": "098.319.276-64"
          },
          {
              "Nome": "Emmen Carvalho Rocha",
              "E-mail": "emmen_rocha@hotmail.com",
              "CPF": "075.776.816-44"
          },
          {
              "Nome": "Eniria Amorim Ribeiro Barros",
              "E-mail": "eniriabraga21@gmail.com",
              "CPF": "454.929.056-00"
          },
          {
              "Nome": "Erci Maria Silva Alves",
              "E-mail": "ercimaria@hotmail.com",
              "CPF": "898.175.081-53"
          },
          {
              "Nome": "Erica Barcala Baptista Rodrigues",
              "E-mail": "ericaesergio@uol.com.br",
              "CPF": "005.527.357-28"
          },
          {
              "Nome": "Érica Medeiros Gomes",
              "E-mail": "ericamedeirosg@gmail.com",
              "CPF": "080.981.056-52"
          },
          {
              "Nome": "Erika de Lima Souza",
              "E-mail": "souzaerika.lima@gmail.com",
              "CPF": "135.993.717-09"
          },
          {
              "Nome": "Erika Maia Abreu Soares",
              "E-mail": "dra.erika_maia@hotmail.com",
              "CPF": "028.176.976-18"
          },
          {
              "Nome": "Érika Milhomem da Silva Mota",
              "E-mail": "erikamsmota@gmail.com",
              "CPF": "033.033.123-03"
          },
          {
              "Nome": "Erika Vivianni Amaral da Cunha",
              "E-mail": "erikaamaralcunha@hotmail.com",
              "CPF": "940.352.106-68"
          },
          {
              "Nome": "Ernesto Bomtempo Neto",
              "E-mail": "ebomtempo@gmail.com",
              "CPF": "577.061.156-15"
          },
          {
              "Nome": "EstefÂnia Barbosa MagalhÃes",
              "E-mail": "tefabm@hotmail.com",
              "CPF": "044.096.546-24"
          },
          {
              "Nome": "Ester Viana Carvalho",
              "E-mail": "estervcarvalho@hotmail.com",
              "CPF": "103.662.906-65"
          },
          {
              "Nome": "Eunapio Antunes de Oliveira",
              "E-mail": "empty@febrasgo.org.br",
              "CPF": "008.842.356-53"
          },
          {
              "Nome": "Eura Martins Lage",
              "E-mail": "euramartinslage@gmail.com",
              "CPF": "808.628.026-87"
          },
          {
              "Nome": "Evelli Aline de Paula Martins",
              "E-mail": "alineevelli1@gmail.com",
              "CPF": "120.496.456-43"
          },
          {
              "Nome": "Evilane do Carmo Patricio Macedo",
              "E-mail": "evilanemacedo@hotmail.com",
              "CPF": "071.363.026-41"
          },
          {
              "Nome": "Fabiene Bernardes Castro Vale",
              "E-mail": "fabienebcv@yahoo.com.br",
              "CPF": "052.505.696-33"
          },
          {
              "Nome": "FÁbio Carneiro CorrÊa",
              "E-mail": "fabiocorrea.mg@gmail.com",
              "CPF": "227.302.066-04"
          },
          {
              "Nome": "Fabio Costa Peixoto",
              "E-mail": "fabiocpeixoto@ufmg.br",
              "CPF": "031.319.006-28"
          },
          {
              "Nome": "Fabrício Alves de Oliveira Campos",
              "E-mail": "fabricio_campos@ymail.com",
              "CPF": "089.462.426-12"
          },
          {
              "Nome": "Fabyola Jorge Cruz",
              "E-mail": "fabyolajorge2023@hotmail.com",
              "CPF": "547.665.671-53"
          },
          {
              "Nome": "Fabyulla Amaral Fernandes",
              "E-mail": "fabyulla.afernandes@gmail.com",
              "CPF": "088.598.856-63"
          },
          {
              "Nome": "Fátima Maria Guerra Zimmermmann Chaves",
              "E-mail": "fatimazimmermmann@gmail.com",
              "CPF": "488.215.356-49"
          },
          {
              "Nome": "Felipe Augusto Fernandes",
              "E-mail": "drfelipeaugusto@yahoo.com.br",
              "CPF": "035.135.406-98"
          },
          {
              "Nome": "Felipe de Oliveira Tinoco",
              "E-mail": "tinocofelipe@hotmail.com",
              "CPF": "089.675.467-77"
          },
          {
              "Nome": "Felipe Sad Salomao Martins",
              "E-mail": "sadfelipe@me.com",
              "CPF": "086.905.736-74"
          },
          {
              "Nome": "Fernanda Alhais Maia Pinto",
              "E-mail": "nandalhais@yahoo.com.br",
              "CPF": "102.038.446-88"
          },
          {
              "Nome": "Fernanda Araujo Avendanha",
              "E-mail": "nandavendanha@gmail.com",
              "CPF": "120.694.436-63"
          },
          {
              "Nome": "Fernanda Campos D'avila",
              "E-mail": "fernandacamposdavila@gmail.com",
              "CPF": "018.100.256-64"
          },
          {
              "Nome": "Fernanda Chaves Capanema Álvares",
              "E-mail": "fechaves04@hotmail.com",
              "CPF": "115.908.896-90"
          },
          {
              "Nome": "Fernanda Cristina da Silva Alves Ribeiro",
              "E-mail": "fcsar2008@gmail.com",
              "CPF": "045.198.866-35"
          },
          {
              "Nome": "Fernanda de Andrade Dias Leite",
              "E-mail": "feandrade85@yahoo.com.br",
              "CPF": "701.470.746-90"
          },
          {
              "Nome": "Fernanda de Catella Marcello",
              "E-mail": "fernandacatella@gmail.com",
              "CPF": "104.163.836-10"
          },
          {
              "Nome": "Fernanda Gandra Costa",
              "E-mail": "nanda.gandra@gmail.com",
              "CPF": "106.690.586-02"
          },
          {
              "Nome": "Fernanda Guimarães de Sousa",
              "E-mail": "fernanda.guimarraes@gmail.com",
              "CPF": "410.440.438-14"
          },
          {
              "Nome": "Fernanda Julliana Freitas Santos",
              "E-mail": "fernandajulliana@icloud.com",
              "CPF": "119.257.676-47"
          },
          {
              "Nome": "Fernanda MagalhÃes Menicucci",
              "E-mail": "ferckferck@hotmail.com",
              "CPF": "056.806.056-35"
          },
          {
              "Nome": "Fernanda Maia Alves",
              "E-mail": "femaiaalves@yahoo.com.br",
              "CPF": "124.260.656-48"
          },
          {
              "Nome": "Fernanda Odete Souza Rodrigues",
              "E-mail": "nandasouzarodrigues@hotmail.com",
              "CPF": "126.395.186-40"
          },
          {
              "Nome": "Fernanda Oliveira Franco Assuncao Rezende",
              "E-mail": "fernandaoliveira.far@gmail.com",
              "CPF": "091.580.846-30"
          },
          {
              "Nome": "Fernanda Oliveira Torres",
              "E-mail": "feotorresmed@gmail.com",
              "CPF": "076.924.796-23"
          },
          {
              "Nome": "Fernanda Polisseni",
              "E-mail": "fernanda.polisseni@clinicanidus.com.br",
              "CPF": "882.952.576-68"
          },
          {
              "Nome": "Fernanda Ribeiro Rodrigues",
              "E-mail": "nandaribeirob@hotmail.com",
              "CPF": "134.996.316-01"
          },
          {
              "Nome": "Fernanda Rocha Gomes",
              "E-mail": "fernanda.gomes@ufvjm.edu.br",
              "CPF": "103.042.326-10"
          },
          {
              "Nome": "Fernanda Rodrigues Martins",
              "E-mail": "frm.rodriguesmartins@gmail.com",
              "CPF": "121.881.326-10"
          },
          {
              "Nome": "Fernanda Valerio Henriques",
              "E-mail": "fihenriques@hotmail.com",
              "CPF": "081.300.206-02"
          },
          {
              "Nome": "Fernanda Vitoriano Castro Costa",
              "E-mail": "fevit@yahoo.com",
              "CPF": "044.217.226-50"
          },
          {
              "Nome": "Fernando Marcos dos Reis",
              "E-mail": "reis.ufmg@gmail.com",
              "CPF": "602.857.106-72"
          },
          {
              "Nome": "Fernando Quintao Hosken Filho",
              "E-mail": "fqhosken@yahoo.com.br",
              "CPF": "259.619.856-87"
          },
          {
              "Nome": "Flavia Caren Andrade Vieira",
              "E-mail": "flaviacaren@gmail.com",
              "CPF": "103.884.656-03"
          },
          {
              "Nome": "Flavia Carvalho Guedes Narciso",
              "E-mail": "flaviaguedesnarciso@yahoo.com.br",
              "CPF": "554.537.916-91"
          },
          {
              "Nome": "Flávia de Souza Bernardes",
              "E-mail": "fsbernardes35@outlook.com",
              "CPF": "130.731.296-93"
          },
          {
              "Nome": "FlÁvia Mafra GuimarÃes E MagalhÃes",
              "E-mail": "flaviamafraguima@gmail.com",
              "CPF": "004.753.656-07"
          },
          {
              "Nome": "FlÁvia Rodrigues Faria Torquato",
              "E-mail": "flaviar.faria@hotmail.com",
              "CPF": "089.175.106-80"
          },
          {
              "Nome": "Flavia Souza Pinheiro",
              "E-mail": "flavia.souzap@yahoo.com.br",
              "CPF": "113.102.666-70"
          },
          {
              "Nome": "Flaviano de Pinho Amaral",
              "E-mail": "flavianopa@yahoo.com.br",
              "CPF": "707.904.936-91"
          },
          {
              "Nome": "Flavio Dutra Miranda",
              "E-mail": "flaviodutramiranda@terra.com.br",
              "CPF": "950.232.166-91"
          },
          {
              "Nome": "FlÁvio Guabiroba Coelho",
              "E-mail": "faguabiroba@gmail.com",
              "CPF": "426.948.506-00"
          },
          {
              "Nome": "FlÁvio Nunes Lins",
              "E-mail": "flavionlins@gmail.com",
              "CPF": "013.230.815-00"
          },
          {
              "Nome": "Flavio Santos Vasconcelos Barros",
              "E-mail": "vascbarros@hotmail.com",
              "CPF": "732.059.746-20"
          },
          {
              "Nome": "Franciane Reis",
              "E-mail": "francianerreis@gmail.com",
              "CPF": "015.229.436-84"
          },
          {
              "Nome": "Francine Cruz Silveira",
              "E-mail": "francinecsilveira@gmail.com",
              "CPF": "888.130.536-49"
          },
          {
              "Nome": "Francisco Lirio Ramos Filho",
              "E-mail": "franciscolirioramos@gmail.com",
              "CPF": "639.225.176-68"
          },
          {
              "Nome": "Francisco Vidal Chicata Olazabal",
              "E-mail": "francisco.chicata@outlook.com",
              "CPF": "356.143.666-87"
          },
          {
              "Nome": "Frederico Jose Amedee Peret",
              "E-mail": "fredperet@gmail.com",
              "CPF": "773.065.706-68"
          },
          {
              "Nome": "Frederico Timm Rodrigues de Sousa",
              "E-mail": "timm.frederico@gmail.com",
              "CPF": "041.001.980-19"
          },
          {
              "Nome": "Gabriel Costa Osanan",
              "E-mail": "osanangc@yahoo.com",
              "CPF": "013.424.536-97"
          },
          {
              "Nome": "Gabriel Felipe Silveira Ferreira",
              "E-mail": "gabrielfelipe464@gmail.com",
              "CPF": "109.159.446-50"
          },
          {
              "Nome": "Gabriel Ferreira Neto",
              "E-mail": "gfneto@uai.com.br",
              "CPF": "644.647.256-00"
          },
          {
              "Nome": "Gabriel Lucas de Oliveira",
              "E-mail": "gabriel.lucasoliveira@upe.br",
              "CPF": "705.139.834-22"
          },
          {
              "Nome": "Gabriel Marotti de Oliveira",
              "E-mail": "dr.gabrielmarotti@gmail.com",
              "CPF": "138.342.797-65"
          },
          {
              "Nome": "Gabriel Martins Cruz Campos",
              "E-mail": "gmartinscampos@hotmail.com",
              "CPF": "125.001.427-10"
          },
          {
              "Nome": "Gabriela Barbara Oliveira Lara",
              "E-mail": "gabriela.olara@hotmail.com",
              "CPF": "110.649.796-10"
          },
          {
              "Nome": "Gabriela Bittencourt Davila",
              "E-mail": "gabbitencourt@hotmail.com",
              "CPF": "860.746.195-81"
          },
          {
              "Nome": "Gabriela Boller Bicalho",
              "E-mail": "bollergabriela@gmail.com",
              "CPF": "111.265.046-61"
          },
          {
              "Nome": "Gabriela Chaves Mendes Justino",
              "E-mail": "gabjustino@hotmail.com",
              "CPF": "057.262.316-00"
          },
          {
              "Nome": "Gabriela Cordeiro Costa",
              "E-mail": "gabrielacordeiro235@gmail.com",
              "CPF": "066.801.686-86"
          },
          {
              "Nome": "Gabriela Costa Oliveira",
              "E-mail": "gabrielacostaoliveira@hotmail.com",
              "CPF": "080.809.426-25"
          },
          {
              "Nome": "Gabriela Davila Moreira",
              "E-mail": "gabrieladavilamoreira@gmail.com",
              "CPF": "129.292.656-20"
          },
          {
              "Nome": "Gabriela Hissa Bastos",
              "E-mail": "gabrielahissab@gmail.com",
              "CPF": "134.876.236-50"
          },
          {
              "Nome": "Gabriela Lima Alencar Souza",
              "E-mail": "gabizinhaalencar@gmail.com",
              "CPF": "045.370.534-02"
          },
          {
              "Nome": "Gabriela Moreira Gundim",
              "E-mail": "gabmgundim@hotmail.com",
              "CPF": "656.646.203-15"
          },
          {
              "Nome": "Gabriela Resende BasÍlio",
              "E-mail": "gabriela.basilio@outlook.com.br",
              "CPF": "109.152.526-94"
          },
          {
              "Nome": "Gabriela Santos Perez",
              "E-mail": "gabisperez@outlook.com",
              "CPF": "144.328.536-62"
          },
          {
              "Nome": "Gabriela Santos Soares",
              "E-mail": "gabissoares2@gmail.com",
              "CPF": "102.121.146-03"
          },
          {
              "Nome": "Gabriela SimÃo Delorenzo",
              "E-mail": "gabisdelorenzo@hotmail.com",
              "CPF": "013.151.246-37"
          },
          {
              "Nome": "Gabriella Pereira Lemes",
              "E-mail": "gabriellaalemess@gmail.com",
              "CPF": "010.287.561-86"
          },
          {
              "Nome": "Gabriella Sant Anna Teles",
              "E-mail": "gabriella.sant.teles@gmail.com",
              "CPF": "034.321.681-79"
          },
          {
              "Nome": "Gabrielle Coimbra Mundim",
              "E-mail": "gabrielle.mundim@aluno.imepac.edu.br",
              "CPF": "113.323.006-77"
          },
          {
              "Nome": "Gabrielle Martins Moreira Valadares",
              "E-mail": "valadaresbi@gmail.com",
              "CPF": "095.950.636-57"
          },
          {
              "Nome": "Gabrielly Pelegrini Domingues",
              "E-mail": "gabriellypelegrini2@gmail.com",
              "CPF": "103.768.206-83"
          },
          {
              "Nome": "Garibalde Mortoza Junior",
              "E-mail": "gmortoza.gmj@gmail.com",
              "CPF": "255.876.846-87"
          },
          {
              "Nome": "Geam Karlo de Assis Santana",
              "E-mail": "geamkarlo@yahoo.com.br",
              "CPF": "940.979.176-68"
          },
          {
              "Nome": "Geovana Cota Avelar",
              "E-mail": "GEOVANA.COTA@GMAIL.COM",
              "CPF": "031.015.966-02"
          },
          {
              "Nome": "Geraldo Antunes Guimaraes",
              "E-mail": "bgiguimaraes@yahoo.com.br",
              "CPF": "221.627.046-68"
          },
          {
              "Nome": "Geraldo Diniz Vieira Mendes",
              "E-mail": "geraldodvmendes@gmail.com",
              "CPF": "858.811.396-15"
          },
          {
              "Nome": "Geraldo Magella Flores Mota",
              "E-mail": "geraldo.mota@gmail.com",
              "CPF": "004.097.416-20"
          },
          {
              "Nome": "Gerson Pereira Lopes",
              "E-mail": "gersonpereiralopes.1@gmail.com",
              "CPF": "235.723.886-00"
          },
          {
              "Nome": "Gil Horta Passos",
              "E-mail": "gilpassos00@hotmail.com",
              "CPF": "103.597.646-30"
          },
          {
              "Nome": "Gilmar Araujo de Carvalho",
              "E-mail": "gilmarcarvalhogob@gmail.com",
              "CPF": "331.758.106-91"
          },
          {
              "Nome": "Gilmara Mikaele Campos",
              "E-mail": "campos.gilmara01@gmail.com",
              "CPF": "131.035.676-93"
          },
          {
              "Nome": "Gilton de Menezes",
              "E-mail": "notlig@yahoo.com.br",
              "CPF": "292.797.396-20"
          },
          {
              "Nome": "Giovana Eustáquio Lacerda",
              "E-mail": "giovanaelacerda@gmail.com",
              "CPF": "030.583.291-30"
          },
          {
              "Nome": "Giovana Rocha Queiroz",
              "E-mail": "giorqueiroz@gmail.com",
              "CPF": "125.771.846-03"
          },
          {
              "Nome": "Giovana Vilela Rocha",
              "E-mail": "gio.vilelar@gmail.com",
              "CPF": "127.057.466-33"
          },
          {
              "Nome": "Giovanna Bruna Barreto da Silva Martins",
              "E-mail": "giovannabrunabsm@gmail.com",
              "CPF": "130.408.386-10"
          },
          {
              "Nome": "Giovanna dos Reis Faria",
              "E-mail": "fariagi18@gmail.com",
              "CPF": "139.148.326-06"
          },
          {
              "Nome": "Giovanna Fortes Carvalho Ribeiro",
              "E-mail": "giovannafortescribeiro@gmail.com",
              "CPF": "120.293.396-36"
          },
          {
              "Nome": "Giovanna Hooper Bittencourt",
              "E-mail": "Giovanna.hooper@gmail.com",
              "CPF": "143.992.606-96"
          },
          {
              "Nome": "Giovanna Leticia Simoes Lima",
              "E-mail": "giovannaleticia1999@hotmail.com",
              "CPF": "139.462.316-08"
          },
          {
              "Nome": "Giovanna Vasconcelos Sousa",
              "E-mail": "giovannavasousa@outlook.com",
              "CPF": "126.532.986-94"
          },
          {
              "Nome": "Gisele Carvalho Rodrigues Valle",
              "E-mail": "giselecrvalle@gmail.com",
              "CPF": "766.685.766-72"
          },
          {
              "Nome": "Gisele Duarte dos Santos",
              "E-mail": "giseleDS1272@GMAIL.COM",
              "CPF": "814.963.706-00"
          },
          {
              "Nome": "Gisele Souza TupinÁ",
              "E-mail": "giseletupina@hotmail.com",
              "CPF": "064.903.846-04"
          },
          {
              "Nome": "Gisele Vissoci Marquini",
              "E-mail": "giselemarquini@gmail.com",
              "CPF": "987.068.376-20"
          },
          {
              "Nome": "Giselle Paulino Eugênio",
              "E-mail": "gipaulino22@gmail.com",
              "CPF": "117.332.536-02"
          },
          {
              "Nome": "Gizeli de Fatima Ribeiro dos Anjos",
              "E-mail": "gizelifanjos@yahoo.com.br",
              "CPF": "652.354.796-53"
          },
          {
              "Nome": "GlÓria Cristina Gomes de Souza Vieira",
              "E-mail": "gcristinavieira@hotmail.com",
              "CPF": "554.830.706-15"
          },
          {
              "Nome": "Gonzalo Cuba Valdez",
              "E-mail": "drgonzalocubavaldez@gmail.com",
              "CPF": "844.164.675-91"
          },
          {
              "Nome": "Graciana Elisa de Souza Grijó",
              "E-mail": "gracianaelisa@hotmail.com",
              "CPF": "033.021.536-19"
          },
          {
              "Nome": "Graziela Cesar de Sousa",
              "E-mail": "grazielacesar25@gmail.com",
              "CPF": "120.503.076-08"
          },
          {
              "Nome": "Gretty Ivane Lima da Silva Aguiar",
              "E-mail": "gretty.aguiar@famed.ufal.br",
              "CPF": "100.150.361-97"
          },
          {
              "Nome": "Guilherme Henrique Ferreira Pereira",
              "E-mail": "drguilhermehenrique@yahoo.com.br",
              "CPF": "045.143.426-96"
          },
          {
              "Nome": "Guilherme Primo Geber",
              "E-mail": "guilhermemgeber@yahoo.com.br",
              "CPF": "080.685.876-16"
          },
          {
              "Nome": "Guilherme Schueler de Aquino",
              "E-mail": "guilhermeaquinogo@gmail.com",
              "CPF": "901.183.087-34"
          },
          {
              "Nome": "Guilherme Silva Teixeira",
              "E-mail": "guilhermetcaob@hotmail.com",
              "CPF": "103.902.846-29"
          },
          {
              "Nome": "Guilhermo Justino Mundim",
              "E-mail": "guijmd@gmail.com",
              "CPF": "999.008.156-53"
          },
          {
              "Nome": "Gustavo Alexandre Cordeiro de Faria",
              "E-mail": "drgustavofaria@yahoo.com.br",
              "CPF": "025.979.216-03"
          },
          {
              "Nome": "Gustavo Alvarenga Rocha",
              "E-mail": "gustavoalvarenga@hotmail.com",
              "CPF": "007.534.946-98"
          },
          {
              "Nome": "Gustavo Eugenio Dias",
              "E-mail": "gustavoedias@hotmail.com",
              "CPF": "886.009.986-20"
          },
          {
              "Nome": "Gustavo Ferreira de Paula",
              "E-mail": "gferreiradepaula@gmail.com",
              "CPF": "870.950.416-87"
          },
          {
              "Nome": "Gustavo Ferreira do Nascimento",
              "E-mail": "gustavojovem@gmail.com",
              "CPF": "014.530.186-97"
          },
          {
              "Nome": "Hadassa Cristina Piedade Inácio",
              "E-mail": "hadassacrist@gmail.com",
              "CPF": "437.425.678-45"
          },
          {
              "Nome": "HÁlisson Pereira Duarte",
              "E-mail": "hp.duarte@uol.com.br",
              "CPF": "031.451.776-64"
          },
          {
              "Nome": "Hana Elisa Vieira",
              "E-mail": "hana_vieira@hotmail.com",
              "CPF": "036.814.091-10"
          },
          {
              "Nome": "Helder Lamin Resende",
              "E-mail": "helderlaminresende@hotmail.com",
              "CPF": "042.736.106-04"
          },
          {
              "Nome": "Helena de Souza Paiva Canabrava",
              "E-mail": "h.canabrava@hotmail.com",
              "CPF": "591.911.046-53"
          },
          {
              "Nome": "Helena Rabelo Castro Meira",
              "E-mail": "helena-rabelo@hotmail.com",
              "CPF": "503.241.606-15"
          },
          {
              "Nome": "Helenice Eliza Marinho",
              "E-mail": "helenicemarinho502@gmail.com",
              "CPF": "617.391.626-68"
          },
          {
              "Nome": "Heleny Ferreira Rangel",
              "E-mail": "heleny.rangel@gmail.com",
              "CPF": "851.311.216-04"
          },
          {
              "Nome": "Heliana Soares Afonso Sala",
              "E-mail": "helisala@yahoo.com.br",
              "CPF": "422.035.038-15"
          },
          {
              "Nome": "Helio da Silva Bastos",
              "E-mail": "liob@sdnet.com.br",
              "CPF": "003.865.106-87"
          },
          {
              "Nome": "Helio Eduardo Borges Diniz",
              "E-mail": "dr.heliodiniz@yahoo.com.br",
              "CPF": "274.418.736-49"
          },
          {
              "Nome": "HÉlio Leal da Rocha",
              "E-mail": "hlrmg@uol.com.br",
              "CPF": "144.032.776-91"
          },
          {
              "Nome": "Hellen Meira Gois",
              "E-mail": "hell.gois@gmail.com",
              "CPF": "044.071.971-29"
          },
          {
              "Nome": "Heloisa Amaral Fulgencio da Cunha",
              "E-mail": "isamaral1@hotmail.com",
              "CPF": "348.749.926-68"
          },
          {
              "Nome": "Heloísa Freitas Fernandes Marques",
              "E-mail": "heloisafreitasf@gmail.com",
              "CPF": "083.466.006-74"
          },
          {
              "Nome": "Heloisa Vieira Cerri",
              "E-mail": "dra.heloisacerri@gmail.com",
              "CPF": "144.059.706-53"
          },
          {
              "Nome": "Heloiza Casali Tessaro",
              "E-mail": "helo.casali@gmail.com",
              "CPF": "071.698.615-93"
          },
          {
              "Nome": "Helton Ribeiro",
              "E-mail": "heltonribeirolavras@gmail.com",
              "CPF": "089.039.056-87"
          },
          {
              "Nome": "Henrick Makssuel Castro Lima",
              "E-mail": "henrickmakssuel@hotmail.com",
              "CPF": "124.855.026-92"
          },
          {
              "Nome": "Henrique Celso Silva",
              "E-mail": "kleinlisboa@yahoo.com.br",
              "CPF": "218.809.136-15"
          },
          {
              "Nome": "Henrique Lima Couto",
              "E-mail": "enriquecouto@hotmail.com",
              "CPF": "030.307.476-03"
          },
          {
              "Nome": "Henrique Moraes Salvador Silva",
              "E-mail": "henrique@materdei.com.br",
              "CPF": "496.200.026-87"
          },
          {
              "Nome": "Henrique Mota Dias Gabriel da Silva",
              "E-mail": "henriquemota1995@gmail.com",
              "CPF": "116.807.306-57"
          },
          {
              "Nome": "Henrique Pitchon Magalhães E Ribeiro",
              "E-mail": "henrique.pitchon@gmail.com",
              "CPF": "113.749.206-65"
          },
          {
              "Nome": "Henrique Trindade Dutra",
              "E-mail": "henriquetdutra@hotmail.com",
              "CPF": "123.304.566-03"
          },
          {
              "Nome": "Henrique Vitor Leite",
              "E-mail": "henriquevleite60@gmail.com",
              "CPF": "678.935.546-49"
          },
          {
              "Nome": "Heraldo Francisco Costa",
              "E-mail": "heraldofcosta@gmail.com",
              "CPF": "712.675.226-15"
          },
          {
              "Nome": "Herbert Francisco Hudson",
              "E-mail": "hf.hudson@uol.com.br",
              "CPF": "002.043.316-68"
          },
          {
              "Nome": "Herly Soares de Freitas",
              "E-mail": "herlysfreitas@hotmail.com",
              "CPF": "194.325.006-59"
          },
          {
              "Nome": "Hiatan Deusnil de Oliveira",
              "E-mail": "hiatandeoliveira@hotmail.com",
              "CPF": "092.911.866-94"
          },
          {
              "Nome": "Hideko Clotilde Takahashi",
              "E-mail": "hidekotk@terra.com.br",
              "CPF": "775.690.756-68"
          },
          {
              "Nome": "Hilton de Almeida Franco",
              "E-mail": "hilton_franco@yahoo.com.br",
              "CPF": "276.805.256-68"
          },
          {
              "Nome": "Homero Caporali de Oliveira",
              "E-mail": "hpeixes@yahoo.com.br",
              "CPF": "597.169.406-53"
          },
          {
              "Nome": "Hugo Alves Araujo",
              "E-mail": "hugo_udi@yahoo.com.br",
              "CPF": "072.334.536-83"
          },
          {
              "Nome": "Hugo Brandão Furlani",
              "E-mail": "hugo.fur@hotmail.com",
              "CPF": "078.233.756-21"
          },
          {
              "Nome": "Hugo Gonçalves Dias",
              "E-mail": "hugonfs99@gmail.com",
              "CPF": "128.013.266-31"
          },
          {
              "Nome": "Iago Teixeira Vital",
              "E-mail": "iteixeiravital@gmail.com",
              "CPF": "134.770.966-57"
          },
          {
              "Nome": "Iara Lima Couy",
              "E-mail": "iaralcouy@yahoo.com.br",
              "CPF": "720.104.366-87"
          },
          {
              "Nome": "Iara Teixeira da Silva",
              "E-mail": "iarinhateixeira@hotmail.com",
              "CPF": "127.877.596-02"
          },
          {
              "Nome": "Ilma Antunes Paiva",
              "E-mail": "ilmaantunes.p@gmail.com",
              "CPF": "110.020.096-77"
          },
          {
              "Nome": "Indyule Lima Matias",
              "E-mail": "indyule@hotmail.com",
              "CPF": "024.686.675-65"
          },
          {
              "Nome": "Inesia Araujo Couto",
              "E-mail": "empty@febrasgo.org.br",
              "CPF": "464.734.916-00"
          },
          {
              "Nome": "Inessa Beraldo de Andrade Bonomi",
              "E-mail": "inessaberaldo@gmail.com",
              "CPF": "030.079.636-64"
          },
          {
              "Nome": "Ingrid Isabel Lucindo Soares Almeida",
              "E-mail": "ingridislalmeida@gmail.com",
              "CPF": "124.816.006-14"
          },
          {
              "Nome": "Ingrid Lourenço",
              "E-mail": "ingridlouren@gmail.com",
              "CPF": "354.342.868-39"
          },
          {
              "Nome": "Ionara Diniz Evangelista Santos Barcelos",
              "E-mail": "ionarabarcelos@hotmail.com",
              "CPF": "045.090.916-64"
          },
          {
              "Nome": "Ione Machado Andre Santiago",
              "E-mail": "ionesantiagodra@gmail.com",
              "CPF": "418.256.326-34"
          },
          {
              "Nome": "Iracema Maria Ribeiro da Fonseca",
              "E-mail": "iracemaribeirodafonseca@gmail.com",
              "CPF": "809.807.406-49"
          },
          {
              "Nome": "Iramil Almada Junior",
              "E-mail": "iramilalmadajunior@gmail.com",
              "CPF": "483.968.776-53"
          },
          {
              "Nome": "Irena Aparecida GonÇalves da Silva",
              "E-mail": "irenagoncalvessilva@gmail.com",
              "CPF": "102.092.606-61"
          },
          {
              "Nome": "Isabel Cristina de Oliveira Bordin",
              "E-mail": "isabelbordinmg@gmail.com",
              "CPF": "788.922.106-10"
          },
          {
              "Nome": "Isabela Abade Granzieri",
              "E-mail": "isabelaagranzieri@gmail.com",
              "CPF": "860.420.235-86"
          },
          {
              "Nome": "Isabela Braga da Silva",
              "E-mail": "isabelabragas04@gmail.com",
              "CPF": "127.431.546-83"
          },
          {
              "Nome": "Isabela Karina Silva Dias",
              "E-mail": "isabela_diias17@hotmail.com",
              "CPF": "131.873.916-05"
          },
          {
              "Nome": "Isabela Maria dos Reis Aguiar",
              "E-mail": "aguiar.bela@hotmail.com",
              "CPF": "080.508.796-66"
          },
          {
              "Nome": "Isabela Maria Lopes da Silva",
              "E-mail": "isabelamufmg@gmail.com",
              "CPF": "115.336.936-25"
          },
          {
              "Nome": "Isabela Nicolai Nassif Diniz",
              "E-mail": "isanicolai@gmail.com",
              "CPF": "111.039.666-00"
          },
          {
              "Nome": "Isabela Safar Paim",
              "E-mail": "bela.paim7@gmail.com",
              "CPF": "128.972.026-61"
          },
          {
              "Nome": "Isabela Sheng Ling Miaw",
              "E-mail": "isheng94@gmail.com",
              "CPF": "089.820.956-08"
          },
          {
              "Nome": "Isabela Teixeira Parma",
              "E-mail": "isabelatparma98@gmail.com",
              "CPF": "121.142.776-58"
          },
          {
              "Nome": "Isabela Yumi Saito Delage",
              "E-mail": "iydelage99@gmail.com",
              "CPF": "049.035.291-00"
          },
          {
              "Nome": "Isabella Abidalla do Carmo",
              "E-mail": "isabellaabidalla@gmail.com",
              "CPF": "063.419.876-92"
          },
          {
              "Nome": "Isabella Barbosa de Oliveira",
              "E-mail": "oisabellab@gmail.com",
              "CPF": "134.829.316-07"
          },
          {
              "Nome": "Isabella Campos Rodrigues Ferreira",
              "E-mail": "isacamposrodrigues@gmail.com",
              "CPF": "115.059.806-90"
          },
          {
              "Nome": "Isabella Lumena Martins Silva",
              "E-mail": "isabellalumena@hotmail.com",
              "CPF": "074.277.476-74"
          },
          {
              "Nome": "Isabella Regina Vilela Andrade D Angelis",
              "E-mail": "isabellavilela3@hotmail.com",
              "CPF": "089.209.676-44"
          },
          {
              "Nome": "Isabella Souza Montanha",
              "E-mail": "isabellamontanha@outlook.com.br",
              "CPF": "109.123.756-55"
          },
          {
              "Nome": "Isabelle Ferreira de Araújo",
              "E-mail": "tcf.isa@gmail.com",
              "CPF": "169.075.397-80"
          },
          {
              "Nome": "Isabelle Perez Ramirez Gonçalves",
              "E-mail": "isabelleprg@hotmail.com",
              "CPF": "122.529.456-80"
          },
          {
              "Nome": "Isabelle Reis Daldegan",
              "E-mail": "daldeganisabelle@gmail.com",
              "CPF": "107.946.876-52"
          },
          {
              "Nome": "Isadora Bevilaqua Fernandes Hosken",
              "E-mail": "hoskenisadora@gmail.com",
              "CPF": "109.664.846-65"
          },
          {
              "Nome": "Isadora Cristina de Carvalho Campos",
              "E-mail": "isadoracampos5@hotmail.com",
              "CPF": "112.592.866-22"
          },
          {
              "Nome": "Isadora de CÁssia Costa",
              "E-mail": "isadorkosta@yahoo.com.br",
              "CPF": "134.917.896-99"
          },
          {
              "Nome": "Isadora Montoaneli Bichara",
              "E-mail": "isadora.mbichara@gmail.com",
              "CPF": "113.575.816-61"
          },
          {
              "Nome": "Isadora Nogueira Assunção",
              "E-mail": "isadora.n.assuncao@gmail.com",
              "CPF": "033.185.275-64"
          },
          {
              "Nome": "Isaura Vargas de Oliveira",
              "E-mail": "isauravo@yahoo.com.br",
              "CPF": "453.521.516-20"
          },
          {
              "Nome": "Ismael Ferreira de Rezende",
              "E-mail": "ismaelrezende@hospitalsantaclara.com.br",
              "CPF": "004.936.436-72"
          },
          {
              "Nome": "Issa Mihessen Neto",
              "E-mail": "nucleodrissamihessen@gmail.com",
              "CPF": "790.249.806-82"
          },
          {
              "Nome": "Ivan Benedito da Silva",
              "E-mail": "ivanbeneditodasilva5046@gmail.com",
              "CPF": "469.768.846-53"
          },
          {
              "Nome": "Ivete de Avila",
              "E-mail": "ivete.avila@gmail.com",
              "CPF": "327.879.956-91"
          },
          {
              "Nome": "Ivonilde Vieira de Castro",
              "E-mail": "ivonildevc@gmail.com",
              "CPF": "526.007.186-72"
          },
          {
              "Nome": "Iwens Moreira de Faria",
              "E-mail": "ultrassom@radioimagemitauna.com.br",
              "CPF": "255.795.846-87"
          },
          {
              "Nome": "Izabela Pereira da Silva",
              "E-mail": "izabela.ipds@hotmail.com",
              "CPF": "113.764.836-88"
          },
          {
              "Nome": "Izabela Vieira Botelho",
              "E-mail": "belabotelho@gmail.com",
              "CPF": "059.979.126-80"
          },
          {
              "Nome": "Izabella Ribas Rocha",
              "E-mail": "izabella.ribasr@gmail.com",
              "CPF": "131.159.176-19"
          },
          {
              "Nome": "Izabelle Martins Silva",
              "E-mail": "izabellems28@gmail.com",
              "CPF": "035.151.471-60"
          },
          {
              "Nome": "Jacqueline Braga Pereira",
              "E-mail": "jackiebraga@yahoo.com.br",
              "CPF": "023.694.656-03"
          },
          {
              "Nome": "Jaisa Santana Teixeira",
              "E-mail": "jaisast@yahoo.com.br",
              "CPF": "016.591.336-37"
          },
          {
              "Nome": "Jane Savoi Silveira",
              "E-mail": "janesavoi@gmail.com",
              "CPF": "851.517.266-68"
          },
          {
              "Nome": "Janice Sette Martino Dolabela Chagas",
              "E-mail": "janicedolabela@gmail.com",
              "CPF": "485.534.256-49"
          },
          {
              "Nome": "Jaqueline Amorim Arantes",
              "E-mail": "jaqueline_arantes1@yahoo.com.br",
              "CPF": "105.140.386-32"
          },
          {
              "Nome": "Jennyfer Pereira Flor",
              "E-mail": "jennyferflor@outlook.com",
              "CPF": "063.417.966-76"
          },
          {
              "Nome": "JÉssica Almeida Horta Duarte",
              "E-mail": "jessica.ahduarte@gmail.com",
              "CPF": "070.770.816-80"
          },
          {
              "Nome": "Jessiele Aparecida de Oliveira",
              "E-mail": "jessieleoliveira10@gmail.com",
              "CPF": "110.349.076-11"
          },
          {
              "Nome": "Jéssyca Letícia Gonçalves",
              "E-mail": "doutorajessycagoncalves@gmail.com",
              "CPF": "106.947.756-73"
          },
          {
              "Nome": "Joana Carolina de Resende Paula",
              "E-mail": "ju.resendepaula@gmail.com",
              "CPF": "082.489.676-97"
          },
          {
              "Nome": "Joana Sara Fonseca Dumont",
              "E-mail": "joanadumont@terra.com.br",
              "CPF": "049.701.856-03"
          },
          {
              "Nome": "JoÃo Batista Marinho de Castro Lima",
              "E-mail": "jbmclima@uol.com.br",
              "CPF": "314.578.196-00"
          },
          {
              "Nome": "Joao Henrique dos Santos Silva",
              "E-mail": "joaohenriquemed91@gmail.com",
              "CPF": "605.039.273-09"
          },
          {
              "Nome": "JoÃo Paulo Volpi de Vito",
              "E-mail": "joaopaulo.volpi@yahoo.com.br",
              "CPF": "013.331.896-64"
          },
          {
              "Nome": "JoÃo Pedro Junqueira Caetano",
              "E-mail": "joaopedro@procriar.com.br",
              "CPF": "475.636.486-15"
          },
          {
              "Nome": "JoÃo Tadeu Leite dos Reis",
              "E-mail": "joaotadeu12@gmail.com",
              "CPF": "426.543.356-15"
          },
          {
              "Nome": "Joaquim Dias do Nascimento Filho",
              "E-mail": "docdias31@yahoo.com.br",
              "CPF": "000.871.816-49"
          },
          {
              "Nome": "Joelma Alves",
              "E-mail": "a-joelm@hotmail.com",
              "CPF": "623.166.136-91"
          },
          {
              "Nome": "Joice Guedes Caldeira",
              "E-mail": "joice-gc@hotmail.com",
              "CPF": "059.527.326-23"
          },
          {
              "Nome": "Jordana Figueiredo Amim",
              "E-mail": "jordanamim@hotmail.com",
              "CPF": "067.239.496-09"
          },
          {
              "Nome": "Jordana Mol Teixeira Vieira",
              "E-mail": "jordanamol@gmail.com",
              "CPF": "090.343.356-74"
          },
          {
              "Nome": "Jose Antonio Corigliano",
              "E-mail": "jacorigliano@hotmail.com",
              "CPF": "617.381.408-06"
          },
          {
              "Nome": "JosÉ Antonio Roza JÚnior",
              "E-mail": "drjuniorroza@gmail.com",
              "CPF": "819.796.816-00"
          },
          {
              "Nome": "Jose Avilmar Lino da Silva",
              "E-mail": "javilmarlino@gmail.com",
              "CPF": "528.127.236-53"
          },
          {
              "Nome": "Jose Carlos Amin de Oliveira",
              "E-mail": "jcarlosamin@bol.com.br",
              "CPF": "443.757.786-87"
          },
          {
              "Nome": "Jose Carlos Pimenta",
              "E-mail": "empty@febrasgo.org.br",
              "CPF": "008.349.986-53"
          },
          {
              "Nome": "Jose Cateb Junior",
              "E-mail": "jcatebjr@gmail.com",
              "CPF": "087.105.706-91"
          },
          {
              "Nome": "Jose Costa de Araujo",
              "E-mail": "drjosearaujo@yahoo.com.br",
              "CPF": "105.752.356-91"
          },
          {
              "Nome": "Jose Francisco Jorge Ribeiro Mendes",
              "E-mail": "mendes88x@gmail.com",
              "CPF": "333.970.236-53"
          },
          {
              "Nome": "JosÉ HilÁrio Alves Borges",
              "E-mail": "jhaborges@yahoo.com.br",
              "CPF": "511.183.786-87"
          },
          {
              "Nome": "JosÉ Leir Paraizo",
              "E-mail": "leir@p2i.com.br",
              "CPF": "237.264.406-82"
          },
          {
              "Nome": "Jose Marcelo Vaz de Melo",
              "E-mail": "drjosemvmelo@ig.com.br",
              "CPF": "070.750.226-87"
          },
          {
              "Nome": "Jose Mauricio Faleiro",
              "E-mail": "clinicacliego@hotmail.com",
              "CPF": "112.613.076-15"
          },
          {
              "Nome": "Jose Maury do Carmo Monteiro",
              "E-mail": "monteiromaury@uol.com.br",
              "CPF": "516.537.536-68"
          },
          {
              "Nome": "JosÉ Thadeu Stecca",
              "E-mail": "drthadeu@hotmail.com",
              "CPF": "286.190.566-20"
          },
          {
              "Nome": "José Victor Afonso Freire",
              "E-mail": "jvaf.freire@gmail.com",
              "CPF": "119.541.296-70"
          },
          {
              "Nome": "JosÉ Wilian dos Santos",
              "E-mail": "wiliansantoro62@gmail.com",
              "CPF": "038.987.728-02"
          },
          {
              "Nome": "Joseane Soares",
              "E-mail": "drajoseanesoares@gmail.com",
              "CPF": "674.641.656-91"
          },
          {
              "Nome": "Josiane Clara Fonseca Bastos Maciel",
              "E-mail": "josiane_cfb@yahoo.com.br",
              "CPF": "068.788.136-62"
          },
          {
              "Nome": "Jossielly Rodrigues Pinheiro",
              "E-mail": "jossypinheiro@hotmail.com",
              "CPF": "135.008.546-48"
          },
          {
              "Nome": "Josue Gonzaga",
              "E-mail": "gonzagajosue@hotmail.com",
              "CPF": "570.446.516-15"
          },
          {
              "Nome": "Joyce Peixoto dos Santos Rinoldi",
              "E-mail": "drajoycepsantos@gmail.com",
              "CPF": "095.267.986-86"
          },
          {
              "Nome": "Julia Adriane Fonseca Lobo",
              "E-mail": "juliaafonsecalobo@gmail.com",
              "CPF": "115.364.936-51"
          },
          {
              "Nome": "Júlia Arantes Oliveira",
              "E-mail": "arantesju95@gmail.com",
              "CPF": "129.127.756-04"
          },
          {
              "Nome": "Júlia Azevedo de Almeida",
              "E-mail": "juzevedo1602@hotmail.com",
              "CPF": "134.770.466-33"
          },
          {
              "Nome": "Julia Barbosa de Melo Gomes",
              "E-mail": "barbosademelojulia@gmail.com",
              "CPF": "090.232.276-11"
          },
          {
              "Nome": "Júlia Fernanda Amorim Silva",
              "E-mail": "juh-amorim@live.com",
              "CPF": "134.997.526-54"
          },
          {
              "Nome": "Julia Figueiredo Felix Lara",
              "E-mail": "juliafflara@hotmail.com",
              "CPF": "080.503.946-54"
          },
          {
              "Nome": "Júlia Helena Carvalho de Lima",
              "E-mail": "juliahclima@gmail.com",
              "CPF": "015.065.246-13"
          },
          {
              "Nome": "Julia Maria Alvarenga Ribeiro",
              "E-mail": "juliamaria96@gmail.com",
              "CPF": "116.577.286-84"
          },
          {
              "Nome": "JÚlia Marques Vieira",
              "E-mail": "juliamarquesvieira@hotmail.com",
              "CPF": "114.005.566-60"
          },
          {
              "Nome": "Júlia Mayra de Andrade E Souza",
              "E-mail": "juliasouza28@gmail.com",
              "CPF": "124.264.416-40"
          },
          {
              "Nome": "Júlia Mileib de Carvalho",
              "E-mail": "juliamileib@gmail.com",
              "CPF": "019.620.326-04"
          },
          {
              "Nome": "Júlia Nunes Soares",
              "E-mail": "s.julianunes@gmail.com",
              "CPF": "121.584.576-60"
          },
          {
              "Nome": "Julia Oliveira Martins",
              "E-mail": "juliamartins.97@hotmail.com",
              "CPF": "087.858.916-30"
          },
          {
              "Nome": "Júlia Rodrigues Figueiredo Silva",
              "E-mail": "juliafigueiredo6199@gmail.com",
              "CPF": "098.283.256-75"
          },
          {
              "Nome": "Júlia Vasconcellos Castro",
              "E-mail": "juliavasconcell@hotmail.com",
              "CPF": "128.036.196-44"
          },
          {
              "Nome": "Juliana Augusta Dias",
              "E-mail": "jadbh@hotmail.com",
              "CPF": "028.744.006-02"
          },
          {
              "Nome": "Juliana Coutinho Calcagno",
              "E-mail": "julianacalcagno@yahoo.com",
              "CPF": "035.207.976-23"
          },
          {
              "Nome": "Juliana Cristina de Lima Pereira",
              "E-mail": "ju_clp@hotmail.com",
              "CPF": "109.552.906-43"
          },
          {
              "Nome": "Juliana de Oliveira Loura",
              "E-mail": "ju.ju.loura@hotmail.com",
              "CPF": "120.544.236-70"
          },
          {
              "Nome": "Juliana do Carmo Kettelhut",
              "E-mail": "jukett@hotmail.com",
              "CPF": "302.662.268-09"
          },
          {
              "Nome": "Juliana Eugenio de Souza",
              "E-mail": "ju_eugenio@yahoo.com.br",
              "CPF": "059.890.916-80"
          },
          {
              "Nome": "Juliana Luísa Lage Quintão",
              "E-mail": "juliana.quintao.111@hotmail.com",
              "CPF": "110.990.196-80"
          },
          {
              "Nome": "Juliana Mattoso Campanha",
              "E-mail": "julianamattoso@bol.com.br",
              "CPF": "731.975.996-91"
          },
          {
              "Nome": "Juliana MoysÉs Leite Abdalla",
              "E-mail": "juliana.mbl@gmail.com",
              "CPF": "040.169.186-18"
          },
          {
              "Nome": "Juliana Pinto Coelho",
              "E-mail": "pintocoelho@uol.com.br",
              "CPF": "910.161.186-00"
          },
          {
              "Nome": "Juliana Silva Barra",
              "E-mail": "jusilvabarra@gmail.com",
              "CPF": "901.529.056-34"
          },
          {
              "Nome": "Julio Dias Valadares",
              "E-mail": "juri8@uol.com.br",
              "CPF": "658.223.826-49"
          },
          {
              "Nome": "Júllia de Castro Bolina Filgueiras",
              "E-mail": "julliacastro@outlook.com",
              "CPF": "101.761.746-56"
          },
          {
              "Nome": "Junia Franco de Oliveira Neves",
              "E-mail": "nevesjfo@gmail.com",
              "CPF": "964.085.886-20"
          },
          {
              "Nome": "Juscelino Euler Oliveira",
              "E-mail": "juscelino_oliveira@hotmail.com",
              "CPF": "784.603.366-20"
          },
          {
              "Nome": "Jussara de Souza Mayrink",
              "E-mail": "jussaramayrink@gmail.com",
              "CPF": "053.980.126-73"
          },
          {
              "Nome": "Kamila Ketlen Rodrigues de Oliveira",
              "E-mail": "kamilaketlen01@gmail.com",
              "CPF": "127.999.326-06"
          },
          {
              "Nome": "Karen de Sá Schettino",
              "E-mail": "karensa_schettino@hotmail.com",
              "CPF": "101.162.676-40"
          },
          {
              "Nome": "Karenn Tavares Kiepper",
              "E-mail": "karenntavareskiepper@gmail.com",
              "CPF": "107.752.746-23"
          },
          {
              "Nome": "Karina Aparecida de Melo Farinazzo",
              "E-mail": "karinafarinazzo@yahoo.com.br",
              "CPF": "855.899.776-49"
          },
          {
              "Nome": "Karina Ferrari de Queiroz",
              "E-mail": "KARINAFERRARI2008@GMAIL.COM",
              "CPF": "060.010.861-92"
          },
          {
              "Nome": "Karina Moreira Lana Faria",
              "E-mail": "karinalana@yahoo.com.br",
              "CPF": "038.315.976-85"
          },
          {
              "Nome": "Karine Mendonça Davi Rodrigues",
              "E-mail": "karinedavi@hotmail.com",
              "CPF": "081.227.676-05"
          },
          {
              "Nome": "Karla Andrea Aguilar de Paula",
              "E-mail": "karla_andrea_aguilar@yahoo.com.br",
              "CPF": "028.951.316-27"
          },
          {
              "Nome": "Karoline Fernandes",
              "E-mail": "drakarolinefernandes@gmail.com",
              "CPF": "087.543.106-28"
          },
          {
              "Nome": "KÁtia Aparecida da Silva",
              "E-mail": "katia.silva@msn.com",
              "CPF": "027.319.096-25"
          },
          {
              "Nome": "KÁtia Cilene Moreira",
              "E-mail": "katiacilenebh@yahoo.com.br",
              "CPF": "036.134.116-44"
          },
          {
              "Nome": "Katia Maria de Lima Rezende Boa Vida",
              "E-mail": "katiaboavida@hotmail.com",
              "CPF": "432.243.856-34"
          },
          {
              "Nome": "Katia Pires Vaz Brandao Teixeira",
              "E-mail": "katiapvaz@hotmail.com",
              "CPF": "385.732.456-20"
          },
          {
              "Nome": "Kelly Cordeiro Silva",
              "E-mail": "kellycordeiro08@gmail.com",
              "CPF": "114.348.496-78"
          },
          {
              "Nome": "Kelly Viviane Gomes Marques Loureiro",
              "E-mail": "kellyvivianegm@yahoo.com.br",
              "CPF": "080.949.496-51"
          },
          {
              "Nome": "Késia de Souza Ruela",
              "E-mail": "kesiasruela@hotmail.com",
              "CPF": "067.300.956-44"
          },
          {
              "Nome": "Laís Almeida Castro",
              "E-mail": "laisalmeida.castro@hotmail.com",
              "CPF": "192.364.237-52"
          },
          {
              "Nome": "Lais Coimbra Cremasco Tavares",
              "E-mail": "lais_coimbra@hotmail.com",
              "CPF": "092.174.416-19"
          },
          {
              "Nome": "Lais Jube Sanches Zanzoni",
              "E-mail": "laisjube@hotmail.com",
              "CPF": "043.026.861-03"
          },
          {
              "Nome": "Lais Loureiro Ticle",
              "E-mail": "laisticle@gmail.com",
              "CPF": "082.685.106-17"
          },
          {
              "Nome": "Lais Maria Peixoto Vieira",
              "E-mail": "lais.mpv@gmail.com",
              "CPF": "108.245.476-16"
          },
          {
              "Nome": "Lais Milena Barros",
              "E-mail": "laisbarros9@hotmail.com",
              "CPF": "083.026.876-69"
          },
          {
              "Nome": "Laissa Nascimento Bernardes Souza",
              "E-mail": "laissanascimento17@gmail.com",
              "CPF": "094.857.536-08"
          },
          {
              "Nome": "Lana Auxiliadora Pereira da Cruz",
              "E-mail": "lanauxiliadora@gmail.com",
              "CPF": "039.347.196-94"
          },
          {
              "Nome": "Lara Azevedo Prais Caldeira Brant",
              "E-mail": "larapcbrant@gmail.com",
              "CPF": "112.709.646-07"
          },
          {
              "Nome": "Lara Baldanza Mattos Alves",
              "E-mail": "larabaldanza@hotmail.com",
              "CPF": "133.188.326-18"
          },
          {
              "Nome": "Lara Marzano Silva",
              "E-mail": "lamarzano@gmail.com",
              "CPF": "081.801.886-04"
          },
          {
              "Nome": "Lara Maximiano Rodrigues",
              "E-mail": "laramaximiano.rodrigues@gmail.com",
              "CPF": "126.980.976-80"
          },
          {
              "Nome": "Lara Reggiani Nepomuceno",
              "E-mail": "reggianilara@gmail.com",
              "CPF": "022.251.916-97"
          },
          {
              "Nome": "Lara Rodrigues Felix",
              "E-mail": "lararodriguesfelix@yahoo.com.br",
              "CPF": "073.144.076-57"
          },
          {
              "Nome": "Lara Souto Pamfílio Ribeiro Lima",
              "E-mail": "lara.pamfilio@hotmail.com",
              "CPF": "116.180.906-66"
          },
          {
              "Nome": "Lara Stefany Dantas Couto",
              "E-mail": "larastefany96@gmail.com",
              "CPF": "044.562.145-11"
          },
          {
              "Nome": "Larissa Braga Costa",
              "E-mail": "dralarissabragacosta@gmail.com",
              "CPF": "123.402.506-09"
          },
          {
              "Nome": "Larissa Cândida de Sousa Diniz",
              "E-mail": "lalacandidasousad@gmail.com",
              "CPF": "087.742.416-05"
          },
          {
              "Nome": "Larissa Couto Castro",
              "E-mail": "ccoutolarissa@outlook.com.br",
              "CPF": "106.541.076-02"
          },
          {
              "Nome": "Larissa Cristina Ferreira",
              "E-mail": "larissa_cferreira@outlook.com",
              "CPF": "125.308.586-24"
          },
          {
              "Nome": "Larissa de Souza Cuco Sanches",
              "E-mail": "larissacucob@gmail.com",
              "CPF": "163.296.937-81"
          },
          {
              "Nome": "Larissa Evelyn Corrêa",
              "E-mail": "larissacorreae@gmail.com",
              "CPF": "124.473.876-01"
          },
          {
              "Nome": "Larissa Fonseca Belém",
              "E-mail": "dralarissafonsecabelem@gmail.com",
              "CPF": "134.791.146-44"
          },
          {
              "Nome": "Larissa Grintaci Pereira Costa",
              "E-mail": "lari.grintaci@hotmail.com",
              "CPF": "376.431.998-41"
          },
          {
              "Nome": "Larissa Krieck Marques",
              "E-mail": "larissakrieck@hotmail.com",
              "CPF": "111.099.706-09"
          },
          {
              "Nome": "Larissa Luana de Freitas Moraes",
              "E-mail": "larissafmoraes@gmail.com",
              "CPF": "105.109.426-79"
          },
          {
              "Nome": "Larissa Milani Coutinho",
              "E-mail": "larissamcoutinho@yahoo.com.br",
              "CPF": "072.674.986-98"
          },
          {
              "Nome": "Larissa Morais Souza",
              "E-mail": "larissamsouzabr@hotmail.com",
              "CPF": "121.123.826-16"
          },
          {
              "Nome": "Larissa Oliveira de Aquino",
              "E-mail": "larissaoliveiraquino@gmail.com",
              "CPF": "064.385.546-77"
          },
          {
              "Nome": "Larissa Paola Ferreira Figueiredo",
              "E-mail": "larifp.ferreira@gmail.com",
              "CPF": "125.191.166-84"
          },
          {
              "Nome": "Larissa Proença Cotrim dos Santos",
              "E-mail": "larissaproencacs@gmail.com",
              "CPF": "125.151.346-88"
          },
          {
              "Nome": "Larissa Silva TristÃo GonÇalves",
              "E-mail": "laari_st@hotmail.com",
              "CPF": "100.059.406-80"
          },
          {
              "Nome": "Larissa Siqueira Campos",
              "E-mail": "larissa.scampos@hotmail.com",
              "CPF": "130.984.156-06"
          },
          {
              "Nome": "Larissa Stangherlin Alvim Carvalho",
              "E-mail": "larissa.stangherlin4@gmail.com",
              "CPF": "118.947.156-67"
          },
          {
              "Nome": "Larissa Veloso Hilarino",
              "E-mail": "larissavhilarino@gmail.com",
              "CPF": "101.882.986-57"
          },
          {
              "Nome": "Larissa Volpini Barreto Borém",
              "E-mail": "laravolpini@gmail.com",
              "CPF": "091.767.896-67"
          },
          {
              "Nome": "Laudislena Colodetti",
              "E-mail": "laudislena@gmail.com",
              "CPF": "878.328.606-34"
          },
          {
              "Nome": "Laura Barroso Chiari",
              "E-mail": "laurabchiari@gmail.com",
              "CPF": "114.531.216-09"
          },
          {
              "Nome": "Laura Beatriz de Carvalho Oliveira",
              "E-mail": "laub.oliveira13@gmail.com",
              "CPF": "454.426.348-40"
          },
          {
              "Nome": "Laura Cristine Tavares Pimenta dos Santos",
              "E-mail": "laurapimenta_med@hotmail.com",
              "CPF": "062.863.506-08"
          },
          {
              "Nome": "Laura de Lima Carvalho",
              "E-mail": "lauralc_14@hotmail.com",
              "CPF": "108.578.076-76"
          },
          {
              "Nome": "Laura Eneida Santos",
              "E-mail": "lauraeneida_02@hotmail.com",
              "CPF": "113.375.266-73"
          },
          {
              "Nome": "Laura Esther de Sousa Amorim",
              "E-mail": "esther-amorim@hotmail.com",
              "CPF": "099.676.266-31"
          },
          {
              "Nome": "Laura Lustosa Soares",
              "E-mail": "lauralustosa_@hotmail.com",
              "CPF": "130.691.146-01"
          },
          {
              "Nome": "Laura Maria Almeida Maia",
              "E-mail": "lma.maia@yahoo.com.br",
              "CPF": "012.337.726-94"
          },
          {
              "Nome": "Laura Maria Dias Benfica",
              "E-mail": "eulaurabenfica@gmail.com",
              "CPF": "020.376.276-29"
          },
          {
              "Nome": "Laura Melo Werneck de Toledo",
              "E-mail": "laurawerneck98@gmail.com",
              "CPF": "123.486.176-33"
          },
          {
              "Nome": "Laura Pereira de Carvalho Ferraz",
              "E-mail": "Laura.ferrazmed@gmail.com",
              "CPF": "106.416.126-05"
          },
          {
              "Nome": "Laura Selga da Silva Gomes",
              "E-mail": "lauraselga@gmail.com",
              "CPF": "167.887.917-75"
          },
          {
              "Nome": "Laynara Morais Matins da Silva",
              "E-mail": "laynaramorais21@gmail.com",
              "CPF": "102.169.056-21"
          },
          {
              "Nome": "Layra Christine Almeida Amarante",
              "E-mail": "layra.amarante@yahoo.com.br",
              "CPF": "103.327.126-80"
          },
          {
              "Nome": "Leandro Nogueira Freitas",
              "E-mail": "lenfreitas@yahoo.com.br",
              "CPF": "041.548.186-43"
          },
          {
              "Nome": "Leci Veiga Caetano Amorim",
              "E-mail": "leci.amorim@procriar.com.br",
              "CPF": "067.782.036-41"
          },
          {
              "Nome": "Lecio Jose de Carvalho",
              "E-mail": "leciojcarvalho@gmail.com",
              "CPF": "444.744.156-04"
          },
          {
              "Nome": "Leiko Martins Alves",
              "E-mail": "leikomartins@hotmail.com",
              "CPF": "098.212.676-02"
          },
          {
              "Nome": "Leila Ferreira de Pinho",
              "E-mail": "leilafpinho@gmail.com",
              "CPF": "086.449.916-71"
          },
          {
              "Nome": "LÉlia Moreira Toledo",
              "E-mail": "leliamoreiratoledo@yahoo.com.br",
              "CPF": "509.694.636-34"
          },
          {
              "Nome": "Leonardo da Silva Casarotti",
              "E-mail": "leocasarotti@gmail.com",
              "CPF": "024.189.096-97"
          },
          {
              "Nome": "Leonardo Pandolfi Caliman",
              "E-mail": "leocalpan82@gmail.com",
              "CPF": "053.777.877-22"
          },
          {
              "Nome": "LetÍcia Afonso Pereira Calil",
              "E-mail": "leticiacalilgv@msn.com",
              "CPF": "062.496.386-10"
          },
          {
              "Nome": "Letícia Alves Mendonça",
              "E-mail": "leticia.alves.08@hotmail.com",
              "CPF": "103.375.616-48"
          },
          {
              "Nome": "Letícia de Castro Nascimento",
              "E-mail": "Lele_castron@hotmail.com",
              "CPF": "142.845.356-33"
          },
          {
              "Nome": "Letícia Fernandes de Sousa",
              "E-mail": "leticiafernandesdes@gmail.com",
              "CPF": "051.960.051-70"
          },
          {
              "Nome": "Letícia Henriques Neto Salgado",
              "E-mail": "leticiahns@hotmail.com",
              "CPF": "126.245.246-57"
          },
          {
              "Nome": "Leticia Moreira Pessini",
              "E-mail": "lelepessini@hotmail.com",
              "CPF": "132.366.847-04"
          },
          {
              "Nome": "Letícia Pereira Mendonça",
              "E-mail": "leticiapmendonca@outlook.com",
              "CPF": "080.089.446-41"
          },
          {
              "Nome": "Letícia Perpétuo Alves",
              "E-mail": "dra.leticiaperpetuo@gmail.com",
              "CPF": "091.664.206-28"
          },
          {
              "Nome": "Letícia Salles Fialho Menta",
              "E-mail": "lelementa@hotmail.com",
              "CPF": "123.741.286-28"
          },
          {
              "Nome": "LetÍcia Sanchez Ferreira",
              "E-mail": "lleticiasanchezf@gmail.com",
              "CPF": "089.587.016-92"
          },
          {
              "Nome": "Letícia Santiago Oliveira",
              "E-mail": "leticiasantoliv@gmail.com",
              "CPF": "141.562.316-31"
          },
          {
              "Nome": "Leyla Cabral Pipa",
              "E-mail": "leylapipa@gmail.com",
              "CPF": "529.981.006-78"
          },
          {
              "Nome": "Lia Vieira Boufleur Drumond",
              "E-mail": "clinica_sante@yahoo.com.br",
              "CPF": "395.761.166-00"
          },
          {
              "Nome": "Libério Mendonça Gomes",
              "E-mail": "Liberiogomesufsj@hotmail.com",
              "CPF": "086.981.486-97"
          },
          {
              "Nome": "Lídia Togneri Profilo Krüger",
              "E-mail": "lidiatog1@gmail.com",
              "CPF": "149.426.067-05"
          },
          {
              "Nome": "Lidinei Jose Alves",
              "E-mail": "ljamed@hotmail.com",
              "CPF": "055.217.356-82"
          },
          {
              "Nome": "Lígia Carvalho Barbosa",
              "E-mail": "ligiacb@outlook.com",
              "CPF": "108.673.216-28"
          },
          {
              "Nome": "Lilian de Oliveira",
              "E-mail": "medlilian@icloud.com.br",
              "CPF": "014.034.116-11"
          },
          {
              "Nome": "Liliana Zaccarelli Del Fraro Mota",
              "E-mail": "izmota@uol.com.br",
              "CPF": "317.585.096-00"
          },
          {
              "Nome": "Lina Maria de Menezes Neves",
              "E-mail": "linamariamn@yahoo.com.br",
              "CPF": "439.011.316-04"
          },
          {
              "Nome": "Lina Noor Constantin E Coutinho Vargas",
              "E-mail": "linanoorcmed@gmail.com",
              "CPF": "071.441.886-23"
          },
          {
              "Nome": "Lincoln Assuncao",
              "E-mail": "linc.marc@hotmail.com",
              "CPF": "703.648.696-15"
          },
          {
              "Nome": "Lindolfo Henrique Strappa Martins",
              "E-mail": "martinslindolfo@yahoo.com.br",
              "CPF": "314.665.166-15"
          },
          {
              "Nome": "Liv Braga de Paula",
              "E-mail": "livbraga@yahoo.com.br",
              "CPF": "036.136.996-48"
          },
          {
              "Nome": "Lívia Araújo Soares Prado",
              "E-mail": "liviaasprado@gmail.com",
              "CPF": "019.367.266-96"
          },
          {
              "Nome": "Lívia Caroline Cambuí Santos",
              "E-mail": "liviacambuy@hotmail.com",
              "CPF": "097.458.336-73"
          },
          {
              "Nome": "LÍvia Drumond Akl",
              "E-mail": "ldakl2@yahoo.com.br",
              "CPF": "044.237.576-05"
          },
          {
              "Nome": "Livia Lopes Barreiros",
              "E-mail": "livialopesbarreiros@yahoo.com.br",
              "CPF": "062.919.366-58"
          },
          {
              "Nome": "Lívia Morais Amaral",
              "E-mail": "liviamamaral@yahoo.com.br",
              "CPF": "099.704.226-50"
          },
          {
              "Nome": "Livia Muzzi Diniz Brito",
              "E-mail": "liviamuzzi@gmail.com",
              "CPF": "069.492.716-38"
          },
          {
              "Nome": "Livia Salvador Geo",
              "E-mail": "liviasalvadorgeo@gmail.com",
              "CPF": "074.551.026-40"
          },
          {
              "Nome": "Lizandra Maris Borges Oliveira",
              "E-mail": "lizandrambo@hotmail.com",
              "CPF": "060.149.486-51"
          },
          {
              "Nome": "Lohane Lourenço Rodrigues",
              "E-mail": "lohanelrodrigs@gmail.com",
              "CPF": "124.225.976-70"
          },
          {
              "Nome": "Lorena de Moraes Oliveira",
              "E-mail": "lorenamoliveira@gmail.com",
              "CPF": "100.819.856-06"
          },
          {
              "Nome": "Luana Fonseca de Almeida Messias",
              "E-mail": "luana.fonseca.almeida@gmail.com",
              "CPF": "116.853.176-42"
          },
          {
              "Nome": "Luana Gonçalves de Souza",
              "E-mail": "luanagdsouza@gmail.com",
              "CPF": "101.165.126-28"
          },
          {
              "Nome": "Luana Machado Chianca",
              "E-mail": "luchianca@hotmail.com",
              "CPF": "077.432.766-94"
          },
          {
              "Nome": "Luca Braga de Santana",
              "E-mail": "lucabsantana8@gmail.com",
              "CPF": "035.321.761-14"
          },
          {
              "Nome": "Lucas Barbosa da Silva",
              "E-mail": "lucasgineco@yahoo.com.br",
              "CPF": "872.548.676-49"
          },
          {
              "Nome": "Lucas Giarolla Goncalves de Matos",
              "E-mail": "lucasgiarolla@yahoo.com.br",
              "CPF": "050.403.906-70"
          },
          {
              "Nome": "Lucas Oliveira E Souza",
              "E-mail": "lucasosouza1722@gmail.com",
              "CPF": "115.649.666-74"
          },
          {
              "Nome": "Lucas Rodrigues Miranda",
              "E-mail": "lucas.rmiranda99@gmail.com",
              "CPF": "049.624.231-85"
          },
          {
              "Nome": "Lucas Vasconcelos Almeida",
              "E-mail": "lucas08vas@gmail.com",
              "CPF": "120.511.456-44"
          },
          {
              "Nome": "Lucas Vianna Machado",
              "E-mail": "lucas@lucasmachado.com.br",
              "CPF": "001.311.136-15"
          },
          {
              "Nome": "Lucia Helena Sant Ana Haikal",
              "E-mail": "luciahaikal@yahoo.com.br",
              "CPF": "514.548.239-68"
          },
          {
              "Nome": "Lucia Rocha Barbalho",
              "E-mail": "luciarbarbalho@hotmail.com",
              "CPF": "335.204.706-59"
          },
          {
              "Nome": "Luciana Carvalho Martins",
              "E-mail": "lucianacmartins@hotmail.com",
              "CPF": "032.288.056-46"
          },
          {
              "Nome": "Luciana Fonseca de Moura",
              "E-mail": "lucianafmoura2004@gmail.com",
              "CPF": "044.238.486-60"
          },
          {
              "Nome": "Luciana Rezende Pais",
              "E-mail": "paisluciana@yahoo.com.br",
              "CPF": "057.453.556-03"
          },
          {
              "Nome": "Luciana Vieira Martins",
              "E-mail": "luvmartins@yahoo.com.br",
              "CPF": "097.748.396-76"
          },
          {
              "Nome": "Luciana Vilela Viotti",
              "E-mail": "lu_viotti@yahoo.com.br",
              "CPF": "046.940.726-33"
          },
          {
              "Nome": "Luciana Ximenes Bonani Alvim Brito",
              "E-mail": "ximenes_luciana@hotmail.com",
              "CPF": "082.838.727-37"
          },
          {
              "Nome": "Luciana Zanforlin Martins",
              "E-mail": "lzanforlin73@yahoo.com.br",
              "CPF": "001.178.736-83"
          },
          {
              "Nome": "Luciano da Silva Teixeira",
              "E-mail": "administrativo@clinicaeccos.com.br",
              "CPF": "372.403.156-49"
          },
          {
              "Nome": "Luciano Fernandes Loures",
              "E-mail": "lfernandesloures@yahoo.com.br",
              "CPF": "058.355.086-03"
          },
          {
              "Nome": "Luciano Vial Faria",
              "E-mail": "lut@redecitel.com.br",
              "CPF": "853.765.237-72"
          },
          {
              "Nome": "Luciene Gomes Lucas",
              "E-mail": "luciene_lucas@hotmail.com",
              "CPF": "675.726.776-49"
          },
          {
              "Nome": "Lucio Marcio Perri de Resende",
              "E-mail": "luciomperri@gmail.com",
              "CPF": "807.065.336-15"
          },
          {
              "Nome": "Ludimila Gomes Lopes",
              "E-mail": "ludilopes@yahoo.com.br",
              "CPF": "062.857.496-71"
          },
          {
              "Nome": "Ludmilla Coutinho Markowicz",
              "E-mail": "Ludmilla.markowicz@gmail.com",
              "CPF": "012.178.506-86"
          },
          {
              "Nome": "Ludmilla Roberta de Lima",
              "E-mail": "ludmillarl99@gmail.com",
              "CPF": "142.106.556-86"
          },
          {
              "Nome": "Luis Claudio Coelho Correa",
              "E-mail": "26luisclaudio@gmail.com",
              "CPF": "745.702.346-15"
          },
          {
              "Nome": "Luis Gustavo Rosa Pizani",
              "E-mail": "luisgustavopizani@yahoo.com.br",
              "CPF": "425.084.956-20"
          },
          {
              "Nome": "Luis Paulo Zica Silva",
              "E-mail": "luispaulozica@gmail.com",
              "CPF": "099.133.806-50"
          },
          {
              "Nome": "Luísa de Aguiar Magalhães",
              "E-mail": "luisaaguiarm17@gmail.com",
              "CPF": "142.605.746-63"
          },
          {
              "Nome": "Luisa de Luca FelicissÍmo",
              "E-mail": "luisadelucaf@gmail.com",
              "CPF": "086.868.296-94"
          },
          {
              "Nome": "Luísa de Mendonça Corrêa",
              "E-mail": "luisa.mcorrea@yahoo.com",
              "CPF": "090.705.656-33"
          },
          {
              "Nome": "Luisa Fernandes de Andrade",
              "E-mail": "lufandrade27@gmail.com",
              "CPF": "022.130.636-64"
          },
          {
              "Nome": "Luisa Ferreira Arantes",
              "E-mail": "luisa-arantes@hotmail.com",
              "CPF": "079.537.116-05"
          },
          {
              "Nome": "Luisa MarÇal de Paula",
              "E-mail": "luisamarcaldepaula@gmail.com",
              "CPF": "111.966.126-92"
          },
          {
              "Nome": "Luísa Menezes Batista",
              "E-mail": "luisabatista18@hotmail.com",
              "CPF": "123.706.136-96"
          },
          {
              "Nome": "Luísa Oliveira Coelho",
              "E-mail": "luisaolivcoelho@gmail.com",
              "CPF": "123.378.996-16"
          },
          {
              "Nome": "Luísa Silva de Carvalho Ribeiro",
              "E-mail": "luisascrib@gmail.com",
              "CPF": "067.739.776-30"
          },
          {
              "Nome": "Luisa Vianna Cançado",
              "E-mail": "luisaviannacancado@gmail.com",
              "CPF": "129.320.686-52"
          },
          {
              "Nome": "Luise Rosa Figueiredo Souza",
              "E-mail": "luiserosafs@hotmail.com",
              "CPF": "134.912.906-27"
          },
          {
              "Nome": "Luiz Antonio da Silva",
              "E-mail": "luiz.a.silva@hotmail.com",
              "CPF": "558.715.696-68"
          },
          {
              "Nome": "Luiz Antonio Dangelo",
              "E-mail": "loboaspen@hotmail.com",
              "CPF": "596.354.956-68"
          },
          {
              "Nome": "Luiz Carlos de Carvalho",
              "E-mail": "lccgineco@yahoo.com.br",
              "CPF": "380.543.296-87"
          },
          {
              "Nome": "Luiz Fernando Neves Ribeiro",
              "E-mail": "luizfnr@gmail.com",
              "CPF": "611.040.276-15"
          },
          {
              "Nome": "Luiz Guilherme Neves Caldeira",
              "E-mail": "nevesguilherme@yahoo.com.br",
              "CPF": "067.333.666-22"
          },
          {
              "Nome": "Luiza Alves Guerra Scarpelli Reis",
              "E-mail": "luizascarpelli@yahoo.com.br",
              "CPF": "126.886.466-80"
          },
          {
              "Nome": "Luiza BraganÇa Lana de Rezende",
              "E-mail": "xxluizablrxx@gmail.com",
              "CPF": "067.021.926-65"
          },
          {
              "Nome": "Luiza de Barros Mendes Pires",
              "E-mail": "luiza.debarros7@gmail.com",
              "CPF": "131.746.666-78"
          },
          {
              "Nome": "Luiza de Souza Cabral",
              "E-mail": "luizacabralsz@gmail.com",
              "CPF": "133.744.136-84"
          },
          {
              "Nome": "Luiza Elian Reis",
              "E-mail": "lulianreis@gmail.com",
              "CPF": "138.407.256-07"
          },
          {
              "Nome": "Luíza Filizzola Carabetti Carreiro",
              "E-mail": "luizafilizzola@hotmail.com",
              "CPF": "133.803.146-50"
          },
          {
              "Nome": "Luiza Fonseca Couto",
              "E-mail": "lu.fonseca.couto@gmail.com",
              "CPF": "093.647.756-35"
          },
          {
              "Nome": "Luiza Gonçalves Martins",
              "E-mail": "luizagomartins@gmail.com",
              "CPF": "091.952.776-09"
          },
          {
              "Nome": "Luiza Meelhuysen Sousa Aguiar",
              "E-mail": "luizamesousa@gmail.com",
              "CPF": "102.295.256-01"
          },
          {
              "Nome": "Luiza Moreira Gomes",
              "E-mail": "luizamoreirag00@gmail.com",
              "CPF": "088.964.396-20"
          },
          {
              "Nome": "Luiza Silva Oliveira",
              "E-mail": "luizasilva_oliveira@hotmail.com",
              "CPF": "106.391.626-73"
          },
          {
              "Nome": "Luiza Storch Carvalho",
              "E-mail": "luizastorchc@gmail.com",
              "CPF": "132.446.926-99"
          },
          {
              "Nome": "Luiza Thamiris de Oliveira Machado",
              "E-mail": "luizathamiris96@gmail.com",
              "CPF": "139.153.146-92"
          },
          {
              "Nome": "Magali Guimaraes Moreira",
              "E-mail": "magaliguimaraesmoreira@gmail.com",
              "CPF": "527.713.936-20"
          },
          {
              "Nome": "Magda Aparecida Carrijo",
              "E-mail": "magdacarrijo260@gmail.com",
              "CPF": "273.498.966-20"
          },
          {
              "Nome": "Magda Soares Ferreira Horta",
              "E-mail": "magdasfhorta@gmail.com",
              "CPF": "722.658.506-59"
          },
          {
              "Nome": "Magno de Freitas Malafaia",
              "E-mail": "magno.malafaia@hotmail.com",
              "CPF": "011.824.976-24"
          },
          {
              "Nome": "Manuel Mauricio Goncalves",
              "E-mail": "manuelmauricio41@yahoo.com.br",
              "CPF": "045.144.166-49"
          },
          {
              "Nome": "Manuel Ricardo Torres Junior",
              "E-mail": "manuelricardot@hotmail.com",
              "CPF": "113.922.196-55"
          },
          {
              "Nome": "Manuela Lopes de Araujo Pinheiro",
              "E-mail": "manuelalopes00@hotmail.com",
              "CPF": "066.502.906-37"
          },
          {
              "Nome": "Manuela Mancini Carvalho",
              "E-mail": "manuelamancinicarvalho@gmail.com",
              "CPF": "116.712.476-63"
          },
          {
              "Nome": "Marcela Barbosa Pereira Coeli",
              "E-mail": "marcelabarbosap@gmail.com",
              "CPF": "098.966.116-45"
          },
          {
              "Nome": "Marcela de Matos Assunção",
              "E-mail": "marcelamassuncao@gmail.com",
              "CPF": "095.798.476-65"
          },
          {
              "Nome": "Marcela Reis Fonseca",
              "E-mail": "marcelarf2@gmail.com",
              "CPF": "108.498.986-76"
          },
          {
              "Nome": "Marcela Rosa Dias",
              "E-mail": "marcelarosadias@gmail.com",
              "CPF": "007.268.586-76"
          },
          {
              "Nome": "Marcela Vitoria Galvao Vida",
              "E-mail": "marcelagalvaovida@gmai.com",
              "CPF": "100.441.536-27"
          },
          {
              "Nome": "Marcella Barroso Marques Martins",
              "E-mail": "MARCELLABMM98@GMAIL.COM",
              "CPF": "118.156.346-18"
          },
          {
              "Nome": "Marcella Bussinger Rodrigues",
              "E-mail": "marcella.bussinger@hotmail.com",
              "CPF": "116.956.426-78"
          },
          {
              "Nome": "Marcella Nahas Brandão",
              "E-mail": "marcella.nb29@gmail.com",
              "CPF": "092.713.786-01"
          },
          {
              "Nome": "Marcelo Eustaquio Fagundes",
              "E-mail": "mefagundes@yahoo.com.br",
              "CPF": "401.918.856-49"
          },
          {
              "Nome": "Marcelo Leandro Pereira",
              "E-mail": "marceloleper@gmail.com",
              "CPF": "485.400.646-34"
          },
          {
              "Nome": "Marcelo Maciel de Araujo Porto",
              "E-mail": "marceloportodr@hotmail.com",
              "CPF": "329.225.076-53"
          },
          {
              "Nome": "MÁrcia Aires Rodrigues de Freitas",
              "E-mail": "mairesfreitas@hotmail.com",
              "CPF": "056.284.806-14"
          },
          {
              "Nome": "Marcia Andrea Mesquita Mendes",
              "E-mail": "mammgo@hotmail.com",
              "CPF": "532.560.856-87"
          },
          {
              "Nome": "Marcia Aurelia Prado Boaventura",
              "E-mail": "mapboaventura@gmail.com",
              "CPF": "371.604.516-00"
          },
          {
              "Nome": "Marcia Cristina Franca Ferreira",
              "E-mail": "francaferreiramc@gmail.com",
              "CPF": "026.816.776-10"
          },
          {
              "Nome": "Marcia de Araujo Romualdo",
              "E-mail": "marcia.a.romualdo@gmail.com",
              "CPF": "900.041.676-00"
          },
          {
              "Nome": "MÁrcia Ferreira Rezende",
              "E-mail": "marcinha_ferre@hotmail.com",
              "CPF": "032.544.126-05"
          },
          {
              "Nome": "Marcia MendonÇa Carneiro",
              "E-mail": "marciamc.ufmg@gmail.com",
              "CPF": "713.027.436-00"
          },
          {
              "Nome": "Marcia Pedrosa de Oliveira",
              "E-mail": "marcia.oliveira1779@terra.com.br",
              "CPF": "016.654.917-79"
          },
          {
              "Nome": "Marcia Pinto Eulalio de Souza",
              "E-mail": "dramarciaeulalio@gmail.com",
              "CPF": "297.353.276-00"
          },
          {
              "Nome": "Marcia Salvador Geo",
              "E-mail": "marcia@materdei.com.br",
              "CPF": "581.317.796-53"
          },
          {
              "Nome": "MÁrcia Viviani Pedrini Moreira",
              "E-mail": "marciapedrini@yahoo.com.br",
              "CPF": "000.963.716-84"
          },
          {
              "Nome": "MÁrcio Alexandre HipÓlito Rodrigues",
              "E-mail": "marcioahr@gmail.com",
              "CPF": "715.484.326-87"
          },
          {
              "Nome": "Marcio Antonio Pinto Brandao",
              "E-mail": "mbrandao50@hotmail.com",
              "CPF": "300.226.656-68"
          },
          {
              "Nome": "Marcio Couto Gomes",
              "E-mail": "marciocogo@hotmail.com",
              "CPF": "106.400.116-59"
          },
          {
              "Nome": "Marcio Gomes Vilela",
              "E-mail": "mbiriba@hotmail.com",
              "CPF": "370.185.156-53"
          },
          {
              "Nome": "Marcio Jose Rosa Requeijo",
              "E-mail": "marciorequeijo3@hotmail.com",
              "CPF": "903.083.106-59"
          },
          {
              "Nome": "Marcio Lucio de Miranda",
              "E-mail": "ceapefma@hotmail.com",
              "CPF": "013.594.446-53"
          },
          {
              "Nome": "Marco Túlio Barros Torres",
              "E-mail": "mtbtorres14@gmail.com",
              "CPF": "016.262.716-58"
          },
          {
              "Nome": "Marco Tulio Vaintraub",
              "E-mail": "marcotulio@clinicavenus.med.br",
              "CPF": "488.652.066-91"
          },
          {
              "Nome": "Marcos Aurelio Cota Teixeira",
              "E-mail": "maureliocteixeira@gmail.com",
              "CPF": "003.329.846-72"
          },
          {
              "Nome": "Marcos Lamim de Moraes",
              "E-mail": "marcos.lamim@hotmail.com",
              "CPF": "723.126.296-15"
          },
          {
              "Nome": "Marcos Machado Issa",
              "E-mail": "marcaoissa@gmail.com",
              "CPF": "618.348.156-49"
          },
          {
              "Nome": "Marcos Murilo de Lima Faria",
              "E-mail": "fetofaria@terra.com.br",
              "CPF": "506.279.376-91"
          },
          {
              "Nome": "Marcos Roberto Taveira",
              "E-mail": "marcostaveira47@gmail.com",
              "CPF": "768.659.676-15"
          },
          {
              "Nome": "Marcos Vinicius Freitas de Souza",
              "E-mail": "marcos_souza_662@hotmail.com",
              "CPF": "097.811.596-18"
          },
          {
              "Nome": "Marcus Vinicius Hudson Nascimento",
              "E-mail": "clincenter1997@gmail.com",
              "CPF": "425.085.686-00"
          },
          {
              "Nome": "Maria Agueda Soares Guimaraes",
              "E-mail": "m.aguedago@gmail.com",
              "CPF": "739.364.217-49"
          },
          {
              "Nome": "Maria Alice Boareto Freitas",
              "E-mail": "m.aliceboareto@gmail.com",
              "CPF": "107.297.246-89"
          },
          {
              "Nome": "Maria Alice Vieira de Freitas",
              "E-mail": "licinhavf@gmail.com",
              "CPF": "065.240.136-89"
          },
          {
              "Nome": "Maria Amelia Sarmiento Dias Silva",
              "E-mail": "mariaameliasarmiento@gmail.com",
              "CPF": "551.351.106-15"
          },
          {
              "Nome": "Maria Angela Girardi",
              "E-mail": "m-girardi@hotmail.com",
              "CPF": "285.356.776-15"
          },
          {
              "Nome": "Maria AngÉlica GalvÃo Longo",
              "E-mail": "materlongo1@gmail.com",
              "CPF": "511.273.426-49"
          },
          {
              "Nome": "Maria Aparecida Fagundes Porto",
              "E-mail": "cidaporto1064@gmail.com",
              "CPF": "637.174.926-91"
          },
          {
              "Nome": "Maria Aparecida Maruch de Carvalho",
              "E-mail": "maparecidamc@yahoo.com.br",
              "CPF": "298.969.596-68"
          },
          {
              "Nome": "Maria Aparecida Piantino Guimaraes",
              "E-mail": "empty@febrasgo.org.br",
              "CPF": "002.088.766-34"
          },
          {
              "Nome": "Maria Aparecida Silva E Souza",
              "E-mail": "sofiasilva@terra.com.br",
              "CPF": "344.948.396-04"
          },
          {
              "Nome": "Maria Beatriz Costa",
              "E-mail": "carferc@terra.com.br",
              "CPF": "285.359.526-91"
          },
          {
              "Nome": "Maria Carolina Barbosa Costa",
              "E-mail": "mariacarolinab.costa@hotmail.com",
              "CPF": "111.134.096-06"
          },
          {
              "Nome": "Maria Carolina Gomes Medrado",
              "E-mail": "mariacarolinagomesm@gmail.com",
              "CPF": "122.569.286-59"
          },
          {
              "Nome": "Maria Carolina Gomes Xavier",
              "E-mail": "mariacarolinagxavier@gmail.com",
              "CPF": "088.081.106-48"
          },
          {
              "Nome": "Maria Carolina Rodrigues Ignácio",
              "E-mail": "carolignacio123@gmail.com",
              "CPF": "126.448.666-93"
          },
          {
              "Nome": "Maria Cecilia Ribeiro de Sa",
              "E-mail": "mceciliarsa@hotmail.com",
              "CPF": "518.652.466-20"
          },
          {
              "Nome": "Maria Clara Barroso Moreira",
              "E-mail": "mclarabarrosom@gmail.com",
              "CPF": "126.368.756-38"
          },
          {
              "Nome": "Maria Clara Carneiro Leite",
              "E-mail": "mariaclara.leite@hotmail.com",
              "CPF": "180.090.787-78"
          },
          {
              "Nome": "Maria Clara Catani Porto",
              "E-mail": "mariaclaracporto@hotmail.com",
              "CPF": "088.975.626-04"
          },
          {
              "Nome": "Maria Clara Cruz Souza",
              "E-mail": "mclara_cruz@outlook.com",
              "CPF": "103.618.066-20"
          },
          {
              "Nome": "Maria Clara de Assis Brito Alves",
              "E-mail": "mcabalves@gmail.com",
              "CPF": "012.819.936-97"
          },
          {
              "Nome": "Maria Clara Leal",
              "E-mail": "mariaclara.lealodesa@gmail.com",
              "CPF": "122.910.896-33"
          },
          {
              "Nome": "Maria Clara Lopes Rezende",
              "E-mail": "mariaclaralopesrezendee@gmail.com",
              "CPF": "017.747.896-98"
          },
          {
              "Nome": "Maria Clara Marangoni",
              "E-mail": "mclaramarangoni@gmail.com",
              "CPF": "073.000.986-65"
          },
          {
              "Nome": "Maria Clara Ribeiro Figueiredo",
              "E-mail": "mariaclaralegal10@hotmail.com",
              "CPF": "028.679.081-59"
          },
          {
              "Nome": "Maria Clara Soares Barbosa Campolina",
              "E-mail": "mclara-caca@hotmail.com",
              "CPF": "084.283.786-81"
          },
          {
              "Nome": "Maria Clarice Motta CorrÊa",
              "E-mail": "claricemcorrea@gmail.com",
              "CPF": "002.038.826-87"
          },
          {
              "Nome": "Maria Cristina Felizardo Hudson",
              "E-mail": "crishudson0469@gmail.com",
              "CPF": "935.655.936-87"
          },
          {
              "Nome": "Maria Cristina Maciel Marques",
              "E-mail": "mcmacielmarques@gmail.com",
              "CPF": "528.240.396-04"
          },
          {
              "Nome": "Maria Cristina Motta E Silva",
              "E-mail": "dra.cristinamotta@hotmail.com",
              "CPF": "338.809.486-15"
          },
          {
              "Nome": "Maria da Conceicao Silva Araujo",
              "E-mail": "mconcei33@gmail.com",
              "CPF": "650.011.416-72"
          },
          {
              "Nome": "Maria de Fatima Dias de Sousa Brito",
              "E-mail": "mfsousabrito@gmail.com",
              "CPF": "604.920.666-04"
          },
          {
              "Nome": "Maria de Fatima Lobato Vilaca",
              "E-mail": "falobato58@gmail.com",
              "CPF": "519.653.056-87"
          },
          {
              "Nome": "Maria de Fatima Palhares Turchetti",
              "E-mail": "ivonesantos1209@gmail.com",
              "CPF": "325.822.266-53"
          },
          {
              "Nome": "Maria de Jesus Santos Rametta",
              "E-mail": "jorametta@yahoo.com.br",
              "CPF": "245.614.366-34"
          },
          {
              "Nome": "Maria de Lourdes Souza Gonçalves",
              "E-mail": "malusg24@gmail.com",
              "CPF": "122.587.366-50"
          },
          {
              "Nome": "Maria de Lourdes Tostes",
              "E-mail": "tostesml@yahoo.com.br",
              "CPF": "247.818.196-72"
          },
          {
              "Nome": "Maria do Carmo de Castro Almeida Mendes",
              "E-mail": "maduamendes@gmail.com",
              "CPF": "809.221.717-34"
          },
          {
              "Nome": "Maria do Carmo Silva Arantes",
              "E-mail": "mariacsarantes@hotmail.com",
              "CPF": "480.727.616-68"
          },
          {
              "Nome": "Maria Dulce Goncalves",
              "E-mail": "mariadulceg51@gmail.com",
              "CPF": "278.726.106-04"
          },
          {
              "Nome": "Maria Eduarda Silva Souza",
              "E-mail": "silvasouzamariaeduarda19@gmail.com",
              "CPF": "131.792.376-60"
          },
          {
              "Nome": "Maria Emilia Rodrigues Leitao Parreira",
              "E-mail": "meparreira@hotmail.com",
              "CPF": "555.188.266-72"
          },
          {
              "Nome": "Maria Fernanda Ferreira Martins",
              "E-mail": "mariafernandafmartins@gmail.com",
              "CPF": "019.455.656-59"
          },
          {
              "Nome": "Maria Gabriela Gadelha Gomes",
              "E-mail": "mgabrielagadelha@hotmail.com",
              "CPF": "003.332.142-69"
          },
          {
              "Nome": "Maria Gabriela Lisboa",
              "E-mail": "marialisboa2@hotmail.com",
              "CPF": "134.841.706-46"
          },
          {
              "Nome": "Maria Gabriella Souza Trindade",
              "E-mail": "mariagabriellast@gmail.com",
              "CPF": "041.009.685-74"
          },
          {
              "Nome": "Maria Helena Degani Dumont",
              "E-mail": "raissadeganidumont@hotmail.com",
              "CPF": "278.216.336-15"
          },
          {
              "Nome": "Maria Helena Gomes Figueira",
              "E-mail": "mariahelenafigueira@gmail.com",
              "CPF": "014.054.386-49"
          },
          {
              "Nome": "Maria Ines de Miranda Lima",
              "E-mail": "mariaineslima@terra.com.br",
              "CPF": "333.634.556-15"
          },
          {
              "Nome": "Maria Ines Menescal Fabricio",
              "E-mail": "inesfabricio@gmail.com",
              "CPF": "693.148.027-87"
          },
          {
              "Nome": "Maria Isabella Ferreira Neves",
              "E-mail": "bellaferreiraneves@hotmail.com",
              "CPF": "128.690.306-81"
          },
          {
              "Nome": "Maria Julieta Nazareth Lara",
              "E-mail": "julietanazareth@yahoo.com.br",
              "CPF": "128.369.406-97"
          },
          {
              "Nome": "Maria Laura de Sousa Cardoso",
              "E-mail": "marialauracardoso46@gmail.com",
              "CPF": "128.904.286-13"
          },
          {
              "Nome": "Maria LÚcia Andrade Abreu",
              "E-mail": "dramlabreu@gmail.com",
              "CPF": "513.892.076-68"
          },
          {
              "Nome": "Maria LuÍsa Braga Vieira Gil",
              "E-mail": "mlbv84@yahoo.com.br",
              "CPF": "068.232.616-09"
          },
          {
              "Nome": "Maria Luiza Alves Freitas",
              "E-mail": "marialuizaalvesfreitas@outlook.com",
              "CPF": "134.817.566-40"
          },
          {
              "Nome": "Maria Nair de Sa Teixeira",
              "E-mail": "marianairsat@hotmail.com",
              "CPF": "438.511.936-87"
          },
          {
              "Nome": "Maria Paula Ferreira Arcuri",
              "E-mail": "mpfarcuri@hotmail.com",
              "CPF": "093.528.156-88"
          },
          {
              "Nome": "Maria Paula Moraes Vasconcelos",
              "E-mail": "mpmvas@gmail.com",
              "CPF": "954.327.606-49"
          },
          {
              "Nome": "Maria Paula Oliveira Franco",
              "E-mail": "mariapaullafranco13@gmail.com",
              "CPF": "116.347.056-29"
          },
          {
              "Nome": "Maria Paula Roman Amaral",
              "E-mail": "mpaularamaral@gmail.com",
              "CPF": "017.612.906-57"
          },
          {
              "Nome": "Maria Paula Yamagut",
              "E-mail": "mayamaguti2@gmail.com",
              "CPF": "394.865.668-10"
          },
          {
              "Nome": "Maria Regina Dias Gontijo",
              "E-mail": "mreginagontijo@hotmail.com",
              "CPF": "939.292.936-68"
          },
          {
              "Nome": "Maria Rita Alves Barbosa de Paiva",
              "E-mail": "mariarita_abp@hotmail.com",
              "CPF": "084.604.616-45"
          },
          {
              "Nome": "Maria SÍlvia Ribeiro Monteiro da Silva",
              "E-mail": "msrms20@hotmail.com",
              "CPF": "053.444.896-84"
          },
          {
              "Nome": "Maria Soeli Lanza Meirelles",
              "E-mail": "mariasoelilanzameirelles@outlook.com",
              "CPF": "679.157.366-04"
          },
          {
              "Nome": "Maria Tereza Chaves de Almeida",
              "E-mail": "mtete132@gmail.com",
              "CPF": "124.622.906-48"
          },
          {
              "Nome": "Maria Tereza Maia Penido Rebello",
              "E-mail": "mariatepenido@hotmail.com",
              "CPF": "883.833.266-53"
          },
          {
              "Nome": "Maria Virginia Furquim Werneck Marinho",
              "E-mail": "virginiawerneck@gmail.com",
              "CPF": "467.482.376-53"
          },
          {
              "Nome": "Mariana Alves Gomes",
              "E-mail": "mmari.alves1@gmail.com",
              "CPF": "099.941.556-52"
          },
          {
              "Nome": "Mariana Campos Belo Moreira",
              "E-mail": "maricbelom@gmail.com",
              "CPF": "111.901.896-07"
          },
          {
              "Nome": "Mariana Colosso Cotia Barreto",
              "E-mail": "marianacolosso@gmail.com",
              "CPF": "462.315.818-70"
          },
          {
              "Nome": "Mariana de Carvalho Silveira Scandiuzzi",
              "E-mail": "marianadcs@hotmail.com",
              "CPF": "059.455.786-06"
          },
          {
              "Nome": "Mariana de Oliveira Ribeiro",
              "E-mail": "marideoliveira14@hotmail.com",
              "CPF": "144.800.817-47"
          },
          {
              "Nome": "Mariana de Paula Martins Tavares",
              "E-mail": "marianadepaulamartinstavares@gmail.com",
              "CPF": "127.156.186-70"
          },
          {
              "Nome": "Mariana Freitas de Oliveira",
              "E-mail": "marifreitasoliveira@hotmail.com",
              "CPF": "109.460.096-27"
          },
          {
              "Nome": "Mariana Furtado Meinberg",
              "E-mail": "marianameinberg84@gmail.com",
              "CPF": "061.658.216-18"
          },
          {
              "Nome": "Mariana Gazzinelli de Oliveira Lima",
              "E-mail": "marianagazzinelli@hotmail.com",
              "CPF": "142.404.236-43"
          },
          {
              "Nome": "Mariana Gonçalves Ribeiro",
              "E-mail": "marianagr87@gmail.com",
              "CPF": "114.016.847-93"
          },
          {
              "Nome": "Mariana Hippert Gonçalves",
              "E-mail": "mariana.hippert@gmail.com",
              "CPF": "052.018.715-69"
          },
          {
              "Nome": "Mariana KefalÁs Oliveira Gomes",
              "E-mail": "marianakefalasgomes@gmail.com",
              "CPF": "953.820.036-53"
          },
          {
              "Nome": "Mariana Laura de Paula Souza",
              "E-mail": "mlps99@hotmail.com",
              "CPF": "068.764.691-07"
          },
          {
              "Nome": "Mariana Luiza de Souza Amaral",
              "E-mail": "marianalsouza7@gmail.com",
              "CPF": "126.159.206-93"
          },
          {
              "Nome": "Mariana Martins de Sousa",
              "E-mail": "mariana.m.sousa@hotmail.com",
              "CPF": "110.179.226-40"
          },
          {
              "Nome": "Mariana Martins Pires",
              "E-mail": "marianamartinspires@gmail.com",
              "CPF": "115.336.906-00"
          },
          {
              "Nome": "Mariana Mitraud Ottoni Guedes",
              "E-mail": "marianamitraud@hotmail.com",
              "CPF": "089.603.506-99"
          },
          {
              "Nome": "Mariana Pardo de Oliveira",
              "E-mail": "maripardo-bh@hotmail.com",
              "CPF": "119.426.546-42"
          },
          {
              "Nome": "Mariana Pertence de Sousa E Silva",
              "E-mail": "marianapertence@yahoo.com.br",
              "CPF": "095.561.066-42"
          },
          {
              "Nome": "Mariana Reis Di Mambro",
              "E-mail": "maridimambro@hotmail.com",
              "CPF": "109.927.766-35"
          },
          {
              "Nome": "Mariana Rodrigues Tolentino",
              "E-mail": "marirodrigues46@hotmail.com",
              "CPF": "099.457.286-79"
          },
          {
              "Nome": "Mariana Seabra Leite Praça",
              "E-mail": "mariseabra@gmail.com",
              "CPF": "013.328.206-62"
          },
          {
              "Nome": "Mariana Vicentini Tzi Lindorfer",
              "E-mail": "marianavtzi@hotmail.com",
              "CPF": "096.460.666-66"
          },
          {
              "Nome": "Marianna Maisonnette de Attayde Silva",
              "E-mail": "mariannamaisonnette@gmail.com",
              "CPF": "103.945.354-64"
          },
          {
              "Nome": "Marianna Pena Viveiros Nogueira",
              "E-mail": "penaviveiros@yahoo.com.br",
              "CPF": "100.899.907-57"
          },
          {
              "Nome": "Marianne Alice dos Santos Alves",
              "E-mail": "mariannealice@gmail.com",
              "CPF": "083.100.126-75"
          },
          {
              "Nome": "Mariella Soares Blanco",
              "E-mail": "mariellasblanco@gmail.com",
              "CPF": "121.662.406-23"
          },
          {
              "Nome": "Marieny Dutra Souto",
              "E-mail": "marienydutrasouto@hotmail.com",
              "CPF": "015.373.496-51"
          },
          {
              "Nome": "Marilene Rios Sandy",
              "E-mail": "mrios2005@bol.com.br",
              "CPF": "035.563.516-09"
          },
          {
              "Nome": "Marilene Vale de Castro Monteiro",
              "E-mail": "marilene.vale@gmail.com",
              "CPF": "529.752.666-34"
          },
          {
              "Nome": "Marilia GuimarÃes Quirino Mira",
              "E-mail": "magquirino@yahoo.com.br",
              "CPF": "052.008.666-00"
          },
          {
              "Nome": "Marilia Pereira da Silva",
              "E-mail": "mariliaps.med@gmail.com",
              "CPF": "132.798.566-71"
          },
          {
              "Nome": "Marilyn Rita da Silva",
              "E-mail": "marilyn.silva@yahoo.com.br",
              "CPF": "082.918.506-23"
          },
          {
              "Nome": "Marina Alves Vecchi",
              "E-mail": "marinavecchi098@gmail.com",
              "CPF": "098.502.406-28"
          },
          {
              "Nome": "Marina Carvalho Paschoini",
              "E-mail": "mcarvalhopaschoini@gmail.com",
              "CPF": "567.364.796-49"
          },
          {
              "Nome": "Marina Cavalcanti Rodrigues de Aguiar",
              "E-mail": "marinaguiar37@gmail.com",
              "CPF": "136.310.156-07"
          },
          {
              "Nome": "Marina Corrêa Lima",
              "E-mail": "marinacorrealima@hotmail.com",
              "CPF": "105.910.236-60"
          },
          {
              "Nome": "Marina Fernandes Carvalho",
              "E-mail": "marinafecarvalho@gmail.com",
              "CPF": "117.495.506-60"
          },
          {
              "Nome": "Marina Fistarol",
              "E-mail": "mfistarol@gmail.com",
              "CPF": "080.111.276-16"
          },
          {
              "Nome": "Marina Guerra Rotelli",
              "E-mail": "ma.rotelli@gmail.com",
              "CPF": "111.217.366-88"
          },
          {
              "Nome": "Marina Lourenço de Medeiros",
              "E-mail": "marinalmedeiros@hotmail.com",
              "CPF": "021.103.826-19"
          },
          {
              "Nome": "Marina Matos de Moura Faico",
              "E-mail": "mmmoura@gmail.com",
              "CPF": "001.806.526-05"
          },
          {
              "Nome": "Marina Neves de Almeida Gomes",
              "E-mail": "marinanag@yahoo.com.br",
              "CPF": "046.736.636-59"
          },
          {
              "Nome": "Marina Rodrigues Chaves",
              "E-mail": "marina.r.chaves@hotmail.com",
              "CPF": "075.821.126-01"
          },
          {
              "Nome": "Marina Zaramela Lopes",
              "E-mail": "marinazlopes@yahoo.com.br",
              "CPF": "013.036.366-97"
          },
          {
              "Nome": "Mario Dias CorrÊa Junior",
              "E-mail": "correajr@gmail.com",
              "CPF": "875.603.726-00"
          },
          {
              "Nome": "Maristela Gomes de Oliveira Neves",
              "E-mail": "mgoneves@yahoo.com.br",
              "CPF": "743.814.827-00"
          },
          {
              "Nome": "Marlete Ferreira de Souza",
              "E-mail": "marletefs@gmail.com",
              "CPF": "938.473.606-63"
          },
          {
              "Nome": "Marta Luisa Palomero Bueno",
              "E-mail": "martapalomero@hotmail.com",
              "CPF": "844.170.566-68"
          },
          {
              "Nome": "Martha Aparecida Vieira Machado",
              "E-mail": "marthavieira@gmail.com",
              "CPF": "801.157.646-15"
          },
          {
              "Nome": "Martha Pantel dos Santos Mota",
              "E-mail": "marthapantelmota@gmail.com",
              "CPF": "599.596.306-68"
          },
          {
              "Nome": "Maruza Nogueira Silva",
              "E-mail": "nogueiramaruza@gmail.com",
              "CPF": "045.353.781-26"
          },
          {
              "Nome": "Matheus Lopes de Andrade",
              "E-mail": "matheuslandrade@gmail.com",
              "CPF": "094.866.656-05"
          },
          {
              "Nome": "Mathil Abdou Bittencourt",
              "E-mail": "mathil@terra.com.br",
              "CPF": "052.751.838-79"
          },
          {
              "Nome": "Mauricio Barata Diniz",
              "E-mail": "mauricio.bdiniz30@gmail.com",
              "CPF": "494.868.966-15"
          },
          {
              "Nome": "Maurilio da Cruz Trigueiro",
              "E-mail": "trigueiromaurilio@gmail.com",
              "CPF": "031.662.406-32"
          },
          {
              "Nome": "Mauro Soares Banni",
              "E-mail": "maurosoaresbanni@yahoo.com.br",
              "CPF": "726.702.746-68"
          },
          {
              "Nome": "Máyra Bernardes Rocha",
              "E-mail": "mayrarocha01@outlook.com",
              "CPF": "121.293.976-03"
          },
          {
              "Nome": "Mayra Bottega Mati",
              "E-mail": "mayrabottega27@gmail.com",
              "CPF": "045.528.956-56"
          },
          {
              "Nome": "Melyssa de Carvalho Cardoso",
              "E-mail": "melycardoso@hotmail.com",
              "CPF": "110.622.766-20"
          },
          {
              "Nome": "Micaella Ramos Teixeira",
              "E-mail": "micaellaramost@hotmail.com",
              "CPF": "073.243.316-96"
          },
          {
              "Nome": "Michael Zarnowski Passos",
              "E-mail": "michaelpassos@gmail.com",
              "CPF": "062.887.536-37"
          },
          {
              "Nome": "Michele Barbosa Sampaio",
              "E-mail": "michelebsampaio@gmail.com",
              "CPF": "081.258.266-70"
          },
          {
              "Nome": "Michele Cristina Machado Pinto",
              "E-mail": "michelecristina1041@gmail.com",
              "CPF": "018.753.556-69"
          },
          {
              "Nome": "Michele Menezes Portes Antunes",
              "E-mail": "drmicheleportes@gmai.com",
              "CPF": "247.664.928-70"
          },
          {
              "Nome": "Michelle Cristina Marques Caldeira",
              "E-mail": "dramichellecaldeira@gmail.com",
              "CPF": "099.577.376-94"
          },
          {
              "Nome": "Michelle Verliane Chaves",
              "E-mail": "michelleverliane@yahoo.com.br",
              "CPF": "092.300.896-99"
          },
          {
              "Nome": "Miguel Pedro Junger de Castro Garro",
              "E-mail": "miguelpjcg@hotmail.com",
              "CPF": "077.197.326-85"
          },
          {
              "Nome": "Milce de Souza Resende",
              "E-mail": "milce@viareal.com.br",
              "CPF": "552.858.216-49"
          },
          {
              "Nome": "Millena Pompeu Magalhães",
              "E-mail": "millena_pompeu@hotmail.com",
              "CPF": "101.947.416-56"
          },
          {
              "Nome": "Mirna Santana Oliveira",
              "E-mail": "mirna.s.o@hotmail.com",
              "CPF": "103.259.506-01"
          },
          {
              "Nome": "Mirtes Amaral Alcantara",
              "E-mail": "amirtesa65@yahoo.com.br",
              "CPF": "584.914.496-04"
          },
          {
              "Nome": "Mirtza Muhlert Arcoverde Sobral Geldres",
              "E-mail": "mirtzamuhlert@gmail.com",
              "CPF": "025.828.544-33"
          },
          {
              "Nome": "Mona Rezende Ferreira Holanda",
              "E-mail": "mona_rezende1990@hotmail.com",
              "CPF": "100.209.886-64"
          },
          {
              "Nome": "MÔnica Avila de Carvalho",
              "E-mail": "moavicarvalho@hotmail.com",
              "CPF": "682.275.157-20"
          },
          {
              "Nome": "Monica Dias Nunes Palomino",
              "E-mail": "monicadnunes@gmail.com",
              "CPF": "572.207.276-15"
          },
          {
              "Nome": "Monica Joana Breijao do Prado",
              "E-mail": "mbreijao@hotmail.com",
              "CPF": "088.815.866-14"
          },
          {
              "Nome": "Monique Luisa da Silva Marques",
              "E-mail": "monique_luisa92@outlook.com",
              "CPF": "099.489.946-71"
          },
          {
              "Nome": "Mucio Barata Diniz",
              "E-mail": "muciobaratadiniz@gmail.com",
              "CPF": "540.967.076-00"
          },
          {
              "Nome": "Mylena Martins Almeida",
              "E-mail": "mymartinns@gmail.com",
              "CPF": "059.125.371-29"
          },
          {
              "Nome": "Nadia Daniela Marques Rodrigues",
              "E-mail": "nadiarodrigues02@hotmail.com",
              "CPF": "719.457.591-43"
          },
          {
              "Nome": "Nadia Lucia Meneses",
              "E-mail": "nadia.meneses@gmail.com",
              "CPF": "074.300.127-36"
          },
          {
              "Nome": "Nara Maria Meira Valadares",
              "E-mail": "naravaladares392@gmail.com",
              "CPF": "149.843.236-04"
          },
          {
              "Nome": "Narcia Naett de Cassia Vilaca",
              "E-mail": "consultorionarcia@yahoo.com.br",
              "CPF": "550.924.036-91"
          },
          {
              "Nome": "Natalia de Andrade Machado",
              "E-mail": "nataliaandrade84@yahoo.com.br",
              "CPF": "066.769.756-02"
          },
          {
              "Nome": "Natalia Hanke Beutinger",
              "E-mail": "nataliabeutinger@hotmail.com",
              "CPF": "039.448.380-41"
          },
          {
              "Nome": "Natalia Resende Ferreira",
              "E-mail": "naataliaresende@gmail.com",
              "CPF": "063.128.606-39"
          },
          {
              "Nome": "Natalia Rodrigues Gomes de Assis",
              "E-mail": "nataliaassis1903@gmail.com",
              "CPF": "130.569.936-01"
          },
          {
              "Nome": "Natália Rúbia Rodrigues Soares",
              "E-mail": "nathirsouza@gmail.com",
              "CPF": "105.266.936-06"
          },
          {
              "Nome": "Natália Santos Reis Itaiá",
              "E-mail": "natalia.itaia@gmail.com",
              "CPF": "034.881.235-37"
          },
          {
              "Nome": "Natália Silveira Camargo Piedade",
              "E-mail": "nataliasilveiracamargo@gmail.com",
              "CPF": "098.200.156-85"
          },
          {
              "Nome": "Natalia Tobal Secches Brito Silva",
              "E-mail": "nattse@hotmail.com",
              "CPF": "078.597.336-25"
          },
          {
              "Nome": "Natanael Machado",
              "E-mail": "empty@febrasgo.org.br",
              "CPF": "005.019.486-00"
          },
          {
              "Nome": "Nathalia Lacerda Eller Costa",
              "E-mail": "nathaliaeller@outlook.com.br",
              "CPF": "131.025.156-81"
          },
          {
              "Nome": "Nathalia Moura de Melo Delgado",
              "E-mail": "delgadomm.nathalia@gmail.com",
              "CPF": "123.799.386-52"
          },
          {
              "Nome": "Nathalia Silveira Vieira",
              "E-mail": "nathaliasv.med@gmail.com",
              "CPF": "099.167.136-85"
          },
          {
              "Nome": "Nathalia Vianna Santos Reis",
              "E-mail": "nathaliaviannago@gmail.com",
              "CPF": "067.236.906-05"
          },
          {
              "Nome": "Nathalya Karen Silveira de Almeida",
              "E-mail": "nathalyakaren02@gmail.com",
              "CPF": "020.896.676-56"
          },
          {
              "Nome": "Nayane Carla Soares Saraiva",
              "E-mail": "nayanecssaraiva@gmail.com",
              "CPF": "095.764.406-02"
          },
          {
              "Nome": "Nayara Christini Anselmo",
              "E-mail": "nayarachristini@gmail.com",
              "CPF": "122.197.096-80"
          },
          {
              "Nome": "Nazy Fuad Ibrahim",
              "E-mail": "nazyfuad@gmail.com",
              "CPF": "211.918.326-00"
          },
          {
              "Nome": "Neila Caroline Alves Amaral",
              "E-mail": "neilacarolineaa@gmail.com",
              "CPF": "098.475.646-98"
          },
          {
              "Nome": "Neli Sueli Teixeira de Souza",
              "E-mail": "neli.fcm@gmail.com",
              "CPF": "471.016.366-91"
          },
          {
              "Nome": "Nelma Consolacao Linhares Possa",
              "E-mail": "nelma-lp@hotmail.com",
              "CPF": "620.463.816-53"
          },
          {
              "Nome": "Nelvis Leydd Moreira da Silva",
              "E-mail": "nelmed2006@yahoo.com.br",
              "CPF": "037.047.816-90"
          },
          {
              "Nome": "Nielsen Ribeiro",
              "E-mail": "empty@febrasgo.org.br",
              "CPF": "011.118.506-82"
          },
          {
              "Nome": "Niemeyer Alves Rosa",
              "E-mail": "niemeyer.rosa@gmail.com",
              "CPF": "027.367.116-29"
          },
          {
              "Nome": "Nilo Sergio Nominato",
              "E-mail": "nominatonilo@hotmail.com",
              "CPF": "314.661.686-68"
          },
          {
              "Nome": "Núbia Rocha Queiroz",
              "E-mail": "nubiaq4@gmail.com",
              "CPF": "106.018.086-30"
          },
          {
              "Nome": "Olivia Cristina Silva Ferreira Figueiredo",
              "E-mail": "oliviacsf@hotmail.com",
              "CPF": "108.780.366-79"
          },
          {
              "Nome": "Osvaldo Simoes",
              "E-mail": "osvaldo@unimedcentro-oeste.coop.br",
              "CPF": "002.906.296-91"
          },
          {
              "Nome": "Oswaldo Leao de Souza",
              "E-mail": "oswaldoleao@gmail.com",
              "CPF": "176.507.986-15"
          },
          {
              "Nome": "Oton Goncalves da Silva Junior",
              "E-mail": "otongoncalves@hotmail.com",
              "CPF": "048.920.066-45"
          },
          {
              "Nome": "Pammela Vieira Freire",
              "E-mail": "pamvieirafreire@hotmail.com",
              "CPF": "080.550.126-60"
          },
          {
              "Nome": "Paola Gaston Giostri",
              "E-mail": "pggbh83@yahoo.com.br",
              "CPF": "014.354.946-44"
          },
          {
              "Nome": "Patricia Aliprandi Dutra",
              "E-mail": "patyalip@gmail.com",
              "CPF": "941.315.976-91"
          },
          {
              "Nome": "Patricia Ariel Rodrigues Marques Figueira",
              "E-mail": "patriciaarmf@gmail.com",
              "CPF": "367.264.878-78"
          },
          {
              "Nome": "PatrÍcia de Paula MagalhÃes",
              "E-mail": "patricia.pmagalhaes1@gmail.com",
              "CPF": "097.479.756-10"
          },
          {
              "Nome": "Patrícia Fernandes Gago",
              "E-mail": "fernandesgpatricia@hotmail.com",
              "CPF": "160.371.187-28"
          },
          {
              "Nome": "Patricia Goncalves Teixeira",
              "E-mail": "pgtmedicina@gmail.com",
              "CPF": "916.842.186-91"
          },
          {
              "Nome": "Patrícia Mendonça Leite",
              "E-mail": "patriciamleite@hotmail.com",
              "CPF": "137.267.876-07"
          },
          {
              "Nome": "Patricia Moreira Marcal Gussen",
              "E-mail": "patmoreiramarcal@hotmail.com",
              "CPF": "016.324.826-57"
          },
          {
              "Nome": "Patrícia Pacheco Huebra",
              "E-mail": "patriciahuebra@hotmail.com",
              "CPF": "108.392.106-12"
          },
          {
              "Nome": "Patrícia Rocha Carneiro",
              "E-mail": "patyrc1@hotmail.com",
              "CPF": "113.333.296-01"
          },
          {
              "Nome": "Patricia Teixeira de Resende",
              "E-mail": "patriciatrgom@gmail.com",
              "CPF": "057.685.036-50"
          },
          {
              "Nome": "Paula BrandÃo Ávila Coelho",
              "E-mail": "pbacoelho@hotmail.com",
              "CPF": "084.902.127-83"
          },
          {
              "Nome": "Paula Bruzadelli Vieira da Silveira",
              "E-mail": "paula.bvs@hotmail.com",
              "CPF": "015.536.676-97"
          },
          {
              "Nome": "Paula Campos Barroso",
              "E-mail": "drapaulabarroso@gmail.com",
              "CPF": "082.574.216-18"
          },
          {
              "Nome": "Paula Castro Pinheiro",
              "E-mail": "papaulacastrop@yahoo.com.br",
              "CPF": "130.313.106-40"
          },
          {
              "Nome": "Paula Cristina Dias Primo",
              "E-mail": "clinicasantabarbara.mg@gmail.com",
              "CPF": "564.583.986-20"
          },
          {
              "Nome": "Paula Faria Pereira",
              "E-mail": "paulafariapereira1@gmail.com",
              "CPF": "117.559.776-70"
          },
          {
              "Nome": "Paula Honorio de Oliveira",
              "E-mail": "drapholiveira@gmail.com",
              "CPF": "015.156.616-01"
          },
          {
              "Nome": "Paula Pereira Teodoro",
              "E-mail": "paulapteodoro@yahoo.com.br",
              "CPF": "101.586.956-40"
          },
          {
              "Nome": "Paula Silva Maia",
              "E-mail": "paulamaia1406@hotmail.com",
              "CPF": "028.349.225-27"
          },
          {
              "Nome": "Pauline Christina Campos Martins Ferreira",
              "E-mail": "paulinecmferreira@gmail.com",
              "CPF": "120.752.816-10"
          },
          {
              "Nome": "Paulo Affonso Salles Figueira",
              "E-mail": "pauloasfigueira@gmail.com",
              "CPF": "006.881.426-72"
          },
          {
              "Nome": "Paulo Alexandre GonÇalves Batista",
              "E-mail": "paulo.pagb@gmail.com",
              "CPF": "035.930.556-35"
          },
          {
              "Nome": "Paulo Cesar de Oliveira",
              "E-mail": "femininaclinica@yahoo.com.br",
              "CPF": "167.521.476-04"
          },
          {
              "Nome": "Paulo Henrique Alves Caetano Chaves",
              "E-mail": "paulochavesto@gmail.com",
              "CPF": "860.643.636-49"
          },
          {
              "Nome": "Paulo Henrique Boy Torres",
              "E-mail": "paulo.boy@gmail.com",
              "CPF": "827.590.496-04"
          },
          {
              "Nome": "Paulo Macedo de Oliveira Leite",
              "E-mail": "paulomoleite@gmail.com",
              "CPF": "515.569.366-72"
          },
          {
              "Nome": "Paulo Marcio Barbosa",
              "E-mail": "paulombarbosa@hotmail.com",
              "CPF": "295.288.446-34"
          },
          {
              "Nome": "Paulo Roberto de Castro Penna",
              "E-mail": "paulorcpenna@bol.com.br",
              "CPF": "130.839.106-49"
          },
          {
              "Nome": "Pedro Arthur Trad Filho",
              "E-mail": "pedro.trad@uol.com.br",
              "CPF": "529.417.796-04"
          },
          {
              "Nome": "Pedro Corradi Sander",
              "E-mail": "pcorradisander@gmail.com",
              "CPF": "109.281.366-71"
          },
          {
              "Nome": "Pedro Henrique Amorim Oliveira",
              "E-mail": "pedro.hao16@gmail.com",
              "CPF": "157.992.497-20"
          },
          {
              "Nome": "Pedro Henrique Tannure Saraiva",
              "E-mail": "ptannure@yahoo.com.br",
              "CPF": "058.872.456-46"
          },
          {
              "Nome": "Pedro Raffael Farias Ferreira",
              "E-mail": "prff16@yahoo.com.br",
              "CPF": "033.605.705-96"
          },
          {
              "Nome": "Poliana Cristina Ferreira dos Santos",
              "E-mail": "polusferreira@gmail.com",
              "CPF": "113.711.716-88"
          },
          {
              "Nome": "Poliana de Assis Faraj",
              "E-mail": "polianafaraj@hotmail.com",
              "CPF": "035.979.816-07"
          },
          {
              "Nome": "Poliana Ferreira Martins Tavares",
              "E-mail": "polianafmtavares@gmail.com",
              "CPF": "949.862.906-49"
          },
          {
              "Nome": "Pollyanna Faria Fradico",
              "E-mail": "pollyannaffradico@gmail.com",
              "CPF": "106.190.056-88"
          },
          {
              "Nome": "Potyra Nascimento Dias",
              "E-mail": "potyradias@hotmail.com",
              "CPF": "050.842.936-61"
          },
          {
              "Nome": "Priscila Santiago Faria",
              "E-mail": "priscilasantiagofaria93@gmail.com",
              "CPF": "072.820.216-60"
          },
          {
              "Nome": "Priscilla Azevedo de Morais Castro Mafia",
              "E-mail": "priamcastro@yahoo.com.br",
              "CPF": "079.190.306-09"
          },
          {
              "Nome": "Priscilla Moreira de Oliveira",
              "E-mail": "pribellei@outlook.com",
              "CPF": "029.493.716-12"
          },
          {
              "Nome": "Priscilla Rossi Baleeiro Marcos",
              "E-mail": "prossibaleeiro@icloud.com",
              "CPF": "053.329.846-69"
          },
          {
              "Nome": "Priscilla Victoria Pinto",
              "E-mail": "pri_vic@hotmail.com",
              "CPF": "065.420.766-62"
          },
          {
              "Nome": "Quesia Tamara Mirante Ferreira Villamil",
              "E-mail": "contato@quesiavillamil.com.br",
              "CPF": "039.500.706-21"
          },
          {
              "Nome": "Rachel Silviano BrandÃo Correa Lima",
              "E-mail": "rachelsilviano@gmail.com",
              "CPF": "561.046.696-20"
          },
          {
              "Nome": "Rafael Batista de Oliveira",
              "E-mail": "RAFABATISTADEOLIVEIRA@GMAIL.COM",
              "CPF": "061.077.136-11"
          },
          {
              "Nome": "Rafael de Souza Menezes",
              "E-mail": "rafael7lagoas@yahoo.com.br",
              "CPF": "015.967.966-42"
          },
          {
              "Nome": "Rafaela Pereira Pinheiro",
              "E-mail": "rafaelapepin@gmail.com",
              "CPF": "126.553.466-70"
          },
          {
              "Nome": "Rafaela Saullo Gonçalves",
              "E-mail": "rafasaullo@hotmail.com",
              "CPF": "096.132.106-79"
          },
          {
              "Nome": "Rafaela Tavares Mendes",
              "E-mail": "rafaela.mendes150@gmail.com",
              "CPF": "129.612.186-08"
          },
          {
              "Nome": "Rafaella Alves Silva",
              "E-mail": "rafaella_as@outlook.com.br",
              "CPF": "111.302.346-57"
          },
          {
              "Nome": "Raissa Duarte Rocha Dias",
              "E-mail": "raissaduarterochadias@gmail.com",
              "CPF": "147.342.636-71"
          },
          {
              "Nome": "Raissa Sousa Amaral",
              "E-mail": "rah.amaral@hotmail.com",
              "CPF": "077.501.596-22"
          },
          {
              "Nome": "Ramon Prado de Andrade",
              "E-mail": "ramon.ibce@gmail.com",
              "CPF": "023.407.495-73"
          },
          {
              "Nome": "Raphaela Cristina Conrado Carvalho Silvério",
              "E-mail": "raphaelaconrado@yahoo.com.br",
              "CPF": "092.150.296-64"
          },
          {
              "Nome": "Raphaela Cristina Victor Moreira",
              "E-mail": "raphacrisvmoreira@gmail.com",
              "CPF": "136.403.586-35"
          },
          {
              "Nome": "Raquel Antunes de Moraes",
              "E-mail": "raquel.antunesmoraes@gmail.com",
              "CPF": "128.990.836-27"
          },
          {
              "Nome": "Raquel Barros Borges",
              "E-mail": "draraquelbarrosb@gmail.com",
              "CPF": "126.631.756-25"
          },
          {
              "Nome": "Raquel Camargos Borges",
              "E-mail": "raquel05cb@gmail.com",
              "CPF": "109.165.106-03"
          },
          {
              "Nome": "Rayana Rolla Campos",
              "E-mail": "rayanarc@hotmail.com",
              "CPF": "094.724.396-83"
          },
          {
              "Nome": "Rayane Stefanie Botelho Fonseca",
              "E-mail": "rayanestefanie@gmail.com",
              "CPF": "080.299.826-74"
          },
          {
              "Nome": "Rayra Amana Macedo Maciel",
              "E-mail": "rayraamana@gmail.com",
              "CPF": "113.947.006-01"
          },
          {
              "Nome": "Rayssa Machado Marques",
              "E-mail": "rayssamedx@gmail.com",
              "CPF": "046.437.811-73"
          },
          {
              "Nome": "Rebeca Maria Siqueira da Silva",
              "E-mail": "rebecamasi@gmail.com",
              "CPF": "438.925.898-28"
          },
          {
              "Nome": "Rebeca Santos Garcia",
              "E-mail": "rebecasgarcia@gmail.com",
              "CPF": "063.090.336-03"
          },
          {
              "Nome": "Regina AmÉlia Lopes Pessoa de Aguiar",
              "E-mail": "regina.alpa@gmail.com",
              "CPF": "486.659.246-04"
          },
          {
              "Nome": "Reinaldo Duraes",
              "E-mail": "reinaldoduraes@gmail.com",
              "CPF": "087.166.176-49"
          },
          {
              "Nome": "Renata Barbosa Zica",
              "E-mail": "renatazica12@hotmail.com",
              "CPF": "106.329.816-44"
          },
          {
              "Nome": "Renata Garcia Abrão Pereira",
              "E-mail": "renata_abrao@outlook.com",
              "CPF": "084.600.996-01"
          },
          {
              "Nome": "Renata Gouvea Hollunder",
              "E-mail": "retalunder@hotmail.com",
              "CPF": "028.485.771-85"
          },
          {
              "Nome": "Renata Murad Macedo",
              "E-mail": "remurad@terra.com.br",
              "CPF": "001.720.366-07"
          },
          {
              "Nome": "Renata Patricia de Sousa Oliveira",
              "E-mail": "dajore@uol.com.br",
              "CPF": "517.552.116-00"
          },
          {
              "Nome": "Renata Roberto Diniz",
              "E-mail": "renatinha_rdiniz@yahoo.com.br",
              "CPF": "832.534.596-91"
          },
          {
              "Nome": "Renato Ajeje",
              "E-mail": "ajejerenato@gmail.com",
              "CPF": "397.849.836-72"
          },
          {
              "Nome": "Renato Franco Ciodaro",
              "E-mail": "renatociodaro@yahoo.com.br",
              "CPF": "011.351.556-15"
          },
          {
              "Nome": "Renato Laercio Teixeira dos Santos",
              "E-mail": "clinicarenatolaercio@gmail.com",
              "CPF": "113.019.106-00"
          },
          {
              "Nome": "Renato Marques Viana",
              "E-mail": "rm.viana40@uol.com.br",
              "CPF": "844.168.236-49"
          },
          {
              "Nome": "Renilton Aires Lima",
              "E-mail": "reniltonn@hotmail.com",
              "CPF": "036.386.826-76"
          },
          {
              "Nome": "Ricardo Aureliano Veado",
              "E-mail": "ricveado@hotmail.com",
              "CPF": "311.224.936-49"
          },
          {
              "Nome": "Ricardo Cesar AraÚjo Drumond",
              "E-mail": "ricardodrumond5@gmail.com",
              "CPF": "027.325.576-25"
          },
          {
              "Nome": "Ricardo Mello Marinho",
              "E-mail": "ricardommarinho@gmail.com",
              "CPF": "417.520.156-49"
          },
          {
              "Nome": "Ricardo Romualdo de Sa",
              "E-mail": "ricardorpm31@icloud.com",
              "CPF": "091.986.356-62"
          },
          {
              "Nome": "Rimack Antonio Rosa Almeida",
              "E-mail": "rimack@live.com",
              "CPF": "349.846.906-15"
          },
          {
              "Nome": "Rita de Cassia Freddi Camara",
              "E-mail": "ritacfreddi@hotmail.com",
              "CPF": "678.940.386-87"
          },
          {
              "Nome": "Rita Teresinha Maciel Motta",
              "E-mail": "ritatmmotta@gmail.com",
              "CPF": "258.234.266-15"
          },
          {
              "Nome": "Rivia Mara Lamaita",
              "E-mail": "rivia.lamaita@gmail.com",
              "CPF": "841.539.466-72"
          },
          {
              "Nome": "Roberta Chaparro Rodrigues Alves Arruda",
              "E-mail": "robertaarruda12@yahoo.com.br",
              "CPF": "128.972.616-76"
          },
          {
              "Nome": "Roberta Coutinho Vasconcelos",
              "E-mail": "robertacoutinhovas@gmail.com",
              "CPF": "129.785.596-59"
          },
          {
              "Nome": "Roberta Feital Xavier",
              "E-mail": "robertafeital@yahoo.com.br",
              "CPF": "070.754.656-78"
          },
          {
              "Nome": "Roberta Junqueira de Lima",
              "E-mail": "robertajunqueira1@gmail.com",
              "CPF": "764.247.076-20"
          },
          {
              "Nome": "Roberto Carlos Machado",
              "E-mail": "robertocarlosmachado@yahoo.com.br",
              "CPF": "235.539.876-34"
          },
          {
              "Nome": "Roberto de Oliveira Galvao",
              "E-mail": "galvao.roberto@yahoo.com.br",
              "CPF": "212.655.696-49"
          },
          {
              "Nome": "Roberto Nicola Fratari",
              "E-mail": "nicolafratari@hotmail.com",
              "CPF": "606.328.106-10"
          },
          {
              "Nome": "Roberto Teles da Silva",
              "E-mail": "robtelles@uol.com.br",
              "CPF": "378.298.076-04"
          },
          {
              "Nome": "Robson Silva Carvalho Monteiro",
              "E-mail": "robsonscmonteiro@hotmail.com",
              "CPF": "002.129.221-30"
          },
          {
              "Nome": "Rodney Borges Magalhaes",
              "E-mail": "rodneybmagalhaes@gmail.com",
              "CPF": "425.055.856-87"
          },
          {
              "Nome": "Rodrigo de Carvalho Ribeiro",
              "E-mail": "rodrigo@cegonha.med.br",
              "CPF": "469.563.956-49"
          },
          {
              "Nome": "Rodrigo Ribeiro Tonelli",
              "E-mail": "rodrigo.tonelli@ig.com.br",
              "CPF": "722.072.996-00"
          },
          {
              "Nome": "Rodrigo Teofilo Tavares",
              "E-mail": "roteota@gmail.com",
              "CPF": "902.428.826-68"
          },
          {
              "Nome": "Rodrigo Thomé Junqueira",
              "E-mail": "rodrigojunkz@yahoo.com.br",
              "CPF": "059.808.556-45"
          },
          {
              "Nome": "RogÉria Andrade Werneck",
              "E-mail": "rogeriawerneck@gmail.com",
              "CPF": "055.421.776-70"
          },
          {
              "Nome": "Rogéria Caroline Lima Amorim",
              "E-mail": "rogeria.amorim@hotmail.com",
              "CPF": "118.865.486-17"
          },
          {
              "Nome": "Rogerio Becattini",
              "E-mail": "robecattini@gmail.com",
              "CPF": "790.187.006-06"
          },
          {
              "Nome": "Rogerio de Souza Andrade",
              "E-mail": "rogeriosandrade@terra.com.br",
              "CPF": "495.455.156-00"
          },
          {
              "Nome": "Rogerio Nacur Nagem",
              "E-mail": "rognacur@hotmail.com",
              "CPF": "335.913.006-59"
          },
          {
              "Nome": "Rogerio Teixeira Cesar",
              "E-mail": "rogergin201010@hotmail.com",
              "CPF": "285.357.826-72"
          },
          {
              "Nome": "Rogerio Vicente de Lima Ferreira",
              "E-mail": "r-vicente-ferreira@uol.com.br",
              "CPF": "520.484.206-30"
          },
          {
              "Nome": "Romerson Martins Franco",
              "E-mail": "medicina@drromerson.com.br",
              "CPF": "296.371.396-72"
          },
          {
              "Nome": "RÔmulo de Abreu Netto",
              "E-mail": "romulonetto@yahoo.com.br",
              "CPF": "831.653.046-53"
          },
          {
              "Nome": "Ronat SodrÉ Gomes Resende",
              "E-mail": "ronatresende10@gmail.com",
              "CPF": "002.745.786-97"
          },
          {
              "Nome": "Rosaima Estrada Duquesne",
              "E-mail": "rosaima1978@yahoo.com",
              "CPF": "067.749.091-75"
          },
          {
              "Nome": "Rosane Abramo",
              "E-mail": "rosaneabramo@yahoo.com.br",
              "CPF": "535.493.506-78"
          },
          {
              "Nome": "Rosangela Lopes Miranda Rodrigues",
              "E-mail": "rosalmr@terra.com.br",
              "CPF": "769.478.076-20"
          },
          {
              "Nome": "Rosangela Machado Pereira Malvaccini",
              "E-mail": "rosangelagineco@yahoo.com.br",
              "CPF": "331.010.516-49"
          },
          {
              "Nome": "Rosekeila SimÕes Nomelini",
              "E-mail": "rosekeila@terra.com.br",
              "CPF": "036.512.356-02"
          },
          {
              "Nome": "Rubens Correa da Silva",
              "E-mail": "ru.correa781@gmail.com",
              "CPF": "269.127.086-68"
          },
          {
              "Nome": "Rubens Lene Carvalho Tavares",
              "E-mail": "rubens.ufmg@gmail.com",
              "CPF": "636.066.826-20"
          },
          {
              "Nome": "Rubens Soares da Costa",
              "E-mail": "rscostamg@uol.com.br",
              "CPF": "862.213.536-53"
          },
          {
              "Nome": "SÁlua Oliveira Calil de Paula",
              "E-mail": "saluacalil@gmail.com",
              "CPF": "035.237.896-48"
          },
          {
              "Nome": "Salvador Pitchon",
              "E-mail": "salvadorpitchon@yahoo.com.br",
              "CPF": "359.873.596-00"
          },
          {
              "Nome": "Samantha Araújo Vieira",
              "E-mail": "samgbrasil@yahoo.com.br",
              "CPF": "064.614.716-18"
          },
          {
              "Nome": "Samille Alves de Souza Franco",
              "E-mail": "samillealves51@gmail.com",
              "CPF": "144.323.356-02"
          },
          {
              "Nome": "Samuel Conrado de Oliveira MourÃo",
              "E-mail": "samuel_mourao@yahoo.com.br",
              "CPF": "004.649.506-19"
          },
          {
              "Nome": "Sandra Beatriz Mangucci Callegari",
              "E-mail": "sandrabmangucci@gmail.com",
              "CPF": "828.571.306-78"
          },
          {
              "Nome": "Sandro Fialho do Carmo",
              "E-mail": "sandrogineco@yahoo.com.br",
              "CPF": "031.350.576-40"
          },
          {
              "Nome": "Sandro Magnavita Sabino",
              "E-mail": "sandromsabino@gmail.com",
              "CPF": "002.329.896-05"
          },
          {
              "Nome": "Sangela Cunha Pereira",
              "E-mail": "sangela_cpereira@hotmail.com",
              "CPF": "094.643.966-44"
          },
          {
              "Nome": "Sarah Menezes de Oliveira",
              "E-mail": "sarahmenezes18@outlook.com",
              "CPF": "124.599.166-39"
          },
          {
              "Nome": "Sarah Tereza Siqueira",
              "E-mail": "sarahtzsiqueira@hotmail.com",
              "CPF": "115.922.486-24"
          },
          {
              "Nome": "Satomi Shikanai",
              "E-mail": "satomis20@yahoo.com.br",
              "CPF": "059.539.856-14"
          },
          {
              "Nome": "Sayonara Heleonora de Figueiredo Correa Figueiredo",
              "E-mail": "silvio.figueiredo@terra.com.br",
              "CPF": "652.749.116-68"
          },
          {
              "Nome": "SÉphora Augusta Cardoso Queiroz",
              "E-mail": "sephora_cardoso@yahoo.com.br",
              "CPF": "044.427.076-00"
          },
          {
              "Nome": "Sergimar Padovezi Miranda",
              "E-mail": "sergimar@terra.com.br",
              "CPF": "152.648.071-91"
          },
          {
              "Nome": "Sergio Curi",
              "E-mail": "sergiocuri@gmail.com",
              "CPF": "238.117.496-68"
          },
          {
              "Nome": "Sergio Feres Mansur",
              "E-mail": "sfmansur@gmail.com",
              "CPF": "632.102.406-63"
          },
          {
              "Nome": "Sergio Henrique Lopes Marques",
              "E-mail": "dr.sergiohenrique@gmail.com",
              "CPF": "550.933.536-04"
          },
          {
              "Nome": "SÉrgio Vilela de Oliveira",
              "E-mail": "sergiovilela.o@hotmail.com",
              "CPF": "909.018.866-53"
          },
          {
              "Nome": "Sibelly Vaz de Mello Loureiro Ferreira",
              "E-mail": "sibelly.vaz@gmail.com",
              "CPF": "117.767.696-60"
          },
          {
              "Nome": "Silena Cristo Moreira",
              "E-mail": "silenacristo@yahoo.com.br",
              "CPF": "030.957.376-96"
          },
          {
              "Nome": "Silvana Mara Vilaca Castagna Clo",
              "E-mail": "silvanacclo@gmail.com",
              "CPF": "056.517.436-34"
          },
          {
              "Nome": "Silvania de Cassia Vieira Archangelo",
              "E-mail": "svieiraarchangelo@gmail.com",
              "CPF": "693.613.126-34"
          },
          {
              "Nome": "Silvia Siqueira",
              "E-mail": "silviasiqueirabem@hotmail.com",
              "CPF": "653.924.697-87"
          },
          {
              "Nome": "Simone Barreto de Aquino",
              "E-mail": "sbaquino66@gmail.com",
              "CPF": "737.410.436-72"
          },
          {
              "Nome": "Simone Floresta Leal",
              "E-mail": "sifloresta@hotmail.com",
              "CPF": "092.685.266-38"
          },
          {
              "Nome": "Sinara Resende Bueno",
              "E-mail": "sinarabueno6@hotmail.com",
              "CPF": "073.642.866-67"
          },
          {
              "Nome": "Sofia Assis Alvarenga",
              "E-mail": "sofiaassisalvarenga@gmail.com",
              "CPF": "102.180.756-77"
          },
          {
              "Nome": "Sofia Guerra Machado",
              "E-mail": "drasofiaguerramachado@gmail.com",
              "CPF": "130.026.266-43"
          },
          {
              "Nome": "Sofia GuimarÃes Piancastelli",
              "E-mail": "sofiapiancastelli@gmail.com",
              "CPF": "095.561.646-85"
          },
          {
              "Nome": "Sofia Machado Talma",
              "E-mail": "sofiatalma98@gmail.com",
              "CPF": "141.182.106-81"
          },
          {
              "Nome": "Sofia Sturzeneker Porto",
              "E-mail": "sofiasporto13@gmail.com",
              "CPF": "138.897.206-92"
          },
          {
              "Nome": "Solange Queiroz de Lucena Diniz",
              "E-mail": "lucenasol@yahoo.com.br",
              "CPF": "557.080.217-72"
          },
          {
              "Nome": "Sonia Fonseca de Araujo",
              "E-mail": "sfaraujo10@gmail.com",
              "CPF": "684.528.026-68"
          },
          {
              "Nome": "Sonia Mara Batista dos Santos Resende",
              "E-mail": "soniasamonte1@hotmail.com",
              "CPF": "385.422.696-91"
          },
          {
              "Nome": "Sonia Tuyama Asajiro",
              "E-mail": "stasajiro@yahoo.com.br",
              "CPF": "871.396.346-53"
          },
          {
              "Nome": "Stefania Carolina Sousa Castanheira",
              "E-mail": "stefaniacscastanheira@gmail.com",
              "CPF": "080.892.266-12"
          },
          {
              "Nome": "Stefany Oliveira Mendes",
              "E-mail": "stefanymendes15@hotmail.com",
              "CPF": "114.724.556-81"
          },
          {
              "Nome": "Stephanie Alves de Souza",
              "E-mail": "stephanie.as@hotmail.com",
              "CPF": "080.857.716-67"
          },
          {
              "Nome": "Stephany Brini de Mendonça",
              "E-mail": "stephany.b.mendonca@hotmail.com",
              "CPF": "113.711.586-65"
          },
          {
              "Nome": "Sthefane Kelly Quaresma Santos",
              "E-mail": "sthekelly3@gmail.com",
              "CPF": "106.086.386-33"
          },
          {
              "Nome": "Sthefanie Ferreira Caires Aguiar",
              "E-mail": "sthefaniefca@hotmail.com",
              "CPF": "016.503.305-37"
          },
          {
              "Nome": "Suzana Maria Pires do Rio",
              "E-mail": "suzana.rio7328@gmail.com",
              "CPF": "474.632.956-72"
          },
          {
              "Nome": "Suzete Rodrigues Gomes",
              "E-mail": "suzetegomesgineco@yahoo.com.br",
              "CPF": "491.660.696-53"
          },
          {
              "Nome": "Sylvia Cristina Santos Lage",
              "E-mail": "sylviacslage@hotmail.com",
              "CPF": "033.588.216-17"
          },
          {
              "Nome": "Tadeu Coutinho",
              "E-mail": "tcoutinhojf@yahoo.com.br",
              "CPF": "180.772.186-87"
          },
          {
              "Nome": "Taina Pereira",
              "E-mail": "tainaapereira@hotmail.com",
              "CPF": "128.921.946-01"
          },
          {
              "Nome": "Tainá Wendling Gama",
              "E-mail": "taina.wgama24@gmail.com",
              "CPF": "148.583.426-03"
          },
          {
              "Nome": "Talita Alvarenga Petrini Carvalho",
              "E-mail": "talita-alvarenga@hotmail.com",
              "CPF": "110.608.686-44"
          },
          {
              "Nome": "Talita Motta Moreira Lacerda",
              "E-mail": "talitamotta18@gmail.com",
              "CPF": "094.270.716-80"
          },
          {
              "Nome": "Talles Dias Orsi",
              "E-mail": "tallesorsi64@gmail.com",
              "CPF": "536.894.376-87"
          },
          {
              "Nome": "Talvanes Ferrari Parizio",
              "E-mail": "ferraripariziomd@hotmail.com",
              "CPF": "583.586.687-91"
          },
          {
              "Nome": "Tamara Correa Magalhães",
              "E-mail": "tamaracmagalhaes@hotmail.com",
              "CPF": "087.060.256-09"
          },
          {
              "Nome": "Tamiris Tiango Gabriel",
              "E-mail": "tamitiango@gmail.com",
              "CPF": "103.813.386-65"
          },
          {
              "Nome": "Tania Mara Giarolla de Matos",
              "E-mail": "tania.giarolla@yahoo.com.br",
              "CPF": "356.529.426-49"
          },
          {
              "Nome": "Tania Paszternak Matta Machado Paixao",
              "E-mail": "taniapasz@hotmail.com",
              "CPF": "758.149.276-15"
          },
          {
              "Nome": "Tàssylla Caroline Ferreira Pereira",
              "E-mail": "tassyllamed@gmail.com",
              "CPF": "044.005.981-01"
          },
          {
              "Nome": "Tatiana Perlatto Moura",
              "E-mail": "tatianaperlatto@gmail.com",
              "CPF": "126.497.346-20"
          },
          {
              "Nome": "Tatiane Celeiro Nascimento",
              "E-mail": "tatianeceleiro@hotmail.com",
              "CPF": "118.768.786-30"
          },
          {
              "Nome": "Tatiane Ventura GonÇalves",
              "E-mail": "thatymgh@hotmail.com",
              "CPF": "082.866.496-05"
          },
          {
              "Nome": "Tauane Larissa Menao",
              "E-mail": "tauanemenao05@gmail.com",
              "CPF": "082.524.946-50"
          },
          {
              "Nome": "Tayná Rodrigues Félix",
              "E-mail": "taynarf0506@gmail.com",
              "CPF": "144.099.986-41"
          },
          {
              "Nome": "Tchayra Tatiane Souza",
              "E-mail": "tchayrasouza@gmail.com",
              "CPF": "114.873.866-56"
          },
          {
              "Nome": "Telma Maria Rossi de Figueiredo Franco",
              "E-mail": "telma_franco@yahoo.com.br",
              "CPF": "221.979.746-53"
          },
          {
              "Nome": "Teresa Cristina Prata Pace",
              "E-mail": "teresapratapace@yahoo.com.br",
              "CPF": "575.205.266-15"
          },
          {
              "Nome": "Tetzi Oliveira BrandÃo",
              "E-mail": "tetzibrandao@yahoo.com.br",
              "CPF": "280.848.748-70"
          },
          {
              "Nome": "Thaiana dos Reis Rodrigues",
              "E-mail": "thaiana_92@hotmail.com",
              "CPF": "114.962.956-84"
          },
          {
              "Nome": "Thaís Abreu Santos Reggiani",
              "E-mail": "thaisabreureggiani@gmail.com",
              "CPF": "057.925.586-71"
          },
          {
              "Nome": "Thais Arashiro de Paula",
              "E-mail": "thaisarashiro@yahoo.com.br",
              "CPF": "278.087.608-54"
          },
          {
              "Nome": "Thaís Cançado Leite",
              "E-mail": "cancadothais@gmail.com",
              "CPF": "139.254.056-90"
          },
          {
              "Nome": "Thais Cristina de Faria Silva",
              "E-mail": "thaiscristina.defaria@gmail.com",
              "CPF": "109.365.596-83"
          },
          {
              "Nome": "Thais de Paula Silva Pilio",
              "E-mail": "thaispilio17@gmail.com",
              "CPF": "131.013.326-30"
          },
          {
              "Nome": "Thaís Faria Rodrigues Lopes",
              "E-mail": "tlopesr@icloud.com",
              "CPF": "110.223.856-23"
          },
          {
              "Nome": "Thais Fernandes Campos",
              "E-mail": "thaisfercampos@hotmail.com",
              "CPF": "117.300.196-41"
          },
          {
              "Nome": "Thaís Ferreira Souza",
              "E-mail": "thaisfsouza1312@gmail.com",
              "CPF": "125.137.586-33"
          },
          {
              "Nome": "ThaÍs FranÇa de AraÚjo",
              "E-mail": "thais.pleni@gmail.com",
              "CPF": "073.393.376-95"
          },
          {
              "Nome": "Thaís Guimarães de Faria",
              "E-mail": "thais.cmmg@gmail.com",
              "CPF": "115.751.206-23"
          },
          {
              "Nome": "Thaís Oliveira Meireles",
              "E-mail": "thais.o.meireles@gmail.com",
              "CPF": "112.836.586-31"
          },
          {
              "Nome": "Thais Syrio Amaral",
              "E-mail": "thathamed@hotmail.com",
              "CPF": "077.238.946-27"
          },
          {
              "Nome": "ThaÍs Vilela de Pinho Andrade",
              "E-mail": "thaisvpa@hotmail.com",
              "CPF": "065.356.036-28"
          },
          {
              "Nome": "Thaisa Sousa Rezende",
              "E-mail": "tatasrezende@yahoo.com.br",
              "CPF": "105.966.696-07"
          },
          {
              "Nome": "Thales Henrique Lamounier Xavier",
              "E-mail": "thaleslamounier28@hotmail.com",
              "CPF": "111.887.836-10"
          },
          {
              "Nome": "Thallyta Fernandes Moura Tristão",
              "E-mail": "drathallyta@hotmail.com",
              "CPF": "068.834.596-42"
          },
          {
              "Nome": "Thamara Ferreira de Assis",
              "E-mail": "thamara.f.a@hotmail.com",
              "CPF": "103.810.356-89"
          },
          {
              "Nome": "Thamiris Vieira de Carvalho",
              "E-mail": "thamirisvcarvalho@gmail.com",
              "CPF": "104.910.336-05"
          },
          {
              "Nome": "Thamirys Pereira Rodrigues",
              "E-mail": "thamirysrodrigues1975@gmail.com",
              "CPF": "113.994.536-02"
          },
          {
              "Nome": "Thassiane Kelly Quintão Miranda",
              "E-mail": "thassiane_miranda@yahoo.com.br",
              "CPF": "122.742.376-46"
          },
          {
              "Nome": "Thays Dias Lopes",
              "E-mail": "thays.dias5@icloud.com",
              "CPF": "098.289.206-38"
          },
          {
              "Nome": "Thelma de Figueiredo E Silva",
              "E-mail": "thelmadefsilva@yahoo.com.br",
              "CPF": "540.388.476-91"
          },
          {
              "Nome": "Thiago Souza Capatti",
              "E-mail": "thiago.scapatti@gmail.com",
              "CPF": "082.151.736-83"
          },
          {
              "Nome": "Thomas Cunze",
              "E-mail": "thomas.cunze@gmail.com",
              "CPF": "013.018.406-37"
          },
          {
              "Nome": "Tonia Duarte Fonseca",
              "E-mail": "tonia.df@hotmail.com",
              "CPF": "198.009.916-20"
          },
          {
              "Nome": "Tulio Tadeu Marcolini",
              "E-mail": "tulio.marcolini@ufu.br",
              "CPF": "549.338.628-34"
          },
          {
              "Nome": "Uaci Tupinambas Parreiras",
              "E-mail": "uacit@hotmail.com",
              "CPF": "316.091.716-91"
          },
          {
              "Nome": "Ubiratan de Brito Mota",
              "E-mail": "ubiratan.mota@yahoo.com.br",
              "CPF": "160.400.406-10"
          },
          {
              "Nome": "Valber Jose Zago",
              "E-mail": "valberzago@gmail.com",
              "CPF": "517.554.836-00"
          },
          {
              "Nome": "Valdir Jose da Costa",
              "E-mail": "dorisvalbh@gmail.com",
              "CPF": "006.484.266-53"
          },
          {
              "Nome": "Valéria Bastos Marquetti",
              "E-mail": "vahmarquetti11@gmail.com",
              "CPF": "117.437.986-36"
          },
          {
              "Nome": "Valeria Bernadete Claudio Campos",
              "E-mail": "valeria_campos@yahoo.com.br",
              "CPF": "815.679.446-04"
          },
          {
              "Nome": "ValÉria PatrÍcia Spina",
              "E-mail": "vapspina@gmail.com",
              "CPF": "624.049.541-72"
          },
          {
              "Nome": "Valmir Oliveira de Almeida",
              "E-mail": "valmir.o.almeida@gmail.com",
              "CPF": "601.661.266-91"
          },
          {
              "Nome": "Vana Diniz Rabelo Bicalho",
              "E-mail": "vanabicalho@hotmail.com",
              "CPF": "586.058.866-68"
          },
          {
              "Nome": "Vanessa Costa de Carvalho",
              "E-mail": "vanefofa@hotmail.com",
              "CPF": "061.354.336-01"
          },
          {
              "Nome": "Vanessa do Carmo Ferreira Khachikian",
              "E-mail": "vancfs@yahoo.com.br",
              "CPF": "045.887.366-71"
          },
          {
              "Nome": "Vanessa Fátima Fonseca",
              "E-mail": "vanessafatimafonseca@gmail.com",
              "CPF": "066.383.806-13"
          },
          {
              "Nome": "Vanessa Gomes Rogana",
              "E-mail": "vgrogana@uol.com.br",
              "CPF": "685.761.456-34"
          },
          {
              "Nome": "Vânia Caroline de Macedo E Silva",
              "E-mail": "carolmacedo27@gmail.com",
              "CPF": "055.522.246-20"
          },
          {
              "Nome": "Vania da Conceicao Rezende Neiva",
              "E-mail": "vanianeiva@uol.com.br",
              "CPF": "497.250.686-53"
          },
          {
              "Nome": "Vania Maria Pereira de Castro",
              "E-mail": "consultoriovania@yahoo.com.br",
              "CPF": "645.540.906-04"
          },
          {
              "Nome": "Venera Etienne Goncalves E Silva",
              "E-mail": "etiennevenera@gmail.com",
              "CPF": "081.510.536-31"
          },
          {
              "Nome": "Vera Lucia Lopes Furtado",
              "E-mail": "vera.ll.furtado@gmail.com",
              "CPF": "541.860.306-00"
          },
          {
              "Nome": "Verônica Gil de Mendonça",
              "E-mail": "veronicagmendonca@gmail.com",
              "CPF": "125.992.306-16"
          },
          {
              "Nome": "Verônica Tavares Ribeiro",
              "E-mail": "vetavares05@gmail.com",
              "CPF": "118.380.456-35"
          },
          {
              "Nome": "Vicente de Paula Lessa do Valle",
              "E-mail": "vplvalle@gmail.com",
              "CPF": "339.662.306-15"
          },
          {
              "Nome": "Victor de Lima Rodrigues",
              "E-mail": "victor.de.lima@hotmail.com",
              "CPF": "114.973.856-10"
          },
          {
              "Nome": "Victor de Oliveira Flausino",
              "E-mail": "victoroflausino@gmail.com",
              "CPF": "111.037.376-78"
          },
          {
              "Nome": "Victor Hugo de Melo",
              "E-mail": "victormelo2401@gmail.com",
              "CPF": "200.140.406-97"
          },
          {
              "Nome": "Victoria Barreto de Araújo Porto",
              "E-mail": "vicbporto@gmail.com",
              "CPF": "125.860.236-92"
          },
          {
              "Nome": "Victoria Furquim Werneck Marinho",
              "E-mail": "victoriamarinho@gmail.com",
              "CPF": "099.582.116-02"
          },
          {
              "Nome": "Victoria Maria Jorge Freitas Colobó",
              "E-mail": "toricolobo@hotmail.com",
              "CPF": "073.051.665-29"
          },
          {
              "Nome": "Vinicius Franco da Veiga",
              "E-mail": "francodaveiga@gmail.com",
              "CPF": "428.627.796-87"
          },
          {
              "Nome": "Vinícius Gustavo de Carvalho Moura",
              "E-mail": "viniciusmouramed@gmail.com",
              "CPF": "117.394.646-21"
          },
          {
              "Nome": "Vinicius Santos Nascimento",
              "E-mail": "viniciusantos.nascimento@gmail.com",
              "CPF": "107.752.336-09"
          },
          {
              "Nome": "Virgilino QuintÃo Torres Cruz",
              "E-mail": "virgilinoc@bol.com.br",
              "CPF": "717.875.936-49"
          },
          {
              "Nome": "Virgínia de Assis Silva",
              "E-mail": "virginia.assis3@gmail.com",
              "CPF": "015.624.596-51"
          },
          {
              "Nome": "Vitor Augusto Alcantara de Oliveira",
              "E-mail": "vitorgineco@gmail.com",
              "CPF": "034.124.956-46"
          },
          {
              "Nome": "Vitoria Bittencourt Neres",
              "E-mail": "bittencourtneresvitoria@gmail.com",
              "CPF": "131.768.126-63"
          },
          {
              "Nome": "Vitória Novaes",
              "E-mail": "DRAVITORIANOVAES@GMAIL.COM",
              "CPF": "119.087.636-12"
          },
          {
              "Nome": "Vitoria Rocha Amaral",
              "E-mail": "vitoriaramaral97@gmail.com",
              "CPF": "103.116.816-89"
          },
          {
              "Nome": "Viveity Hernández Castellón",
              "E-mail": "86viveityhc@gmail.com",
              "CPF": "705.257.946-46"
          },
          {
              "Nome": "Vivian Estavanate de Castro",
              "E-mail": "estavanatev@gmail.com",
              "CPF": "135.571.456-70"
          },
          {
              "Nome": "Viviana Martins Neto",
              "E-mail": "medviviana@gmail.com",
              "CPF": "102.981.886-00"
          },
          {
              "Nome": "Wagner Pinheiro Pinto Villafort",
              "E-mail": "wvillafort@yahoo.com.br",
              "CPF": "345.396.466-72"
          },
          {
              "Nome": "Waldeir Jose de Almeida Junior",
              "E-mail": "waldeiralmeidajr@gmail.com",
              "CPF": "659.222.556-49"
          },
          {
              "Nome": "Welington Reis de Souza",
              "E-mail": "welingtonreisdesouza@gmail.com",
              "CPF": "560.370.906-53"
          },
          {
              "Nome": "Welington Ued Naves",
              "E-mail": "welington_naves@yahoo.com.br",
              "CPF": "945.500.501-87"
          },
          {
              "Nome": "Wilson Batista",
              "E-mail": "wbatmgo@gmail.com",
              "CPF": "124.954.096-87"
          },
          {
              "Nome": "Winnye Marques Ferreira",
              "E-mail": "winnye_marques@hotmail.com",
              "CPF": "026.495.871-30"
          },
          {
              "Nome": "Yahn Rezende de Abreu",
              "E-mail": "yahnrezendeabreu@hotmail.com",
              "CPF": "106.465.866-02"
          },
          {
              "Nome": "Yaline Márcia Batista Pereira E Silva",
              "E-mail": "yalinembpsilva@yahoo.com.br",
              "CPF": "043.523.416-14"
          },
          {
              "Nome": "Yamila Audrey Santos Costa",
              "E-mail": "yamila.audrey@gmail.com",
              "CPF": "022.290.415-17"
          },
          {
              "Nome": "Yara Cristina Barbosa",
              "E-mail": "yaracrisb@gmail.com",
              "CPF": "117.457.836-01"
          },
          {
              "Nome": "Yara Cristina Niquini de Lima",
              "E-mail": "yara17lima@gmail.com",
              "CPF": "085.108.766-30"
          },
          {
              "Nome": "Yara GuimarÃes de SÁ Anacleto",
              "E-mail": "yaraanacleto@uol.com.br",
              "CPF": "970.595.286-87"
          },
          {
              "Nome": "Yara Luiza Castro Felício",
              "E-mail": "yaraluiza02@hotmail.com",
              "CPF": "106.973.076-97"
          },
          {
              "Nome": "Yara Mônica da Silva Oliveira",
              "E-mail": "yara.monica@hotmail.com",
              "CPF": "127.174.836-32"
          },
          {
              "Nome": "Yasmin de Amorim Vieira",
              "E-mail": "yasminamvieira@hotmail.com",
              "CPF": "114.494.366-33"
          },
          {
              "Nome": "Yasmin Dias Netto Alves Guedes",
              "E-mail": "yasmintma@hotmail.com",
              "CPF": "079.513.326-07"
          },
          {
              "Nome": "Yasmin Pereira Vieira",
              "E-mail": "yaspereiravieira@gmail.com",
              "CPF": "065.054.996-10"
          },
          {
              "Nome": "Yasmin Teixeira Silveira Mendes Freire",
              "E-mail": "yasmin.teixeira.sm@gmail.com",
              "CPF": "124.224.516-24"
          }
        ]
      }, {
        name: 'Sociedade de Acadêmicos de Medicina de Minas Gerais',
        shortName: 'SAMMG',
        link: 'https://www.sammg.com.br/',
        alt: 'Logo da SAMMG',
        src: '/logo/sammg.png',
        affiliated: [
          {
            "name": "KARINE ALONSO DOS SANTOS",
            "cpf": "06049284598",
            "email": "karinesantos@alunounifenas.br"
          },
          {
            "name": "ANA LUIZA DE MAGALHAES KOPPERSCHIMIDT",
            "cpf": "12265244600",
            "email": "analuizamag@hotmailcom"
          },
          {
            "name": "PRYSCILLA HELLEN DE CARVALHO JANOARIO",
            "cpf": "12750215650",
            "email": "pryscillahcjanoario@outlookcom"
          },
          {
            "name": "RAFAEL SANTIAGO CYPRESTE",
            "cpf": "12448815623",
            "email": "rafaelcypreste@hotmailcom"
          },
          {
            "name": "IZABELA CRISTINA GOUVEA SILVA",
            "cpf": "13393369601",
            "email": "izabelagouvea@hotmailcom"
          },
          {
            "name": "VICTORIA GOI DE MORAES RODRIGUES",
            "cpf": "09873045694",
            "email": "victoriagmr88@gmailcom"
          },
          {
            "name": "LETICIA MONTEIRO AZEVEDO",
            "cpf": "15712579693",
            "email": "leticiazeved@gmailcom"
          },
          {
            "name": "FELIPE BUZATTI MARINHO CARNEIRO",
            "cpf": "07484926663",
            "email": "felipebuzatti@hotmailcom"
          },
          {
            "name": "EMERSON COSTA DE OLIVEIRA",
            "cpf": "46454194809",
            "email": "emercosta97@gmailcom"
          },
          {
            "name": "NATHALIA LETICIA BORGES DE MATOS",
            "cpf": "46948885870",
            "email": "nathalialeticiamatos@hotmailcom"
          },
          {
            "name": "SAMUEL SOUZA AMADOR",
            "cpf": "09919037656",
            "email": "samuelamador@estudanteufjfbr"
          },
          {
            "name": "HUARA BERBERT CAMARA DE VIDAL",
            "cpf": "08732863675",
            "email": "huaravidal@alunounifenasbr"
          },
          {
            "name": "MIGUEL VICTOR RODRIGUES VILACA",
            "cpf": "14481648694",
            "email": "miguelvilaca2@hotmailcom"
          },
          {
            "name": "LAIS MICHELLE CUNHA",
            "cpf": "13492877680",
            "email": "laismichele22@gmailcom"
          },
          {
            "name": "ISABELA BICALHO COTA LEMOS",
            "cpf": "11146227612",
            "email": "belabclemos@gmailcom"
          },
          {
            "name": "ANNA CAROLINA CORDEIRO PEIXOTO",
            "cpf": "12964270643",
            "email": "annacarolinacordeiro30@gmailcom"
          },
          {
            "name": "NATALIA MARIA RIERA PIMENTA",
            "cpf": "13658532688",
            "email": "nataliariera@hotmailcom"
          },
          {
            "name": "MIRIAN PEREIRA DE OLIVEIRA",
            "cpf": "01840026642",
            "email": "mirianoliveira2211@gmailcom"
          },
          {
            "name": "FERNANDA VALACI PENA",
            "cpf": "12174480638",
            "email": "fernandapenacoro@hotmailcom"
          },
          {
            "name": "BRENDA CAROLINA RODRIGUES CAJAZEIRA",
            "cpf": "12427521612",
            "email": "brendacajazeira@gmailcom"
          },
          {
            "name": "MARIA VIRGINIA SAMUEL AMORIM",
            "cpf": "11108383602",
            "email": "amorimmariavirginia@gmailcom"
          },
          {
            "name": "JULIA DE SA OLIVEIRA",
            "cpf": "14582556620",
            "email": "juliadesaoliveira@gmailcom"
          },
          {
            "name": "MARIANE MORATO MIZERANI",
            "cpf": "12869488602",
            "email": "Marianemizerani@hotmailcom"
          },
          {
            "name": "VICTORIA MIKA MATSUDA",
            "cpf": "07493021198",
            "email": "mikando910@gmailcom"
          },
          {
            "name": "JOICE SUELEN MARTINS ARAUJO",
            "cpf": "11978349661",
            "email": "joice2015enfermagem@hotmailcom"
          },
          {
            "name": "ANNA LUIZA FONTES MENDES",
            "cpf": "86104995535",
            "email": "annafontes29@gmailcom"
          },
          {
            "name": "HENRIQUE SHELTER PEREIRA VIANA",
            "cpf": "09356840695",
            "email": "shelterrique@gmailcom"
          },
          {
            "name": "MARIANA TONELLI RICCI",
            "cpf": "09245248631",
            "email": "maritonelliricci@gmailcom"
          },
          {
            "name": "MIRELLY DE OLIVEIRA PEDROSA SANTOS",
            "cpf": "01652863699",
            "email": "mirellypedrosa@yahoocombr"
          },
          {
            "name": "VITORIA LUISA MARQUES DEMETRIO",
            "cpf": "10898996619",
            "email": "viviluisa16@hotmailcom"
          },
          {
            "name": "LUISA MARIA RODRIGUES DE MOURA",
            "cpf": "11730398642",
            "email": "luisamariarmoura@gmailcom"
          },
          {
            "name": "LUNA MENDES FRANCA",
            "cpf": "08833836673",
            "email": "lulunamendes@gmailcom"
          },
          {
            "name": "ISABELA GALVAO REIS",
            "cpf": "70632355670",
            "email": "isabela01usa@hotmailcom"
          },
          {
            "name": "ELIZA LOMMEZ DE OLIVEIRA",
            "cpf": "10020299613",
            "email": "lommelizmedic@gmailcom"
          },
          {
            "name": "GUILHERME KELLES JUSTE",
            "cpf": "06612829613",
            "email": "guilhermekelles@gmailcom"
          },
          {
            "name": "MARIA EDUARDA PAIVA ANDRADE",
            "cpf": "12955617601",
            "email": "mariaeduardapandrade@gmailcom"
          },
          {
            "name": "NATHALIA FERNANDES DE CASTRO ALVES",
            "cpf": "09149912640",
            "email": "nathy_castro10@hotmailcom"
          },
          {
            "name": "IARA MOREIRA CALDAS",
            "cpf": "11971793647",
            "email": "iaramcaldass@gmailcom"
          },
          {
            "name": "ISABELA MAGALHAES DE LIMA SANTOS",
            "cpf": "11952022614",
            "email": "isamlsbela@gmailcom"
          },
          {
            "name": "MARCOS VINICIUS GONCALVES DA SILVA",
            "cpf": "02323224654",
            "email": "mvgsilva99@gmailcom"
          },
          {
            "name": "LETICIA DE OLIVEIRA GROSSI",
            "cpf": "07378553638",
            "email": "leticiaoliveiragrossi@outlookcom"
          },
          {
            "name": "AMELIA SOARES DE MELO",
            "cpf": "10325621616",
            "email": "amelo0801@gmailcom"
          },
          {
            "name": "MATHEUS BARBOSA COSTA LIMA",
            "cpf": "10339066628",
            "email": "matheusbarbosa0908@outlookcom"
          },
          {
            "name": "ARTHUR BARBOSA COSTA LIMA",
            "cpf": "10339064684",
            "email": "arthurbarbosa01@outlookcom"
          },
          {
            "name": "KATIA DE FREITAS RODRIGUES GUTSEIT",
            "cpf": "74963988615",
            "email": "katiafreitas70@gmailcom"
          },
          {
            "name": "FERNANDA VALADARES GOMES HENRIQUES",
            "cpf": "12705350640",
            "email": "fernandavaladaresh@gmailcom"
          },
          {
            "name": "ANTONIO VICTOR CONDEZ ALAGIA",
            "cpf": "12559116626",
            "email": "antoniovictoralagia@gmailcom"
          },
          {
            "name": "EMANUELLA LOIS MENDES SOUZA COSTA",
            "cpf": "14076156617",
            "email": "emanuellaloismendes@gmailcom"
          },
          {
            "name": "JULIA RIBEIRO FARIA GONTIJO",
            "cpf": "10815428618",
            "email": "juribeiro7@hotmailcom"
          },
          {
            "name": "CAMILLA MAGALHAES DA SILVA",
            "cpf": "05785722658",
            "email": "camillamsilva@yahoocombr"
          },
          {
            "name": "DAPHINE PARDINHO FERNANDES",
            "cpf": "12883935637",
            "email": "daphinepardinho@gmailcom"
          },
          {
            "name": "GUILHERME AUGUSTO DA SILVA",
            "cpf": "01607844680",
            "email": "gaugustos@hotmailcom"
          },
          {
            "name": "MARCELO THOMAS AQUINO",
            "cpf": "12433437610",
            "email": "marcelothaquino@gmailcom"
          },
          {
            "name": "VINICIUS LUCIO RIBEIRO",
            "cpf": "37134371816",
            "email": "viniciuslr@hotmailcom"
          },
          {
            "name": "ANA BEATRIZ AMARAL MARTINS DE ARAUJO SANCHES",
            "cpf": "07072861661",
            "email": "ana_sanches@cienciasmedicasmgedubr"
          },
          {
            "name": "VICTORIA DE PAULA PEREIRA",
            "cpf": "06306166637",
            "email": "victoriapaula@ufvjmedubr"
          },
          {
            "name": "LUCIANA MARTINELLI LUCENA SAAR SILVA",
            "cpf": "14489239645",
            "email": "lucianasaar33@gmailcom"
          },
          {
            "name": "SARA PRATES ROCHA",
            "cpf": "16268813677",
            "email": "saraprates@estudanteufjfbr"
          },
          {
            "name": "THAIS CAROLYNE JADIR REIS",
            "cpf": "12010762690",
            "email": "thaiscjreis@hotmailcom"
          },
          {
            "name": "MARINA ARAGAO HAMDAN DE FREITAS",
            "cpf": "13390213660",
            "email": "marinaaragaoh@gmailcom"
          },
          {
            "name": "NELSON CARVALHO DO AMARAL",
            "cpf": "00426317181",
            "email": "amaralnelsonc@gmailcom"
          },
          {
            "name": "LUISA TEMPONI",
            "cpf": "09587975600",
            "email": "luisagtg@hotmailcom"
          },
          {
            "name": "CAMILA CARVALHO VILELA",
            "cpf": "06735599632",
            "email": "camilacarvalhovilella@gmailcom"
          },
          {
            "name": "RAFAEL NASCIMENTO DE MELO JARDIM",
            "cpf": "05788273609",
            "email": "rafaeljardim@hotmailcom"
          },
          {
            "name": "ISABEL PELLEGRINELLI BACELAR",
            "cpf": "11776092660",
            "email": "belpelle@gmailcom"
          },
          {
            "name": "BASILIOS JUNIO SANTOS SERVOS",
            "cpf": "11586580604",
            "email": "basilioservos@icloudcom"
          },
          {
            "name": "LORRANE DE MOURA MOREIRA",
            "cpf": "14405290601",
            "email": "lorranemoura@icloudcom"
          },
          {
            "name": "TANIA FERNANDES SILVA",
            "cpf": "06939827641",
            "email": "taninhafernandes@hotmailcom"
          },
          {
            "name": "VINICIUS ALVES ASSUNCAO",
            "cpf": "04375204630",
            "email": "vaassuncao@gmailcom"
          },
          {
            "name": "ANNA BEATRIZ SANTANA MARQUES",
            "cpf": "14515080695",
            "email": "annabeatrizsantanamarques@yahoocombr"
          },
          {
            "name": "ANA LUIZA DAMIANI",
            "cpf": "09407337650",
            "email": "analuizadamiani98@gmailcom"
          },
          {
            "name": "RAFAELA DUARTE COELHO BESSAS",
            "cpf": "13276835630",
            "email": "rafaeladcoelhobessas@gmailcom"
          },
          {
            "name": "NICOLAS MERLIM DE OLIVEIRA",
            "cpf": "02711853250",
            "email": "nicomer007@gmailcom"
          },
          {
            "name": "ISABELA GONTIJO LOPES",
            "cpf": "13851890612",
            "email": "isabelagontijomed@gmailcom"
          },
          {
            "name": "BRUNA MICHELI FRANCISCHINI PARIZOTTO",
            "cpf": "10618726616",
            "email": "brunaparizottomk@gmailcom"
          },
          {
            "name": "PAULA APARECIDA CAETANO TOMAS",
            "cpf": "28790566831",
            "email": "paulatomasmedicina@gmailcom"
          },
          {
            "name": "SABRINA KAROLINE EMANUELLE DE LISBOA OLIVEIRA",
            "cpf": "12484510667",
            "email": "binakarolina@hotmailcom"
          },
          {
            "name": "KARINE ALONSO DOS SANTOS",
            "cpf": "06049284598",
            "email": "karinesantos@alunounifenasbr"
          },
          {
            "name": "CAIO HENRIQUE FOGAROLLI LAVES",
            "cpf": "44126269894",
            "email": "caiolaves@gmailcom"
          },
          {
            "name": "MICHAEL VITOR DA SILVA",
            "cpf": "09088434611",
            "email": "michaelvitors@icloudcom"
          },
          {
            "name": "MARIA IZADORA SOUSA DAMACENA",
            "cpf": "08301857633",
            "email": "izadoradamacena@hotmailcom"
          },
          {
            "name": "ANA LUIZA DE MAGALHAES KOPPERSCHIMIDT",
            "cpf": "12265244600",
            "email": "analuizamag@hotmailcom"
          },
          {
            "name": "MATHEUS PEREIRA VIEIRA",
            "cpf": "11762421640",
            "email": "matheuspvieira@outlookcom"
          },
          {
            "name": "IGOR SOARES DURAES",
            "cpf": "15650552681",
            "email": "igorsoaresduraes@outlookcom"
          },
          {
            "name": "MARIA FERNANDA ARAUJO",
            "cpf": "12948199689",
            "email": "mfhorusaraujo@gmailcom"
          },
          {
            "name": "ANDRE LOBATO MOREIRA",
            "cpf": "02184678694",
            "email": "lobatoam17@gmailcom"
          },
          {
            "name": "JULIANA CAMPOS MACHADO",
            "cpf": "03636082655",
            "email": "julianacm_23@yahoocombr"
          },
          {
            "name": "CAROLINE PAIXAO MARQUES",
            "cpf": "10183835654",
            "email": "carolmarques00@icloudcom"
          },
          {
            "name": "JESSICA BICALHO DE PINHO SA",
            "cpf": "02199766608",
            "email": "jessicabpinho@gmailcom"
          },
          {
            "name": "ARMANDO JORGE JUNIOR",
            "cpf": "01067459138",
            "email": "armandojunior@ebserhgovbr"
          },
          {
            "name": "LAURA BARROS POSSA",
            "cpf": "08671050629",
            "email": "lauraabarros2003@gmailcom"
          },
          {
            "name": "GABRIELA HISSA LOPES",
            "cpf": "13442402670",
            "email": "ghissalopes@gmailcom"
          },
          {
            "name": "VICTOR BRUNNO ALVES NOGUEIRA",
            "cpf": "08377631695",
            "email": "victo_nogueira@yahoocombr"
          },
          {
            "name": "MATEUS DE FARIA VALADARES",
            "cpf": "04673784600",
            "email": "mateusvaladares@gmailcom"
          },
          {
            "name": "LAURA DE ALVARENGA PEDRAS FIGUEIRO",
            "cpf": "17820145609",
            "email": "laurafigueiro2004@hotmailcom"
          },
          {
            "name": "MARIANA QUINTINO MORAIS PEREIRA",
            "cpf": "13091487679",
            "email": "mariquintino2004@hotmailcom"
          },
          {
            "name": "MARIANA CARDOSO GODINHO",
            "cpf": "11943251657",
            "email": "marianagodinho20041@gmailcom"
          },
          {
            "name": "IRINA BERBERT VIDAL INACIO COELHO",
            "cpf": "09338287645",
            "email": "irinaberbert@gmailcom"
          },
          {
            "name": "ANGELO ENRICO STECKELBERG PIMENTA MACEDO",
            "cpf": "12551338646",
            "email": "angeloenricospm@gmailcom"
          },
          {
            "name": "LAIS ROBERTA OLIVEIRA DA CRUZ",
            "cpf": "07689434509",
            "email": "laisrobertaodc@gmailcom"
          },
          {
            "name": "LUIZA DAYRELL FERREIRA TAVARES",
            "cpf": "15907288663",
            "email": "luiza_tavares@cienciasmedicasmgedubr"
          },
          {
            "name": "GYOVANNA TORRES MESQUITA",
            "cpf": "15636528620",
            "email": "gyogyovannatorres@gmailcom"
          },
          {
            "name": "MARIANA SIQUEIRA GANDRA",
            "cpf": "14423574608",
            "email": "marianasiqueiragandra@gmailcom"
          },
          {
            "name": "ANA LUIZA LOPES DA SILVA OLIVEIRA",
            "cpf": "11784971600",
            "email": "analuizalopes2001@gmailcom"
          },
          {
            "name": "PRYSCILLA HELLEN DE CARVALHO JANOARIO",
            "cpf": "12750215650",
            "email": "pryscillahcjanoario@outlookcom"
          },
          {
            "name": "RAFAEL SANTIAGO CYPRESTE",
            "cpf": "12448815623",
            "email": "rafaelcypreste@hotmailcom"
          },
          {
            "name": "MARYSTHER FRANCOSO TEIXEIRA DA COSTA",
            "cpf": "06407884675",
            "email": "marysthercosta@yahoocombr"
          },
          {
            "name": "CAROLINE RODRIGUES MILHOMEM SOUTO",
            "cpf": "04172049141",
            "email": "milhomemcaroline@gmailcom"
          },
          {
            "name": "JACK EDUARDA ANTUNES BATISTA",
            "cpf": "15390408608",
            "email": "jack_batista@cienciasmedicasmgedubr"
          },
          {
            "name": "VINICIUS JANSON FREIRE",
            "cpf": "15172967656",
            "email": "viniciusjansonjf@gmailcom"
          },
          {
            "name": "JULIANA DE ALMEIDA CASTRO",
            "cpf": "12548497690",
            "email": "juhaalc@gmailcom"
          },
          {
            "name": "KRISTIAN RYAN MOREIRA COTA",
            "cpf": "70058551670",
            "email": "kristian_cota@cienciasmedicasmgedubr"
          },
          {
            "name": "LETICIA VIEIRA FARACO",
            "cpf": "09907065676",
            "email": "lvfaraco@gmailcom"
          },
          {
            "name": "GIOVANA KAROLINE SEABRA ALMEIDA",
            "cpf": "08746562656",
            "email": "giovanaseabra45@gmailcom"
          },
          {
            "name": "PAULA ARAUJO DINIZ",
            "cpf": "10889600651",
            "email": "paulaaraudiniz@gmailcom"
          },
          {
            "name": "ELEN CRISTINA DE SOUSA",
            "cpf": "13112459601",
            "email": "elencsousa23@gmailcom"
          },
          {
            "name": "JULIA WANDERLEY SOARES DE VIVEIROS",
            "cpf": "10136054625",
            "email": "juliaviveiros20@gmailcom"
          },
          {
            "name": "ISABELA DINIZ DE OLIVEIRA SANTOS",
            "cpf": "10439106621",
            "email": "Isabeladsantos@icloudcom"
          },
          {
            "name": "ROSANA VANESSA OLIVEIRA SILVA",
            "cpf": "01243553669",
            "email": "rosanavosilva@gmailcom"
          },
          {
            "name": "IZABELA CRISTINA GOUVEA SILVA",
            "cpf": "13393369601",
            "email": "izabelagouvea@hotmailcom"
          },
          {
            "name": "LUIZA CELANI REIS DE LACERDA",
            "cpf": "02162948605",
            "email": "luizacelani18@hotmailcom"
          },
          {
            "name": "TACIANE BALSA GRIS",
            "cpf": "09336561650",
            "email": "tacianebalsa@gmailcom"
          },
          {
            "name": "TIAGO ABREU VELLOSO",
            "cpf": "15543224648",
            "email": "tiagovellosomed@gmailcom"
          },
          {
            "name": "VICTORIA GOI DE MORAES RODRIGUES",
            "cpf": "09873045694",
            "email": "victoriagmr88@gmailcom"
          },
          {
            "name": "LETICIA MONTEIRO AZEVEDO",
            "cpf": "15712579693",
            "email": "leticiazeved@gmailcom"
          },
          {
            "name": "FELIPE BUZATTI MARINHO CARNEIRO",
            "cpf": "07484926663",
            "email": "felipebuzatti@hotmailcom"
          },
          {
            "name": "LIVIA NARCISO NEVES RICARDO",
            "cpf": "11431471623",
            "email": "Livianarciso@icloudcom"
          },
          {
            "name": "MARIANA NASCIMENTO MUZZI",
            "cpf": "09557904682",
            "email": "marinascimuzzi@gmailcom"
          },
          {
            "name": "JESSICA LARA SOUZA",
            "cpf": "10133294650",
            "email": "dramedjessica@gmailcom"
          },
          {
            "name": "DEBORA BARBOSA QUIBLER DE MELO",
            "cpf": "03438329255",
            "email": "deboraquibler@gmailcom"
          },
          {
            "name": "VICTOR TADEU DA CUNHA SIMAO",
            "cpf": "07463886670",
            "email": "Victorsimao@sgapucminasbr"
          },
          {
            "name": "ANNA THERESA SIQUEIRA VIEIRA FRAGA",
            "cpf": "12452428655",
            "email": "annatheresavieira@gmailcom"
          },
          {
            "name": "RAYLA RODRIGUES SOARES",
            "cpf": "13954749661",
            "email": "rayla0312@gmailcom"
          },
          {
            "name": "RAFAELLA HERINGER ALMEIDA",
            "cpf": "11996039610",
            "email": "rafaellaheringer402@gmailcom"
          },
          {
            "name": "ANA CAROLINA DE LIMA TEIXEIRA",
            "cpf": "02130331602",
            "email": "anacarolinalimat@hotmailcom"
          },
          {
            "name": "ISABEL RODRIGUES PEDROSA",
            "cpf": "08435787699",
            "email": "isabelrodped@gmailcom"
          },
          {
            "name": "DANIEL AUGUSTO CARLOS SILVA",
            "cpf": "10091634695",
            "email": "danielaugustofut@gmailcom"
          },
          {
            "name": "LARA GUEDES",
            "cpf": "02263062670",
            "email": "laraguedes_s@outlookcom"
          },
          {
            "name": "EMERSON COSTA DE OLIVEIRA",
            "cpf": "46454194809",
            "email": "emercosta97@gmailcom"
          },
          {
            "name": "NATHALIA LETICIA BORGES DE MATOS",
            "cpf": "46948885870",
            "email": "nathalialeticiamatos@hotmailcom"
          },
          {
            "name": "SAMUEL SOUZA AMADOR",
            "cpf": "09919037656",
            "email": "samuelamador@estudanteufjfbr"
          },
          {
            "name": "ISABELLA NEIFE ALVES SARY ELDIN",
            "cpf": "01785216635",
            "email": "Bellaeldin@icloudcom"
          },
          {
            "name": "JOAO GABRIEL GOULART NEVES",
            "cpf": "13546569628",
            "email": "joaogabrielg07@gmailcom"
          },
          {
            "name": "RAFEL MOREIRA DE CARVALHO MELADO",
            "cpf": "07402274675",
            "email": "desingmoreira@gmailcom"
          },
          {
            "name": "LUCAS MENEZES DENDENA",
            "cpf": "13725435626",
            "email": "lucasmenezesdendena@gmailcom"
          },
          {
            "name": "PHELIPPE RICCARDO REIS COELHO",
            "cpf": "11655490699",
            "email": "preisacademia@gmailcom"
          },
          {
            "name": "RACHEL AMELIA DAMAZO LACERDA SOARES",
            "cpf": "08989181623",
            "email": "rachelsoares_bh@yahoocombr"
          },
          {
            "name": "MAISA MARTINS OLIVEIRA",
            "cpf": "11213317690",
            "email": "maisamod@yahoocom"
          },
          {
            "name": "ANTONY PEREIRA DE FARIA SILVA",
            "cpf": "01935295640",
            "email": "antonypereiradefaria@gmailcom"
          },
          {
            "name": "LUCIA GONCALVES VILLANOVA",
            "cpf": "03186093120",
            "email": "villanovalucia@hotmailcom"
          },
          {
            "name": "HUARA BERBERT CAMARA DE VIDAL",
            "cpf": "08732863675",
            "email": "huaravidal@alunounifenasbr"
          },
          {
            "name": "MIGUEL VICTOR RODRIGUES VILACA",
            "cpf": "14481648694",
            "email": "miguelvilaca2@hotmailcom"
          },
          {
            "name": "LAIS MICHELLE CUNHA",
            "cpf": "13492877680",
            "email": "laismichele22@gmailcom"
          },
          {
            "name": "ISABELA BICALHO COTA LEMOS",
            "cpf": "11146227612",
            "email": "belabclemos@gmailcom"
          },
          {
            "name": "ANNA CAROLINA CORDEIRO PEIXOTO",
            "cpf": "12964270643",
            "email": "annacarolinacordeiro30@gmailcom"
          },
          {
            "name": "PAULA CARDOSO VICTAL",
            "cpf": "13009689667",
            "email": "gfvictal@gmailcom"
          },
          {
            "name": "GABRIELA CARVALHO BARBOSA",
            "cpf": "13805321678",
            "email": "gabrielacbarbosa@ufvbr"
          },
          {
            "name": "NATALIA MARIA RIERA PIMENTA",
            "cpf": "13658532688",
            "email": "nataliariera@hotmailcom"
          },
          {
            "name": "MIRIAN PEREIRA DE OLIVEIRA",
            "cpf": "01840026642",
            "email": "mirianoliveira2211@gmailcom"
          },
          {
            "name": "NATALIA BRAGA DE GOUVEA",
            "cpf": "14406525629",
            "email": "natinhabg77@hotmailcom"
          },
          {
            "name": "CESAR EDUARDO HORI FREITAS",
            "cpf": "11313877670",
            "email": "Cesarhorifreitas00@gmailcom"
          },
          {
            "name": "LETICIA ARAUJO SORIANO",
            "cpf": "15762586618",
            "email": "leticiaas@outlookcom"
          },
          {
            "name": "ARTHUR MAGALHAES PINTO",
            "cpf": "15249478654",
            "email": "arthurmaga@outlookcom"
          },
          {
            "name": "ANA CLARA VAZ SILVEIRA",
            "cpf": "09497525680",
            "email": "ana260405claravaz@gmailcom"
          },
          {
            "name": "NICOLE PINHEIRO MAGALHAES DE SOUZA LIMA",
            "cpf": "09707517611",
            "email": "nicolepinh@hotmailcom"
          },
          {
            "name": "GIOVANNA LUISA SALDANHA SALIBA",
            "cpf": "16161135612",
            "email": "giovannasalibabr@gmailcom"
          },
          {
            "name": "LARISSA DE OLIVEIRA MENDES SIMOES",
            "cpf": "14023807630",
            "email": "larisimoes99@gmailcom"
          },
          {
            "name": "FERNANDA VALACI PENA",
            "cpf": "12174480638",
            "email": "fernandapenacoro@hotmailcom"
          },
          {
            "name": "BRENDA CAROLINA RODRIGUES CAJAZEIRA",
            "cpf": "12427521612",
            "email": "brendacajazeira@gmailcom"
          },
          {
            "name": "MARIA VIRGINIA SAMUEL AMORIM",
            "cpf": "11108383602",
            "email": "amorimmariavirginia@gmailcom"
          },
          {
            "name": "ARTHUR ALVARENGA MEDEIROS",
            "cpf": "11272701689",
            "email": "arthuralvarengamedeiroscmmg@gmailcom"
          },
          {
            "name": "CAMILA MARIA OLIVEIRA DE MELO",
            "cpf": "71202378455",
            "email": "camilamariaoliveirademelo@gmailcom"
          },
          {
            "name": "PABLO HENRIQUE SILVA PRADO",
            "cpf": "11763665640",
            "email": "pablohsprado@gmailcom"
          },
          {
            "name": "GABRIELA OLIMPIA ARAUJO",
            "cpf": "14336241686",
            "email": "bibiolimpia@yahoocombr"
          },
          {
            "name": "LARISSA EMMANUELLE COSTA SILVA",
            "cpf": "10955923603",
            "email": "larissaecsilva@gmailcom"
          },
          {
            "name": "JULIA DE SA OLIVEIRA",
            "cpf": "14582556620",
            "email": "juliadesaoliveira@gmailcom"
          },
          {
            "name": "MARIANE MORATO MIZERANI",
            "cpf": "12869488602",
            "email": "Marianemizerani@hotmailcom"
          },
          {
            "name": "VICTORIA MIKA MATSUDA",
            "cpf": "07493021198",
            "email": "mikando910@gmailcom"
          },
          {
            "name": "JOICE SUELEN MARTINS ARAUJO",
            "cpf": "11978349661",
            "email": "joice2015enfermagem@hotmailcom"
          },
          {
            "name": "ANNA LUIZA FONTES MENDES",
            "cpf": "86104995535",
            "email": "annafontes29@gmailcom"
          },
          {
            "name": "ANA FLAVIA FERREIRA MOREIRA",
            "cpf": "13715161620",
            "email": "aflaviafmoreira@gmailcom"
          },
          {
            "name": "RAFAELA GODOI DE CARVALHO SILVA",
            "cpf": "13764205628",
            "email": "rafaelacarvalho602@gmailcom"
          },
          {
            "name": "BEATRIZ DE FARIA LUCARINI",
            "cpf": "10322453607",
            "email": "beatrizflucarini@gmailcom"
          },
          {
            "name": "PEDRO RIBEIRO BRAGA",
            "cpf": "13746287600",
            "email": "pedrobraga103@gmailcom"
          },
          {
            "name": "RAFAELA MARIA MELLO FONSECA",
            "cpf": "08227097677",
            "email": "rafaelamariamello@gmailcom"
          },
          {
            "name": "HENRIQUE SHELTER PEREIRA VIANA",
            "cpf": "09356840695",
            "email": "shelterrique@gmailcom"
          },
          {
            "name": "FRANCIELE LOPES DIAS DE FREITAS",
            "cpf": "12502100623",
            "email": "francilopesdias@gmailcom"
          },
          {
            "name": "LEANDRO PINTO AMARAL",
            "cpf": "13782034619",
            "email": "leandropamaral99@gmailcom"
          },
          {
            "name": "MARIANA TONELLI RICCI",
            "cpf": "09245248631",
            "email": "maritonelliricci@gmailcom"
          },
          {
            "name": "MIRELLY DE OLIVEIRA PEDROSA SANTOS",
            "cpf": "01652863699",
            "email": "mirellypedrosa@yahoocombr"
          },
          {
            "name": "RUBENS MACIEL MARTINS PEREIRA",
            "cpf": "10751486698",
            "email": "rubensmp2009@gmailcom"
          },
          {
            "name": "CAROLINA DE ARAUJO GUIMARAES",
            "cpf": "13316839631",
            "email": "carolinaaguimaraes@yahoocombr"
          },
          {
            "name": "GABRIELA GUERRA FALCAO",
            "cpf": "12559079674",
            "email": "gabigfalcao@gmailcom"
          },
          {
            "name": "ANA LAURA MOREIRA GERHARDT",
            "cpf": "43272191852",
            "email": "analauragerhardt27@gmailcom"
          },
          {
            "name": "MARIA FERNANDA SANTOS ATTIE",
            "cpf": "07953189607",
            "email": "mafeattie@gmailcom"
          },
          {
            "name": "VITORIA LUISA MARQUES DEMETRIO",
            "cpf": "10898996619",
            "email": "viviluisa16@hotmailcom"
          },
          {
            "name": "LUISA MARIA RODRIGUES DE MOURA",
            "cpf": "11730398642",
            "email": "luisamariarmoura@gmailcom"
          },
          {
            "name": "LUNA MENDES FRANCA",
            "cpf": "08833836673",
            "email": "lulunamendes@gmailcom"
          },
          {
            "name": "ISABELA GALVAO REIS",
            "cpf": "70632355670",
            "email": "isabela01usa@hotmailcom"
          },
          {
            "name": "ELIZA LOMMEZ DE OLIVEIRA",
            "cpf": "10020299613",
            "email": "lommelizmedic@gmailcom"
          },
          {
            "name": "GUILHERME KELLES JUSTE",
            "cpf": "06612829613",
            "email": "guilhermekelles@gmailcom"
          },
          {
            "name": "MARIA EDUARDA PAIVA ANDRADE",
            "cpf": "12955617601",
            "email": "mariaeduardapandrade@gmailcom"
          },
          {
            "name": "NATHALIA FERNANDES DE CASTRO ALVES",
            "cpf": "09149912640",
            "email": "nathy_castro10@hotmailcom"
          },
          {
            "name": "MANUELA LOBATO BARBOSA",
            "cpf": "02329326629",
            "email": "manulobatobarbosa@gmailcom"
          },
          {
            "name": "DAVI TERENCE MOREIRA",
            "cpf": "16414552682",
            "email": "daviterencemoreira16@gmailcom"
          },
          {
            "name": "MARCELO NUNES DE SOUZA REPSOLD",
            "cpf": "11152474685",
            "email": "marcelorepsold19@gmailcom"
          },
          {
            "name": "ARTHUR DE CARVALHO E CASTRO",
            "cpf": "70617561109",
            "email": "arthurcastro@alunounifenasbr"
          },
          {
            "name": "LAURA ALMEIDA OLIVEIRA",
            "cpf": "12063729662",
            "email": "lauraalmeidaoliveira@estudanteufjfbr"
          },
          {
            "name": "ANNA PAULA GUIMARAES MOITINHO",
            "cpf": "13407561610",
            "email": "annagmoitinho@gmailcom"
          },
          {
            "name": "IARA MOREIRA CALDAS",
            "cpf": "11971793647",
            "email": "iaramcaldass@gmailcom"
          },
          {
            "name": "ISABELA MAGALHAES DE LIMA SANTOS",
            "cpf": "11952022614",
            "email": "isamlsbela@gmailcom"
          },
          {
            "name": "MARCOS VINICIUS GONCALVES DA SILVA",
            "cpf": "02323224654",
            "email": "mvgsilva99@gmailcom"
          },
          {
            "name": "LETICIA DE OLIVEIRA GROSSI",
            "cpf": "07378553638",
            "email": "leticiaoliveiragrossi@outlookcom"
          },
          {
            "name": "AMELIA SOARES DE MELO",
            "cpf": "10325621616",
            "email": "amelo0801@gmailcom"
          },
          {
            "name": "MATHEUS BARBOSA COSTA LIMA",
            "cpf": "10339066628",
            "email": "matheusbarbosa0908@outlookcom"
          },
          {
            "name": "ARTHUR BARBOSA COSTA LIMA",
            "cpf": "10339064684",
            "email": "arthurbarbosa01@outlookcom"
          },
          {
            "name": "KATIA DE FREITAS RODRIGUES GUTSEIT",
            "cpf": "74963988615",
            "email": "katiafreitas70@gmailcom"
          },
          {
            "name": "FERNANDA VALADARES GOMES HENRIQUES",
            "cpf": "12705350640",
            "email": "fernandavaladaresh@gmailcom"
          },
          {
            "name": "ANTONIO VICTOR CONDEZ ALAGIA",
            "cpf": "12559116626",
            "email": "antoniovictoralagia@gmailcom"
          },
          {
            "name": "EMANUELLA LOIS MENDES SOUZA COSTA",
            "cpf": "14076156617",
            "email": "emanuellaloismendes@gmailcom"
          },
          {
            "name": "JULIA RIBEIRO FARIA GONTIJO",
            "cpf": "10815428618",
            "email": "juribeiro7@hotmailcom"
          },
          {
            "name": "CAMILLA MAGALHAES DA SILVA",
            "cpf": "05785722658",
            "email": "camillamsilva@yahoocombr"
          },
          {
            "name": "DAPHINE PARDINHO FERNANDES",
            "cpf": "12883935637",
            "email": "daphinepardinho@gmailcom"
          },
          {
            "name": "GUILHERME AUGUSTO DA SILVA",
            "cpf": "01607844680",
            "email": "gaugustos@hotmailcom"
          },
          {
            "name": "MARCELO THOMAS AQUINO",
            "cpf": "12433437610",
            "email": "marcelothaquino@gmailcom"
          },
          {
            "name": "VINICIUS LUCIO RIBEIRO",
            "cpf": "37134371816",
            "email": "viniciuslr@hotmailcom"
          },
          {
            "name": "ANA BEATRIZ AMARAL MARTINS DE ARAUJO SANCHES",
            "cpf": "07072861661",
            "email": "ana_sanches@cienciasmedicasmgedubr"
          },
          {
            "name": "MARIA FERNANDA ANTONINI PIMENTA",
            "cpf": "15537391678",
            "email": "mfefeantonini@gmailcom"
          },
          {
            "name": "SILVIA MENDES ROLLA",
            "cpf": "14366060639",
            "email": "silviamendesmed@gmailcom"
          },
          {
            "name": "PALOMA DE FREITAS ARAUJO",
            "cpf": "70511025670",
            "email": "palomadefreitasaraujo@gmailcom"
          },
          {
            "name": "MATHEUS ALVES DE SOUZA DIAS",
            "cpf": "09721200689",
            "email": "matheusasdias@hotmailcom"
          },
          {
            "name": "TIAGO OLIVEIRA ABREU COSTA",
            "cpf": "14997493686",
            "email": "tiagocosta0711@outlookcombr"
          },
          {
            "name": "ALEJANDRO CORTES",
            "cpf": "87531933004",
            "email": "alejandrocortes846@gmailcom"
          },
          {
            "name": "MARIANA SILVA GOMES",
            "cpf": "14641029610",
            "email": "mariana_gomes@cienciasmedicasmgedubr"
          },
          {
            "name": "VIVIAN BARROSO SANTOS",
            "cpf": "11064097600",
            "email": "vivianbsufmg@gmailcom"
          },
          {
            "name": "LETICIA DORNAS DA COSTA",
            "cpf": "13792882663",
            "email": "leticiadornasc@gmailcom"
          },
          {
            "name": "VICTORIA DE PAULA PEREIRA",
            "cpf": "06306166637",
            "email": "victoriapaula@ufvjmedubr"
          },
          {
            "name": "LUCIANA MARTINELLI LUCENA SAAR SILVA",
            "cpf": "14489239645",
            "email": "lucianasaar33@gmailcom"
          },
          {
            "name": "SARA PRATES ROCHA",
            "cpf": "16268813677",
            "email": "saraprates@estudanteufjfbr"
          },
          {
            "name": "THAIS CAROLYNE JADIR REIS",
            "cpf": "12010762690",
            "email": "thaiscjreis@hotmailcom"
          },
          {
            "name": "MARINA ARAGAO HAMDAN DE FREITAS",
            "cpf": "13390213660",
            "email": "marinaaragaoh@gmailcom"
          },
          {
            "name": "NELSON CARVALHO DO AMARAL",
            "cpf": "00426317181",
            "email": "amaralnelsonc@gmailcom"
          },
          {
            "name": "ANA RITA FAGUNDES AMARAL LOPES",
            "cpf": "08406695692",
            "email": "Anaritafagundeslopes@gmailcom"
          },
          {
            "name": "CLARA MARCAL VILELA",
            "cpf": "12912196680",
            "email": "claramarcalvilela@gmailcom"
          },
          {
            "name": "LUCAS BASSI TARANTO GOULART",
            "cpf": "13968968646",
            "email": "bassilucas22@gmailcom"
          },
          {
            "name": "GIOVANNA MARTINS OLIVEIRA MAGALHAES",
            "cpf": "11800409613",
            "email": "giovannamomagalhaes@gmailcom"
          },
          {
            "name": "LAURA LIMA SILVA PEREIRA",
            "cpf": "14436126692",
            "email": "lauralsp0308@gmailcom"
          },
          {
            "name": "LAURA MELO COSTA",
            "cpf": "70349677689",
            "email": "lauramelocosta01@gmailcom"
          },
          {
            "name": "AMANDA MARCAL GONCALVES",
            "cpf": "70057062692",
            "email": "amandamgoncalves@hotmailcom"
          },
          {
            "name": "ANA LUIZA RODRIGUES CLARK PHILLIPS",
            "cpf": "01916983693",
            "email": "analuizaclarkphillips@gmailcom"
          },
          {
            "name": "MARIA LUISA SILVA SANTOS",
            "cpf": "14437526651",
            "email": "mluisasantos21@gmailcom"
          },
          {
            "name": "MARIANA COLINI DE CASTRO",
            "cpf": "15098586607",
            "email": "marianaccolini@gmailcom"
          },
          {
            "name": "GABRIELA VIEIRA QUIRINO",
            "cpf": "09478985655",
            "email": "gabrielaquirino@ufvbr"
          },
          {
            "name": "JULIA MAIA TAMBASCO",
            "cpf": "15646938643",
            "email": "juliamaiatambasco@icloudcom"
          },
          {
            "name": "LARA FERREIRA RAMINHO",
            "cpf": "12348868636",
            "email": "laraferreiraraminho@gmailcom"
          },
          {
            "name": "LUISA TEMPONI",
            "cpf": "09587975600",
            "email": "luisagtg@hotmailcom"
          },
          {
            "name": "CAMILA CARVALHO VILELA",
            "cpf": "06735599632",
            "email": "camilacarvalhovilella@gmailcom"
          },
          {
            "name": "GABRIELA FONSECA DOMINGOS",
            "cpf": "14885283655",
            "email": "gabifdomingos25@gmailcom"
          },
          {
            "name": "LUCAS MARQUES BRANDIAO",
            "cpf": "13858362611",
            "email": "lucasbrandiao2@hotmailcom"
          },
          {
            "name": "NATHALYA APARECIDA SILVEIRA CAMPOS",
            "cpf": "14027431650",
            "email": "nathalyaaparecida7@gmailcom"
          },
          {
            "name": "EDUARDA PANDIA CAMARA MATTOS",
            "cpf": "09716302673",
            "email": "Pandiaeduarda@gmailcom"
          },
          {
            "name": "THAIS GUEDES",
            "cpf": "10933072694",
            "email": "thaisguedesoficial@gmailcom"
          },
          {
            "name": "PAMELLA REGINA ANDRADE PEVIDOR",
            "cpf": "13839247675",
            "email": "pamellapevidor@gmailcom"
          },
          {
            "name": "ANA CLARA RODRIGUES LIMA DE SOUZA",
            "cpf": "13025610654",
            "email": "anarlsouza560@gmailcom"
          },
          {
            "name": "MELISSA BOTTENE QUEIROZ DE CASTRO",
            "cpf": "11641873680",
            "email": "melissabottene@gmailcom"
          },
          {
            "name": "MARIA EDUARDA RODRIGUES SILVA",
            "cpf": "14069076697",
            "email": "maria_2310101142@cienciasmedicasmgedubr"
          },
          {
            "name": "RAYANE AMARAL MARTINS",
            "cpf": "13096064636",
            "email": "rayanemaartins2004@gmailcom"
          },
          {
            "name": "LORENZO SANTINI BARBIERI",
            "cpf": "13538177686",
            "email": "lorenzobarbieri2504@gmailcom"
          },
          {
            "name": "LAURA MESSER DE CASTRO",
            "cpf": "12615270621",
            "email": "Lauramesserc@hotmailcom"
          },
          {
            "name": "LUCAS ARAUJO VAZ",
            "cpf": "09819669693",
            "email": "lucasavaz@gmailcom"
          },
          {
            "name": "VITOR GABRIEL SOARES ARAUJO",
            "cpf": "12398552659",
            "email": "vitorgabriel04sa@gmailcom"
          },
          {
            "name": "BRENDA CARDOSO DE ASSIS MAIA",
            "cpf": "13576759689",
            "email": "brendamaia@alunounifenasbr"
          },
          {
            "name": "LARISSA SILVEIRA ANDRADE",
            "cpf": "01914282647",
            "email": "larisilveiraa15@icloudcom"
          },
          {
            "name": "JULIA SOARES BRANDAO",
            "cpf": "10271696605",
            "email": "jjuliasbrandao@gmailcom"
          },
          {
            "name": "LAURA GUIMARAES PEDROSA",
            "cpf": "12872861602",
            "email": "lauragpedrosa@gmailcom"
          },
          {
            "name": "ALICE PINHEIRO BARBOSA",
            "cpf": "10654206686",
            "email": "alicepinheirob@hotmailcom"
          },
          {
            "name": "EMANUELLE SEVERINO GONTIJO BOUCINHAS",
            "cpf": "13600210602",
            "email": "emanuelleseverino1@gmailcom"
          },
          {
            "name": "ANA CLARA CAMARGO DOS SANTOS",
            "cpf": "08870924629",
            "email": "ana_12410100004@cienciasmedicasmgedubr"
          },
          {
            "name": "RAFAEL NASCIMENTO DE MELO JARDIM",
            "cpf": "05788273609",
            "email": "rafaeljardim@hotmailcom"
          },
          {
            "name": "JULIA BUENO MARX",
            "cpf": "08730414610",
            "email": "juliabuenomarx@gmailcom"
          },
          {
            "name": "ISABEL PELLEGRINELLI BACELAR",
            "cpf": "11776092660",
            "email": "belpelle@gmailcom"
          },
          {
            "name": "IGOR RODRIGUES SALLES",
            "cpf": "14182070631",
            "email": "igorsrodriguessalles@gmailcom"
          },
          {
            "name": "LUIZA PINHEIRO DE ASSIS FREITAS",
            "cpf": "10536445664",
            "email": "luizafreitasp07@gmailcom"
          },
          {
            "name": "MEL NUNES CASTRO",
            "cpf": "11002706637",
            "email": "melncastro03@gmailcom"
          },
          {
            "name": "ISADORA ALVES COSTA PEREIRA",
            "cpf": "14533734626",
            "email": "alvescostaisadora@gmailcom"
          },
          {
            "name": "TATIANE DALETH ALVES DE OLIVEIRA",
            "cpf": "11151982628",
            "email": "dalethtatiane@gmailcom"
          },
          {
            "name": "LARISSA MALUF GOMES",
            "cpf": "14406226630",
            "email": "larissa17mg@gmailcom"
          },
          {
            "name": "NELY FERNANDES XAVIER CORREIA",
            "cpf": "11900305607",
            "email": "nellycorreia4@gmailcom"
          },
          {
            "name": "LAURA BANDEIRA MENEZES DOS SANTOS",
            "cpf": "12273803648",
            "email": "laurabmds0608@gmailcom"
          },
          {
            "name": "PEDRO LUCAS ALVAREZ RODRIGUES",
            "cpf": "08900931644",
            "email": "pedroalvarez2003@hotmailcom"
          },
          {
            "name": "LETICIA DIAS SIMOES TARQUINIO",
            "cpf": "08912928619",
            "email": "leticiadstarquinio@gmailcom"
          },
          {
            "name": "JULIA CORREA",
            "cpf": "06978329614",
            "email": "juliacorrea7@gmailcom"
          },
          {
            "name": "ALVARO AUGUSTO RIBAS GUIMARAES",
            "cpf": "08196823657",
            "email": "alvaroaribas@yahoocombr"
          },
          {
            "name": "GABRIELLA MAIA BARBOSA",
            "cpf": "15080693606",
            "email": "gabimaiabarbosa@gmailcom"
          },
          {
            "name": "BEATRIZ DE FREITAS PEREIRA GARCIA",
            "cpf": "14841865675",
            "email": "beatrizfgarcia2204@gmailcom"
          },
          {
            "name": "ALICE PEREIRA SILVA",
            "cpf": "09185005673",
            "email": "alicepereirasilva02@gmailcom"
          },
          {
            "name": "FERNANDA DE LUCA FELICISSIMO",
            "cpf": "09290430656",
            "email": "fernandadeluca4@gmailcom"
          },
          {
            "name": "IRIS REGINA ESCUDEIRO SANTIAGO",
            "cpf": "15238444699",
            "email": "irisesantiago@hotmailcom"
          },
          {
            "name": "ERICA  FRANCA CASSEMIRO LOPES",
            "cpf": "15581376611",
            "email": "francaerica75@gmailcom"
          },
          {
            "name": "GABRIELA SERPA AVELLAR",
            "cpf": "12544288604",
            "email": "gabiserpaavellar@gmailcom"
          },
          {
            "name": "THIAGO PEREIRA GONCALVES",
            "cpf": "13999495600",
            "email": "thgoncallves@gmailcom"
          },
          {
            "name": "MANOELA BORGES LOPES",
            "cpf": "09927062621",
            "email": "manoelablopes05@gmailcom"
          },
          {
            "name": "LAILA GARCIA SIMOES",
            "cpf": "13549079656",
            "email": "lailagarcia1806@gmailcom"
          },
          {
            "name": "BRUNNA DE PAULA CAMPOS",
            "cpf": "10910731632",
            "email": "brunna2000@hotmailcom"
          },
          {
            "name": "CAMILLA NOVAES SAMPAIO",
            "cpf": "14750912654",
            "email": "camilla_novaes@yahoocombr"
          },
          {
            "name": "BASILIOS JUNIO SANTOS SERVOS",
            "cpf": "11586580604",
            "email": "basilioservos@icloudcom"
          },
          {
            "name": "MARCELO SHIZUO NISHISAKA",
            "cpf": "09979163623",
            "email": "nishisakashizuo@gmailcom"
          },
          {
            "name": "LARISSA MIRANDA LIMA",
            "cpf": "12868822657",
            "email": "larissamirandalim@gmailcom"
          },
          {
            "name": "ISABELLY DAMASCENO SOUZA",
            "cpf": "09893178541",
            "email": "isabellydamasc@gmailcom"
          },
          {
            "name": "ELISA CARVALHO MALTA",
            "cpf": "07664973643",
            "email": "elisamalta@hotmailcom"
          },
          {
            "name": "BERNARDO SARAIVA DE ASSIS CATAO",
            "cpf": "11540158667",
            "email": "bernardocomcatao@gmailcom"
          },
          {
            "name": "GEOVANA MOREIRA PEREIRA",
            "cpf": "13364547688",
            "email": "gepereiramoreira01@gmailcom"
          },
          {
            "name": "CASSIA MENDES SANTOS",
            "cpf": "02134989602",
            "email": "cassiamendes10@hotmailcom"
          },
          {
            "name": "TATIANE APARECIDA DE ASSIS SILVA",
            "cpf": "13732325601",
            "email": "assistatiane@icloudcom"
          },
          {
            "name": "LAIS BIRCHAL BRAGA BORGES",
            "cpf": "14779835623",
            "email": "laisbirchal@hotmailcom"
          },
          {
            "name": "GIOVANNA FERNANDA SILVA BUENO",
            "cpf": "14075398684",
            "email": "gigifsb@gmailcom"
          },
          {
            "name": "ALICE VALADARES PICARRO",
            "cpf": "14196264697",
            "email": "alicepicarro@gmailcom"
          },
          {
            "name": "JOAO PEDRO MENDES ROCHA",
            "cpf": "15608992636",
            "email": "jpmrocha10@hotmailcom"
          },
          {
            "name": "MARINA CASTELLO BRANCO BASTOS",
            "cpf": "12970463660",
            "email": "marinacbbastos@gmailcom"
          },
          {
            "name": "BERNARDO BUITRAGO DE ANDRADE",
            "cpf": "09452813660",
            "email": "bbuitragoandrade@gmailcom"
          },
          {
            "name": "THAIS BRETAS",
            "cpf": "15007169609",
            "email": "tatadonuts@gmailcom"
          },
          {
            "name": "GIOVANNA DAVIN NETO MAXIMO",
            "cpf": "16445699650",
            "email": "ginmaximo2014@gmailcom"
          },
          {
            "name": "BEATRIZ PARREIRAS GONCALVES",
            "cpf": "09909307693",
            "email": "parreirasbeatriz@gmailcom"
          },
          {
            "name": "FERNANDA BOTELHO MOURA",
            "cpf": "12092472674",
            "email": "febotelho0705@gmailcom"
          },
          {
            "name": "YASMIN SILVA VILELA",
            "cpf": "15918372601",
            "email": "yasminnvilela@gmailcom"
          },
          {
            "name": "DANIEL VELOSO SOARES",
            "cpf": "16127106621",
            "email": "danielvs284@gmailcom"
          },
          {
            "name": "BARBARA ARZE ROCHA",
            "cpf": "09793367679",
            "email": "barbaraarzerocha@outlookcom"
          },
          {
            "name": "CECILIA PEREIRA GAZIRE",
            "cpf": "11368486657",
            "email": "cecigazire@gmailcom"
          },
          {
            "name": "JULIA MENDES GROSSI FERREIRA",
            "cpf": "12261843674",
            "email": "jmendesgf@gmailcom"
          },
          {
            "name": "GABRIEL DAVI CAMILO DA HORA E ROCHA",
            "cpf": "10390270679",
            "email": "gabrieldavi@alunounifenasbr"
          },
          {
            "name": "BEATRIZ FERREIRA CARVALHO",
            "cpf": "07211030658",
            "email": "biaferreiracarvalho@hotmailcom"
          },
          {
            "name": "PAULA PAIVA CANABRAVA",
            "cpf": "11103996690",
            "email": "paulapaivacanabrava@gmailcom"
          },
          {
            "name": "SYLVANO NEVES FIORAVANTI NETO",
            "cpf": "01876874635",
            "email": "sylvanoneves@gmailcom"
          },
          {
            "name": "SINDY STHEFANY SOUSA SILVA",
            "cpf": "12812101610",
            "email": "sindysilva@alunounifenasbr"
          },
          {
            "name": "LUMA PEREIRA BRANDAO",
            "cpf": "11518125603",
            "email": "lumabrandao1000@gmailcom"
          },
          {
            "name": "LAURA AMARANTE MELO FARIA",
            "cpf": "01885485646",
            "email": "lauraamarante2004@gmailcom"
          },
          {
            "name": "BRUNO PYRAMO BRAGA DE SOUZA",
            "cpf": "06659278605",
            "email": "brunopyramo1@gmailcom"
          },
          {
            "name": "GABRIELA DOMINGUES GAMA",
            "cpf": "16099210628",
            "email": "gabi@gamadentalcombr"
          },
          {
            "name": "KATHLEN OLIVEIRA MARTINS",
            "cpf": "08661208661",
            "email": "kaatymartins@hotmailcom"
          },
          {
            "name": "CAROLINA RODRIGUES LEAL",
            "cpf": "12907736612",
            "email": "carolinarodriguesleal@hotmailcom"
          },
          {
            "name": "JULIA PALHARES DE ARAUJO GRIEDER",
            "cpf": "11343693608",
            "email": "juliagrieder@gmailcom"
          },
          {
            "name": "LUISA GIMENEZ ZOLINI GALDINO",
            "cpf": "10556777638",
            "email": "luisagimenez345@gmailcom"
          },
          {
            "name": "VIVIANE CRISTINA DOS SANTOS",
            "cpf": "10735663661",
            "email": "vivianecsantos@livecom"
          },
          {
            "name": "NATHALIA GUALBERTO SOUZA E SILVA",
            "cpf": "06987973610",
            "email": "Nathaliasouza914933@sgapucminasbr"
          },
          {
            "name": "MARIANA FERNANDES BUENO DE MELO",
            "cpf": "01859602606",
            "email": "marianafbmelo@gmailcom"
          },
          {
            "name": "ROBERT PINELI LOPES",
            "cpf": "50215474880",
            "email": "roglarob@hotmailcom"
          },
          {
            "name": "GABRIELA EMELLY DE OLIVEIRA ALQUIMIM",
            "cpf": "02205333690",
            "email": "gabrielaalkimim@gmailcom"
          },
          {
            "name": "ISABELA PEDRAS LOBATO",
            "cpf": "11959211609",
            "email": "Isabelapedras@gmailcom"
          },
          {
            "name": "GABRIELA GIORDANA DA SILVA ROSA",
            "cpf": "15608092643",
            "email": "gabisilva8@hotmailcom"
          },
          {
            "name": "MARCELLA FERRARI GOMES",
            "cpf": "15867873650",
            "email": "marcellagomes@alunounifenasbr"
          },
          {
            "name": "PAULA GONCALVES RODRIGUES",
            "cpf": "08710463690",
            "email": "rodriguespaula2305@gmailcom"
          },
          {
            "name": "ISADORA ROCHA SENA",
            "cpf": "13351063679",
            "email": "isadorarocha16@hotmailcom"
          },
          {
            "name": "VITOR QUINELATO CARVALHO",
            "cpf": "12274570655",
            "email": "vitorquinelato@hotmailcom"
          },
          {
            "name": "DEBORA EDUARDA MACHADO DE PAULA",
            "cpf": "09222010647",
            "email": "Debora_machado@outlookcombr"
          },
          {
            "name": "LORRANE DE MOURA MOREIRA",
            "cpf": "14405290601",
            "email": "lorranemoura@icloudcom"
          },
          {
            "name": "JULIA TREVISAN ELOI FARIA",
            "cpf": "10444648607",
            "email": "jutfaria26@icloudcom"
          },
          {
            "name": "LUIZA DO VALLE CORREA PINTO COELHO",
            "cpf": "14661116666",
            "email": "luiza@tratemicombr"
          },
          {
            "name": "MARIA ELISA DA SILVA CAMPOS",
            "cpf": "01834265681",
            "email": "mariaelisascampos@gmailcom"
          },
          {
            "name": "ANA CAROLINA CRUZ NOGUEIRA",
            "cpf": "15057404601",
            "email": "acnc12nogueira@gmailcom"
          },
          {
            "name": "LUISA PEDROSO DINIZ ALVARENGA",
            "cpf": "70230999646",
            "email": "luisaalvarenga2@estudanteuflabr"
          },
          {
            "name": "SOFIA NUNES CASTRO",
            "cpf": "01960994638",
            "email": "sofinunes1973@gmailcom"
          },
          {
            "name": "MARIA FERNANDA BESSA TEIXEIRA",
            "cpf": "14448280616",
            "email": "nandacec@hotmailcom"
          },
          {
            "name": "MARIA LUIZA ANTUNES PEREIRA",
            "cpf": "15598574632",
            "email": "mantunespereira@yahoocombr"
          },
          {
            "name": "IZABELA CAMPOS ROMAO",
            "cpf": "10622590413",
            "email": "izabelacamposromao@gmailcom"
          },
          {
            "name": "RICHARD DANIEL FERREIRA REIS",
            "cpf": "02131098677",
            "email": "richardreismedicina@gmailcom"
          },
          {
            "name": "FERNANDA OLIVEIRA AMADO",
            "cpf": "09367204680",
            "email": "feamado12@hotmailcom"
          },
          {
            "name": "PAULA MEDEIROS LOPES TUNES DA CUNHA",
            "cpf": "07278723620",
            "email": "paulamltc@bolcombr"
          },
          {
            "name": "JULIA ROBERTA SILVA DE FIGUEIREDO",
            "cpf": "13265804690",
            "email": "juliafigue014@gmailcom"
          },
          {
            "name": "MARIA CLARA RODRIGUES DA SILVEIRA",
            "cpf": "15304552601",
            "email": "mariaclararodriguesdasilveira@gmailcom"
          },
          {
            "name": "ISABELLA HARUME RIBEIRO HOJO",
            "cpf": "14282846640",
            "email": "bellaribeirohojo@gmailcom"
          },
          {
            "name": "LIGIA BOGAS PATTO",
            "cpf": "13734055628",
            "email": "ligiapatto@gmailcom"
          },
          {
            "name": "CAROLYNE STEPHANY DE OLIVEIRA GOUVEA",
            "cpf": "14052103629",
            "email": "gouveacarolyne@gmailcom"
          },
          {
            "name": "MARIA CRISTINA DE OLIVEIRA MALTA VAZ",
            "cpf": "10287797635",
            "email": "mariacmalta@livecom"
          },
          {
            "name": "JULIANA REZENDE FERRAZ",
            "cpf": "10272229601",
            "email": "Julianarferraz1245@gmailcom"
          },
          {
            "name": "SAMYRA ELIAS STEPHANI",
            "cpf": "12171196637",
            "email": "samyrastephani@estudanteufjfbr"
          },
          {
            "name": "LUISA MAGALHAES RIBEIRO NEVES",
            "cpf": "10772450684",
            "email": "luisarneves14@gmailcom"
          },
          {
            "name": "ANA LAURA TEIXEIRA DA SILVA",
            "cpf": "12739666608",
            "email": "teixeiranalaura@gmailcom"
          },
          {
            "name": "GIOVANA MIRANDA FERNANDES",
            "cpf": "10484786610",
            "email": "giovanamirandafernandes@gmailcom"
          },
          {
            "name": "LAURA FARIA MACIEL",
            "cpf": "10677632606",
            "email": "maciellauraf@hotmailcom"
          },
          {
            "name": "LUIZ FELIPE GRANDI",
            "cpf": "16467497660",
            "email": "grandiluizfelipe@gmailcom"
          },
          {
            "name": "MARINA CLETO MIARELLI PIEDADE",
            "cpf": "70469031662",
            "email": "marinacletomiarelli@gmailcom"
          },
          {
            "name": "VITORIA SAPUCAIA OLIVEIRA CUNHA",
            "cpf": "14065250650",
            "email": "vitoriacunhamed@gmailcom"
          },
          {
            "name": "BIANKA LUISA OLIVEIRA",
            "cpf": "13505414603",
            "email": "biankaluisaoliveira@gmailcom"
          },
          {
            "name": "ANA TERESA MESQUITA PEDROSA",
            "cpf": "14792041619",
            "email": "anatmpfacul@gmailcom"
          },
          {
            "name": "BARBARA LEAO LANZA DE OLIVEIRA",
            "cpf": "10776678680",
            "email": "babisleao@hotmailcom"
          },
          {
            "name": "BRUNA APARECIDA ANDRADE CHAVES",
            "cpf": "02239600632",
            "email": "brunachvs015@gmailcom"
          },
          {
            "name": "LUISA DUMONT LAMOUNIER",
            "cpf": "14034254696",
            "email": "luisadlamounier@gmailcom"
          },
          {
            "name": "IZABELA AUGUSTA DA SILVA SALEMA",
            "cpf": "14207399640",
            "email": "Izabelasalema9@gmailcom"
          },
          {
            "name": "GABRIELA BAETA BARBOSA LEITE",
            "cpf": "15423914663",
            "email": "gabibaeta25@gmailcom"
          },
          {
            "name": "BEATRIZ HERIGER CHAMON JUNQUEIRA MORAIS",
            "cpf": "14038991695",
            "email": "beaheringer@hotmailcom"
          },
          {
            "name": "VITOR AUGUSTO OSORIO CORREA",
            "cpf": "10059462647",
            "email": "vitoraugustocorrea@yahoocombr"
          },
          {
            "name": "LUCAS DRUMMOND SAVASSI STEHLING",
            "cpf": "15189545610",
            "email": "lucasstehling0541@gmailcom"
          },
          {
            "name": "JULIA GRACIELA DA LUZ",
            "cpf": "15566314643",
            "email": "julia_luz@cienciasmedicasmgedubr"
          },
          {
            "name": "JUSCIANE CORDEIRO BARBOSA",
            "cpf": "13285605626",
            "email": "juscianecordeiro@gmailcom"
          },
          {
            "name": "LEANDRA LAS CASAS MACIEL",
            "cpf": "15562431629",
            "email": "Leandralascasasm@gmailcom"
          },
          {
            "name": "LAURA HELENA BOY PAIVA",
            "cpf": "14396928661",
            "email": "laurahelenabpaiva@gmailcom"
          },
          {
            "name": "MILENA TANURE GOMES",
            "cpf": "70096125608",
            "email": "milenatanuregomes@gmailcom"
          },
          {
            "name": "WASHINGTON VINICIUS SANTOS GONCALVES",
            "cpf": "14577555646",
            "email": "washingtonmed2000@outlookcom"
          },
          {
            "name": "ISADORA QUEIROZ GRACA",
            "cpf": "17905244660",
            "email": "isadoraqgraca64@gmailcom"
          },
          {
            "name": "LUCAS AVELLAR DE ASSIS",
            "cpf": "15629022610",
            "email": "lucasavellarassis@gmailcom"
          },
          {
            "name": "YARA QUINTAO CASTRO",
            "cpf": "12379172633",
            "email": "yaraqcastro@gmailcom"
          },
          {
            "name": "TAUNER JORDANI GUSMAO DO COUTO",
            "cpf": "04911268670",
            "email": "tauergusmao@gmailcom"
          },
          {
            "name": "DEBORA BARBOSA ROCHA RIBAS",
            "cpf": "14298070670",
            "email": "debora_2310101214@cienciasmedicasmgedubr"
          },
          {
            "name": "NADIA MARIA DE OLIVEIRA SANTOS",
            "cpf": "15236825660",
            "email": "lanadia56@gmailcom"
          },
          {
            "name": "ISADORA HARUMI MENEZES OHNO",
            "cpf": "02007722607",
            "email": "isaohno1234@gmailcom"
          },
          {
            "name": "RAFAELA LESSA ANDRADE",
            "cpf": "13883419648",
            "email": "andradelessarafaela@gmailcom"
          },
          {
            "name": "CAMILA DOMINGOS PAES SANTANNA",
            "cpf": "13092551648",
            "email": "camiladpsantanna@gmailcom"
          },
          {
            "name": "TIAGO DA CRUZ MONTEIRO",
            "cpf": "12851794710",
            "email": "tiagocruzmonteiro@gmailcom"
          },
          {
            "name": "BRUNA AGUIAR VALLE",
            "cpf": "11057690627",
            "email": "brunamedpucminas@gmailcom"
          },
          {
            "name": "CRISTINA MOURA OLIVEIRA",
            "cpf": "11389578607",
            "email": "cristinamouracunha@gmailcom"
          },
          {
            "name": "CARLOS MAGNO DA SILVA SANTANA",
            "cpf": "71227390408",
            "email": "Carlossmagnocm@gmailcom"
          },
          {
            "name": "MARIA EDUARDA COTTA COELHO GOMES",
            "cpf": "12341219640",
            "email": "dudacttcoelhoo@gmailcom"
          },
          {
            "name": "CECILIA TEIXEIRA WERNER",
            "cpf": "10648972666",
            "email": "ceciliawerner7@gmailcom"
          },
          {
            "name": "BARBARA MASCARENHAS NASSAR",
            "cpf": "13250928607",
            "email": "barbaramnassar@gmailcom"
          },
          {
            "name": "DANIEL FAJOLI MOREIRA",
            "cpf": "70062883631",
            "email": "danielfajoli@gmailcom"
          },
          {
            "name": "JONATHAN VINICIUS DA SILVA CASARIM",
            "cpf": "12356231650",
            "email": "casarimjonathan@gmailcom"
          },
          {
            "name": "MARIA TERESA SALUM FLORES",
            "cpf": "02228507601",
            "email": "mteresasalum@gmailcom"
          },
          {
            "name": "LUIARA FERREIRA EVANGELISTA",
            "cpf": "11962663604",
            "email": "luiaraferreirae26@hotmailcom"
          },
          {
            "name": "NATALIA GABRIELA VIEIRA DE SOUZA",
            "cpf": "11859224660",
            "email": "vieiragnatalia@gmailcom"
          },
          {
            "name": "CAROLINA MACEDO GUERRA",
            "cpf": "06301750632",
            "email": "carolina_guerra@cienciasmedicasmgedubr"
          },
          {
            "name": "MARIENE ARAUJO VASCONCELOS",
            "cpf": "12434081622",
            "email": "mariene270113@gmailcom"
          },
          {
            "name": "MARIA CLARA MOREIRA DO NASCIMENTO",
            "cpf": "04797109530",
            "email": "mclaramoreiranascimento@gmailcom"
          },
          {
            "name": "FERNANDA TEIXEIRA DE SA",
            "cpf": "02108699686",
            "email": "fernandatdesa@gmailcom"
          },
          {
            "name": "MARIA JULIA SANTANA SANTOS COTTA",
            "cpf": "10817973630",
            "email": "mariajuliascotta@gmailcom"
          },
          {
            "name": "LUCIANA MAURICIO COSTA DE CARVALHO",
            "cpf": "13436243639",
            "email": "lucianamauricio098@gmailcom"
          },
          {
            "name": "LETICIA LEMOS BUENO FONTES",
            "cpf": "16207600614",
            "email": "leticialbfontes@gmailcom"
          },
          {
            "name": "VICTOR GONCALVES SOARES",
            "cpf": "13175539696",
            "email": "victorgsoares1@gmailcom"
          },
          {
            "name": "JESSICA AMANDA LOPES",
            "cpf": "10001446665",
            "email": "jessicalopesamanda123@gmailcom"
          },
          {
            "name": "DARYELLE NIESSA GOMES",
            "cpf": "12321620609",
            "email": "ndaryelle@gmailcom"
          },
          {
            "name": "MARCELLE FERREIRA SANTOS",
            "cpf": "13611362603",
            "email": "Marcelle2002@hotmailcom"
          },
          {
            "name": "GABRIELA COSTA PENA SIQUEIRA",
            "cpf": "09338368645",
            "email": "Penasiqueira@gmailcom"
          },
          {
            "name": "CRISTIANA TOLENTINO FIGUEIREDO COURSIN",
            "cpf": "13030864685",
            "email": "cristianatfc@gmailcom"
          },
          {
            "name": "CAMILA SANTANNA DE OLIVEIRA",
            "cpf": "15194090609",
            "email": "camilasantanna4@gmailcom"
          },
          {
            "name": "LUISA MOREIRA BLANCO",
            "cpf": "15472731780",
            "email": "moreira_luisa@hotmailcom"
          },
          {
            "name": "PAULLINNE ARIEL NOGUEIRA BARBOSA",
            "cpf": "08588918676",
            "email": "paullinneariel@gmailcom"
          },
          {
            "name": "LUISA YARA BAHIA VIANA",
            "cpf": "11707457689",
            "email": "luisayara_03@hotmailcom"
          },
          {
            "name": "CARLA BEATRIZ NOBRE BARBOSA",
            "cpf": "16171687693",
            "email": "carlabeatriizz03@gmailcom"
          },
          {
            "name": "KAIO MENDES ROCHA",
            "cpf": "09987328695",
            "email": "kaiorochamendes@gmailcom"
          },
          {
            "name": "LUIZA DE LIMA PENA",
            "cpf": "02152313682",
            "email": "luizapena28@gmailcom"
          },
          {
            "name": "LIVIA MOREIRA AVELAR",
            "cpf": "70387444610",
            "email": "Livmoreiravelar@gmailcom"
          },
          {
            "name": "GIOVANNA BONINI TOLEDO",
            "cpf": "10327340606",
            "email": "giboninitoledo@gmailcom"
          },
          {
            "name": "SARAH SEGHETTO DA SILVA DUARTE RIBEIRO",
            "cpf": "07454957617",
            "email": "seghettosarah@gmailcom"
          },
          {
            "name": "ANA LUIZA SOARES MENDES",
            "cpf": "01961706644",
            "email": "msoaresanalu@gmailcom"
          },
          {
            "name": "LUISA SILVA SOUZA",
            "cpf": "16168805621",
            "email": "luisaa_souza@icloudcom"
          },
          {
            "name": "RAFAELA SIQUEIRA DINIZ DE CARVALHO",
            "cpf": "01790437652",
            "email": "rafaelasdinizcarvalho@gmailcom"
          },
          {
            "name": "GABRIELLE CRISTINA SANTIAGO BRANDAO",
            "cpf": "13563143684",
            "email": "gabibrandao26@gmailcom"
          },
          {
            "name": "HANA PAULA BRASIL REIS",
            "cpf": "03881691332",
            "email": "hanapaulabr@hotmailcom"
          },
          {
            "name": "AMANDA DE OLIVEIRA NUNES MACHADO",
            "cpf": "08729449642",
            "email": "amandaoliveiram@icloudcom"
          },
          {
            "name": "JOAO PAULO TACIO DA COSTA SANTOS",
            "cpf": "05652601469",
            "email": "Jtacio@hotmailcom"
          },
          {
            "name": "JOAO VICTOR SANTOS DA SILVEIRA",
            "cpf": "01772532665",
            "email": "realzagri@gmailcom"
          },
          {
            "name": "MAISA MARIA SOARES BARBOSA",
            "cpf": "01362037443",
            "email": "maisamsoaresb@gmailcom"
          },
          {
            "name": "ISABELLA FURTADO",
            "cpf": "02447938160",
            "email": "ipfurtado100@gmailcom"
          },
          {
            "name": "MARIANE FORTUNATO MENDES",
            "cpf": "12784609693",
            "email": "marianefmendes1@hotmailcom"
          },
          {
            "name": "CARLOS EDUARDO ROCHA ALVES",
            "cpf": "10507130600",
            "email": "cadumf25a@gmailcom"
          },
          {
            "name": "ANA ALICE REIS PORTES",
            "cpf": "12604530651",
            "email": "anaalicereisportes@gmailcom"
          },
          {
            "name": "ANA SOFIA VERSIANI DE OLIVEIRA MOTA",
            "cpf": "16335977680",
            "email": "asversiani48@gmailcom"
          },
          {
            "name": "RAFAEL LUIS MOREIRA DOMINGOS",
            "cpf": "00483661295",
            "email": "moreirafael4@gmailcom"
          },
          {
            "name": "DOUGLAS GARCIA RIBEIRO",
            "cpf": "11958196681",
            "email": "dodogarciar@gmailcom"
          },
          {
            "name": "LUCAS CERQUEIRA MENDES TOLENTINO",
            "cpf": "10907252648",
            "email": "lucascmtolentino@gmailcom"
          },
          {
            "name": "ANNA LUIZA BATISTA KOPITTKE",
            "cpf": "14893693689",
            "email": "anna2012kopittke@gmailcom"
          }
        ]
      }
    ],
    travelAgency: {
      active: true,
      title: 'Agência Oficial',
      description: [
        'Clique na logo para conferir', 'passeios e hospedagens.'
      ],
      logo: {
        name: 'GVB Travel',
        get alt() {
          return `Logo da ${this.name}`
        },
        link: '/pdf/gvb-travel-jmr2025.pdf',
        src: '/logo/gvb-travel.png',
        width: 100,
        height: 71.5
      }
    }
  },
  2028: {
    event: {
      name: 'Jornada Mineira de Radiologia 2025',
      shortName: 'JMR & CIM 2025',
      date: '27 e 28 de Junho de 2025',
      shortDate: '27 e 28/06/2025',
      email: 'srmg@srmg.org.br',
      bcc: 'jmr@@srmg.org.br',
      phone: '(27)98133-0708',
    },
    title:
      'JMR 2025 & CIM 2025 – Inovação e excelência no diagnóstico por imagem | 27 e 28 de Junho de 2025',
    description:
      [
        'Nos dias 27 e 28 de Junho de 2025, Belo Horizonte será palco de dois grandes eventos científicos: a Jornada Mineira de Radiologia 2025 (JMR), organizada pela SRMG, e o Congresso de Imaginologia da Mulher 2025 (CIM), realizado em parceria com a SOGIMIG.',
        'JMR 2025 reunirá especialistas de diversas áreas da radiologia para discutir os avanços mais recentes em imagem abdominal, musculoesquelética, neurorradiologia, radiologia torácica, intervenção guiada por imagem e muito mais.',
        'Já o CIM 2025 trará um olhar aprofundado sobre a imagem da mulher, abordando inovações tecnológicas e diagnósticas.',
        'Com uma programação dinâmica de palestras, workshops e mesas-redondas, o evento será uma oportunidade única de aprendizado, atualização e networking.',
        'Garanta sua participação e esteja na vanguarda da radiologia!',
        'Nos vemos em junho de 2025!'
      ],
    keywords: [
      'Jornada Mineira de Radiologia 2025',
      'Congresso de Imaginologia da Mulher 2025',
      'JMR 2025',
      'CIM 2025',
      'Radiologia',
      'Diagnóstico por imagem',
      'Inovação em radiologia',
      'Excelência em diagnóstico',
      'Congresso de Radiologia'
    ],
    ogTitle: 'JMR 2025 - Jornada Mineira de Radiologia',
    ogDescription:
      'Junte-se à Jornada Mineira de Radiologia 2025 e descubra as inovações na área de diagnóstico por imagem.',
    banner: {
      description: ['Regulamento Submissão de', 'Trabalhos JMR/CIM2025'],
      button: {
        caption: 'Clique aqui para acessar o regulamento!',
        link: 'https://www.canva.com/design/DAGjujtuRg8/UE46Fq6VPopeumkfxUrFZw/view'
      }
    },
    modal: {
      active: true,
      expireAt: '2024-04-30T23:59:59-0300',
      title: 'Sorteio de Inscrição',
      description: [
        'Inscreva-se no primeiro lote e concorra a 2 assinaturas anuais da MedHubX!',
        'A JMR/CIM2025 fechou uma parceria incrível com a MedHubX, a plataforma de ensino médico referência em radiologia.',
        'Garanta sua inscrição até 30/04 e tenha a chance de levar um ano de acesso completo a conteúdos exclusivos que transformarão sua prática na radiologia!',
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
          width: 207.92,
          height: 80
        },
        {
          name: 'MedHubX',
          get alt() {
            return `Logo da ${this.name}`
          },
          link: 'https://www.medhubx.com',
          src: '/logo/medhubx.png',
          width: 172.17,
          height: 43.62,
          bgcolor: '#f8f9fa'
        }
      ],
    },
    introduction: {
      text: {
        greeting: null,
        paragraph: ['Juntem-se a nós nos dias 27 e 28 de junho de 2025 para um evento imperdível! Excelências no diagnóstico por imagem estarão presentes em uma programação dinâmica com os maiores especialistas da área.', 'Esperamos por vocês!']
      },
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
    promoters: {
      callToAct: {
        caption: 'Clique aqui para fazer sua inscrição!',
        link: '#tables',
      },
      brands: [{
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
      ]
    },
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
    registrationForm: {
      title: 'Formulário de inscrição',
      description: 'A JMR 2025 / CIM 2025 acontecerão  nos dias 27 e 28 de Junho de 2025, na AMMG - Associação Médica de Minas Gerais, em Belo Horizonte - MG',
      paymentConfig: {
        billingType: 'UNDEFINED',
        dueDays: 3,
        url: 'https://jornada.srmg.org.br',
      },
      openToPublic: {
        title: 'Público em Geral',
        description: 'Curso aberto ao público em geral.',
        image: '/images/svg/publico.svg',
        member: [],
        receipt: {
          enabled: false
        },
        courses: [{
          title: 'Curso de Inteligência Artificial',
          description: ['Curso de Inteligência Artificial, aberto ao público em geral.'],
          image: '/images/svg/courses.svg',
          prices: [
            { bestBefore: '30/04/2025', value: 'R$ 88' },
            { bestBefore: '30/05/2025', value: 'R$ 98' },
            { bestBefore: '25/06/2025', value: 'R$ 118' },
            { bestBefore: '27/06/2025', value: 'R$ 148' },
          ]
        }],
        workshops: [],
        dayUse: null
      },
      categories: [
        {
          id: 1,
          title: 'Médico Sócio',
          description: [
            '✓Categoria destinada a médicos associados da SRMG ou SOGIMIG com anuidade 2025 quitada.',
            '✓Podem adquirir separadamente a programação científica, workshops e curso de IA. A aquisição de um não dá acesso aos demais. É necessário adquirir cada módulo separadamente.',
            '✓Caso o sistema não tenha validado a sua associação, será necessário o envio do comprovante de quitação do ano 2025.'
          ],
          image: '/images/svg/medico.svg',
          member: ['SRMG', 'SOGIMIG'],
          receipt: {
            enabled: false
          },
          journey: {
            title: 'JMR/CIM 2025',
            description: ['Adquira o acesso completo à JMR/CIM 2025'],
            image: '/images/svg/journey.svg',
            prices: [
              { bestBefore: '30/04/2025', value: 'R$ 325' },
              { bestBefore: '30/05/2025', value: 'R$ 355' },
              { bestBefore: '25/06/2025', value: 'R$ 385' },
              { bestBefore: '27/06/2025', value: 'R$ 415' },
            ],
          },
          workshops: [{
            title: 'RM Pelve para Ginecologistas',
            description: ['Workshop exclusivo para médicos.'],
            image: '/images/svg/workshops.svg',
            prices: [
              { bestBefore: '30/04/2025', value: 'R$ 70' },
              { bestBefore: '30/05/2025', value: 'R$ 80' },
              { bestBefore: '25/06/2025', value: 'R$ 87' },
              { bestBefore: '27/06/2025', value: 'R$ 94' },
            ]
          }],
          courses: [{
            title: 'Curso de Inteligência Artificial',
            description: ['Curso aberto ao público em geral.'],
            image: '/images/svg/courses.svg',
            prices: [
              { bestBefore: '30/04/2025', value: 'R$ 88' },
              { bestBefore: '30/05/2025', value: 'R$ 98' },
              { bestBefore: '25/06/2025', value: 'R$ 118' },
              { bestBefore: '27/06/2025', value: 'R$ 148' },
            ]
          }],
          dayUse: {
            title: 'Day use',
            description: [
              'Acesso limitado à um único dia de evento, à escolha do participante.',
              'Verifique horários antes de adquirir cursos ou workshops.',
              'Não inclui acesso a outras atividades, que devem ser adquiridas separadamente.'
            ],
            image: '/images/svg/dayuse.svg',
            prices: [
              { bestBefore: '30/04/2025', value: 'R$ 243,75' },
              { bestBefore: '30/05/2025', value: 'R$ 266,25' },
              { bestBefore: '25/06/2025', value: 'R$ 288,75' },
              { bestBefore: '27/06/2025', value: 'R$ 311,25' },
            ],
          }
        }, {
          id: 2,
          title: 'Médico Não Sócio',
          description: [
            '✓Categoria destinada à médicos não associados da SMRG/SOGIMIG ou inadimplentes com a anuidade 2025.',
            '✓Podem adquirir separadamente a programação científica, workshops e curso de IA. A aquisição de um não dá acesso aos demais.  É necessário adquirir cada módulo separadamente.'
          ],
          image: '/images/svg/medico.svg',
          member: [],
          receipt: {
            enabled: false
          },
          journey: {
            title: 'JMR/CIM 2025',
            description: ['Adquira o acesso completo à JMR/CIM 2025'],
            image: '/images/svg/journey.svg',
            prices: [
              { bestBefore: '30/04/2025', value: 'R$ 705' },
              { bestBefore: '30/05/2025', value: 'R$ 735' },
              { bestBefore: '25/06/2025', value: 'R$ 755' },
              { bestBefore: '27/06/2025', value: 'R$ 795' },
            ]
          },
          workshops: [{
            title: 'RM Pelve para Ginecologistas',
            description: ['Workshop exclusivo para médicos.'],
            image: '/images/svg/workshops.svg',
            prices: [
              { bestBefore: '30/04/2025', value: 'R$ 158' },
              { bestBefore: '30/05/2025', value: 'R$ 165' },
              { bestBefore: '25/06/2025', value: 'R$ 170' },
              { bestBefore: '27/06/2025', value: 'R$ 180' },
            ]
          },],
          courses: [{
            title: 'Curso de Inteligência Artificial',
            description: ['Curso aberto ao público em geral.'],
            image: '/images/svg/courses.svg',
            prices: [
              { bestBefore: '30/04/2025', value: 'R$ 88' },
              { bestBefore: '30/05/2025', value: 'R$ 98' },
              { bestBefore: '25/06/2025', value: 'R$ 118' },
              { bestBefore: '27/06/2025', value: 'R$ 148' },
            ]
          }],
          // get courses() {
          //   return [
          //     ...publicCourses('courses', 2028),
          //     ...[]
          //   ]
          // },
          dayUse: {
            title: 'Day use',
            description: [
              'Acesso limitado à um único dia de evento, à escolha do participante.',
              'Verifique horários antes de adquirir cursos ou workshops.',
              'Não inclui acesso a outras atividades, que devem ser adquiridas separadamente.'
            ],
            image: '/images/svg/dayuse.svg',
            prices: [
              { bestBefore: '30/04/2025', value: 'R$ 528,75' },
              { bestBefore: '30/05/2025', value: 'R$ 551,25' },
              { bestBefore: '25/06/2025', value: 'R$ 566,25' },
              { bestBefore: '27/06/2025', value: 'R$ 596,25' },
            ],
          }
        }, {
          id: 3,
          title: 'Residente ou Especializando',
          description: [
            '✓Necessário envio de comprovante atualizado de vínculo com programa de Residência, Especialização ou Fellowship em 2025.',
            '✓Podem adquirir separadamente a programação científica, workshops e curso de IA. A aquisição de um não dá acesso aos demais. É necessário adquirir cada módulo separadamente.'
          ],
          image: '/images/svg/residente.svg',
          member: ['SRMG', 'SOGIMIG'], // CPF encontrado no checkSocietyMembership
          receipt: {
            enabled: true,
            title: 'Comprovante de Residência, Especialização ou Fellowship'
          },
          journey: {
            title: 'JMR/CIM 2025',
            description: ['Adquira o acesso completo à JMR/CIM 2025'],
            image: '/images/svg/journey.svg',
            prices: [
              { bestBefore: '30/04/2025', value: 'R$ 179' },
              { bestBefore: '30/05/2025', value: 'R$ 199' },
              { bestBefore: '25/06/2025', value: 'R$ 219' },
              { bestBefore: '27/06/2025', value: 'R$ 269' },
            ],
          },
          workshops: [{
            title: 'RM Pelve para Ginecologistas',
            description: ['Workshop exclusivo para médicos.'],
            image: '/images/svg/workshops.svg',
            prices: [
              { bestBefore: '30/04/2025', value: 'R$ 60' },
              { bestBefore: '30/05/2025', value: 'R$ 70' },
              { bestBefore: '25/06/2025', value: 'R$ 80' },
              { bestBefore: '27/06/2025', value: 'R$ 90' },
            ]
          },
          ],
          courses: [{
            title: 'Curso de Inteligência Artificial',
            description: ['Curso aberto ao público em geral.'],
            image: '/images/svg/courses.svg',
            prices: [
              { bestBefore: '30/04/2025', value: 'R$ 88' },
              { bestBefore: '30/05/2025', value: 'R$ 98' },
              { bestBefore: '25/06/2025', value: 'R$ 118' },
              { bestBefore: '27/06/2025', value: 'R$ 148' },
            ]
          }]
        }, {
          id: 4,
          title: 'Acadêmico de Medicina Sócio',
          description: [
            '✓Caso o sistema não tenha validado a sua associação, será necessário o envio do comprovante de quitação do ano 2025.',
            '✓Programação exclusiva no dia 28/06, com opção de frequentar quaisquer salas da programação científica no dia 27/06.',
            '✕Não têm acesso aos workshops.'
          ],
          image: '/images/svg/academico.svg',
          member: ['SAMMG'],
          receipt: {
            enabled: false
          },
          places: 80,
          journey: {
            title: 'JMR/CIM 2025',
            description: ['Adquira o acesso completo à JMR/CIM 2025'],
            image: '/images/svg/journey.svg',
            prices: [
              { bestBefore: '30/04/2025', value: 'R$ 67' },
              { bestBefore: '30/05/2025', value: 'R$ 87' },
              { bestBefore: '25/06/2025', value: 'R$ 107' },
              { bestBefore: '27/06/2025', value: 'R$ 147' },
            ]
          },
          courses: [{
            title: 'Curso de Inteligência Artificial',
            image: '/images/svg/courses.svg',
            description: ['Curso aberto ao público em geral.'],
            prices: [
              { bestBefore: '30/04/2025', value: 'R$ 88' },
              { bestBefore: '30/05/2025', value: 'R$ 98' },
              { bestBefore: '25/06/2025', value: 'R$ 118' },
              { bestBefore: '27/06/2025', value: 'R$ 148' },
            ]
          }]
        }, {
          id: 5,
          title: 'Acadêmico de Medicina',
          description: [
            '✓Obrigatório o envio de comprovante de matrícula da Faculdade ano 2025.',
            '✓Programação exclusiva no dia 28/06, com opção de frequentar quaisquer salas da programação científica no dia 27/06.',
            '✕Não têm acesso aos workshops.'
          ],
          image: '/images/svg/academico.svg',
          member: [],
          receipt: {
            enabled: true,
            title: 'Comprovante de matrícula da Faculdade'
          },
          places: 80,
          journey: {
            title: 'JMR/CIM 2025',
            description: ['Adquira o acesso completo à JMR/CIM 2025'],
            image: '/images/svg/journey.svg',
            prices: [
              { bestBefore: '30/04/2025', value: 'R$ 177' },
              { bestBefore: '30/05/2025', value: 'R$ 197' },
              { bestBefore: '25/06/2025', value: 'R$ 217' },
              { bestBefore: '27/06/2025', value: 'R$ 297' },
            ]
          },
          courses: [{
            title: 'Curso de Inteligência Artificial',
            image: '/images/svg/courses.svg',
            description: ['Curso aberto ao público em geral.'],
            prices: [
              { bestBefore: '30/04/2025', value: 'R$ 88' },
              { bestBefore: '30/05/2025', value: 'R$ 98' },
              { bestBefore: '25/06/2025', value: 'R$ 118' },
              { bestBefore: '27/06/2025', value: 'R$ 148' },
            ]
          }]
        }, {
          id: 6,
          title: 'Tecnólogo e Técnico',
          description: [
            '✓Obrigatório envio de comprovante de atividade em técnicas radiológicas.',
            '✓Programação exclusiva no dia 28/06, voltada ao público técnico, conforme Resolução CFM nº 2.217/2018.',
            '✕Não têm acesso aos workshops.'
          ],
          image: '/images/svg/tecnico.svg',
          member: [],
          receipt: {
            enabled: true,
            title: 'Comprovante de atividade em técnicas radiológicas'
          },
          places: 100,
          journey: {
            title: 'JMR/CIM 2025',
            description: ['Adquira o acesso completo à JMR/CIM 2025'],
            image: '/images/svg/journey.svg',
            prices: [
              { bestBefore: '30/04/2025', value: 'R$ 68' },
              { bestBefore: '30/05/2025', value: 'R$ 88' },
              { bestBefore: '25/06/2025', value: 'R$ 108' },
              { bestBefore: '27/06/2025', value: 'R$ 148' },
            ]
          },
          courses: [{
            title: 'Curso de Inteligência Artificial',
            description: ['Curso aberto ao público em geral.'],
            image: '/images/svg/courses.svg',
            prices: [
              { bestBefore: '30/04/2025', value: 'R$ 88' },
              { bestBefore: '30/05/2025', value: 'R$ 98' },
              { bestBefore: '25/06/2025', value: 'R$ 118' },
              { bestBefore: '27/06/2025', value: 'R$ 148' },
            ]
          }]
        }, {
          id: 7,
          title: 'Público em Geral',
          description: [
            '✓Curso aberto ao público em geral.',
            '✓O curso de Inteligência Artificial em Medicina é aberto a qualquer pessoa com interesse no tema, incluindo médicos, acadêmicos da área da saúde, ciências biológicas ou da computação.',
            '✓A inscrição pode ser feita de forma independente, sem necessidade de participação na programação científica da Jornada.'
          ],
          image: '/images/svg/publico.svg',
          member: [],
          receipt: {
            enabled: false
          },
          courses: [{
            title: 'Curso de Inteligência Artificial',
            description: ['Curso aberto ao público em geral.'],
            image: '/images/svg/courses.svg',
            prices: [
              { bestBefore: '30/04/2025', value: 'R$ 88' },
              { bestBefore: '30/05/2025', value: 'R$ 98' },
              { bestBefore: '25/06/2025', value: 'R$ 118' },
              { bestBefore: '27/06/2025', value: 'R$ 148' },
            ]
          }]
        }
      ]
    },
    events: {
      soon: false,
      callToAct: {
        caption: 'Clique aqui para fazer sua inscrição!',
        link: '#tables',
      },
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
            // {
            //   date: '27/06',
            //   title: 'POCUS',
            //   subtitle: 'Geral',
            //   link: 'https://www.canva.com/design/DAGh0-qhaPE/mUjzHR3EZT8MI47KFWEvTg/view',
            //   img: '/images/cards/pocus.png',
            //   width: '63',
            //   height: '125'
            // },
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
              link: 'https://www.canva.com/design/DAGh8L_SDCs/cLgRjDSBHL-tqmulvwWxzQ/view',
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
              priority: 1,
              title: ['Pelve', 'Feminina'],
              color: '#6f0273',
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
            {
              date: '28/06',
              title: ['Cabeça e', 'Pescoço'],
              link: 'https://www.canva.com/design/DAGh7oGAB4E/g4BqkZ7C57SmtO89cO2qtg/view',
              img: '/images/cards/cabeca-pescoco.png'
            }
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
    comissions: [{
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
          name: 'Dra.Bruna Cesário Senna'
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
          imagePath: '/avatars/Lauro_Santos_Silva.png',
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
            text: ['XI Jornada Mineira de Radiologia e', 'XIV Congresso de Imaginologia da Mulher'],
            color: '#BB2426'
          },
          subtitle: {
            tag: 'h4',
            text: [
              '* Necessário enviar comprovante'
            ],
            color: '#f8f9fa'
          },
          bestBefore: {
            rowStart: 3,
            date: ['30042025', '30052025', '25062025', '28062025']
          },
          callToAct: {
            caption: 'Clique aqui para fazer sua inscrição!',
          },
          table: {
            headers: [
              { desktop: 'Categorias', mobile: 'Categ.' },
              { desktop: 'Vagas', mobile: 'Vagas' },
              { desktop: ['Desconto', 'até 30/04'], mobile: 'Até 30/04 ' },
              { desktop: ['Desconto', 'até 30/05'], mobile: 'Até 30/05' },
              { desktop: ['Desconto', 'até 25/06'], mobile: 'Até 25/06' },
              { desktop: 'No Local', mobile: 'No Local' }
            ],
            rows: [
              { cells: ['Médico Sócio SRMG/SOGIMIG', '', { validar: ['SRMG', 'SOGIMIG'], comprovante: false }, 'R$ 325', 'R$ 355', 'R$ 385', 'R$ 415'] },
              { cells: ['Médico Não Sócio ou Inadimplente', '', { validar: [], comprovante: false }, 'R$ 705', 'R$ 735', 'R$ 755', 'R$ 795'] },
              { cells: ['Residente Radiologia ou Ginecologia*', '', { validar: [], comprovante: true }, 'R$ 179', 'R$ 199', 'R$ 219', 'R$ 269'] },
              { cells: ['Acadêmico de Medicina Sócio SAMMG', { value: '80', rowspan: 2 }, { validar: ['SAMMG'], comprovante: false }, 'R$ 67', 'R$ 87', 'R$ 107', 'R$ 147'] },
              { cells: ['Acadêmico de Medicina não Sócio SAMMG*', '', { validar: [], comprovante: true }, 'R$ 177', 'R$ 197', 'R$ 217', 'R$ 297'] },
              { cells: ['Tecnólogos e Técnicos*', '100', { validar: [], comprovante: true }, 'R$ 68', 'R$ 88', 'R$ 108', 'R$ 148'] },
              { cells: ['Day use: Médico Sócio Quite SRMG/SOGIMIG', '', { validar: ['SRMG', 'SOGIMIG'], comprovante: false }, 'R$ 243,75', 'R$ 266,25', 'R$ 288,75', 'R$ 311.25'] },
              { cells: ['Day use: Médico Não Sócio ou Inadimplente', '', { validar: false, comprovante: false }, 'R$ 528,75', 'R$ 551,25', 'R$ 566,25', 'R$ 596.25'] }
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
            text: ['* Necessário enviar comprovante',
              '* Workshops são exclusivos para médicos.',
              '* Médicos residentes deverão enviar comprovante atualizado de vínculo com programa de Residência, Especialização ou Fellowship referente ao ano de 2025.'
            ],
            color: '#f8f9fa'
          },
          bestBefore: {
            rowStart: 2,
            date: ['30042025', '30052025', '25062025', '28062025']
          },
          callToAct: {
            caption: 'Clique aqui para fazer sua inscrição!',
          },
          table: {
            headers: [
              { desktop: 'Categorias', mobile: 'Categ.' },
              { desktop: ['Desconto', 'até 30/04'], mobile: 'Até 30/04 ' },
              { desktop: ['Desconto', 'até 30/05'], mobile: 'Até 30/05' },
              { desktop: ['Desconto', 'até 25/06'], mobile: 'Até 25/06' },
              { desktop: 'No Local', mobile: 'No Local' }
            ],
            rows: [
              { cells: ['Médico Sócio SRMG/SOGIMIG', { validar: ['SRMG', 'SOGIMIG'], comprovante: false }, 'R$ 70', 'R$ 80', 'R$ 87', 'R$ 94'] },
              { cells: ['Médico Não Sócio ou Inadimplente', { validar: false, comprovante: true }, 'R$ 158', 'R$ 165', 'R$ 170', 'R$ 180'] },
              { cells: ['Residente Radiologia ou Ginecologia*', { validar: false, comprovante: true }, 'R$ 60', 'R$ 70', 'R$ 80', 'R$ 90'] },
            ]
          }
        },
        {
          title: {
            tag: 'h2',
            text: 'Curso de Inteligência Artificial',
            color: '#052c65'
          },
          subtitle: {
            tag: 'h4',
            text: [
              '* Aberto ao público geral.',
              '* Não há necessidade de comprovantes.'
            ],
            color: '#f8f9fa'
          },
          bestBefore: {
            rowStart: 2,
            date: ['30042025', '30052025', '25062025', '28062025']
          },
          callToAct: {
            caption: 'Clique aqui para fazer sua inscrição!',
          },
          table: {
            headers: [
              { desktop: 'Categorias', mobile: 'Categ.' },
              { desktop: ['Desconto', 'até 30/04'], mobile: 'Até 30/04 ' },
              { desktop: ['Desconto', 'até 30/05'], mobile: 'Até 30/05' },
              { desktop: ['Desconto', 'até 25/06'], mobile: 'Até 25/06' },
              { desktop: 'No Local', mobile: 'No Local' }
            ],
            rows: [
              { cells: ['Aberto ao Público', { validar: false, comprovante: false }, 'R$ 88', 'R$ 98', 'R$ 105', 'R$ 111'] }
            ]
          }
        }
      ]
    },
    sponsorShip: {
      promoters: {
        title: 'Realização:',
        className: 'promoters',
        brands: [{
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
              }, {
                name: 'VX',
                src: '/logo/vx.png',
                href: 'https://www.vx.med.br/',
                width: 90,
                height: 25.65
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
            }, {
              name: 'Mater Dei',
              src: '/logo/mater-dei.png',
              href: 'https://www.materdei.com.br/',
              width: 104.45,
              height: 25
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
        }, {
          name: 'Biblioteca Virtual',
          src: '/logo/bibliotecavirtual.png',
          href: 'http://www.bibliotecavirtual.org.br',
          width: 95.70,
          height: 27.86
        }, {
          name: 'Espaço Namah - Yoga',
          src: '/logo/namah.png',
          href: 'https://espaconamah.com.br',
          width: 74.33,
          height: 37
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
    societies: [
      {
        name: 'Sociedade de Radiologia e Diagnóstico por Imagem de Minas Gerais (SRMG)',
        shortName: 'SRMG',
        link: 'https://www.srmg.org.br',
        alt: 'Logo da SRMG',
        src: '/logo/srmg.png',
        affiliated: [
          {
            "name": "LEONARDO CAMPOS DE QUEIROZ",
            "cpf": "00227147669",
            "email": "leocqueiroz@gmail.com"
          },
          {
            "name": "LUCIANA COSTA SILVA",
            "cpf": "02527422659",
            "email": "lucianacosta@me.com"
          },
          {
            "name": "ANNA FLÁVIA FIGUEIREDO AZEVEDO",
            "cpf": "05095106639",
            "email": "anna.azevedo@oi.com.br"
          },
          {
            "name": "JULIANA CRISTINA DE SOUZA DIAS",
            "cpf": "06213486607",
            "email": "julianacsd@hotmail.com"
          },
          {
            "name": "LUISA LAGES DE ABREU PALADINO",
            "cpf": "06785126630",
            "email": "lages6147@gmail.com"
          },
          {
            "name": "MARIA FERNANDA BORGES ABREU",
            "cpf": "08265777680",
            "email": "mf.borges.abreu@gmail.com"
          },
          {
            "name": "MARY CLAUDIA FELICIANO",
            "cpf": "80079750630",
            "email": "mary.feliciano@terra.com.br"
          },
          {
            "name": "RUDOLF MOREIRA PFEILSTICKER",
            "cpf": "06996855675",
            "email": "rudolfmp@gmail.com"
          },
          {
            "name": "SAMUEL TEIXEIRA MARTINS",
            "cpf": "08946378603",
            "email": "teixeira.samuel@yahoo.com.br"
          },
          {
            "name": "MARIA BEATRIZ SANTOS WANDERLEY",
            "cpf": "03274022616",
            "email": "biawanderley@hotmail.com"
          },
          {
            "name": "RAQUEL FERNANDES DOS SANTOS DIAS",
            "cpf": "06436027637",
            "email": "quelfsdias@gmail.com"
          },
          {
            "name": "WILSON CAMPOS TAVARES JUNIOR",
            "cpf": "04006765673",
            "email": "wilsoncamp2000@yahoo.com.br"
          },
          {
            "name": "PETERSON AZEVEDO FERNANDES",
            "cpf": "03738546685",
            "email": "doutorpeterson@gmail.com"
          },
          {
            "name": "CRISTIANE TURANO MOTA MALVEIRA",
            "cpf": "05692542641",
            "email": "cristurano@hotmail.com"
          },
          {
            "name": "MARCELL DE BARROS DUARTE PEREIRA",
            "cpf": "03287914669",
            "email": "marcellbarros@gmail.com"
          },
          {
            "name": "SERGIO RIBEIRO DE ANDRADE",
            "cpf": "87387875634",
            "email": "sandrade1970@gmail.com"
          },
          {
            "name": "LUIS RONAN MARQUEZ FERREIRA DE SOUZA",
            "cpf": "94747822615",
            "email": "luisronan@gmail.com"
          },
          {
            "name": "JÚLIO GUERRA DOMINGUES",
            "cpf": "08557515685",
            "email": "juliogdomingues@gmail.com"
          },
          {
            "name": "ANA PAULA CAMPOS ROCHA",
            "cpf": "07242349699",
            "email": "anacrocha@gmail.com"
          },
          {
            "name": "JOSÉ TÁCIO GODINHO",
            "cpf": "40145948668",
            "email": "godinhonjt@gmail.com"
          },
          {
            "name": "ADRIANO MURTA MAIA",
            "cpf": "03434848622",
            "email": "admmaia@hotmail.com"
          },
          {
            "name": "MARIA HELENA ARAUJO TEIXEIRA",
            "cpf": "22935975634",
            "email": "mariahelenaateixeira@yahoo.com.br"
          },
          {
            "name": "ADRIANA MARIA LAMEGO REZENDE",
            "cpf": "80786294604",
            "email": "adrianalamegorezende@gmail.com"
          },
          {
            "name": "ANA AMELIA ALFENAS SILVA MESQUITA",
            "cpf": "05617221612",
            "email": "anaalfenassilva@gmail.com"
          },
          {
            "name": "MARCOS VINÍCIUS FONSECA NORONHA",
            "cpf": "05749068609",
            "email": "mvfnoronha@gmail.com"
          },
          {
            "name": "ANDRE VOLANI MORGANTI",
            "cpf": "06612498676",
            "email": "avmorganti@gmail.com"
          },
          {
            "name": "RAQUEL DEL-FRARO RABELO",
            "cpf": "04043695616",
            "email": "raqueldelfraro@gmail.com"
          },
          {
            "name": "FRANCISCO RIBEIRO TEIXEIRA JUNIOR",
            "cpf": "04968734662",
            "email": "franciscoteixeirajr@gmail.com"
          },
          {
            "name": "ROGERIO AUGUSTO PINTO DA SILVA",
            "cpf": "27528170615",
            "email": "rapsilva@gmail.com"
          },
          {
            "name": "PATRICIA MARTINS GOMES EL BACHA",
            "cpf": "05128888681",
            "email": "drapatriciamartinsbacha@gmail.com"
          },
          {
            "name": "LUISA FARIA",
            "cpf": "07728363611",
            "email": "luisaleitao@icloud.com"
          },
          {
            "name": "ANNA CHRISTINA TORRES GRUBER",
            "cpf": "10519689682",
            "email": "annactgruber@gmail.com"
          },
          {
            "name": "MARCELO HENRIQUE SILVA",
            "cpf": "12309563609",
            "email": "eumarcelohenrique@yahoo.com"
          },
          {
            "name": "PATRICIA CRISTINA SILVA LIMA FERNANDES",
            "cpf": "56927916687",
            "email": "patriciacslfernandes@gmail.com"
          },
          {
            "name": "WILSON VAZ HESPANHOL",
            "cpf": "80390137715",
            "email": "wilsonhespanhol@uol.com.br"
          },
          {
            "name": "JOSE LANES MOURAO",
            "cpf": "25662864691",
            "email": "lanesmourao@gmail.com"
          },
          {
            "name": "ISABELA REZENDE",
            "cpf": "11602771685",
            "email": "deletado___isabela@zeitdigital.com.br"
          },
          {
            "name": "RAQUEL SADALA MENDES",
            "cpf": "80866530649",
            "email": "raquelsadala@gmail.com"
          },
          {
            "name": "IBRAHIM EDUARDO DE FARIA ELIAS",
            "cpf": "04273758601",
            "email": "dredfaria@yahoo.com.br"
          },
          {
            "name": "LAURO DOS SANTOS E SILVA",
            "cpf": "11137536683",
            "email": "laurosantosesilva@gmail.com"
          },
          {
            "name": "ANA RITA DA GLORIA SOARES",
            "cpf": "02843966647",
            "email": "soares.args@gmail.com"
          },
          {
            "name": "GUILHERME LOURENÇO DE LIMA REIS",
            "cpf": "00016959671",
            "email": "guilhermellreis@gmail.com"
          },
          {
            "name": "ALICE DUARTE DE CARVALHO",
            "cpf": "05640957611",
            "email": "acarva@gmail.com"
          },
          {
            "name": "ANA FLÁVIA MAGALHÃES LEAL",
            "cpf": "02701590612",
            "email": "anafmleal@gmail.com"
          },
          {
            "name": "IVIE BRAGA DE PAULA",
            "cpf": "03226848623",
            "email": "iviepaula@gmail.com"
          },
          {
            "name": "THAIS ABREU DE CASTRO",
            "cpf": "46955771604",
            "email": "tacastro99@gmail.com"
          },
          {
            "name": "ADRIENE MORAES CAMPOS",
            "cpf": "63313880606",
            "email": "adrienemoraes@uol.com.br"
          },
          {
            "name": "LUANN SANTOS ANDRADE",
            "cpf": "10026197693",
            "email": "luann.andrade@outlook.com.br"
          },
          {
            "name": "RENATA LOPES FURLETTI CALDEIRA DINIZ",
            "cpf": "00363067620",
            "email": "renatafurletti@yahoo.com.br"
          },
          {
            "name": "TATIANA MARTINS",
            "cpf": "01344407650",
            "email": "tatimartins@hotmail.com"
          },
          {
            "name": "LUCIANA COSTA TESTE",
            "cpf": "42192935668",
            "email": "lucianafmufmg@gmail.com"
          },
          {
            "name": "BERNARDO ALVARENGA DE MELO",
            "cpf": "12256001628",
            "email": "bernardoalvm@gmail.com"
          },
          {
            "name": "PEDRO SILVA",
            "cpf": "22695465041",
            "email": "costaluciana@ufmg.br"
          },
          {
            "name": "RAPHAEL GUEDES ANDRADE",
            "cpf": "05425403631",
            "email": "raphaelgandrade@gmail.com"
          },
          {
            "name": "ROGÉRIA NOBRE RODRIGUES",
            "cpf": "70308950615",
            "email": "ronobre25@gmail.com"
          },
          {
            "name": "VINICIUS ALVES LARA DOS SANTOS",
            "cpf": "01371743657",
            "email": "vlara1104@gmail.com"
          },
          {
            "name": "BERNARDO FONSECA",
            "cpf": "63073269649",
            "email": "blcfonseca@gmail.com"
          },
          {
            "name": "FRANCISCO MELO",
            "cpf": "56907176653",
            "email": "xikomagda@gmail.com"
          },
          {
            "name": "CLÁUDIA SOUZA FREITAS FALEIRO ",
            "cpf": "03239445662",
            "email": "claudiaimagem@gmail.com"
          },
          {
            "name": "LUCAS AVELAR",
            "cpf": "00212061127",
            "email": "lucasavelar@gmail.com"
          },
          {
            "name": "PEDRO ROCHA GONÇALVES",
            "cpf": "13626706699",
            "email": "pedrorochagoncalves@hotmail.com"
          },
          {
            "name": "VINICIUS GALDINO",
            "cpf": "01549875574",
            "email": "viniacad@gmail.com"
          },
          {
            "name": "LEANDRA OTTONI TOSTES",
            "cpf": "03747622607",
            "email": "leandratostes@gmail.com"
          },
          {
            "name": "ANA LUÍSA FERNANDES MADEIRA",
            "cpf": "11688361669",
            "email": "ana_luisa_madeira@hotmail.com"
          },
          {
            "name": "EDSON JÚNIO VIEIRA DOS SANTOS ",
            "cpf": "11599852608",
            "email": "edsonjuniovs@gmail.com"
          },
          {
            "name": "LUÍLA CRISTINA GONÇALVES RIBEIRO ",
            "cpf": "11581784686",
            "email": "luilacgribeiro@gmail.com"
          },
          {
            "name": "Lucas Hudson",
            "cpf": "09753332670",
            "email": "lucasalves.mhudson@gmail.com"
          },
          {
            "name": "MARCELA PIRES LAZZARINI ARAUJO",
            "cpf": "10248863606",
            "email": "marcelapiresl@hotmail.com"
          },
          {
            "name": "FERNANDA LOPES DE CARVALHO ",
            "cpf": "10681963603",
            "email": "fernandalopesdec20@gmail.com"
          },
          {
            "name": "VICTOR HENRIQUE VERSIANI ALEXANDRIA",
            "cpf": "11920860665",
            "email": "victoralexandria@yahoo.com.br"
          },
          {
            "name": "ANA PAULA MORAIS CORRÊA MACHADO",
            "cpf": "10898265673",
            "email": "anapaulamcmachado@hotmail.com"
          },
          {
            "name": "GABRIELA FONSECA OLIVEIRA",
            "cpf": "10150376669",
            "email": "gabifoliveira@yahoo.com.br"
          },
          {
            "name": "PAULA RIBEIRO DE BRITTO BORGES ",
            "cpf": "05283747530",
            "email": "paulabrittoborges@gmail.com"
          },
          {
            "name": "TALITA MOTA GONÇALVES ",
            "cpf": "10846346605",
            "email": "talita.m.goncalves@gmail.com"
          },
          {
            "name": "MARCELA BOMFIM",
            "cpf": "08262340620",
            "email": "mar_celinhaa@hotmail.com"
          },
          {
            "name": "MATHEUS HENRIQUE Alves Barbosa ",
            "cpf": "12490145657",
            "email": "matheushenriquealvesbarbosa@gmail.com"
          },
          {
            "name": "NADIA VIEIRA ALVES ALVARENGA ",
            "cpf": "12471184600",
            "email": "nadiavieiraalves@hotmail.com"
          },
          {
            "name": "MARCELA OLIVEIRA NEPOMUCENO",
            "cpf": "06287594608",
            "email": "marcelaanepomuceno@gmail.com"
          },
          {
            "name": "PAULO MAURÍCIO CAMPOS VIANA",
            "cpf": "12372880616",
            "email": "paulomed001@gmail.com"
          },
          {
            "name": "RAFAEL VICENTINI VEIGA DE BRITO",
            "cpf": "12827200660",
            "email": "rafael.veigadebrito19@gmail.com"
          },
          {
            "name": "MARCUS VINICIUS ALVERNAZ DE FARIA",
            "cpf": "13499943670",
            "email": "alv.marcus@outlook.com"
          },
          {
            "name": "LETÍCIA BIANCO GOMES DE ALMEIDA",
            "cpf": "08953456681",
            "email": "leticia.bianco@hotmail.com"
          },
          {
            "name": "PEDRO PAULO NUNES PEREIRA",
            "cpf": "05450814674",
            "email": "pedropnp@msn.com"
          },
          {
            "name": "CLARA NOVAIS",
            "cpf": "12392342601",
            "email": "clara.nma@hotmail.com"
          },
          {
            "name": "LUDIMILA SANTOS VIANA",
            "cpf": "05348383597",
            "email": "ludisviana@gmail.com"
          },
          {
            "name": "ANA ELISA CHAVES",
            "cpf": "13489736665",
            "email": "ana-elisachaves@hotmail.com"
          },
          {
            "name": "PEDRO MARTINS CORRÊA",
            "cpf": "08391909646",
            "email": "pedroufopmedxv@gmail.com"
          },
          {
            "name": "MONIQUE GEORGES LAMBRAKOS",
            "cpf": "11800016646",
            "email": "mo.lambrakos@hotmail.com"
          },
          {
            "name": "THALES MATHEUS MENDONÇA SANTOS",
            "cpf": "09422839610",
            "email": "thalesmmsradio@gmail.com"
          },
          {
            "name": "CLAUDIO SALIBA DE AVELAR ",
            "cpf": "51246864649",
            "email": "claudiosaliba.rad@gmail.com"
          },
          {
            "name": "FABIANO FRANCO MONTEIRO PRADO",
            "cpf": "97700851620",
            "email": "fabianoprado@outlook.com"
          },
          {
            "name": "RODRIGO GOUTHIER",
            "cpf": "81143311604",
            "email": "rodrigorg@terra.com.br"
          },
          {
            "name": "RENAN FARIA DE REZENDE TEIXEIRA ",
            "cpf": "13941157680",
            "email": "renanfrt@yahoo.com"
          },
          {
            "name": "ADRIANA MARIA LAMEGO REZENDE",
            "cpf": "80786294604",
            "email": "adrianalamegorezende@gmail.com"
          },
          {
            "name": "ADRIANA VIANNA CANCADO",
            "cpf": "57077860663",
            "email": "adrianavcancado@gmail.com"
          },
          {
            "name": "ADRIANO MURTA MAIA",
            "cpf": "03434848622",
            "email": "admmaia@hotmail.com"
          },
          {
            "name": "ALESSANDRA MAGNAVACA GUIMARAES GUEDES",
            "cpf": "76526216668",
            "email": "lekaguedes34@gmail.com"
          },
          {
            "name": "ALEXANDRE TONELLI DE FARIA",
            "cpf": "00414901690",
            "email": "financeiro@boavistaagropecuaria.com.br"
          },
          {
            "name": "ANA AMELIA ALFENAS SILVA MESQUITA",
            "cpf": "05617221612",
            "email": "anaalfenassilva@gmail.com"
          },
          {
            "name": "ANA RITA DA GLORIA SOARES",
            "cpf": "02843966647",
            "email": "soares.args@gmail.com"
          },
          {
            "name": "ANDREA BOUERI TICLE LIMA",
            "cpf": "78631521604",
            "email": "bouerilima@ig.com.br"
          },
          {
            "name": "ANTONIO LOPES DA CUNHA JUNIOR",
            "cpf": "85118982634",
            "email": "antoniolopescunhajr@gmail.com"
          },
          {
            "name": "BERNARDO AUGUSTO QUINTAO FONSECA",
            "cpf": "02904496696",
            "email": "bernaquin@gmail.com"
          },
          {
            "name": "CARLA CRISTINA DE SOUSA RESENDE CABRAL",
            "cpf": "00504070665",
            "email": "cc.resende@bol.com.br"
          },
          {
            "name": "CARLOS DE ASSIS JUNIOR",
            "cpf": "94913137620",
            "email": "carlosassis.jr@hotmail.com"
          },
          {
            "name": "DENISE CRISTINA FERREIRA",
            "cpf": "82563500672",
            "email": "ferreira.dc@uol.com.br"
          },
          {
            "name": "EDSON BATISTA DE LIMA",
            "cpf": "55882943604",
            "email": "edsonrad@gmail.com"
          },
          {
            "name": "EDUARDO CARVALHO MIRANDA",
            "cpf": "97387223653",
            "email": "mirandaceduardo@gmail.com"
          },
          {
            "name": "EDUARLEY AYRAN MORAIS",
            "cpf": "66550980682",
            "email": "eduayran@gmail.com"
          },
          {
            "name": "ELVECIO STARLING DINIZ FILHO",
            "cpf": "65577396620",
            "email": "elveciostarling@gmail.com"
          },
          {
            "name": "ENIO SIQUEIRA FIUZA",
            "cpf": "32546874691",
            "email": "eniofiuza@gmail.com"
          },
          {
            "name": "FABRICIO MAIA TORRES ALVES",
            "cpf": "03200049618",
            "email": "fabriciocaca@hotmail.com"
          },
          {
            "name": "FLAVIA MARIA WANDERLEY RODRIGUES",
            "cpf": "85525308649",
            "email": "flaviamwr@gmail.com"
          },
          {
            "name": "FLAVIO AUGUSTO TEIXEIRA RONZANI",
            "cpf": "69953228604",
            "email": "ronzani@terra.com.br"
          },
          {
            "name": "GERALDO MOL STARLING FILHO",
            "cpf": "59991119604",
            "email": "geraldostarling@mac.com"
          },
          {
            "name": "GUSTAVO DE VASCONCELOS BELLO",
            "cpf": "65639286687",
            "email": "gubello@gmail.com"
          },
          {
            "name": "IVIE BRAGA DE PAULA",
            "cpf": "03226848623",
            "email": "iviepaula@gmail.com"
          },
          {
            "name": "JAMES ANDERSON DE ALMEIDA PINTO",
            "cpf": "72293721604",
            "email": "jamesaapinto@gmail.com"
          },
          {
            "name": "JEAN PATRICK DE MAGALHAES ANDRADE",
            "cpf": "02772033686",
            "email": "jpma1977@yahoo.com.br"
          },
          {
            "name": "JESIANA FERREIRA PEDROSA",
            "cpf": "05775536665",
            "email": "jesianafp@gmail.com"
          },
          {
            "name": "JULIANA CASAES GOMES HIGINO",
            "cpf": "83716475653",
            "email": "juliannacasaes@hotmail.com"
          },
          {
            "name": "JULIO GUERRA DOMINGUES",
            "cpf": "08557515685",
            "email": "juliogdomingues@gmail.com"
          },
          {
            "name": "JÚNIA DE VASCONCELOS BELLO",
            "cpf": "65639294604",
            "email": "juvbello@gmail.com"
          },
          {
            "name": "LUCIANA BATISTA ROCHA RUGANI",
            "cpf": "91517036615",
            "email": "lurugani@yahoo.com.br"
          },
          {
            "name": "LUISA LAGES DE ABREU PALADINO",
            "cpf": "06785126630",
            "email": "lages6147@gmail.com"
          },
          {
            "name": "LUIZ GABRIEL MENEZES SANGUINETTE AZEVEDO",
            "cpf": "07789520610",
            "email": "lgmsa3@gmail.com"
          },
          {
            "name": "LUIZ GONZAGA DA SILVEIRA FILHO",
            "cpf": "62823361634",
            "email": "luizfilho@gonzagasilveira.com.br"
          },
          {
            "name": "MARCELL DE BARROS DUARTE PEREIRA",
            "cpf": "03287914669",
            "email": "marcellbarros@gmail.com"
          },
          {
            "name": "MARCELO COLLARES RODRIGUES",
            "cpf": "03186383633",
            "email": "collares.geo@gmail.com"
          },
          {
            "name": "MARCELO DE QUEIROZ GARCIA",
            "cpf": "49444522687",
            "email": "mqgarcia62@gmail.com"
          },
          {
            "name": "MARCOS SILVA DUARTE",
            "cpf": "40934250600",
            "email": "marcos.duarte.bhz@gmail.com"
          },
          {
            "name": "MARCOS VINICIUS FONSECA NORONHA",
            "cpf": "05749068609",
            "email": "mvfnoronha@gmail.com"
          },
          {
            "name": "MARIA DAS GRAÇAS MACHADO TORRES",
            "cpf": "64643239620",
            "email": "gracetowers@hotmail.com"
          },
          {
            "name": "MARIA LETICIA LEONE ROCHA",
            "cpf": "65873238634",
            "email": "mleticialeone@gmail.com"
          },
          {
            "name": "MARIA PAULA BRASIL DE MELLO",
            "cpf": "82913420672",
            "email": "paulabrasilm@gmail.com"
          },
          {
            "name": "MATEUS PEREIRA SILVA",
            "cpf": "07274273698",
            "email": "mateuspsilva30@yahoo.com.br"
          },
          {
            "name": "PATRICIA CRISTINA SILVA LIMA FERNANDES",
            "cpf": "56927916687",
            "email": "fernandes.path@hotmail.com"
          },
          {
            "name": "PATRICIA PEREIRA LOPES",
            "cpf": "03650635682",
            "email": "patplopes@hotmail.com"
          },
          {
            "name": "PAULA FIGUEIREDO ROCHA",
            "cpf": "03893136614",
            "email": "paulafigrocha@gmail.com"
          },
          {
            "name": "PAULO RAMOS BOTELHO ANTUNES",
            "cpf": "01296856666",
            "email": "palu.mg@gmail.com"
          },
          {
            "name": "PAULO SEVERO BARBOSA CORTES",
            "cpf": "59879297687",
            "email": "cortespaulo@hotmail.com"
          },
          {
            "name": "PETERSON AZEVEDO FERNANDES",
            "cpf": "03738546685",
            "email": "doutorpeterson@gmail.com"
          },
          {
            "name": "RAFAEL COUTO MARQUES",
            "cpf": "84096390682",
            "email": "rafaelc.marques@yahoo.com.br"
          },
          {
            "name": "RENATO MACEDO ROSA",
            "cpf": "76827445615",
            "email": "renatomrosa67@gmail.com"
          },
          {
            "name": "RODRIGO OTAVIO MASCARENHAS REIS",
            "cpf": "83003770691",
            "email": "rotavio1970@gmail.com"
          },
          {
            "name": "ROGÉRIO TELES DE MELO",
            "cpf": "84766476620",
            "email": "rogeriotmelo@yahoo.com.br"
          },
          {
            "name": "SALVADOR REAL NETO",
            "cpf": "20309066620",
            "email": "salvador@gavazza.com.br"
          },
          {
            "name": "SILENE HIGINO FIUZA SILVA",
            "cpf": "29677327615",
            "email": "silenefiuza@me.com"
          },
          {
            "name": "SILVANA MANGEON MEIRELLES GUIMARAES",
            "cpf": "69311595691",
            "email": "smangeon@gmail.com"
          },
          {
            "name": "SILVIO CAETANO VITOI",
            "cpf": "68848919634",
            "email": "scvitoi@uol.com.br"
          },
          {
            "name": "SIMONE DE ANDRADE BAIAO GONCALVES",
            "cpf": "05273964601",
            "email": "simone.baiao@gmail.com"
          },
          {
            "name": "TIAGO PAES GOMIDE",
            "cpf": "01327964651",
            "email": "tiago.paes.gomide@gmail.com"
          },
          {
            "name": "ULISSES CAMPANHA PARENTE",
            "cpf": "55915299687",
            "email": "ucparente@gmail.com"
          },
          {
            "name": "VICENTE MAURICIO REGO",
            "cpf": "78867193600",
            "email": "vicentemrego@hotmail.com"
          },
          {
            "name": "WERNER FERNANDES PIANA",
            "cpf": "54268869620",
            "email": "wepiana@gmail.com"
          },
          {
            "name": "WILSON CAMPOS TAVARES JUNIOR",
            "cpf": "04006765673",
            "email": "wilsoncamp2000@yahoo.com.br"
          },
          {
            "name": "ANA LUCIA KEFALÁS OLIVEIRA",
            "cpf": "62866982649",
            "email": "sociosrmg01@softaliza.com.br"
          },
          {
            "name": "ANA PAULA REISS DE ARAUJO DIAS GOMES",
            "cpf": "02676972484",
            "email": "sociosrmg02@softaliza.com.br"
          },
          {
            "name": "FERNANDO EDUARDO NUNES MARIZ",
            "cpf": "52799557449",
            "email": "sociosrmg03@softaliza.com.br"
          },
          {
            "name": "MARLIVIA ALMEIDA ROMANELLI",
            "cpf": "80953255620",
            "email": "sociosrmg04@softaliza.com.br"
          },
          {
            "name": "ÓLIVER NAVARRO RIBEIRO POMPEI",
            "cpf": "06186561623",
            "email": "sociosrmg05@softaliza.com.br"
          }
        ]
      }, {
        name: 'Associação de Ginecologistas e Obstetras de Minas Gerais (SOGIMIG)',
        shortName: 'SOGIMIG',
        link: 'https://sogimig.org.br/',
        alt: 'Logo da SOGIMIG',
        src: '/logo/sogimig.png',
        affiliated: [
          {
            "name": "Abelardo Franco",
            "email": "abelardofranco@hotmail.com",
            "cpf": "73427594653"
          },
          {
            "name": "Adelaide Maria Ferreira Campos D Avila",
            "email": "adelaidedavila@gmail.com",
            "cpf": "62216597600"
          },
          {
            "name": "Adriana Carvalho de Vasconcellos",
            "email": "drixvasc2006@hotmail.com",
            "cpf": "54110866634"
          },
          {
            "name": "Adriana Mendes Carvalho Arantes",
            "email": "adrianaarantes.mc@gmail.com",
            "cpf": "90762665653"
          },
          {
            "name": "Adriana Paula Alves dos Santos",
            "email": "dr.adri@hotmail.com",
            "cpf": "02529993637"
          },
          {
            "name": "Adriana Salvador Rocha Almeida",
            "email": "adrianasalvadorrocha@hotmail.com",
            "cpf": "52812294604"
          },
          {
            "name": "Adryelle Alves Vinhadelli Rodrigues",
            "email": "adryelleab@gmail.com",
            "cpf": "00914005111"
          },
          {
            "name": "Afranio SebastiÃo Borges",
            "email": "afranioborges@terra.com.br",
            "cpf": "75550059649"
          },
          {
            "name": "Agildo Pereira Leal",
            "email": "afale@uol.com.br",
            "cpf": "09988432615"
          },
          {
            "name": "Agnaldo Lopes da Silva Filho",
            "email": "agnaldo.ufmg@gmail.com",
            "cpf": "81468636634"
          },
          {
            "name": "Alana Zanolli Spadetto",
            "email": "alanaspadetto@gmail.com",
            "cpf": "13493495773"
          },
          {
            "name": "Alberto Borges Peixoto",
            "email": "albertobpeixoto@gmail.com",
            "cpf": "01198587628"
          },
          {
            "name": "Alcir Fernando de Matos",
            "email": "alcirmatos@gmail.com",
            "cpf": "09069607620"
          },
          {
            "name": "Alessandra Alves Pinto",
            "email": "alessandraalvespinto99195@gmail.com",
            "cpf": "79383645687"
          },
          {
            "name": "Alessandra Carvalho Botelho",
            "email": "lelecbotelho@hotmail.com",
            "cpf": "06022988659"
          },
          {
            "name": "Alessandra Duarte Clarizia",
            "email": "aclarizia@gmail.com",
            "cpf": "91516811615"
          },
          {
            "name": "Alessandra Silvestrini Lacerda",
            "email": "alessandrasilvestrini07@gmail.com",
            "cpf": "03645182608"
          },
          {
            "name": "Alessandro Silva Scherr",
            "email": "asscherr@hotmail.com",
            "cpf": "06093182681"
          },
          {
            "name": "Alex Sandro LeÃo",
            "email": "asleao@uol.com.br",
            "cpf": "14596266808"
          },
          {
            "name": "Alexander Cangussu Silva",
            "email": "ACSMED@gmail.com",
            "cpf": "82264821604"
          },
          {
            "name": "Alexandre Cesar Della Garza Ronzani",
            "email": "acronzani@gmail.com",
            "cpf": "67512640625"
          },
          {
            "name": "Alexandre Macedo de Oliveira",
            "email": "zavbhe@hotmail.com",
            "cpf": "03803024625"
          },
          {
            "name": "Aléxia Sousa Guimarães",
            "email": "alexiaguimaraes96@hotmail.com",
            "cpf": "12590064683"
          },
          {
            "name": "Alexon MelgaÇo Racilan",
            "email": "ALEXONRACILAN@GMAIL.COM",
            "cpf": "00196205603"
          },
          {
            "name": "Alicce Abreu da Mata",
            "email": "alicceabreudamata@gmail.com",
            "cpf": "08985242610"
          },
          {
            "name": "Alice Maciel Fonseca E Santos",
            "email": "jessykaalencar@gmail.com",
            "cpf": "01387496638"
          },
          {
            "name": "Alice MagalhÃes Garcia",
            "email": "alicemgarcia@hotmail.com",
            "cpf": "07625580679"
          },
          {
            "name": "Alim Alves Demian",
            "email": "alim.demian@gmail.com",
            "cpf": "63338769687"
          },
          {
            "name": "Aline Caixeta Ribeiro",
            "email": "alinecaixetaribeiro@yahoo.com.br",
            "cpf": "08682931648"
          },
          {
            "name": "Aline Coelho de Queiroz",
            "email": "alinequeirozmed@yahoo.com.br",
            "cpf": "04993629699"
          },
          {
            "name": "Aline Dessimoni Salgado",
            "email": "alinesalgado03@gmail.com",
            "cpf": "09895123639"
          },
          {
            "name": "Aline Gabriela Santos Costa",
            "email": "linesancost@hotmail.com",
            "cpf": "09731021604"
          },
          {
            "name": "Aline Otero Fernandez Santos",
            "email": "alineotero.fernandez@gmail.com",
            "cpf": "11868127613"
          },
          {
            "name": "Alinne Pereira GonÇalves Costa",
            "email": "alinne.p@yahoo.com",
            "cpf": "03055484681"
          },
          {
            "name": "Allana Lopes Pereira",
            "email": "allana_lopespereira@hotmail.com",
            "cpf": "10476338689"
          },
          {
            "name": "Almyr Diniz Pipa",
            "email": "almyrpi@oi.com.br",
            "cpf": "10261176668"
          },
          {
            "name": "Aluizio Bolivar Pereira",
            "email": "aluiziobp@uol.com.br",
            "cpf": "37067613604"
          },
          {
            "name": "Alvaro Luiz Lage Alves",
            "email": "alvarolalves@task.com.br",
            "cpf": "81288816634"
          },
          {
            "name": "Amanda Arantes Perez",
            "email": "amandaperez1408@yahoo.com.br",
            "cpf": "26912117899"
          },
          {
            "name": "Amanda de Oliveira Vial",
            "email": "amandavial.med@gmail.com",
            "cpf": "10084976659"
          },
          {
            "name": "Amanda Freitas Vilela",
            "email": "amandafreitasvilela@gmail.com",
            "cpf": "11233468600"
          },
          {
            "name": "Amanda Guimarães Cunha",
            "email": "amandaguimaraescunha@gmail.com",
            "cpf": "11791936601"
          },
          {
            "name": "Amanda Helena Borges",
            "email": "amandahelenaborges@gmail.com",
            "cpf": "11266853642"
          },
          {
            "name": "Amanda Mudesto Dias Costa",
            "email": "amandamdiasc@gmail.com",
            "cpf": "12525395689"
          },
          {
            "name": "Amanda Otoni Duarte",
            "email": "amandaotoni10@hotmail.com",
            "cpf": "11863186603"
          },
          {
            "name": "Amanda Ribeiro do Amaral",
            "email": "amandamedufvjm@gmail.com",
            "cpf": "12139743644"
          },
          {
            "name": "Amanda Sarah Lima",
            "email": "amanda.s99lima@outlook.com",
            "cpf": "02257703693"
          },
          {
            "name": "Amanda Vieira Rocha Rodrigues",
            "email": "amandajf2005@hotmail.com",
            "cpf": "07948098631"
          },
          {
            "name": "Amaury Teixeira Leite Andrade",
            "email": "amandrade@terra.com.br",
            "cpf": "00360511600"
          },
          {
            "name": "Amelia Resende Rocha",
            "email": "e.7mpty@febrasgo.org.br",
            "cpf": "23965096672"
          },
          {
            "name": "Ana Alicia Morett",
            "email": "alicia.morett@gmail.com",
            "cpf": "16888525732"
          },
          {
            "name": "Ana Beatriz Campos Gomes",
            "email": "a.beatrizgomes@hotmail.com",
            "cpf": "02182868640"
          },
          {
            "name": "Ana Carla Cruz Oliveira",
            "email": "anacarlaco@outlook.com",
            "cpf": "09504177697"
          },
          {
            "name": "Ana Carolina Cunha Rocha",
            "email": "anacarol.cunhar@gmail.com",
            "cpf": "11197033602"
          },
          {
            "name": "Ana Carolina Ribeiro Costa",
            "email": "carolina.ribc@hotmail.com",
            "cpf": "12703126697"
          },
          {
            "name": "Ana Carolina Tubaldini Vilela",
            "email": "carol.tvilela@hotmail.com",
            "cpf": "09285344640"
          },
          {
            "name": "Ana Caroline Ferreira Macedo",
            "email": "anacaroline.fmacedo@gmail.com",
            "cpf": "03278507100"
          },
          {
            "name": "Ana Christina de Lacerda Lobato",
            "email": "anacllobato@gmail.com",
            "cpf": "00070032696"
          },
          {
            "name": "Ana Clara Rodrigues Luz",
            "email": "anaclararluz@gmail.com",
            "cpf": "11573020680"
          },
          {
            "name": "Ana ClÁudia Clemente Coelho Fontes",
            "email": "acccfontes@yahoo.com.br",
            "cpf": "86262793615"
          },
          {
            "name": "Ana Cláudia Felipe Santiago",
            "email": "anacfsantiago@outlook.com",
            "cpf": "12639433652"
          },
          {
            "name": "Ana Cláudia Rocha Gonçalves",
            "email": "anaclaudiarochag27@gmail.com",
            "cpf": "10421995661"
          },
          {
            "name": "Ana Elisa Pereira Lopes",
            "email": "anaelisa2406@gmail.com",
            "cpf": "11170979602"
          },
          {
            "name": "Ana FlÁvia Esteves Costa",
            "email": "anafzk@yahoo.com.br",
            "cpf": "08310784643"
          },
          {
            "name": "Ana Isabel Ladeira",
            "email": "bebelladeira@hotmail.com",
            "cpf": "13374763669"
          },
          {
            "name": "Ana Laura Araújo Rodrigues",
            "email": "analauraaraujorodrigues@gmail.com",
            "cpf": "11994321644"
          },
          {
            "name": "Ana Laura de Sousa Franklin",
            "email": "analaurasfranklin@gmail.con",
            "cpf": "10449348679"
          },
          {
            "name": "Ana Laura Peixoto Cavalcanti",
            "email": "analpcavalcanti@gmail.com",
            "cpf": "12504799675"
          },
          {
            "name": "Ana Laura Rocha Alves",
            "email": "alrochaalves@gmail.com",
            "cpf": "10507131681"
          },
          {
            "name": "Ana Lucia Ribeiro Valadares",
            "email": "anarvaladares@gmail.com",
            "cpf": "41432843672"
          },
          {
            "name": "Ana Luisa CÉzar",
            "email": "analuisacezar@hotmail.com",
            "cpf": "07767791688"
          },
          {
            "name": "Ana Luiza Lunardi Rocha",
            "email": "ana_lunardi@yahoo.com.br",
            "cpf": "03525064667"
          },
          {
            "name": "Ana Luiza Pereira Saramago",
            "email": "ana_saramago@yahoo.com.br",
            "cpf": "07972329664"
          },
          {
            "name": "Ana Luiza Silva Costa",
            "email": "ana.silva.c@hotmail.com",
            "cpf": "10960715681"
          },
          {
            "name": "Ana Maria Fonseca de Luca",
            "email": "anaddeluca@hotmail.com",
            "cpf": "51664259600"
          },
          {
            "name": "Ana Paola Cruz Lunguinho",
            "email": "apclunguinho@hotmail.com",
            "cpf": "11168726689"
          },
          {
            "name": "Ana Paula Borges Peres Duarte",
            "email": "anapaulaperesduarte@gmail.com",
            "cpf": "11745549676"
          },
          {
            "name": "Ana Paula Borges Vasconcelos",
            "email": "apbv1976@hotmail.com",
            "cpf": "00607941600"
          },
          {
            "name": "Ana Paula de Castro Gomes Gervásio",
            "email": "anacastrogervasio@gmail.com",
            "cpf": "10073810606"
          },
          {
            "name": "Ana Paula Soares Mendes",
            "email": "anapaulasoaresm@yahoo.com.br",
            "cpf": "12832787665"
          },
          {
            "name": "Ana Raphaela Simoes",
            "email": "ar-simoes@hotmail.com",
            "cpf": "12670938620"
          },
          {
            "name": "Ana Theresa Simões Rosa Borges",
            "email": "anattborges@gmail.com",
            "cpf": "01868224643"
          },
          {
            "name": "Ananda Massoli Oliveira Vilela",
            "email": "massoliananda@gmail.com",
            "cpf": "12926207654"
          },
          {
            "name": "Ananda Peixoto Silva",
            "email": "ANANDA.PEIXOTO@HOTMAIL.COM",
            "cpf": "06174381617"
          },
          {
            "name": "Anastacio Soares de Oliveira",
            "email": "anastaciomutum@yahoo.com.br",
            "cpf": "65488113649"
          },
          {
            "name": "Anderson Azevedo Andrade",
            "email": "dr.andersonazevedo@uol.com.br",
            "cpf": "04060749680"
          },
          {
            "name": "Anderson de Souza Bruno",
            "email": "anderson.brunobh@gmail.com",
            "cpf": "90066316634"
          },
          {
            "name": "AndrÉ Luis Canuto",
            "email": "alc@barbacena.com.br",
            "cpf": "76559661687"
          },
          {
            "name": "Andre Ricardo Silva da Costa",
            "email": "andrericardosc@yahoo.com.br",
            "cpf": "52952002649"
          },
          {
            "name": "Andre Soares Martins Pinheiro",
            "email": "drandrepinheiro@gmail.com",
            "cpf": "62507796634"
          },
          {
            "name": "Andrea Aparecida Brito Alves",
            "email": "andreabalves@uol.com.br",
            "cpf": "41962532615"
          },
          {
            "name": "Andrea Vilela Toledo",
            "email": "avtoledo1979@gmail.com",
            "cpf": "01311639659"
          },
          {
            "name": "AndrÉia Couto Domingos",
            "email": "andreiacoutodomingos@hotmail.com",
            "cpf": "91273145615"
          },
          {
            "name": "Andresa Barbosa",
            "email": "andresa.barbosa@gmail.com",
            "cpf": "05669532694"
          },
          {
            "name": "Andresa Vieira Silveira",
            "email": "andresavsilveira@gmail.com",
            "cpf": "13027304607"
          },
          {
            "name": "Andressa Lima Porto",
            "email": "portoandressa58@gmail.com",
            "cpf": "05060690520"
          },
          {
            "name": "Andressa Pamela de Oliveira",
            "email": "andressapamoliveira@gmail.com",
            "cpf": "11523150645"
          },
          {
            "name": "Andreza Ritielle Alves Pereira Lyra",
            "email": "ad.alves16@gmail.com",
            "cpf": "09824007644"
          },
          {
            "name": "Anelise Oliveira de Morais",
            "email": "ane.omorais@gmail.com",
            "cpf": "11062225635"
          },
          {
            "name": "Anelise Silva Franca",
            "email": "anelisesilvafranca@gmail.com",
            "cpf": "08866342610"
          },
          {
            "name": "Angelica Lemos Debs Diniz",
            "email": "angelyca@uai.com.br",
            "cpf": "86634550620"
          },
          {
            "name": "Anna Dias Salvador",
            "email": "adiassalvador@gmail.com",
            "cpf": "01608708608"
          },
          {
            "name": "Anne Karollyny Martins Monteiro Oliveira",
            "email": "annekarollyny@gmail.com",
            "cpf": "10764610694"
          },
          {
            "name": "Anne Marie Cunze",
            "email": "marie.cunze@gmail.com",
            "cpf": "11468021613"
          },
          {
            "name": "Antonio Carlos Pinto Guimaraes",
            "email": "acpgui@gmail.com",
            "cpf": "13365452672"
          },
          {
            "name": "Antonio Fernandes Lages",
            "email": "aflages@hotmail.com",
            "cpf": "34341072668"
          },
          {
            "name": "AntÔnio Francisco Terra Oliveira",
            "email": "antonnioterra@uol.com.br",
            "cpf": "21105006620"
          },
          {
            "name": "Antonio Gabriel de Vasconcelos Costa",
            "email": "agabrielvc@yahoo.com",
            "cpf": "25485741649"
          },
          {
            "name": "Antonio Leite Silva",
            "email": "antonio.leitesilva@yahoo.com.br",
            "cpf": "15830543672"
          },
          {
            "name": "Antonio Rafael Alves",
            "email": "antonioralves1954@gmail.com",
            "cpf": "22209131634"
          },
          {
            "name": "Antonio SebastiÃo da Costa Carvalho",
            "email": "med.antonio@terra.com.br",
            "cpf": "00477699634"
          },
          {
            "name": "Aquia Lacerda Garcia Pedrosa",
            "email": "aquia.alp@gmail.com",
            "cpf": "04791105656"
          },
          {
            "name": "Ariane Miranda Vaz",
            "email": "arimvaz@hotmail.com",
            "cpf": "12249844631"
          },
          {
            "name": "Aristoteles dos Santos Chaves",
            "email": "amaralchaves@uol.com.br",
            "cpf": "47098180610"
          },
          {
            "name": "Arlene de Oliveira Fernandes",
            "email": "arleneofernandes@gmail.com",
            "cpf": "89330978649"
          },
          {
            "name": "Armando Sadao Nonaka",
            "email": "armandononaka@ig.com.br",
            "cpf": "92016260610"
          },
          {
            "name": "Arnaldo da Cunha Pereira",
            "email": "acpereira38@gmail.com",
            "cpf": "80481329668"
          },
          {
            "name": "Arthur Cesario de Castro Neto",
            "email": "arthurccneto@gmail.com",
            "cpf": "13218726662"
          },
          {
            "name": "Ayla Nazareth Cunha Mascarenhas Lomanto",
            "email": "aylalomanto@outlook.com",
            "cpf": "11415607630"
          },
          {
            "name": "Barbara Carmita da Silva Silveira",
            "email": "barbaracsilveira@hotmail.com",
            "cpf": "07973464654"
          },
          {
            "name": "BÁrbara CatÃo Ferreira de Morais",
            "email": "barbaracataofm@gmail.com",
            "cpf": "11890324655"
          },
          {
            "name": "Barbara Coelho Pereira",
            "email": "barbaracoep@gmail.com",
            "cpf": "13046570600"
          },
          {
            "name": "Bárbara Larissa Silva",
            "email": "barbaralarissasilva@hotmail.com",
            "cpf": "12945265613"
          },
          {
            "name": "Bárbara Luiza Klein",
            "email": "barbaralklein2@gmail.com",
            "cpf": "10390261688"
          },
          {
            "name": "Bárbara Santos Pereira Neres",
            "email": "barbara_spn@hotmail.com",
            "cpf": "12473757658"
          },
          {
            "name": "Bárbara Soares Parreira",
            "email": "barbara_soares96@hotmail.com",
            "cpf": "09921340646"
          },
          {
            "name": "Beatriz AmÉlia Monteiro de Andrade",
            "email": "biamandrade@yahoo.com.br",
            "cpf": "03609943696"
          },
          {
            "name": "Beatriz Camilo de Oliveira",
            "email": "bea_camilo@yahoo.com.br",
            "cpf": "05870138698"
          },
          {
            "name": "Beatriz Cazarim de Souza",
            "email": "biacazarim@gmail.com",
            "cpf": "13009571666"
          },
          {
            "name": "Beatriz da Silva Deslandes",
            "email": "beatrizsdeslandes@gmail.com",
            "cpf": "69052247668"
          },
          {
            "name": "Beatriz Fonseca de Luca",
            "email": "bfluca@gmail.com",
            "cpf": "51664054634"
          },
          {
            "name": "Beatriz Martins Guerra Pantuza Almeida",
            "email": "biapantuza@hotmail.com",
            "cpf": "13937250662"
          },
          {
            "name": "Beatriz Oliveira Botrel",
            "email": "biaobotrel@hotmail.com",
            "cpf": "11145169619"
          },
          {
            "name": "Beatriz Souto Barbosa Muzzi",
            "email": "biamuzzi99@gmail.com",
            "cpf": "14609092670"
          },
          {
            "name": "Beatriz Teles Aragão",
            "email": "bt.aragao98@gmail.com",
            "cpf": "06957591328"
          },
          {
            "name": "Benedito Fabiano dos Reis",
            "email": "benefabiano@uol.com.br",
            "cpf": "02731166657"
          },
          {
            "name": "Benito Pio Vitorio Ceccato Junior",
            "email": "benitopio@gmail.com",
            "cpf": "21744602620"
          },
          {
            "name": "Bianca Maria Fernandes Salgado Soares",
            "email": "bianca_mfss@hotmail.com",
            "cpf": "12390110673"
          },
          {
            "name": "Brena Leticia Carlos Bento",
            "email": "brena.bento@yahoo.com.br",
            "cpf": "01187467669"
          },
          {
            "name": "Brenda Andrade Marquesine",
            "email": "BRENDAMARQUEZINE@HOTMAIL.COM",
            "cpf": "11104835622"
          },
          {
            "name": "Brenda de Sousa Campos",
            "email": "brendasousacampos@hotmail.com",
            "cpf": "13478762600"
          },
          {
            "name": "Brenda Paixão Marinho",
            "email": "bpaixao.bh@gmail.com",
            "cpf": "08084134655"
          },
          {
            "name": "Brenda Peixoto Menezes",
            "email": "brendaphn@hotmail.com",
            "cpf": "07180666696"
          },
          {
            "name": "Bruna Costa Queiroz",
            "email": "bruna.costaqueiroz@gmail.com",
            "cpf": "09707598603"
          },
          {
            "name": "Bruna Cristina Ribeiro Andrade Figueiredo",
            "email": "brunacrandrade@hotmail.com",
            "cpf": "06003099674"
          },
          {
            "name": "Bruna Destro Werner",
            "email": "brunadwerner@gmail.com",
            "cpf": "11917468601"
          },
          {
            "name": "Bruna Máximo de Carvalho",
            "email": "brunamcar12@hotmail.com",
            "cpf": "10257326693"
          },
          {
            "name": "Bruna Pereira Vilaça",
            "email": "brunavilaca79@gmail.com",
            "cpf": "11679118650"
          },
          {
            "name": "Bruna Rezende Bonfim",
            "email": "bruna_rbonfim@hotmail.com",
            "cpf": "08931455640"
          },
          {
            "name": "Bruna Ribeiro Maia Alves",
            "email": "bubruna06@gmail.com",
            "cpf": "11792980639"
          },
          {
            "name": "Bruna Rodrigues Leão",
            "email": "brunaleaomed@gmail.com",
            "cpf": "06067825678"
          },
          {
            "name": "Bruno Mattiello Gomes",
            "email": "bruno_mattiello@hotmail.com",
            "cpf": "09590194648"
          },
          {
            "name": "Cairo AntÔnio Guedes JÚnior",
            "email": "drcairoguedes@gmail.com",
            "cpf": "79614760672"
          },
          {
            "name": "Camila Bacelar Bastos",
            "email": "camilabacelar7@gmail.com",
            "cpf": "09133425647"
          },
          {
            "name": "Camila Caetano de Paula Miranda Valladares",
            "email": "MILA_MIRANDA_@HOTMAIL.COM",
            "cpf": "10543573664"
          },
          {
            "name": "Camila de Paula Lorenzotti",
            "email": "camilalourenzotti@live.com",
            "cpf": "11401959644"
          },
          {
            "name": "Camila Freitas Caram GuimarÃes",
            "email": "camilafcaram@gmail.com",
            "cpf": "04334287670"
          },
          {
            "name": "Camila Gabriele Silva Gama",
            "email": "camilags.ufjf@gmail.com",
            "cpf": "02479231178"
          },
          {
            "name": "Camila Karam",
            "email": "cami.karam@gmail.com",
            "cpf": "11468046608"
          },
          {
            "name": "Camila Lobo Mendes",
            "email": "camilalobom@gmail.com",
            "cpf": "05682644603"
          },
          {
            "name": "Camila Marinho Couto de Almeida Braga",
            "email": "braga.camila@gmail.com",
            "cpf": "05978976627"
          },
          {
            "name": "Camila Martins de Carvalho",
            "email": "mcarvalho.camila@gmail.com",
            "cpf": "05641115622"
          },
          {
            "name": "Camila Pereira",
            "email": "camila_gomes_pereira@outlook.com",
            "cpf": "13780439794"
          },
          {
            "name": "Camila Perim de Lima",
            "email": "camilaperimlima@gmail.com",
            "cpf": "13918318613"
          },
          {
            "name": "Camila Silva Abreu",
            "email": "camilyabreu@gmail.com",
            "cpf": "07049751650"
          },
          {
            "name": "Camila Toffoli Ribeiro",
            "email": "camtoffoli@yahoo.com.br",
            "cpf": "03970875609"
          },
          {
            "name": "Camile Gomes Teles",
            "email": "dracamilegomesteles@gmail.com",
            "cpf": "05464876618"
          },
          {
            "name": "Camilla Russi Rezende",
            "email": "millajf14@hotmail.com",
            "cpf": "10675503647"
          },
          {
            "name": "Camilla Vilela Marcolino",
            "email": "camillavilela40@gmail.com",
            "cpf": "05446455533"
          },
          {
            "name": "Cantidio Cotta de Figueiredo",
            "email": "cantidiocotta@gmail.com",
            "cpf": "00433721634"
          },
          {
            "name": "Carla Baiao de Mello Dias",
            "email": "carlabmdias@hotmail.com",
            "cpf": "03194389610"
          },
          {
            "name": "Carla Cristina da Silva Lamounier Boaventura",
            "email": "clamounierboaventura@yahoo.com.br",
            "cpf": "03610021659"
          },
          {
            "name": "Carla Victória Moreira Vasconcelos",
            "email": "carlamvasconcelos7@gmail.com",
            "cpf": "13682236643"
          },
          {
            "name": "Carlos Eduardo de Miranda Pimentel",
            "email": "carlosepimentel@gmail.com",
            "cpf": "61593737653"
          },
          {
            "name": "Carlos Eduardo Senne de Moraes",
            "email": "carlosesmoraes04@gmail.com",
            "cpf": "62737694604"
          },
          {
            "name": "Carlos Henrique Mascarenhas Silva",
            "email": "carloshenrique@materdei.com.br",
            "cpf": "80785832653"
          },
          {
            "name": "Carlos Henrique Souza de Jesus",
            "email": "carloshsjesus@gmail.com",
            "cpf": "56568630691"
          },
          {
            "name": "Carlos Mercado Alves",
            "email": "carlosmercadoalves@gmail.com",
            "cpf": "26351390753"
          },
          {
            "name": "Carlos Rogerio Junqueira Ribeiro",
            "email": "carlosrogeriojr@hotmail.com",
            "cpf": "72951796668"
          },
          {
            "name": "Carlos Washington Vieira da Silva",
            "email": "cwvieiras@yahoo.com.br",
            "cpf": "00080292615"
          },
          {
            "name": "Carolina Alves Melo",
            "email": "carolmelo2111@gmail.com",
            "cpf": "01945671688"
          },
          {
            "name": "Carolina Andrade Vitoi",
            "email": "carolvitoi@hotmail.com",
            "cpf": "11708216693"
          },
          {
            "name": "Carolina Murta Lage",
            "email": "carol_murta@hotmail.com",
            "cpf": "08770823677"
          },
          {
            "name": "Carolina Policena Melo",
            "email": "cpmelo45@gmail.com",
            "cpf": "08363640662"
          },
          {
            "name": "Carolina Soares Barros de Melo",
            "email": "carolsbmelo@yahoo.com.br",
            "cpf": "08804781602"
          },
          {
            "name": "Carolina Toigo do Espirito Santo",
            "email": "carolinatoigo@hotmail.com",
            "cpf": "06917032131"
          },
          {
            "name": "Caroline CÁssia de Morais",
            "email": "carolinecmorais@hotmail.com",
            "cpf": "09658170676"
          },
          {
            "name": "Caroline Kissilla Pereira Pascoal",
            "email": "carolkissilla@gmail.com",
            "cpf": "04705187660"
          },
          {
            "name": "Caroline Miranda Araújo",
            "email": "carolaraujo0209@gmail.com",
            "cpf": "13475849607"
          },
          {
            "name": "Caroline Vilela de Lima",
            "email": "carolvilelalima@hotmail.com",
            "cpf": "10384309682"
          },
          {
            "name": "Cassia Desiree Marra",
            "email": "cassia.desiree@gmail.com",
            "cpf": "59906014687"
          },
          {
            "name": "CÁssio Furtini Haddad",
            "email": "cassiohaddad@hotmail.com",
            "cpf": "03000138684"
          },
          {
            "name": "Cecilia Nogueira Monnerat",
            "email": "cecilianmonnerat@hotmail.com",
            "cpf": "11879659603"
          },
          {
            "name": "Cesar Augusto Ferrari Teixeira",
            "email": "cesarferrari_fly@hotmail.com",
            "cpf": "02178066860"
          },
          {
            "name": "Cesar Guido Antezana Martinez",
            "email": "cesarantezana@ig.com.br",
            "cpf": "07170181649"
          },
          {
            "name": "Chirlei Aparecida Ferreira",
            "email": "ferreira1007@yahoo.com.br",
            "cpf": "56840527620"
          },
          {
            "name": "Christiane Helena Carvalho Gomes",
            "email": "chrishcg2004@yahoo.com.br",
            "cpf": "07429997694"
          },
          {
            "name": "Cid Vasconcelos Westin",
            "email": "empty@febrasgo.org.br",
            "cpf": "03988635634"
          },
          {
            "name": "Cindy Lima Vidigal Malta",
            "email": "maltacindy@yahoo.com.br",
            "cpf": "12953078630"
          },
          {
            "name": "Cinthya Regina de Medeiros Borém Rocha",
            "email": "cinthyaborem@gmail.com",
            "cpf": "92095747615"
          },
          {
            "name": "Cintia Porto de Souza",
            "email": "cintiaportodesouza@hotmail.com",
            "cpf": "13058917678"
          },
          {
            "name": "Clara Duarte Costa Pinto",
            "email": "claraduarte974@gmail.com",
            "cpf": "13710068657"
          },
          {
            "name": "Clara Jamarino Braga de Almeida",
            "email": "clarajamarino@gmail.com",
            "cpf": "13214775626"
          },
          {
            "name": "Clara Vieira Magalhães",
            "email": "claravieiramagalhaes@gmail.com",
            "cpf": "13190384681"
          },
          {
            "name": "Clarice Guimaraes Miglio",
            "email": "claricemiglio@hotmail.com",
            "cpf": "05179028698"
          },
          {
            "name": "Clarissa Rocha Panconi Piccinini",
            "email": "clarissapanconi@hotmail.com",
            "cpf": "06372754622"
          },
          {
            "name": "Cláudia Alessandra Galvão Xavier",
            "email": "claudia.alessandra2@gmail.com",
            "cpf": "05847847408"
          },
          {
            "name": "Claudia Heloísa Santos Santana",
            "email": "claudiasantanamed23@gmail.com",
            "cpf": "06450174501"
          },
          {
            "name": "Claudia Lourdes Soares Laranjeira",
            "email": "cls.laranjeira@gmail.com",
            "cpf": "86448196668"
          },
          {
            "name": "Claudia Lucia Barbosa Salomao",
            "email": "ginecoinfantopub@yahoo.com.br",
            "cpf": "53750004668"
          },
          {
            "name": "Claudia Teixeira da Costa Lodi",
            "email": "claudiatclodi@gmail.com",
            "cpf": "63130572600"
          },
          {
            "name": "Clea Maria Pimenta Fernandes",
            "email": "clea.pimenta@hotmail.com",
            "cpf": "60009420606"
          },
          {
            "name": "Climenia Zacarelli Del Fraro",
            "email": "sirlene.oliveiravga@hotmail.com",
            "cpf": "31218334649"
          },
          {
            "name": "Consuelo Rodrigues Gallo",
            "email": "consuelo.2205@hotmail.com",
            "cpf": "57434085649"
          },
          {
            "name": "Cristiane Carine Rodrigues",
            "email": "criscarinego@hotmail.com",
            "cpf": "82140529634"
          },
          {
            "name": "Cristiane EmÍlia Dutra ValadÃo",
            "email": "crisvaladao@gmail.com",
            "cpf": "06882830630"
          },
          {
            "name": "Cristiane Mendes de Resende",
            "email": "cristianemresende@yahoo.com.br",
            "cpf": "99082071649"
          },
          {
            "name": "Cristina Cabral Geo Vercoza",
            "email": "crisvercoza@gmail.com",
            "cpf": "64219135634"
          },
          {
            "name": "Cristina Kallas Hueb",
            "email": "kallashueb@uol.com.br",
            "cpf": "98464655649"
          },
          {
            "name": "Cristina Sousa Araújo Schlemper",
            "email": "cris_araujo_@msn.com",
            "cpf": "07216098641"
          },
          {
            "name": "Dacio Jose Ribeiro",
            "email": "dacioj.ribeiro@yahoo.com.br",
            "cpf": "10067981100"
          },
          {
            "name": "Daiene Brunelli Neiva Batista",
            "email": "daienebrunelli@gmail.com",
            "cpf": "11526312689"
          },
          {
            "name": "Daisy Martins Rodrigues",
            "email": "daisymartinsrodrigues@hotmail.com",
            "cpf": "99011255615"
          },
          {
            "name": "Daniel da Silva Vieira",
            "email": "drdanielvieira@outlook.com",
            "cpf": "88164462691"
          },
          {
            "name": "Daniel Oliva Brito",
            "email": "danielolivabrito@gmail.com",
            "cpf": "07197079608"
          },
          {
            "name": "Daniela Cristina Machado TameirÃo",
            "email": "danielacmtameirao@gmail.com",
            "cpf": "54145120604"
          },
          {
            "name": "Daniela Cruz Pereira",
            "email": "danielacruz-86@hotmail.com",
            "cpf": "08070907606"
          },
          {
            "name": "Daniela Elianete Soares",
            "email": "danielaesoares@yahoo.com.br",
            "cpf": "08815793607"
          },
          {
            "name": "Daniela GuimarÃes Silva",
            "email": "danielags.med@gmail.com",
            "cpf": "07034554609"
          },
          {
            "name": "Daniela Marcia Rodrigues Caldeira",
            "email": "dmrdaniela45@gmail.com",
            "cpf": "03085081658"
          },
          {
            "name": "Daniela Rezende Moreira",
            "email": "danielarezendemoreira@gmail.com",
            "cpf": "12162357674"
          },
          {
            "name": "Danielle Cunha Martins",
            "email": "dradaniellemartins@gmail.com",
            "cpf": "07487640620"
          },
          {
            "name": "Dara de Paula Rodrigues",
            "email": "daradpr@gmail.com",
            "cpf": "09952671628"
          },
          {
            "name": "Dayse Maria Oliviera SÁ",
            "email": "daysesa.com@gmail.com",
            "cpf": "74204980678"
          },
          {
            "name": "Debora Cristina de Freitas Batista",
            "email": "deboracfbatista@gmail.com",
            "cpf": "07997650660"
          },
          {
            "name": "DÉbora da Silva Nora Henri Guitton",
            "email": "deborasnorahguitton@gmail.com",
            "cpf": "94707952704"
          },
          {
            "name": "Débora Letícia Rodrigues Santos",
            "email": "deboraleticia21@hotmail.com",
            "cpf": "07891247692"
          },
          {
            "name": "Debora Marinzek Teixeira",
            "email": "deboramarinzek@hotmail.com",
            "cpf": "56528418691"
          },
          {
            "name": "Debora Rodrigues Tolentino",
            "email": "debora.tolentino98@gmail.com",
            "cpf": "09067058602"
          },
          {
            "name": "Débora Vianna D'almeida Lucas Macharet",
            "email": "deboravdlucas@gmail.com",
            "cpf": "01647908612"
          },
          {
            "name": "Delzio Salgado Bicalho",
            "email": "DELZIOBICALHO@gmail.com",
            "cpf": "48650528600"
          },
          {
            "name": "Denise Ferreira de Oliveira",
            "email": "denisefo@uai.com.br",
            "cpf": "87666014600"
          },
          {
            "name": "Denise Vilela Brandao Andrade",
            "email": "denisevbrand@gmail.com",
            "cpf": "41226992668"
          },
          {
            "name": "Diana Cupertino Milagres",
            "email": "dianamilagres@gmail.com",
            "cpf": "09941642621"
          },
          {
            "name": "Diego da Rocha",
            "email": "diegodarocha89@gmail.com",
            "cpf": "03212937114"
          },
          {
            "name": "Drauzio Oppenheimer",
            "email": "drdrauzio@hotmail.com",
            "cpf": "51692872672"
          },
          {
            "name": "Drieu Paraizo Garcia",
            "email": "drieu@terra.com.br",
            "cpf": "11672846668"
          },
          {
            "name": "Ecimar Gonçalves da Silva Junior",
            "email": "ecimarjr2011@hotmail.com",
            "cpf": "01786366142"
          },
          {
            "name": "Eddie Fernando Candido Murta",
            "email": "eddiemurta@gmail.com",
            "cpf": "47668032649"
          },
          {
            "name": "Edilamar Rodrigues da Cruz Freitas",
            "email": "edilacruz@hotmail.com",
            "cpf": "31179550625"
          },
          {
            "name": "Edna Maria Lopes de Castro",
            "email": "flavic@uai.com.br",
            "cpf": "00418188653"
          },
          {
            "name": "Edson Morato",
            "email": "madamorato@yahoo.com.br",
            "cpf": "14800748615"
          },
          {
            "name": "Eduarda Lara Resende",
            "email": "dudalararesende@yahoo.com.br",
            "cpf": "10310522676"
          },
          {
            "name": "Eduarda Ramos de Moura",
            "email": "dudsrm@gmail.com",
            "cpf": "10526741600"
          },
          {
            "name": "Eduardo Batista Candido",
            "email": "candidoeb@gmail.com",
            "cpf": "02957144689"
          },
          {
            "name": "Eduardo Biagioni Filho",
            "email": "empty@febrasgo.org.br",
            "cpf": "00033901600"
          },
          {
            "name": "Eduardo Cunha da Fonseca",
            "email": "edu.cunhafonseca@gmail.com",
            "cpf": "61437492649"
          },
          {
            "name": "Eduardo Ferreira da Silva",
            "email": "eduardo_medicina@outlook.com",
            "cpf": "10121050670"
          },
          {
            "name": "Eduardo Siqueira Fernandes",
            "email": "fernandes.es@gmail.com",
            "cpf": "05367554695"
          },
          {
            "name": "Edval Nacle Estefen",
            "email": "edval.nacle@uol.com.br",
            "cpf": "08860076668"
          },
          {
            "name": "Elaine Silva Azevedo",
            "email": "elaineazev@yahoo.com.br",
            "cpf": "32293230848"
          },
          {
            "name": "Elaine Travaglia Santos",
            "email": "etravaglia11@gmail.com",
            "cpf": "95712674653"
          },
          {
            "name": "Eliana Maria Guimaraes Costa Maia",
            "email": "elianamgcmaia@live.com",
            "cpf": "67753540610"
          },
          {
            "name": "Eliana Motta Castanheira",
            "email": "elianacastanheira@gmail.com",
            "cpf": "40259765600"
          },
          {
            "name": "Elielton Ribeiro Nunes",
            "email": "elielton.nunes@yahoo.com",
            "cpf": "00862431603"
          },
          {
            "name": "Elisa Milagres Maciel",
            "email": "elisa_12maciel@hotmail.com",
            "cpf": "11981924612"
          },
          {
            "name": "Elizabeth da Silva",
            "email": "drelizabethdasilva@hotmail.com",
            "cpf": "42212596634"
          },
          {
            "name": "Elke Nascimento Gomes do Valle",
            "email": "elke.valle@hotmail.com",
            "cpf": "05657247540"
          },
          {
            "name": "Elsa Akemi Watanabe Pena",
            "email": "elsaawp@hotmail.com",
            "cpf": "09184591846"
          },
          {
            "name": "Emanuelle Scarlath Tomaz",
            "email": "EMANUELLE.SCARLATH@GMAIL.COM",
            "cpf": "12127720679"
          },
          {
            "name": "Emmen Carvalho Rocha",
            "email": "emmen_rocha@hotmail.com",
            "cpf": "07577681644"
          },
          {
            "name": "Eniria Amorim Ribeiro Barros",
            "email": "eniriabraga21@gmail.com",
            "cpf": "45492905600"
          },
          {
            "name": "Erci Maria Silva Alves",
            "email": "ercimaria@hotmail.com",
            "cpf": "89817508153"
          },
          {
            "name": "Erica Barcala Baptista Rodrigues",
            "email": "ericaesergio@uol.com.br",
            "cpf": "00552735728"
          },
          {
            "name": "Érica Medeiros Gomes",
            "email": "ericamedeirosg@gmail.com",
            "cpf": "08098105652"
          },
          {
            "name": "Erika Maia Abreu Soares",
            "email": "dra.erika_maia@hotmail.com",
            "cpf": "02817697618"
          },
          {
            "name": "Érika Milhomem da Silva Mota",
            "email": "erikamsmota@gmail.com",
            "cpf": "03303312303"
          },
          {
            "name": "Erika Vivianni Amaral da Cunha",
            "email": "erikaamaralcunha@hotmail.com",
            "cpf": "94035210668"
          },
          {
            "name": "Ernesto Bomtempo Neto",
            "email": "ebomtempo@gmail.com",
            "cpf": "57706115615"
          },
          {
            "name": "EstefÂnia Barbosa MagalhÃes",
            "email": "tefabm@hotmail.com",
            "cpf": "04409654624"
          },
          {
            "name": "Ester Viana Carvalho",
            "email": "estervcarvalho@hotmail.com",
            "cpf": "10366290665"
          },
          {
            "name": "Eunapio Antunes de Oliveira",
            "email": "empty@febrasgo.org.br",
            "cpf": "00884235653"
          },
          {
            "name": "Eura Martins Lage",
            "email": "euramartinslage@gmail.com",
            "cpf": "80862802687"
          },
          {
            "name": "Evelli Aline de Paula Martins",
            "email": "alineevelli1@gmail.com",
            "cpf": "12049645643"
          },
          {
            "name": "Evilane do Carmo Patricio Macedo",
            "email": "evilanemacedo@hotmail.com",
            "cpf": "07136302641"
          },
          {
            "name": "Fabiene Bernardes Castro Vale",
            "email": "fabienebcv@yahoo.com.br",
            "cpf": "05250569633"
          },
          {
            "name": "FÁbio Carneiro CorrÊa",
            "email": "fabiocorrea.mg@gmail.com",
            "cpf": "22730206604"
          },
          {
            "name": "Fabio Costa Peixoto",
            "email": "fabiocpeixoto@ufmg.br",
            "cpf": "03131900628"
          },
          {
            "name": "Fabrício Alves de Oliveira Campos",
            "email": "fabricio_campos@ymail.com",
            "cpf": "08946242612"
          },
          {
            "name": "Fabyola Jorge Cruz",
            "email": "fabyolajorge2023@hotmail.com",
            "cpf": "54766567153"
          },
          {
            "name": "Fabyulla Amaral Fernandes",
            "email": "fabyulla.afernandes@gmail.com",
            "cpf": "08859885663"
          },
          {
            "name": "Fátima Maria Guerra Zimmermmann Chaves",
            "email": "fatimazimmermmann@gmail.com",
            "cpf": "48821535649"
          },
          {
            "name": "Felipe Augusto Fernandes",
            "email": "drfelipeaugusto@yahoo.com.br",
            "cpf": "03513540698"
          },
          {
            "name": "Felipe de Oliveira Tinoco",
            "email": "tinocofelipe@hotmail.com",
            "cpf": "08967546777"
          },
          {
            "name": "Felipe Sad Salomao Martins",
            "email": "sadfelipe@me.com",
            "cpf": "08690573674"
          },
          {
            "name": "Fernanda Alhais Maia Pinto",
            "email": "nandalhais@yahoo.com.br",
            "cpf": "10203844688"
          },
          {
            "name": "Fernanda Araujo Avendanha",
            "email": "nandavendanha@gmail.com",
            "cpf": "12069443663"
          },
          {
            "name": "Fernanda Campos D'avila",
            "email": "fernandacamposdavila@gmail.com",
            "cpf": "01810025664"
          },
          {
            "name": "Fernanda Cristina da Silva Alves Ribeiro",
            "email": "fcsar2008@gmail.com",
            "cpf": "04519886635"
          },
          {
            "name": "Fernanda Felix de Oliveira",
            "email": "fernandafelix.072@gmail.com",
            "cpf": "10406960666"
          },
          {
            "name": "Fernanda Gandra Costa",
            "email": "nanda.gandra@gmail.com",
            "cpf": "10669058602"
          },
          {
            "name": "Fernanda Julliana Freitas Santos",
            "email": "fernandajulliana@icloud.com",
            "cpf": "11925767647"
          },
          {
            "name": "Fernanda MagalhÃes Menicucci",
            "email": "ferckferck@hotmail.com",
            "cpf": "05680605635"
          },
          {
            "name": "Fernanda Odete Souza Rodrigues",
            "email": "nandasouzarodrigues@hotmail.com",
            "cpf": "12639518640"
          },
          {
            "name": "Fernanda Oliveira Franco Assuncao Rezende",
            "email": "fernandaoliveira.far@gmail.com",
            "cpf": "09158084630"
          },
          {
            "name": "Fernanda Oliveira Torres",
            "email": "feotorresmed@gmail.com",
            "cpf": "07692479623"
          },
          {
            "name": "Fernanda Polisseni",
            "email": "fernanda.polisseni@clinicanidus.com.br",
            "cpf": "88295257668"
          },
          {
            "name": "Fernanda Ribeiro Rodrigues",
            "email": "nandaribeirob@hotmail.com",
            "cpf": "13499631601"
          },
          {
            "name": "Fernanda Rodrigues Martins",
            "email": "frm.rodriguesmartins@gmail.com",
            "cpf": "12188132610"
          },
          {
            "name": "Fernanda Valerio Henriques",
            "email": "fihenriques@hotmail.com",
            "cpf": "08130020602"
          },
          {
            "name": "Fernanda Vitoriano Castro Costa",
            "email": "fevit@yahoo.com",
            "cpf": "04421722650"
          },
          {
            "name": "Fernando Quintao Hosken Filho",
            "email": "fqhosken@yahoo.com.br",
            "cpf": "25961985687"
          },
          {
            "name": "Flavia Caren Andrade Vieira",
            "email": "flaviacaren@gmail.com",
            "cpf": "10388465603"
          },
          {
            "name": "Flavia Carvalho Guedes Narciso",
            "email": "flaviaguedesnarciso@yahoo.com.br",
            "cpf": "55453791691"
          },
          {
            "name": "Flávia de Souza Bernardes",
            "email": "fsbernardes35@outlook.com",
            "cpf": "13073129693"
          },
          {
            "name": "FlÁvia Mafra GuimarÃes E MagalhÃes",
            "email": "flaviamafraguima@gmail.com",
            "cpf": "00475365607"
          },
          {
            "name": "FlÁvia Rodrigues Faria Torquato",
            "email": "flaviar.faria@hotmail.com",
            "cpf": "08917510680"
          },
          {
            "name": "Flavia Souza Pinheiro",
            "email": "flavia.souzap@yahoo.com.br",
            "cpf": "11310266670"
          },
          {
            "name": "FlÁvio Nunes Lins",
            "email": "flavionlins@gmail.com",
            "cpf": "01323081500"
          },
          {
            "name": "Flavio Santos Vasconcelos Barros",
            "email": "vascbarros@hotmail.com",
            "cpf": "73205974620"
          },
          {
            "name": "Franciane Reis",
            "email": "francianerreis@gmail.com",
            "cpf": "01522943684"
          },
          {
            "name": "Francine Cruz Silveira",
            "email": "francinecsilveira@gmail.com",
            "cpf": "88813053649"
          },
          {
            "name": "Francisco Lirio Ramos Filho",
            "email": "franciscolirioramos@gmail.com",
            "cpf": "63922517668"
          },
          {
            "name": "Francisco Vidal Chicata Olazabal",
            "email": "francisco.chicata@outlook.com",
            "cpf": "35614366687"
          },
          {
            "name": "Frederico Timm Rodrigues de Sousa",
            "email": "timm.frederico@gmail.com",
            "cpf": "04100198019"
          },
          {
            "name": "Gabriel Costa Osanan",
            "email": "osanangc@yahoo.com",
            "cpf": "01342453697"
          },
          {
            "name": "Gabriel Ferreira Neto",
            "email": "gfneto@uai.com.br",
            "cpf": "64464725600"
          },
          {
            "name": "Gabriel Marotti de Oliveira",
            "email": "dr.gabrielmarotti@gmail.com",
            "cpf": "13834279765"
          },
          {
            "name": "Gabriel Martins Cruz Campos",
            "email": "gmartinscampos@hotmail.com",
            "cpf": "12500142710"
          },
          {
            "name": "Gabriela Barbara Oliveira Lara",
            "email": "gabriela.olara@hotmail.com",
            "cpf": "11064979610"
          },
          {
            "name": "Gabriela Bittencourt Davila",
            "email": "gabbitencourt@hotmail.com",
            "cpf": "86074619581"
          },
          {
            "name": "Gabriela Chaves Mendes Justino",
            "email": "gabjustino@hotmail.com",
            "cpf": "05726231600"
          },
          {
            "name": "Gabriela Davila Moreira",
            "email": "gabrieladavilamoreira@gmail.com",
            "cpf": "12929265620"
          },
          {
            "name": "Gabriela Hissa Bastos",
            "email": "gabrielahissab@gmail.com",
            "cpf": "13487623650"
          },
          {
            "name": "Gabriela Lima Alencar Souza",
            "email": "gabizinhaalencar@gmail.com",
            "cpf": "04537053402"
          },
          {
            "name": "Gabriela Moreira Gundim",
            "email": "gabmgundim@hotmail.com",
            "cpf": "65664620315"
          },
          {
            "name": "Gabriela Resende BasÍlio",
            "email": "gabriela.basilio@outlook.com.br",
            "cpf": "10915252694"
          },
          {
            "name": "Gabriela SimÃo Delorenzo",
            "email": "gabisdelorenzo@hotmail.com",
            "cpf": "01315124637"
          },
          {
            "name": "Gabriella Sant Anna Teles",
            "email": "gabriella.sant.teles@gmail.com",
            "cpf": "03432168179"
          },
          {
            "name": "Gabrielle Coimbra Mundim",
            "email": "gabrielle.mundim@aluno.imepac.edu.br",
            "cpf": "11332300677"
          },
          {
            "name": "Gabrielle Martins Moreira Valadares",
            "email": "valadaresbi@gmail.com",
            "cpf": "09595063657"
          },
          {
            "name": "Garibalde Mortoza Junior",
            "email": "gmortoza.gmj@gmail.com",
            "cpf": "25587684687"
          },
          {
            "name": "Geam Karlo de Assis Santana",
            "email": "geamkarlo@yahoo.com.br",
            "cpf": "94097917668"
          },
          {
            "name": "Geraldo Antunes Guimaraes",
            "email": "bgiguimaraes@yahoo.com.br",
            "cpf": "22162704668"
          },
          {
            "name": "Geraldo Diniz Vieira Mendes",
            "email": "geraldodvmendes@gmail.com",
            "cpf": "85881139615"
          },
          {
            "name": "Geraldo Magella Flores Mota",
            "email": "geraldo.mota@gmail.com",
            "cpf": "00409741620"
          },
          {
            "name": "Gerson Pereira Lopes",
            "email": "gersonpereiralopes.1@gmail.com",
            "cpf": "23572388600"
          },
          {
            "name": "Gil Horta Passos",
            "email": "gilpassos00@hotmail.com",
            "cpf": "10359764630"
          },
          {
            "name": "Gilmar Araujo de Carvalho",
            "email": "gilmarcarvalhogob@gmail.com",
            "cpf": "33175810691"
          },
          {
            "name": "Gilton de Menezes",
            "email": "notlig@yahoo.com.br",
            "cpf": "29279739620"
          },
          {
            "name": "Giovanna Bruna Barreto da Silva Martins",
            "email": "giovannabrunabsm@gmail.com",
            "cpf": "13040838610"
          },
          {
            "name": "Giovanna dos Reis Faria",
            "email": "fariagi18@gmail.com",
            "cpf": "13914832606"
          },
          {
            "name": "Giovanna Hooper Bittencourt",
            "email": "Giovanna.hooper@gmail.com",
            "cpf": "14399260696"
          },
          {
            "name": "Gisele Carvalho Rodrigues Valle",
            "email": "giselecrvalle@gmail.com",
            "cpf": "76668576672"
          },
          {
            "name": "Gisele Duarte dos Santos",
            "email": "giseleDS1272@GMAIL.COM",
            "cpf": "81496370600"
          },
          {
            "name": "Gisele Souza TupinÁ",
            "email": "giseletupina@hotmail.com",
            "cpf": "06490384604"
          },
          {
            "name": "Gisele Vissoci Marquini",
            "email": "giselemarquini@gmail.com",
            "cpf": "98706837620"
          },
          {
            "name": "Giselle Paulino Eugênio",
            "email": "gipaulino22@gmail.com",
            "cpf": "11733253602"
          },
          {
            "name": "Gizeli de Fatima Ribeiro dos Anjos",
            "email": "gizelifanjos@yahoo.com.br",
            "cpf": "65235479653"
          },
          {
            "name": "Gonzalo Cuba Valdez",
            "email": "drgonzalocubavaldez@gmail.com",
            "cpf": "84416467591"
          },
          {
            "name": "Graciana Elisa de Souza Grijó",
            "email": "gracianaelisa@hotmail.com",
            "cpf": "03302153619"
          },
          {
            "name": "Guilherme Henrique Ferreira Pereira",
            "email": "drguilhermehenrique@yahoo.com.br",
            "cpf": "04514342696"
          },
          {
            "name": "Guilherme Schueler de Aquino",
            "email": "guilhermeaquinogo@gmail.com",
            "cpf": "90118308734"
          },
          {
            "name": "Guilherme Silva Teixeira",
            "email": "guilhermetcaob@hotmail.com",
            "cpf": "10390284629"
          },
          {
            "name": "Gustavo Alvarenga Rocha",
            "email": "gustavoalvarenga@hotmail.com",
            "cpf": "00753494698"
          },
          {
            "name": "Gustavo Eugenio Dias",
            "email": "gustavoedias@hotmail.com",
            "cpf": "88600998620"
          },
          {
            "name": "Gustavo Ferreira de Paula",
            "email": "gferreiradepaula@gmail.com",
            "cpf": "87095041687"
          },
          {
            "name": "Hadassa Cristina Piedade Inácio",
            "email": "hadassacrist@gmail.com",
            "cpf": "43742567845"
          },
          {
            "name": "HÁlisson Pereira Duarte",
            "email": "hp.duarte@uol.com.br",
            "cpf": "03145177664"
          },
          {
            "name": "Hana Elisa Vieira",
            "email": "hana_vieira@hotmail.com",
            "cpf": "03681409110"
          },
          {
            "name": "Helena Rabelo Castro Meira",
            "email": "helena-rabelo@hotmail.com",
            "cpf": "50324160615"
          },
          {
            "name": "Helenice Eliza Marinho",
            "email": "helenicemarinho502@gmail.com",
            "cpf": "61739162668"
          },
          {
            "name": "Heleny Ferreira Rangel",
            "email": "heleny.rangel@gmail.com",
            "cpf": "85131121604"
          },
          {
            "name": "Heliana Soares Afonso Sala",
            "email": "helisala@yahoo.com.br",
            "cpf": "42203503815"
          },
          {
            "name": "Helio da Silva Bastos",
            "email": "liob@sdnet.com.br",
            "cpf": "00386510687"
          },
          {
            "name": "Helio Eduardo Borges Diniz",
            "email": "dr.heliodiniz@yahoo.com.br",
            "cpf": "27441873649"
          },
          {
            "name": "Hellen Meira Gois",
            "email": "hell.gois@gmail.com",
            "cpf": "04407197129"
          },
          {
            "name": "Heloisa Amaral Fulgencio da Cunha",
            "email": "isamaral1@hotmail.com",
            "cpf": "34874992668"
          },
          {
            "name": "Heloísa Freitas Fernandes Marques",
            "email": "heloisafreitasf@gmail.com",
            "cpf": "08346600674"
          },
          {
            "name": "Heloisa Vieira Cerri",
            "email": "dra.heloisacerri@gmail.com",
            "cpf": "14405970653"
          },
          {
            "name": "Helton Ribeiro",
            "email": "heltonribeirolavras@gmail.com",
            "cpf": "08903905687"
          },
          {
            "name": "Henrique Celso Silva",
            "email": "kleinlisboa@yahoo.com.br",
            "cpf": "21880913615"
          },
          {
            "name": "Henrique Lima Couto",
            "email": "enriquecouto@hotmail.com",
            "cpf": "03030747603"
          },
          {
            "name": "Henrique Moraes Salvador Silva",
            "email": "henrique@materdei.com.br",
            "cpf": "49620002687"
          },
          {
            "name": "Henrique Mota Dias Gabriel da Silva",
            "email": "henriquemota1995@gmail.com",
            "cpf": "11680730657"
          },
          {
            "name": "Henrique Pitchon Magalhães E Ribeiro",
            "email": "henrique.pitchon@gmail.com",
            "cpf": "11374920665"
          },
          {
            "name": "Henrique Trindade Dutra",
            "email": "henriquetdutra@hotmail.com",
            "cpf": "12330456603"
          },
          {
            "name": "Henrique Vitor Leite",
            "email": "henriquevleite60@gmail.com",
            "cpf": "67893554649"
          },
          {
            "name": "Heraldo Francisco Costa",
            "email": "heraldofcosta@gmail.com",
            "cpf": "71267522615"
          },
          {
            "name": "Herbert Francisco Hudson",
            "email": "hf.hudson@uol.com.br",
            "cpf": "00204331668"
          },
          {
            "name": "Herly Soares de Freitas",
            "email": "herlysfreitas@hotmail.com",
            "cpf": "19432500659"
          },
          {
            "name": "Hiatan Deusnil de Oliveira",
            "email": "hiatandeoliveira@hotmail.com",
            "cpf": "09291186694"
          },
          {
            "name": "Hideko Clotilde Takahashi",
            "email": "hidekotk@terra.com.br",
            "cpf": "77569075668"
          },
          {
            "name": "Hilton de Almeida Franco",
            "email": "hilton_franco@yahoo.com.br",
            "cpf": "27680525668"
          },
          {
            "name": "Homero Caporali de Oliveira",
            "email": "hpeixes@yahoo.com.br",
            "cpf": "59716940653"
          },
          {
            "name": "Hugo Alves Araujo",
            "email": "hugo_udi@yahoo.com.br",
            "cpf": "07233453683"
          },
          {
            "name": "Hugo Brandão Furlani",
            "email": "hugo.fur@hotmail.com",
            "cpf": "07823375621"
          },
          {
            "name": "Iago Teixeira Vital",
            "email": "iteixeiravital@gmail.com",
            "cpf": "13477096657"
          },
          {
            "name": "Iara Lima Couy",
            "email": "iaralcouy@yahoo.com.br",
            "cpf": "72010436687"
          },
          {
            "name": "Ilma Antunes Paiva",
            "email": "ilmaantunes.p@gmail.com",
            "cpf": "11002009677"
          },
          {
            "name": "Indyule Lima Matias",
            "email": "indyule@hotmail.com",
            "cpf": "02468667565"
          },
          {
            "name": "Inesia Araujo Couto",
            "email": "empty@febrasgo.org.br",
            "cpf": "46473491600"
          },
          {
            "name": "Inessa Beraldo de Andrade Bonomi",
            "email": "inessaberaldo@gmail.com",
            "cpf": "03007963664"
          },
          {
            "name": "Ingrid Isabel Lucindo Soares Almeida",
            "email": "ingridislalmeida@gmail.com",
            "cpf": "12481600614"
          },
          {
            "name": "Ingrid Lourenço",
            "email": "ingridlouren@gmail.com",
            "cpf": "35434286839"
          },
          {
            "name": "Ione Machado Andre Santiago",
            "email": "ionesantiagodra@gmail.com",
            "cpf": "41825632634"
          },
          {
            "name": "Iracema Maria Ribeiro da Fonseca",
            "email": "iracemaribeirodafonseca@gmail.com",
            "cpf": "80980740649"
          },
          {
            "name": "Iramil Almada Junior",
            "email": "iramilalmadajunior@gmail.com",
            "cpf": "48396877653"
          },
          {
            "name": "Isabela Abade Granzieri",
            "email": "isabelaagranzieri@gmail.com",
            "cpf": "86042023586"
          },
          {
            "name": "Isabela Braga da Silva",
            "email": "isabelabragas04@gmail.com",
            "cpf": "12743154683"
          },
          {
            "name": "Isabela Karina Silva Dias",
            "email": "isabela_diias17@hotmail.com",
            "cpf": "13187391605"
          },
          {
            "name": "Isabela Maria dos Reis Aguiar",
            "email": "aguiar.bela@hotmail.com",
            "cpf": "08050879666"
          },
          {
            "name": "Isabela Sheng Ling Miaw",
            "email": "isheng94@gmail.com",
            "cpf": "08982095608"
          },
          {
            "name": "Isabela Teixeira Parma",
            "email": "isabelatparma98@gmail.com",
            "cpf": "12114277658"
          },
          {
            "name": "Isabela Yumi Saito Delage",
            "email": "iydelage99@gmail.com",
            "cpf": "04903529100"
          },
          {
            "name": "Isabella Abidalla do Carmo",
            "email": "isabellaabidalla@gmail.com",
            "cpf": "06341987692"
          },
          {
            "name": "Isabella Barbosa de Oliveira",
            "email": "oisabellab@gmail.com",
            "cpf": "13482931607"
          },
          {
            "name": "Isabella Campos Rodrigues Ferreira",
            "email": "isacamposrodrigues@gmail.com",
            "cpf": "11505980690"
          },
          {
            "name": "Isabella Souza Montanha",
            "email": "isabellamontanha@outlook.com.br",
            "cpf": "10912375655"
          },
          {
            "name": "Isabelle Perez Ramirez Gonçalves",
            "email": "isabelleprg@hotmail.com",
            "cpf": "12252945680"
          },
          {
            "name": "Isabelle Reis Daldegan",
            "email": "daldeganisabelle@gmail.com",
            "cpf": "10794687652"
          },
          {
            "name": "Isadora Cristina de Carvalho Campos",
            "email": "isadoracampos5@hotmail.com",
            "cpf": "11259286622"
          },
          {
            "name": "Isadora de CÁssia Costa",
            "email": "isadorkosta@yahoo.com.br",
            "cpf": "13491789699"
          },
          {
            "name": "Isadora Montoaneli Bichara",
            "email": "isadora.mbichara@gmail.com",
            "cpf": "11357581661"
          },
          {
            "name": "Isadora Nogueira Assunção",
            "email": "isadora.n.assuncao@gmail.com",
            "cpf": "03318527564"
          },
          {
            "name": "Isaura Vargas de Oliveira",
            "email": "isauravo@yahoo.com.br",
            "cpf": "45352151620"
          },
          {
            "name": "Ismael Ferreira de Rezende",
            "email": "ismaelrezende@hospitalsantaclara.com.br",
            "cpf": "00493643672"
          },
          {
            "name": "Issa Mihessen Neto",
            "email": "nucleodrissamihessen@gmail.com",
            "cpf": "79024980682"
          },
          {
            "name": "Ivan Benedito da Silva",
            "email": "ivanbeneditodasilva5046@gmail.com",
            "cpf": "46976884653"
          },
          {
            "name": "Ivete de Avila",
            "email": "ivete.avila@gmail.com",
            "cpf": "32787995691"
          },
          {
            "name": "Ivonilde Vieira de Castro",
            "email": "ivonildevc@gmail.com",
            "cpf": "52600718672"
          },
          {
            "name": "Iwens Moreira de Faria",
            "email": "ultrassom@radioimagemitauna.com.br",
            "cpf": "25579584687"
          },
          {
            "name": "Izabela Pereira da Silva",
            "email": "izabela.ipds@hotmail.com",
            "cpf": "11376483688"
          },
          {
            "name": "Izabela Vieira Botelho",
            "email": "belabotelho@gmail.com",
            "cpf": "05997912680"
          },
          {
            "name": "Izabella Ribas Rocha",
            "email": "izabella.ribasr@gmail.com",
            "cpf": "13115917619"
          },
          {
            "name": "Jacqueline Braga Pereira",
            "email": "jackiebraga@yahoo.com.br",
            "cpf": "02369465603"
          },
          {
            "name": "Jaisa Santana Teixeira",
            "email": "jaisast@yahoo.com.br",
            "cpf": "01659133637"
          },
          {
            "name": "Jane Savoi Silveira",
            "email": "janesavoi@gmail.com",
            "cpf": "85151726668"
          },
          {
            "name": "Janice Sette Martino Dolabela Chagas",
            "email": "janicedolabela@gmail.com",
            "cpf": "48553425649"
          },
          {
            "name": "Jaqueline Amorim Arantes",
            "email": "jaqueline_arantes1@yahoo.com.br",
            "cpf": "10514038632"
          },
          {
            "name": "Jennyfer Pereira Flor",
            "email": "jennyferflor@outlook.com",
            "cpf": "06341796676"
          },
          {
            "name": "JÉssica Almeida Horta Duarte",
            "email": "jessica.ahduarte@gmail.com",
            "cpf": "07077081680"
          },
          {
            "name": "Jéssyca Letícia Gonçalves",
            "email": "doutorajessycagoncalves@gmail.com",
            "cpf": "10694775673"
          },
          {
            "name": "Joana Sara Fonseca Dumont",
            "email": "joanadumont@terra.com.br",
            "cpf": "04970185603"
          },
          {
            "name": "JoÃo Paulo Volpi de Vito",
            "email": "joaopaulo.volpi@yahoo.com.br",
            "cpf": "01333189664"
          },
          {
            "name": "JoÃo Pedro Junqueira Caetano",
            "email": "joaopedro@procriar.com.br",
            "cpf": "47563648615"
          },
          {
            "name": "JoÃo Tadeu Leite dos Reis",
            "email": "joaotadeu12@gmail.com",
            "cpf": "42654335615"
          },
          {
            "name": "Joaquim Dias do Nascimento Filho",
            "email": "docdias31@yahoo.com.br",
            "cpf": "00087181649"
          },
          {
            "name": "Joice Guedes Caldeira",
            "email": "joice-gc@hotmail.com",
            "cpf": "05952732623"
          },
          {
            "name": "Jordana Mol Teixeira Vieira",
            "email": "jordanamol@gmail.com",
            "cpf": "09034335674"
          },
          {
            "name": "Jose Antonio Corigliano",
            "email": "jacorigliano@hotmail.com",
            "cpf": "61738140806"
          },
          {
            "name": "JosÉ Antonio Roza JÚnior",
            "email": "drjuniorroza@gmail.com",
            "cpf": "81979681600"
          },
          {
            "name": "Jose Avilmar Lino da Silva",
            "email": "javilmarlino@gmail.com",
            "cpf": "52812723653"
          },
          {
            "name": "Jose Carlos Amin de Oliveira",
            "email": "jcarlosamin@bol.com.br",
            "cpf": "44375778687"
          },
          {
            "name": "Jose Carlos Pimenta",
            "email": "empty@febrasgo.org.br",
            "cpf": "00834998653"
          },
          {
            "name": "Jose Cateb Junior",
            "email": "jcatebjr@gmail.com",
            "cpf": "08710570691"
          },
          {
            "name": "Jose Costa de Araujo",
            "email": "drjosearaujo@yahoo.com.br",
            "cpf": "10575235691"
          },
          {
            "name": "Jose Francisco Jorge Ribeiro Mendes",
            "email": "mendes88x@gmail.com",
            "cpf": "33397023653"
          },
          {
            "name": "JosÉ Leir Paraizo",
            "email": "leir@p2i.com.br",
            "cpf": "23726440682"
          },
          {
            "name": "Jose Marcelo Vaz de Melo",
            "email": "drjosemvmelo@ig.com.br",
            "cpf": "07075022687"
          },
          {
            "name": "Jose Mauricio Faleiro",
            "email": "clinicacliego@hotmail.com",
            "cpf": "11261307615"
          },
          {
            "name": "Jose Maury do Carmo Monteiro",
            "email": "monteiromaury@uol.com.br",
            "cpf": "51653753668"
          },
          {
            "name": "JosÉ Thadeu Stecca",
            "email": "drthadeu@hotmail.com",
            "cpf": "28619056620"
          },
          {
            "name": "José Victor Afonso Freire",
            "email": "jvaf.freire@gmail.com",
            "cpf": "11954129670"
          },
          {
            "name": "JosÉ Wilian dos Santos",
            "email": "wiliansantoro62@gmail.com",
            "cpf": "03898772802"
          },
          {
            "name": "Joseane Soares",
            "email": "drajoseanesoares@gmail.com",
            "cpf": "67464165691"
          },
          {
            "name": "Josiane Clara Fonseca Bastos Maciel",
            "email": "josiane_cfb@yahoo.com.br",
            "cpf": "06878813662"
          },
          {
            "name": "Jossielly Rodrigues Pinheiro",
            "email": "jossypinheiro@hotmail.com",
            "cpf": "13500854648"
          },
          {
            "name": "Josue Gonzaga",
            "email": "gonzagajosue@hotmail.com",
            "cpf": "57044651615"
          },
          {
            "name": "Joyce Peixoto dos Santos Rinoldi",
            "email": "drajoycepsantos@gmail.com",
            "cpf": "09526798686"
          },
          {
            "name": "Julia Adriane Fonseca Lobo",
            "email": "juliaafonsecalobo@gmail.com",
            "cpf": "11536493651"
          },
          {
            "name": "Júlia Arantes Oliveira",
            "email": "arantesju95@gmail.com",
            "cpf": "12912775604"
          },
          {
            "name": "Júlia Azevedo de Almeida",
            "email": "juzevedo1602@hotmail.com",
            "cpf": "13477046633"
          },
          {
            "name": "Julia Barbosa de Melo Gomes",
            "email": "barbosademelojulia@gmail.com",
            "cpf": "09023227611"
          },
          {
            "name": "Júlia Fernanda Amorim Silva",
            "email": "juh-amorim@live.com",
            "cpf": "13499752654"
          },
          {
            "name": "Julia Figueiredo Felix Lara",
            "email": "juliafflara@hotmail.com",
            "cpf": "08050394654"
          },
          {
            "name": "Julia Maria Alvarenga Ribeiro",
            "email": "juliamaria96@gmail.com",
            "cpf": "11657728684"
          },
          {
            "name": "Júlia Mayra de Andrade E Souza",
            "email": "juliasouza28@gmail.com",
            "cpf": "12426441640"
          },
          {
            "name": "Júlia Nunes Soares",
            "email": "s.julianunes@gmail.com",
            "cpf": "12158457660"
          },
          {
            "name": "Julia Oliveira Martins",
            "email": "juliamartins.97@hotmail.com",
            "cpf": "08785891630"
          },
          {
            "name": "Júlia Vasconcellos Castro",
            "email": "juliavasconcell@hotmail.com",
            "cpf": "12803619644"
          },
          {
            "name": "Juliana Augusta Dias",
            "email": "jadbh@hotmail.com",
            "cpf": "02874400602"
          },
          {
            "name": "Juliana Coutinho Calcagno",
            "email": "julianacalcagno@yahoo.com",
            "cpf": "03520797623"
          },
          {
            "name": "Juliana Eugenio de Souza",
            "email": "ju_eugenio@yahoo.com.br",
            "cpf": "05989091680"
          },
          {
            "name": "Juliana Mattoso Campanha",
            "email": "julianamattoso@bol.com.br",
            "cpf": "73197599691"
          },
          {
            "name": "Juliana MoysÉs Leite Abdalla",
            "email": "juliana.mbl@gmail.com",
            "cpf": "04016918618"
          },
          {
            "name": "Juliana Pinto Coelho",
            "email": "pintocoelho@uol.com.br",
            "cpf": "91016118600"
          },
          {
            "name": "Juliana Silva Barra",
            "email": "jusilvabarra@gmail.com",
            "cpf": "90152905634"
          },
          {
            "name": "Julio Dias Valadares",
            "email": "juri8@uol.com.br",
            "cpf": "65822382649"
          },
          {
            "name": "Júllia de Castro Bolina Filgueiras",
            "email": "julliacastro@outlook.com",
            "cpf": "10176174656"
          },
          {
            "name": "Juscelino Euler Oliveira",
            "email": "juscelino_oliveira@hotmail.com",
            "cpf": "78460336620"
          },
          {
            "name": "Jussara de Souza Mayrink",
            "email": "jussaramayrink@gmail.com",
            "cpf": "05398012673"
          },
          {
            "name": "Kamila Ketlen Rodrigues de Oliveira",
            "email": "kamilaketlen01@gmail.com",
            "cpf": "12799932606"
          },
          {
            "name": "Karenn Tavares Kiepper",
            "email": "karenntavareskiepper@gmail.com",
            "cpf": "10775274623"
          },
          {
            "name": "Karina Aparecida de Melo Farinazzo",
            "email": "karinafarinazzo@yahoo.com.br",
            "cpf": "85589977649"
          },
          {
            "name": "Karina Ferrari de Queiroz",
            "email": "KARINAFERRARI2008@GMAIL.COM",
            "cpf": "06001086192"
          },
          {
            "name": "Karine Mendonça Davi Rodrigues",
            "email": "karinedavi@hotmail.com",
            "cpf": "08122767605"
          },
          {
            "name": "Karoline Fernandes",
            "email": "drakarolinefernandes@gmail.com",
            "cpf": "08754310628"
          },
          {
            "name": "KÁtia Aparecida da Silva",
            "email": "katia.silva@msn.com",
            "cpf": "02731909625"
          },
          {
            "name": "KÁtia Cilene Moreira",
            "email": "katiacilenebh@yahoo.com.br",
            "cpf": "03613411644"
          },
          {
            "name": "Katia Pires Vaz Brandao Teixeira",
            "email": "katiapvaz@hotmail.com",
            "cpf": "38573245620"
          },
          {
            "name": "Kelly Cordeiro Silva",
            "email": "kellycordeiro08@gmail.com",
            "cpf": "11434849678"
          },
          {
            "name": "Kelly Viviane Gomes Marques Loureiro",
            "email": "kellyvivianegm@yahoo.com.br",
            "cpf": "08094949651"
          },
          {
            "name": "Késia de Souza Ruela",
            "email": "kesiasruela@hotmail.com",
            "cpf": "06730095644"
          },
          {
            "name": "Lais Coimbra Cremasco Tavares",
            "email": "lais_coimbra@hotmail.com",
            "cpf": "09217441619"
          },
          {
            "name": "Lais Jube Sanches Zanzoni",
            "email": "laisjube@hotmail.com",
            "cpf": "04302686103"
          },
          {
            "name": "Lais Loureiro Ticle",
            "email": "laisticle@gmail.com",
            "cpf": "08268510617"
          },
          {
            "name": "Lais Maria Peixoto Vieira",
            "email": "lais.mpv@gmail.com",
            "cpf": "10824547616"
          },
          {
            "name": "Laissa Nascimento Bernardes Souza",
            "email": "laissanascimento17@gmail.com",
            "cpf": "09485753608"
          },
          {
            "name": "Lana Auxiliadora Pereira da Cruz",
            "email": "lanauxiliadora@gmail.com",
            "cpf": "03934719694"
          },
          {
            "name": "Lara Azevedo Prais Caldeira Brant",
            "email": "larapcbrant@gmail.com",
            "cpf": "11270964607"
          },
          {
            "name": "Lara Baldanza Mattos Alves",
            "email": "larabaldanza@hotmail.com",
            "cpf": "13318832618"
          },
          {
            "name": "Lara Maximiano Rodrigues",
            "email": "laramaximiano.rodrigues@gmail.com",
            "cpf": "12698097680"
          },
          {
            "name": "Lara Reggiani Nepomuceno",
            "email": "reggianilara@gmail.com",
            "cpf": "02225191697"
          },
          {
            "name": "Lara Rodrigues Felix",
            "email": "lararodriguesfelix@yahoo.com.br",
            "cpf": "07314407657"
          },
          {
            "name": "Lara Souto Pamfílio de Sousa",
            "email": "lara.pamfilio@hotmail.com",
            "cpf": "11618090666"
          },
          {
            "name": "Larissa Braga Costa",
            "email": "dralarissabragacosta@gmail.com",
            "cpf": "12340250609"
          },
          {
            "name": "Larissa Couto Castro",
            "email": "ccoutolarissa@outlook.com.br",
            "cpf": "10654107602"
          },
          {
            "name": "Larissa Cristina Ferreira",
            "email": "larissa_cferreira@outlook.com",
            "cpf": "12530858624"
          },
          {
            "name": "Larissa de Souza Cuco Sanches",
            "email": "larissacucob@gmail.com",
            "cpf": "16329693781"
          },
          {
            "name": "Larissa Evelyn Corrêa",
            "email": "larissacorreae@gmail.com",
            "cpf": "12447387601"
          },
          {
            "name": "Larissa Fonseca Belém",
            "email": "dralarissafonsecabelem@gmail.com",
            "cpf": "13479114644"
          },
          {
            "name": "Larissa Grintaci Pereira Costa",
            "email": "lari.grintaci@hotmail.com",
            "cpf": "37643199841"
          },
          {
            "name": "Larissa Krieck Marques",
            "email": "larissakrieck@hotmail.com",
            "cpf": "11109970609"
          },
          {
            "name": "Larissa Milani Coutinho",
            "email": "larissamcoutinho@yahoo.com.br",
            "cpf": "07267498698"
          },
          {
            "name": "Larissa Morais Souza",
            "email": "larissamsouzabr@hotmail.com",
            "cpf": "12112382616"
          },
          {
            "name": "Larissa Oliveira de Aquino",
            "email": "larissaoliveiraquino@gmail.com",
            "cpf": "06438554677"
          },
          {
            "name": "Larissa Paola Ferreira Figueiredo",
            "email": "larifp.ferreira@gmail.com",
            "cpf": "12519116684"
          },
          {
            "name": "Larissa Silva TristÃo GonÇalves",
            "email": "laari_st@hotmail.com",
            "cpf": "10005940680"
          },
          {
            "name": "Larissa Siqueira Campos",
            "email": "larissa.scampos@hotmail.com",
            "cpf": "13098415606"
          },
          {
            "name": "Larissa Volpini Barreto Borém",
            "email": "laravolpini@gmail.com",
            "cpf": "09176789667"
          },
          {
            "name": "Laura Beatriz de Carvalho Oliveira",
            "email": "laub.oliveira13@gmail.com",
            "cpf": "45442634840"
          },
          {
            "name": "Laura Cristine Tavares Pimenta dos Santos",
            "email": "laurapimenta_med@hotmail.com",
            "cpf": "06286350608"
          },
          {
            "name": "Laura de Lima Carvalho",
            "email": "lauralc_14@hotmail.com",
            "cpf": "10857807676"
          },
          {
            "name": "Laura Eneida Santos",
            "email": "lauraeneida_02@hotmail.com",
            "cpf": "11337526673"
          },
          {
            "name": "Laura Maria Almeida Maia",
            "email": "lma.maia@yahoo.com.br",
            "cpf": "01233772694"
          },
          {
            "name": "Laura Melo Werneck de Toledo",
            "email": "laurawerneck98@gmail.com",
            "cpf": "12348617633"
          },
          {
            "name": "Laynara Morais Matins da Silva",
            "email": "laynaramorais21@gmail.com",
            "cpf": "10216905621"
          },
          {
            "name": "Layra Christine Almeida Amarante",
            "email": "layra.amarante@yahoo.com.br",
            "cpf": "10332712680"
          },
          {
            "name": "Leandro Nogueira Freitas",
            "email": "lenfreitas@yahoo.com.br",
            "cpf": "04154818643"
          },
          {
            "name": "Leci Veiga Caetano Amorim",
            "email": "leci.amorim@procriar.com.br",
            "cpf": "06778203641"
          },
          {
            "name": "Lecio Jose de Carvalho",
            "email": "leciojcarvalho@gmail.com",
            "cpf": "44474415604"
          },
          {
            "name": "Leiko Martins Alves",
            "email": "leikomartins@hotmail.com",
            "cpf": "09821267602"
          },
          {
            "name": "Leila Ferreira de Pinho",
            "email": "leilafpinho@gmail.com",
            "cpf": "08644991671"
          },
          {
            "name": "LÉlia Moreira Toledo",
            "email": "leliamoreiratoledo@yahoo.com.br",
            "cpf": "50969463634"
          },
          {
            "name": "Leonardo da Silva Casarotti",
            "email": "leocasarotti@gmail.com",
            "cpf": "02418909697"
          },
          {
            "name": "LetÍcia Afonso Pereira Calil",
            "email": "leticiacalilgv@msn.com",
            "cpf": "06249638610"
          },
          {
            "name": "Letícia Alves Mendonça",
            "email": "leticia.alves.08@hotmail.com",
            "cpf": "10337561648"
          },
          {
            "name": "Letícia Henriques Neto Salgado",
            "email": "leticiahns@hotmail.com",
            "cpf": "12624524657"
          },
          {
            "name": "Leticia Moreira Pessini",
            "email": "lelepessini@hotmail.com",
            "cpf": "13236684704"
          },
          {
            "name": "Letícia Perpétuo Alves",
            "email": "dra.leticiaperpetuo@gmail.com",
            "cpf": "09166420628"
          },
          {
            "name": "Letícia Salles Fialho Menta",
            "email": "lelementa@hotmail.com",
            "cpf": "12374128628"
          },
          {
            "name": "LetÍcia Sanchez Ferreira",
            "email": "lleticiasanchezf@gmail.com",
            "cpf": "08958701692"
          },
          {
            "name": "Leyla Cabral Pipa",
            "email": "leylapipa@gmail.com",
            "cpf": "52998100678"
          },
          {
            "name": "Lia Vieira Boufleur Drumond",
            "email": "clinica_sante@yahoo.com.br",
            "cpf": "39576116600"
          },
          {
            "name": "Lídia Togneri Profilo Krüger",
            "email": "lidiatog1@gmail.com",
            "cpf": "14942606705"
          },
          {
            "name": "Lidinei Jose Alves",
            "email": "ljamed@hotmail.com",
            "cpf": "05521735682"
          },
          {
            "name": "Lígia Carvalho Barbosa",
            "email": "ligiacb@outlook.com",
            "cpf": "10867321628"
          },
          {
            "name": "Lilian de Oliveira",
            "email": "medlilian@icloud.com.br",
            "cpf": "01403411611"
          },
          {
            "name": "Liliana Zaccarelli Del Fraro Mota",
            "email": "izmota@uol.com.br",
            "cpf": "31758509600"
          },
          {
            "name": "Lina Maria de Menezes Neves",
            "email": "linamariamn@yahoo.com.br",
            "cpf": "43901131604"
          },
          {
            "name": "Lina Noor Constantin E Coutinho Vargas",
            "email": "linanoorcmed@gmail.com",
            "cpf": "07144188623"
          },
          {
            "name": "Lindolfo Henrique Strappa Martins",
            "email": "martinslindolfo@yahoo.com.br",
            "cpf": "31466516615"
          },
          {
            "name": "LÍvia Drumond Akl",
            "email": "ldakl2@yahoo.com.br",
            "cpf": "04423757605"
          },
          {
            "name": "Lívia Morais Amaral",
            "email": "liviamamaral@yahoo.com.br",
            "cpf": "09970422650"
          },
          {
            "name": "Livia Muzzi Diniz Brito",
            "email": "liviamuzzi@gmail.com",
            "cpf": "06949271638"
          },
          {
            "name": "Lizandra Maris Borges Oliveira",
            "email": "lizandrambo@hotmail.com",
            "cpf": "06014948651"
          },
          {
            "name": "Lohane Lourenço Rodrigues",
            "email": "lohanelrodrigs@gmail.com",
            "cpf": "12422597670"
          },
          {
            "name": "Lorena de Moraes Oliveira",
            "email": "lorenamoliveira@gmail.com",
            "cpf": "10081985606"
          },
          {
            "name": "Luana Gonçalves de Souza",
            "email": "luanagdsouza@gmail.com",
            "cpf": "10116512628"
          },
          {
            "name": "Luana Machado Chianca",
            "email": "luchianca@hotmail.com",
            "cpf": "07743276694"
          },
          {
            "name": "Luca Braga de Santana",
            "email": "lucabsantana8@gmail.com",
            "cpf": "03532176114"
          },
          {
            "name": "Lucas Vianna Machado",
            "email": "lucas@lucasmachado.com.br",
            "cpf": "00131113615"
          },
          {
            "name": "Lucia Helena Sant Ana Haikal",
            "email": "luciahaikal@yahoo.com.br",
            "cpf": "51454823968"
          },
          {
            "name": "Luciana Carvalho Martins",
            "email": "lucianacmartins@hotmail.com",
            "cpf": "03228805646"
          },
          {
            "name": "Luciana Rezende Pais",
            "email": "paisluciana@yahoo.com.br",
            "cpf": "05745355603"
          },
          {
            "name": "Luciana Vieira Martins",
            "email": "luvmartins@yahoo.com.br",
            "cpf": "09774839676"
          },
          {
            "name": "Luciana Vilela Viotti",
            "email": "lu_viotti@yahoo.com.br",
            "cpf": "04694072633"
          },
          {
            "name": "Luciana Ximenes Bonani Alvim Brito",
            "email": "ximenes_luciana@hotmail.com",
            "cpf": "08283872737"
          },
          {
            "name": "Luciana Zanforlin Martins",
            "email": "lzanforlin73@yahoo.com.br",
            "cpf": "00117873683"
          },
          {
            "name": "Luciano da Silva Teixeira",
            "email": "administrativo@clinicaeccos.com.br",
            "cpf": "37240315649"
          },
          {
            "name": "Luciano Fernandes Loures",
            "email": "lfernandesloures@yahoo.com.br",
            "cpf": "05835508603"
          },
          {
            "name": "Luciano Vial Faria",
            "email": "lut@redecitel.com.br",
            "cpf": "85376523772"
          },
          {
            "name": "Luciene Gomes Lucas",
            "email": "luciene_lucas@hotmail.com",
            "cpf": "67572677649"
          },
          {
            "name": "Lucio Marcio Perri de Resende",
            "email": "luciomperri@gmail.com",
            "cpf": "80706533615"
          },
          {
            "name": "Ludimila Gomes Lopes",
            "email": "ludilopes@yahoo.com.br",
            "cpf": "06285749671"
          },
          {
            "name": "Ludmilla Coutinho Markowicz",
            "email": "Ludmilla.markowicz@gmail.com",
            "cpf": "01217850686"
          },
          {
            "name": "Ludmilla Roberta de Lima",
            "email": "ludmillarl99@gmail.com",
            "cpf": "14210655686"
          },
          {
            "name": "Luis Claudio Coelho Correa",
            "email": "26luisclaudio@gmail.com",
            "cpf": "74570234615"
          },
          {
            "name": "Luis Gustavo Rosa Pizani",
            "email": "luisgustavopizani@yahoo.com.br",
            "cpf": "42508495620"
          },
          {
            "name": "Luis Paulo Zica Silva",
            "email": "luispaulozica@gmail.com",
            "cpf": "09913380650"
          },
          {
            "name": "Luísa de Mendonça Corrêa",
            "email": "luisa.mcorrea@yahoo.com",
            "cpf": "09070565633"
          },
          {
            "name": "Luisa Fernandes de Andrade",
            "email": "lufandrade27@gmail.com",
            "cpf": "02213063664"
          },
          {
            "name": "Luisa Ferreira Arantes",
            "email": "luisa-arantes@hotmail.com",
            "cpf": "07953711605"
          },
          {
            "name": "Luisa MarÇal de Paula",
            "email": "luisamarcaldepaula@gmail.com",
            "cpf": "11196612692"
          },
          {
            "name": "Luísa Menezes Batista",
            "email": "luisabatista18@hotmail.com",
            "cpf": "12370613696"
          },
          {
            "name": "Luísa Oliveira Coelho",
            "email": "luisaolivcoelho@gmail.com",
            "cpf": "12337899616"
          },
          {
            "name": "Luísa Silva de Carvalho Ribeiro",
            "email": "luisascrib@gmail.com",
            "cpf": "06773977630"
          },
          {
            "name": "Luisa Vianna Cançado",
            "email": "luisaviannacancado@gmail.com",
            "cpf": "12932068652"
          },
          {
            "name": "Luise Rosa Figueiredo Souza",
            "email": "luiserosafs@hotmail.com",
            "cpf": "13491290627"
          },
          {
            "name": "Luiz Antonio da Silva",
            "email": "luiz.a.silva@hotmail.com",
            "cpf": "55871569668"
          },
          {
            "name": "Luiz Carlos de Carvalho",
            "email": "lccgineco@yahoo.com.br",
            "cpf": "38054329687"
          },
          {
            "name": "Luiz Fernando Neves Ribeiro",
            "email": "luizfnr@gmail.com",
            "cpf": "61104027615"
          },
          {
            "name": "Luiz Guilherme Neves Caldeira",
            "email": "nevesguilherme@yahoo.com.br",
            "cpf": "06733366622"
          },
          {
            "name": "Luiza BraganÇa Lana de Rezende",
            "email": "xxluizablrxx@gmail.com",
            "cpf": "06702192665"
          },
          {
            "name": "Luiza de Souza Cabral",
            "email": "luizacabralsz@gmail.com",
            "cpf": "13374413684"
          },
          {
            "name": "Luiza Elian Reis",
            "email": "lulianreis@gmail.com",
            "cpf": "13840725607"
          },
          {
            "name": "Luiza Fonseca Couto",
            "email": "lu.fonseca.couto@gmail.com",
            "cpf": "09364775635"
          },
          {
            "name": "Luiza Meelhuysen Sousa Aguiar",
            "email": "luizamesousa@gmail.com",
            "cpf": "10229525601"
          },
          {
            "name": "Luiza Moreira Gomes",
            "email": "luizamoreirag00@gmail.com",
            "cpf": "08896439620"
          },
          {
            "name": "Luiza Storch Carvalho",
            "email": "luizastorchc@gmail.com",
            "cpf": "13244692699"
          },
          {
            "name": "Luiza Thamiris de Oliveira Machado",
            "email": "luizathamiris96@gmail.com",
            "cpf": "13915314692"
          },
          {
            "name": "Magali Guimaraes Moreira",
            "email": "magaliguimaraesmoreira@gmail.com",
            "cpf": "52771393620"
          },
          {
            "name": "Magda Aparecida Carrijo",
            "email": "magdacarrijo260@gmail.com",
            "cpf": "27349896620"
          },
          {
            "name": "Magda Soares Ferreira Horta",
            "email": "magdasfhorta@gmail.com",
            "cpf": "72265850659"
          },
          {
            "name": "Magno de Freitas Malafaia",
            "email": "magno.malafaia@hotmail.com",
            "cpf": "01182497624"
          },
          {
            "name": "Manuel Alberto Goncalves Marques",
            "email": "marques_57@yahoo.com.br",
            "cpf": "04672038734"
          },
          {
            "name": "Manuel Mauricio Goncalves",
            "email": "manuelmauricio41@yahoo.com.br",
            "cpf": "04514416649"
          },
          {
            "name": "Manuela Mancini Carvalho",
            "email": "manuelamancinicarvalho@gmail.com",
            "cpf": "11671247663"
          },
          {
            "name": "Marcela Reis Fonseca",
            "email": "marcelarf2@gmail.com",
            "cpf": "10849898676"
          },
          {
            "name": "Marcela Rosa Dias",
            "email": "marcelarosadias@gmail.com",
            "cpf": "00726858676"
          },
          {
            "name": "Marcela Vitoria Galvao Vida",
            "email": "marcelagalvaovida@gmai.com",
            "cpf": "10044153627"
          },
          {
            "name": "Marcella Barroso Marques Martins",
            "email": "MARCELLABMM98@GMAIL.COM",
            "cpf": "11815634618"
          },
          {
            "name": "Marcella Bussinger Rodrigues",
            "email": "marcella.bussinger@hotmail.com",
            "cpf": "11695642678"
          },
          {
            "name": "Marcella Nahas Brandão",
            "email": "marcella.nb29@gmail.com",
            "cpf": "09271378601"
          },
          {
            "name": "Marcelo Eustaquio Fagundes",
            "email": "mefagundes@yahoo.com.br",
            "cpf": "40191885649"
          },
          {
            "name": "Marcelo Leandro Pereira",
            "email": "marceloleper@gmail.com",
            "cpf": "48540064634"
          },
          {
            "name": "Marcelo Maciel de Araujo Porto",
            "email": "marceloportodr@hotmail.com",
            "cpf": "32922507653"
          },
          {
            "name": "MÁrcia Aires Rodrigues de Freitas",
            "email": "mairesfreitas@hotmail.com",
            "cpf": "05628480614"
          },
          {
            "name": "Marcia Andrea Mesquita Mendes",
            "email": "mammgo@hotmail.com",
            "cpf": "53256085687"
          },
          {
            "name": "Marcia Aurelia Prado Boaventura",
            "email": "mapboaventura@gmail.com",
            "cpf": "37160451600"
          },
          {
            "name": "Marcia Cristina Franca Ferreira",
            "email": "francaferreiramc@gmail.com",
            "cpf": "02681677610"
          },
          {
            "name": "Marcia de Araujo Romualdo",
            "email": "marcia.a.romualdo@gmail.com",
            "cpf": "90004167600"
          },
          {
            "name": "MÁrcia Ferreira Rezende",
            "email": "marcinha_ferre@hotmail.com",
            "cpf": "03254412605"
          },
          {
            "name": "Marcia MendonÇa Carneiro",
            "email": "marciamc.ufmg@gmail.com",
            "cpf": "71302743600"
          },
          {
            "name": "Marcia Pedrosa de Oliveira",
            "email": "marcia.oliveira1779@terra.com.br",
            "cpf": "01665491779"
          },
          {
            "name": "Marcia Pinto Eulalio de Souza",
            "email": "dramarciaeulalio@gmail.com",
            "cpf": "29735327600"
          },
          {
            "name": "Marcia Salvador Geo",
            "email": "marcia@materdei.com.br",
            "cpf": "58131779653"
          },
          {
            "name": "MÁrcio Alexandre HipÓlito Rodrigues",
            "email": "marcioahr@gmail.com",
            "cpf": "71548432687"
          },
          {
            "name": "Marcio Antonio Pinto Brandao",
            "email": "mbrandao50@hotmail.com",
            "cpf": "30022665668"
          },
          {
            "name": "Marcio Couto Gomes",
            "email": "marciocogo@hotmail.com",
            "cpf": "10640011659"
          },
          {
            "name": "Marcio Gomes Vilela",
            "email": "mbiriba@hotmail.com",
            "cpf": "37018515653"
          },
          {
            "name": "Marcio Jose Rosa Requeijo",
            "email": "marciorequeijo3@hotmail.com",
            "cpf": "90308310659"
          },
          {
            "name": "Marcio Lucio de Miranda",
            "email": "ceapefma@hotmail.com",
            "cpf": "01359444653"
          },
          {
            "name": "Marco Tulio Vaintraub",
            "email": "marcotulio@clinicavenus.med.br",
            "cpf": "48865206691"
          },
          {
            "name": "Marcos Aurelio Cota Teixeira",
            "email": "maureliocteixeira@gmail.com",
            "cpf": "00332984672"
          },
          {
            "name": "Marcos Lamim de Moraes",
            "email": "marcos.lamim@hotmail.com",
            "cpf": "72312629615"
          },
          {
            "name": "Marcos Machado Issa",
            "email": "marcaoissa@gmail.com",
            "cpf": "61834815649"
          },
          {
            "name": "Marcos Roberto Taveira",
            "email": "marcostaveira47@gmail.com",
            "cpf": "76865967615"
          },
          {
            "name": "Maria Alice Boareto Freitas",
            "email": "m.aliceboareto@gmail.com",
            "cpf": "10729724689"
          },
          {
            "name": "Maria Alice Vieira de Freitas",
            "email": "licinhavf@gmail.com",
            "cpf": "06524013689"
          },
          {
            "name": "Maria Amelia Sarmiento Dias Silva",
            "email": "mariaameliasarmiento@gmail.com",
            "cpf": "55135110615"
          },
          {
            "name": "Maria Angela Girardi",
            "email": "m-girardi@hotmail.com",
            "cpf": "28535677615"
          },
          {
            "name": "Maria AngÉlica GalvÃo Longo",
            "email": "materlongo1@gmail.com",
            "cpf": "51127342649"
          },
          {
            "name": "Maria Aparecida Fagundes Porto",
            "email": "cidaporto1064@gmail.com",
            "cpf": "63717492691"
          },
          {
            "name": "Maria Aparecida Maruch de Carvalho",
            "email": "maparecidamc@yahoo.com.br",
            "cpf": "29896959668"
          },
          {
            "name": "Maria Aparecida Piantino Guimaraes",
            "email": "empty@febrasgo.org.br",
            "cpf": "00208876634"
          },
          {
            "name": "Maria Aparecida Silva E Souza",
            "email": "sofiasilva@terra.com.br",
            "cpf": "34494839604"
          },
          {
            "name": "Maria Beatriz Costa",
            "email": "carferc@terra.com.br",
            "cpf": "28535952691"
          },
          {
            "name": "Maria Carolina Barbosa Costa",
            "email": "mariacarolinab.costa@hotmail.com",
            "cpf": "11113409606"
          },
          {
            "name": "Maria Carolina Gomes Medrado",
            "email": "mariacarolinagomesm@gmail.com",
            "cpf": "12256928659"
          },
          {
            "name": "Maria Carolina Rodrigues Ignácio",
            "email": "carolignacio123@gmail.com",
            "cpf": "12644866693"
          },
          {
            "name": "Maria Cecilia Ribeiro de Sa",
            "email": "mceciliarsa@hotmail.com",
            "cpf": "51865246620"
          },
          {
            "name": "Maria Clara Barroso Moreira",
            "email": "mclarabarrosom@gmail.com",
            "cpf": "12636875638"
          },
          {
            "name": "Maria Clara Carneiro Leite",
            "email": "mariaclara.leite@hotmail.com",
            "cpf": "18009078778"
          },
          {
            "name": "Maria Clara Catani Porto",
            "email": "mariaclaracporto@hotmail.com",
            "cpf": "08897562604"
          },
          {
            "name": "Maria Clara Cruz Souza",
            "email": "mclara_cruz@outlook.com",
            "cpf": "10361806620"
          },
          {
            "name": "Maria Clara de Assis Brito Alves",
            "email": "mcabalves@gmail.com",
            "cpf": "01281993697"
          },
          {
            "name": "Maria Clara Leal",
            "email": "mariaclara.lealodesa@gmail.com",
            "cpf": "12291089633"
          },
          {
            "name": "Maria Clara Lopes Rezende",
            "email": "mariaclaralopesrezendee@gmail.com",
            "cpf": "01774789698"
          },
          {
            "name": "Maria Clara Marangoni",
            "email": "mclaramarangoni@gmail.com",
            "cpf": "07300098665"
          },
          {
            "name": "Maria Clara Ribeiro Figueiredo",
            "email": "mariaclaralegal10@hotmail.com",
            "cpf": "02867908159"
          },
          {
            "name": "Maria Clara Soares Barbosa Campolina",
            "email": "mclara-caca@hotmail.com",
            "cpf": "08428378681"
          },
          {
            "name": "Maria Clarice Motta CorrÊa",
            "email": "claricemcorrea@gmail.com",
            "cpf": "00203882687"
          },
          {
            "name": "Maria Cristina Felizardo Hudson",
            "email": "crishudson0469@gmail.com",
            "cpf": "93565593687"
          },
          {
            "name": "Maria Cristina Motta E Silva",
            "email": "dra.cristinamotta@hotmail.com",
            "cpf": "33880948615"
          },
          {
            "name": "Maria da Conceicao Silva Araujo",
            "email": "mconcei33@gmail.com",
            "cpf": "65001141672"
          },
          {
            "name": "Maria de Fatima Dias de Sousa Brito",
            "email": "mfsousabrito@gmail.com",
            "cpf": "60492066604"
          },
          {
            "name": "Maria de Fatima Lobato Vilaca",
            "email": "falobato58@gmail.com",
            "cpf": "51965305687"
          },
          {
            "name": "Maria de Fatima Palhares Turchetti",
            "email": "ivonesantos1209@gmail.com",
            "cpf": "32582226653"
          },
          {
            "name": "Maria de Jesus Santos Rametta",
            "email": "jorametta@yahoo.com.br",
            "cpf": "24561436634"
          },
          {
            "name": "Maria de Lourdes Tostes",
            "email": "tostesml@yahoo.com.br",
            "cpf": "24781819672"
          },
          {
            "name": "Maria do Carmo de Castro Almeida Mendes",
            "email": "maduamendes@gmail.com",
            "cpf": "80922171734"
          },
          {
            "name": "Maria do Carmo Silva Arantes",
            "email": "mariacsarantes@hotmail.com",
            "cpf": "48072761668"
          },
          {
            "name": "Maria Dulce Goncalves",
            "email": "mariadulceg51@gmail.com",
            "cpf": "27872610604"
          },
          {
            "name": "Maria Emilia Rodrigues Leitao Parreira",
            "email": "meparreira@hotmail.com",
            "cpf": "55518826672"
          },
          {
            "name": "Maria Gabriela Gadelha Gomes",
            "email": "mgabrielagadelha@hotmail.com",
            "cpf": "00333214269"
          },
          {
            "name": "Maria Gabriella Souza Trindade",
            "email": "mariagabriellast@gmail.com",
            "cpf": "04100968574"
          },
          {
            "name": "Maria Helena Degani Dumont",
            "email": "raissadeganidumont@hotmail.com",
            "cpf": "27821633615"
          },
          {
            "name": "Maria Helena Gomes Figueira",
            "email": "mariahelenafigueira@gmail.com",
            "cpf": "01405438649"
          },
          {
            "name": "Maria Ines de Miranda Lima",
            "email": "mariaineslima@terra.com.br",
            "cpf": "33363455615"
          },
          {
            "name": "Maria Julieta Nazareth Lara",
            "email": "julietanazareth@yahoo.com.br",
            "cpf": "12836940697"
          },
          {
            "name": "Maria Laura de Sousa Cardoso",
            "email": "marialauracardoso46@gmail.com",
            "cpf": "12890428613"
          },
          {
            "name": "Maria LuÍsa Braga Vieira Gil",
            "email": "mlbv84@yahoo.com.br",
            "cpf": "06823261609"
          },
          {
            "name": "Maria Paula Ferreira Arcuri",
            "email": "mpfarcuri@hotmail.com",
            "cpf": "09352815688"
          },
          {
            "name": "Maria Paula Moraes Vasconcelos",
            "email": "mpmvas@gmail.com",
            "cpf": "95432760649"
          },
          {
            "name": "Maria Paula Oliveira Franco",
            "email": "mariapaullafranco13@gmail.com",
            "cpf": "11634705629"
          },
          {
            "name": "Maria Paula Roman Amaral",
            "email": "mpaularamaral@gmail.com",
            "cpf": "01761290657"
          },
          {
            "name": "Maria Rita Alves Barbosa de Paiva",
            "email": "mariarita_abp@hotmail.com",
            "cpf": "08460461645"
          },
          {
            "name": "Maria SÍlvia Ribeiro Monteiro da Silva",
            "email": "msrms20@hotmail.com",
            "cpf": "05344489684"
          },
          {
            "name": "Maria Soeli Lanza Meirelles",
            "email": "mariasoelilanzameirelles@outlook.com",
            "cpf": "67915736604"
          },
          {
            "name": "Maria Tereza Chaves de Almeida",
            "email": "mtete132@gmail.com",
            "cpf": "12462290648"
          },
          {
            "name": "Maria Tereza Maia Penido Rebello",
            "email": "mariatepenido@hotmail.com",
            "cpf": "88383326653"
          },
          {
            "name": "Maria Virginia Furquim Werneck Marinho",
            "email": "virginiawerneck@gmail.com",
            "cpf": "46748237653"
          },
          {
            "name": "Mariana Alves Gomes",
            "email": "mmari.alves1@gmail.com",
            "cpf": "09994155652"
          },
          {
            "name": "Mariana Campos Belo Moreira",
            "email": "maricbelom@gmail.com",
            "cpf": "11190189607"
          },
          {
            "name": "Mariana Colosso Cotia Barreto",
            "email": "marianacolosso@gmail.com",
            "cpf": "46231581870"
          },
          {
            "name": "Mariana de Carvalho Silveira Scandiuzzi",
            "email": "marianadcs@hotmail.com",
            "cpf": "05945578606"
          },
          {
            "name": "Mariana de Oliveira Ribeiro",
            "email": "marideoliveira14@hotmail.com",
            "cpf": "14480081747"
          },
          {
            "name": "Mariana Freitas de Oliveira",
            "email": "marifreitasoliveira@hotmail.com",
            "cpf": "10946009627"
          },
          {
            "name": "Mariana Furtado Meinberg",
            "email": "marianameinberg84@gmail.com",
            "cpf": "06165821618"
          },
          {
            "name": "Mariana Gonçalves Ribeiro",
            "email": "marianagr87@gmail.com",
            "cpf": "11401684793"
          },
          {
            "name": "Mariana Luiza de Souza Amaral",
            "email": "marianalsouza7@gmail.com",
            "cpf": "12615920693"
          },
          {
            "name": "Mariana Martins de Sousa",
            "email": "mariana.m.sousa@hotmail.com",
            "cpf": "11017922640"
          },
          {
            "name": "Mariana Martins Pires",
            "email": "marianamartinspires@gmail.com",
            "cpf": "11533690600"
          },
          {
            "name": "Mariana Mitraud Ottoni Guedes",
            "email": "marianamitraud@hotmail.com",
            "cpf": "08960350699"
          },
          {
            "name": "Mariana Pardo de Oliveira",
            "email": "maripardo-bh@hotmail.com",
            "cpf": "11942654642"
          },
          {
            "name": "Mariana Pertence de Sousa E Silva",
            "email": "marianapertence@yahoo.com.br",
            "cpf": "09556106642"
          },
          {
            "name": "Mariana Reis Di Mambro",
            "email": "maridimambro@hotmail.com",
            "cpf": "10992776635"
          },
          {
            "name": "Mariana Rodrigues Tolentino",
            "email": "marirodrigues46@hotmail.com",
            "cpf": "09945728679"
          },
          {
            "name": "Mariana Seabra Leite Praça",
            "email": "mariseabra@gmail.com",
            "cpf": "01332820662"
          },
          {
            "name": "Marianna Maisonnette de Attayde Silva",
            "email": "mariannamaisonnette@gmail.com",
            "cpf": "10394535464"
          },
          {
            "name": "Marianna Pena Viveiros Nogueira",
            "email": "penaviveiros@yahoo.com.br",
            "cpf": "10089990757"
          },
          {
            "name": "Mariella Soares Blanco",
            "email": "mariellasblanco@gmail.com",
            "cpf": "12166240623"
          },
          {
            "name": "Marieny Dutra Souto",
            "email": "marienydutrasouto@hotmail.com",
            "cpf": "01537349651"
          },
          {
            "name": "Marilene Rios Sandy",
            "email": "mrios2005@bol.com.br",
            "cpf": "03556351609"
          },
          {
            "name": "Marilene Vale de Castro Monteiro",
            "email": "marilene.vale@gmail.com",
            "cpf": "52975266634"
          },
          {
            "name": "Marilia GuimarÃes Quirino Mira",
            "email": "magquirino@yahoo.com.br",
            "cpf": "05200866600"
          },
          {
            "name": "Marilia Pereira da Silva",
            "email": "mariliaps.med@gmail.com",
            "cpf": "13279856671"
          },
          {
            "name": "Marina Carvalho Paschoini",
            "email": "mcarvalhopaschoini@gmail.com",
            "cpf": "56736479649"
          },
          {
            "name": "Marina Corrêa Lima",
            "email": "marinacorrealima@hotmail.com",
            "cpf": "10591023660"
          },
          {
            "name": "Marina Fernandes Carvalho",
            "email": "marinafecarvalho@gmail.com",
            "cpf": "11749550660"
          },
          {
            "name": "Marina Fistarol",
            "email": "mfistarol@gmail.com",
            "cpf": "08011127616"
          },
          {
            "name": "Marina Guerra Rotelli",
            "email": "ma.rotelli@gmail.com",
            "cpf": "11121736688"
          },
          {
            "name": "Marina Lourenço de Medeiros",
            "email": "marinalmedeiros@hotmail.com",
            "cpf": "02110382619"
          },
          {
            "name": "Marina Matos de Moura Faico",
            "email": "mmmoura@gmail.com",
            "cpf": "00180652605"
          },
          {
            "name": "Marina Neves de Almeida Gomes",
            "email": "marinanag@yahoo.com.br",
            "cpf": "04673663659"
          },
          {
            "name": "Marina Rodrigues Chaves",
            "email": "marina.r.chaves@hotmail.com",
            "cpf": "07582112601"
          },
          {
            "name": "Marina Zaramela Lopes",
            "email": "marinazlopes@yahoo.com.br",
            "cpf": "01303636697"
          },
          {
            "name": "Mario Dias Correa",
            "email": "profmariodias@gmail.com",
            "cpf": "00897035615"
          },
          {
            "name": "Mario Dias CorrÊa Junior",
            "email": "correajr@gmail.com",
            "cpf": "87560372600"
          },
          {
            "name": "Maristela Gomes de Oliveira Neves",
            "email": "mgoneves@yahoo.com.br",
            "cpf": "74381482700"
          },
          {
            "name": "Marta Luisa Palomero Bueno",
            "email": "martapalomero@hotmail.com",
            "cpf": "84417056668"
          },
          {
            "name": "Maruza Nogueira Silva",
            "email": "nogueiramaruza@gmail.com",
            "cpf": "04535378126"
          },
          {
            "name": "Matheus Lopes de Andrade",
            "email": "matheuslandrade@gmail.com",
            "cpf": "09486665605"
          },
          {
            "name": "Mathil Abdou Bittencourt",
            "email": "mathil@terra.com.br",
            "cpf": "05275183879"
          },
          {
            "name": "Mauricio Barata Diniz",
            "email": "mauricio.bdiniz30@gmail.com",
            "cpf": "49486896615"
          },
          {
            "name": "Maurilio da Cruz Trigueiro",
            "email": "trigueiromaurilio@gmail.com",
            "cpf": "03166240632"
          },
          {
            "name": "Mauro Soares Banni",
            "email": "maurosoaresbanni@yahoo.com.br",
            "cpf": "72670274668"
          },
          {
            "name": "Micaella Ramos Teixeira",
            "email": "micaellaramost@hotmail.com",
            "cpf": "07324331696"
          },
          {
            "name": "Michael Zarnowski Passos",
            "email": "michaelpassos@gmail.com",
            "cpf": "06288753637"
          },
          {
            "name": "Michele Barbosa Sampaio",
            "email": "michelebsampaio@gmail.com",
            "cpf": "08125826670"
          },
          {
            "name": "Michele Cristina Machado Pinto",
            "email": "michelecristina1041@gmail.com",
            "cpf": "01875355669"
          },
          {
            "name": "Michele Menezes Portes Antunes",
            "email": "drmicheleportes@gmai.com",
            "cpf": "24766492870"
          },
          {
            "name": "Michelle Cristina Marques Caldeira",
            "email": "dramichellecaldeira@gmail.com",
            "cpf": "09957737694"
          },
          {
            "name": "Michelle Verliane Chaves",
            "email": "michelleverliane@yahoo.com.br",
            "cpf": "09230089699"
          },
          {
            "name": "Miguel Pedro Junger de Castro Garro",
            "email": "miguelpjcg@hotmail.com",
            "cpf": "07719732685"
          },
          {
            "name": "Milce de Souza Resende",
            "email": "milce@viareal.com.br",
            "cpf": "55285821649"
          },
          {
            "name": "Millena Pompeu Magalhães",
            "email": "millena_pompeu@hotmail.com",
            "cpf": "10194741656"
          },
          {
            "name": "Mirella Marques Freire",
            "email": "mirella5marquesfreire@gmail.com",
            "cpf": "10287209636"
          },
          {
            "name": "Mirna Santana Oliveira",
            "email": "mirna.s.o@hotmail.com",
            "cpf": "10325950601"
          },
          {
            "name": "MÔnica Avila de Carvalho",
            "email": "moavicarvalho@hotmail.com",
            "cpf": "68227515720"
          },
          {
            "name": "Monica Dias Nunes Palomino",
            "email": "monicadnunes@gmail.com",
            "cpf": "57220727615"
          },
          {
            "name": "Monica Joana Breijao do Prado",
            "email": "mbreijao@hotmail.com",
            "cpf": "08881586614"
          },
          {
            "name": "Monica Prates Queiroz",
            "email": "monicapraque@gmail.com",
            "cpf": "04606577630"
          },
          {
            "name": "Monique Luisa da Silva Marques",
            "email": "monique_luisa92@outlook.com",
            "cpf": "09948994671"
          },
          {
            "name": "Mylena Martins Almeida",
            "email": "mymartinns@gmail.com",
            "cpf": "05912537129"
          },
          {
            "name": "Nadia Daniela Marques Rodrigues",
            "email": "nadiarodrigues02@hotmail.com",
            "cpf": "71945759143"
          },
          {
            "name": "Nadia Lucia Meneses",
            "email": "nadia.meneses@gmail.com",
            "cpf": "07430012736"
          },
          {
            "name": "Narcia Naett de Cassia Vilaca",
            "email": "consultorionarcia@yahoo.com.br",
            "cpf": "55092403691"
          },
          {
            "name": "Natalia de Andrade Machado",
            "email": "nataliaandrade84@yahoo.com.br",
            "cpf": "06676975602"
          },
          {
            "name": "Natalia Hanke Beutinger",
            "email": "nataliabeutinger@hotmail.com",
            "cpf": "03944838041"
          },
          {
            "name": "Natalia Rodrigues Gomes de Assis",
            "email": "nataliaassis1903@gmail.com",
            "cpf": "13056993601"
          },
          {
            "name": "Natália Rúbia Rodrigues Soares",
            "email": "nathirsouza@gmail.com",
            "cpf": "10526693606"
          },
          {
            "name": "Natália Santos Reis Itaiá",
            "email": "natalia.itaia@gmail.com",
            "cpf": "03488123537"
          },
          {
            "name": "Natália Silveira Camargo Piedade",
            "email": "nataliasilveiracamargo@gmail.com",
            "cpf": "09820015685"
          },
          {
            "name": "Natalia Tobal Secches Brito Silva",
            "email": "nattse@hotmail.com",
            "cpf": "07859733625"
          },
          {
            "name": "Natanael Machado",
            "email": "empty@febrasgo.org.br",
            "cpf": "00501948600"
          },
          {
            "name": "Nathalia Lacerda Eller Costa",
            "email": "nathaliaeller@outlook.com.br",
            "cpf": "13102515681"
          },
          {
            "name": "Nathalia Moura de Melo Delgado",
            "email": "delgadomm.nathalia@gmail.com",
            "cpf": "12379938652"
          },
          {
            "name": "Nathalia Silveira Vieira",
            "email": "nathaliasv.med@gmail.com",
            "cpf": "09916713685"
          },
          {
            "name": "Nathalia Vianna Santos Reis",
            "email": "nathaliaviannago@gmail.com",
            "cpf": "06723690605"
          },
          {
            "name": "Nazy Fuad Ibrahim",
            "email": "nazyfuad@gmail.com",
            "cpf": "21191832600"
          },
          {
            "name": "Neila Caroline Alves Amaral",
            "email": "neilacarolineaa@gmail.com",
            "cpf": "09847564698"
          },
          {
            "name": "Neli Sueli Teixeira de Souza",
            "email": "neli.fcm@gmail.com",
            "cpf": "47101636691"
          },
          {
            "name": "Nelma Consolacao Linhares Possa",
            "email": "nelma-lp@hotmail.com",
            "cpf": "62046381653"
          },
          {
            "name": "Nicoly de Oliveira",
            "email": "nicolyoliveira031@gmail.com",
            "cpf": "11535492635"
          },
          {
            "name": "Nielsen Ribeiro",
            "email": "empty@febrasgo.org.br",
            "cpf": "01111850682"
          },
          {
            "name": "Niemeyer Alves Rosa",
            "email": "niemeyer.rosa@gmail.com",
            "cpf": "02736711629"
          },
          {
            "name": "Nilo Sergio Nominato",
            "email": "nominatonilo@hotmail.com",
            "cpf": "31466168668"
          },
          {
            "name": "Olivia Cristina Silva Ferreira Figueiredo",
            "email": "oliviacsf@hotmail.com",
            "cpf": "10878036679"
          },
          {
            "name": "Osvaldo Simoes",
            "email": "osvaldo@unimedcentro-oeste.coop.br",
            "cpf": "00290629691"
          },
          {
            "name": "Oswaldo Leao de Souza",
            "email": "oswaldoleao@gmail.com",
            "cpf": "17650798615"
          },
          {
            "name": "Pammela Vieira Freire",
            "email": "pamvieirafreire@hotmail.com",
            "cpf": "08055012660"
          },
          {
            "name": "Paola Gaston Giostri",
            "email": "pggbh83@yahoo.com.br",
            "cpf": "01435494644"
          },
          {
            "name": "Patricia Aliprandi Dutra",
            "email": "patyalip@gmail.com",
            "cpf": "94131597691"
          },
          {
            "name": "Patricia Ariel Rodrigues Marques Figueira",
            "email": "patriciaarmf@gmail.com",
            "cpf": "36726487878"
          },
          {
            "name": "PatrÍcia de Paula MagalhÃes",
            "email": "patricia.pmagalhaes1@gmail.com",
            "cpf": "09747975610"
          },
          {
            "name": "Patrícia Fernandes Gago",
            "email": "fernandesgpatricia@hotmail.com",
            "cpf": "16037118728"
          },
          {
            "name": "Patricia Goncalves Teixeira",
            "email": "pgtmedicina@gmail.com",
            "cpf": "91684218691"
          },
          {
            "name": "Patrícia Mendonça Leite",
            "email": "patriciamleite@hotmail.com",
            "cpf": "13726787607"
          },
          {
            "name": "Patrícia Pacheco Huebra",
            "email": "patriciahuebra@hotmail.com",
            "cpf": "10839210612"
          },
          {
            "name": "Patrícia Rocha Carneiro",
            "email": "patyrc1@hotmail.com",
            "cpf": "11333329601"
          },
          {
            "name": "Patricia Teixeira de Resende",
            "email": "patriciatrgom@gmail.com",
            "cpf": "05768503650"
          },
          {
            "name": "Paula BrandÃo Ávila Coelho",
            "email": "contasplenaclinica@gmail.com",
            "cpf": "08490212783"
          },
          {
            "name": "Paula Bruzadelli Vieira da Silveira",
            "email": "paula.bvs@hotmail.com",
            "cpf": "01553667697"
          },
          {
            "name": "Paula Cristina Dias Primo",
            "email": "clinicasantabarbara.mg@gmail.com",
            "cpf": "56458398620"
          },
          {
            "name": "Paula Faria Pereira",
            "email": "paulafariapereira1@gmail.com",
            "cpf": "11755977670"
          },
          {
            "name": "Paula Honorio de Oliveira",
            "email": "drapholiveira@gmail.com",
            "cpf": "01515661601"
          },
          {
            "name": "Paula Pereira Teodoro",
            "email": "paulapteodoro@yahoo.com.br",
            "cpf": "10158695640"
          },
          {
            "name": "Paula Silva Maia",
            "email": "paulamaia1406@hotmail.com",
            "cpf": "02834922527"
          },
          {
            "name": "Paulo Affonso Salles Figueira",
            "email": "pauloasfigueira@gmail.com",
            "cpf": "00688142672"
          },
          {
            "name": "Paulo Alexandre GonÇalves Batista",
            "email": "paulo.pagb@gmail.com",
            "cpf": "03593055635"
          },
          {
            "name": "Paulo Cesar de Oliveira",
            "email": "femininaclinica@yahoo.com.br",
            "cpf": "16752147604"
          },
          {
            "name": "Paulo Henrique Alves Caetano Chaves",
            "email": "paulochavesto@gmail.com",
            "cpf": "86064363649"
          },
          {
            "name": "Paulo Macedo de Oliveira Leite",
            "email": "paulomoleite@gmail.com",
            "cpf": "51556936672"
          },
          {
            "name": "Paulo Marcio Barbosa",
            "email": "paulombarbosa@hotmail.com",
            "cpf": "29528844634"
          },
          {
            "name": "Paulo Roberto de Castro Penna",
            "email": "paulorcpenna@bol.com.br",
            "cpf": "13083910649"
          },
          {
            "name": "Pedro Arthur Trad Filho",
            "email": "pedro.trad@uol.com.br",
            "cpf": "52941779604"
          },
          {
            "name": "Pedro Corradi Sander",
            "email": "pcorradisander@gmail.com",
            "cpf": "10928136671"
          },
          {
            "name": "Pedro Henrique Amorim Oliveira",
            "email": "pedro.hao16@gmail.com",
            "cpf": "15799249720"
          },
          {
            "name": "Pedro Henrique Tannure Saraiva",
            "email": "ptannure@yahoo.com.br",
            "cpf": "05887245646"
          },
          {
            "name": "Poliana Cristina Ferreira dos Santos",
            "email": "polusferreira@gmail.com",
            "cpf": "11371171688"
          },
          {
            "name": "Poliana Ferreira Martins Tavares",
            "email": "polianafmtavares@gmail.com",
            "cpf": "94986290649"
          },
          {
            "name": "Potyra Nascimento Dias",
            "email": "potyradias@hotmail.com",
            "cpf": "05084293661"
          },
          {
            "name": "Priscila Santiago Faria",
            "email": "priscilasantiagofaria93@gmail.com",
            "cpf": "07282021660"
          },
          {
            "name": "Priscilla Azevedo de Morais Castro Mafia",
            "email": "priamcastro@yahoo.com.br",
            "cpf": "07919030609"
          },
          {
            "name": "Priscilla Moreira de Oliveira",
            "email": "pribellei@outlook.com",
            "cpf": "02949371612"
          },
          {
            "name": "Priscilla Rossi Baleeiro Marcos",
            "email": "prossibaleeiro@icloud.com",
            "cpf": "05332984669"
          },
          {
            "name": "Priscilla Victoria Pinto",
            "email": "pri_vic@hotmail.com",
            "cpf": "06542076662"
          },
          {
            "name": "Quesia Tamara Mirante Ferreira Villamil",
            "email": "contato@quesiavillamil.com.br",
            "cpf": "03950070621"
          },
          {
            "name": "Rafaela Pereira Pinheiro",
            "email": "rafaelapepin@gmail.com",
            "cpf": "12655346670"
          },
          {
            "name": "Rafaela Saullo Gonçalves",
            "email": "rafasaullo@hotmail.com",
            "cpf": "09613210679"
          },
          {
            "name": "Rafaela Tavares Mendes",
            "email": "rafaela.mendes150@gmail.com",
            "cpf": "12961218608"
          },
          {
            "name": "Rafaella Alves Silva",
            "email": "rafaella_as@outlook.com.br",
            "cpf": "11130234657"
          },
          {
            "name": "Ramon Prado de Andrade",
            "email": "ramon.ibce@gmail.com",
            "cpf": "02340749573"
          },
          {
            "name": "Raquel Antunes de Moraes",
            "email": "raquel.antunesmoraes@gmail.com",
            "cpf": "12899083627"
          },
          {
            "name": "Raquel Camargos Borges",
            "email": "raquel05cb@gmail.com",
            "cpf": "10916510603"
          },
          {
            "name": "Rayana Rolla Campos",
            "email": "rayanarc@hotmail.com",
            "cpf": "09472439683"
          },
          {
            "name": "Regina AmÉlia Lopes Pessoa de Aguiar",
            "email": "regina.alpa@gmail.com",
            "cpf": "48665924604"
          },
          {
            "name": "Reinaldo Duraes",
            "email": "reinaldoduraes@gmail.com",
            "cpf": "08716617649"
          },
          {
            "name": "Renata Garcia Abrão Pereira",
            "email": "renata_abrao@outlook.com",
            "cpf": "08460099601"
          },
          {
            "name": "Renata Gouvea Hollunder",
            "email": "retalunder@hotmail.com",
            "cpf": "02848577185"
          },
          {
            "name": "Renata Murad Macedo",
            "email": "remurad@terra.com.br",
            "cpf": "00172036607"
          },
          {
            "name": "Renata Patricia de Sousa Oliveira",
            "email": "dajore@uol.com.br",
            "cpf": "51755211600"
          },
          {
            "name": "Renata Roberto Diniz",
            "email": "renatinha_rdiniz@yahoo.com.br",
            "cpf": "83253459691"
          },
          {
            "name": "Renato Ajeje",
            "email": "ajejerenato@gmail.com",
            "cpf": "39784983672"
          },
          {
            "name": "Renato Franco Ciodaro",
            "email": "renatociodaro@yahoo.com.br",
            "cpf": "01135155615"
          },
          {
            "name": "Renato Laercio Teixeira dos Santos",
            "email": "clinicarenatolaercio@gmail.com",
            "cpf": "11301910600"
          },
          {
            "name": "Renato Marques Viana",
            "email": "rm.viana40@uol.com.br",
            "cpf": "84416823649"
          },
          {
            "name": "Renilton Aires Lima",
            "email": "reniltonn@hotmail.com",
            "cpf": "03638682676"
          },
          {
            "name": "Ricardo Aureliano Veado",
            "email": "ricveado@hotmail.com",
            "cpf": "31122493649"
          },
          {
            "name": "Ricardo Cesar AraÚjo Drumond",
            "email": "ricardodrumond5@gmail.com",
            "cpf": "02732557625"
          },
          {
            "name": "Ricardo Mello Marinho",
            "email": "ricardommarinho@gmail.com",
            "cpf": "41752015649"
          },
          {
            "name": "Ricardo Romualdo de Sa",
            "email": "ricardorpm31@icloud.com",
            "cpf": "09198635662"
          },
          {
            "name": "Rimack Antonio Rosa Almeida",
            "email": "rimack@live.com",
            "cpf": "34984690615"
          },
          {
            "name": "Rita de Cassia Freddi Camara",
            "email": "ritacfreddi@hotmail.com",
            "cpf": "67894038687"
          },
          {
            "name": "Rita Teresinha Maciel Motta",
            "email": "ritatmmotta@gmail.com",
            "cpf": "25823426615"
          },
          {
            "name": "Roberta Coutinho Vasconcelos",
            "email": "robertacoutinhovas@gmail.com",
            "cpf": "12978559659"
          },
          {
            "name": "Roberta Feital Xavier",
            "email": "robertafeital@yahoo.com.br",
            "cpf": "07075465678"
          },
          {
            "name": "Roberto Carlos Machado",
            "email": "robertocarlosmachado@yahoo.com.br",
            "cpf": "23553987634"
          },
          {
            "name": "Roberto de Oliveira Galvao",
            "email": "galvao.roberto@yahoo.com.br",
            "cpf": "21265569649"
          },
          {
            "name": "Roberto Nicola Fratari",
            "email": "nicolafratari@hotmail.com",
            "cpf": "60632810610"
          },
          {
            "name": "Roberto Teles da Silva",
            "email": "robtelles@uol.com.br",
            "cpf": "37829807604"
          },
          {
            "name": "Rodney Borges Magalhaes",
            "email": "rodneybmagalhaes@gmail.com",
            "cpf": "42505585687"
          },
          {
            "name": "Rodrigo de Carvalho Ribeiro",
            "email": "rodrigo@cegonha.med.br",
            "cpf": "46956395649"
          },
          {
            "name": "Rodrigo Ribeiro Tonelli",
            "email": "rodrigo.tonelli@ig.com.br",
            "cpf": "72207299600"
          },
          {
            "name": "Rodrigo Teofilo Tavares",
            "email": "roteota@gmail.com",
            "cpf": "90242882668"
          },
          {
            "name": "Rodrigo Thomé Junqueira",
            "email": "rodrigojunkz@yahoo.com.br",
            "cpf": "05980855645"
          },
          {
            "name": "Rogerio Becattini",
            "email": "robecattini@gmail.com",
            "cpf": "79018700606"
          },
          {
            "name": "Rogerio Nacur Nagem",
            "email": "rognacur@hotmail.com",
            "cpf": "33591300659"
          },
          {
            "name": "Rogerio Teixeira Cesar",
            "email": "rogergin201010@hotmail.com",
            "cpf": "28535782672"
          },
          {
            "name": "Rogerio Vicente de Lima Ferreira",
            "email": "r-vicente-ferreira@uol.com.br",
            "cpf": "52048420630"
          },
          {
            "name": "Romerson Martins Franco",
            "email": "medicina@drromerson.com.br",
            "cpf": "29637139672"
          },
          {
            "name": "RÔmulo de Abreu Netto",
            "email": "romulonetto@yahoo.com.br",
            "cpf": "83165304653"
          },
          {
            "name": "Ronat SodrÉ Gomes Resende",
            "email": "ronatresende10@gmail.com",
            "cpf": "00274578697"
          },
          {
            "name": "Rosaima Estrada Duquesne",
            "email": "rosaima1978@yahoo.com",
            "cpf": "06774909175"
          },
          {
            "name": "Rosane Abramo",
            "email": "rosaneabramo@yahoo.com.br",
            "cpf": "53549350678"
          },
          {
            "name": "Rosangela Lopes Miranda Rodrigues",
            "email": "rosalmr@terra.com.br",
            "cpf": "76947807620"
          },
          {
            "name": "Rosangela Machado Pereira Malvaccini",
            "email": "rosangelagineco@yahoo.com.br",
            "cpf": "33101051649"
          },
          {
            "name": "Rosekeila SimÕes Nomelini",
            "email": "rosekeila@terra.com.br",
            "cpf": "03651235602"
          },
          {
            "name": "Rubens Correa da Silva",
            "email": "ru.correa781@gmail.com",
            "cpf": "26912708668"
          },
          {
            "name": "Rubens Lene Carvalho Tavares",
            "email": "rubens.ufmg@gmail.com",
            "cpf": "63606682620"
          },
          {
            "name": "Rubens Soares da Costa",
            "email": "rscostamg@uol.com.br",
            "cpf": "86221353653"
          },
          {
            "name": "SÁlua Oliveira Calil de Paula",
            "email": "saluacalil@gmail.com",
            "cpf": "03523789648"
          },
          {
            "name": "Salvador Pitchon",
            "email": "salvadorpitchon@yahoo.com.br",
            "cpf": "35987359600"
          },
          {
            "name": "Samantha Araújo Vieira",
            "email": "samgbrasil@yahoo.com.br",
            "cpf": "06461471618"
          },
          {
            "name": "Samuel Conrado de Oliveira MourÃo",
            "email": "samuel_mourao@yahoo.com.br",
            "cpf": "00464950619"
          },
          {
            "name": "Sandra Beatriz Mangucci Callegari",
            "email": "sandrabmangucci@gmail.com",
            "cpf": "82857130678"
          },
          {
            "name": "Sandro Fialho do Carmo",
            "email": "sandrogineco@yahoo.com.br",
            "cpf": "03135057640"
          },
          {
            "name": "Sandro Magnavita Sabino",
            "email": "sandromsabino@gmail.com",
            "cpf": "00232989605"
          },
          {
            "name": "Sangela Cunha Pereira",
            "email": "sangela_cpereira@hotmail.com",
            "cpf": "09464396644"
          },
          {
            "name": "Sarah Lindsen Souza Corsini",
            "email": "sarahcorsini@hotmail.com",
            "cpf": "12519742607"
          },
          {
            "name": "Sarah Menezes de Oliveira",
            "email": "sarahmenezes18@outlook.com",
            "cpf": "12459916639"
          },
          {
            "name": "Sayonara Heleonora de Figueiredo Correa Figueiredo",
            "email": "silvio.figueiredo@terra.com.br",
            "cpf": "65274911668"
          },
          {
            "name": "SÉphora Augusta Cardoso Queiroz",
            "email": "sephora_cardoso@yahoo.com.br",
            "cpf": "04442707600"
          },
          {
            "name": "Sergimar Padovezi Miranda",
            "email": "sergimar@terra.com.br",
            "cpf": "15264807191"
          },
          {
            "name": "Sergio Curi",
            "email": "sergiocuri@gmail.com",
            "cpf": "23811749668"
          },
          {
            "name": "Sergio Feres Mansur",
            "email": "sfmansur@gmail.com",
            "cpf": "63210240663"
          },
          {
            "name": "Sergio Henrique Lopes Marques",
            "email": "dr.sergiohenrique@gmail.com",
            "cpf": "55093353604"
          },
          {
            "name": "SÉrgio Vilela de Oliveira",
            "email": "sergiovilela.o@hotmail.com",
            "cpf": "90901886653"
          },
          {
            "name": "Silena Cristo Moreira",
            "email": "silenacristo@yahoo.com.br",
            "cpf": "03095737696"
          },
          {
            "name": "Silvana Mara Vilaca Castagna Clo",
            "email": "silvanacclo@gmail.com",
            "cpf": "05651743634"
          },
          {
            "name": "Silvia Siqueira",
            "email": "silviasiqueirabem@hotmail.com",
            "cpf": "65392469787"
          },
          {
            "name": "Simone Barreto de Aquino",
            "email": "sbaquino66@gmail.com",
            "cpf": "73741043672"
          },
          {
            "name": "Simone Floresta Leal",
            "email": "sifloresta@hotmail.com",
            "cpf": "09268526638"
          },
          {
            "name": "Sinara Resende Bueno",
            "email": "sinarabueno6@hotmail.com",
            "cpf": "07364286667"
          },
          {
            "name": "Sofia Assis Alvarenga",
            "email": "sofiaassisalvarenga@gmail.com",
            "cpf": "10218075677"
          },
          {
            "name": "Sofia Machado Talma",
            "email": "sofiatalma98@gmail.com",
            "cpf": "14118210681"
          },
          {
            "name": "Sofia Sturzeneker Porto",
            "email": "sofiasporto13@gmail.com",
            "cpf": "13889720692"
          },
          {
            "name": "Solange Queiroz de Lucena Diniz",
            "email": "lucenasol@yahoo.com.br",
            "cpf": "55708021772"
          },
          {
            "name": "Sonia Fonseca de Araujo",
            "email": "sfaraujo10@gmail.com",
            "cpf": "68452802668"
          },
          {
            "name": "Sonia Mara Batista dos Santos Resende",
            "email": "soniasamonte1@hotmail.com",
            "cpf": "38542269691"
          },
          {
            "name": "Sonia Tuyama Asajiro",
            "email": "stasajiro@yahoo.com.br",
            "cpf": "87139634653"
          },
          {
            "name": "Stefania Carolina Sousa Castanheira",
            "email": "stefaniacscastanheira@gmail.com",
            "cpf": "08089226612"
          },
          {
            "name": "Stefany Oliveira Mendes",
            "email": "stefanymendes15@hotmail.com",
            "cpf": "11472455681"
          },
          {
            "name": "Sthefanie Ferreira Caires Aguiar",
            "email": "sthefaniefca@hotmail.com",
            "cpf": "01650330537"
          },
          {
            "name": "Suzana Maria Pires do Rio",
            "email": "suzana.rio7328@gmail.com",
            "cpf": "47463295672"
          },
          {
            "name": "Suzete Rodrigues Gomes",
            "email": "suzetegomesgineco@yahoo.com.br",
            "cpf": "49166069653"
          },
          {
            "name": "Sylvia Cristina Santos Lage",
            "email": "sylviacslage@hotmail.com",
            "cpf": "03358821617"
          },
          {
            "name": "Tadeu Coutinho",
            "email": "tcoutinhojf@yahoo.com.br",
            "cpf": "18077218687"
          },
          {
            "name": "Tainá Wendling Gama",
            "email": "taina.wgama24@gmail.com",
            "cpf": "14858342603"
          },
          {
            "name": "Talita Alvarenga Petrini Carvalho",
            "email": "talita-alvarenga@hotmail.com",
            "cpf": "11060868644"
          },
          {
            "name": "Talles Dias Orsi",
            "email": "tallesorsi64@gmail.com",
            "cpf": "53689437687"
          },
          {
            "name": "Tania Paszternak Matta Machado Paixao",
            "email": "taniapasz@hotmail.com",
            "cpf": "75814927615"
          },
          {
            "name": "Tàssylla Caroline Ferreira Pereira",
            "email": "tassyllamed@gmail.com",
            "cpf": "04400598101"
          },
          {
            "name": "Tatiana Perlatto Moura",
            "email": "tatianaperlatto@gmail.com",
            "cpf": "12649734620"
          },
          {
            "name": "Tatiane Celeiro Nascimento",
            "email": "tatianeceleiro@hotmail.com",
            "cpf": "11876878630"
          },
          {
            "name": "Tatiane Ventura GonÇalves",
            "email": "thatymgh@hotmail.com",
            "cpf": "08286649605"
          },
          {
            "name": "Tauane Larissa Menao",
            "email": "tauanemenao05@gmail.com",
            "cpf": "08252494650"
          },
          {
            "name": "Tayná Rodrigues Félix",
            "email": "taynarf0506@gmail.com",
            "cpf": "14409998641"
          },
          {
            "name": "Tchayra Tatiane Souza",
            "email": "tchayrasouza@gmail.com",
            "cpf": "11487386656"
          },
          {
            "name": "Telma Maria Rossi de Figueiredo Franco",
            "email": "telma_franco@yahoo.com.br",
            "cpf": "22197974653"
          },
          {
            "name": "Teresa Cristina Prata Pace",
            "email": "teresapratapace@yahoo.com.br",
            "cpf": "57520526615"
          },
          {
            "name": "Tetzi Oliveira BrandÃo",
            "email": "tetzibrandao@yahoo.com.br",
            "cpf": "28084874870"
          },
          {
            "name": "Thaiana dos Reis Rodrigues",
            "email": "thaiana_92@hotmail.com",
            "cpf": "11496295684"
          },
          {
            "name": "Thais Arashiro de Paula",
            "email": "thaisarashiro@yahoo.com.br",
            "cpf": "27808760854"
          },
          {
            "name": "Thais Cristina de Faria Silva",
            "email": "thaiscristina.defaria@gmail.com",
            "cpf": "10936559683"
          },
          {
            "name": "Thais de Paula Silva Pilio",
            "email": "thaispilio17@gmail.com",
            "cpf": "13101332630"
          },
          {
            "name": "Thais Fernandes Campos",
            "email": "thaisfercampos@hotmail.com",
            "cpf": "11730019641"
          },
          {
            "name": "Thaís Ferreira Souza",
            "email": "thaisfsouza1312@gmail.com",
            "cpf": "12513758633"
          },
          {
            "name": "ThaÍs FranÇa de AraÚjo",
            "email": "thais.pleni@gmail.com",
            "cpf": "07339337695"
          },
          {
            "name": "Thaís Guimarães de Faria",
            "email": "thais.cmmg@gmail.com",
            "cpf": "11575120623"
          },
          {
            "name": "Thais Syrio Amaral",
            "email": "thathamed@hotmail.com",
            "cpf": "07723894627"
          },
          {
            "name": "ThaÍs Vilela de Pinho Andrade",
            "email": "thaisvpa@hotmail.com",
            "cpf": "06535603628"
          },
          {
            "name": "Thaisa Sousa Rezende",
            "email": "tatasrezende@yahoo.com.br",
            "cpf": "10596669607"
          },
          {
            "name": "Thales Henrique Lamounier Xavier",
            "email": "thaleslamounier28@hotmail.com",
            "cpf": "11188783610"
          },
          {
            "name": "Thallyta Fernandes Moura Tristão",
            "email": "drathallyta@hotmail.com",
            "cpf": "06883459642"
          },
          {
            "name": "Thamara Ferreira de Assis",
            "email": "thamara.f.a@hotmail.com",
            "cpf": "10381035689"
          },
          {
            "name": "Thamirys Pereira Rodrigues",
            "email": "thamirysrodrigues1975@gmail.com",
            "cpf": "11399453602"
          },
          {
            "name": "Thassiane Kelly Quintão Miranda",
            "email": "thassiane_miranda@yahoo.com.br",
            "cpf": "12274237646"
          },
          {
            "name": "Thays Dias Lopes",
            "email": "thays.dias5@icloud.com",
            "cpf": "09828920638"
          },
          {
            "name": "Thomas Cunze",
            "email": "thomas.cunze@gmail.com",
            "cpf": "01301840637"
          },
          {
            "name": "Tonia Duarte Fonseca",
            "email": "tonia.df@hotmail.com",
            "cpf": "19800991620"
          },
          {
            "name": "Tulio Tadeu Marcolini",
            "email": "tulio.marcolini@ufu.br",
            "cpf": "54933862834"
          },
          {
            "name": "Uaci Tupinambas Parreiras",
            "email": "uacit@hotmail.com",
            "cpf": "31609171691"
          },
          {
            "name": "Ubiratan de Brito Mota",
            "email": "ubiratan.mota@yahoo.com.br",
            "cpf": "16040040610"
          },
          {
            "name": "Valber Jose Zago",
            "email": "valberzago@gmail.com",
            "cpf": "51755483600"
          },
          {
            "name": "Valdir Jose da Costa",
            "email": "dorisvalbh@gmail.com",
            "cpf": "00648426653"
          },
          {
            "name": "Valéria Bastos Marquetti",
            "email": "vahmarquetti11@gmail.com",
            "cpf": "11743798636"
          },
          {
            "name": "Valeria Bernadete Claudio Campos",
            "email": "valeria_campos@yahoo.com.br",
            "cpf": "81567944604"
          },
          {
            "name": "ValÉria PatrÍcia Spina",
            "email": "vapspina@gmail.com",
            "cpf": "62404954172"
          },
          {
            "name": "Valmir Oliveira de Almeida",
            "email": "valmir.o.almeida@gmail.com",
            "cpf": "60166126691"
          },
          {
            "name": "Vana Diniz Rabelo Bicalho",
            "email": "vanabicalho@hotmail.com",
            "cpf": "58605886668"
          },
          {
            "name": "Vanessa Costa de Carvalho",
            "email": "vanefofa@hotmail.com",
            "cpf": "06135433601"
          },
          {
            "name": "Vanessa do Carmo Ferreira Khachikian",
            "email": "vancfs@yahoo.com.br",
            "cpf": "04588736671"
          },
          {
            "name": "Vanessa Fátima Fonseca",
            "email": "vanessafatimafonseca@gmail.com",
            "cpf": "06638380613"
          },
          {
            "name": "Vanessa Gomes Rogana",
            "email": "vgrogana@uol.com.br",
            "cpf": "68576145634"
          },
          {
            "name": "Vânia Caroline de Macedo E Silva",
            "email": "carolmacedo27@gmail.com",
            "cpf": "05552224620"
          },
          {
            "name": "Vania da Conceicao Rezende Neiva",
            "email": "vanianeiva@uol.com.br",
            "cpf": "49725068653"
          },
          {
            "name": "Vania Maria Pereira de Castro",
            "email": "consultoriovania@yahoo.com.br",
            "cpf": "64554090604"
          },
          {
            "name": "Venera Etienne Goncalves E Silva",
            "email": "etiennevenera@gmail.com",
            "cpf": "08151053631"
          },
          {
            "name": "Vera Lucia Lopes Furtado",
            "email": "vera.ll.furtado@gmail.com",
            "cpf": "54186030600"
          },
          {
            "name": "Verônica Gil de Mendonça",
            "email": "veronicagmendonca@gmail.com",
            "cpf": "12599230616"
          },
          {
            "name": "Verônica Tavares Ribeiro",
            "email": "vetavares05@gmail.com",
            "cpf": "11838045635"
          },
          {
            "name": "Vicente de Paula Lessa do Valle",
            "email": "vplvalle@gmail.com",
            "cpf": "33966230615"
          },
          {
            "name": "Victor de Lima Rodrigues",
            "email": "victor.de.lima@hotmail.com",
            "cpf": "11497385610"
          },
          {
            "name": "Victor de Oliveira Flausino",
            "email": "victoroflausino@gmail.com",
            "cpf": "11103737678"
          },
          {
            "name": "Victor Hugo de Melo",
            "email": "victormelo2401@gmail.com",
            "cpf": "20014040697"
          },
          {
            "name": "Victoria Barreto de Araújo Porto",
            "email": "vicbporto@gmail.com",
            "cpf": "12586023692"
          },
          {
            "name": "Victoria Furquim Werneck Marinho",
            "email": "victoriamarinho@gmail.com",
            "cpf": "09958211602"
          },
          {
            "name": "Victoria Maria Jorge Freitas Colobó",
            "email": "toricolobo@hotmail.com",
            "cpf": "07305166529"
          },
          {
            "name": "Vinicius Franco da Veiga",
            "email": "francodaveiga@gmail.com",
            "cpf": "42862779687"
          },
          {
            "name": "Vinícius Gustavo de Carvalho Moura",
            "email": "viniciusmouramed@gmail.com",
            "cpf": "11739464621"
          },
          {
            "name": "Virgilino QuintÃo Torres Cruz",
            "email": "virgilinoc@bol.com.br",
            "cpf": "71787593649"
          },
          {
            "name": "Vitor Augusto Alcantara de Oliveira",
            "email": "vitorgineco@gmail.com",
            "cpf": "03412495646"
          },
          {
            "name": "Vitoria Bittencourt Neres",
            "email": "bittencourtneresvitoria@gmail.com",
            "cpf": "13176812663"
          },
          {
            "name": "Vitória Novaes",
            "email": "DRAVITORIANOVAES@GMAIL.COM",
            "cpf": "11908763612"
          },
          {
            "name": "Vitoria Rocha Amaral",
            "email": "vitoriaramaral97@gmail.com",
            "cpf": "10311681689"
          },
          {
            "name": "Viveity Hernández Castellón",
            "email": "86viveityhc@gmail.com",
            "cpf": "70525794646"
          },
          {
            "name": "Vivian Estavanate de Castro",
            "email": "estavanatev@gmail.com",
            "cpf": "13557145670"
          },
          {
            "name": "Viviana Martins Neto",
            "email": "medviviana@gmail.com",
            "cpf": "10298188600"
          },
          {
            "name": "Wagner Pinheiro Pinto Villafort",
            "email": "wvillafort@yahoo.com.br",
            "cpf": "34539646672"
          },
          {
            "name": "Waldeir Jose de Almeida Junior",
            "email": "waldeiralmeidajr@gmail.com",
            "cpf": "65922255649"
          },
          {
            "name": "Welington Reis de Souza",
            "email": "welingtonreisdesouza@gmail.com",
            "cpf": "56037090653"
          },
          {
            "name": "Wilson Batista",
            "email": "wbatmgo@gmail.com",
            "cpf": "12495409687"
          },
          {
            "name": "Winnye Marques Ferreira",
            "email": "winnye_marques@hotmail.com",
            "cpf": "02649587130"
          },
          {
            "name": "Yahn Rezende de Abreu",
            "email": "yahnrezendeabreu@hotmail.com",
            "cpf": "10646586602"
          },
          {
            "name": "Yaline MÁrcia Batista Pereira E Silva",
            "email": "yalinembpsilva@yahoo.com.br",
            "cpf": "04352341614"
          },
          {
            "name": "Yara Cristina Barbosa",
            "email": "yaracrisb@gmail.com",
            "cpf": "11745783601"
          },
          {
            "name": "Yara Cristina Niquini de Lima",
            "email": "yara17lima@gmail.com",
            "cpf": "08510876630"
          },
          {
            "name": "Yara GuimarÃes de SÁ Anacleto",
            "email": "yaraanacleto@uol.com.br",
            "cpf": "97059528687"
          },
          {
            "name": "Yara Mônica da Silva Oliveira",
            "email": "yara.monica@hotmail.com",
            "cpf": "12717483632"
          },
          {
            "name": "Yasmin de Amorim Vieira",
            "email": "yasminamvieira@hotmail.com",
            "cpf": "11449436633"
          },
          {
            "name": "Yasmin Pereira Vieira",
            "email": "yaspereiravieira@gmail.com",
            "cpf": "06505499610"
          },
          {
            "name": "Yasmin Teixeira Silveira Mendes Freire",
            "email": "yasmin.teixeira.sm@gmail.com",
            "cpf": "12422451624"
          }
        ]
      }, {
        name: 'Sociedade de Acadêmicos de Medicina de Minas Gerais',
        shortName: 'SAMMG',
        link: 'https://www.sammg.com.br/',
        alt: 'Logo da SAMMG',
        src: '/logo/sammg.png',
        affiliated: [
          {
            "name": "KARINE ALONSO DOS SANTOS",
            "cpf": "06049284598",
            "email": "karinesantos@alunounifenas.br"
          },
          {
            "name": "ANA LUIZA DE MAGALHAES KOPPERSCHIMIDT",
            "cpf": "12265244600",
            "email": "analuizamag@hotmailcom"
          },
          {
            "name": "PRYSCILLA HELLEN DE CARVALHO JANOARIO",
            "cpf": "12750215650",
            "email": "pryscillahcjanoario@outlookcom"
          },
          {
            "name": "RAFAEL SANTIAGO CYPRESTE",
            "cpf": "12448815623",
            "email": "rafaelcypreste@hotmailcom"
          },
          {
            "name": "IZABELA CRISTINA GOUVEA SILVA",
            "cpf": "13393369601",
            "email": "izabelagouvea@hotmailcom"
          },
          {
            "name": "VICTORIA GOI DE MORAES RODRIGUES",
            "cpf": "09873045694",
            "email": "victoriagmr88@gmailcom"
          },
          {
            "name": "LETICIA MONTEIRO AZEVEDO",
            "cpf": "15712579693",
            "email": "leticiazeved@gmailcom"
          },
          {
            "name": "FELIPE BUZATTI MARINHO CARNEIRO",
            "cpf": "07484926663",
            "email": "felipebuzatti@hotmailcom"
          },
          {
            "name": "EMERSON COSTA DE OLIVEIRA",
            "cpf": "46454194809",
            "email": "emercosta97@gmailcom"
          },
          {
            "name": "NATHALIA LETICIA BORGES DE MATOS",
            "cpf": "46948885870",
            "email": "nathalialeticiamatos@hotmailcom"
          },
          {
            "name": "SAMUEL SOUZA AMADOR",
            "cpf": "09919037656",
            "email": "samuelamador@estudanteufjfbr"
          },
          {
            "name": "HUARA BERBERT CAMARA DE VIDAL",
            "cpf": "08732863675",
            "email": "huaravidal@alunounifenasbr"
          },
          {
            "name": "MIGUEL VICTOR RODRIGUES VILACA",
            "cpf": "14481648694",
            "email": "miguelvilaca2@hotmailcom"
          },
          {
            "name": "LAIS MICHELLE CUNHA",
            "cpf": "13492877680",
            "email": "laismichele22@gmailcom"
          },
          {
            "name": "ISABELA BICALHO COTA LEMOS",
            "cpf": "11146227612",
            "email": "belabclemos@gmailcom"
          },
          {
            "name": "ANNA CAROLINA CORDEIRO PEIXOTO",
            "cpf": "12964270643",
            "email": "annacarolinacordeiro30@gmailcom"
          },
          {
            "name": "NATALIA MARIA RIERA PIMENTA",
            "cpf": "13658532688",
            "email": "nataliariera@hotmailcom"
          },
          {
            "name": "MIRIAN PEREIRA DE OLIVEIRA",
            "cpf": "01840026642",
            "email": "mirianoliveira2211@gmailcom"
          },
          {
            "name": "FERNANDA VALACI PENA",
            "cpf": "12174480638",
            "email": "fernandapenacoro@hotmailcom"
          },
          {
            "name": "BRENDA CAROLINA RODRIGUES CAJAZEIRA",
            "cpf": "12427521612",
            "email": "brendacajazeira@gmailcom"
          },
          {
            "name": "MARIA VIRGINIA SAMUEL AMORIM",
            "cpf": "11108383602",
            "email": "amorimmariavirginia@gmailcom"
          },
          {
            "name": "JULIA DE SA OLIVEIRA",
            "cpf": "14582556620",
            "email": "juliadesaoliveira@gmailcom"
          },
          {
            "name": "MARIANE MORATO MIZERANI",
            "cpf": "12869488602",
            "email": "Marianemizerani@hotmailcom"
          },
          {
            "name": "VICTORIA MIKA MATSUDA",
            "cpf": "07493021198",
            "email": "mikando910@gmailcom"
          },
          {
            "name": "JOICE SUELEN MARTINS ARAUJO",
            "cpf": "11978349661",
            "email": "joice2015enfermagem@hotmailcom"
          },
          {
            "name": "ANNA LUIZA FONTES MENDES",
            "cpf": "86104995535",
            "email": "annafontes29@gmailcom"
          },
          {
            "name": "HENRIQUE SHELTER PEREIRA VIANA",
            "cpf": "09356840695",
            "email": "shelterrique@gmailcom"
          },
          {
            "name": "MARIANA TONELLI RICCI",
            "cpf": "09245248631",
            "email": "maritonelliricci@gmailcom"
          },
          {
            "name": "MIRELLY DE OLIVEIRA PEDROSA SANTOS",
            "cpf": "01652863699",
            "email": "mirellypedrosa@yahoocombr"
          },
          {
            "name": "VITORIA LUISA MARQUES DEMETRIO",
            "cpf": "10898996619",
            "email": "viviluisa16@hotmailcom"
          },
          {
            "name": "LUISA MARIA RODRIGUES DE MOURA",
            "cpf": "11730398642",
            "email": "luisamariarmoura@gmailcom"
          },
          {
            "name": "LUNA MENDES FRANCA",
            "cpf": "08833836673",
            "email": "lulunamendes@gmailcom"
          },
          {
            "name": "ISABELA GALVAO REIS",
            "cpf": "70632355670",
            "email": "isabela01usa@hotmailcom"
          },
          {
            "name": "ELIZA LOMMEZ DE OLIVEIRA",
            "cpf": "10020299613",
            "email": "lommelizmedic@gmailcom"
          },
          {
            "name": "GUILHERME KELLES JUSTE",
            "cpf": "06612829613",
            "email": "guilhermekelles@gmailcom"
          },
          {
            "name": "MARIA EDUARDA PAIVA ANDRADE",
            "cpf": "12955617601",
            "email": "mariaeduardapandrade@gmailcom"
          },
          {
            "name": "NATHALIA FERNANDES DE CASTRO ALVES",
            "cpf": "09149912640",
            "email": "nathy_castro10@hotmailcom"
          },
          {
            "name": "IARA MOREIRA CALDAS",
            "cpf": "11971793647",
            "email": "iaramcaldass@gmailcom"
          },
          {
            "name": "ISABELA MAGALHAES DE LIMA SANTOS",
            "cpf": "11952022614",
            "email": "isamlsbela@gmailcom"
          },
          {
            "name": "MARCOS VINICIUS GONCALVES DA SILVA",
            "cpf": "02323224654",
            "email": "mvgsilva99@gmailcom"
          },
          {
            "name": "LETICIA DE OLIVEIRA GROSSI",
            "cpf": "07378553638",
            "email": "leticiaoliveiragrossi@outlookcom"
          },
          {
            "name": "AMELIA SOARES DE MELO",
            "cpf": "10325621616",
            "email": "amelo0801@gmailcom"
          },
          {
            "name": "MATHEUS BARBOSA COSTA LIMA",
            "cpf": "10339066628",
            "email": "matheusbarbosa0908@outlookcom"
          },
          {
            "name": "ARTHUR BARBOSA COSTA LIMA",
            "cpf": "10339064684",
            "email": "arthurbarbosa01@outlookcom"
          },
          {
            "name": "KATIA DE FREITAS RODRIGUES GUTSEIT",
            "cpf": "74963988615",
            "email": "katiafreitas70@gmailcom"
          },
          {
            "name": "FERNANDA VALADARES GOMES HENRIQUES",
            "cpf": "12705350640",
            "email": "fernandavaladaresh@gmailcom"
          },
          {
            "name": "ANTONIO VICTOR CONDEZ ALAGIA",
            "cpf": "12559116626",
            "email": "antoniovictoralagia@gmailcom"
          },
          {
            "name": "EMANUELLA LOIS MENDES SOUZA COSTA",
            "cpf": "14076156617",
            "email": "emanuellaloismendes@gmailcom"
          },
          {
            "name": "JULIA RIBEIRO FARIA GONTIJO",
            "cpf": "10815428618",
            "email": "juribeiro7@hotmailcom"
          },
          {
            "name": "CAMILLA MAGALHAES DA SILVA",
            "cpf": "05785722658",
            "email": "camillamsilva@yahoocombr"
          },
          {
            "name": "DAPHINE PARDINHO FERNANDES",
            "cpf": "12883935637",
            "email": "daphinepardinho@gmailcom"
          },
          {
            "name": "GUILHERME AUGUSTO DA SILVA",
            "cpf": "01607844680",
            "email": "gaugustos@hotmailcom"
          },
          {
            "name": "MARCELO THOMAS AQUINO",
            "cpf": "12433437610",
            "email": "marcelothaquino@gmailcom"
          },
          {
            "name": "VINICIUS LUCIO RIBEIRO",
            "cpf": "37134371816",
            "email": "viniciuslr@hotmailcom"
          },
          {
            "name": "ANA BEATRIZ AMARAL MARTINS DE ARAUJO SANCHES",
            "cpf": "07072861661",
            "email": "ana_sanches@cienciasmedicasmgedubr"
          },
          {
            "name": "VICTORIA DE PAULA PEREIRA",
            "cpf": "06306166637",
            "email": "victoriapaula@ufvjmedubr"
          },
          {
            "name": "LUCIANA MARTINELLI LUCENA SAAR SILVA",
            "cpf": "14489239645",
            "email": "lucianasaar33@gmailcom"
          },
          {
            "name": "SARA PRATES ROCHA",
            "cpf": "16268813677",
            "email": "saraprates@estudanteufjfbr"
          },
          {
            "name": "THAIS CAROLYNE JADIR REIS",
            "cpf": "12010762690",
            "email": "thaiscjreis@hotmailcom"
          },
          {
            "name": "MARINA ARAGAO HAMDAN DE FREITAS",
            "cpf": "13390213660",
            "email": "marinaaragaoh@gmailcom"
          },
          {
            "name": "NELSON CARVALHO DO AMARAL",
            "cpf": "00426317181",
            "email": "amaralnelsonc@gmailcom"
          },
          {
            "name": "LUISA TEMPONI",
            "cpf": "09587975600",
            "email": "luisagtg@hotmailcom"
          },
          {
            "name": "CAMILA CARVALHO VILELA",
            "cpf": "06735599632",
            "email": "camilacarvalhovilella@gmailcom"
          },
          {
            "name": "RAFAEL NASCIMENTO DE MELO JARDIM",
            "cpf": "05788273609",
            "email": "rafaeljardim@hotmailcom"
          },
          {
            "name": "ISABEL PELLEGRINELLI BACELAR",
            "cpf": "11776092660",
            "email": "belpelle@gmailcom"
          },
          {
            "name": "BASILIOS JUNIO SANTOS SERVOS",
            "cpf": "11586580604",
            "email": "basilioservos@icloudcom"
          },
          {
            "name": "LORRANE DE MOURA MOREIRA",
            "cpf": "14405290601",
            "email": "lorranemoura@icloudcom"
          },
          {
            "name": "TANIA FERNANDES SILVA",
            "cpf": "06939827641",
            "email": "taninhafernandes@hotmailcom"
          },
          {
            "name": "VINICIUS ALVES ASSUNCAO",
            "cpf": "04375204630",
            "email": "vaassuncao@gmailcom"
          },
          {
            "name": "ANNA BEATRIZ SANTANA MARQUES",
            "cpf": "14515080695",
            "email": "annabeatrizsantanamarques@yahoocombr"
          },
          {
            "name": "ANA LUIZA DAMIANI",
            "cpf": "09407337650",
            "email": "analuizadamiani98@gmailcom"
          },
          {
            "name": "RAFAELA DUARTE COELHO BESSAS",
            "cpf": "13276835630",
            "email": "rafaeladcoelhobessas@gmailcom"
          },
          {
            "name": "NICOLAS MERLIM DE OLIVEIRA",
            "cpf": "02711853250",
            "email": "nicomer007@gmailcom"
          },
          {
            "name": "ISABELA GONTIJO LOPES",
            "cpf": "13851890612",
            "email": "isabelagontijomed@gmailcom"
          },
          {
            "name": "BRUNA MICHELI FRANCISCHINI PARIZOTTO",
            "cpf": "10618726616",
            "email": "brunaparizottomk@gmailcom"
          },
          {
            "name": "PAULA APARECIDA CAETANO TOMAS",
            "cpf": "28790566831",
            "email": "paulatomasmedicina@gmailcom"
          },
          {
            "name": "SABRINA KAROLINE EMANUELLE DE LISBOA OLIVEIRA",
            "cpf": "12484510667",
            "email": "binakarolina@hotmailcom"
          },
          {
            "name": "KARINE ALONSO DOS SANTOS",
            "cpf": "06049284598",
            "email": "karinesantos@alunounifenasbr"
          },
          {
            "name": "CAIO HENRIQUE FOGAROLLI LAVES",
            "cpf": "44126269894",
            "email": "caiolaves@gmailcom"
          },
          {
            "name": "MICHAEL VITOR DA SILVA",
            "cpf": "09088434611",
            "email": "michaelvitors@icloudcom"
          },
          {
            "name": "MARIA IZADORA SOUSA DAMACENA",
            "cpf": "08301857633",
            "email": "izadoradamacena@hotmailcom"
          },
          {
            "name": "ANA LUIZA DE MAGALHAES KOPPERSCHIMIDT",
            "cpf": "12265244600",
            "email": "analuizamag@hotmailcom"
          },
          {
            "name": "MATHEUS PEREIRA VIEIRA",
            "cpf": "11762421640",
            "email": "matheuspvieira@outlookcom"
          },
          {
            "name": "IGOR SOARES DURAES",
            "cpf": "15650552681",
            "email": "igorsoaresduraes@outlookcom"
          },
          {
            "name": "MARIA FERNANDA ARAUJO",
            "cpf": "12948199689",
            "email": "mfhorusaraujo@gmailcom"
          },
          {
            "name": "ANDRE LOBATO MOREIRA",
            "cpf": "02184678694",
            "email": "lobatoam17@gmailcom"
          },
          {
            "name": "JULIANA CAMPOS MACHADO",
            "cpf": "03636082655",
            "email": "julianacm_23@yahoocombr"
          },
          {
            "name": "CAROLINE PAIXAO MARQUES",
            "cpf": "10183835654",
            "email": "carolmarques00@icloudcom"
          },
          {
            "name": "JESSICA BICALHO DE PINHO SA",
            "cpf": "02199766608",
            "email": "jessicabpinho@gmailcom"
          },
          {
            "name": "ARMANDO JORGE JUNIOR",
            "cpf": "01067459138",
            "email": "armandojunior@ebserhgovbr"
          },
          {
            "name": "LAURA BARROS POSSA",
            "cpf": "08671050629",
            "email": "lauraabarros2003@gmailcom"
          },
          {
            "name": "GABRIELA HISSA LOPES",
            "cpf": "13442402670",
            "email": "ghissalopes@gmailcom"
          },
          {
            "name": "VICTOR BRUNNO ALVES NOGUEIRA",
            "cpf": "08377631695",
            "email": "victo_nogueira@yahoocombr"
          },
          {
            "name": "MATEUS DE FARIA VALADARES",
            "cpf": "04673784600",
            "email": "mateusvaladares@gmailcom"
          },
          {
            "name": "LAURA DE ALVARENGA PEDRAS FIGUEIRO",
            "cpf": "17820145609",
            "email": "laurafigueiro2004@hotmailcom"
          },
          {
            "name": "MARIANA QUINTINO MORAIS PEREIRA",
            "cpf": "13091487679",
            "email": "mariquintino2004@hotmailcom"
          },
          {
            "name": "MARIANA CARDOSO GODINHO",
            "cpf": "11943251657",
            "email": "marianagodinho20041@gmailcom"
          },
          {
            "name": "IRINA BERBERT VIDAL INACIO COELHO",
            "cpf": "09338287645",
            "email": "irinaberbert@gmailcom"
          },
          {
            "name": "ANGELO ENRICO STECKELBERG PIMENTA MACEDO",
            "cpf": "12551338646",
            "email": "angeloenricospm@gmailcom"
          },
          {
            "name": "LAIS ROBERTA OLIVEIRA DA CRUZ",
            "cpf": "07689434509",
            "email": "laisrobertaodc@gmailcom"
          },
          {
            "name": "LUIZA DAYRELL FERREIRA TAVARES",
            "cpf": "15907288663",
            "email": "luiza_tavares@cienciasmedicasmgedubr"
          },
          {
            "name": "GYOVANNA TORRES MESQUITA",
            "cpf": "15636528620",
            "email": "gyogyovannatorres@gmailcom"
          },
          {
            "name": "MARIANA SIQUEIRA GANDRA",
            "cpf": "14423574608",
            "email": "marianasiqueiragandra@gmailcom"
          },
          {
            "name": "ANA LUIZA LOPES DA SILVA OLIVEIRA",
            "cpf": "11784971600",
            "email": "analuizalopes2001@gmailcom"
          },
          {
            "name": "PRYSCILLA HELLEN DE CARVALHO JANOARIO",
            "cpf": "12750215650",
            "email": "pryscillahcjanoario@outlookcom"
          },
          {
            "name": "RAFAEL SANTIAGO CYPRESTE",
            "cpf": "12448815623",
            "email": "rafaelcypreste@hotmailcom"
          },
          {
            "name": "MARYSTHER FRANCOSO TEIXEIRA DA COSTA",
            "cpf": "06407884675",
            "email": "marysthercosta@yahoocombr"
          },
          {
            "name": "CAROLINE RODRIGUES MILHOMEM SOUTO",
            "cpf": "04172049141",
            "email": "milhomemcaroline@gmailcom"
          },
          {
            "name": "JACK EDUARDA ANTUNES BATISTA",
            "cpf": "15390408608",
            "email": "jack_batista@cienciasmedicasmgedubr"
          },
          {
            "name": "VINICIUS JANSON FREIRE",
            "cpf": "15172967656",
            "email": "viniciusjansonjf@gmailcom"
          },
          {
            "name": "JULIANA DE ALMEIDA CASTRO",
            "cpf": "12548497690",
            "email": "juhaalc@gmailcom"
          },
          {
            "name": "KRISTIAN RYAN MOREIRA COTA",
            "cpf": "70058551670",
            "email": "kristian_cota@cienciasmedicasmgedubr"
          },
          {
            "name": "LETICIA VIEIRA FARACO",
            "cpf": "09907065676",
            "email": "lvfaraco@gmailcom"
          },
          {
            "name": "GIOVANA KAROLINE SEABRA ALMEIDA",
            "cpf": "08746562656",
            "email": "giovanaseabra45@gmailcom"
          },
          {
            "name": "PAULA ARAUJO DINIZ",
            "cpf": "10889600651",
            "email": "paulaaraudiniz@gmailcom"
          },
          {
            "name": "ELEN CRISTINA DE SOUSA",
            "cpf": "13112459601",
            "email": "elencsousa23@gmailcom"
          },
          {
            "name": "JULIA WANDERLEY SOARES DE VIVEIROS",
            "cpf": "10136054625",
            "email": "juliaviveiros20@gmailcom"
          },
          {
            "name": "ISABELA DINIZ DE OLIVEIRA SANTOS",
            "cpf": "10439106621",
            "email": "Isabeladsantos@icloudcom"
          },
          {
            "name": "ROSANA VANESSA OLIVEIRA SILVA",
            "cpf": "01243553669",
            "email": "rosanavosilva@gmailcom"
          },
          {
            "name": "IZABELA CRISTINA GOUVEA SILVA",
            "cpf": "13393369601",
            "email": "izabelagouvea@hotmailcom"
          },
          {
            "name": "LUIZA CELANI REIS DE LACERDA",
            "cpf": "02162948605",
            "email": "luizacelani18@hotmailcom"
          },
          {
            "name": "TACIANE BALSA GRIS",
            "cpf": "09336561650",
            "email": "tacianebalsa@gmailcom"
          },
          {
            "name": "TIAGO ABREU VELLOSO",
            "cpf": "15543224648",
            "email": "tiagovellosomed@gmailcom"
          },
          {
            "name": "VICTORIA GOI DE MORAES RODRIGUES",
            "cpf": "09873045694",
            "email": "victoriagmr88@gmailcom"
          },
          {
            "name": "LETICIA MONTEIRO AZEVEDO",
            "cpf": "15712579693",
            "email": "leticiazeved@gmailcom"
          },
          {
            "name": "FELIPE BUZATTI MARINHO CARNEIRO",
            "cpf": "07484926663",
            "email": "felipebuzatti@hotmailcom"
          },
          {
            "name": "LIVIA NARCISO NEVES RICARDO",
            "cpf": "11431471623",
            "email": "Livianarciso@icloudcom"
          },
          {
            "name": "MARIANA NASCIMENTO MUZZI",
            "cpf": "09557904682",
            "email": "marinascimuzzi@gmailcom"
          },
          {
            "name": "JESSICA LARA SOUZA",
            "cpf": "10133294650",
            "email": "dramedjessica@gmailcom"
          },
          {
            "name": "DEBORA BARBOSA QUIBLER DE MELO",
            "cpf": "03438329255",
            "email": "deboraquibler@gmailcom"
          },
          {
            "name": "VICTOR TADEU DA CUNHA SIMAO",
            "cpf": "07463886670",
            "email": "Victorsimao@sgapucminasbr"
          },
          {
            "name": "ANNA THERESA SIQUEIRA VIEIRA FRAGA",
            "cpf": "12452428655",
            "email": "annatheresavieira@gmailcom"
          },
          {
            "name": "RAYLA RODRIGUES SOARES",
            "cpf": "13954749661",
            "email": "rayla0312@gmailcom"
          },
          {
            "name": "RAFAELLA HERINGER ALMEIDA",
            "cpf": "11996039610",
            "email": "rafaellaheringer402@gmailcom"
          },
          {
            "name": "ANA CAROLINA DE LIMA TEIXEIRA",
            "cpf": "02130331602",
            "email": "anacarolinalimat@hotmailcom"
          },
          {
            "name": "ISABEL RODRIGUES PEDROSA",
            "cpf": "08435787699",
            "email": "isabelrodped@gmailcom"
          },
          {
            "name": "DANIEL AUGUSTO CARLOS SILVA",
            "cpf": "10091634695",
            "email": "danielaugustofut@gmailcom"
          },
          {
            "name": "LARA GUEDES",
            "cpf": "02263062670",
            "email": "laraguedes_s@outlookcom"
          },
          {
            "name": "EMERSON COSTA DE OLIVEIRA",
            "cpf": "46454194809",
            "email": "emercosta97@gmailcom"
          },
          {
            "name": "NATHALIA LETICIA BORGES DE MATOS",
            "cpf": "46948885870",
            "email": "nathalialeticiamatos@hotmailcom"
          },
          {
            "name": "SAMUEL SOUZA AMADOR",
            "cpf": "09919037656",
            "email": "samuelamador@estudanteufjfbr"
          },
          {
            "name": "ISABELLA NEIFE ALVES SARY ELDIN",
            "cpf": "01785216635",
            "email": "Bellaeldin@icloudcom"
          },
          {
            "name": "JOAO GABRIEL GOULART NEVES",
            "cpf": "13546569628",
            "email": "joaogabrielg07@gmailcom"
          },
          {
            "name": "RAFEL MOREIRA DE CARVALHO MELADO",
            "cpf": "07402274675",
            "email": "desingmoreira@gmailcom"
          },
          {
            "name": "LUCAS MENEZES DENDENA",
            "cpf": "13725435626",
            "email": "lucasmenezesdendena@gmailcom"
          },
          {
            "name": "PHELIPPE RICCARDO REIS COELHO",
            "cpf": "11655490699",
            "email": "preisacademia@gmailcom"
          },
          {
            "name": "RACHEL AMELIA DAMAZO LACERDA SOARES",
            "cpf": "08989181623",
            "email": "rachelsoares_bh@yahoocombr"
          },
          {
            "name": "MAISA MARTINS OLIVEIRA",
            "cpf": "11213317690",
            "email": "maisamod@yahoocom"
          },
          {
            "name": "ANTONY PEREIRA DE FARIA SILVA",
            "cpf": "01935295640",
            "email": "antonypereiradefaria@gmailcom"
          },
          {
            "name": "LUCIA GONCALVES VILLANOVA",
            "cpf": "03186093120",
            "email": "villanovalucia@hotmailcom"
          },
          {
            "name": "HUARA BERBERT CAMARA DE VIDAL",
            "cpf": "08732863675",
            "email": "huaravidal@alunounifenasbr"
          },
          {
            "name": "MIGUEL VICTOR RODRIGUES VILACA",
            "cpf": "14481648694",
            "email": "miguelvilaca2@hotmailcom"
          },
          {
            "name": "LAIS MICHELLE CUNHA",
            "cpf": "13492877680",
            "email": "laismichele22@gmailcom"
          },
          {
            "name": "ISABELA BICALHO COTA LEMOS",
            "cpf": "11146227612",
            "email": "belabclemos@gmailcom"
          },
          {
            "name": "ANNA CAROLINA CORDEIRO PEIXOTO",
            "cpf": "12964270643",
            "email": "annacarolinacordeiro30@gmailcom"
          },
          {
            "name": "PAULA CARDOSO VICTAL",
            "cpf": "13009689667",
            "email": "gfvictal@gmailcom"
          },
          {
            "name": "GABRIELA CARVALHO BARBOSA",
            "cpf": "13805321678",
            "email": "gabrielacbarbosa@ufvbr"
          },
          {
            "name": "NATALIA MARIA RIERA PIMENTA",
            "cpf": "13658532688",
            "email": "nataliariera@hotmailcom"
          },
          {
            "name": "MIRIAN PEREIRA DE OLIVEIRA",
            "cpf": "01840026642",
            "email": "mirianoliveira2211@gmailcom"
          },
          {
            "name": "NATALIA BRAGA DE GOUVEA",
            "cpf": "14406525629",
            "email": "natinhabg77@hotmailcom"
          },
          {
            "name": "CESAR EDUARDO HORI FREITAS",
            "cpf": "11313877670",
            "email": "Cesarhorifreitas00@gmailcom"
          },
          {
            "name": "LETICIA ARAUJO SORIANO",
            "cpf": "15762586618",
            "email": "leticiaas@outlookcom"
          },
          {
            "name": "ARTHUR MAGALHAES PINTO",
            "cpf": "15249478654",
            "email": "arthurmaga@outlookcom"
          },
          {
            "name": "ANA CLARA VAZ SILVEIRA",
            "cpf": "09497525680",
            "email": "ana260405claravaz@gmailcom"
          },
          {
            "name": "NICOLE PINHEIRO MAGALHAES DE SOUZA LIMA",
            "cpf": "09707517611",
            "email": "nicolepinh@hotmailcom"
          },
          {
            "name": "GIOVANNA LUISA SALDANHA SALIBA",
            "cpf": "16161135612",
            "email": "giovannasalibabr@gmailcom"
          },
          {
            "name": "LARISSA DE OLIVEIRA MENDES SIMOES",
            "cpf": "14023807630",
            "email": "larisimoes99@gmailcom"
          },
          {
            "name": "FERNANDA VALACI PENA",
            "cpf": "12174480638",
            "email": "fernandapenacoro@hotmailcom"
          },
          {
            "name": "BRENDA CAROLINA RODRIGUES CAJAZEIRA",
            "cpf": "12427521612",
            "email": "brendacajazeira@gmailcom"
          },
          {
            "name": "MARIA VIRGINIA SAMUEL AMORIM",
            "cpf": "11108383602",
            "email": "amorimmariavirginia@gmailcom"
          },
          {
            "name": "ARTHUR ALVARENGA MEDEIROS",
            "cpf": "11272701689",
            "email": "arthuralvarengamedeiroscmmg@gmailcom"
          },
          {
            "name": "CAMILA MARIA OLIVEIRA DE MELO",
            "cpf": "71202378455",
            "email": "camilamariaoliveirademelo@gmailcom"
          },
          {
            "name": "PABLO HENRIQUE SILVA PRADO",
            "cpf": "11763665640",
            "email": "pablohsprado@gmailcom"
          },
          {
            "name": "GABRIELA OLIMPIA ARAUJO",
            "cpf": "14336241686",
            "email": "bibiolimpia@yahoocombr"
          },
          {
            "name": "LARISSA EMMANUELLE COSTA SILVA",
            "cpf": "10955923603",
            "email": "larissaecsilva@gmailcom"
          },
          {
            "name": "JULIA DE SA OLIVEIRA",
            "cpf": "14582556620",
            "email": "juliadesaoliveira@gmailcom"
          },
          {
            "name": "MARIANE MORATO MIZERANI",
            "cpf": "12869488602",
            "email": "Marianemizerani@hotmailcom"
          },
          {
            "name": "VICTORIA MIKA MATSUDA",
            "cpf": "07493021198",
            "email": "mikando910@gmailcom"
          },
          {
            "name": "JOICE SUELEN MARTINS ARAUJO",
            "cpf": "11978349661",
            "email": "joice2015enfermagem@hotmailcom"
          },
          {
            "name": "ANNA LUIZA FONTES MENDES",
            "cpf": "86104995535",
            "email": "annafontes29@gmailcom"
          },
          {
            "name": "ANA FLAVIA FERREIRA MOREIRA",
            "cpf": "13715161620",
            "email": "aflaviafmoreira@gmailcom"
          },
          {
            "name": "RAFAELA GODOI DE CARVALHO SILVA",
            "cpf": "13764205628",
            "email": "rafaelacarvalho602@gmailcom"
          },
          {
            "name": "BEATRIZ DE FARIA LUCARINI",
            "cpf": "10322453607",
            "email": "beatrizflucarini@gmailcom"
          },
          {
            "name": "PEDRO RIBEIRO BRAGA",
            "cpf": "13746287600",
            "email": "pedrobraga103@gmailcom"
          },
          {
            "name": "RAFAELA MARIA MELLO FONSECA",
            "cpf": "08227097677",
            "email": "rafaelamariamello@gmailcom"
          },
          {
            "name": "HENRIQUE SHELTER PEREIRA VIANA",
            "cpf": "09356840695",
            "email": "shelterrique@gmailcom"
          },
          {
            "name": "FRANCIELE LOPES DIAS DE FREITAS",
            "cpf": "12502100623",
            "email": "francilopesdias@gmailcom"
          },
          {
            "name": "LEANDRO PINTO AMARAL",
            "cpf": "13782034619",
            "email": "leandropamaral99@gmailcom"
          },
          {
            "name": "MARIANA TONELLI RICCI",
            "cpf": "09245248631",
            "email": "maritonelliricci@gmailcom"
          },
          {
            "name": "MIRELLY DE OLIVEIRA PEDROSA SANTOS",
            "cpf": "01652863699",
            "email": "mirellypedrosa@yahoocombr"
          },
          {
            "name": "RUBENS MACIEL MARTINS PEREIRA",
            "cpf": "10751486698",
            "email": "rubensmp2009@gmailcom"
          },
          {
            "name": "CAROLINA DE ARAUJO GUIMARAES",
            "cpf": "13316839631",
            "email": "carolinaaguimaraes@yahoocombr"
          },
          {
            "name": "GABRIELA GUERRA FALCAO",
            "cpf": "12559079674",
            "email": "gabigfalcao@gmailcom"
          },
          {
            "name": "ANA LAURA MOREIRA GERHARDT",
            "cpf": "43272191852",
            "email": "analauragerhardt27@gmailcom"
          },
          {
            "name": "MARIA FERNANDA SANTOS ATTIE",
            "cpf": "07953189607",
            "email": "mafeattie@gmailcom"
          },
          {
            "name": "VITORIA LUISA MARQUES DEMETRIO",
            "cpf": "10898996619",
            "email": "viviluisa16@hotmailcom"
          },
          {
            "name": "LUISA MARIA RODRIGUES DE MOURA",
            "cpf": "11730398642",
            "email": "luisamariarmoura@gmailcom"
          },
          {
            "name": "LUNA MENDES FRANCA",
            "cpf": "08833836673",
            "email": "lulunamendes@gmailcom"
          },
          {
            "name": "ISABELA GALVAO REIS",
            "cpf": "70632355670",
            "email": "isabela01usa@hotmailcom"
          },
          {
            "name": "ELIZA LOMMEZ DE OLIVEIRA",
            "cpf": "10020299613",
            "email": "lommelizmedic@gmailcom"
          },
          {
            "name": "GUILHERME KELLES JUSTE",
            "cpf": "06612829613",
            "email": "guilhermekelles@gmailcom"
          },
          {
            "name": "MARIA EDUARDA PAIVA ANDRADE",
            "cpf": "12955617601",
            "email": "mariaeduardapandrade@gmailcom"
          },
          {
            "name": "NATHALIA FERNANDES DE CASTRO ALVES",
            "cpf": "09149912640",
            "email": "nathy_castro10@hotmailcom"
          },
          {
            "name": "MANUELA LOBATO BARBOSA",
            "cpf": "02329326629",
            "email": "manulobatobarbosa@gmailcom"
          },
          {
            "name": "DAVI TERENCE MOREIRA",
            "cpf": "16414552682",
            "email": "daviterencemoreira16@gmailcom"
          },
          {
            "name": "MARCELO NUNES DE SOUZA REPSOLD",
            "cpf": "11152474685",
            "email": "marcelorepsold19@gmailcom"
          },
          {
            "name": "ARTHUR DE CARVALHO E CASTRO",
            "cpf": "70617561109",
            "email": "arthurcastro@alunounifenasbr"
          },
          {
            "name": "LAURA ALMEIDA OLIVEIRA",
            "cpf": "12063729662",
            "email": "lauraalmeidaoliveira@estudanteufjfbr"
          },
          {
            "name": "ANNA PAULA GUIMARAES MOITINHO",
            "cpf": "13407561610",
            "email": "annagmoitinho@gmailcom"
          },
          {
            "name": "IARA MOREIRA CALDAS",
            "cpf": "11971793647",
            "email": "iaramcaldass@gmailcom"
          },
          {
            "name": "ISABELA MAGALHAES DE LIMA SANTOS",
            "cpf": "11952022614",
            "email": "isamlsbela@gmailcom"
          },
          {
            "name": "MARCOS VINICIUS GONCALVES DA SILVA",
            "cpf": "02323224654",
            "email": "mvgsilva99@gmailcom"
          },
          {
            "name": "LETICIA DE OLIVEIRA GROSSI",
            "cpf": "07378553638",
            "email": "leticiaoliveiragrossi@outlookcom"
          },
          {
            "name": "AMELIA SOARES DE MELO",
            "cpf": "10325621616",
            "email": "amelo0801@gmailcom"
          },
          {
            "name": "MATHEUS BARBOSA COSTA LIMA",
            "cpf": "10339066628",
            "email": "matheusbarbosa0908@outlookcom"
          },
          {
            "name": "ARTHUR BARBOSA COSTA LIMA",
            "cpf": "10339064684",
            "email": "arthurbarbosa01@outlookcom"
          },
          {
            "name": "KATIA DE FREITAS RODRIGUES GUTSEIT",
            "cpf": "74963988615",
            "email": "katiafreitas70@gmailcom"
          },
          {
            "name": "FERNANDA VALADARES GOMES HENRIQUES",
            "cpf": "12705350640",
            "email": "fernandavaladaresh@gmailcom"
          },
          {
            "name": "ANTONIO VICTOR CONDEZ ALAGIA",
            "cpf": "12559116626",
            "email": "antoniovictoralagia@gmailcom"
          },
          {
            "name": "EMANUELLA LOIS MENDES SOUZA COSTA",
            "cpf": "14076156617",
            "email": "emanuellaloismendes@gmailcom"
          },
          {
            "name": "JULIA RIBEIRO FARIA GONTIJO",
            "cpf": "10815428618",
            "email": "juribeiro7@hotmailcom"
          },
          {
            "name": "CAMILLA MAGALHAES DA SILVA",
            "cpf": "05785722658",
            "email": "camillamsilva@yahoocombr"
          },
          {
            "name": "DAPHINE PARDINHO FERNANDES",
            "cpf": "12883935637",
            "email": "daphinepardinho@gmailcom"
          },
          {
            "name": "GUILHERME AUGUSTO DA SILVA",
            "cpf": "01607844680",
            "email": "gaugustos@hotmailcom"
          },
          {
            "name": "MARCELO THOMAS AQUINO",
            "cpf": "12433437610",
            "email": "marcelothaquino@gmailcom"
          },
          {
            "name": "VINICIUS LUCIO RIBEIRO",
            "cpf": "37134371816",
            "email": "viniciuslr@hotmailcom"
          },
          {
            "name": "ANA BEATRIZ AMARAL MARTINS DE ARAUJO SANCHES",
            "cpf": "07072861661",
            "email": "ana_sanches@cienciasmedicasmgedubr"
          },
          {
            "name": "MARIA FERNANDA ANTONINI PIMENTA",
            "cpf": "15537391678",
            "email": "mfefeantonini@gmailcom"
          },
          {
            "name": "SILVIA MENDES ROLLA",
            "cpf": "14366060639",
            "email": "silviamendesmed@gmailcom"
          },
          {
            "name": "PALOMA DE FREITAS ARAUJO",
            "cpf": "70511025670",
            "email": "palomadefreitasaraujo@gmailcom"
          },
          {
            "name": "MATHEUS ALVES DE SOUZA DIAS",
            "cpf": "09721200689",
            "email": "matheusasdias@hotmailcom"
          },
          {
            "name": "TIAGO OLIVEIRA ABREU COSTA",
            "cpf": "14997493686",
            "email": "tiagocosta0711@outlookcombr"
          },
          {
            "name": "ALEJANDRO CORTES",
            "cpf": "87531933004",
            "email": "alejandrocortes846@gmailcom"
          },
          {
            "name": "MARIANA SILVA GOMES",
            "cpf": "14641029610",
            "email": "mariana_gomes@cienciasmedicasmgedubr"
          },
          {
            "name": "VIVIAN BARROSO SANTOS",
            "cpf": "11064097600",
            "email": "vivianbsufmg@gmailcom"
          },
          {
            "name": "LETICIA DORNAS DA COSTA",
            "cpf": "13792882663",
            "email": "leticiadornasc@gmailcom"
          },
          {
            "name": "VICTORIA DE PAULA PEREIRA",
            "cpf": "06306166637",
            "email": "victoriapaula@ufvjmedubr"
          },
          {
            "name": "LUCIANA MARTINELLI LUCENA SAAR SILVA",
            "cpf": "14489239645",
            "email": "lucianasaar33@gmailcom"
          },
          {
            "name": "SARA PRATES ROCHA",
            "cpf": "16268813677",
            "email": "saraprates@estudanteufjfbr"
          },
          {
            "name": "THAIS CAROLYNE JADIR REIS",
            "cpf": "12010762690",
            "email": "thaiscjreis@hotmailcom"
          },
          {
            "name": "MARINA ARAGAO HAMDAN DE FREITAS",
            "cpf": "13390213660",
            "email": "marinaaragaoh@gmailcom"
          },
          {
            "name": "NELSON CARVALHO DO AMARAL",
            "cpf": "00426317181",
            "email": "amaralnelsonc@gmailcom"
          },
          {
            "name": "ANA RITA FAGUNDES AMARAL LOPES",
            "cpf": "08406695692",
            "email": "Anaritafagundeslopes@gmailcom"
          },
          {
            "name": "CLARA MARCAL VILELA",
            "cpf": "12912196680",
            "email": "claramarcalvilela@gmailcom"
          },
          {
            "name": "LUCAS BASSI TARANTO GOULART",
            "cpf": "13968968646",
            "email": "bassilucas22@gmailcom"
          },
          {
            "name": "GIOVANNA MARTINS OLIVEIRA MAGALHAES",
            "cpf": "11800409613",
            "email": "giovannamomagalhaes@gmailcom"
          },
          {
            "name": "LAURA LIMA SILVA PEREIRA",
            "cpf": "14436126692",
            "email": "lauralsp0308@gmailcom"
          },
          {
            "name": "LAURA MELO COSTA",
            "cpf": "70349677689",
            "email": "lauramelocosta01@gmailcom"
          },
          {
            "name": "AMANDA MARCAL GONCALVES",
            "cpf": "70057062692",
            "email": "amandamgoncalves@hotmailcom"
          },
          {
            "name": "ANA LUIZA RODRIGUES CLARK PHILLIPS",
            "cpf": "01916983693",
            "email": "analuizaclarkphillips@gmailcom"
          },
          {
            "name": "MARIA LUISA SILVA SANTOS",
            "cpf": "14437526651",
            "email": "mluisasantos21@gmailcom"
          },
          {
            "name": "MARIANA COLINI DE CASTRO",
            "cpf": "15098586607",
            "email": "marianaccolini@gmailcom"
          },
          {
            "name": "GABRIELA VIEIRA QUIRINO",
            "cpf": "09478985655",
            "email": "gabrielaquirino@ufvbr"
          },
          {
            "name": "JULIA MAIA TAMBASCO",
            "cpf": "15646938643",
            "email": "juliamaiatambasco@icloudcom"
          },
          {
            "name": "LARA FERREIRA RAMINHO",
            "cpf": "12348868636",
            "email": "laraferreiraraminho@gmailcom"
          },
          {
            "name": "LUISA TEMPONI",
            "cpf": "09587975600",
            "email": "luisagtg@hotmailcom"
          },
          {
            "name": "CAMILA CARVALHO VILELA",
            "cpf": "06735599632",
            "email": "camilacarvalhovilella@gmailcom"
          },
          {
            "name": "GABRIELA FONSECA DOMINGOS",
            "cpf": "14885283655",
            "email": "gabifdomingos25@gmailcom"
          },
          {
            "name": "LUCAS MARQUES BRANDIAO",
            "cpf": "13858362611",
            "email": "lucasbrandiao2@hotmailcom"
          },
          {
            "name": "NATHALYA APARECIDA SILVEIRA CAMPOS",
            "cpf": "14027431650",
            "email": "nathalyaaparecida7@gmailcom"
          },
          {
            "name": "EDUARDA PANDIA CAMARA MATTOS",
            "cpf": "09716302673",
            "email": "Pandiaeduarda@gmailcom"
          },
          {
            "name": "THAIS GUEDES",
            "cpf": "10933072694",
            "email": "thaisguedesoficial@gmailcom"
          },
          {
            "name": "PAMELLA REGINA ANDRADE PEVIDOR",
            "cpf": "13839247675",
            "email": "pamellapevidor@gmailcom"
          },
          {
            "name": "ANA CLARA RODRIGUES LIMA DE SOUZA",
            "cpf": "13025610654",
            "email": "anarlsouza560@gmailcom"
          },
          {
            "name": "MELISSA BOTTENE QUEIROZ DE CASTRO",
            "cpf": "11641873680",
            "email": "melissabottene@gmailcom"
          },
          {
            "name": "MARIA EDUARDA RODRIGUES SILVA",
            "cpf": "14069076697",
            "email": "maria_2310101142@cienciasmedicasmgedubr"
          },
          {
            "name": "RAYANE AMARAL MARTINS",
            "cpf": "13096064636",
            "email": "rayanemaartins2004@gmailcom"
          },
          {
            "name": "LORENZO SANTINI BARBIERI",
            "cpf": "13538177686",
            "email": "lorenzobarbieri2504@gmailcom"
          },
          {
            "name": "LAURA MESSER DE CASTRO",
            "cpf": "12615270621",
            "email": "Lauramesserc@hotmailcom"
          },
          {
            "name": "LUCAS ARAUJO VAZ",
            "cpf": "09819669693",
            "email": "lucasavaz@gmailcom"
          },
          {
            "name": "VITOR GABRIEL SOARES ARAUJO",
            "cpf": "12398552659",
            "email": "vitorgabriel04sa@gmailcom"
          },
          {
            "name": "BRENDA CARDOSO DE ASSIS MAIA",
            "cpf": "13576759689",
            "email": "brendamaia@alunounifenasbr"
          },
          {
            "name": "LARISSA SILVEIRA ANDRADE",
            "cpf": "01914282647",
            "email": "larisilveiraa15@icloudcom"
          },
          {
            "name": "JULIA SOARES BRANDAO",
            "cpf": "10271696605",
            "email": "jjuliasbrandao@gmailcom"
          },
          {
            "name": "LAURA GUIMARAES PEDROSA",
            "cpf": "12872861602",
            "email": "lauragpedrosa@gmailcom"
          },
          {
            "name": "ALICE PINHEIRO BARBOSA",
            "cpf": "10654206686",
            "email": "alicepinheirob@hotmailcom"
          },
          {
            "name": "EMANUELLE SEVERINO GONTIJO BOUCINHAS",
            "cpf": "13600210602",
            "email": "emanuelleseverino1@gmailcom"
          },
          {
            "name": "ANA CLARA CAMARGO DOS SANTOS",
            "cpf": "08870924629",
            "email": "ana_12410100004@cienciasmedicasmgedubr"
          },
          {
            "name": "RAFAEL NASCIMENTO DE MELO JARDIM",
            "cpf": "05788273609",
            "email": "rafaeljardim@hotmailcom"
          },
          {
            "name": "JULIA BUENO MARX",
            "cpf": "08730414610",
            "email": "juliabuenomarx@gmailcom"
          },
          {
            "name": "ISABEL PELLEGRINELLI BACELAR",
            "cpf": "11776092660",
            "email": "belpelle@gmailcom"
          },
          {
            "name": "IGOR RODRIGUES SALLES",
            "cpf": "14182070631",
            "email": "igorsrodriguessalles@gmailcom"
          },
          {
            "name": "LUIZA PINHEIRO DE ASSIS FREITAS",
            "cpf": "10536445664",
            "email": "luizafreitasp07@gmailcom"
          },
          {
            "name": "MEL NUNES CASTRO",
            "cpf": "11002706637",
            "email": "melncastro03@gmailcom"
          },
          {
            "name": "ISADORA ALVES COSTA PEREIRA",
            "cpf": "14533734626",
            "email": "alvescostaisadora@gmailcom"
          },
          {
            "name": "TATIANE DALETH ALVES DE OLIVEIRA",
            "cpf": "11151982628",
            "email": "dalethtatiane@gmailcom"
          },
          {
            "name": "LARISSA MALUF GOMES",
            "cpf": "14406226630",
            "email": "larissa17mg@gmailcom"
          },
          {
            "name": "NELY FERNANDES XAVIER CORREIA",
            "cpf": "11900305607",
            "email": "nellycorreia4@gmailcom"
          },
          {
            "name": "LAURA BANDEIRA MENEZES DOS SANTOS",
            "cpf": "12273803648",
            "email": "laurabmds0608@gmailcom"
          },
          {
            "name": "PEDRO LUCAS ALVAREZ RODRIGUES",
            "cpf": "08900931644",
            "email": "pedroalvarez2003@hotmailcom"
          },
          {
            "name": "LETICIA DIAS SIMOES TARQUINIO",
            "cpf": "08912928619",
            "email": "leticiadstarquinio@gmailcom"
          },
          {
            "name": "JULIA CORREA",
            "cpf": "06978329614",
            "email": "juliacorrea7@gmailcom"
          },
          {
            "name": "ALVARO AUGUSTO RIBAS GUIMARAES",
            "cpf": "08196823657",
            "email": "alvaroaribas@yahoocombr"
          },
          {
            "name": "GABRIELLA MAIA BARBOSA",
            "cpf": "15080693606",
            "email": "gabimaiabarbosa@gmailcom"
          },
          {
            "name": "BEATRIZ DE FREITAS PEREIRA GARCIA",
            "cpf": "14841865675",
            "email": "beatrizfgarcia2204@gmailcom"
          },
          {
            "name": "ALICE PEREIRA SILVA",
            "cpf": "09185005673",
            "email": "alicepereirasilva02@gmailcom"
          },
          {
            "name": "FERNANDA DE LUCA FELICISSIMO",
            "cpf": "09290430656",
            "email": "fernandadeluca4@gmailcom"
          },
          {
            "name": "IRIS REGINA ESCUDEIRO SANTIAGO",
            "cpf": "15238444699",
            "email": "irisesantiago@hotmailcom"
          },
          {
            "name": "ERICA  FRANCA CASSEMIRO LOPES",
            "cpf": "15581376611",
            "email": "francaerica75@gmailcom"
          },
          {
            "name": "GABRIELA SERPA AVELLAR",
            "cpf": "12544288604",
            "email": "gabiserpaavellar@gmailcom"
          },
          {
            "name": "THIAGO PEREIRA GONCALVES",
            "cpf": "13999495600",
            "email": "thgoncallves@gmailcom"
          },
          {
            "name": "MANOELA BORGES LOPES",
            "cpf": "09927062621",
            "email": "manoelablopes05@gmailcom"
          },
          {
            "name": "LAILA GARCIA SIMOES",
            "cpf": "13549079656",
            "email": "lailagarcia1806@gmailcom"
          },
          {
            "name": "BRUNNA DE PAULA CAMPOS",
            "cpf": "10910731632",
            "email": "brunna2000@hotmailcom"
          },
          {
            "name": "CAMILLA NOVAES SAMPAIO",
            "cpf": "14750912654",
            "email": "camilla_novaes@yahoocombr"
          },
          {
            "name": "BASILIOS JUNIO SANTOS SERVOS",
            "cpf": "11586580604",
            "email": "basilioservos@icloudcom"
          },
          {
            "name": "MARCELO SHIZUO NISHISAKA",
            "cpf": "09979163623",
            "email": "nishisakashizuo@gmailcom"
          },
          {
            "name": "LARISSA MIRANDA LIMA",
            "cpf": "12868822657",
            "email": "larissamirandalim@gmailcom"
          },
          {
            "name": "ISABELLY DAMASCENO SOUZA",
            "cpf": "09893178541",
            "email": "isabellydamasc@gmailcom"
          },
          {
            "name": "ELISA CARVALHO MALTA",
            "cpf": "07664973643",
            "email": "elisamalta@hotmailcom"
          },
          {
            "name": "BERNARDO SARAIVA DE ASSIS CATAO",
            "cpf": "11540158667",
            "email": "bernardocomcatao@gmailcom"
          },
          {
            "name": "GEOVANA MOREIRA PEREIRA",
            "cpf": "13364547688",
            "email": "gepereiramoreira01@gmailcom"
          },
          {
            "name": "CASSIA MENDES SANTOS",
            "cpf": "02134989602",
            "email": "cassiamendes10@hotmailcom"
          },
          {
            "name": "TATIANE APARECIDA DE ASSIS SILVA",
            "cpf": "13732325601",
            "email": "assistatiane@icloudcom"
          },
          {
            "name": "LAIS BIRCHAL BRAGA BORGES",
            "cpf": "14779835623",
            "email": "laisbirchal@hotmailcom"
          },
          {
            "name": "GIOVANNA FERNANDA SILVA BUENO",
            "cpf": "14075398684",
            "email": "gigifsb@gmailcom"
          },
          {
            "name": "ALICE VALADARES PICARRO",
            "cpf": "14196264697",
            "email": "alicepicarro@gmailcom"
          },
          {
            "name": "JOAO PEDRO MENDES ROCHA",
            "cpf": "15608992636",
            "email": "jpmrocha10@hotmailcom"
          },
          {
            "name": "MARINA CASTELLO BRANCO BASTOS",
            "cpf": "12970463660",
            "email": "marinacbbastos@gmailcom"
          },
          {
            "name": "BERNARDO BUITRAGO DE ANDRADE",
            "cpf": "09452813660",
            "email": "bbuitragoandrade@gmailcom"
          },
          {
            "name": "THAIS BRETAS",
            "cpf": "15007169609",
            "email": "tatadonuts@gmailcom"
          },
          {
            "name": "GIOVANNA DAVIN NETO MAXIMO",
            "cpf": "16445699650",
            "email": "ginmaximo2014@gmailcom"
          },
          {
            "name": "BEATRIZ PARREIRAS GONCALVES",
            "cpf": "09909307693",
            "email": "parreirasbeatriz@gmailcom"
          },
          {
            "name": "FERNANDA BOTELHO MOURA",
            "cpf": "12092472674",
            "email": "febotelho0705@gmailcom"
          },
          {
            "name": "YASMIN SILVA VILELA",
            "cpf": "15918372601",
            "email": "yasminnvilela@gmailcom"
          },
          {
            "name": "DANIEL VELOSO SOARES",
            "cpf": "16127106621",
            "email": "danielvs284@gmailcom"
          },
          {
            "name": "BARBARA ARZE ROCHA",
            "cpf": "09793367679",
            "email": "barbaraarzerocha@outlookcom"
          },
          {
            "name": "CECILIA PEREIRA GAZIRE",
            "cpf": "11368486657",
            "email": "cecigazire@gmailcom"
          },
          {
            "name": "JULIA MENDES GROSSI FERREIRA",
            "cpf": "12261843674",
            "email": "jmendesgf@gmailcom"
          },
          {
            "name": "GABRIEL DAVI CAMILO DA HORA E ROCHA",
            "cpf": "10390270679",
            "email": "gabrieldavi@alunounifenasbr"
          },
          {
            "name": "BEATRIZ FERREIRA CARVALHO",
            "cpf": "07211030658",
            "email": "biaferreiracarvalho@hotmailcom"
          },
          {
            "name": "PAULA PAIVA CANABRAVA",
            "cpf": "11103996690",
            "email": "paulapaivacanabrava@gmailcom"
          },
          {
            "name": "SYLVANO NEVES FIORAVANTI NETO",
            "cpf": "01876874635",
            "email": "sylvanoneves@gmailcom"
          },
          {
            "name": "SINDY STHEFANY SOUSA SILVA",
            "cpf": "12812101610",
            "email": "sindysilva@alunounifenasbr"
          },
          {
            "name": "LUMA PEREIRA BRANDAO",
            "cpf": "11518125603",
            "email": "lumabrandao1000@gmailcom"
          },
          {
            "name": "LAURA AMARANTE MELO FARIA",
            "cpf": "01885485646",
            "email": "lauraamarante2004@gmailcom"
          },
          {
            "name": "BRUNO PYRAMO BRAGA DE SOUZA",
            "cpf": "06659278605",
            "email": "brunopyramo1@gmailcom"
          },
          {
            "name": "GABRIELA DOMINGUES GAMA",
            "cpf": "16099210628",
            "email": "gabi@gamadentalcombr"
          },
          {
            "name": "KATHLEN OLIVEIRA MARTINS",
            "cpf": "08661208661",
            "email": "kaatymartins@hotmailcom"
          },
          {
            "name": "CAROLINA RODRIGUES LEAL",
            "cpf": "12907736612",
            "email": "carolinarodriguesleal@hotmailcom"
          },
          {
            "name": "JULIA PALHARES DE ARAUJO GRIEDER",
            "cpf": "11343693608",
            "email": "juliagrieder@gmailcom"
          },
          {
            "name": "LUISA GIMENEZ ZOLINI GALDINO",
            "cpf": "10556777638",
            "email": "luisagimenez345@gmailcom"
          },
          {
            "name": "VIVIANE CRISTINA DOS SANTOS",
            "cpf": "10735663661",
            "email": "vivianecsantos@livecom"
          },
          {
            "name": "NATHALIA GUALBERTO SOUZA E SILVA",
            "cpf": "06987973610",
            "email": "Nathaliasouza914933@sgapucminasbr"
          },
          {
            "name": "MARIANA FERNANDES BUENO DE MELO",
            "cpf": "01859602606",
            "email": "marianafbmelo@gmailcom"
          },
          {
            "name": "ROBERT PINELI LOPES",
            "cpf": "50215474880",
            "email": "roglarob@hotmailcom"
          },
          {
            "name": "GABRIELA EMELLY DE OLIVEIRA ALQUIMIM",
            "cpf": "02205333690",
            "email": "gabrielaalkimim@gmailcom"
          },
          {
            "name": "ISABELA PEDRAS LOBATO",
            "cpf": "11959211609",
            "email": "Isabelapedras@gmailcom"
          },
          {
            "name": "GABRIELA GIORDANA DA SILVA ROSA",
            "cpf": "15608092643",
            "email": "gabisilva8@hotmailcom"
          },
          {
            "name": "MARCELLA FERRARI GOMES",
            "cpf": "15867873650",
            "email": "marcellagomes@alunounifenasbr"
          },
          {
            "name": "PAULA GONCALVES RODRIGUES",
            "cpf": "08710463690",
            "email": "rodriguespaula2305@gmailcom"
          },
          {
            "name": "ISADORA ROCHA SENA",
            "cpf": "13351063679",
            "email": "isadorarocha16@hotmailcom"
          },
          {
            "name": "VITOR QUINELATO CARVALHO",
            "cpf": "12274570655",
            "email": "vitorquinelato@hotmailcom"
          },
          {
            "name": "DEBORA EDUARDA MACHADO DE PAULA",
            "cpf": "09222010647",
            "email": "Debora_machado@outlookcombr"
          },
          {
            "name": "LORRANE DE MOURA MOREIRA",
            "cpf": "14405290601",
            "email": "lorranemoura@icloudcom"
          },
          {
            "name": "JULIA TREVISAN ELOI FARIA",
            "cpf": "10444648607",
            "email": "jutfaria26@icloudcom"
          },
          {
            "name": "LUIZA DO VALLE CORREA PINTO COELHO",
            "cpf": "14661116666",
            "email": "luiza@tratemicombr"
          },
          {
            "name": "MARIA ELISA DA SILVA CAMPOS",
            "cpf": "01834265681",
            "email": "mariaelisascampos@gmailcom"
          },
          {
            "name": "ANA CAROLINA CRUZ NOGUEIRA",
            "cpf": "15057404601",
            "email": "acnc12nogueira@gmailcom"
          },
          {
            "name": "LUISA PEDROSO DINIZ ALVARENGA",
            "cpf": "70230999646",
            "email": "luisaalvarenga2@estudanteuflabr"
          },
          {
            "name": "SOFIA NUNES CASTRO",
            "cpf": "01960994638",
            "email": "sofinunes1973@gmailcom"
          },
          {
            "name": "MARIA FERNANDA BESSA TEIXEIRA",
            "cpf": "14448280616",
            "email": "nandacec@hotmailcom"
          },
          {
            "name": "MARIA LUIZA ANTUNES PEREIRA",
            "cpf": "15598574632",
            "email": "mantunespereira@yahoocombr"
          },
          {
            "name": "IZABELA CAMPOS ROMAO",
            "cpf": "10622590413",
            "email": "izabelacamposromao@gmailcom"
          },
          {
            "name": "RICHARD DANIEL FERREIRA REIS",
            "cpf": "02131098677",
            "email": "richardreismedicina@gmailcom"
          },
          {
            "name": "FERNANDA OLIVEIRA AMADO",
            "cpf": "09367204680",
            "email": "feamado12@hotmailcom"
          },
          {
            "name": "PAULA MEDEIROS LOPES TUNES DA CUNHA",
            "cpf": "07278723620",
            "email": "paulamltc@bolcombr"
          },
          {
            "name": "JULIA ROBERTA SILVA DE FIGUEIREDO",
            "cpf": "13265804690",
            "email": "juliafigue014@gmailcom"
          },
          {
            "name": "MARIA CLARA RODRIGUES DA SILVEIRA",
            "cpf": "15304552601",
            "email": "mariaclararodriguesdasilveira@gmailcom"
          },
          {
            "name": "ISABELLA HARUME RIBEIRO HOJO",
            "cpf": "14282846640",
            "email": "bellaribeirohojo@gmailcom"
          },
          {
            "name": "LIGIA BOGAS PATTO",
            "cpf": "13734055628",
            "email": "ligiapatto@gmailcom"
          },
          {
            "name": "CAROLYNE STEPHANY DE OLIVEIRA GOUVEA",
            "cpf": "14052103629",
            "email": "gouveacarolyne@gmailcom"
          },
          {
            "name": "MARIA CRISTINA DE OLIVEIRA MALTA VAZ",
            "cpf": "10287797635",
            "email": "mariacmalta@livecom"
          },
          {
            "name": "JULIANA REZENDE FERRAZ",
            "cpf": "10272229601",
            "email": "Julianarferraz1245@gmailcom"
          },
          {
            "name": "SAMYRA ELIAS STEPHANI",
            "cpf": "12171196637",
            "email": "samyrastephani@estudanteufjfbr"
          },
          {
            "name": "LUISA MAGALHAES RIBEIRO NEVES",
            "cpf": "10772450684",
            "email": "luisarneves14@gmailcom"
          },
          {
            "name": "ANA LAURA TEIXEIRA DA SILVA",
            "cpf": "12739666608",
            "email": "teixeiranalaura@gmailcom"
          },
          {
            "name": "GIOVANA MIRANDA FERNANDES",
            "cpf": "10484786610",
            "email": "giovanamirandafernandes@gmailcom"
          },
          {
            "name": "LAURA FARIA MACIEL",
            "cpf": "10677632606",
            "email": "maciellauraf@hotmailcom"
          },
          {
            "name": "LUIZ FELIPE GRANDI",
            "cpf": "16467497660",
            "email": "grandiluizfelipe@gmailcom"
          },
          {
            "name": "MARINA CLETO MIARELLI PIEDADE",
            "cpf": "70469031662",
            "email": "marinacletomiarelli@gmailcom"
          },
          {
            "name": "VITORIA SAPUCAIA OLIVEIRA CUNHA",
            "cpf": "14065250650",
            "email": "vitoriacunhamed@gmailcom"
          },
          {
            "name": "BIANKA LUISA OLIVEIRA",
            "cpf": "13505414603",
            "email": "biankaluisaoliveira@gmailcom"
          },
          {
            "name": "ANA TERESA MESQUITA PEDROSA",
            "cpf": "14792041619",
            "email": "anatmpfacul@gmailcom"
          },
          {
            "name": "BARBARA LEAO LANZA DE OLIVEIRA",
            "cpf": "10776678680",
            "email": "babisleao@hotmailcom"
          },
          {
            "name": "BRUNA APARECIDA ANDRADE CHAVES",
            "cpf": "02239600632",
            "email": "brunachvs015@gmailcom"
          },
          {
            "name": "LUISA DUMONT LAMOUNIER",
            "cpf": "14034254696",
            "email": "luisadlamounier@gmailcom"
          },
          {
            "name": "IZABELA AUGUSTA DA SILVA SALEMA",
            "cpf": "14207399640",
            "email": "Izabelasalema9@gmailcom"
          },
          {
            "name": "GABRIELA BAETA BARBOSA LEITE",
            "cpf": "15423914663",
            "email": "gabibaeta25@gmailcom"
          },
          {
            "name": "BEATRIZ HERIGER CHAMON JUNQUEIRA MORAIS",
            "cpf": "14038991695",
            "email": "beaheringer@hotmailcom"
          },
          {
            "name": "VITOR AUGUSTO OSORIO CORREA",
            "cpf": "10059462647",
            "email": "vitoraugustocorrea@yahoocombr"
          },
          {
            "name": "LUCAS DRUMMOND SAVASSI STEHLING",
            "cpf": "15189545610",
            "email": "lucasstehling0541@gmailcom"
          },
          {
            "name": "JULIA GRACIELA DA LUZ",
            "cpf": "15566314643",
            "email": "julia_luz@cienciasmedicasmgedubr"
          },
          {
            "name": "JUSCIANE CORDEIRO BARBOSA",
            "cpf": "13285605626",
            "email": "juscianecordeiro@gmailcom"
          },
          {
            "name": "LEANDRA LAS CASAS MACIEL",
            "cpf": "15562431629",
            "email": "Leandralascasasm@gmailcom"
          },
          {
            "name": "LAURA HELENA BOY PAIVA",
            "cpf": "14396928661",
            "email": "laurahelenabpaiva@gmailcom"
          },
          {
            "name": "MILENA TANURE GOMES",
            "cpf": "70096125608",
            "email": "milenatanuregomes@gmailcom"
          },
          {
            "name": "WASHINGTON VINICIUS SANTOS GONCALVES",
            "cpf": "14577555646",
            "email": "washingtonmed2000@outlookcom"
          },
          {
            "name": "ISADORA QUEIROZ GRACA",
            "cpf": "17905244660",
            "email": "isadoraqgraca64@gmailcom"
          },
          {
            "name": "LUCAS AVELLAR DE ASSIS",
            "cpf": "15629022610",
            "email": "lucasavellarassis@gmailcom"
          },
          {
            "name": "YARA QUINTAO CASTRO",
            "cpf": "12379172633",
            "email": "yaraqcastro@gmailcom"
          },
          {
            "name": "TAUNER JORDANI GUSMAO DO COUTO",
            "cpf": "04911268670",
            "email": "tauergusmao@gmailcom"
          },
          {
            "name": "DEBORA BARBOSA ROCHA RIBAS",
            "cpf": "14298070670",
            "email": "debora_2310101214@cienciasmedicasmgedubr"
          },
          {
            "name": "NADIA MARIA DE OLIVEIRA SANTOS",
            "cpf": "15236825660",
            "email": "lanadia56@gmailcom"
          },
          {
            "name": "ISADORA HARUMI MENEZES OHNO",
            "cpf": "02007722607",
            "email": "isaohno1234@gmailcom"
          },
          {
            "name": "RAFAELA LESSA ANDRADE",
            "cpf": "13883419648",
            "email": "andradelessarafaela@gmailcom"
          },
          {
            "name": "CAMILA DOMINGOS PAES SANTANNA",
            "cpf": "13092551648",
            "email": "camiladpsantanna@gmailcom"
          },
          {
            "name": "TIAGO DA CRUZ MONTEIRO",
            "cpf": "12851794710",
            "email": "tiagocruzmonteiro@gmailcom"
          },
          {
            "name": "BRUNA AGUIAR VALLE",
            "cpf": "11057690627",
            "email": "brunamedpucminas@gmailcom"
          },
          {
            "name": "CRISTINA MOURA OLIVEIRA",
            "cpf": "11389578607",
            "email": "cristinamouracunha@gmailcom"
          },
          {
            "name": "CARLOS MAGNO DA SILVA SANTANA",
            "cpf": "71227390408",
            "email": "Carlossmagnocm@gmailcom"
          },
          {
            "name": "MARIA EDUARDA COTTA COELHO GOMES",
            "cpf": "12341219640",
            "email": "dudacttcoelhoo@gmailcom"
          },
          {
            "name": "CECILIA TEIXEIRA WERNER",
            "cpf": "10648972666",
            "email": "ceciliawerner7@gmailcom"
          },
          {
            "name": "BARBARA MASCARENHAS NASSAR",
            "cpf": "13250928607",
            "email": "barbaramnassar@gmailcom"
          },
          {
            "name": "DANIEL FAJOLI MOREIRA",
            "cpf": "70062883631",
            "email": "danielfajoli@gmailcom"
          },
          {
            "name": "JONATHAN VINICIUS DA SILVA CASARIM",
            "cpf": "12356231650",
            "email": "casarimjonathan@gmailcom"
          },
          {
            "name": "MARIA TERESA SALUM FLORES",
            "cpf": "02228507601",
            "email": "mteresasalum@gmailcom"
          },
          {
            "name": "LUIARA FERREIRA EVANGELISTA",
            "cpf": "11962663604",
            "email": "luiaraferreirae26@hotmailcom"
          },
          {
            "name": "NATALIA GABRIELA VIEIRA DE SOUZA",
            "cpf": "11859224660",
            "email": "vieiragnatalia@gmailcom"
          },
          {
            "name": "CAROLINA MACEDO GUERRA",
            "cpf": "06301750632",
            "email": "carolina_guerra@cienciasmedicasmgedubr"
          },
          {
            "name": "MARIENE ARAUJO VASCONCELOS",
            "cpf": "12434081622",
            "email": "mariene270113@gmailcom"
          },
          {
            "name": "MARIA CLARA MOREIRA DO NASCIMENTO",
            "cpf": "04797109530",
            "email": "mclaramoreiranascimento@gmailcom"
          },
          {
            "name": "FERNANDA TEIXEIRA DE SA",
            "cpf": "02108699686",
            "email": "fernandatdesa@gmailcom"
          },
          {
            "name": "MARIA JULIA SANTANA SANTOS COTTA",
            "cpf": "10817973630",
            "email": "mariajuliascotta@gmailcom"
          },
          {
            "name": "LUCIANA MAURICIO COSTA DE CARVALHO",
            "cpf": "13436243639",
            "email": "lucianamauricio098@gmailcom"
          },
          {
            "name": "LETICIA LEMOS BUENO FONTES",
            "cpf": "16207600614",
            "email": "leticialbfontes@gmailcom"
          },
          {
            "name": "VICTOR GONCALVES SOARES",
            "cpf": "13175539696",
            "email": "victorgsoares1@gmailcom"
          },
          {
            "name": "JESSICA AMANDA LOPES",
            "cpf": "10001446665",
            "email": "jessicalopesamanda123@gmailcom"
          },
          {
            "name": "DARYELLE NIESSA GOMES",
            "cpf": "12321620609",
            "email": "ndaryelle@gmailcom"
          },
          {
            "name": "MARCELLE FERREIRA SANTOS",
            "cpf": "13611362603",
            "email": "Marcelle2002@hotmailcom"
          },
          {
            "name": "GABRIELA COSTA PENA SIQUEIRA",
            "cpf": "09338368645",
            "email": "Penasiqueira@gmailcom"
          },
          {
            "name": "CRISTIANA TOLENTINO FIGUEIREDO COURSIN",
            "cpf": "13030864685",
            "email": "cristianatfc@gmailcom"
          },
          {
            "name": "CAMILA SANTANNA DE OLIVEIRA",
            "cpf": "15194090609",
            "email": "camilasantanna4@gmailcom"
          },
          {
            "name": "LUISA MOREIRA BLANCO",
            "cpf": "15472731780",
            "email": "moreira_luisa@hotmailcom"
          },
          {
            "name": "PAULLINNE ARIEL NOGUEIRA BARBOSA",
            "cpf": "08588918676",
            "email": "paullinneariel@gmailcom"
          },
          {
            "name": "LUISA YARA BAHIA VIANA",
            "cpf": "11707457689",
            "email": "luisayara_03@hotmailcom"
          },
          {
            "name": "CARLA BEATRIZ NOBRE BARBOSA",
            "cpf": "16171687693",
            "email": "carlabeatriizz03@gmailcom"
          },
          {
            "name": "KAIO MENDES ROCHA",
            "cpf": "09987328695",
            "email": "kaiorochamendes@gmailcom"
          },
          {
            "name": "LUIZA DE LIMA PENA",
            "cpf": "02152313682",
            "email": "luizapena28@gmailcom"
          },
          {
            "name": "LIVIA MOREIRA AVELAR",
            "cpf": "70387444610",
            "email": "Livmoreiravelar@gmailcom"
          },
          {
            "name": "GIOVANNA BONINI TOLEDO",
            "cpf": "10327340606",
            "email": "giboninitoledo@gmailcom"
          },
          {
            "name": "SARAH SEGHETTO DA SILVA DUARTE RIBEIRO",
            "cpf": "07454957617",
            "email": "seghettosarah@gmailcom"
          },
          {
            "name": "ANA LUIZA SOARES MENDES",
            "cpf": "01961706644",
            "email": "msoaresanalu@gmailcom"
          },
          {
            "name": "LUISA SILVA SOUZA",
            "cpf": "16168805621",
            "email": "luisaa_souza@icloudcom"
          },
          {
            "name": "RAFAELA SIQUEIRA DINIZ DE CARVALHO",
            "cpf": "01790437652",
            "email": "rafaelasdinizcarvalho@gmailcom"
          },
          {
            "name": "GABRIELLE CRISTINA SANTIAGO BRANDAO",
            "cpf": "13563143684",
            "email": "gabibrandao26@gmailcom"
          },
          {
            "name": "HANA PAULA BRASIL REIS",
            "cpf": "03881691332",
            "email": "hanapaulabr@hotmailcom"
          },
          {
            "name": "AMANDA DE OLIVEIRA NUNES MACHADO",
            "cpf": "08729449642",
            "email": "amandaoliveiram@icloudcom"
          },
          {
            "name": "JOAO PAULO TACIO DA COSTA SANTOS",
            "cpf": "05652601469",
            "email": "Jtacio@hotmailcom"
          },
          {
            "name": "JOAO VICTOR SANTOS DA SILVEIRA",
            "cpf": "01772532665",
            "email": "realzagri@gmailcom"
          },
          {
            "name": "MAISA MARIA SOARES BARBOSA",
            "cpf": "01362037443",
            "email": "maisamsoaresb@gmailcom"
          },
          {
            "name": "ISABELLA FURTADO",
            "cpf": "02447938160",
            "email": "ipfurtado100@gmailcom"
          },
          {
            "name": "MARIANE FORTUNATO MENDES",
            "cpf": "12784609693",
            "email": "marianefmendes1@hotmailcom"
          },
          {
            "name": "CARLOS EDUARDO ROCHA ALVES",
            "cpf": "10507130600",
            "email": "cadumf25a@gmailcom"
          },
          {
            "name": "ANA ALICE REIS PORTES",
            "cpf": "12604530651",
            "email": "anaalicereisportes@gmailcom"
          },
          {
            "name": "ANA SOFIA VERSIANI DE OLIVEIRA MOTA",
            "cpf": "16335977680",
            "email": "asversiani48@gmailcom"
          },
          {
            "name": "RAFAEL LUIS MOREIRA DOMINGOS",
            "cpf": "00483661295",
            "email": "moreirafael4@gmailcom"
          },
          {
            "name": "DOUGLAS GARCIA RIBEIRO",
            "cpf": "11958196681",
            "email": "dodogarciar@gmailcom"
          },
          {
            "name": "LUCAS CERQUEIRA MENDES TOLENTINO",
            "cpf": "10907252648",
            "email": "lucascmtolentino@gmailcom"
          },
          {
            "name": "ANNA LUIZA BATISTA KOPITTKE",
            "cpf": "14893693689",
            "email": "anna2012kopittke@gmailcom"
          }
        ]
      }
    ],
    travelAgency: {
      active: true,
      title: 'Agência Oficial',
      description: [
        'Clique na logo para conferir passeios e hospedagens.'
      ],
      logo: {
        name: 'GVB Travel',
        get alt() {
          return `Logo da ${this.name}`
        },
        link: '/pdf/gvb-travel-jmr2025.pdf',
        src: '/logo/gvb-travel.png',
        width: 200,
        height: 143
      }
    }
  },
}