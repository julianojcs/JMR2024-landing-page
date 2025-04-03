import { useState, useEffect } from 'react';
import { useRegistration } from '../../../contexts/RegistrationContext';
import { fetchCustomerByCPF, checkMembership, updateCustomerData, createCustomerData } from '../../../services/api';
import { formatCPF, formatPhone, formatCEP, formatName } from '../../../utils';
import { validateCPF, validateEmail } from '../../../utils';
import styles from './PersonalInfoStep.module.css';

const PersonalInfoStep = () => {
    const { formData, updateFormData, setCurrentStep } = useRegistration();
  const [initialFormState, setInitialFormState] = useState(formData.personalInfo);
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [cpfVerified, setCpfVerified] = useState(false);

    useEffect(() => {
        // If there's a CPF already filled in formData, validate and set cpfVerified
        const cpf = formData.personalInfo.cpf;
        if (cpf?.length === 14 && validateCPF(cpf)) {
            setCpfVerified(true);
        }
    }, []); // Empty dependency array means this runs once when component mounts

    const requiredFields = [
        { name: 'cpf', text: 'CPF' },
        { name: 'fullName', text: 'Nome Completo' },
        { name: 'email', text: 'Email' },
        { name: 'phone', text: 'Telefone' },
        { name: 'zipCode', text: 'CEP' },
        { name: 'address', text: 'Endereço' },
        { name: 'number', text: 'Número' },
        { name: 'neighborhood', text: 'Bairro' },
        { name: 'city', text: 'Cidade' },
        { name: 'state', text: 'Estado' }
    ];

    const optionalFields = [
        { name: 'complement', text: 'Complemento' },
        { name: 'crm', text: 'CRM' },
        { name: 'stateCrm', text: 'Estado do CRM' }
    ];

    const resetFormFields = (membershipData) => {
        updateFormData('personalInfo', {
            userId: '',
            fullName: membershipData?.fullName || '',
            email: membershipData?.email || '',
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
            isMember: membershipData?.isMember || false,
            societies: membershipData?.societies || [],
            isNewCustomer: true
        });
    };

    const checkSocietyMembership = async (cpf) => {
        try {
            const membershipData = await checkMembership(cpf, formData.societies);

            updateFormData('personalInfo', {
                fullName: membershipData.fullName,
                email: membershipData.email,
                isMember: membershipData.isMember,
                societies: membershipData.societies
            });

            console.log('Membership Data:', membershipData);
            console.log('formData:', formData);

            return membershipData;
        } catch (error) {
            console.error('Error checking membership:', error);
            return null;
        }
    };

    const handleCPFChange = async (e) => {
        const cpf = formatCPF(e.target.value);
        updateFormData('personalInfo', { cpf });

        // Limpa erro anterior do CPF
        setErrors(prev => ({ ...prev, cpf: '' }));

        if (cpf.length === 14) {
            if (!validateCPF(cpf)) {
                setErrors(prev => ({ ...prev, cpf: 'CPF inválido' }));
                return;
            }

            setIsLoading(true);
            try {
                const membershipData = await checkSocietyMembership(cpf);

                const customer = await fetchCustomerByCPF(cpf);
                if (customer) {
                    updatePersonalInfoData(customer);
                } else {
                    resetFormFields(membershipData);
                }

                setCpfVerified(true);
            } catch (error) {
                console.error('Error:', error);
                setErrors(prev => ({
                    ...prev,
                    cpf: 'Erro ao verificar CPF. Por favor, tente novamente.'
                }));
            } finally {
                setIsLoading(false);
            }
        }
    };

    const updatePersonalInfoData = (customer) => {
      const newPersonalInfo = {
        userId: customer.id,
        fullName: formatName(customer.name),
        email: customer.email.toLowerCase(),
        phone: customer.phone,
        zipCode: customer.zipCode,
        address: formatName(customer.address),
        number: customer.number,
        complement: customer.complement,
        neighborhood: formatName(customer.neighborhood),
        city: formatName(customer.city),
        state: customer.state,
        crm: customer.crm,
        stateCrm: customer.stateCrm,
        isNewCustomer: false
      }
      updateFormData('personalInfo', newPersonalInfo);
      // Store initial state for comparison
      setInitialFormState(prev => ({
        ...prev,
        ...newPersonalInfo
      }))
    };

    const handleChange = (e, formatter = null) => {
        const { name, value } = e.target;
        let formattedValue = formatter ? formatter(value) : value;

        // Format specific fields
        switch (name) {
            case 'email':
                formattedValue = formattedValue.toLowerCase();
                // Clear previous email error
                setErrors(prev => ({ ...prev, email: '' }));
                // Validate email if there's a value
                if (formattedValue && !validateEmail(formattedValue)) {
                    setErrors(prev => ({ ...prev, email: 'Email inválido' }));
                }
                break;
            case 'address':
            case 'neighborhood':
            case 'city':
                // Don't format while typing to maintain cursor position
                break;
            default:
                break;
        }

        updateFormData('personalInfo', {
            [name]: formattedValue
        });
    };

    // Add handler for address-related fields
    const handleAddressFieldBlur = (e) => {
        const { name, value } = e.target;
        const formattedValue = formatName(value);

        updateFormData('personalInfo', {
            [name]: formattedValue
        });
    };

    const handleNameBlur = (e) => {
        const { name, value } = e.target;
        const formattedName = formatName(value);

        updateFormData('personalInfo', {
            [name]: formattedName
        });
    };

    const isFieldRequired = (fieldName) =>
        requiredFields.some(field => field.name === fieldName);

    const getFieldLabel = (fieldName) => {
        const requiredField = requiredFields.find(field => field.name === fieldName);
        const optionalField = optionalFields.find(field => field.name === fieldName);
        return (requiredField || optionalField)?.text || fieldName;
    };

    const renderLabel = (fieldName) => (
        <label
            htmlFor={fieldName}
            {...(isFieldRequired(fieldName) && { 'data-required': true })}
        >
            {getFieldLabel(fieldName)}
        </label>
    );

    const validateForm = () => {
        const newErrors = {};
        const { personalInfo } = formData;

        // Validação específica para CPF
        if (!personalInfo.cpf?.trim()) {
            newErrors.cpf = 'CPF é obrigatório';
        } else if (!validateCPF(personalInfo.cpf)) {
            newErrors.cpf = 'CPF inválido';
        }

        // Validação específica para email
        if (!personalInfo.email?.trim()) {
            newErrors.email = 'Email é obrigatório';
        } else if (!validateEmail(personalInfo.email)) {
            newErrors.email = 'Email inválido';
        }

        // Validação dos demais campos obrigatórios
        requiredFields.forEach(field => {
            if (field.name !== 'cpf' && field.name !== 'email' && !personalInfo[field.name]?.trim()) {
                newErrors[field.name] = `${field.text} é obrigatório`;
            }
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

  // Check if data has changed
  const hasDataChanged = (originalData, currentData) => {
    const fieldsToCompare = [
      'fullName', 'email', 'phone', 'zipCode', 'address',
      'number', 'complement', 'neighborhood', 'city', 'state', 'crm', 'stateCrm'
    ]

    return fieldsToCompare.some(field => originalData[field] !== currentData[field])
  }

    const handleNext = async () => {
        if (validateForm()) {
            setIsLoading(true);
            const { personalInfo } = formData;
            const isNewCustomer = personalInfo.isNewCustomer;
            const customerId = personalInfo.userId;

            try {
                if (isNewCustomer) {
                    const newCustomer = await createCustomerData(personalInfo);
                    updateFormData('personalInfo', {
                        userId: newCustomer.id,
                        isNewCustomer: false
                    });
                } else {
                  if (personalInfo.userId && hasDataChanged(initialFormState, personalInfo)) {
                      await updateCustomerData(customerId, personalInfo);
                    }
                }
            } catch (error) {
                console.error('Error saving customer data:', error);
                setErrors(prev => ({
                    ...prev,
                    cpf: 'Erro ao salvar dados do cliente. Por favor, tente novamente.'
                }));
            } finally {
                setIsLoading(false);
            }

            setCurrentStep(2);
        }
    };

    return (
        <div className={styles.stepContent}>
            <h2 className={styles.title}>Dados Pessoais</h2>
            <form>
                <div className={`${styles.formGroup} ${styles.cpfGroup}`}>
                    {renderLabel('cpf')}
                    <div
                        className={styles.cpfInputWrapper}
                        data-has-societies={formData.personalInfo.societies?.length > 0}
                        data-societies={formData.personalInfo.societies?.join(', ')}
                    >
                        <input
                            type="text"
                            id="cpf"
                            name="cpf"
                            className={styles.cpfInput}
                            value={formData.personalInfo.cpf}
                            onChange={handleCPFChange}
                            maxLength={14}
                            disabled={isLoading}
                        />
                    </div>
                    {errors.cpf && <span className={styles.error}>{errors.cpf}</span>}
                </div>

                {cpfVerified && (
                    <>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                {renderLabel('fullName')}
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.personalInfo.fullName}
                                    onChange={handleChange}
                                    onBlur={handleNameBlur}
                                />
                                {errors.fullName && <span className={styles.error}>{errors.fullName}</span>}
                            </div>

                            <div className={styles.formGroup}>
                                {renderLabel('email')}
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.personalInfo.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <span className={styles.error}>{errors.email}</span>}
                            </div>
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                {renderLabel('phone')}
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    value={formData.personalInfo.phone}
                                    onChange={e => handleChange(e, formatPhone)}
                                />
                                {errors.phone && <span className={styles.error}>{errors.phone}</span>}
                            </div>

                            <div className={styles.formGroup}>
                                {renderLabel('zipCode')}
                                <input
                                    type="text"
                                    id="zipCode"
                                    name="zipCode"
                                    value={formData.personalInfo.zipCode}
                                    onChange={e => handleChange(e, formatCEP)}
                                />
                                {errors.zipCode && <span className={styles.error}>{errors.zipCode}</span>}
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            {renderLabel('address')}
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={formData.personalInfo.address}
                                onChange={handleChange}
                                onBlur={handleAddressFieldBlur}
                            />
                            {errors.address && <span className={styles.error}>{errors.address}</span>}
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                {renderLabel('number')}
                                <input
                                    type="text"
                                    id="number"
                                    name="number"
                                    value={formData.personalInfo.number}
                                    onChange={handleChange}
                                />
                                {errors.number && <span className={styles.error}>{errors.number}</span>}
                            </div>

                            <div className={styles.formGroup}>
                                {renderLabel('complement')}
                                <input
                                    type="text"
                                    id="complement"
                                    name="complement"
                                    value={formData.personalInfo.complement}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                {renderLabel('neighborhood')}
                                <input
                                    type="text"
                                    id="neighborhood"
                                    name="neighborhood"
                                    value={formData.personalInfo.neighborhood}
                                    onChange={handleChange}
                                    onBlur={handleAddressFieldBlur}
                                />
                                {errors.neighborhood && <span className={styles.error}>{errors.neighborhood}</span>}
                            </div>

                            <div className={styles.formGroup}>
                                {renderLabel('city')}
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={formData.personalInfo.city}
                                    onChange={handleChange}
                                    onBlur={handleAddressFieldBlur}
                                />
                                {errors.city && <span className={styles.error}>{errors.city}</span>}
                            </div>

                            <div className={styles.formGroup}>
                                {renderLabel('state')}
                                <input
                                    type="text"
                                    id="state"
                                    name="state"
                                    value={formData.personalInfo.state}
                                    onChange={handleChange}
                                />
                                {errors.state && <span className={styles.error}>{errors.state}</span>}
                            </div>
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                {renderLabel('crm')}
                                <input
                                    type="text"
                                    id="crm"
                                    name="crm"
                                    value={formData.personalInfo.crm}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                {renderLabel('stateCrm')}
                                <input
                                    type="text"
                                    id="stateCrm"
                                    name="stateCrm"
                                    value={formData.personalInfo.stateCrm}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className={styles.buttonGroup}>
                            <button
                                type="button"
                                onClick={handleNext}
                                className={styles.nextButton}
                            >
                                Próximo
                            </button>
                        </div>
                    </>
                )}
            </form>
        </div>
    );
};

export default PersonalInfoStep;