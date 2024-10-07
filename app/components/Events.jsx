import Card from './Card'
import {
  container,
  columnTitle,
  column,
  columnCards,
  firstRow,
  secondRow,
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9
} from './Events.module.css'
import ia from '../../assets/images/cards/ia.png'
import gastrointestinal from '../../assets/images/cards/gastrointestinal.png'
import geniturinario from '../../assets/images/cards/geniturinario.png'
import mama from '../../assets/images/cards/mama.png'
import msk from '../../assets/images/cards/msk.png'
import pocus from '../../assets/images/cards/pocus.png'
import biRads from '../../assets/images/cards/bi-rads.png'
import intervencaoMamaria from '../../assets/images/cards/intervencao-mamaria.png'
import intervencaoNaoVascular from '../../assets/images/cards/intervencao-nao-vascular.png'

const Events = ({ children }) => {
  return (
    <section className={container}>
      <h2 className={columnTitle}>Programação Científica</h2>
      <div className={firstRow}>
        <Card
          color={card1}
          title='POCUS'
          subtitle='SRMG ABRAMED'
          img={pocus}
          link='https://d335luupugsy2.cloudfront.net/cms%2Ffiles%2F326123%2F1727292011Grade_sem_nome_02.11_CURSO_HANDS-ON_MAMA_25.09.pdf'
          width='100px'
          height='125'
        />
        <Card
          color={card2}
          title='Gastrointestinal'
          img={gastrointestinal}
          link='https://d335luupugsy2.cloudfront.net/cms%2Ffiles%2F326123%2F1727294468Grade_sem_nome_02.11_CURSO_RADIOLOGIA_MAMRIA_20.09.pdf'
          width='100px'
          height='125'
        />
        <Card
          color={card3}
          title='Geniturinário'
          img={geniturinario}
          link='https://d335luupugsy2.cloudfront.net/cms%2Ffiles%2F326123%2F1727294569Grade_sem_nome_01.11_CURSO_GENITURINRIO_20.09.pdf'
          width='100px'
          height='125'
        />
        <Card
          color={card4}
          title='Mama'
          img={mama}
          width='126px'
          height='125'
        />
        <Card
          color={card5}
          title='MSK'
          img={msk}
          link='https://d335luupugsy2.cloudfront.net/cms%2Ffiles%2F326123%2F1727292385Grade_sem_nome_02.11_CURSO_MUSCULOESQUELTICO_25.09.pdf'
          width='126px'
          height='125'
        />
      </div>
      <div className={secondRow}>
        <div className={column}>
          <h2 className={columnTitle}>Hands On</h2>
          <div className={columnCards}>
            <Card
              color={card7}
              title='BI-RADS'
              img={biRads}
              width='180px'
              height='70px'
            />
            <Card
              color={card6}
              title='Intervenção Mamária'
              img={intervencaoMamaria}
              width='139px'
              height='125'
            />
          </div>
        </div>
        <div className={column}>
          <h2 className={columnTitle}>Cursos Intensivos</h2>
          <div className={columnCards}>
            <Card
              color={card8}
              title='Intervenção não vascular'
              img={intervencaoNaoVascular}
              link='https://d335luupugsy2.cloudfront.net/cms%2Ffiles%2F326123%2F1727294723Grade_sem_nome_01.11_CURSO_DE_RADIOLOGIA_INTERVENCIONISTA_NO-VASCULAR_20.09_2.pdf'
              width='100px'
              height='100px'
            />
            <Card
              color={card9}
              title='Inovação/IA'
              img={ia}
              width='124px'
              height='125px'
            />
          </div>
        </div>
      </div>
      {children}
    </section>
  )
}

export default Events
