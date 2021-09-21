import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isSidebarOpen: boolean = false;

  constructor(
    public appService: AppService
  ) { }

  ngOnInit(): void {
    this.appService.isSidebarToggeled$.subscribe(toggle => this.isSidebarOpen = toggle);
  }

  toggleSidbarMenu() {
    this.appService.isSidebarToggeled$.emit(this.isSidebarOpen = !this.isSidebarOpen);
  }

}
