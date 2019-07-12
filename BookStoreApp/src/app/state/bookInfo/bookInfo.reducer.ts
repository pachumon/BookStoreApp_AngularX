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
