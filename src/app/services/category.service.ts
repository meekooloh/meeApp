import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";
import { ApiService } from './api.service';
import { Post, Category } from './../models/post';

@Injectable()
export class CategoryService {
  
    constructor( private request : ApiService) {
    }
  
    getAll() : Observable<Category[]>  {
        return this.request.getItems('category')
            .map((response: any) => response);

    }

    getById(id: string):Observable<any> {
      return this.request.getItem('category', id)
                 .map((r) => r.json());
    }

  }
  