import { Component } from '@angular/core';

@Component({
  selector: 'blogs-side-nav',
  templateUrl: './blogs-side-nav.component.html',
  styleUrls: ['./blogs-side-nav.component.scss']
})
export class BlogsSideNavComponent {
  url;
  constructor() {}

  select(url: string) {
    this.url = url;
  }
}
