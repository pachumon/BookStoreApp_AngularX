import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppDataService } from '../shared/app-data-service/app-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { tap, map } from 'rxjs/operators';
import { IBookInfo } from '../data-models/ibook-info';
import { Store, select } from '@ngrx/store';
import * as fromBooksInfo from '../state/bookInfo/bookInfo.reducer';
import * as BooksInfoAction from '../state/bookInfo/bookInfo.actions';
import { takeWhile } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit, OnDestroy {
  constructor(
    private appDataService: AppDataService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromBooksInfo.BookInfoState>
  ) {}

  private bookId: number;
  viewdata: IBookInfo;
  bookInfo$: Observable<IBookInfo>;
  componentActive = true;

  ngOnInit() {
    this.store.dispatch(new BooksInfoAction.ClearStaleBookData());

    this.route.params
      .pipe(
        map(params => params['bookId']),
        tap(bookId => (this.bookId = +bookId))
      )
      .subscribe(bookId => this.getBookDetails(bookId));
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

  private getBookDetails(bookId: number) {
    this.bookInfo$ = this.store.pipe(
      select(fromBooksInfo.getBookInfo),
      takeWhile(() => this.componentActive)
    );
    this.store.dispatch(new BooksInfoAction.LoadBook(bookId));
  }
}
