import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
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
  `,
  styles: []
})
export class AppComponent {
  title = 'portal';
}
