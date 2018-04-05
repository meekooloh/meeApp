import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-index-looper',
  templateUrl: './index-looper.component.html',
  styleUrls: ['./index-looper.component.css']
})
export class IndexLooperComponent implements OnInit {
  @Input() level: number;
  @Input() items: any;
  @Input() max: number;
  @Input() parent: Object;

  className= "hidden";
  display=2;
  _ : any;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
  }
  
  indexSpread(e){
    this.className=="hidden" ? this.className="" : this.className="hidden";
  }

}
