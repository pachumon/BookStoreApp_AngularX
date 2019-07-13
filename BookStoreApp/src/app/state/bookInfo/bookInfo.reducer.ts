import { IBookInfo } from '../../data-models/ibook-info';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookInfoActions, bookInfoActionTypes } from './bookInfo.actions';

export interface BookInfoState {
  data: IBookInfo;
  error: string;
}

const initialState: BookInfoState = {
  data: null,
  error: ''
};

const getBookInfoFeatureState = createFeatureSelector<BookInfoState>(
  'bookInfo'
);

export const getBookInfo = createSelector(
  getBookInfoFeatureState,
  state => state.data
);

export function BookInfoReducer(
  state = initialState,
  action: BookInfoActions
): BookInfoState {
  switch (action.type) {
    case bookInfoActionTypes.LoadBookSuccess:
      return { ...state, data: { ...action.payload } };
    case bookInfoActionTypes.LoadBookError:
      return { ...state, error: action.payload };
    case bookInfoActionTypes.CreateBookSuccess:
      return { ...state, data: { ...action.payload } };
    case bookInfoActionTypes.CreateBookError:
      return { ...state, error: action.payload };
    case bookInfoActionTypes.EditBookSuccess:
      return { ...state, data: { ...action.payload } };
    case bookInfoActionTypes.EditBookError:
      return { ...state, error: action.payload };
    case bookInfoActionTypes.ClearStaleBookData:
      return { ...initialState };
    default:
      return state;
  }
}
