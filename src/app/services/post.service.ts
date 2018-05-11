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
  
    getAll(articleListInit?, articleListEnd?, category?) : Observable<Article[]>  {
        if (articleListInit !== undefined && articleListEnd !== undefined) {
          if (!!category && category !== undefined) {
            return this.request.getItemsPaginatedFilter('articles', articleListInit, articleListEnd, category)
            .map((response: any) => response);
          } else {
            return this.request.getItemsPaginated('articles', articleListInit, articleListEnd)
            .map((response: any) => response);
          }
        } else {
          if (!!category && category !== undefined) {
            return this.request.getItemsFilter('articles', category)
              .map((response: any) => response);
          } else {
            return this.request.getItems('articles')
              .map((response: any) => response);
          }
        }
      }

    // getRoles() :Observable<Response>  {
    //  return this.request.getItems('roles').map((response: Response) => response);
    // }

    getById(id: string):Observable<Article> {
      return this.request.getItem('articles', id)
              .map((response: any) => response);
    }
  
/*
  
    remove(id: string): Observable<any> {
      return this._http
                 .delete(TodoService.ENDPOINT.replace(/:id/, id));
    }
    */
  }
  