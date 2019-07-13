import { Injectable } from '@angular/core';
import { AppDataService } from '../../shared/app-data-service/app-data.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as bookInfoActions from './bookInfo.actions';
import { mergeMap, map, tap } from 'rxjs/operators';
import { IBookInfo } from 'src/app/data-models/ibook-info';

@Injectable()
export class BookInfoEffects {
  constructor(
    private appDataService: AppDataService,
    private action$: Actions
  ) {}

  @Effect()
  loadBook$ = this.action$.pipe(
    ofType(bookInfoActions.bookInfoActionTypes.LoadBook),
    mergeMap((action: bookInfoActions.LoadBook) =>
      this.appDataService.getBookDetails(action.payload).pipe(
        map((bookInfo: IBookInfo) => {
          return new bookInfoActions.LoadBookSuccess(bookInfo);
        })
      )
    )
  );

  @Effect()
  createBook$ = this.action$.pipe(
    ofType(bookInfoActions.bookInfoActionTypes.CreateBook),
    mergeMap((action: bookInfoActions.CreateBook) =>
      this.appDataService.updateBookInfo(action.payload).pipe(
        map((bookInfo: IBookInfo) => {
          return new bookInfoActions.CreateBookSuccess(bookInfo);
        })
      )
    )
  );

  @Effect()
  updateBook$ = this.action$.pipe(
    ofType(bookInfoActions.bookInfoActionTypes.CreateBook),
    mergeMap((action: bookInfoActions.CreateBook) =>
      this.appDataService.updateBookInfo(action.payload).pipe(
        map((bookInfo: IBookInfo) => {
          return new bookInfoActions.CreateBookSuccess(bookInfo);
        })
      )
    )
  );
}
