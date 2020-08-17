import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { LIBRARIES } from './mock-libraries';
import { Library } from './../../../interface/library';

@Injectable({
  providedIn: 'root'
})
export class SearchFormServiceService {

  getLibraries(): Observable<Library[]> {
    return of(LIBRARIES);
  }

}
