import { IBookInfo } from '../data-models/ibook-info';

export interface BooksState {
  data: IBookInfo[];
  error: string;
}

const initialState: BooksState = {
  data: [],
  error: ''
};

export function booksReducer(state = initialState, action): BooksState {
  switch (action.type) {
    case 'LOAD_BOOKS':
      console.log(`state before change ${JSON.stringify(state)}`);
      return { ...state, data: [...action.data] };
    default:
      return state;
  }
}
