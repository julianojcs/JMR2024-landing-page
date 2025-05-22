'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import styles from './SubscriptionsStatus.module.css'
import SubscriptionsList from './SubscriptionsList'
import { fetchPaymentsByCpf, fetchCustomerByCPF } from '../services/api';
import { Subscription } from '../models';
import { validateCPF, validateEmail } from '../utils';

export default function SubscriptionStatus() {
  const [email, setEmail] = useState('')
  const [cpf, setCPF] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [subscriptions, setSubscriptions] = useState([])
  const [hasSearched, setHasSearched] = useState(false)
  const [cpfVerified, setCpfVerified] = useState(false);
  const router = useRouter()

  // Formatar CPF enquanto digita
  const handleCPFChange = (e) => {
    let value = e.target.value
    value = value.replace(/\D/g, '') // Remove todos os não-dígitos

    if (value.length <= 11) {
      // Formatar como CPF: 000.000.000-00
      value = value.replace(/(\d{3})(\d)/, '$1.$2')
      value = value.replace(/(\d{3})(\d)/, '$1.$2')
      value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2')
    }

    setCPF(value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email || !cpf) {
      setError('Por favor, preencha todos os campos.')
      return
    }
    if (!validateEmail(email)) {
      setError('Por favor, insira um e-mail válido.')
      return
    }
    if (!validateCPF(cpf)) {
      setError('Por favor, insira um CPF válido.')
      return
    }
    setIsLoading(true)
    setError('')

    try {
      const customer = await fetchCustomerByCPF(cpf);
      console.log('Cliente encontrado:', customer);
      if (!customer) {
        setError('Não encontramos um cliente associado a este CPF.');
        setIsLoading(false);
        return;
      }

      // Verificar se o e-mail informado corresponde ao cadastrado
      if (email.toLowerCase() !== customer.email.toLowerCase()) {
        setError('O e-mail informado não corresponde ao cadastrado para este CPF.');
        setIsLoading(false);
        return;
      }

      const paymentsResponse = await fetchPaymentsByCpf(cpf);
      if (paymentsResponse && paymentsResponse.data) {
        const subscriptionsList = paymentsResponse.data.map(payment =>
          new Subscription(payment)
        );
        console.log('Pagamentos encontrados:', subscriptionsList);
        setSubscriptions(subscriptionsList || []);
        if (subscriptionsList.length === 0) {
          setError('Não encontramos inscrições associadas a este e-mail e CPF.');
        }
      } else {
        setError('Não encontramos inscrições associadas a este e-mail e CPF.');
      }
    } catch (error) {
      console.error('Erro ao buscar dados do cliente ou pagamentos:', error);
      setError('Ocorreu um erro ao verificar suas inscrições. Por favor, tente novamente.');
    } finally {
      setIsLoading(false)
    }
    setHasSearched(true)
  }

  return (
    <div className={styles.container}>
      {!hasSearched ? (
        // Formulário de busca
        <>
          <h2 className={styles.title}>Verificar Status da Inscrição</h2>

          <p className={styles.description}>
            Informe seu e-mail e CPF para consultar o status da sua inscrição na JMR/CIM 2025.
          </p>

          {error && <div className={styles.errorMessage}>{error}</div>}

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>E-mail</label>
              <input
                type="email"
                id="email"
                className={styles.input}
                placeholder="Seu e-mail utilizado na inscrição"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="cpf" className={styles.label}>CPF</label>
              <input
                type="text"
                id="cpf"
                className={styles.input}
                placeholder="000.000.000-00"
                value={cpf}
                onChange={handleCPFChange}
                maxLength={14}
                required
              />
            </div>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={isLoading}
            >
              {isLoading ? 'Verificando...' : 'Verificar'}
            </button>
          </form>

          <div className={styles.infoMessage}>
            <p>Caso tenha problemas para acessar sua inscrição, entre em contato pelo whatsapp: <strong>(27)98133-0708</strong></p>
          </div>
        </>
      ) : (
        // Resultados da busca - Lista de inscrições
        <>
          <h2 className={styles.title}>Inscrições Encontradas</h2>

          {error && <div className={styles.errorMessage}>{error}</div>}

          <div className={styles.resultsContainer}>
            <SubscriptionsList subscriptions={subscriptions} />
          </div>
        </>
      )}
    </div>
  )
}