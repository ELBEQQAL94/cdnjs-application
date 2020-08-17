import { Component, OnInit } from '@angular/core';


import { SearchFormServiceService } from './search-form-service.service';
import { Library } from '../../../interface/library';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  libraries : Library[];
  selectedLibrary: Library;

  constructor(private searchService: SearchFormServiceService) { }

  getLibraries(): void {
    this.searchService.getLibraries('vue')
    .subscribe(data => console.log(data));
  }

  ngOnInit() {
    this.getLibraries();
  }

}
