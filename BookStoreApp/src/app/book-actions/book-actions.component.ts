import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../shared/app-data-service/app-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IBookInfo } from '../data-models/ibook-info';
import { map, tap } from 'rxjs/operators';
import { get, set } from 'lodash';
import { NgForm } from '@angular/forms';
import { AppToastrService } from '../shared/toaster/toaster.service';

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
    private router: Router,
    private toastrService: AppToastrService
  ) {}

  private bookId: number;
  viewdata: IBookInfo;
  bookObj: IBookInfo = {
    id: 0,
    title: '',
    author: '',
    published: 2019,
    category: ''
  };

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
      this.viewdata = { ...this.bookObj };
    }
    console.log(this.viewdata);
  }

  resetForm(form: NgForm) {
    form.reset();
    this.viewdata = { ...this.bookObj };
  }

  submitForm(form: NgForm) {
    console.log(this.viewdata);
    if (form.status.toLowerCase() === 'valid') {
      this.appDataService
        .updateBookInfo(this.viewdata)
        .subscribe(bookDetails => {
          console.log(bookDetails);
          this.toastrService.showSuccess(`Added/Updated Book: ${bookDetails.title}`);
        });
    } else {
      return;
    }
  }
}
