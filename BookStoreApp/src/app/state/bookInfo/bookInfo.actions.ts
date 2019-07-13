import { Action } from '@ngrx/store';
import { IBookInfo } from '../../data-models/ibook-info';

export enum bookInfoActionTypes {
  LoadBook = '[BookInfo] Load Book',
  LoadBookSuccess = '[BookInfo] Load Book Success',
  LoadBookError = '[BookInfo] Load Book Error',
  CreateBook = '[BookInfo] Create Book',
  CreateBookSuccess = '[BookInfo] Create Book Success',
  CreateBookError = '[BookInfo] Create Book Error',
  EditBook = '[BookInfo] Edit Book',
  EditBookSuccess = '[BookInfo] Edit Book Success',
  EditBookError = '[BookInfo] Edit Book Error',
  ClearStaleBookData = '[BookInfo] Clear Stale Book Data'
}

export class LoadBook implements Action {
  readonly type = bookInfoActionTypes.LoadBook;
  constructor(public payload: number) {}
}

export class LoadBookSuccess implements Action {
  readonly type = bookInfoActionTypes.LoadBookSuccess;
  constructor(public payload: IBookInfo) {}
}

export class LoadBookError implements Action {
  readonly type = bookInfoActionTypes.LoadBookError;
  constructor(public payload: string) {}
}

export class CreateBook implements Action {
  readonly type = bookInfoActionTypes.CreateBook;
  constructor(public payload: IBookInfo) {}
}

export class CreateBookSuccess implements Action {
  readonly type = bookInfoActionTypes.CreateBookSuccess;
  constructor(public payload: IBookInfo) {}
}

export class CreateBookError implements Action {
  readonly type = bookInfoActionTypes.CreateBookError;
  constructor(public payload: string) {}
}

export class EditBook implements Action {
  readonly type = bookInfoActionTypes.EditBook;
  constructor(public payload: IBookInfo) {}
}

export class EditBookSuccess implements Action {
  readonly type = bookInfoActionTypes.EditBookSuccess;
  constructor(public payload: IBookInfo) {}
}

export class EditBookError implements Action {
  readonly type = bookInfoActionTypes.EditBookError;
  constructor(public payload: string) {}
}

export class ClearStaleBookData implements Action {
  readonly type = bookInfoActionTypes.ClearStaleBookData;
}


export type BookInfoActions =
  | LoadBook
  | LoadBookSuccess
  | LoadBookError
  | CreateBook
  | CreateBookSuccess
  | CreateBookError
  | EditBook
  | EditBookSuccess
  | EditBookError
  | ClearStaleBookData;
