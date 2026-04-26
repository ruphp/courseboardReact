import courseDetailsJson from '../../../mocks/course-details.json';
import coursesListJson from '../../../mocks/courses-list.json';

import type {CourseDetails, CourseListItem} from '../types';

type MockErrorTarget = 'list' | 'details';

function getMockErrorMode(): string {
  if (typeof window === 'undefined') {
    return '';
  }

  return new URLSearchParams(window.location.search).get('mockError') ?? '';
}

async function simulateRequest(target: MockErrorTarget) {
  await new Promise(resolve => setTimeout(resolve, 250));

  const mode = getMockErrorMode();

  if (mode === target || mode === 'all') {
    throw new Error(`Mock ${target} request failed`);
  }
}

export async function getCourses(): Promise<CourseListItem[]> {
  //const response = await fetch('/api/courses');
  //return await response.json();
  await simulateRequest('list');
  return coursesListJson as CourseListItem[];
}

export async function getCourseById(courseId: string): Promise<CourseDetails | null> {
  //const response = await fetch(`/api/courses/${courseId}`);
  //if (!response.ok) {
  //  return null;
  //}
  //return await response.json();
  await simulateRequest('details');
  const course = courseDetailsJson.find(item => item.id === courseId);

  return (course as CourseDetails | undefined) ?? null;
}
