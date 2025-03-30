'use client'

import Table from '../components/Table'
import { container } from './Tables.module.css'
import Modal from './Modal'
import RegistrationForm from './RegistrationForm'
import { useState } from 'react'

export default function Tables({ priceTables, year }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className={container} id='tables'>
      {priceTables.tableSections.map((table, index) => (
        <Table
          key={index}
          theTable={table}
          year={year}
        />
      ))}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <RegistrationForm year={year} onClose={() => setIsModalOpen(false)} />
      </Modal>
    </section>
  )
}
