import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-index-looper',
  templateUrl: './index-looper.component.html',
  styleUrls: ['./index-looper.component.css']
})
export class IndexLooperComponent implements OnInit {
  @Input() level: number;
  @Input() items: any;

  className= "hidden";
  display=2;
  _ : any;
  constructor() { }

  ngOnInit() {
  this._=this;
  }
  ngOnChanges() {
  	if (this.level<this.display){
  		this.className="";
  	}else{
  		this.className="hidden";
  	}
  }
  indexSpread(e){
  	
  	if (this.items.level> 1){
  		this.items.level=1;
  	}else{
  		this.items.level+=1;
  	}
  	console.log(this._.items);
  }

}
