import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-filter',
  templateUrl: './nav-filter.component.html',
  styleUrls: ['./nav-filter.component.css']
})
export class NavFilterComponent implements OnInit {
  @Input() cat: string;
  @Input() cat1?: string;
  @Input() cat2?: string;
  @Input() cat3?: string;
  @Input() cat4?: string;
  @Input() cat5?: string;

  constructor() { }

  ngOnInit() {
  }

}
