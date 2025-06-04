'use client'

import { useState } from 'react'
import classnames from 'classnames'
import CallToAct from './CallToAct'
import DynamicTag from './DynamicTag'
import Modal from './Modal'
import RegistrationForm from './RegistrationForm'
import { verifyDate } from '../utils'
import styles from './Table.module.css'

export default function Table({ theTable, year }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCallToAction = () => {
    setIsModalOpen(true)
  }

  const generateBestBeforeClasses = () => {
    if (!theTable?.bestBefore?.date) return [];

    console.log('Ano recebido no componente Table:', year);

    // Convertendo year para número se for string
    const currentYear = year ? parseInt(year, 10) : new Date().getFullYear();

    return theTable.bestBefore.date.map(date => {
      // Passar o ano explicitamente para a função verifyDate
      return verifyDate(date, currentYear) ? '' : styles.textoTachado;
    });
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
          className={styles.smallCaps}
          style={{ color: color }}>
          {line}
        </DynamicTag>
      ))
    }

    return (
      <DynamicTag
        tag={tag}
        className={styles.smallCaps}
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
          className={styles.smallCaps}
          style={{ color: color }}>
          {line}
        </DynamicTag>
      ))
    }

    return (
      <DynamicTag
        tag={tag}
        className={styles.smallCaps}
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
    // Always show first column
    if (cellIndex === 0) {
      return (
        <td key={`${rowIndex}-${cellIndex}`} className={styles.td}>
          {cell}
        </td>
      )
    }

    // Handle rowspan object in the second column (vagas)
    // Check if cell is an object with rowspan configuration
    if (cellIndex === 1 && typeof cell === 'object' && cell.rowspan) {
      return (
        <td
          key={`${rowIndex}-${cellIndex}`}
          rowSpan={cell.rowspan}
          className={classnames(styles.td, styles.tdValue)}
        >
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

    // Handle validation/comprovante object
    if (typeof cell === 'object' && 'validar' in cell) {
      return null
    }

    // Handle monetary values starting from rowStart
    const rowStart = theTable?.bestBefore?.rowStart ?? 0
    if (cellIndex >= rowStart && typeof cell === 'string' && cell.includes('R$')) {
      const bestBeforeClass = bestBefore[cellIndex - rowStart]

      return (
        <td
          key={`${rowIndex}-${cellIndex}`}
          className={classnames(styles.td, styles.tdValue, bestBeforeClass)}
        >
          {formatPrice(cell, cellIndex)}
        </td>
      )
    }

    // For non-monetary values before rowStart
    if (cellIndex < rowStart) {
      return (
        <td
          key={`${rowIndex}-${cellIndex}`}
          className={classnames(styles.td, styles.tdValue)}
        >
          {cell}
        </td>
      )
    }

    return null
  }

  return (
    <>
      <div className={styles.wrapper}>
        {theTable.title && (
          <div className={styles.titleWrapper}>
            {renderTitleContent(theTable.title)}
          </div>
        )}

        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              {theTable.table.headers.map((header, index) => (
                <th key={index} className={styles.th}>
                  <span className={styles.toHide}>{renderHeaderContent(header)}</span>
                  <span className={styles.toShow}>{header.mobile}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {theTable.table.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className={styles.tr}>
                {row.cells.map((cell, cellIndex) =>
                  renderCell(cell, cellIndex, rowIndex)
                )}
              </tr>
            ))}
          </tbody>
        </table>

        {theTable.subtitle && (
          <div className={styles.subtitleWrapper}>
            {renderSubtitleContent(theTable.subtitle)}
          </div>
        )}
      </div>

      <div className={styles.buttonCTA}>
        <CallToAct
          onClick={handleCallToAction}
          {...theTable.callToAct}
        />
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <RegistrationForm year={year} onClose={() => setIsModalOpen(false)} />
      </Modal>
    </>
  )
}
