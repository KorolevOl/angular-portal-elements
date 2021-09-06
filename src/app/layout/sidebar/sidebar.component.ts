import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
    <div class="bg-light border-right" id="sidebar-wrapper">
      <div class="sidebar-heading">Teleportation</div>
      <div class="list-group list-group-flush">
        <a routerLink="dashboard" class="list-group-item list-group-item-action bg-light">Dashboard</a>
        <a routerLink="profile" class="list-group-item list-group-item-action bg-light">Profile</a>
        <a routerLink="projects" class="list-group-item list-group-item-action bg-light">Projects</a>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
