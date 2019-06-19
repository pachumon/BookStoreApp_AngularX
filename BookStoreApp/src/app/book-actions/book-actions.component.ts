import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../shared/app-data-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IBookInfo } from '../data-models/ibook-info';
import { map, tap } from 'rxjs/operators';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'book-actions',
  templateUrl: './book-actions.component.html',
  styleUrls: ['./book-actions.component.css']
})
export class BookActionsComponent implements OnInit {
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
      .subscribe(bookId => this.getBookDetails());
  }

  private getBookDetails(): void {
    if (this.bookId !== 0) {
      this.appDataService
        .getBookDetails(this.bookId)
        .subscribe(bookDetails => (this.viewdata = bookDetails));
    } else {
      this.viewdata = {
        id: 0,
        title: '',
        author: '',
        published: 2019,
        category: ''
      };
    }
    console.log(this.viewdata);
  }
}
