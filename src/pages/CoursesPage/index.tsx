import {useEffect, useState} from 'react';

import {getCourses} from '../../modules/courses/api';
import {CourseCard} from '../../modules/courses/components/CourseCard';
import type {CourseListItem} from '../../modules/courses/types';

export function CoursesPage() {
  const [courses, setCourses] = useState<CourseListItem[]>([]);

  useEffect(() => {
    async function loadCourses() {
      const data = await getCourses();
      setCourses(data);
    }

    loadCourses();
  }, []);

  return (
    <section>
      <h1>Курсы</h1>
      <div>
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
