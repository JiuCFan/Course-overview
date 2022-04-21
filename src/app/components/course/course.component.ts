import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/course';
import { CourseService } from 'src/app/course.service';
// import { Location } from '@angular/common';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  courses: Course[] = [];
  
  // Inject the CourseService
  constructor(
    private courseService: CourseService,
    // private location: Location
  ) {}

  ngOnInit(): void {
    this.getCourses();
  }
  // get course list
  getCourses(): void {
    this.courseService
      .getCourses()
      .subscribe((courses) => (this.courses = courses));
  }

  // go back to browser history
  /* goBack(): void {
    this.location.back();
  } */

}
