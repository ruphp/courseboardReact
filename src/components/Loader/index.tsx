import styles from './loader.module.css';

interface LoaderProps {
  label?: string;
}

export function Loader({label = 'Загрузка данных...'}: LoaderProps) {
  return (
    <div className={styles.loader} role="status" aria-live="polite">
      <div className={styles.spinner} aria-hidden="true" />
      <p className={styles.label}>{label}</p>
    </div>
  );
}
