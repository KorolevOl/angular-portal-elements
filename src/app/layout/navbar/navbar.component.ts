import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {RegisterCustomElement} from "custom-element-register/lib";

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom d-flex justify-content-end">
      <form class="form-inline">
        <ng-container appTarget="navbar"></ng-container>
      </form>
    </nav>
  `,
  styles: [
  ]
})
export class NavbarComponent implements AfterViewInit {

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    RegisterCustomElement(this.el.nativeElement, 'root-web', '/assets/web.js');
  }


}
