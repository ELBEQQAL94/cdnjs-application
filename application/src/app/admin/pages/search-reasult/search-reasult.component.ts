import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store,  select } from '@ngrx/store';
import { Library } from '../../../interface/library';
import { AppState } from '../../../app.state';

@Component({
  selector: 'app-search-reasult',
  templateUrl: './search-reasult.component.html',
  styleUrls: ['./search-reasult.component.css']
})
export class SearchReasultComponent implements OnInit {

  library: Library;

  constructor(private store: Store<AppState>) {
    store.pipe(select('library'))
    .subscribe((value) => {
      this.library = value;
      console.log('value from result component: ', value)
    });
  }

  ngOnInit(): void {
  }

}
