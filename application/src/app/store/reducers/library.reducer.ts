import { Action } from '@ngrx/store'
import * as LibraryActions from './../actions/library.action'
import { Library } from '../../interface/library';

const initialState: Library = {
  name: 'vue',
  latest: 'lates version',
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
