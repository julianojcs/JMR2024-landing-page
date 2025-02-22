// Codigo para incluir no calendário início do evento no dia 01 as 08:30 e fim no dia 02 as 18:00
// const startDate = '20241101T083000-0300'; // Data de início no formato GMT -3
// const endDate = '20241102T180000-0300'; // Data de término no formato GMT -3
// const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&dates=${startDate}/${endDate}&details=${eventDetails}&location=${eventLocation}`;

// Codigo para incluir no calendário início do evento no dia 01 das 08:30 as 18:00, se repetindo no dia 02 das 08:30 as 18:00
export const eventData =
{
  2000: {
    title: 'X Jornada Mineira de Radiologia & I Jornada Mineira de POCUS ABRAMEDE/MG e SRMG | 01 e 02 de Novembro de 2024',
    description: 'A X Jornada Mineira de Radiologia e Diagnóstico por Imagem (JMR) e a I Jornada de POCUS ABRAMEDE/MG e SRMG acontecerão nos dias 1º e 2 de novembro de 2024, na Associação Médica de Minas Gerais, em Belo Horizonte. O encontro vai reunir profissionais renomados, especialistas e estudantes para discutir as mais recentes inovações e técnicas em radiologia e ultrassonografia, com foco no aprimoramento de práticas clínicas ligadas ao abdômen,  radiologia musculoesquelética e intervenção guiada por imagem. Durante os dias de evento, os participantes terão a oportunidade de assistir a palestras, workshops e mesas-redondas, abordando temas relevantes e atuais que impactam diretamente o dia a dia dos profissionais da saúde. Além disso, a JMR 2024 será uma excelente oportunidade para networking, permitindo a troca de experiências entre colegas e o fortalecimento das conexões profissionais. O evento é promovido pela Sociedade de Radiologia e Diagnóstico por Imagem de Minas Gerais (SRMG) e pela Associação Brasileira de Medicina de Emergência (Abramede) - MG.',
    ogTitle: 'JMR 2024 - Jornada Mineira de Radiologia',
    ogDescription: 'Junte-se à Jornada Mineira de Radiologia 2024 e descubra as inovações na área de diagnóstico por imagem.',
    bannerText: ['Vem aí a XI Jornada Mineira de Radiologia e a', 'II Jornada de POCUS ABRAMEDE/MG e SRMG'],
    promoters: [
      {
        name: 'Sociedade de Radiologia e Diagnóstico por Imagem de Minas Gerais (SRMG)',
        shortName: 'SRMG',
        link: 'https://www.srmg.com.br',
        alt: 'Logo da SRMG',
        src: '/logo/srmg.png'
      },
      {
        name: 'Associação Brasileira de Medicina de Emergência (ABRAMED/MG)',
        shortName: 'ABRAMEDE/MG',
        link: 'https://www.abramedemg.org.br/',
        alt: 'Logo da ABRAMEDE/MG',
        src: '/logo/abramed-mg.png'
      },
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
        return `${this.name} - ${this.street}, ${this.StreetNumber} - ${this.neighborhood}, ${this.city} - ${this.state}, ${this.zipCode}`;
      }
    },
    social: {
      instagram: 'https://www.instagram.com/sociedaderadiologiamg',
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
      title: 'Formulário de inscrição de palestrantes / convidados da  XI JORNADA MINEIRA DE RADIOLOGIA | JMR 2025',
      rota: '/form/speakers',
    },
  },
  2024: {
    title: 'X Jornada Mineira de Radiologia & I Jornada Mineira de POCUS ABRAMEDE/MG e SRMG | 01 e 02 de Novembro de 2024',
    description: 'A X Jornada Mineira de Radiologia e Diagnóstico por Imagem (JMR) e a I Jornada de POCUS ABRAMEDE/MG e SRMG acontecerão nos dias 1º e 2 de novembro de 2024, na Associação Médica de Minas Gerais, em Belo Horizonte. O encontro vai reunir profissionais renomados, especialistas e estudantes para discutir as mais recentes inovações e técnicas em radiologia e ultrassonografia, com foco no aprimoramento de práticas clínicas ligadas ao abdômen,  radiologia musculoesquelética e intervenção guiada por imagem. Durante os dias de evento, os participantes terão a oportunidade de assistir a palestras, workshops e mesas-redondas, abordando temas relevantes e atuais que impactam diretamente o dia a dia dos profissionais da saúde. Além disso, a JMR 2024 será uma excelente oportunidade para networking, permitindo a troca de experiências entre colegas e o fortalecimento das conexões profissionais. O evento é promovido pela Sociedade de Radiologia e Diagnóstico por Imagem de Minas Gerais (SRMG) e pela Associação Brasileira de Medicina de Emergência (Abramede) - MG.',
    ogTitle: 'JMR 2024 - Jornada Mineira de Radiologia',
    ogDescription: 'Junte-se à Jornada Mineira de Radiologia 2024 e descubra as inovações na área de diagnóstico por imagem.',
    bannerText: ['Vem aí a XI Jornada Mineira de Radiologia e a', 'II Jornada de POCUS ABRAMEDE/MG e SRMG'],
    promoters: [
      {
        name: 'Sociedade de Radiologia e Diagnóstico por Imagem de Minas Gerais (SRMG)',
        shortName: 'SRMG',
        link: 'https://www.srmg.com.br',
        alt: 'Logo da SRMG',
        src: '/logo/srmg.png'
      },
      {
        name: 'Associação Brasileira de Medicina de Emergência (ABRAMED/MG)',
        shortName: 'ABRAMEDE/MG',
        link: 'https://www.abramedemg.org.br/',
        alt: 'Logo da ABRAMEDE/MG',
        src: '/logo/abramed-mg.png'
      },
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
        return `${this.name} - ${this.street}, ${this.StreetNumber} - ${this.neighborhood}, ${this.city} - ${this.state}, ${this.zipCode}`;
      }
    },
    social: {
      instagram: 'https://www.instagram.com/sociedaderadiologiamg',
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
      title: 'Formulário de inscrição de palestrantes / convidados da  XI JORNADA MINEIRA DE RADIOLOGIA | JMR 2024',
      rota: '/form/speakers',
    },
  },
  2025: {
    title: 'JMR 2025 & CIM 2025 – Inovação e excelência no diagnóstico por imagem | 27 e 28 de Junho de 2025',
    description: 'Nos dias 27 e 28 de junho de 2025, Belo Horizonte será palco de dois grandes eventos científicos: a Jornada Mineira de Radiologia 2025 (JMR), organizada pela SRMG, e o Congresso de Imagem da Mulher 2025 (CIM), realizado em parceria com a SOGIMIG. A JMR 2025 reunirá especialistas de diversas áreas da radiologia para discutir os avanços mais recentes em imagem abdominal, musculoesquelética, neurorradiologia, radiologia torácica, intervenção guiada por imagem e muito mais. Já o CIM 2025 trará um olhar aprofundado sobre a imagem da mulher, abordando inovações tecnológicas e diagnósticas. Com uma programação dinâmica de palestras, workshops e mesas-redondas, o evento será uma oportunidade única de aprendizado, atualização e networking. Garanta sua participação e esteja na vanguarda da radiologia! Nos vemos em junho de 2025! ',
    ogTitle: 'JMR 2025 - Jornada Mineira de Radiologia',
    ogDescription: 'Junte-se à Jornada Mineira de Radiologia 2025 e descubra as inovações na área de diagnóstico por imagem.',
    bannerText: ['Vem aí a XI Jornada Mineira de Radiologia e 0', 'XIV Congresso de Imunologia da Mulher'],
    promoters: [
      {
        name: 'Sociedade de Radiologia e Diagnóstico por Imagem de Minas Gerais (SRMG)',
        shortName: 'SRMG',
        link: 'https://www.srmg.com.br',
        alt: 'Logo da SRMG',
        src: '/logo/srmg.png'
      },
      {
        name: 'Associação de Ginecologistas e Obstetras de Minas Gerais (SOGIMIG)',
        shortName: 'SOGIMIG',
        link: 'https://sogimig.org.br/',
        alt: 'Logo da SOGIMIG',
        src: '/logo/sogimig.png'
      },
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
        return `${this.name} - ${this.street}, ${this.StreetNumber} - ${this.neighborhood}, ${this.city} - ${this.state}, ${this.zipCode}`;
      }
    },
    social: {
      instagram: 'https://www.instagram.com/sociedaderadiologiamg',
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
      title: 'Formulário de inscrição de palestrantes / convidados da  XI JORNADA MINEIRA DE RADIOLOGIA | JMR 2025',
      rota: '/form/speakers',
    },
  },
  2026: {
    title: 'JMR 2025 & CIM 2025 – Inovação e excelência no diagnóstico por imagem | 27 e 28 de Junho de 2025',
    description: 'Nos dias 27 e 28 de junho de 2025, Belo Horizonte será palco de dois grandes eventos científicos: a Jornada Mineira de Radiologia 2025 (JMR), organizada pela SRMG, e o Congresso de Imagem da Mulher 2025 (CIM), realizado em parceria com a SOGIMIG. A JMR 2025 reunirá especialistas de diversas áreas da radiologia para discutir os avanços mais recentes em imagem abdominal, musculoesquelética, neurorradiologia, radiologia torácica, intervenção guiada por imagem e muito mais. Já o CIM 2025 trará um olhar aprofundado sobre a imagem da mulher, abordando inovações tecnológicas e diagnósticas. Com uma programação dinâmica de palestras, workshops e mesas-redondas, o evento será uma oportunidade única de aprendizado, atualização e networking. Garanta sua participação e esteja na vanguarda da radiologia! Nos vemos em junho de 2025! ',
    ogTitle: 'JMR 2025 - Jornada Mineira de Radiologia',
    ogDescription: 'Junte-se à Jornada Mineira de Radiologia 2025 e descubra as inovações na área de diagnóstico por imagem.',
    bannerText: ['Vem aí a XI Jornada Mineira de Radiologia e 0', 'XIV Congresso de Imunologia da Mulher'],
    promoters: [
      {
        name: 'Sociedade de Radiologia e Diagnóstico por Imagem de Minas Gerais (SRMG)',
        shortName: 'SRMG',
        link: 'https://www.srmg.com.br',
        alt: 'Logo da SRMG',
        src: '/logo/srmg.png'
      },
      {
        name: 'Associação de Ginecologistas e Obstetras de Minas Gerais (SOGIMIG)',
        shortName: 'SOGIMIG',
        link: 'https://sogimig.org.br/',
        alt: 'Logo da SOGIMIG',
        src: '/logo/sogimig.png'
      },
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
        return `${this.name} - ${this.street}, ${this.StreetNumber} - ${this.neighborhood}, ${this.city} - ${this.state}, ${this.zipCode}`;
      }
    },
    social: {
      instagram: 'https://www.instagram.com/sociedaderadiologiamg',
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
      title: 'Formulário de inscrição de palestrantes / convidados da  XI JORNADA MINEIRA DE RADIOLOGIA | JMR 2026',
      rota: '/form/speakers',
    },
  },
}