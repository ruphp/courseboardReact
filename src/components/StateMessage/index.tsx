import styles from './state-message.module.css';

interface StateMessageProps {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void | Promise<void>;
}

export function StateMessage({title, description, actionLabel, onAction}: StateMessageProps) {
  return (
    <section className={styles.message}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.text}>{description}</p>
      {actionLabel && onAction ? (
        <button className={styles.action} type="button" onClick={() => void onAction()}>
          {actionLabel}
        </button>
      ) : null}
    </section>
  );
}
