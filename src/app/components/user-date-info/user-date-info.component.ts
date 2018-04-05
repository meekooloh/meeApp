import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-date-info',
  templateUrl: './user-date-info.component.html',
  styleUrls: ['./user-date-info.component.scss', './../../app.component.css']
})
export class UserDateInfoComponent implements OnInit {
  @Input() user: string;
  @Input() date: string;
  dateA : any;
  constructor() { }

  ngOnInit() {
    if (!this.user) {
      this.user = 'meekooloh';
    }
  }

}
