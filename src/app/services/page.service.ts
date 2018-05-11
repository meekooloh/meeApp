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

    /*
    getById(id: string):Observable<Article> {
      return this.request.getItem('articles', id)
              .map((response: any) => response);
    }
    */
}
