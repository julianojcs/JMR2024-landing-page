'use client'

import { useState, useEffect } from 'react'
import styles from './lectures.module.css'
import AuthGuard from '../../components/AuthGuard'
import {
  HiPlus,
  HiX,
  HiPencil,
  HiTrash,
  HiCheck,
  HiSearch,
  HiExclamationCircle,
  HiCheckCircle
} from 'react-icons/hi'

export default function LecturesPage() {
  const [lectures, setLectures] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [deletingId, setDeletingId] = useState(null)
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [creating, setCreating] = useState(false)
  const [createError, setCreateError] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)
  const [editingId, setEditingId] = useState(null)
  const [editingName, setEditingName] = useState('')
  const [updatingId, setUpdatingId] = useState(null)

  useEffect(() => {
    fetchLectures()
  }, [])

  const fetchLectures = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/lectures')

      if (!response.ok) {
        throw new Error('Erro ao carregar palestras')
      }

      const data = await response.json()
      setLectures(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleCreateLecture = async (formData) => {
    try {
      setCreating(true)
      setCreateError(null)

      const name = formData.get('name')

      if (!name || name.trim() === '') {
        throw new Error('Nome da palestra é obrigatório')
      }

      const response = await fetch('/api/lectures', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim()
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Erro ao criar palestra')
      }

      const newLecture = await response.json()

      // Adicionar a nova palestra ao início da lista
      setLectures(prev => [newLecture, ...prev])

      // Limpar o formulário e fechar
      setShowCreateForm(false)
      setCreateError(null)

      // Mostrar mensagem de sucesso
      setSuccessMessage('Palestra criada com sucesso!')
      setTimeout(() => setSuccessMessage(null), 3000)

    } catch (err) {
      setCreateError(err.message)
    } finally {
      setCreating(false)
    }
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const name = formData.get('name')?.trim()

    // Validação adicional
    if (!name) {
      setCreateError('Nome da palestra é obrigatório')
      return
    }

    if (name.length < 3) {
      setCreateError('Nome da palestra deve ter pelo menos 3 caracteres')
      return
    }

    await handleCreateLecture(formData)

    // Reset form se não há erro
    if (!createError) {
      e.target.reset()
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Tem certeza que deseja excluir esta palestra?')) {
      return
    }

    try {
      setDeletingId(id)
      const response = await fetch(`/api/lectures/${id}`, {
        method: 'DELETE'
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Erro ao excluir palestra')
      }

      // Atualizar a lista removendo a palestra excluída
      setLectures(lectures.filter(lecture => lecture.id !== id))

      // Mostrar mensagem de sucesso
      setSuccessMessage('Palestra excluída com sucesso!')
      setTimeout(() => setSuccessMessage(null), 3000)
    } catch (err) {
      alert(err.message)
    } finally {
      setDeletingId(null)
    }
  }

  const handleEdit = (lecture) => {
    setEditingId(lecture.id)
    setEditingName(lecture.name)
  }

  const handleCancelEdit = () => {
    setEditingId(null)
    setEditingName('')
  }

  const handleSaveEdit = async (id) => {
    if (!editingName || editingName.trim() === '') {
      setSuccessMessage('Nome da palestra é obrigatório')
      setTimeout(() => setSuccessMessage(null), 3000)
      return
    }

    if (editingName.trim().length < 3) {
      setSuccessMessage('Nome da palestra deve ter pelo menos 3 caracteres')
      setTimeout(() => setSuccessMessage(null), 3000)
      return
    }

    try {
      setUpdatingId(id)

      const response = await fetch('/api/lectures', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
          name: editingName.trim()
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Erro ao atualizar palestra')
      }

      const updatedLecture = await response.json()

      // Atualizar a lista com os dados atualizados
      setLectures(lectures.map(lecture =>
        lecture.id === id ? { ...lecture, name: updatedLecture.name } : lecture
      ))

      // Limpar estado de edição
      setEditingId(null)
      setEditingName('')

      // Mostrar mensagem de sucesso
      setSuccessMessage('Palestra atualizada com sucesso!')
      setTimeout(() => setSuccessMessage(null), 3000)

    } catch (err) {
      setSuccessMessage(err.message)
      setTimeout(() => setSuccessMessage(null), 3000)
    } finally {
      setUpdatingId(null)
    }
  }

  const filteredLectures = lectures.filter(lecture =>
    lecture.name?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Carregando palestras...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>
          <h2>Erro</h2>
          <p>{error}</p>
          <button onClick={fetchLectures} className={styles.retryButton}>
            Tentar Novamente
          </button>
        </div>
      </div>
    )
  }

  return (
    <AuthGuard>
      <div className={styles.container}>
      {/* Toast de Sucesso */}
      {successMessage && (
        <div className={`${styles.successToast} ${
          successMessage.includes('obrigatório') ||
          successMessage.includes('caracteres') ||
          successMessage.includes('Erro')
            ? styles.errorToast : ''
        }`}>
          <div className={styles.toastContent}>
            {successMessage.includes('obrigatório') ||
             successMessage.includes('caracteres') ||
             successMessage.includes('Erro') ? (
              <HiExclamationCircle size={20} />
            ) : (
              <HiCheckCircle size={20} />
            )}
            <span>{successMessage}</span>
          </div>
        </div>
      )}

      <header className={styles.header}>
        <h1 className={styles.title}>Gestão de Palestras</h1>
        <p className={styles.subtitle}>
          Gerencie todas as palestras do congresso
        </p>
      </header>      <div className={styles.controls}>
        <div className={styles.searchBox}>
          <div className={styles.searchContainer}>
            <HiSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Buscar palestras..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
          </div>
        </div>

        <div className={styles.controlsRight}>

          {showCreateForm || (
            <button
              onClick={() => setShowCreateForm(!showCreateForm)}
              className={`${styles.addButton} ${showCreateForm ? styles.addButtonActive : ''}`}
            >
              <HiPlus size={16} />
              <span>Nova Palestra</span>
            </button>
          )}

          <div className={styles.stats}>
            <span className={styles.totalCount}>
              Total: {filteredLectures.length} palestra{filteredLectures.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </div>

      {/* Formulário de Criação de Palestra */}
      {showCreateForm && (
        <div className={styles.createFormContainer}>
          <div className={styles.createForm}>
            <h3 className={styles.formTitle}>Criar Nova Palestra</h3>
            <form onSubmit={handleFormSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Nome da Palestra *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete='off'
                  placeholder="Digite o nome da palestra..."
                  className={styles.input}
                  required
                  disabled={creating}
                  onChange={() => createError && setCreateError(null)}
                />
              </div>

              {createError && (
                <div className={styles.formError}>
                  {createError}
                </div>
              )}

              <div className={styles.formActions}>
                <button
                  type="button"
                  onClick={() => {
                    setShowCreateForm(false)
                    setCreateError(null)
                  }}
                  className={styles.formCancelButton}
                  disabled={creating}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={creating}
                >
                  {creating ? (
                    <>
                      <span className={styles.buttonSpinner}></span>
                      <span>Criando...</span>
                    </>
                  ) : (
                    <>
                      <HiCheck size={16} />
                      <span>Criar Palestra</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {filteredLectures.length === 0 ? (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>
            <HiExclamationCircle size={48} />
          </div>
          <h3>Nenhuma palestra encontrada</h3>
          <p>
            {searchTerm
              ? 'Tente ajustar os termos de busca.'
              : 'Ainda não há palestras cadastradas no sistema.'
            }
          </p>
        </div>
      ) : (
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome da Palestra</th>
                <th>Status</th>
                <th>Data de Criação</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {filteredLectures.map((lecture) => (
                <tr key={lecture.id} className={styles.tableRow}>
                  <td className={styles.idCell}>
                    <span className={styles.idBadge}>#{lecture.id}</span>
                  </td>
                  <td className={styles.nameCell}>
                    <div className={styles.lectureName}>
                      {editingId === lecture.id ? (
                        <input
                          type="text"
                          value={editingName}
                          onChange={(e) => setEditingName(e.target.value)}
                          className={styles.editInput}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              handleSaveEdit(lecture.id)
                            } else if (e.key === 'Escape') {
                              handleCancelEdit()
                            }
                          }}
                          autoFocus
                        />
                      ) : (
                        lecture.name || 'Sem nome'
                      )}
                    </div>
                  </td>
                  <td className={styles.statusCell}>
                    <div className={styles.statusBadges}>
                      {lecture.is_fixed && (
                        <span className={styles.fixedBadge}>Fixo</span>
                      )}
                      {lecture.is_new && (
                        <span className={styles.newBadge}>Novo</span>
                      )}
                      {!lecture.is_fixed && !lecture.is_new && (
                        <span className={styles.regularBadge}>Regular</span>
                      )}
                    </div>
                  </td>
                  <td className={styles.dateCell}>
                    {lecture.created_at ?
                      new Date(lecture.created_at).toLocaleDateString('pt-BR') :
                      'N/A'
                    }
                  </td>
                  <td className={styles.actionsCell}>
                    <div className={styles.actionButtons}>
                      {editingId === lecture.id ? (
                        <>
                          <button
                            onClick={() => handleSaveEdit(lecture.id)}
                            className={styles.saveButton}
                            title="Salvar palestra"
                            disabled={updatingId === lecture.id}
                          >
                            {updatingId === lecture.id ? (
                              <span className={styles.buttonSpinner}></span>
                            ) : (
                              <HiCheck size={14} />
                            )}
                          </button>
                          <button
                            onClick={handleCancelEdit}
                            className={styles.actionCancelButton}
                            title="Cancelar edição"
                          >
                            <HiX size={14} />
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => handleEdit(lecture)}
                            className={styles.editButton}
                            title="Editar palestra"
                          >
                            <HiPencil size={14} />
                          </button>
                          <button
                            onClick={() => handleDelete(lecture.id)}
                            className={`${styles.deleteButton} ${deletingId === lecture.id ? styles.buttonLoading : ''}`}
                            title="Excluir palestra"
                            disabled={deletingId === lecture.id}
                          >
                            <HiTrash
                              size={14}
                              className={deletingId === lecture.id ? styles.iconSpinning : ''}
                            />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      </div>
    </AuthGuard>
  )
}
