import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";
import { ApiService } from './api.service';
import { Post, Article } from './../models/post'
import { RouteModel } from "../models/route";

@Injectable()
export class PageService {
    static ENDPOINT: string = "/api/routes/:id";
  
    constructor( private request : ApiService) {
    }
  
    getRoutes() : Observable<RouteModel[]>  {
        return this.request.getItems('routes')
            .map((response: any) => response);
    }

    getPageById(id: string):Observable<any> {
        return this.request.getItem('pages', id)
                .map((response: any) => response);
    }
    getPageByRoute(route: string):Observable<any> {
        return this.request.getItemFilterRoute('pages', route)
                .map((response: any) => response);
    }
    /*
    getById(id: string):Observable<Article> {
      return this.request.getItem('articles', id)
              .map((response: any) => response);
    }
    */
}
