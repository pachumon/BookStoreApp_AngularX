import { Injectable } from '@angular/core';
import { AppDataService } from '../../shared/app-data-service/app-data.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as bookActions from './books.actions';
import { mergeMap, map } from 'rxjs/operators';
import { IBookInfo } from '../../data-models/ibook-info';

@Injectable()
export class BooksEffects {
  constructor(
    private appDataService: AppDataService,
    private action$: Actions
  ) {}

  @Effect()
  loadBooks$ = this.action$.pipe(
    ofType(bookActions.booksActionTypes.LoadBooks),
    mergeMap((action: bookActions.LoadBooks) =>
      this.appDataService.getBookCollection().pipe(
        map((books: IBookInfo[]) => {
          return new bookActions.LoadBooksSuccess(books);
        })
      )
    )
  );

  @Effect()
  removeBooks$ = this.action$.pipe(
    ofType(bookActions.booksActionTypes.RemoveBookInfo),
    mergeMap((action: bookActions.RemoveBookInfo) =>
      this.appDataService.removeBookInfo(action.payload).pipe(
        map((bookInfo: IBookInfo) => {
          const bookId = action.payload;
          return new bookActions.RemoveBookInfoSuccess(bookId);
        })
      )
    )
  );
}
