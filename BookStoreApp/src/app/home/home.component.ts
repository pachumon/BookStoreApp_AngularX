import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { AppDataService } from '../shared/app-data-service/app-data.service';
import { IBookInfo } from '../data-models/ibook-info';
import { AppToastrService } from '../shared/toaster/toaster.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'book-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private appDataService: AppDataService,
    private toastrService: AppToastrService
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
      this.toastrService.showSuccess(`Removed the Book: ${bookInfo.title}`);
      this.getBookCollectionData();
    });
  }

  getBookCollectionData(): void {
    this.appDataService.getBookCollection().subscribe(data => {
      this.viewdata = data;
    });
  }
}
