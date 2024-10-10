import classnames from 'classnames'
import CallToAct from './CallToAct'
import {
  container,
  tableContainer,
  table,
  thead,
  tbody,
  tr,
  th,
  td,
  tdValue,
  toHide,
  toShow,
  p1,
  p2,
  mb1,
  green,
  white,
  primaryClr,
  smallCaps,
  buttonCTA
} from './Tables.module.css'

// style={{marginRight: spacing + 'em'}}
// style={{background-color: + 'var(' + clr + ')'}}

export default function Tables({ children }) {
  const callToAct = {
    buttom03: {
      caption: 'Se inscreva no Hands On',
      link: 'https://eventosis.com.br/credenciamento/jmr2024/'
    },
    buttom04: {
      caption: 'Se inscreva na Jornada',
      link: 'https://eventosis.com.br/credenciamento/jmr2024/'
    },
    buttom05: {
      caption: 'Se inscreva no Curso de IA',
      link: 'https://eventosis.com.br/credenciamento/jmr2024/'
    }
  }
  return (
    <div className={container}>
      <h1 className={classnames(p1, green, smallCaps)}>
        X Jornada Miniera de Radiologia
      </h1>
      <h2 className={classnames(white)}>&</h2>
      <h1 className={classnames(p2, green, smallCaps)}>
        I Jornada Mineira POCUS ABRAMEDE-MG e SRMG
      </h1>
      <div className={tableContainer}>
        <table className={table}>
          <thead className={thead}>
            <tr>
              <th className={th}>Categorias</th>
              <th className={th}>
                <span className={toHide}>Desconto até 20/10</span>
                <span className={toShow}>Até 20/10</span>
              </th>
              <th className={th}>
                <span className={toHide}>Desconto até 30/10</span>
                <span className={toShow}>Até 30/10</span>
              </th>
              <th className={th}>No Local</th>
            </tr>
          </thead>
          <tbody className={tbody}>
            <tr className={tr}>
              <td className={td}>Associados Quites</td>
              <td className={classnames(td, tdValue)}>R$ 290,00</td>
              <td className={classnames(td, tdValue)}>R$ 330,00</td>
              <td className={classnames(td, tdValue)}>R$ 420,00</td>
            </tr>
            <tr className={tr}>
              <td className={td}>Não Associados ou Inadimplentes</td>
              <td className={classnames(td, tdValue)}>R$ 500,00</td>
              <td className={classnames(td, tdValue)}>R$ 550,00</td>
              <td className={classnames(td, tdValue)}>R$ 650,00</td>
            </tr>
            <tr className={tr}>
              <td className={td}>Residentes</td>
              <td className={classnames(td, tdValue)}>R$ 250,00</td>
              <td className={classnames(td, tdValue)}>R$ 340,00</td>
              <td className={classnames(td, tdValue)}>R$ 3900,00</td>
            </tr>
            <tr className={tr}>
              <td className={td}>Acadêmicos</td>
              <td className={classnames(td, tdValue)}>R$ 80,00</td>
              <td className={classnames(td, tdValue)}>R$ 90,00</td>
              <td className={classnames(td, tdValue)}>R$ 100,00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={buttonCTA}>
        <CallToAct
          caption={callToAct.buttom04.caption}
          link={callToAct.buttom04.link}
        />
      </div>

      <h1 className={classnames(p1, green, smallCaps)}>
        <p>Além de Participar da Jornada,</p>
      </h1>
      <h1 className={classnames(mb1, primaryClr, smallCaps)}>
        <p>Você pode Adquirir Separadamente Módulos Hands On</p>
      </h1>
      <h2 className={classnames(mb1, primaryClr)}>
        (BI-RADS ou Intervenção Mamária)
      </h2>
      <h4 className={classnames(p2, mb1, white)}>
        *Valor Individual de Cada Módulo Hands On
      </h4>
      <p className={classnames(p2, white)}>Vagas Limitadas</p>
      <div className={tableContainer}>
        <table className={table}>
          <thead className={thead}>
            <tr>
              <th className={th}>Categorias</th>
              <th className={th}>
                <span className={toHide}>Desconto até 20/10</span>
                <span className={toShow}>Até 20/10</span>
              </th>
              <th className={th}>
                <span className={toHide}>Desconto até 30/10</span>
                <span className={toShow}>Até 30/10</span>
              </th>
              <th className={th}>No Local</th>
            </tr>
          </thead>
          <tbody className={tbody}>
            <tr className={tr}>
              <td className={td}>Associados Quites</td>
              <td className={classnames(td, tdValue)}>R$ 320,00</td>
              <td className={classnames(td, tdValue)}>R$ 360,00</td>
              <td className={classnames(td, tdValue)}>R$ 400,00</td>
            </tr>
            <tr className={tr}>
              <td className={td}>Não Associados ou Inadimplentes</td>
              <td className={classnames(td, tdValue)}>R$ 460,00</td>
              <td className={classnames(td, tdValue)}>R$ 500,00</td>
              <td className={classnames(td, tdValue)}>R$ 550,00</td>
            </tr>
            <tr className={tr}>
              <td className={td}>Residentes</td>
              <td className={classnames(td, tdValue)}>R$ 260,00</td>
              <td className={classnames(td, tdValue)}>R$ 300,00</td>
              <td className={classnames(td, tdValue)}>R$ 340,00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={buttonCTA}>
        <CallToAct
          caption={callToAct.buttom03.caption}
          link={callToAct.buttom03.link}
        />
      </div>

      <h1 className={classnames(p1, p2, primaryClr, smallCaps)}>
        Curso Intensivo de Inteligência Artificial
      </h1>
      <div className={tableContainer}>
        <table className={table}>
          <thead className={thead}>
            <tr>
              <th className={th}>Categorias</th>
              <th className={th}>
                <span className={toHide}>Desconto até 20/10</span>
                <span className={toShow}>Até 20/10</span>
              </th>
              <th className={th}>
                <span className={toHide}>Desconto até 30/10</span>
                <span className={toShow}>Até 30/10</span>
              </th>
              <th className={th}>No Local</th>
            </tr>
          </thead>
          <tbody className={tbody}>
            <tr className={tr}>
              <td className={td}>Associados Quites</td>
              <td className={classnames(td, tdValue)}>R$ 0,00</td>
              <td className={classnames(td, tdValue)}>R$ 0,00</td>
              <td className={classnames(td, tdValue)}>R$ 0,00</td>
            </tr>
            <tr className={tr}>
              <td className={td}>Não Associados ou Inadimplentes</td>
              <td className={classnames(td, tdValue)}>R$ 0,00</td>
              <td className={classnames(td, tdValue)}>R$ 0,00</td>
              <td className={classnames(td, tdValue)}>R$ 0,00</td>
            </tr>
            <tr className={tr}>
              <td className={td}>Residentes</td>
              <td className={classnames(td, tdValue)}>R$ 0,00</td>
              <td className={classnames(td, tdValue)}>R$ 0,00</td>
              <td className={classnames(td, tdValue)}>R$ 0,00</td>
            </tr>
            <tr className={tr}>
              <td className={td}>Acadêmicos</td>
              <td className={classnames(td, tdValue)}>R$ 0,00</td>
              <td className={classnames(td, tdValue)}>R$ 0,00</td>
              <td className={classnames(td, tdValue)}>R$ 0,00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={buttonCTA}>
        <CallToAct
          caption={callToAct.buttom05.caption}
          link={callToAct.buttom05.link}
        />
      </div>
    </div>
  )
}
