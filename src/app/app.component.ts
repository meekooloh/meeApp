import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component,HostListener, OnInit } from '@angular/core';
import { Directive, Input, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AgmCoreModule } from '@agm/core';
import { WindowService } from './services/window.service';
import { TodoService } from './services/todo.service';
import { PostService } from './services/post.service';
import { CategoryService } from './services/category.service';

import { GeolocationService } from '../app/services/geolocation.service';
import { PostComponent } from './components/post/post.component';
import { Article, Post, Category, MetaData } from './models/post';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public articles : Array<Article>;
    public categories : Array<Category>;
    private filter : string;
    public ITEMS_STEP : number = 5;
    public articleListInit : number;
    public articleListEnd : number;

    loading : boolean = false;
    constructor(public windowService: WindowService,
                public postService: PostService,
                private categoryService: CategoryService,
                public todoService: TodoService,
                private route: ActivatedRoute,
                private router: Router) {

    }

    tooggleMenu() {
        var x = this.windowService.window.document.getElementById("myTopnav");
        if (x.className.indexOf("responsive")==-1) {
            x.className += " responsive";
        } else {
            x.classList.remove("responsive");
        }
    }

    ngOnInit(){
        this.route.params.subscribe(params => {
            this.filter = params['id'];
        });

        this.categoryService.getAll().subscribe((categories) => {
            this.categories = categories;
        });
        this.articleListInit = 0;
        this.articleListEnd = this.ITEMS_STEP;
        this.postService.getAll(this.articleListInit, this.articleListEnd).subscribe((articles) => {
            this.articles = articles;
            this.articleListInit = this.articleListInit + this.ITEMS_STEP;
            this.articleListEnd = this.articleListEnd + this.ITEMS_STEP;
        });

         
    }

    more() {
        this.loading = true;
        this.postService.getAll(this.articleListInit, this.articleListEnd).subscribe((response) => {
            this.articles = this.articles.concat(response);
            if (response.length < this.ITEMS_STEP) {
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
