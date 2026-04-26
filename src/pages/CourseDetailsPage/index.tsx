import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {Loader} from '../../components/Loader';
import {StateMessage} from '../../components/StateMessage';
import {getCourseById} from '../../modules/courses/api';
import type {CourseDetails} from '../../modules/courses/types';
import '../page.css';

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
    return <StateMessage title="Курс не найден" description="Проверь адрес или вернись к списку курсов." />;
  }

  if (!course) {
    return <Loader label="Загрузка курса..." />;
  }

  return (
    <section className="page">
      <div className="intro">
        <h1 className="title">{course.title}</h1>
        <p className="lead">{course.description}</p>
      </div>
      <article className="details">
        <div className="meta">
          <span>Уровень: {course.level}</span>
          <span>Автор: {course.author}</span>
          <span>Длительность: {course.duration}</span>
        </div>
        <p className="text">{course.content}</p>
      </article>
    </section>
  );
}
