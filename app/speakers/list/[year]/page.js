'use client'

import { useState, useEffect } from 'react'
import { eventData } from '@/data/constants'
import styles from './SpeakersList.module.css'
import Image from 'next/image'
import Loading from './loading'
import * as XLSX from 'xlsx';
import Badge from '@/components/Badge';
import { formatName } from '../../../utils';

const formatCPF = (cpf) => {
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

const formatDateTime = (dateTimeStr) => {
  if (!dateTimeStr) return '';
  
  const date = new Date(dateTimeStr);
  const dateStr = date.toLocaleDateString('pt-BR');
  const timeStr = date.toLocaleTimeString('pt-BR', { 
    hour: '2-digit', 
    minute: '2-digit' 
  });

  return (
    <span className={styles.dateColumn}>
      <span className={styles.dateValue}>{dateStr}</span>
      <span className={styles.timeValue}>{timeStr}</span>
    </span>
  );
};

export default function SpeakersList({ params }) {
  const [speakers, setSpeakers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [expandedRows, setExpandedRows] = useState(new Set())
  const [sortConfig, setSortConfig] = useState({
    key: 'full_name',
    direction: 'asc'
  });
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

  const sortData = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });

    const sortedData = [...speakers].sort((a, b) => {
      if (a[key] == null) return 1;
      if (b[key] == null) return -1;

      let compareA = a[key];
      let compareB = b[key];

      // Special handling for date
      if (key === 'created_at') {
        compareA = new Date(a[key]).getTime();
        compareB = new Date(b[key]).getTime();
      }

      // Case insensitive string comparison
      if (typeof compareA === 'string') {
        compareA = compareA.toLowerCase();
        compareB = compareB.toLowerCase();
      }

      if (compareA < compareB) return direction === 'asc' ? -1 : 1;
      if (compareA > compareB) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    setSpeakers(sortedData);
  };

  const SortIcon = ({ columnKey }) => {
    if (sortConfig.key !== columnKey) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={styles.sortIconInactive}>
          <path fill="currentColor" d="M7 10l5 5 5-5z"/>
        </svg>
      );
    }

    return sortConfig.direction === 'asc' ? (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={styles.sortIconActive}>
        <path fill="currentColor" d="M7 14l5-5 5 5z"/>
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={styles.sortIconActive}>
        <path fill="currentColor" d="M7 10l5 5 5-5z"/>
      </svg>
    );
  };

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

  const exportToExcel = () => {
    // Prepare data for export
    const exportData = speakers.map(speaker => ({
      'Nome Completo': formatName(speaker.full_name),
      'Nome do Crachá': formatName(speaker.badge_name),
      'CPF': speaker.cpf,
      'Email': speaker.email?.toLowerCase(),
      'Telefone': speaker.phone,
      'Cidade': formatName(speaker.city),
      'Estado': speaker.state,
      'Palestras': Array.isArray(speaker.lectures)
        ? speaker.lectures.join(', ')
        : speaker.lectures,
      'Categorias': Array.isArray(speaker.categories)
        ? speaker.categories.join(', ')
        : speaker.categories,
      'Mini Currículo': speaker.curriculum,
      'Data de Cadastro': new Date(speaker.created_at).toLocaleDateString('pt-BR')
    }));

    // Create workbook and worksheet
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(exportData);

    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Palestrantes');

    // Save file
    XLSX.writeFile(wb, `palestrantes_${params.year}.xlsx`);
  };

  if (loading) return <Loading />
  if (error) return <div className={styles.error}>{error}</div>

  return (
    <div className={styles.container}>
      <button onClick={exportToExcel} className={styles.exportButton} title="Exportar para Excel">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="currentColor" d="M2.859 2.877l12.57-1.795a.5.5 0 0 1 .571.495v20.846a.5.5 0 0 1-.57.495L2.858 21.123a1 1 0 0 1-.859-.99V3.867a1 1 0 0 1 .859-.99zM17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4V3zm-6.8 9L13 8h-2.4L9 10.286 7.4 8H5l2.8 4L5 16h2.4L9 13.714 10.6 16H13l-2.8-4z"/>
        </svg>
        <span className={styles.exportButtonText}>Exportar</span>
      </button>
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
              <th onClick={() => sortData('full_name')} className={styles.sortableHeader}>
                <div className={styles.headerContent}>
                  Nome
                  <SortIcon columnKey="full_name" />
                </div>
              </th>
              <th onClick={() => sortData('badge_name')} className={styles.sortableHeader}>
                <div className={styles.headerContent}>
                  Crachá
                  <SortIcon columnKey="badge_name" />
                </div>
              </th>
              <th onClick={() => sortData('cpf')} className={styles.sortableHeader}>
                <div className={styles.headerContent}>
                  CPF
                  <SortIcon columnKey="cpf" />
                </div>
              </th>
              <th onClick={() => sortData('email')} className={styles.sortableHeader}>
                <div className={styles.headerContent}>
                  Email
                  <SortIcon columnKey="email" />
                </div>
              </th>
              <th onClick={() => sortData('phone')} className={styles.sortableHeader}>
                <div className={styles.headerContent}>
                  Telefone
                  <SortIcon columnKey="phone" />
                </div>
              </th>
              <th onClick={() => sortData('city')} className={styles.sortableHeader}>
                <div className={styles.headerContent}>
                  Cidade/UF
                  <SortIcon columnKey="city" />
                </div>
              </th>
              <th onClick={() => sortData('created_at')} className={styles.sortableHeader}>
                <div className={styles.headerContent}>
                  Data
                  <SortIcon columnKey="created_at" />
                </div>
              </th>
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
                      <Badge
                        count={Array.isArray(speaker.lectures) ? speaker.lectures.length : 0}
                        backgroundColor="var(--info-text)"
                        size="1.2rem"
                        textSingular="palestra"
                        textPlural="palestras"
                      />
                    </div>
                  </td>
                  <td>{formatName(speaker.full_name)}</td>
                  <td>{formatName(speaker.badge_name)}</td>
                  <td>{formatCPF(speaker.cpf)}</td>
                  <td>{speaker.email?.toLowerCase()}</td>
                  <td>{speaker.phone}</td>
                  <td>{`${formatName(speaker.city)}/${speaker.state}`}</td>
                  <td>{formatDateTime(speaker.created_at)}</td>
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