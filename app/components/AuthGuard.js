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
      // First, try POST method
      let response = await fetch('/api/auth/validate-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      })

      // If POST fails with 405, try GET method as fallback
      if (response.status === 405) {
        console.log('POST failed with 405, trying GET fallback...')
        response = await fetch(`/api/auth/validate-token?token=${encodeURIComponent(token)}`, {
          method: 'GET',
        })
      }

      // If still failing, try the v2 API
      if (!response.ok && response.status === 405) {
        console.log('Original API failed, trying v2 API...')
        response = await fetch('/api/auth/validate-token-v2', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token }),
        })
      }

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

      // Try GET method as ultimate fallback
      try {
        console.log('Trying GET fallback due to error...')
        const fallbackResponse = await fetch(`/api/auth/validate-token?token=${encodeURIComponent(token)}`, {
          method: 'GET',
        })

        const fallbackData = await fallbackResponse.json()

        if (fallbackResponse.ok) {
          setIsAuthenticated(true)
          sessionStorage.setItem('lectures_auth', 'true')
          setError('')
        } else {
          // Try v2 API with GET as final fallback
          try {
            console.log('Trying v2 API GET fallback...')
            const v2Response = await fetch(`/api/auth/validate-token-v2?token=${encodeURIComponent(token)}`, {
              method: 'GET',
            })

            const v2Data = await v2Response.json()

            if (v2Response.ok) {
              setIsAuthenticated(true)
              sessionStorage.setItem('lectures_auth', 'true')
              setError('')
            } else {
              setError(v2Data.error || fallbackData.error || 'Token de acesso inválido')
              setToken('')
            }
          } catch (v2Error) {
            console.error('V2 API também falhou:', v2Error)
            setError(fallbackData.error || 'Token de acesso inválido')
            setToken('')
          }
        }
      } catch (fallbackErr) {
        console.error('Fallback também falhou:', fallbackErr)
        setError('Erro ao validar token. Verifique sua conexão e tente novamente.')
        setToken('')
      }
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
