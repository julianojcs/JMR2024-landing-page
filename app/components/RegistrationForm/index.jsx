'use client'

import { RegistrationProvider } from '../../contexts/RegistrationContext';
import RegistrationSteps from './RegistrationSteps';
import styles from './RegistrationForm.module.css';

const RegistrationForm = ({ year, onClose }) => {
  return (
    <RegistrationProvider year={year} onCloseModal={onClose}>
      <div className={styles.container}>
        <div className={styles.formSection}>
          <h1 className={styles.title}>Formulário de Inscrição</h1>
          <RegistrationSteps />
        </div>
      </div>
    </RegistrationProvider>
  );
};

export default RegistrationForm;