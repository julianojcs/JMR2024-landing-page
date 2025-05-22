import styles from './Subscriptions.module.css';
import SubscriptionsList from '../../SubscriptionsList';

const Subscriptions = ({ subscriptions, onToggleView, onNewSubscription }) => {
  return (
    <div className={styles.container}>
      <SubscriptionsList subscriptions={subscriptions} />

      <div className={styles.buttonGroup}>
        <button
          type="button"
          onClick={onToggleView}
          className={styles.secondaryButton}
        >
          Meus Dados Pessoais
        </button>

        <button
          type="button"
          onClick={onNewSubscription}
          className={styles.primaryButton}
        >
          Nova Inscrição
        </button>
      </div>
    </div>
  );
};

export default Subscriptions;