export const users = [
  {
    _id: '68490241a840c5a1b6056732',
    name: 'Juliano Costa Silva',
    email: 'apfjuliano@gmail.com',
    cpf: '031.025.466-33',
    image: '/user.png',
    password: 'password123', // Use a secure password in production
    emailVerified: true,
    role: 'user', // 'user' or 'admin'
    isActive: true,
    createdAt: new Date('2024-01-01T00:00:00Z'),
    updatedAt: new Date('2024-01-01T00:00:00Z'),
    accounts: [],
    sessions: [],
    certificates: [
      {
        code: 'JUL6633JMRCON',
        type: 'CONGRESSISTA',
        participationType: 'presencial',
        createdAt: new Date('2024-01-01T00:00:00Z')
      }
    ],
    passwordResets: [],
  },
  {
    _id: '68490241a840c5a1b6056733',
    name: 'Maria Silva Santos',
    email: 'maria.santos@email.com',
    cpf: '123.456.789-01',
    image: '/user.png',
    password: 'password123',
    emailVerified: true,
    role: 'user',
    isActive: true,
    createdAt: new Date('2024-01-02T00:00:00Z'),
    updatedAt: new Date('2024-01-02T00:00:00Z'),
    accounts: [],
    sessions: [],
    certificates: [
      {
        code: 'MAR9001JMRPAL',
        type: 'PALESTRANTE',
        lectureTitle: 'Inovações em Radiologia Mamária',
        lectureIds: ['lecture1', 'lecture2'],
        createdAt: new Date('2024-01-02T00:00:00Z')
      }
    ],
    passwordResets: [],
  },
  {
    _id: '68490241a840c5a1b6056734',
    name: 'João Pedro Oliveira',
    email: 'joao.oliveira@email.com',
    cpf: '987.654.321-00',
    image: '/user.png',
    password: 'password123',
    emailVerified: true,
    role: 'user',
    isActive: true,
    createdAt: new Date('2024-01-03T00:00:00Z'),
    updatedAt: new Date('2024-01-03T00:00:00Z'),
    accounts: [],
    sessions: [],
    certificates: [
      {
        code: 'JOA1000JMRDEB',
        type: 'DEBATEDOR',
        debateTitle: 'Mesa Redonda: Futuro da Radiologia',
        debateDate: '28 de junho de 2025',
        createdAt: new Date('2024-01-03T00:00:00Z')
      }
    ],
    passwordResets: [],
  },
  {
    _id: '68490241a840c5a1b6056735',
    name: 'Ana Carolina Ferreira',
    email: 'ana.ferreira@email.com',
    cpf: '456.789.123-45',
    image: '/user.png',
    password: 'password123',
    emailVerified: true,
    role: 'user',
    isActive: true,
    createdAt: new Date('2024-01-04T00:00:00Z'),
    updatedAt: new Date('2024-01-04T00:00:00Z'),
    accounts: [],
    sessions: [],
    certificates: [
      {
        code: 'ANA3145JMRMOD',
        type: 'MODERADOR',
        moderationTitle: 'Sessão de Casos Clínicos',
        moderationDate: '27 de junho de 2025',
        createdAt: new Date('2024-01-04T00:00:00Z')
      }
    ],
    passwordResets: [],
  },
  {
    _id: '68490241a840c5a1b6056736',
    name: 'Roberto Carlos Lima',
    email: 'roberto.lima@email.com',
    cpf: '321.654.987-12',
    image: '/user.png',
    password: 'password123',
    emailVerified: true,
    role: 'user',
    isActive: true,
    createdAt: new Date('2024-01-05T00:00:00Z'),
    updatedAt: new Date('2024-01-05T00:00:00Z'),
    accounts: [],
    sessions: [],
    certificates: [
      {
        code: 'ROB7912JMRATR',
        type: 'APRESENTACAO_TRABALHO',
        workTitle: 'Análise Comparativa de Técnicas de RM em Patologias Mamárias',
        workAuthors: ['Roberto Carlos Lima', 'Dra. Maria Silva'],
        presentationDate: '27 de junho de 2025',
        sessionName: 'Sessão de Trabalhos Científicos I',
        createdAt: new Date('2024-01-05T00:00:00Z')
      }
    ],
    passwordResets: [],
  },
  {
    _id: '68490241a840c5a1b6056737',
    name: 'Fernanda Costa Rodrigues',
    email: 'fernanda.rodrigues@email.com',
    cpf: '159.753.486-28',
    image: '/user.png',
    password: 'password123',
    emailVerified: true,
    role: 'user',
    isActive: true,
    createdAt: new Date('2024-01-06T00:00:00Z'),
    updatedAt: new Date('2024-01-06T00:00:00Z'),
    accounts: [],
    sessions: [],
    certificates: [
      {
        code: 'FER6628JMRPRE',
        type: 'TRABALHO_PREMIADO',
        workTitle: 'IA na Detecção Precoce de Câncer de Mama',
        awardName: 'Melhor Trabalho Científico',
        awardCategory: 'Inovação Tecnológica',
        awardPosition: '1º lugar',
        awardDate: '28 de junho de 2025',
        createdAt: new Date('2024-01-06T00:00:00Z')
      }
    ],
    passwordResets: [],
  }
]

