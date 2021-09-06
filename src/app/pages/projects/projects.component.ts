import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {RegisterCustomElement} from "custom-element-register/lib";

@Component({
  selector: 'app-projects',
  template: `
    <h1>
      projects works!
    </h1>

    <ng-template appAttachTo="navbar">
      <button (click)="projectClickAlert()" class="btn btn-danger">Profile button</button>
    </ng-template>
    
    <p *appAttachTo="'footer'">Будет отображатся в футоре</p>
  `,
  styles: [
  ]
})
export class ProjectsComponent implements AfterViewInit {

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    RegisterCustomElement(this.el.nativeElement, 'root-web', '/assets/web.js');
  }

  projectClickAlert(){
    alert('Project alert')
  }

}
