import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {getCourseById} from '../../modules/courses/api';
import type {CourseDetails} from '../../modules/courses/types';

export function CourseDetailsPage() {
  const {courseId = ''} = useParams();
  const [course, setCourse] = useState<CourseDetails | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function loadCourse() {
      const data = await getCourseById(courseId);

      if (!data) {
        setCourse(null);
        setNotFound(true);
        return;
      }

      setCourse(data);
      setNotFound(false);
    }

    loadCourse();
  }, [courseId]);

  if (notFound) {
    return (
      <section>
        <h1>Курс не найден</h1>
        <p>Проверь адрес или вернись к списку курсов.</p>
      </section>
    );
  }

  if (!course) {
    return (
      <section>
        <h1>Загрузка курса...</h1>
      </section>
    );
  }

  return (
    <section>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <p>Уровень: {course.level}</p>
      <p>Автор: {course.author}</p>
      <p>Длительность: {course.duration}</p>
      <p>{course.content}</p>
    </section>
  );
}
