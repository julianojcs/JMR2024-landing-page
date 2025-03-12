'use client'

import { useState, useEffect } from 'react'
import { eventData } from '@/app/data/constants'
import styles from './SpeakersList.module.css'
import Image from 'next/image'
import LoadingSpinner from '@/app/components/LoadingSpinner';
import Loading from './loading'

export const formatCPF = (cpf) => {
  if (!cpf) return '';
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};

export default function SpeakersList({ params }) {
  const [speakers, setSpeakers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [expandedRows, setExpandedRows] = useState(new Set())
  const defaultAvatar = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1/speakers/default-avatar.png`;

  const getCloudinaryUrl = (photoPath) => {
    if (!photoPath) return defaultAvatar;

    // If already a Cloudinary URL, return as is
    if (photoPath.includes('cloudinary.com')) {
      return photoPath;
    }

    // If just the public_id, construct the URL
    return `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,g_face,h_50,w_50,q_auto/${photoPath}`;
  };

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

  const toggleAllRows = () => {
    if (expandedRows.size === speakers.length) {
      // If all rows are expanded, collapse all
      setExpandedRows(new Set())
    } else {
      // Otherwise, expand all rows
      setExpandedRows(new Set(speakers.map(speaker => speaker.id)))
    }
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

  if (loading) return <Loading />
  if (error) return <div className={styles.error}>{error}</div>

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{pageTitle}</h1>
      <div className={styles.totalSpeakers}>
        Total de palestrantes: {speakers.length}
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
            <th>
                <button
                  onClick={toggleAllRows}
                  className={styles.toggleButton}
                  aria-label={expandedRows.size === speakers.length ? "Recolher todos" : "Expandir todos"}
                >
                  {expandedRows.size === speakers.length ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M4 11h16v2H4zm2-5h12v2H6zm0 10h12v2H6z" fill="currentColor"/>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" fill="currentColor"/>
                    </svg>
                  )}
                </button>
              </th>
              <th>Foto</th>
              <th>Nome</th>
              <th>Crachá</th>
              <th>CPF</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Cidade/UF</th>
              <th>Cadastro</th>
            </tr>
          </thead>
          <tbody>
            {speakers.map((speaker) => (
              <>
                <tr key={speaker.id}>
                  <td>
                    <button
                      onClick={() => toggleRow(speaker.id)}
                      className={styles.toggleButton}
                      aria-label={expandedRows.has(speaker.id) ? "Fechar detalhes" : "Abrir detalhes"}
                    >
                      {expandedRows.has(speaker.id) ? (
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
                        src={getCloudinaryUrl(speaker.photo_path)}
                        alt={`Foto de ${speaker.full_name}`}
                        width={50}
                        height={50}
                        className={styles.photo}
                        unoptimized={true}
                      />
                    </div>
                  </td>
                  <td>{speaker.full_name}</td>
                  <td>{speaker.badge_name}</td>
                  <td>{formatCPF(speaker.cpf)}</td>
                  <td>{speaker.email}</td>
                  <td>{speaker.phone}</td>
                  <td>{`${speaker.city}/${speaker.state}`}</td>
                  <td>{formatDate(speaker.created_at)}</td>
                </tr>
                {expandedRows.has(speaker.id) && (
                  <tr className={styles.expandedRow}>
                    <td colSpan={10}>
                      <div className={styles.expandedContent}>
                        <div className={styles.lectures}>
                          <div className={styles.fieldTitle}>Palestras:</div>
                          <div className={styles.tagList}>
                            {Array.isArray(speaker.lectures) ? (
                              speaker.lectures.map((lecture, index) => (
                                <span key={index} className={styles.tag}>
                                  {lecture}
                                </span>
                              ))
                            ) : (
                              <span className={styles.tag}>
                                {speaker.lectures || 'Não informado'}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className={styles.categories}>
                          <div className={styles.fieldTitle}>Categorias:</div>
                          <div className={styles.tagList}>
                            {Array.isArray(speaker.categories) ? (
                              speaker.categories.map((cat, index) => (
                                <span key={index} className={styles.tag}>
                                  {cat}
                                </span>
                              ))
                            ) : (
                              <span className={styles.tag}>
                                {speaker.categories || 'Não informado'}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className={styles.curriculum}>
                          <div className={styles.fieldTitle}>Mini Currículo:</div>
                          <p>{speaker.curriculum || 'Não informado'}</p>
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