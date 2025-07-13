import { useRegistration } from '../../contexts/RegistrationContext';
import PersonalInfoStep from './Steps/PersonalInfoStep';
import CategorySelectionStep from './Steps/CategorySelectionStep';
import ProductSelectionStep from './Steps/ProductSelectionStep';
import SummaryStep from './Steps/SummaryStep';
import PaymentConfirmationStep from './Steps/PaymentConfirmationStep';
import styles from './RegistrationForm.module.css';

const RegistrationSteps = () => {
  const { currentStep } = useRegistration();

  const renderStep = () => {
    switch (currentStep) {
      case 1: return <PersonalInfoStep />;
      case 2: return <CategorySelectionStep />;
      case 3: return <ProductSelectionStep />;
      case 4: return <SummaryStep />;
      case 5: return <PaymentConfirmationStep />;
      default: return null;
    }
  };

  return (
    <div className={styles.stepsContainer}>
      <div className={styles.stepIndicator}>
        Passo {currentStep} de 5
      </div>
      {renderStep()}
    </div>
  );
};

export default RegistrationSteps;