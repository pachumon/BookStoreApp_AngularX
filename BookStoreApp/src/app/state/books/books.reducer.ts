import { IBookInfo } from '../../data-models/ibook-info';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BooksActions, booksActionTypes } from './books.actions';
import * as R from 'ramda';

export interface BooksState {
  data: IBookInfo[];
  error: string;
}

const initialState: BooksState = {
  data: [],
  error: ''
};

const getBooksFeatureState = createFeatureSelector<BooksState>('books');

export const getBooksCollection = createSelector(
  getBooksFeatureState,
  state => state.data
);

const filterBookinfo = (filterId: number, book: IBookInfo) => {
  return book.id !== filterId;
};

export function booksReducer(
  state = initialState,
  action: BooksActions
): BooksState {
  switch (action.type) {
    case booksActionTypes.LoadBooksSuccess:
      return { ...state, data: [...action.payload] };
    case booksActionTypes.LoadBooksError:
      return { ...state, error: action.payload };
    case booksActionTypes.RemoveBookInfoSuccess:
      return {
        ...state,
        data: R.filter(R.curry(filterBookinfo)(action.payload), state.data)
      };
    case booksActionTypes.RemoveBookInfoError:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