export const event = [{
  _id: '6844b06292642fb12c3667b5',
  shortName: 'JMR&CIM2025',
  name: ['XI Jornada Mineira de Radiologia (JMR2025)', 'XIV Congresso de Imaginologia da Mulher (CIM2025)'],
  date: '27 e 28 de Junho de 2025',
  place: 'Centro de Convenções da Associação Médica de Minas Gerais (AMMG), em Belo Horizonte/MG, Brasil',
  workload: '20 horas',
  localAndDate: 'Belo Horizonte/MG, 28 de junho de 2025',
  backgroundImage: '/certificate.png'
}]

export const lectures = [
  'A carreira da radiologia',
  'A mama e a tomografia',
  'Abertura',
  'Ablação de Linfonodos Cervicais',
  'Ablação por Radiofrequência de Nódulos Tireoidianos',
  'Abordagem cirúrgica da metástase hepática do ca colorretal',
  'Abordagem endoscópica de lesões pancreáticas',
  'Abordagens minimamente invasivas de lesões hepáticas focais',
  'Achados radiológicos nos casos de hematoespermia e obstrução do trato seminal',
  'Acidente Vascular Cerebral: Do Diagnóstico à Terapia Endovascular',
  'Aconselhamento dos casais frente ao diagnóstico das cardiopatias fetais canais dependentes ou não',
  'Amenorreia Primária em Adolescentes: Papel da Ultrassonografia',
  'Anatomia radiológica abdominal',
  'Anatomia radiológica torácica',
  'Anomalias mullerianas: nova classificação',
  'Anormalidades Intersticiais Pulmonares - ILA: como eu laudo',
  'Aplicações na Radiologia',
  'Armadilhas da Ecocardiografia - point of care no choque obstrutivo',
  'Aspectos desafiadores da Radiologia do Câncer de Cabeça e Pescoço',
  'Aspectos desafiadores na radiologia de CCP: Câncer de laringe:T3 ou T4',
  'Aspectos desafiadores na radiologia de CCP: Desafios na Avaliação Pós-Tratamento: Cicatriz, Recidiva ou Doença Persistente?',
  'Assimetria e distorção arquitetural na era da tomossíntese',
  'Atrofia Cerebral na Doença de Alzheimer: Escalas visuais e volumetria automatizada na prática clínica',
  'Atualização do glossário de termos em imagem torácica da Sociedade Fleischner 2024',
  'Avaliação da Permeabilidade Tubária HyCoSy',
  'Avaliação das tubas uterinas e das anomalias mullerianas: A visão do fertileuta: o que não pode faltar no laudo',
  'Avaliação das tubas uterinas e das anomalias mullerianas: HisteroRM',
  'Avaliação das tubas uterinas e das anomalias mullerianas: Histerossalpingografia e histerossonosalpingografia (HyCosy)',
  'Avaliação das tubas uterinas e das anomalias mullerianas: Mesa redonda e discussão',
  'Avaliação dos Ovários e Contagem de Folículos Antrais - Papel da Ultrassonografia Tridimensional',
  'Avaliação pre-cirurgica de lesões hepáticas e pré-transplante: o que relatar?',
  'Avaliação pós-tratamento da neoplasia pulmonar - como eu laudo',
  'Avanço profissional e das legislações',
  'Base do estudo do coração fetal para o ultrassonografista geral',
  'Bases da imunologia do carcinoma de mama',
  'Biomarcadores de Imagem na Demência Frontotemporal e Outras Demências Atípicas',
  'Biopsias Transbiliar/Endobiliar',
  'Bloco 1 - Próstata e Bexiga',
  'Board Multidisciplinar: Casos clínicos desafiadores',
  'CDIS',
  'Ca de colon: achados de imagem definidores de tratamento',
  'Ca de reto: achados de imagem definidores de tratamento',
  'Cabeça e Pescoço',
  'Caso clínico - discussão multidisciplinar',
  'Comissão Científica',
  'Como avaliar doencas hepaticas difusas (esteatose, ferro, fibrose)',
  'Câncer de colo uterino: clínica e achados clássicos',
  'Câncer de endométrio: clínica e achados clássicos',
  'Câncer de ovário: clínica e achados clássicos',
  'Câncer de vesicula biliar'
];

