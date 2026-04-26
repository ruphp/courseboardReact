import {Link} from 'react-router-dom';

import type {CourseListItem} from '../types';

interface CourseCardProps {
  course: CourseListItem;
}

export function CourseCard({course}: CourseCardProps) {
  return (
    <article>
      <h2>
        <Link to={`/courses/${course.id}`}>{course.title}</Link>
      </h2>
      <p>{course.summary}</p>
      <small>Уровень: {course.level}</small>
    </article>
  );
}
