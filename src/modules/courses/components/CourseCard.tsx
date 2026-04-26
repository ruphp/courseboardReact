import {Link} from 'react-router-dom';

import type {CourseListItem} from '../types';
import './course-card.css';

interface CourseCardProps {
  course: CourseListItem;
}

export function CourseCard({course}: CourseCardProps) {
  return (
    <article className="card">
      <h2 className="title">
        <Link className="link" to={`/courses/${course.id}`}>
          {course.title}
        </Link>
      </h2>
      <p className="summary">{course.summary}</p>
      <strong className="level">Уровень: {course.level}</strong>
    </article>
  );
}
