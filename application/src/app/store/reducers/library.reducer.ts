import { Action } from '@ngrx/store'
import * as LibraryActions from './../actions/library.action'
import { Library } from '../../interface/library';

const initialState: Library = {
  name: '',
  latest: '',
  authors: [],
  description: '',
  homepage: '',
  license: '',
  repository: {
    type: '',
    url: '',
  },
  version: '',
  tutorials: [],
};

export function reducer(state:Library = initialState,  action: LibraryActions.Actions) {
  console.log("action: ", action);
  switch(action.type) {
    case LibraryActions.ADD_LIBRARY:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
