import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  pageContent : string;
  constructor() { }

  ngOnInit() {
    this.pageContent = 'sadfsadfsadfa dgreg rweh rethjrwh45 rewer';
  }

}
