import coursesJson from '../../../mocks/courses.json';

import type {Course} from '../types';

export async function getCourses(): Promise<Course[]> {
  //const response = await fetch('/api/courses');
  //return await response.json();
  return coursesJson;
}

