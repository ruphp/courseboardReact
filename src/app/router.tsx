import {createBrowserRouter} from 'react-router-dom';

import {AppLayout} from './layout/AppLayout';
import {HomePage} from '../pages/HomePage';
import {CoursesPage} from '../pages/CoursesPage';
import {CourseDetailsPage} from '../pages/CourseDetailsPage';
import {AboutPage} from '../pages/AboutPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'courses',
        element: <CoursesPage />
      },
      {
        path: 'courses/:courseId',
        element: <CourseDetailsPage />
      },
      {
        path: 'about',
        element: <AboutPage />
      }
    ]
  }
]);
