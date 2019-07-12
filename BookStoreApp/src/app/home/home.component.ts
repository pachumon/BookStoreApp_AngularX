import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  OnDestroy
} from '@angular/core';
import { AppDataService } from '../shared/app-data-service/app-data.service';
import { IBookInfo } from '../data-models/ibook-info';
import { AppToastrService } from '../shared/toaster/toaster.service';
import { Store, select } from '@ngrx/store';
import * as fromBooks from '../state/books/books.reducer';
import * as bookActions from '../state/books/books.actions';
import { takeWhile } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'book-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  books$: Observable<IBookInfo[]>;
  constructor(
    private appDataService: AppDataService,
    private toastrService: AppToastrService,
    private store: Store<fromBooks.BooksState>
  ) {}

  viewdata: IBookInfo[] = [];
  booksData = [];
  componentActive = true;

  ngOnInit() {
    // TODO : Unsubscribe
    // this.store
    //   .pipe(
    //     select(fromBooks.getBooksCollection),
    //     takeWhile(() => this.componentActive)
    //   )
    //   .subscribe(books => {
    //     if (books) {
    //       this.viewdata = books;
    //     }
    //   });
    this.books$ = this.store.pipe(select(fromBooks.getBooksCollection));
    this.store.dispatch(new bookActions.LoadBooks());
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

  deleteBook(bookInfo: IBookInfo) {
    const { id } = bookInfo;
    this.store.dispatch(new bookActions.RemoveBookInfo(id));
    this.toastrService.showSuccess(`Removed the Book: ${bookInfo.title}`);
  }
}