export const certificates = [
  { // Certificado de congressista
    _id: '68490241a840c5a1b6056733',
    event: event[0],
    userType: 'congressista',
    name: 'Juliano Costa Silva',
    cpf: '03102546633',
    email: 'apfjuliano@gmail.com'
  },
  { // Certificado de palestrante
    _id: '68490241a840c5a1b6056734',
    event: event[0],
    userType: 'Palestrante',
    name: 'Alberto Borges Peixoto',
    cpf: '12345678901',
    email: 'alberto.peixoto@gmail.com',
    hall: 'US Obstetrícia',
    lecture: lectures[10]
  },
  { // Certificado de moderador
    _id: '68490241a840c5a1b6056735',
    event: event[0],
    userType: 'Moderador',
    name: 'Carlos Alberto Souza',
    cpf: '98765432100',
    email: 'carlos.alberto@gmail.com',
    hall: 'Geniturinário',
    lecture: lectures[5]
  },
  { // Certificado de debatedor
    _id: '68490241a840c5a1b6056736',
    event: event[0],
    userType: 'Debatedor',
    name: 'Fernanda Lima',
    cpf: '12345678901',
    email: 'fernanda.l@hotmail.com',
    hall: 'Neurorradiologia',
    lecture: lectures[7] // 'Abordagem cirúrgica da metástase hepática do ca colorretal'
  },
  { // Certificado de apresentação de trabalho
    _id: '68490241a840c5a1b6056737',
    event: event[0],
    userType: 'Apresentação de Trabalho',
    name: 'Roberto Pereira',
    cpf: '12345678901',
    email: 'r.pereira@dell.com',
    authors: [
       'Alair Junio Rocha Arantes', 'Pedro Paulo Nunes Pereira', 'Thyago Oliveira de Queiroz', 'Letícia Duque Sousa Drumond', 'Davi Teixeira Urzêdo Queiroz', 'Jéssica Resende Vaz de Melo'
    ],
    title: 'Doença associada a anticorpos contra a glicoproteína oligodendrocítica da mielina (MOGAD): Relato de Caso',
    format: 'Pôster'
  },
  { // Certificado de trabalho premiado
    _id: '68490241a840c5a1b6056738',
    event: event[0],
    userType: 'Trabalho Premiado',
    name: 'Ana Clara Martins',
    cpf: '12345678901',
    email: 'clara.acm@gmail.,com',
    authors: [
      "Marcela Pires Lazzarini Araujo",
      "Izabella Torres de Melo",
      "Maria Aparecida Taynara de Abreu Furquim",
      "Janina Mara de Freitas Avelar",
      "Patrícia Cristina Silva Lima Fernandes",
      "Ana Rachel Albuquerque de Moura Leite"
    ],
    title: 'Como selecionar as mulheres de alto risco para câncer de mama durante o rastreamento mamográfico e análise da performance do rastreamento personalizado baseado em estratificação de risco',
    format: 'Apresentação Oral/Tema Livre'
  },
]
