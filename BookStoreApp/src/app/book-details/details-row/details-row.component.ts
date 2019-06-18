import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details-row',
  templateUrl: './details-row.component.html',
  styleUrls: ['./details-row.component.css']
})
export class DetailsRowComponent implements OnInit {
  constructor() {}
  @Input() label: string;
  @Input() content: string;

  ngOnInit() {
    console.log(this);

  }
}
