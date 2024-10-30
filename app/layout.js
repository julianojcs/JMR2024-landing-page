import localFont from "next/font/local";
import "./globals.css";
import Header from './components/Header'
import Footer from './components/Footer'
import RT from './components/RT'
import SocialMedias from './components/SocialMedias'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export const metadata = {
  title:
    'X Jornada Mineira de Radiologia e a I Jornada de POCUS ABRAMEDE/MG e SRMG',
  description:
    'A X Jornada Mineira de Radiologia e Diagnóstico por Imagem (JMR) e a I Jornada de POCUS ABRAMEDE/MG e SRMG acontecerão nos dias 1º e 2 de novembro de 2024, na Associação Médica de Minas Gerais, em Belo Horizonte. O encontro vai reunir profissionais renomados, especialistas e estudantes para discutir as mais recentes inovações e técnicas em radiologia e ultrassonografia, com foco no aprimoramento de práticas clínicas ligadas ao abdômen, radiologia musculoesquelética e intervenção guiada por imagem. Durante os dias de evento, os participantes terão a oportunidade de assistir a palestras, workshops e mesas-redondas, abordando temas relevantes e atuais que impactam diretamente o dia a dia dos profissionais da saúde. Além disso, a JMR 2024 será uma excelente oportunidade para networking, permitindo a troca de experiências entre colegas e o fortalecimento das conexões profissionais. O evento é promovido pela Sociedade de Radiologia e Diagnóstico por Imagem de Minas Gerais (SRMG) e pela Associação Brasileira de Medicina de Emergência (Abramede) - MG.',
  keywords:
    'Jornada Mineira de Radiologia, Jornada de POCUS, ABRAMEDE, SRMG, Radiologia, Diagnóstico por Imagem, Ultrassonografia, Abdômen, Musculoesquelética, Intervenção Guiada por Imagem, Palestras, Workshops, Mesas-redondas, Networking, Evento, Saúde, Profissionais da Saúde, Belo Horizonte, JMR2024, Abdômen, POCUS, Gastrointestinal, Geniturinario, Mama, MSK, BI-RADS, Intervenção Mamária, Intervenção não Vascular, Hands on, Inovação IA, Inteligêcia Artificial, IA, AI, Programação Científica, Comissão Científica SRMG, Comissão Científica ABRAMEDE, Augusto Antunes, Benito Pio Ceccato Júnior, Elísio José Salgado Ribeiro, Flávio Coelho Barros, Francisco Ribeiro Teixeira Junior, Júlio Guerra Domingues, Luis Ronan MF de Souza, Marcus Vinicius Amorim, Rogerio Augusto Pinto Silva, Thales Matheus M Santos, Adriene Moraes Campos, Anna Christina Gruber, Ivie Braga de Paula, Luciana Costa Silva, Maria Fernanda Borges Abreu, Paula Figueiredo Rocha, Raquel Del Fraro Rabelo, Raquel Sadala Mendes, Arthur Elias de Aguiar Machado, Luiz Ernani Meira Júnior, Marcus Vinicius Melo Andrade, Maria Aparecida Braga, Hermes Pardini, Grupo Fleury, Bayer, Unimed, Unimed BH, São MArcos Dasa, Bracco, Ceu Diagnósticos, CBR, AMMG, Core, Juliano Costa Silva, Juliano Costa, apfjuliano'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description} />
        <meta name='keywords' content={metadata.keywords} />
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='robots' content='index, follow' />
        <meta name='author' content='APF Juliano' />

        {/* Open Graph para redes sociais */}
        <meta
          property='og:title'
          content='JMR 2024 - Jornada Mineira de Radiologia'
        />
        <meta
          property='og:description'
          content='Junte-se à Jornada Mineira de Radiologia 2024 e descubra as inovações na área de diagnóstico por imagem.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://jornada.srmg.com.br/2024' />
        <meta
          property='og:image'
          content='https://jornada.srmg.com.br/jmr2024.jpg'
        />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />

        {/* Twitter Cards */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='JMR 2024 - Jornada Mineira de Radiologia'
        />
        <meta
          name='twitter:description'
          content='Participe da Jornada Mineira de Radiologia 2024 e fique por dentro das últimas inovações em diagnóstico por imagem.'
        />
        <meta
          name='twitter:image'
          content='https://jornada.srmg.com.br/jmr2024.jpg'
        />

        {/* Link canônico */}
        <link rel='canonical' href='https://jornada.srmg.com.br'></link>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`} style={{maxWidth: '1300px', marginInline: 'auto', backgroundColor: 'var(--foreground)'}}>
        <div  style={{backgroundColor: 'var(--background)'}}>
          <RT />
          <Header>
            <SocialMedias />
          </Header>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
