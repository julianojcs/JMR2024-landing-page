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
            { bestBefore: '20/05/2025', value: 'R$ 98' },
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
              { bestBefore: '20/05/2025', value: 'R$ 355' },
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
              { bestBefore: '20/05/2025', value: 'R$ 80' },
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
              { bestBefore: '20/05/2025', value: 'R$ 98' },
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
              { bestBefore: '20/05/2025', value: 'R$ 266,25' },
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
              { bestBefore: '20/05/2025', value: 'R$ 735' },
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
              { bestBefore: '20/05/2025', value: 'R$ 165' },
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
              { bestBefore: '20/05/2025', value: 'R$ 98' },
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
              { bestBefore: '20/05/2025', value: 'R$ 551,25' },
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
              { bestBefore: '20/05/2025', value: 'R$ 199' },
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
              { bestBefore: '20/05/2025', value: 'R$ 70' },
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
              { bestBefore: '20/05/2025', value: 'R$ 98' },
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
              { bestBefore: '20/05/2025', value: 'R$ 87' },
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
              { bestBefore: '20/05/2025', value: 'R$ 98' },
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
              { bestBefore: '20/05/2025', value: 'R$ 197' },
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
              { bestBefore: '20/05/2025', value: 'R$ 98' },
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
              { bestBefore: '20/05/2025', value: 'R$ 88' },
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
              { bestBefore: '20/05/2025', value: 'R$ 98' },
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
              { bestBefore: '20/05/2025', value: 'R$ 98' },
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
            date: ['30042025', '20052025', '25062025', '28062025']
          },
          callToAct: {
            caption: 'Clique aqui para fazer sua inscrição!',
          },
          table: {
            headers: [
              { desktop: 'Categorias', mobile: 'Categ.' },
              { desktop: 'Vagas', mobile: 'Vagas' },
              { desktop: ['Desconto', 'até 30/04 '], mobile: 'Até 30/04 ' },
              { desktop: ['Desconto', 'até 20/05'], mobile: 'Até 20/05' },
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
            date: ['30042025', '20052025', '25062025', '28062025']
          },
          callToAct: {
            caption: 'Clique aqui para fazer sua inscrição!',
          },
          table: {
            headers: [
              { desktop: 'Categorias', mobile: 'Categ.' },
              { desktop: ['Desconto', 'até 30/04 '], mobile: 'Até 30/04 ' },
              { desktop: ['Desconto', 'até 20/05'], mobile: 'Até 20/05' },
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
            date: ['30042025', '20052025', '25062025', '28062025']
          },
          callToAct: {
            caption: 'Clique aqui para fazer sua inscrição!',
          },
          table: {
            headers: [
              { desktop: 'Categorias', mobile: 'Categ.' },
              { desktop: ['Desconto', 'até 30/04 '], mobile: 'Até 30/04 ' },
              { desktop: ['Desconto', 'até 20/05'], mobile: 'Até 20/05' },
              { desktop: ['Desconto', 'até 25/06'], mobile: 'Até 25/06' },
              { desktop: 'No Local', mobile: 'No Local' }
            ],
            rows: [
              { cells: ['Aberto ao Público', { validar: false, comprovante: false }, 'R$ 88', 'R$ 98', 'R$ 118', 'R$ 148'] }
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
            "email": "rogeriotmelo@yahoo.com.br.edit"
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
            { bestBefore: '20/05/2025', value: 'R$ 98' },
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
              { bestBefore: '20/05/2025', value: 'R$ 355' },
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
              { bestBefore: '20/05/2025', value: 'R$ 80' },
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
              { bestBefore: '20/05/2025', value: 'R$ 98' },
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
              { bestBefore: '20/05/2025', value: 'R$ 266,25' },
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
              { bestBefore: '20/05/2025', value: 'R$ 735' },
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
              { bestBefore: '20/05/2025', value: 'R$ 165' },
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
              { bestBefore: '20/05/2025', value: 'R$ 98' },
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
              { bestBefore: '20/05/2025', value: 'R$ 551,25' },
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
              { bestBefore: '20/05/2025', value: 'R$ 199' },
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
              { bestBefore: '20/05/2025', value: 'R$ 70' },
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
              { bestBefore: '20/05/2025', value: 'R$ 98' },
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
              { bestBefore: '20/05/2025', value: 'R$ 87' },
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
              { bestBefore: '20/05/2025', value: 'R$ 98' },
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
              { bestBefore: '20/05/2025', value: 'R$ 197' },
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
              { bestBefore: '20/05/2025', value: 'R$ 98' },
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
              { bestBefore: '20/05/2025', value: 'R$ 88' },
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
              { bestBefore: '20/05/2025', value: 'R$ 98' },
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
              { bestBefore: '20/05/2025', value: 'R$ 98' },
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
            date: ['30042025', '20052025', '25062025', '28062025']
          },
          callToAct: {
            caption: 'Clique aqui para fazer sua inscrição!',
          },
          table: {
            headers: [
              { desktop: 'Categorias', mobile: 'Categ.' },
              { desktop: 'Vagas', mobile: 'Vagas' },
              { desktop: ['Desconto', 'até 30/04 '], mobile: 'Até 30/04 ' },
              { desktop: ['Desconto', 'até 20/05'], mobile: 'Até 20/05' },
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
            date: ['30042025', '20052025', '25062025', '28062025']
          },
          callToAct: {
            caption: 'Clique aqui para fazer sua inscrição!',
          },
          table: {
            headers: [
              { desktop: 'Categorias', mobile: 'Categ.' },
              { desktop: ['Desconto', 'até 30/04 '], mobile: 'Até 30/04 ' },
              { desktop: ['Desconto', 'até 20/05'], mobile: 'Até 20/05' },
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
            date: ['30042025', '20052025', '25062025', '28062025']
          },
          callToAct: {
            caption: 'Clique aqui para fazer sua inscrição!',
          },
          table: {
            headers: [
              { desktop: 'Categorias', mobile: 'Categ.' },
              { desktop: ['Desconto', 'até 30/04 '], mobile: 'Até 30/04 ' },
              { desktop: ['Desconto', 'até 20/05'], mobile: 'Até 20/05' },
              { desktop: ['Desconto', 'até 25/06'], mobile: 'Até 25/06' },
              { desktop: 'No Local', mobile: 'No Local' }
            ],
            rows: [
              { cells: ['Aberto ao Público', { validar: false, comprovante: false }, 'R$ 88', 'R$ 98', 'R$ 118', 'R$ 148'] }
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
            "email": "rogeriotmelo@yahoo.com.br.edit"
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