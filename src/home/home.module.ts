import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { IndexComponent } from './containers/index/index.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BlogsComponent } from './containers/blogs/blogs.component';
import { AboutComponent } from './containers/about/about.component';
import { FooterComponent } from './components/footer/footer.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: IndexComponent
      },
      {
        path: 'blog',
        component: BlogsComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ]
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  declarations: [
    HomeComponent,
    IndexComponent,
    SideNavComponent,
    NavBarComponent,
    BlogsComponent,
    AboutComponent,
    FooterComponent
  ]
})
export class HomeModule {}
