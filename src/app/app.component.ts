import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component,HostListener, OnInit } from '@angular/core';
import { Directive, Input, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { AgmCoreModule } from '@agm/core';
import { WindowService } from './services/window.service';
import { TodoService } from './services/todo.service';
import { PostService } from './services/post.service';
import { CategoryService } from './services/category.service';

import { PageService } from '../app/services/page.service';
import { PostComponent } from './components/post/post.component';
import { Article, Post, Category, MetaData } from './models/post';

import { ComponentsModule } from './components/components.module'
import { RouteModel } from './models/route';
import { PageComponent } from './components/page/page.component';
import { appRoutes } from 'app/app.routing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    @HostListener('document:click', ['$event'])
    onclick(ev:KeyboardEvent) {
        if (ev.target['id'] !== 'toogleMenu') {
            this.closeMenu();
        }
    }

    static ITEMS_STEP: number = 5;
    public categories : Array<Category> = [];

    routes : Array<RouteModel> = [];
    actualRoute: string;

    constructor(public windowService: WindowService,
        private router : Router,
        private pageService : PageService,
        private categoryService: CategoryService
    ) {
        this.router.events
            .subscribe((event) => {
                this.closeMenu();
                if (/^\/([a-zA-Z0-9_-]+)$/.test(event['url'])) {
                    this.actualRoute = event['url'];
                } else {
                    this.actualRoute = undefined;
                }
            });
    }

    closeMenu() {
        var x = this.windowService.window.document.getElementById("myTopnav");
        if (x.classList.contains("responsive")) {
            x.classList.remove("responsive");
        }   
    }
    tooggleMenu() {
        var x = this.windowService.window.document.getElementById("myTopnav");
        if (x.classList.contains("responsive")) {
            x.classList.remove("responsive");
        } else {
            x.classList.add("responsive");
        }
    }

    ngOnInit(){
        this.getCategories();
        this.getRoutes();
    }

    getCategories() {
        this.categoryService.getAll().subscribe((categories) => {
            this.categories = categories;
        });
    }

    getRoutes() {
        if (this.routes.length > 0) {
            this.routes.forEach( route => {
                let newItem = {
                    path: route.route,
                    component: PageComponent
                };
                this.router.config.splice(0,0, newItem);
            });
            if (this.actualRoute) {
                this.router.navigate([this.actualRoute]);
            }
        } else {
            this.pageService.getRoutes().subscribe(res => {
                this.routes = res;
                res.forEach( route => {
                    let newItem = {
                        path: route.route,
                        component: PageComponent
                    };
                    this.router.config.splice(0,0, newItem);
                    
                });
                if (this.actualRoute) {
                    this.router.navigate([this.actualRoute]);
                }
            })
        }
    }

}
