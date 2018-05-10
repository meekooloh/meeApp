import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-index-looper',
    templateUrl: './index-looper.component.html',
    styleUrls: ['./index-looper.component.css']
})
export class IndexLooperComponent implements OnInit {
    @Input() level: number;
    @Input() items: any;
    @Input() max: number;
    @Input() parent: any;

    className= "hidden";
    display=2;
    _ : any;
    constructor(private route: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit() {
    }
    ngOnChanges() {
    }
    
    indexSpread(e){
        this.className=="hidden" ? this.className="" : this.className="hidden";
    }

    filterItem(e) {
        this.router.navigate(['/list'], { queryParams : {category: e.target.text }});
        e.stopPropagation();
    }
}
