import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {RegisterCustomElement} from "custom-element-register/lib";

@Component({
  selector: 'app-dashboard',
  template: `
    <p>
      dashboard works!
    </p>
    <root-web></root-web>
  `,
  styles: [
  ]
})
export class DashboardComponent implements AfterViewInit {

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    RegisterCustomElement(this.el.nativeElement, 'root-web', '/assets/web.js');
  }

}
