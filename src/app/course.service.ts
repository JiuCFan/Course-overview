import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from './course';
import { COURSES } from './mock-courses';

@Injectable({
  providedIn: 'root',
})
export class CourseService {

  constructor() {}

  // course list
  getCourses(): Observable<Course[]> {
    return of(COURSES);
  }

  // course detail
  getCourse(id: number): Observable<Course> {
    const course = COURSES.find((c) => c.id === id)!;
    return of(course);
  }
}
