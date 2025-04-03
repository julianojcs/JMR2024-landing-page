import { createContext, useContext, useState } from 'react';
import { Journey, Course, Workshop, DayUse, Category } from '../models';
import { eventData as dataEvent } from '../data/constants';

const RegistrationContext = createContext();

export function RegistrationProvider({ children, year }) {
    const [eventData] = useState(dataEvent[year]);
    const [formData, setFormData] = useState({
        eventData: eventData.registrationForm,
        societies: eventData.societies,
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
            societies: []
        },
        selectedItems: {
            journey: null,
            workshops: [],
            courses: [],
            dayUse: null
        },
        receipt: {},
        category: {},
        totalAmount: 0
    });

    const [currentStep, setCurrentStep] = useState(1);
    const [paymentResponse, setPaymentResponse] = useState(null);

    const updateFormData = (section, dataMember) => {
        setFormData(prev => {
            // Special handling for receipt which is not an object to be merged
            if (section === 'receipt') {
                return {
                    ...prev,
                    receipt: dataMember // Direct assignment, no spreading
                };
            }

            // Normal handling for objects that need to be merged
            return {
                ...prev,
                [section]: { ...prev[section], ...dataMember }
            };
        });
    };

    const calculateTotal = () => {
        let total = 0;
        const { journey, workshops, courses, dayUse } = formData.selectedItems;

        // Journey calculation
        if (journey instanceof Journey) {
            const price = journey.getCurrentPrice();
            if (price?.value) {
                total += parseFloat(price.value.replace(/[^\d,.]/g, '').replace(',', '.'));
            }
        }

        // Workshops calculation
        if (Array.isArray(workshops)) {
            workshops.forEach(workshop => {
                if (workshop instanceof Workshop) {
                    const price = workshop.getCurrentPrice();
                    if (price?.value) {
                        total += parseFloat(price.value.replace(/[^\d,.]/g, '').replace(',', '.'));
                    }
                }
            });
        }

        // Courses calculation
        if (Array.isArray(courses)) {
            courses.forEach(course => {
                if (course instanceof Course) {
                    const price = course.getCurrentPrice();
                    if (price?.value) {
                        total += parseFloat(price.value.replace(/[^\d,.]/g, '').replace(',', '.'));
                    }
                }
            });
        }

        // DayUse calculation
        if (dayUse instanceof DayUse) {
            const price = dayUse.getCurrentPrice();
            if (price?.value) {
                total += parseFloat(price.value.replace(/[^\d,.]/g, '').replace(',', '.'));
            }
        }

        // Format total to BRL currency
        const formattedTotal = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(total);

        setFormData(prev => ({
            ...prev,
            totalAmount: formattedTotal
        }));

        return formattedTotal;
    };

    const validatePersonalInfo = () => {
        const { personalInfo } = formData;
        const required = [
            'fullName',
            'cpf',
            'email',
            'phone',
            'zipCode',
            'address',
            'city',
            'state'
        ];

        return required.every(field => personalInfo[field]?.trim());
    };

    const validateCategory = () => {
        return formData.category instanceof Category;
    };

    const validateSelectedItems = () => {
        const { journey, workshops, courses, dayUse } = formData.selectedItems;
        return journey || workshops.length > 0 || courses.length > 0 || dayUse;
    };

    const canProceedToNextStep = () => {
        switch (currentStep) {
            case 1:
                return validatePersonalInfo();
            case 2:
                return validateCategory();
            case 3:
                return validateSelectedItems();
            case 4:
                return true; // Summary step
            default:
                return false;
        }
    };

    return (
        <RegistrationContext.Provider value={{
            formData,
            currentStep,
            paymentResponse,
            eventData,
            updateFormData,
            setCurrentStep,
            setPaymentResponse,
            calculateTotal,
            validatePersonalInfo,
            validateCategory,
            validateSelectedItems,
            canProceedToNextStep
        }}>
            {children}
        </RegistrationContext.Provider>
    );
}

export const useRegistration = () => useContext(RegistrationContext);