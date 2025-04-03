import { useEffect, useState } from 'react';
import { useRegistration } from '../../../contexts/RegistrationContext';
import styles from './PaymentResponseStep.module.css';

const PaymentResponseStep = () => {
    const { formData, paymentResponse, setCurrentStep } = useRegistration();
    const [isLoading, setIsLoading] = useState(false);

    const handlePayment = async () => {
        setIsLoading(true);
        try {
            window.open(paymentResponse.paymentLink, '_blank');
        } catch (error) {
            console.error('Error opening payment link:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDownloadBoleto = () => {
        if (paymentResponse?.boletoUrl) {
            window.open(paymentResponse.boletoUrl, '_blank');
        }
    };

    const handleClose = () => {
        // Reset form and close modal
        window.location.href = '/';
    };

    return (
        <div className={styles.stepContent}>
            <div className={styles.responseCard}>
                <div className={styles.header}>
                    <div className={styles.icon}>
                        {paymentResponse?.success ? '✓' : '⚠️'}
                    </div>
                    <h2 className={styles.title}>
                        {paymentResponse?.success 
                            ? 'Inscrição Realizada com Sucesso!' 
                            : 'Aguardando Pagamento'}
                    </h2>
                </div>

                <div className={styles.details}>
                    <div className={styles.infoItem}>
                        <span className={styles.label}>Número da Inscrição:</span>
                        <span className={styles.value}>{paymentResponse?.registrationNumber}</span>
                    </div>
                    <div className={styles.infoItem}>
                        <span className={styles.label}>Status:</span>
                        <span className={`${styles.status} ${styles[paymentResponse?.status]}`}>
                            {paymentResponse?.statusText}
                        </span>
                    </div>
                    {paymentResponse?.expirationDate && (
                        <div className={styles.infoItem}>
                            <span className={styles.label}>Vencimento:</span>
                            <span className={styles.value}>{paymentResponse.expirationDate}</span>
                        </div>
                    )}
                </div>

                <div className={styles.summary}>
                    <h3 className={styles.summaryTitle}>Resumo da Inscrição</h3>
                    <div className={styles.summaryContent}>
                        <p><strong>Nome:</strong> {formData.personalInfo.fullName}</p>
                        <p><strong>Email:</strong> {formData.personalInfo.email}</p>
                        <p><strong>Categoria:</strong> {formData.category.title}</p>
                        <div className={styles.products}>
                            <strong>Produtos:</strong>
                            <ul>
                                {formData.selectedItems.journey && (
                                    <li>{formData.selectedItems.journey.title}</li>
                                )}
                                {formData.selectedItems.workshops?.map((workshop, index) => (
                                    <li key={`workshop-${index}`}>{workshop.title}</li>
                                ))}
                                {formData.selectedItems.courses?.map((course, index) => (
                                    <li key={`course-${index}`}>{course.title}</li>
                                ))}
                                {formData.selectedItems.dayUse && (
                                    <li>{formData.selectedItems.dayUse.title}</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.buttonGroup}>
                    {paymentResponse?.paymentLink && (
                        <button
                            type="button"
                            onClick={handlePayment}
                            className={styles.paymentButton}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Processando...' : 'Efetuar Pagamento'}
                        </button>
                    )}
                    {paymentResponse?.boletoUrl && (
                        <button
                            type="button"
                            onClick={handleDownloadBoleto}
                            className={styles.downloadButton}
                        >
                            Baixar Boleto
                        </button>
                    )}
                    <button
                        type="button"
                        onClick={handleClose}
                        className={styles.closeButton}
                    >
                        Fechar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentResponseStep;