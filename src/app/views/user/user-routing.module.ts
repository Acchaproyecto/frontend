import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConceptComponent } from './content-course/concept/concept.component';
import { ContentCourseComponent } from './content-course/course-content.component';
import { NotesComponent } from './content-course/notes/notes.component';
import { CourseComponent } from './course/course.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'course',
        component: CourseComponent,
        children: [
          {
            path: 'course-content',
            component: ContentCourseComponent,
          }
        ]
      },
      {
        path: 'course-content',
        component: ContentCourseComponent,
        children: [
          {
            path: 'notas',
            component: NotesComponent
          },
          {
            path: 'concepto',
            component: ConceptComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UseRoutingModule { }
