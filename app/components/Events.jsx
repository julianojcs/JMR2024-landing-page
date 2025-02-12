import Card from './Card'
import CountdownTimer from './CountdownTimer'
import {
  container,
  columnTitle,
  column,
  columnCards,
  firstRow,
  secondRow,
  titleOppening,
  card0,
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
import oppening from '../../assets/images/cards/oppening.png'
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
      <div>
        <h2 className={columnTitle}>{' '}</h2>
        <div className={firstRow}>
          <Card
            date='01/11'
            color={card0}
            title={<span className={titleOppening}><span>Abertura</span><span>Oficial</span></span>}
            // title='Abertura Oficial'
            subtitle={<CountdownTimer />}
            img={oppening}
            link='/pdf/01-11-abertura-oficial-30-out.pdf'
            width='100px'
            height='125'
          />
        </div>
      </div>
      <div>
        <h2 className={columnTitle}>Programação Científica</h2>
        <div className={firstRow}>
          <Card
            date='01 e 02/11'
            color={card1}
            title='POCUS'
            subtitle='SRMG ABRAMEDE/MG'
            img={pocus}
            link='/pdf/01-e-02-11-pocus.pdf'
            width='100px'
            height='125'
          />
          <Card
            date='01/11'
            color={card2}
            title='Mama'
            img={mama}
            link='/pdf/01-11-mama.pdf'
            width='126px'
            height='125'
          />
          <Card
            date='01/11'
            color={card3}
            title='Geniturinário'
            img={geniturinario}
            link='/pdf/01-11-geniturinário-01-out-lc.pdf'
            width='100px'
            height='125'
          />
          <Card
            date='02/11'
            color={card4}
            title='Gastrointestinal'
            img={gastrointestinal}
            link='/pdf/02-11-gastrointestinal_01-out-final.pdf'
            width='100px'
            height='125'
          />
          <Card
            date='02/11'
            color={card5}
            title='MSK'
            img={msk}
            link='/pdf/02-11-musculoesquelético-01-out-final.pdf'
            width='126px'
            height='125'
          />
        </div>
      </div>
      <div className={secondRow}>
        <div className={column}>
          <h2 className={columnTitle}>Hands On</h2>
          <div className={columnCards}>
            <Card
              date='02/11'
              color={card7}
              title='BI-RADS'
              img={biRads}
              link='/pdf/02-11-hands-on-bi-rads.pdf'
              width='180px'
              height='70px'
            />
            <Card
              date='02/11'
              color={card6}
              title='Intervenção Mamária'
              link='/pdf/02-11-hands-on-intervenção-mamaria.pdf'
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
              date='01/11'
              color={card8}
              title='Intervenção não vascular'
              img={intervencaoNaoVascular}
              link='/pdf/01-11_radiologia-intervencionista-não-vascular.pdf'
              width='100px'
              height='100px'
            />
            <Card
              date='02/11'
              color={card9}
              title='Inovação/IA'
              img={ia}
              link='/pdf/02-11-inovacao-inteligencia-artificial-em-radiologia.pdf'
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
