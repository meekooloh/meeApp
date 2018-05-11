import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component,HostListener, OnInit } from '@angular/core';
import { Directive, Input, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AgmCoreModule } from '@agm/core';
import { WindowService } from './../../services/window.service';
import { TodoService } from './../../services/todo.service';
import { PostService } from './../../services/post.service';
import { CategoryService } from './../../services/category.service';

import { GeolocationService } from '../../services/geolocation.service';
import { PostComponent } from './../../components/post/post.component';
import { Article, Post, Category, MetaData } from './../../models/post';
import { Observable } from 'rxjs/Observable';
import { AppComponent } from '../../app.component';

@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    public articles : Array<Article>;
    public categories : Array<Category> = [];
    public ITEMS_STEP : number = AppComponent.ITEMS_STEP;
    public articleListInit : number;
    public articleListEnd : number;
    private category: string;
    loading : boolean = false;
    constructor(public windowService: WindowService,
            public postService: PostService,
            private categoryService: CategoryService,
            public todoService: TodoService,
            private route: ActivatedRoute,
            private router: Router) { }

    tooggleMenu() {
        var x = this.windowService.window.document.getElementById("myTopnav");
        if (x.className.indexOf("responsive")==-1) {
            x.className += " responsive";
        } else {
            x.classList.remove("responsive");
        }
    }

    ngOnInit(){
        this.getCategories();
        this.route.queryParams.subscribe(queryParams => {
            this.getList(queryParams.category);
        });
    }

    getCategories() {
        this.categoryService.getAll().subscribe((categories) => {
            this.categories = categories;
        });
    }

    getList(category?: string) {
        this.category = category;
        let categoryFilter: Category = this.categories.find( c => c.label === category);
        this.articleListInit = 0;
        this.articleListEnd = this.ITEMS_STEP;
        this.postService.getAll(this.articleListInit, this.articleListEnd, categoryFilter ? categoryFilter['_id'] : null).subscribe((articles) => {
            this.articles = articles;
            this.articleListInit = this.articleListInit + this.ITEMS_STEP;
            this.articleListEnd = this.articleListEnd + this.ITEMS_STEP;
        });
    }
    more() {
        this.loading = true;
        let categoryFilter: Category = this.categories.find( c => c.label === this.category);
        this.postService.getAll(this.articleListInit, this.articleListEnd, categoryFilter ? categoryFilter['_id'] : null).subscribe((response) => {
            this.articles = this.articles.concat(response);
            if (response.length < AppComponent.ITEMS_STEP) {
                this.ITEMS_STEP = 0;
            } else {
                this.articleListInit = this.articleListInit + this.ITEMS_STEP;
                this.articleListEnd = this.articleListEnd + this.ITEMS_STEP;
            }
            this.loading = false;
        }, error => {
            this.loading = false;
        });
    }

}
