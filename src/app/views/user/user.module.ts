import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentCourseComponent } from './content-course/course-content.component';
import { CourseComponent } from './course/course.component';
import { UseRoutingModule } from './user-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { NgSimpleProgressBarModule } from 'ng-simple-progress-bar';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NotesComponent } from './content-course/notes/notes.component';
import { ConceptComponent } from './content-course/concept/concept.component';
import { PracticeComponent } from './content-course/practice/practice.component';




@NgModule({
  declarations: [
    ContentCourseComponent,
    CourseComponent,
    NotesComponent,
    ConceptComponent,
    PracticeComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    UseRoutingModule,
    NgSimpleProgressBarModule,
    NgCircleProgressModule.forRoot({
      "radius": 20,
      "space": -8,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#4882c2",
      "outerStrokeGradientStopColor": "#53a9ff",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 10,
      "titleFontSize": "24",
      "unitsColor":"#4882c2",
      "unitsFontSize":"24",
      "titleColor": "#4882c2",
      "animateTitle": true,
      "animationDuration": 1000,
      "showBackground": true,
      "clockwise": false})
  ]
})
export class UserModule { }
