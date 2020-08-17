import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './admin/components/search-form/search-form.component';
import { HomeComponent } from './admin/pages/home/home.component';
import { SearchReasultComponent } from './admin/pages/search-reasult/search-reasult.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    HomeComponent,
    SearchReasultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
