import styles from '../page.module.css';

export function HomePage() {
  return (
    <section className={styles.page}>
      <div className={styles.intro}>
        <h1 className={styles.title}>Современный каталог учебных курсов</h1>
        <p className={styles.lead}>
          Courseboard React показывает, как может выглядеть легкое SPA-приложение с роутингом,
          модульной структурой, mock API и подготовкой к реальному backend.
        </p>
      </div>
    </section>
  );
}
