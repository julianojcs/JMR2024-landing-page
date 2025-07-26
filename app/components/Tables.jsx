'use client'

import Table from '../components/Table'
import { container, tables } from './Tables.module.css'
import Modal from './Modal'
import RegistrationForm from './RegistrationForm'
import { useState } from 'react'
import CallToAct from './CallToAct'

export default function Tables({ priceTables, year }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className={container} id='tables'>
      <div className={tables} >
        {priceTables.tableSections.map((table, index) => (
          <Table
            key={index}
            theTable={table}
            year={year}
          />
        ))}
      </div>
      <CallToAct caption={'Acesse o seu Trabalho Científico'} link={'https://paper.joindigitalsolutions.com.br/paper'} selfCaption={true} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <RegistrationForm year={year} onClose={() => setIsModalOpen(false)} />
      </Modal>
    </section>
  )
}
