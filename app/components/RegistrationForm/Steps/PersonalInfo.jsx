'use client'

import { useState, useEffect, useCallback } from 'react'
import { formatCPF, validateCPF, formatPhone } from '/app/utils'
import styles from './Steps.module.css'
import AsaasClient from '/app/lib/AsaasClient'
import { states } from '/app/data/states'

const BRAZILIAN_STATES = states?.map(state => state.value).sort((a, b) => a.localeCompare(b))

const defaultFormState = {
  userId: '',
  cpf: '',
  fullName: '',
  email: '',
  phone: '',
  zipCode: '',
  address: '',
  number: '',
  complement: '',
  neighborhood: '',
  city: '',
  state: '',
  country: 'Brasil',
  crm: '',
  stateCrm: '',
  isMember: false,
  societies: [],
  isNewCustomer: true
}

const createPersonalInfoWithGetters = (data) => ({
  ...data,
  get cleanCPF() {
    return this.cpf.replace(/\D/g, '')
  }
})

const PersonalInfo = ({ dataStorage, onNext }) => {
  const [initialFormState, setInitialFormState] = useState(defaultFormState)
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [fetchError, setFetchError] = useState('')
  const [formValues, setFormValues] = useState(dataStorage.value.formData.personalInfo)

  // Add useEffect to sync formValues with dataStorage
  useEffect(() => {
    dataStorage.value = {
      ...dataStorage.value,
      formData: {
        ...dataStorage.value.formData,
        personalInfo: createPersonalInfoWithGetters({
          ...dataStorage.value.formData.personalInfo,
          ...formValues,
          cpf: dataStorage.value.formData.personalInfo.cpf,
        })
      }
    }
  }, [formValues])

  const checkSocietyMembership = useCallback(async (cpf) => {
    if (!cpf) return []

    const cleanCPF = cpf.replace(/\D/g, '')
    const memberSocieties = dataStorage.value.societies
      .filter(society =>
        society.affiliated?.some(member => member.cpf.replace(/\D/g, '') === cleanCPF)
      ).map(society => {
        const member = society.affiliated.find(
          member => member.cpf.replace(/\D/g, '') === cleanCPF
        );
        return {
          shortName: society.shortName,
          memberName: member?.name || '',
          memberEmail: member?.email || ''
        };
      })
    console.log('memberSocieties: ', memberSocieties)

    if (memberSocieties.length === 0) return null;

    const membershipData = {
      fullName: memberSocieties[0].memberName,
      email: memberSocieties[0].memberEmail,
      isMember: true,
      societies: memberSocieties.map(society => society.shortName)
    };

    dataStorage.value = {
      ...dataStorage.value,
      formData: {
        ...dataStorage.value.formData,
        personalInfo: {
          ...dataStorage.value.formData.personalInfo,
          ...membershipData
        },
        membership: membershipData.societies
      }
    }

    return membershipData.societies
  }, [dataStorage.value.societies])

  const fetchAsaasCustomer = async (cpf) => {
    setIsLoading(true)
    setFetchError('')

    try {
      const asaas = new AsaasClient()
      const customers = await asaas.customers.list({ cpfCnpj: cpf })

      if (customers.data?.[0]) {
        const customer = customers.data[0]
        // Parse CRM and state from observations
        const crmMatch = customer.observations?.match(/^CRM\/([A-Z]{2}):\s(\d{1,3}(?:\.\d{3})*|\d+)$/i)
        const newPersonalInfo = {
          userId: customer.id || '',
          fullName: customer.name || '',
          email: customer.email || '',
          phone: formatPhone(customer.mobilePhone) || '',
          zipCode: customer.postalCode || '',
          address: customer.address || '',
          number: customer.addressNumber || '',
          complement: customer.complement || '',
          neighborhood: customer.province || '',
          city: customer.cityName || '',
          state: customer.state || '',
          country: customer.country || 'Brasil',
          crm: crmMatch ? crmMatch[2] : '',
          stateCrm: crmMatch ? crmMatch[1] : '',
          isMember: customer.groups ? true : false,
          societies: customer.groups ? customer.groups.map(group => group.name) : [],
          isNewCustomer: false
        }

        dataStorage.value = {
          ...dataStorage.value,
          formData: {
            ...dataStorage.value.formData,
            personalInfo: createPersonalInfoWithGetters({
              ...dataStorage.value.formData.personalInfo,
              ...newPersonalInfo
            }),
            membership: customer.groups ? customer.groups.map(group => group.name) : []
          }
        }
        // Store initial state for comparison
        setInitialFormState(prev => ({
          ...prev,
          ...newPersonalInfo
        }))
        setFormValues(prev => ({
          ...prev,
          ...newPersonalInfo
        }))
      }
      // else {
      //   dataStorage.value = {
      //     ...dataStorage.value,
      //     formData: {
      //       ...dataStorage.value.formData,
      //       personalInfo: createPersonalInfoWithGetters({
      //         ...defaultFormState,
      //         cpf: dataStorage.value.formData.personalInfo.cpf, // Keep only the CPF
      //         societies: dataStorage.value.formData.personalInfo.societies,
      //         isMember: dataStorage.value.formData.personalInfo.isMember,
      //         fullName: dataStorage.value.formData.personalInfo.fullName,
      //         email: dataStorage.value.formData.personalInfo.email,
      //         isNewCustomer: true
      //       })
      //     }
      //   }
      // }
    } catch (error) {
      console.error('Error fetching Asaas customer:', error)
      setFetchError('Erro ao buscar dados do cliente. Por favor, preencha manualmente.')
    } finally {
      setIsLoading(false)
    }
  }

  const resetFormFields = () => {
    const currentCPF = dataStorage.value.formData.personalInfo.cpf
    const currentSocieties = dataStorage.value.formData.personalInfo.societies
    const currentIsMember = dataStorage.value.formData.personalInfo.isMember
    const fullName = dataStorage.value.formData.personalInfo.fullName
    const email = dataStorage.value.formData.personalInfo.email

    dataStorage.value = {
      ...dataStorage.value,
      formData: {
        ...dataStorage.value.formData,
        personalInfo: createPersonalInfoWithGetters({
          ...defaultFormState,
          cpf: currentCPF,
          // societies: currentSocieties,
          // isMember: currentIsMember,
          // fullName: fullName,
          // email: email,
        })
      }
    }
    setErrors({})
    dataStorage.value = {
      ...dataStorage.value,
      formData: {
        // ...dataStorage.value.formData,
        isCPFValid: false,
      }
    }
    setFetchError('')
  }

  const handleCPFChange = async (e) => {
    const value = e.target.value
    const formattedCPF = formatCPF(value)
    const cleanCPF = formattedCPF.replace(/\D/g, '')
    const isValid = validateCPF(cleanCPF)

    // Reset form fields when CPF changes
    resetFormFields()

    // Also reset form values state
    if (!isValid) {
      setFormValues({
        ...defaultFormState,
        // societies: dataStorage.value.formData.personalInfo.societies,
        // isMember: dataStorage.value.formData.personalInfo.isMember,
        // fullName: dataStorage.value.formData.personalInfo.fullName,
        // email: dataStorage.value.formData.personalInfo.email,
      })
    }

    // Update CPF field
    dataStorage.value = {
      ...dataStorage.value,
      formData: {
        ...dataStorage.value.formData,
        personalInfo: createPersonalInfoWithGetters({
          ...defaultFormState,
          cpf: formattedCPF,
          // societies: dataStorage.value.formData.personalInfo.societies,
          // isMember: dataStorage.value.formData.personalInfo.isMember,
          // fullName: dataStorage.value.formData.personalInfo.fullName,
          // email: dataStorage.value.formData.personalInfo.email,
        }),
        isCPFValid: isValid,
      }
    }

    setErrors(prev => ({ ...prev, cpf: isValid ? '' : 'CPF inválido' }))

    if (isValid && cleanCPF.length === 11) {
      // Check society membership before fetching customer
      await checkSocietyMembership(cleanCPF)
      await fetchAsaasCustomer(cleanCPF)
    }
  }

  const validateForm = () => {
    const newErrors = {}
    const requiredFields = ['cpf', 'fullName', 'email', 'phone', 'zipCode', 'address', 'number', 'neighborhood', 'city', 'state']

    requiredFields.forEach(field => {
      if (!dataStorage.value.formData.personalInfo[field]?.trim()) {
        newErrors[field] = 'Campo obrigatório'
      }
    })

    if (!validateCPF(dataStorage.value.formData.personalInfo.cpf.replace(/\D/g, ''))) {
      newErrors.cpf = 'CPF inválido'
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(dataStorage.value.formData.personalInfo.email)) {
      newErrors.email = 'Email inválido'
    }

    return newErrors
  }

  // Add new function to check if data has changed
  const hasDataChanged = (originalData, currentData) => {
    const fieldsToCompare = [
      'fullName', 'email', 'phone', 'zipCode', 'address',
      'number', 'complement', 'neighborhood', 'city', 'state', 'crm'
    ]

    return fieldsToCompare.some(field => originalData[field] !== currentData[field])
  }

  // Add function to update customer data
  const updateCustomerData = async (customerId, data) => {
    try {
      const asaas = new AsaasClient()
      await asaas.customers.update(customerId, {
        name: data.fullName,
        email: data.email,
        mobilePhone: data.phone.replace(/\D/g, ''),
        postalCode: data.zipCode.replace(/\D/g, ''),
        address: data.address,
        addressNumber: data.number,
        complement: data.complement,
        province: data.neighborhood,
        city: data.city,
        state: data.state,
        // groups: data.societies?.join(',') || '',
        // country: data.country,
        observations: data.crm ? `CRM ${data.crm}/${data.stateCrm}` : ''
      })
    } catch (error) {
      console.error('Error updating customer:', error)
      throw new Error('Falha ao atualizar dados do cliente!')
    }
  }

  // Add after other methods
  const createCustomerData = async (data) => {
    try {
      const asaas = new AsaasClient()
      const customerData = {
        name: data.fullName,
        cpfCnpj: data.cpf.replace(/\D/g, ''),
        email: data.email,
        mobilePhone: data.phone.replace(/\D/g, ''),
        postalCode: data.zipCode.replace(/\D/g, ''),
        address: data.address,
        addressNumber: data.number,
        complement: data.complement,
        province: data.neighborhood,
        city: data.city,
        state: data.state,
        observations: data.crm ? `CRM ${data.crm}/${data.stateCrm}` : '',
        groupName: data.societies?.join(',') || ''
      }

      const response = await asaas.customers.create(customerData)
      return response
    } catch (error) {
      console.error('Error creating customer:', error)
      throw new Error('Falha ao criar cadastro do cliente!')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formErrors = validateForm()

    if (Object.keys(formErrors).length === 0) {
      try {
        setIsLoading(true)

        // Handle customer creation or update
        if (dataStorage.value.formData.personalInfo.isNewCustomer) {
          const newCustomer = await createCustomerData(dataStorage.value.formData.personalInfo)
          dataStorage.value.formData.personalInfo.userId = newCustomer.id
        } else if (
          dataStorage.value.formData.personalInfo.userId &&
          hasDataChanged(initialFormState, dataStorage.value.formData.personalInfo)
        ) {
          await updateCustomerData(dataStorage.value.formData.personalInfo.userId, dataStorage.value.formData.personalInfo)
        }

        // Pass data to next step
        onNext({
          userId: dataStorage.value.formData.personalInfo.userId,
          cpf: dataStorage.value.formData.personalInfo.cpf,
          fullName: dataStorage.value.formData.personalInfo.fullName,
          email: dataStorage.value.formData.personalInfo.email,
          phone: dataStorage.value.formData.personalInfo.phone,
          zipCode: dataStorage.value.formData.personalInfo.zipCode,
          address: dataStorage.value.formData.personalInfo.address,
          number: dataStorage.value.formData.personalInfo.number,
          complement: dataStorage.value.formData.personalInfo.complement,
          neighborhood: dataStorage.value.formData.personalInfo.neighborhood,
          city: dataStorage.value.formData.personalInfo.city,
          state: dataStorage.value.formData.personalInfo.state,
          stateCrm: dataStorage.value.formData.personalInfo.stateCrm,
          country: dataStorage.value.formData.personalInfo.country,
          crm: dataStorage.value.formData.personalInfo.crm,
          isMember: dataStorage.value.formData.personalInfo.isMember,
          societies: dataStorage.value.formData.personalInfo.societies
        })
      } catch (error) {
        setFetchError(error.message)
      } finally {
        setIsLoading(false)
      }
    } else {
      setErrors(formErrors)
    }
  }

  // Simplify handleDataChange to only update formValues
  const handleDataChange = (e) => {
    const { name, value } = e.target
    const formattedValue = name === 'phone' ? formatPhone(value) : value

    setFormValues(prev => ({
      ...prev,
      [name]: formattedValue
    }))
  }

  const formStyle = {
    height: '100%',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
    maxWidth: '100%',
    padding: '1rem',
  }

  return (
    <div className={`${styles.summaryContainer} ${styles.step}`}>
      <h3>Informações Pessoais</h3>
      {fetchError && (
        <div className={styles.fetchError}>
          <p>{fetchError}</p>
        </div>
      )}
      <form onSubmit={handleSubmit} style={formStyle}>

        <div className={`${styles.formGroup} ${styles.formGroupCPF}`}>
          <label>CPF<span className={styles.required}>*</span></label>
          <div className={styles.inputWithValidation}>
            <input
              type="text"
              value={dataStorage.value.formData.personalInfo.cpf}
              onChange={handleCPFChange}
              maxLength={14}
              placeholder="000.000.000-00"
              required
              className={`${styles.input} ${errors.cpf ? styles.error : ''}`}
            />
            {isLoading && <span className={styles.loader} />}
          </div>
          <span className={`${styles.validationMessage} ${dataStorage.value.formData.membership?.length > 0 ? styles.success : errors.cpf ? styles.error : ''
            }`}>
            {errors.cpf || (dataStorage.value.formData.membership?.length > 0 ?
              `Membro: ${dataStorage.value.formData.membership.join(', ')}` : '')}
          </span>
        </div>

        <div className={styles.formRow}>
          <div className={`${styles.formGroup} ${styles.fullName}`}>
            <label>Nome Completo<span className={styles.required}>*</span></label>
            <input
              type="text"
              name="fullName"
              value={dataStorage.value.formData.isCPFValid ? formValues.fullName : ''}
              onChange={handleDataChange}
              className={errors.fullName ? styles.error : ''}
              disabled={!dataStorage.value.formData.isCPFValid}
            />
            <span className={styles.errorMessage}>{errors.fullName || ''}</span>
          </div>

          <div className={`${styles.formGroup} ${styles.emailField}`}>
            <label>Email<span className={styles.required}>*</span></label>
            <input
              type="email"
              name="email"
              value={dataStorage.value.formData.isCPFValid ? formValues.email : ''}
              onChange={handleDataChange}
              className={errors.email ? styles.error : ''}
              disabled={!dataStorage.value.formData.isCPFValid}
            />
            <span className={styles.errorMessage}>{errors.email || ''}</span>
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={`${styles.formGroup} ${styles.phoneField}`}>
            <label>Celular<span className={styles.required}>*</span></label>
            <input
              type="tel"
              name="phone"
              value={dataStorage.value.formData.isCPFValid ? formValues.phone : ''}
              onChange={handleDataChange}
              className={errors.phone ? styles.error : ''}
              disabled={!dataStorage.value.formData.isCPFValid}
              maxLength={15}
            />
            <span className={styles.errorMessage}>{errors.phone || ''}</span>
          </div>
          <div className={`${styles.formGroup} ${styles.stateCrmField}`}>
            <label>CRM</label>
            <input
              type="text"
              name="crm"
              value={dataStorage.value.formData.isCPFValid ? formValues.crm : ''}
              onChange={handleDataChange}
              disabled={!dataStorage.value.formData.isCPFValid}
            />
          </div>

          <div className={`${styles.formGroup} ${styles.stateCrmField}`}>
            <label>UF CRM</label>
            <select
              name="stateCrm"
              value={dataStorage.value.formData.isCPFValid ? formValues.stateCrm : ''}
              onChange={handleDataChange}
              disabled={!dataStorage.value.formData.isCPFValid}
              className={`${styles.formSelect}`}
            >
              <option value=""></option>
              {BRAZILIAN_STATES.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>

          <div className={`${styles.formGroup} ${styles.cepField}`}>
            <label>CEP<span className={styles.required}>*</span></label>
            <input
              type="text"
              name="zipCode"
              value={dataStorage.value.formData.isCPFValid ? formValues.zipCode : ''}
              onChange={handleDataChange}
              className={errors.zipCode ? styles.error : ''}
              disabled={!dataStorage.value.formData.isCPFValid}
            />
            <span className={styles.errorMessage}>{errors.zipCode || ''}</span>
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={`${styles.formGroup} ${styles.addressField}`}>
            <label>Rua<span className={styles.required}>*</span></label>
            <input
              type="text"
              name="address"
              value={dataStorage.value.formData.isCPFValid ? formValues.address : ''}
              onChange={handleDataChange}
              className={errors.address ? styles.error : ''}
              disabled={!dataStorage.value.formData.isCPFValid}
            />
            <span className={styles.errorMessage}>{errors.address || ''}</span>
          </div>

          <div className={`${styles.formGroup} ${styles.numberField}`}>
            <label>Número<span className={styles.required}>*</span></label>
            <input
              type="text"
              name="number"
              value={dataStorage.value.formData.isCPFValid ? formValues.number : ''}
              onChange={handleDataChange}
              className={errors.number ? styles.error : ''}
              disabled={!dataStorage.value.formData.isCPFValid}
            />
            <span className={styles.errorMessage}>{errors.number || ''}</span>
          </div>

          <div className={`${styles.formGroup} ${styles.complementField}`}>
            <label>Complemento</label>
            <input
              type="text"
              name="complement"
              value={dataStorage.value.formData.isCPFValid ? formValues.complement : ''}
              onChange={handleDataChange}
              disabled={!dataStorage.value.formData.isCPFValid}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={`${styles.formGroup} ${styles.neighborhoodField}`}>
            <label>Bairro<span className={styles.required}>*</span></label>
            <input
              type="text"
              name="neighborhood"
              value={dataStorage.value.formData.isCPFValid ? formValues.neighborhood : ''}
              onChange={handleDataChange}
              className={errors.neighborhood ? styles.error : ''}
              disabled={!dataStorage.value.formData.isCPFValid}
            />
            <span className={styles.errorMessage}>{errors.neighborhood || ''}</span>
          </div>

          <div className={`${styles.formGroup} ${styles.cityField}`}>
            <label>Cidade<span className={styles.required}>*</span></label>
            <input
              type="text"
              name="city"
              value={dataStorage.value.formData.isCPFValid ? formValues.city : ''}
              onChange={handleDataChange}
              className={errors.city ? styles.error : ''}
              disabled={!dataStorage.value.formData.isCPFValid}
            />
            <span className={styles.errorMessage}>{errors.city || ''}</span>
          </div>

          <div className={`${styles.formGroup} ${styles.stateField}`}>
            <label>Estado<span className={styles.required}>*</span></label>
            <select
              name="state"
              value={dataStorage.value.formData.isCPFValid ? formValues.state : ''}
              onChange={handleDataChange}
              disabled={!dataStorage.value.formData.isCPFValid}
              className={`${styles.formSelect} ${errors.state ? styles.error : ''}`}
            >
              <option value=""></option>
              {BRAZILIAN_STATES.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
            <span className={styles.errorMessage}>{errors.state || ''}</span>
          </div>
        </div>

        <div className={styles.buttonGroup}>
          {/* <button type="button" onClick={onPrevious} className={styles.secondaryButton}>
            Anterior
          </button> */}
          <button
            type="submit"
            className={styles.primaryButton}
            disabled={!dataStorage.value.formData.isCPFValid || isLoading}
          >
            Próximo
          </button>
        </div>
      </form>
    </div>
  )
}

export default PersonalInfo