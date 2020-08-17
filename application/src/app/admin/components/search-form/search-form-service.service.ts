import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Library } from './../../../interface/library';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchFormServiceService {

  private librariesUrl = 'https://api.cdnjs.com/libraries/';

  constructor( private http: HttpClient ) {
    // this.getLibraries()
    //       .subscribe(data => console.log(data));
  }

  getLibraries(query: string): Observable<Library>{
    return this.http.get<Library>(this.librariesUrl + query);
  }

}
