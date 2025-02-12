import classnames from 'classnames'
import CallToAct from '../components/CallToAct'
import { verifyDate } from '../util/functions'
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
  textoTachado,
  buttonCTA
} from './Tables.module.css'

// style={{marginRight: spacing + 'em'}}
// style={{background-color: + 'var(' + clr + ')'}}

export default function Tables({buttons}) {
  const bestBefore = {
    october20: verifyDate('20102024') ? '' : textoTachado,
    october30: verifyDate('30102024') ? '' : textoTachado,
    november02: verifyDate('10102024') ? '' : textoTachado
  }

  return (
    <section className={container}>
      <h1 className={classnames(p1, green, smallCaps)}>
        X Jornada Miniera de Radiologia
      </h1>
      <h2 className={classnames(white)}>&</h2>
      <h1 className={classnames(p2, green, smallCaps)}>
        I Jornada Mineira POCUS ABRAMEDE/MG e SRMG
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
              <td className={classnames(td, tdValue, bestBefore.october20)}>
                R$ 290,00
              </td>
              <td className={classnames(td, tdValue, bestBefore.october30)}>
                R$ 330,00
              </td>
              <td className={classnames(td, tdValue, bestBefore.november02)}>R$ 420,00</td>
            </tr>
            <tr className={tr}>
              <td className={td}>Não Associados ou Inadimplentes</td>
              <td className={classnames(td, tdValue, bestBefore.october20)}>
                R$ 500,00
              </td>
              <td className={classnames(td, tdValue, bestBefore.october30)}>
                R$ 550,00
              </td>
              <td className={classnames(td, tdValue, bestBefore.november02)}>R$ 650,00</td>
            </tr>
            <tr className={tr}>
              <td className={td}>Residentes</td>
              <td className={classnames(td, tdValue, bestBefore.october20)}>
                R$ 250,00
              </td>
              <td className={classnames(td, tdValue, bestBefore.october30)}>
                R$ 340,00
              </td>
              <td className={classnames(td, tdValue, bestBefore.november02)}>R$ 390,00</td>
            </tr>
            <tr className={tr}>
              <td className={td}>Acadêmicos</td>
              <td className={classnames(td, tdValue, bestBefore.october20)}>
                R$ 80,00
              </td>
              <td className={classnames(td, tdValue, bestBefore.october30)}>
                R$ 90,00
              </td>
              <td className={classnames(td, tdValue, bestBefore.november02)}>R$ 100,00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={buttonCTA}>
        <CallToAct {...buttons[0]} />
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
              <td className={classnames(td, tdValue, bestBefore.october20)}>
                R$ 320,00
              </td>
              <td className={classnames(td, tdValue, bestBefore.october30)}>
                R$ 360,00
              </td>
              <td className={classnames(td, tdValue, bestBefore.november02)}>R$ 400,00</td>
            </tr>
            <tr className={tr}>
              <td className={td}>Não Associados ou Inadimplentes</td>
              <td className={classnames(td, tdValue, bestBefore.october20)}>
                R$ 460,00
              </td>
              <td className={classnames(td, tdValue, bestBefore.october30)}>
                R$ 500,00
              </td>
              <td className={classnames(td, tdValue, bestBefore.november02)}>R$ 550,00</td>
            </tr>
            <tr className={tr}>
              <td className={td}>Residentes</td>
              <td className={classnames(td, tdValue, bestBefore.october20)}>
                R$ 260,00
              </td>
              <td className={classnames(td, tdValue, bestBefore.october30)}>
                R$ 300,00
              </td>
              <td className={classnames(td, tdValue, bestBefore.november02)}>R$ 340,00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={buttonCTA}>
        <CallToAct {...buttons[1]} />
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
              <td className={classnames(td, tdValue, bestBefore.october20)}>
                R$ 0,00
              </td>
              <td className={classnames(td, tdValue, bestBefore.october30)}>
                R$ 0,00
              </td>
              <td className={classnames(td, tdValue, bestBefore.november02)}>R$ 0,00</td>
            </tr>
            <tr className={tr}>
              <td className={td}>Não Associados ou Inadimplentes</td>
              <td className={classnames(td, tdValue, bestBefore.october20)}>
                R$ 0,00
              </td>
              <td className={classnames(td, tdValue, bestBefore.october30)}>
                R$ 0,00
              </td>
              <td className={classnames(td, tdValue, bestBefore.november02)}>R$ 0,00</td>
            </tr>
            <tr className={tr}>
              <td className={td}>Residentes</td>
              <td className={classnames(td, tdValue, bestBefore.october20)}>
                R$ 0,00
              </td>
              <td className={classnames(td, tdValue, bestBefore.october30)}>
                R$ 0,00
              </td>
              <td className={classnames(td, tdValue, bestBefore.november02)}>R$ 0,00</td>
            </tr>
            <tr className={tr}>
              <td className={td}>Acadêmicos</td>
              <td className={classnames(td, tdValue, bestBefore.october20)}>
                R$ 0,00
              </td>
              <td className={classnames(td, tdValue, bestBefore.october30)}>
                R$ 0,00
              </td>
              <td className={classnames(td, tdValue, bestBefore.november02)}>R$ 0,00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={buttonCTA}>
        <CallToAct {...buttons[2]} />
      </div>
    </section>
  )
}
