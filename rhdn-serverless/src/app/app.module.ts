import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsItemsComponent } from './news-items/news-items.component';
import { NewsItemDetailComponent } from './news-item-detail/news-item-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsItemsComponent,
    NewsItemDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
