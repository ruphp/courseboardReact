import type {Course} from '../types';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({course}: CourseCardProps) {
  return (
    <article>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <small>Уровень: {course.level}</small>
    </article>
  );
}

