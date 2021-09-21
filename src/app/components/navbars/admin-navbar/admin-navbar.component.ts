import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppService } from '../../../services/app.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit {

  isSidebarOpen: boolean = false;

  isSearchBoxOpen: boolean = false;
  isOpenNotifi: boolean = false;
  isOpenService: boolean = false;
  isOpenOption: boolean = false;

  usuario: any;


  constructor(
    private appService: AppService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.user().subscribe(resp => {
      console.log(resp)
    });
    this.appService.isSidebarToggeled$.subscribe(toggle =>  this.isSidebarOpen = toggle);
  }

  toggleSidbarMenu() {
    this.appService.isSidebarToggeled$.emit(this.isSidebarOpen = !this.isSidebarOpen);
  }

}
