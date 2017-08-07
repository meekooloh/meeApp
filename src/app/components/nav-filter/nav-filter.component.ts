import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-filter',
  templateUrl: './nav-filter.component.html',
  styleUrls: ['./nav-filter.component.scss']
})
export class NavFilterComponent implements OnInit {
  @Input() cat: string;
  @Input() cat1?: string;
  @Input() cat2?: string;
  @Input() cat3?: string;
  @Input() cat4?: string;
  @Input() cat5?: string;

  c: any;
  c1: any;
  c2: any;
  c3: any;
  c4: any;
  c5: any;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    if (this.cat5!= undefined){
      this.c5={
        'label':this.cat5
      }    
    }
    if (this.cat4!= undefined){
      this.c4={
        'label':this.cat4
      }    
    }
    if (this.cat3!= undefined){
      this.c3={
        'label':this.cat3
      }    
    }
    if (this.cat2!= undefined){
      this.c2={
        'label':this.cat2
      }
    }
    if (this.cat1!= undefined){
      this.c1={
        'label':this.cat1
      }
    }
    if (this.cat!= undefined){
      this.c={
        'label':this.cat
      }
    }     
    if (this.cat5!= undefined){
      this.c5['class']="selected";
    }else if (this.cat4!= undefined){
      this.c4['class']="selected";
    }else if (this.cat3!= undefined){
      this.c3['class']="selected";
    }else if (this.cat2!= undefined){
      this.c2['class']="selected";
    }else if (this.cat1!= undefined){
      this.c1['class']="selected";
    }else if (this.cat!= undefined){
      this.c['class']="selected";
    }
   
  }
}
