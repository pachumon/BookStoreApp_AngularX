import { IBookInfo } from '../data-models/ibook-info';

export interface State {
  books: IBookInfo[];
  bookInfo: IBookInfo;
}
