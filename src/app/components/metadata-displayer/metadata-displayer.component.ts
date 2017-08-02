import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-metadata-displayer',
  templateUrl: './metadata-displayer.component.html',
  styleUrls: ['./metadata-displayer.component.css']
})
export class MetadataDisplayerComponent implements OnInit {
  @Input() link: string;

  constructor() { }

  ngOnInit() {

  }

}
