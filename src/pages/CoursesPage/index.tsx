import {useEffect, useState} from 'react';

import {Loader} from '../../components/Loader';
import {StateMessage} from '../../components/StateMessage';
import {getCourses} from '../../modules/courses/api';
import {CourseCard} from '../../modules/courses/components/CourseCard';
import type {CourseListItem} from '../../modules/courses/types';
import '../page.css';

export function CoursesPage() {
  const [courses, setCourses] = useState<CourseListItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadCourses() {
      setIsLoading(true);
      const data = await getCourses();
      setCourses(data);
      setIsLoading(false);
    }

    loadCourses();
  }, []);

  if (isLoading) {
    return <Loader label="Загрузка списка курсов..." />;
  }

  if (!courses.length) {
    return (
      <StateMessage
        title="Курсы пока не опубликованы"
        description="Когда каталог наполнится, здесь появятся доступные учебные программы."
      />
    );
  }

  return (
    <section className="page">
      <div className="intro">
        <h1 className="title">Курсы</h1>
        <p className="lead">
          Каталог показывает краткую информацию по каждому курсу, а полное содержание
          открывается на отдельной странице.
        </p>
      </div>
      <div className="grid">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
