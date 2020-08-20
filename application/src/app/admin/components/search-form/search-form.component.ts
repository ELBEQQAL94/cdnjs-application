import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

import { SearchFormServiceService } from './search-form-service.service';
import { Library } from '../../../interface/library';

import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import * as LibraryActions from '../../../store/actions/library.action';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  libraries : Library[];
  selectedLibrary: Library;
  error: string = '';
  query: string = '';

  constructor(
    private searchService: SearchFormServiceService,
    private router: Router,
    private store: Store<AppState>
  ) { }

  getLibraries(query: string): void {
    this.searchService.getLibraries(query)
    .subscribe((data) => {
        const {
          name,
          latest,
          authors,
          description,
          homepage,
          license,
          repository,
          version,
          tutorials
        } = data;
      this.store.dispatch(new LibraryActions.AddLibrary(data));
    });
  }

  onSubmit(f: NgForm) {
    if(!f.valid) {
      this.error = "This field is required";
    } else {
      this.error = "";

      // user search
      const { search } = f.value;
      this.query = search.toLowerCase();
      this.getLibraries(this.query);

      // redirect to search page
      this.router.navigate([`/search/${this.query}`])

    }
  }

  ngOnInit() {
    // this.getLibraries();
  }

}
