import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.scss']
})
export class UserNavbarComponent implements OnInit {

  @ViewChild('canvas') canvasRef!: ElementRef;
  private ctx!: CanvasRenderingContext2D;


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.ctx = this.canvasRef.nativeElement.getContext('2d');
    this.drawPoint( {
      x: 0,
      y: 0,
      width: 400,
      height: 55,
      radius: 55,
      color: "#3574c5"
  });
  }

  drawPoint(options: any) {
    this.ctx.strokeStyle = options.color;
    this.ctx.fillStyle = options.color;
    this.ctx.lineJoin = "round";
    this.ctx.lineWidth = options.radius;

    this.ctx.strokeRect(
        options.x+(options.radius*.5),
        options.y+(options.radius*.5),
        options.width-options.radius,
        options.height-options.radius
    );

    this.ctx.fillRect(
        options.x+(options.radius*.5),
        options.y+(options.radius*.5),
        options.width-options.radius,
        options.height-options.radius
    );

    this.ctx.stroke();
    this.ctx.fill();
  }

}
