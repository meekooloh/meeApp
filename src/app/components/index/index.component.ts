import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  @Input() strct: string;

  constructor() { }

  ngOnInit() {
  	debugger;
  }
  doSomething(e){
	debugger
  }
}
