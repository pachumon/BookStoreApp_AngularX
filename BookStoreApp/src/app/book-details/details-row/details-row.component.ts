import { Component, OnInit, Input } from '@angular/core';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'book-details-row',
  templateUrl: './details-row.component.html',
  styleUrls: ['./details-row.component.css']
})
export class DetailsRowComponent implements OnInit {
  constructor() {}
  @Input() labelName: string;
  @Input() content: string;

  ngOnInit() {

  }
}
