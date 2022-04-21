import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './components/course/course.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';

const routes: Routes = [
  {path:'course',component:CourseComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'detail/:id',component:CourseDetailComponent},
  {path:'',redirectTo:'/dashboard',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
