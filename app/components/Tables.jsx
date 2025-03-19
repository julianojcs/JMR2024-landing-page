import Table from '../components/Table'
import { container } from './Tables.module.css'

// style={{marginRight: spacing + 'em'}}
// style={{background-color: + 'var(' + clr + ')'}}

export default function Tables({priceTables, year}) {
  return (
    <section className={container}>
      {priceTables.tableSections.map((table, index) => (
        <Table
          key={index}
          theTable={table}
          year={year}
        />
      ))}
    </section>
  )
}
