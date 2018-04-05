import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";
import { ApiService } from './api.service';
import { Post, Article } from './../models/post'
@Injectable()
export class PostService {
    static ENDPOINT: string = "/api/articles/:id";
  
    constructor( private request : ApiService) {
    }
  
    getAll() : Observable<Article[]>  {
        return this.request.getItems('articles').map((response: any) => {
            return response;
        });
    }


    // getRoles() :Observable<Response>  {
    //  return this.request.getItems('roles').map((response: Response) => response);
    // }
    /*
    getById(id: string):Observable<any> {
      return this._http
                 .get(TodoService.ENDPOINT.replace(/:id/, id))
                 .map((r) => r.json());
    }
  

  
    remove(id: string): Observable<any> {
      return this._http
                 .delete(TodoService.ENDPOINT.replace(/:id/, id));
    }
    */
  }
  