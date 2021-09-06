import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {RegisterCustomElement} from "custom-element-register/lib";

@Component({
  selector: 'app-profile',
  template: `
    <h1>
      profile works!
    </h1>
    
    <ng-template appAttachTo="navbar">
      <button (click)="profileClickAlert()" class="btn btn-primary">Profile button</button>
    </ng-template>
  `,
  styles: [
  ]
})
export class ProfileComponent implements AfterViewInit {

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    RegisterCustomElement(this.el.nativeElement, 'root-web', '/assets/web.js');
  }

  profileClickAlert(){
    alert('Profie alert')
  }

}
