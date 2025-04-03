import { useRegistration } from '../../../contexts/RegistrationContext';
import styles from './SummaryStep.module.css';

const SummaryStep = () => {
    const { formData, setCurrentStep } = useRegistration();
    const { personalInfo, category, selectedItems } = formData;

    const calculateTotal = () => {
        let total = 0;

        if (selectedItems.journey) {
            const journeyPrice = selectedItems.journey.getCurrentPrice();
            total += parseFloat(journeyPrice.value.replace(/[^\d,]/g, '').replace(',', '.'));
        }

        selectedItems.workshops?.forEach(workshop => {
            const workshopPrice = workshop.getCurrentPrice();
            total += parseFloat(workshopPrice.value.replace(/[^\d,]/g, '').replace(',', '.'));
        });

        selectedItems.courses?.forEach(course => {
            const coursePrice = course.getCurrentPrice();
            total += parseFloat(coursePrice.value.replace(/[^\d,]/g, '').replace(',', '.'));
        });

        if (selectedItems.dayUse) {
            const dayUsePrice = selectedItems.dayUse.getCurrentPrice();
            total += parseFloat(dayUsePrice.value.replace(/[^\d,]/g, '').replace(',', '.'));
        }

        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(total);
    };

    const handlePrevious = () => {
        setCurrentStep(3);
    };

    const handleNext = () => {
        setCurrentStep(5);
    };

    return (
        <div className={styles.stepContent}>
            <h2 className={styles.title}>Resumo do Pedido</h2>

            <div className={styles.summaryCard}>
                <section className={styles.section}>
                    <h3 className={styles.sectionTitle}>Dados Pessoais</h3>
                    <div className={styles.infoGrid}>
                        <div className={styles.infoItem}>
                            <span className={styles.label}>Nome:</span>
                            <span className={styles.value}>{personalInfo.fullName}</span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.label}>CPF:</span>
                            <span className={styles.value}>{personalInfo.cpf}</span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.label}>Email:</span>
                            <span className={styles.value}>{personalInfo.email}</span>
                        </div>
                    </div>
                </section>

                <section className={styles.section}>
                    <h3 className={styles.sectionTitle}>Categoria</h3>
                    <div className={styles.categoryInfo}>
                        <span className={styles.value}>{category.title}</span>
                        {category.member && <span className={styles.memberBadge}>Membro</span>}
                    </div>
                </section>

                <section className={styles.section}>
                    <h3 className={styles.sectionTitle}>Produtos Selecionados</h3>
                    
                    {selectedItems.journey && (
                        <div className={styles.productItem}>
                            <span className={styles.productName}>
                                {selectedItems.journey.title}
                            </span>
                            <span className={styles.productPrice}>
                                {selectedItems.journey.getCurrentPrice().value}
                            </span>
                        </div>
                    )}

                    {selectedItems.workshops?.map((workshop, index) => (
                        <div key={index} className={styles.productItem}>
                            <span className={styles.productName}>{workshop.title}</span>
                            <span className={styles.productPrice}>
                                {workshop.getCurrentPrice().value}
                            </span>
                        </div>
                    ))}

                    {selectedItems.courses?.map((course, index) => (
                        <div key={index} className={styles.productItem}>
                            <span className={styles.productName}>{course.title}</span>
                            <span className={styles.productPrice}>
                                {course.getCurrentPrice().value}
                            </span>
                        </div>
                    ))}

                    {selectedItems.dayUse && (
                        <div className={styles.productItem}>
                            <span className={styles.productName}>
                                {selectedItems.dayUse.title}
                            </span>
                            <span className={styles.productPrice}>
                                {selectedItems.dayUse.getCurrentPrice().value}
                            </span>
                        </div>
                    )}
                </section>

                <div className={styles.totalSection}>
                    <span className={styles.totalLabel}>Total:</span>
                    <span className={styles.totalValue}>{calculateTotal()}</span>
                </div>
            </div>

            <div className={styles.buttonGroup}>
                <button 
                    type="button" 
                    onClick={handlePrevious}
                    className={styles.backButton}
                >
                    Voltar
                </button>
                <button 
                    type="button" 
                    onClick={handleNext}
                    className={styles.nextButton}
                >
                    Confirmar e Pagar
                </button>
            </div>
        </div>
    );
};

export default SummaryStep;