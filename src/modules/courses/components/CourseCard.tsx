import {Link} from 'react-router-dom';

import type {CourseListItem} from '../types';
import styles from './course-card.module.css';

interface CourseCardProps {
  course: CourseListItem;
}

export function CourseCard({course}: CourseCardProps) {
  return (
    <article className={styles.card}>
      <h2 className={styles.title}>
        <Link className={styles.link} to={`/courses/${course.id}`}>
          {course.title}
        </Link>
      </h2>
      <p className={styles.summary}>{course.summary}</p>
      <strong className={styles.level}>Уровень: {course.level}</strong>
    </article>
  );
}
