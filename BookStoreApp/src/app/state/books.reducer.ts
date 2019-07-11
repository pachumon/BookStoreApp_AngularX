import { IBookInfo } from '../data-models/ibook-info';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BooksActions, booksActionTypes } from './books.actions';

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

export function booksReducer(
  state = initialState,
  action: BooksActions
): BooksState {
  switch (action.type) {
    case booksActionTypes.LoadBooks:
      console.log(`state before change ${JSON.stringify(state)}`);
      return { ...state, data: [...action.payload] };
    case booksActionTypes.LoadBooksSuccess:
      return { ...state, data: [...action.payload] };
    case booksActionTypes.LoadBooksError:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
