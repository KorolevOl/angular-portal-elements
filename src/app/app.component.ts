import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import { RegisterCustomElement } from 'custom-element-register';

@Component({
  selector: 'app-root',
  template: `
    <div>1</div>
    <root-web>web</root-web>
    <div>2</div>
    <div class="d-flex">
      <app-sidebar></app-sidebar>

      <div class="page-content-wrapper">
        <app-navbar></app-navbar>

        <div class="container-fluid">
          <router-outlet></router-outlet>
        </div>
      </div>
      
      <app-footer></app-footer>
    </div>
    <root-web>web2</root-web>
  `,
  styles: []
})
export class AppComponent implements AfterViewInit {
  title = 'portal';
  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    RegisterCustomElement(this.el.nativeElement, 'root-web', '/assets/web.js');
  }

}

