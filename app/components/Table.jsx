import classnames from 'classnames'
import CallToAct from './CallToAct'
import DynamicTag from './DynamicTag'
import { verifyDate } from '../util/functions'
import {
  wrapper,
  titleWrapper,
  subtitleWrapper,
  table,
  thead,
  tbody,
  tr,
  th,
  td,
  tdValue,
  toHide,
  toShow,
  smallCaps,
  textoTachado,
  buttonCTA
} from './Table.module.css'

// style={{marginRight: spacing + 'em'}}
// style={{background-color: + 'var(' + clr + ')'}}

export default function Table({theTable}) {

  const generateBestBeforeClasses = () => {
    if (!theTable?.bestBefore?.date) return []

    return theTable.bestBefore.date.map(date => {
      return verifyDate(date) ? '' : textoTachado
    })
  }
  const bestBefore = generateBestBeforeClasses()

  const formatPrice = (cell, cellIndex) => {
    // Only format cells that are prices (starting from bestBefore.rowStart if it exists)
    const rowStart = theTable?.bestBefore?.rowStart ?? 0
    if (cellIndex >= rowStart && typeof cell === 'string' && cell.includes('R$')) {
      const value = parseFloat(cell.replace('R$', '').replace(',', '.').trim())
      return `R$ ${value.toFixed(2).replace('.', ',')}`
    }
    return cell
  }

  const renderTitleContent = (titleData) => {
    if (!titleData) return null
    const { text, tag, color } = titleData

    if (Array.isArray(text)) {
      return text.map((line, index) => (
        <DynamicTag
          key={index}
          tag={tag}
          className={smallCaps}
          style={{ color: color }}>
          {line}
        </DynamicTag>
      ))
    }

    return (
      <DynamicTag
        tag={tag}
        className={smallCaps}
        style={{ color: color }}>
        {text}
      </DynamicTag>
    )
  }

  const renderSubtitleContent = (subtitleData) => {
    if (!subtitleData) return null
    const { text, tag, color } = subtitleData

    if (Array.isArray(text)) {
      return text.map((line, index) => (
        <DynamicTag
          key={index}
          tag={tag}
          className={smallCaps}
          style={{ color: color }}>
          {line}
        </DynamicTag>
      ))
    }

    return (
      <DynamicTag
        tag={tag}
        className={smallCaps}
        style={{ color: color }}>
        {text}
      </DynamicTag>
    )
  }

  const renderHeaderContent = (header) => {
    if (Array.isArray(header.desktop)) {
      return header.desktop.map((line, index) => (
        <span key={index} style={{ display: 'block' }}>
          {line}
        </span>
      ))
    }
    return header.desktop
  }

  const renderCell = (cell, cellIndex, rowIndex) => {
    // Check if cell is an object with rowspan configuration
    if (cellIndex === 1 && typeof cell === 'object' && cell.rowspan) {
      return (
        <td
          key={`${rowIndex}-${cellIndex}`}
          rowSpan={cell.rowspan}
          className={classnames(td, cellIndex > 0 ? tdValue : null)}>
          {cell.value}
        </td>
      )
    }

    // Skip rendering cell if it should be merged due to rowspan from previous row
    if (cellIndex === 1) {
      const previousRows = theTable.table.rows.slice(0, rowIndex)
      const shouldSkip = previousRows.some((prevRow, prevIndex) => {
        const prevCell = prevRow.cells[cellIndex]
        return (
          typeof prevCell === 'object' &&
          prevCell.rowspan &&
          rowIndex - prevIndex < prevCell.rowspan
        )
      })
      if (shouldSkip) return null
    }

    // Apply bestBefore styling only if bestBefore exists and after rowStart
    const rowStart = theTable?.bestBefore?.rowStart ?? 0
    const shouldApplyBestBefore = cellIndex >= rowStart
    const bestBeforeClass = shouldApplyBestBefore ? bestBefore[cellIndex - rowStart] : null

    return (
      <td
        key={`${rowIndex}-${cellIndex}`}
        className={classnames(
          td,
          cellIndex > 0 ? tdValue : null,
          bestBeforeClass
        )}>
        {formatPrice(cell, cellIndex)}
      </td>
    )
  }

  return (
    <div className={wrapper}>
      {theTable.title && (
        <div className={titleWrapper}>
          {renderTitleContent(theTable.title)}
        </div>
      )}

      <table className={table}>
        <thead className={thead}>
          <tr>
            {theTable.table.headers.map((header, index) => (
              <th key={index} className={th}>
                <span className={toHide}>{renderHeaderContent(header)}</span>
                <span className={toShow}>{header.mobile}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={tbody}>
          {theTable.table.rows.map((row, rowIndex) => (
            <tr key={rowIndex} className={tr}>
              {row.cells.map((cell, cellIndex) =>
                renderCell(cell, cellIndex, rowIndex)
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {theTable.subtitle && (
        <div className={subtitleWrapper}>
          {renderSubtitleContent(theTable.subtitle)}
        </div>
      )}

      {theTable.callToAct && (
        <div className={buttonCTA}>
          <CallToAct {...theTable.callToAct} />
        </div>
      )}
    </div>
  )
}
