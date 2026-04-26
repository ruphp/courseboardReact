import courseDetailsJson from '../../../mocks/course-details.json';
import coursesListJson from '../../../mocks/courses-list.json';

import type {CourseDetails, CourseListItem} from '../types';

export async function getCourses(): Promise<CourseListItem[]> {
  //const response = await fetch('/api/courses');
  //return await response.json();
  return coursesListJson;
}

export async function getCourseById(courseId: string): Promise<CourseDetails | null> {
  //const response = await fetch(`/api/courses/${courseId}`);
  //if (!response.ok) {
  //  return null;
  //}
  //return await response.json();
  const course = courseDetailsJson.find(item => item.id === courseId);

  return course ?? null;
}
