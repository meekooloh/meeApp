import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post, Category } from './../../models/post';
import { MetadataDisplayerComponent } from './../metadata-displayer/metadata-displayer.component';
import { NavFilterComponent } from './../nav-filter/nav-filter.component';
import { UserDateInfoComponent } from './../user-date-info/user-date-info.component';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  @Input() categories: Category[];
  
  constructor() { }

  ngOnInit() {
  }

}
