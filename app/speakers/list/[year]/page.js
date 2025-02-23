'use client'

import { useState, useEffect } from 'react'
import { eventData } from '@/app/data/constants'
import styles from './SpeakersList.module.css'
import Image from 'next/image'

export default function SpeakersList({ params }) {
  const [speakers, setSpeakers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [expandedRows, setExpandedRows] = useState(new Set())

  const { year } = params
  const pageTitle = eventData[year]?.speakersForm?.list?.title || `Lista de Palestrantes ${year}`

  const toggleRow = (speakerId) => {
    const newExpandedRows = new Set(expandedRows)
    if (newExpandedRows.has(speakerId)) {
      newExpandedRows.delete(speakerId)
    } else {
      newExpandedRows.add(speakerId)
    }
    setExpandedRows(newExpandedRows)
  }

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const response = await fetch(`/api/speakers/list/${year}`)
        console.log(response)
        if (!response.ok) throw new Error('Falha ao carregar dados')
        const data = await response.json()
        setSpeakers(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchSpeakers()
  }, [year])

  if (loading) return <div className={styles.loading}>Carregando...</div>
  if (error) return <div className={styles.error}>{error}</div>

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{pageTitle}</h1>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th></th>
              <th>Foto</th>
              <th>Nome</th>
              <th>Crachá</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Categoria</th>
              <th>Cidade/UF</th>
            </tr>
          </thead>
          <tbody>
            {speakers.map((speaker) => (
              <>
                <tr key={speaker._id}>
                  <td>
                    <button
                      onClick={() => toggleRow(speaker._id)}
                      className={styles.toggleButton}
                      aria-label={expandedRows.has(speaker._id) ? "Fechar detalhes" : "Abrir detalhes"}
                    >
                      {expandedRows.has(speaker._id) ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path d="M19 13H5v-2h14v2z" fill="currentColor"/>
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor"/>
                        </svg>
                      )}
                    </button>
                  </td>
                  <td>
                    <div className={styles.photoContainer}>
                      <Image
                        src={speaker.photoPath}
                        alt={`Foto de ${speaker.fullName}`}
                        width={50}
                        height={50}
                        className={styles.photo}
                      />
                    </div>
                  </td>
                  <td>{speaker.fullName}</td>
                  <td>{speaker.badgeName}</td>
                  <td>{speaker.email}</td>
                  <td>{speaker.phone}</td>
                  <td>{speaker.category}</td>
                  <td>{`${speaker.city}/${speaker.state}`}</td>
                </tr>
                {expandedRows.has(speaker._id) && (
                  <tr className={styles.expandedRow}>
                    <td colSpan={8}>
                      <div className={styles.expandedContent}>
                        <div className={styles.lectureName}>
                          <strong>Nome da Palestra:</strong>
                          <p>{speaker.lectureName || 'Não informado'}</p>
                        </div>
                        <div className={styles.curriculum}>
                          <strong>Mini Currículo:</strong>
                          <p>{speaker.curriculum}</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}