import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers/library.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './admin/components/search-form/search-form.component';
import { HomeComponent } from './admin/pages/home/home.component';
import { SearchReasultComponent } from './admin/pages/search-reasult/search-reasult.component';
import { SearchInputComponent } from './admin/components/search-input/search-input.component';
import { SearchResultHeaderComponent } from './admin/components/search-result-header/search-result-header.component';
import { SearchResultContentComponent } from './admin/components/search-result-content/search-result-content.component';
import { SearchResultContentHeaderComponent } from './admin/components/search-result-content-header/search-result-content-header.component';
import { SearchResultContentTutorialsComponent } from './admin/components/search-result-content-tutorials/search-result-content-tutorials.component';
import { SearchResultContentTutorialsItemComponent } from './admin/components/search-result-content-tutorials-item/search-result-content-tutorials-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    HomeComponent,
    SearchReasultComponent,
    SearchInputComponent,
    SearchResultHeaderComponent,
    SearchResultContentComponent,
    SearchResultContentHeaderComponent,
    SearchResultContentTutorialsComponent,
    SearchResultContentTutorialsItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      library: reducer
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
