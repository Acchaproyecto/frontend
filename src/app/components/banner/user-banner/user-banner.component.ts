import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'app-user-banner',
  templateUrl: './user-banner.component.html',
  styleUrls: ['./user-banner.component.scss']
})
export class UserBannerComponent implements OnInit {


  constructor(

  ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
