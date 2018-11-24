import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from './blogs.component';
import { BlogsNavbarComponent } from './components/blogs-navbar/blogs-navbar.component';
import { IndexComponent } from './containers/index/index.component';
import { BlogsSideNavComponent } from './components/blogs-side-nav/blogs-side-nav.component';
import { Routes, RouterModule } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    component: BlogsComponent,
    children: [
      {
        path: '',
        component: IndexComponent
      }
    ]
  },

  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  declarations: [
    BlogsComponent,
    BlogsNavbarComponent,
    IndexComponent,
    BlogsSideNavComponent
  ]
})
export class BlogsModule {}
