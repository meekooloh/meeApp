import {
    Inject,
    Injectable
  } from "@angular/core";
  
  import {
    Observable
  } from "rxjs/Observable";
  
  import {
    Http,
    Headers
  } from "@angular/http";
  
  import "rxjs/add/operator/map";
  
  import { ApiService } from './api.service';

  @Injectable()
  export class TodoService {
    static ENDPOINT: string = "/api/todos/:id";
  
    constructor(
                private request : ApiService) {
  
    }
  
    getAll() : Observable<Response>  {
      return this.request.getItems('todos').map((response: any) => {
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
  
    add(message: string): Observable<any> {
      let _messageStringified = JSON.stringify({todoMessage: message});
  
      let headers = new Headers();
  
      headers.append("Content-Type", "application/json");
  
      return this._http
                 .post(TodoService.ENDPOINT.replace(/:id/, ""), _messageStringified, {headers})
                 .map((r) => r.json());
    }
  
    remove(id: string): Observable<any> {
      return this._http
                 .delete(TodoService.ENDPOINT.replace(/:id/, id));
    }
    */
  }
  