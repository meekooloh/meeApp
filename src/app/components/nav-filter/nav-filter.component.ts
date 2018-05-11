import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../models/post';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nav-filter',
    templateUrl: './nav-filter.component.html',
    styleUrls: ['./nav-filter.component.scss']
})
export class NavFilterComponent implements OnInit {
    @Input() cat: Category;
    @Input() cats: Category[];

    categories : Category[];
    c: any;

    constructor(private router: Router) { }

    ngOnInit() {
        this.categories = [];
        if (this.cat) {
            for (var i = 0; i < this.cat.level; i++) {
                if (this.cats.length > 0 ) {
                    this.categories.push(this.cats.find(c => c.level == i + 1 && c.value == String(this.cat.value).slice(0, i + 1)));
                }
            }
        }
    }
    ngOnChanges(){
        if (this.cat!= undefined){
            this.c={
                'label':this.cat
            }
        }     
        if (this.cat!= undefined){
            this.c['class']="selected";
        }
    }


    filterItem(e) {
      this.router.navigate(['/list'], { queryParams : {category: e.target.text }});
      e.stopPropagation();
    }
}
