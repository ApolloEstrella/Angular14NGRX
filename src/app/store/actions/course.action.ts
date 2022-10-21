import { Action } from '@ngrx/store';
import { CourseItem } from '../models/courseItem.model';

export enum CourseActionType {
  ADD_ITEM = '[COURSE] Add Course',
  DEL_ITEM = '[COURSE] Delete Course',
}

export class AddItemAction implements Action {
  readonly type = CourseActionType.ADD_ITEM;

  //add an optional payload

  constructor(public payload: CourseItem) {}
}

export class DeleteItemAction implements Action {
  readonly type = CourseActionType.DEL_ITEM;

  //add an optional payload

  constructor(public payload: CourseItem) { }
}

export type CourseAction = any;
