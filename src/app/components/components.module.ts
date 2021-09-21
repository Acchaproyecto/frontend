import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminNavbarComponent } from './navbars/admin-navbar/admin-navbar.component';
import { IndexNavbarComponent } from './navbars/index-navbar/index-navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterAdminComponent } from './footers/footer-admin/footer-admin.component';
import { FooterComponent } from './footers/footer/footer.component';
import { UserNavbarComponent } from './navbars/user-navbar/user-navbar.component';
import { UserBannerComponent } from './banner/user-banner/user-banner.component';
import { UserBannerContentComponent } from './banner-course-content/user-banner-content.component';
import { UserConceptsComponent } from './concepts/user-concepts.component';
import { UserContentComponent } from './content/user.content.component';
import { UserNotesComponent } from './notes/user-notes.component';
import { UserSlidebarComponent } from './sidebar/user-sidebar/user-slidebar.component';
import { NgSimpleProgressBarModule } from 'ng-simple-progress-bar';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CourseSubjectComponent } from './course-subject/course-subject.content.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminNavbarComponent,
    UserNavbarComponent,
    IndexNavbarComponent,
    SidebarComponent,
    FooterAdminComponent,
    FooterComponent,
    UserBannerComponent,
    UserBannerContentComponent,
    UserConceptsComponent,
    UserContentComponent,
    UserNotesComponent,
    UserSlidebarComponent,
    CourseSubjectComponent
  ],
  imports: [
    CommonModule,
    NgSimpleProgressBarModule,
    RouterModule,
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
  ],
  exports: [
    AdminNavbarComponent,
    UserNavbarComponent,
    SidebarComponent,
    FooterAdminComponent,
    UserBannerComponent,
    UserBannerContentComponent,
    UserConceptsComponent,
    UserContentComponent,
    UserNotesComponent,
    UserSlidebarComponent,
    CourseSubjectComponent
  ]
})
export class ComponentsModule { }
