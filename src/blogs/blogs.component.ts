import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  template: `
    <div
      class="menu"
      [ngClass]="menuState === 'in' ? 'menu-open' : 'menu-close'"
    >
      <blogs-side-nav class="menu-side"></blogs-side-nav>
      <div class="content">
        <blogs-navbar (toggle)="toggleMenu()"></blogs-navbar>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [
    `
      .content {
        -webkit-transition: margin-left 0.8s;
        -moz-transition: margin-left 0.8s;
        transition: margin-left 0.8s;
      }
      .menu-side {
        width: 260px;
        left: -260px;
        transition: 0.8s;
      }
      .menu-open .menu-side {
        top: 15px;
        left: 0;
      }
      .menu-open .content {
        margin-left: 245px;
      }
    `
  ]
})
export class BlogsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
