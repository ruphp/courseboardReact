export type CourseLevel = 'Начальный' | 'Средний' | 'Продвинутый';

export interface CourseListItem {
  id: string;
  title: string;
  summary: string;
  level: CourseLevel;
}

export interface CourseDetails {
  id: string;
  title: string;
  description: string;
  level: CourseLevel;
  author: string;
  duration: string;
  content: string;
}
