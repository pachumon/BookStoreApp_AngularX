import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { AppDataService } from '../shared/app-data.service';
import { IBookInfo } from '../data-models/ibook-info';
import { ToastrService } from 'ngx-toastr';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'book-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private appDataService: AppDataService,
    private toastr: ToastrService
  ) {}

  viewdata: IBookInfo[] = [];

  ngOnInit() {
    console.log(this);
    this.getBookCollectionData();
  }

  deleteBook(bookInfo: IBookInfo) {
    const { id } = bookInfo;

    this.appDataService.removeBookInfo(id).subscribe(data => {
      console.log(bookInfo);
      this.toastr.success(`Removed the Book: ${bookInfo.title}`);
      this.getBookCollectionData();
    });
  }

  getBookCollectionData(): void {
    this.appDataService.getBookCollection().subscribe(data => {
      this.viewdata = data;
    });
  }
}
