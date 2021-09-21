import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  isSidebarToggeled$ = new EventEmitter<boolean>();
  constructor() { }
}
