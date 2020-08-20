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

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    HomeComponent,
    SearchReasultComponent,
    SearchInputComponent,
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
