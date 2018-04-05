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
    public catIndex : Array<Category>;
    private filter : string;

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
            this.catIndex = categories;
        });
        this.postService.getAll().subscribe((articles) => {
            this.articles = articles;
        });

         
    }

}
