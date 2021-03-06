import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { NewsItemsComponent } from './news-items/news-items.component';
import { NewsItemDetailComponent }  from './news-item-detail/news-item-detail.component';
import { PhotosComponent }  from './photos/photos.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: NewsItemDetailComponent },
  { path: 'news', component: NewsItemsComponent },
  { path: 'photos', component: PhotosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
