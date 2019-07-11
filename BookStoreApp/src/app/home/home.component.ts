import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { AppDataService } from '../shared/app-data-service/app-data.service';
import { IBookInfo } from '../data-models/ibook-info';
import { AppToastrService } from '../shared/toaster/toaster.service';
import { Store, select } from '@ngrx/store';
import * as fromBooks from '../state/books.reducer';
import * as bookActions from '../state/books.actions';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'book-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private appDataService: AppDataService,
    private toastrService: AppToastrService,
    private store: Store<fromBooks.BooksState>
  ) {}

  viewdata: IBookInfo[] = [];
  booksData = [];

  ngOnInit() {
    // TODO : Unsubscribe
    this.store.pipe(select(fromBooks.getBooksCollection)).subscribe(books => {
      if (books) {
        this.booksData = books;
      }
    });

    this.getBookCollectionData();
  }

  deleteBook(bookInfo: IBookInfo) {
    const { id } = bookInfo;

    this.appDataService.removeBookInfo(id).subscribe(data => {
      console.log(bookInfo);
      this.toastrService.showSuccess(`Removed the Book: ${bookInfo.title}`);
      this.getBookCollectionData();
    });
  }

  getBookCollectionData(): void {
    this.appDataService.getBookCollection().subscribe(data => {
      this.viewdata = data;
      this.store.dispatch(new bookActions.LoadBooks(data));
    });
  }
}
