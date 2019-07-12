import { Action } from '@ngrx/store';
import { IBookInfo } from '../../data-models/ibook-info';

export enum booksActionTypes {
  LoadBooks = '[Books] Load Books',
  LoadBooksSuccess = '[Books] Load Books Success',
  LoadBooksError = '[Books] Load Books Error',
  RemoveBookInfo = '[Books] Remove Book Info',
  RemoveBookInfoSuccess = '[Books] Remove Book Info Success',
  RemoveBookInfoError = '[Books] Remove Book Info Error'
}

export class LoadBooks implements Action {
  readonly type = booksActionTypes.LoadBooks;
  // constructor(public payload: IBookInfo[]) {}
}

export class LoadBooksSuccess implements Action {
  readonly type = booksActionTypes.LoadBooksSuccess;
  constructor(public payload: IBookInfo[]) {}
}

export class LoadBooksError implements Action {
  readonly type = booksActionTypes.LoadBooksError;
  constructor(public payload: string) {}
}

export class RemoveBookInfo implements Action {
  readonly type = booksActionTypes.RemoveBookInfo;
  constructor(public payload: number) {}
}

export class RemoveBookInfoSuccess implements Action {
  readonly type = booksActionTypes.RemoveBookInfoSuccess;
  constructor(public payload: number) {}
}

export class RemoveBookInfoError implements Action {
  readonly type = booksActionTypes.RemoveBookInfoError;
  constructor(public payload: string) {}
}

export type BooksActions =
  | LoadBooks
  | LoadBooksSuccess
  | LoadBooksError
  | RemoveBookInfo
  | RemoveBookInfoSuccess
  | RemoveBookInfoError;
