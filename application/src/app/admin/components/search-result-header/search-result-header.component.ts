import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store,  select } from '@ngrx/store';
import { Library } from '../../../interface/library';
import { AppState } from '../../../app.state';

@Component({
  selector: 'app-search-result-header',
  templateUrl: './search-result-header.component.html',
  styleUrls: ['./search-result-header.component.css']
})
export class SearchResultHeaderComponent implements OnInit {

  library: Library;

  constructor(private store: Store<AppState>) {
    store.pipe(select('library'))
    .subscribe((value) => {
      this.library = value;
    });
  }

  ngOnInit(): void {
  }

}
