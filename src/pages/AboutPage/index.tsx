import styles from '../page.module.css';

export function AboutPage() {
  return (
    <section className={styles.page}>
      <div className={styles.intro}>
        <h1 className={styles.title}>О проекте</h1>
        <p className={styles.lead}>
          Проект развивается как компактное SPA-приложение с прицелом на понятную архитектуру,
          хорошую производительность и дальнейшее развитие клиентской части.
        </p>
      </div>
    </section>
  );
}
