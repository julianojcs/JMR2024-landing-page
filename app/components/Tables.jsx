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
  buttonCTA
} from './Tables.module.css'

// style={{marginRight: spacing + 'em'}}
// style={{background-color: + 'var(' + clr + ')'}}

export default function Tables({ children }) {
  const callToAct = {
    buttom03: {
      caption: 'Se inscreva no Hands On Mamas Intervencionistas',
      link: 'https://cursos.abramedemg.org.br/turmas-disponiveis/congresso/x-jornada-mineira-de-radiologia-e--i-jornada-mineira-de-pocus-abramedemg-e-srmg/1/61/225'
    },
    buttom04: {
      caption: 'Se inscreva no Hands On BI-RADS',
      link: 'https://cursos.abramedemg.org.br/turmas-disponiveis/congresso/x-jornada-mineira-de-radiologia-e--i-jornada-mineira-de-pocus-abramedemg-e-srmg/1/61/225'
    }
  }
  return (
    <div className={container}>
      <p>Além de Participar da Jornada,</p>
      <p>Você pode Adquirir Separadamente Módulos Hands On</p>
      <p>Investimento por Módulo</p>
      <div className={tableContainer}>
        <table className={table}>
          <thead className={thead}>
            <tr>
              <th className={th}>CATEGORIAS</th>
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
              <td className={td}>ASSOCIADOS QUITES (SRMG ou ABRAMEDE-MG)</td>
              <td className={classnames(td, tdValue)}>R$ 320,00</td>
              <td className={classnames(td, tdValue)}>R$ 360,00</td>
              <td className={classnames(td, tdValue)}>R$ 400,00</td>
            </tr>
            <tr className={tr}>
              <td className={td}>NÃO ASSOCIADOS OU INADIMPLENTES</td>
              <td className={classnames(td, tdValue)}>R$ 460,00</td>
              <td className={classnames(td, tdValue)}>R$ 500,00</td>
              <td className={classnames(td, tdValue)}>R$ 550,00</td>
            </tr>
            <tr className={tr}>
              <td className={td}>RESIDENTES</td>
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
        <CallToAct
          caption={callToAct.buttom04.caption}
          link={callToAct.buttom04.link}
        />
      </div>
    </div>
  )
}
