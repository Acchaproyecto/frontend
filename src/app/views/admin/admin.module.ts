import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesComponent } from './courses/courses.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { UsersComponent } from './users/users.component';
import { NgSimpleProgressBarModule } from 'ng-simple-progress-bar';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AdminComponent } from '../../layouts/admin/admin.component';
import { UserComponent } from './users/user.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CoursesComponent,
    UsersComponent,
    AdminComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ComponentsModule,
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
export class AdminModule { }
