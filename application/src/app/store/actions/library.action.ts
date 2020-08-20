import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Library } from '../../interface/library';

export const ADD_LIBRARY       = '[LIBRARY] Add'

export class AddLibrary implements Action {
    readonly type = ADD_LIBRARY

    constructor(public payload: Library) {}
}


export type Actions = AddLibrary;
