import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../shared/app-data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private appDataService: AppDataService) {}

  private viewdata = [];

  ngOnInit() {
    console.log(this);
    this.appDataService.getBookCollection().subscribe(data => {
      this.viewdata = data;
    });
  }
}
