import { Component, OnInit, Input, Output, EventEmitter, ViewChild, AfterViewChecked, OnChanges } from '@angular/core';
import { Post, Category } from './../../models/post';
import { MetadataDisplayerComponent } from './../metadata-displayer/metadata-displayer.component';
import { NavFilterComponent } from './../nav-filter/nav-filter.component';
import { UserDateInfoComponent } from './../user-date-info/user-date-info.component';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { CategoryService } from '../../services/category.service';
import { WindowService } from '../../services/window.service';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnChanges, AfterViewChecked {
    @ViewChild('postitem') postitem;

    @Input() post: Post;
    @Input() categories: Category[];
    splittedMetadata: string[];
    metadata: any = {};

    constructor(private router: Router,
            private windowService: WindowService,
            private categoryService: CategoryService,
            public postService: PostService,
            private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.getCategories();
        this.route.params.subscribe(queryParams => {
            if (!!queryParams.id) {
                this.postService.getById(queryParams.id)
                .subscribe(post => {
                  this.post = post;
                  this.splittedMetadata = post.info.split('<metadata ');
                  post.metadata.forEach( meta => {
                    this.metadata[meta['_id']] = meta;
                  })
                });
            }
        });
    }

    ngOnChanges() {
        this.splittedMetadata = this.post.info.split('<metadata ');
        this.post.metadata.forEach( meta => {
            this.metadata[meta['_id']] = meta;
        });
    }
    getCategories() {
        this.categoryService.getAll().subscribe((categories) => {
            this.categories = categories;
        });
    }
    displayPost(e) {
        this.router.navigate(['articles', this.post['_id']]);
    }

    ngAfterViewChecked() {
        if (this.windowService.window.document.getElementsByClassName("post-container").length > 2) {
            this.postitem.nativeElement.parentElement.classList.add("post-container-list");
        }
        if (this.windowService.window.document.getElementsByClassName("post-container").length === 2) {
            this.windowService.window.document.getElementsByClassName("post-container")[0].classList.add("post-container-list");
            this.windowService.window.document.getElementsByClassName("post-container")[1].classList.add("post-container-list");
        }
        if (!!this.postitem) {
            if (this.postitem.nativeElement.querySelector(".post-content-container").getBoundingClientRect().height > 
            this.postitem.nativeElement.parentElement.getBoundingClientRect().height - 50) {
                this.postitem.nativeElement.parentElement.children[1].classList.add("show");
                this.postitem.nativeElement.querySelector(".post-content-container").getBoundingClientRect().height =
                    this.postitem.nativeElement.querySelector(".post-content-container").getBoundingClientRect().height - 170;
            }
        }
    }
}
