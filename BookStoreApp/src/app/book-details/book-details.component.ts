import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../shared/app-data-service/app-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { tap, map } from 'rxjs/operators';
import { IBookInfo } from '../data-models/ibook-info';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  constructor(
    private appDataService: AppDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  private bookId: number;
  viewdata: IBookInfo;

  ngOnInit() {
    this.route.params
      .pipe(
        map(params => params['bookId']),
        tap(bookId => (this.bookId = +bookId))
      )
      .subscribe(bookId => this.getBookDetails(bookId));
  }

  private getBookDetails(bookId) {
    this.appDataService
      .getBookDetails(bookId)
      .subscribe(bookDetails => (this.viewdata = bookDetails));
  }
}
