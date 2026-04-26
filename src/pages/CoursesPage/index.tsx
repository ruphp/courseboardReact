import {useEffect, useState} from 'react';

import {Loader} from '../../components/Loader';
import {StateMessage} from '../../components/StateMessage';
import {getCourses} from '../../modules/courses/api';
import {CourseCard} from '../../modules/courses/components/CourseCard';
import type {CourseListItem} from '../../modules/courses/types';

export function CoursesPage() {
  const [courses, setCourses] = useState<CourseListItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');

  async function loadCourses() {
    setIsLoading(true);
    setError('');

    try {
      const data = await getCourses();
      setCourses(data);
    } catch {
      setCourses([]);
      setError('Не удалось загрузить список курсов. Попробуй повторить запрос или проверь mock-сценарий в адресной строке.');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    void loadCourses();
  }, []);

  if (isLoading) {
    return <Loader label="Загрузка списка курсов..." />;
  }

  if (error) {
    return (
      <StateMessage
        title="Не удалось загрузить каталог"
        description={error}
        actionLabel="Повторить загрузку"
        onAction={loadCourses}
      />
    );
  }

  if (!courses.length) {
    return (
      <StateMessage
        title="Курсы пока не опубликованы"
        description="Когда каталог наполнится, здесь появятся доступные учебные программы."
      />
    );
  }

  const normalizedQuery = query.trim().toLowerCase();
  const levels = Array.from(new Set(courses.map(course => course.level)));
  const filteredCourses = courses.filter(course => {
    const matchesLevel = !selectedLevel || course.level === selectedLevel;
    const matchesQuery =
      !normalizedQuery ||
      course.title.toLowerCase().includes(normalizedQuery) ||
      course.summary.toLowerCase().includes(normalizedQuery);

    return matchesLevel && matchesQuery;
  });

  return (
    <section className="page-shell">
      <div className="page-intro">
        <h1 className="page-title">Курсы</h1>
        <p className="page-lead">
          Каталог показывает краткую информацию по каждому курсу, а полное содержание открывается на
          отдельной странице.
        </p>
      </div>

      <div className="panel filter-panel">
        <label className="field">
          <span className="caption">Поиск по названию и описанию</span>
          <input
            className="control"
            type="search"
            value={query}
            onChange={event => setQuery(event.target.value)}
            placeholder="Например, React или TypeScript"
          />
        </label>

        <label className="field">
          <span className="caption">Уровень курса</span>
          <select
            className="control"
            value={selectedLevel}
            onChange={event => setSelectedLevel(event.target.value)}>
            <option value="">Все уровни</option>
            {levels.map(level => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </label>
      </div>

      {!filteredCourses.length ? (
        <StateMessage
          title="Курсы не найдены"
          description="Попробуй изменить поисковый запрос или сбросить фильтр по уровню."
        />
      ) : (
        <div className="card-grid">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </section>
  );
}
