import {Link} from 'react-router-dom';

import type {CourseListItem} from '../types';

interface CourseCardProps {
  course: CourseListItem;
}

export function CourseCard({course}: CourseCardProps) {
  return (
    <article className="course-card">
      <h2 className="course-title">
        <Link className="course-link" to={`/courses/${course.id}`}>
          {course.title}
        </Link>
      </h2>
      <p className="course-summary">{course.summary}</p>
      <strong className="course-level">Уровень: {course.level}</strong>
    </article>
  );
}
