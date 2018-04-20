import { Component, OnInit, OnChanges, AfterViewChecked, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { WindowService } from '../../services/window.service';

@Component({
  selector: 'app-metadata-displayer',
  templateUrl: './metadata-displayer.component.html',
  styleUrls: ['./metadata-displayer.component.scss']
})
export class MetadataDisplayerComponent implements OnInit {
  @ViewChild('youtube') youtube: ElementRef;
  @Input() link: string;
  videoHeight: number;

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
  }
  ngAfterViewChecked() {
    this.fitVideo();
  }

  onResize(e) {
    this.fitVideo();
  }

  fitVideo() {
    if (!!this.youtube && !!this.youtube.nativeElement) {
      this.youtube.nativeElement.height = this.youtube.nativeElement.offsetWidth*240/426;
    }
  }
}
