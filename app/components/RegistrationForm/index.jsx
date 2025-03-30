'use client'

import { useState } from 'react'
import { eventData } from '../../data/constants'
import AsaasClient from '../../lib/AsaasClient'
import styles from './RegistrationForm.module.css'
import { useSignal, useSignalEffect } from '@preact/signals-react'
import { storage } from '../../lib/firebase'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
// Components for each step
import PersonalInfo from './Steps/PersonalInfo'
import CategorySelection from './Steps/CategorySelection'
import Summary from './Steps/Summary'
import RegistrationResponse from './Steps/RegistrationResponse'

const RegistrationForm = ({ year }) => {
  const [step, setStep] = useState(1)
  const [paymentResponse, setPaymentResponse] = useState(null)
  const [uploadError, setUploadError] = useState(null)
  const dataStorage = useSignal({
    categories: eventData[year].registrationForm.categories,
    societies: eventData[year].societies,
    step: 1,
    formData: {
      category: null,
      receipt: null,
      membership: [],
      paymentInfo: null,
      personalInfo: {
        userId: '',
        cpf: '',
        get cleanCPF() {
          return this.cpf.replace(/\D/g, '')
        },
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
      },
      isCPFValid: false,
      price: null,
      selectedCourse: null,
      selectedDay: null
    }
  })

  const normalizedName = ((name) => {
    // Normalize the name by removing special characters and replacing spaces with hyphens
    return name
      .normalize('NFD')
      .replace(/[^\w\s]/gi, '')  // Remove special characters
      .replace(/[\u0300-\u036f]/g, '')  // Remove accents
      .replace(/\s+/g, '-')             // Replace spaces with hyphens
      .toLowerCase()                     // Convert to lowercase
  })

  useSignalEffect(() => {
    console.log('dataStorage.value: ', dataStorage.value)
  })

  const handlePrevious = () => {
    if (step > 1) {
      setStep(prev => prev - 1)
    }
  }

  const handleNext = async (stepData, stepName) => {
    try {
      setStep(prev => prev + 1)
    } catch (error) {
      console.error('Error updating form data:', error)
    }
  }

  const createPayment = async (paymentData) => {
    try {
      const asaas = new AsaasClient()
      let externalReference = null
      console.log('Payment data:', paymentData)
      console.log('process.env.NEXT_PUBLIC_SAVE_PAYMENTS_TO_DB:', process.env.NEXT_PUBLIC_SAVE_PAYMENTS_TO_DB)

      // Check if we should save to database
      if (process.env.NEXT_PUBLIC_SAVE_PAYMENTS_TO_DB === 'true') {
        // Save payment to our database first
        const { rows } = await sql`
          INSERT INTO payments (
            customer_id,
            value,
            description,
            due_date
          ) VALUES (
            ${paymentData.customer},
            ${paymentData.value},
            ${paymentData.description},
            ${paymentData.dueDate}
          )
          RETURNING id
        `
        externalReference = rows[0].id.toString()
      }

      // Create payment in Asaas
      const asaasPayment = await asaas.payments.create({
        ...paymentData,
        externalReference
      })
      console.log('asaasPayment: ', asaasPayment)

      // If we saved to database, update with Asaas payment ID
      if (externalReference) {
        await sql`
          UPDATE payments
          SET asaas_payment_id = ${asaasPayment.id}
          WHERE id = ${parseInt(externalReference)}
        `
      }

      return asaasPayment
    } catch (error) {
      console.error('Error creating payment:', error)
      throw error
    }
  }

  const handleSubmit = async () => {
    const formData = dataStorage.value.formData
    const personalInfo = formData.personalInfo
    const categoryTitle = formData.category.title
    const price = formData.price
    const course = formData.selectedCourse
    const day = formData.selectedDay
    const receipt = formData.receipt

    try {
      // Create dynamic description based on available data
      let description = `Inscrição ${categoryTitle}`
      if (day) { description += ` - Dia ${day}` }
      if (course) { description += ` - Curso: ${course}` }
      description += ` - ${personalInfo.fullName}`

      const numericPrice = parseFloat(price.replace(/[^\d,.-]/g, '').replace(',', '.')).toFixed(2)
      const response = await createPayment({
        billingType: 'UNDEFINED',
        customer: personalInfo.userId,
        name: personalInfo.fullName,
        value: numericPrice,
        dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        description: description,
        externalReference: null,
        callback: {
          successUrl: `https://jornada.srmg.org.br/api/asaas/payments/success`
        }
      })

      setPaymentResponse(response)

      // If payment was successful and we have a receipt to upload
      if (response.id && receipt) {
        try {
          // Create a unique filename using customer CPF and timestamp
          const fileExtension = receipt.name.split('.').pop()
          const fileName = `${normalizedName(personalInfo.fullName)}_${personalInfo.cleanCPF}_${response.id}.${fileExtension}`

          // Create storage reference
          const storageRef = ref(storage, `JMR2025/Comprovantes/${fileName}`)
          const uploadTask = uploadBytesResumable(storageRef, receipt)

          // Upload the file
          await new Promise((resolve, reject) => {
            uploadTask.on(
              'state_changed',
              (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                console.log('Upload is ' + progress + '% done')
              },
              (error) => {
                console.error('Upload failed:', error)
                reject(error)
              },
              async () => {
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
                console.log('File available at', downloadURL)
                resolve(downloadURL)
              }
            )
          })
        } catch (error) {
          setUploadError(error)
        }
      }

      // Move to response step instead of redirect
      setStep(4)
    } catch (error) {
      console.error('Error submitting form:', error)
      setUploadError(error)
      setStep(4)
    }
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <PersonalInfo
            dataStorage={dataStorage}
            societies={eventData[year].societies}
            onNext={(data) => handleNext(data, 'personalInfo')}
          />
        )
      case 2:
        return (
          <CategorySelection
            dataStorage={dataStorage}
            onPrevious={handlePrevious}
            onNext={(data) => handleNext(data, 'category')}
          />
        )
      case 3:
        return (
          <Summary
            dataStorage={dataStorage}
            onPrevious={handlePrevious}
            onSubmit={handleSubmit}
          />
        )
      case 4:
        return (
          <RegistrationResponse
            paymentResponse={paymentResponse}
            uploadError={uploadError}
            categoryTitle={dataStorage.value.formData.category.title}
            personalInfo={dataStorage.value.formData.personalInfo}
            price={dataStorage.value.formData.price}
            selectedDay={dataStorage.value.formData.selectedDay}
            selectedCourse={dataStorage.value.formData.selectedCourse}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.formSection}>
        <h1 className={styles.title}>Formulário de Inscrição</h1>
        <div className={styles.stepIndicator}>
          Passo {step} de 4
        </div>
        {renderStep()}
      </div>
    </div>
  )
}

export default RegistrationForm