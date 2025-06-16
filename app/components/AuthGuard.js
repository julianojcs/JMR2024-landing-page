'use client'

import { useState, useEffect } from 'react'
import { HiLockClosed, HiEye, HiEyeOff } from 'react-icons/hi'
import styles from './AuthGuard.module.css'

export default function AuthGuard({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [token, setToken] = useState('')
  const [showToken, setShowToken] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const [validatingToken, setValidatingToken] = useState(false)

  useEffect(() => {
    // Verifica se já está autenticado no sessionStorage
    const savedAuth = sessionStorage.getItem('lectures_auth')
    if (savedAuth === 'true') {
      setIsAuthenticated(true)
    }
    setLoading(false)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setValidatingToken(true)
    setError('')

    try {
      const response = await fetch('/api/auth/validate-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      })

      const data = await response.json()

      if (response.ok) {
        setIsAuthenticated(true)
        sessionStorage.setItem('lectures_auth', 'true')
        setError('')
      } else {
        setError(data.error || 'Token de acesso inválido')
        setToken('')
      }
    } catch (err) {
      console.error('Erro na validação:', err)
      setError('Erro ao validar token. Tente novamente.')
      setToken('')
    } finally {
      setValidatingToken(false)
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    sessionStorage.removeItem('lectures_auth')
    setToken('')
  }

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className={styles.authContainer}>
        <div className={styles.authCard}>
          <div className={styles.authHeader}>
            <HiLockClosed size={48} className={styles.lockIcon} />
            <h1>Acesso Restrito</h1>
            <p>Digite o token de acesso para continuar</p>
          </div>

          <form onSubmit={handleSubmit} className={styles.authForm}>
            <div className={styles.inputGroup}>
              <label htmlFor="token">Token de Acesso:</label>
              <div className={styles.inputContainer}>
                <input
                  id="token"
                  type={showToken ? 'text' : 'password'}
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  placeholder="Digite o token..."
                  className={styles.tokenInput}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowToken(!showToken)}
                  className={styles.toggleButton}
                >
                  {showToken ? <HiEyeOff size={20} /> : <HiEye size={20} />}
                </button>
              </div>
            </div>

            {error && (
              <div className={styles.error}>
                {error}
              </div>
            )}

            <button
              type="submit"
              className={styles.submitButton}
              disabled={validatingToken}
            >
              {validatingToken ? 'Validando...' : 'Acessar Sistema'}
            </button>
          </form>

          <div className={styles.helpText}>
            <small>Entre em contato com o administrador para obter o token de acesso.</small>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className={styles.logoutBar}>
        <span>Acesso autorizado</span>
        <button onClick={handleLogout} className={styles.logoutButton}>
          Sair
        </button>
      </div>
      {children}
    </div>
  )
}
