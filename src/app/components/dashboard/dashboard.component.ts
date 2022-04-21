import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/course';
import { CourseService } from 'src/app/course.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  courses:Course[]=[]

  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.getCourses()
  }

  // show top 4 course 
  getCourses():void{
    this.courseService.getCourses()
    .subscribe(courses => this.courses=courses.slice(0,4))
  }

}
