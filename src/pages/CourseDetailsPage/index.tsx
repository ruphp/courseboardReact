import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {Loader} from '../../components/Loader';
import {StateMessage} from '../../components/StateMessage';
import {getCourseById} from '../../modules/courses/api';
import type {CourseDetails} from '../../modules/courses/types';
import styles from '../page.module.css';

export function CourseDetailsPage() {
  const {courseId = ''} = useParams();
  const [course, setCourse] = useState<CourseDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [notFound, setNotFound] = useState(false);

  async function loadCourse() {
    if (!courseId) {
      setCourse(null);
      setError('');
      setNotFound(true);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError('');
    setNotFound(false);

    try {
      const data = await getCourseById(courseId);

      if (!data) {
        setCourse(null);
        setNotFound(true);
        return;
      }

      setCourse(data);
    } catch {
      setCourse(null);
      setError('Не удалось загрузить страницу курса. Попробуй повторить запрос или отключить mock-ошибку в адресной строке.');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    void loadCourse();
  }, [courseId]);

  if (isLoading) {
    return <Loader label="Загрузка курса..." />;
  }

  if (error) {
    return (
      <StateMessage
        title="Ошибка загрузки курса"
        description={error}
        actionLabel="Повторить загрузку"
        onAction={loadCourse}
      />
    );
  }

  if (notFound) {
    return <StateMessage title="Курс не найден" description="Проверь адрес или вернись к списку курсов." />;
  }

  if (!course) {
    return (
      <StateMessage
        title="Курс временно недоступен"
        description="Содержимое курса пока не удалось подготовить для показа."
        actionLabel="Повторить загрузку"
        onAction={loadCourse}
      />
    );
  }

  return (
    <section className={styles.page}>
      <div className={styles.intro}>
        <h1 className={styles.title}>{course.title}</h1>
        <p className={styles.lead}>{course.description}</p>
      </div>
      <article className={styles.details}>
        <div className={styles.meta}>
          <span>Уровень: {course.level}</span>
          <span>Автор: {course.author}</span>
          <span>Длительность: {course.duration}</span>
        </div>
        <p className={styles.text}>{course.content}</p>
      </article>
    </section>
  );
}
