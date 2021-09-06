import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {RegisterCustomElement} from "custom-element-register/lib";

@Component({
  selector: 'app-footer',
  template: `
    <footer id="footer" class="footer mt-auto py-3">
      <div class="container">
        <span appTarget="footer" class="text-muted"></span>
        <root-web></root-web>
      </div>
    </footer>
  `,
  styles: [
  ]
})
export class FooterComponent implements AfterViewInit {

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    RegisterCustomElement(this.el.nativeElement, 'root-web', '/assets/web.js');
  }

}
