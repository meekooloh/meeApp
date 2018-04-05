import { Response, ResponseOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RequestService } from './request.service';
import * as config from './../app.config';


@Injectable()
export class ApiService {

  private host: string;

  constructor(private request: RequestService) {
    this.host = config.AppConfig.api.endpoint;
  }

  getItem(type: string, itemId: any): Observable<Response> {
    return this.request.get(`${this.host}/${type}/${itemId}`);
  }

  getItems(type: string): Observable<Response> {
    return this.request.get(`${this.host}/${type}`);
  }
  
  getItemsFilter(type: string, params:any): Observable<Response> {
    return this.request.get(`${this.host}/${type}`, params);
  }

  deleteItem(type: string, itemId: any): Observable<Response> {
    return this.request.delete(`${this.host}/${type}/${itemId}`);
  }

  saveItem(type: string, item: any): Observable<Response> {
    return this.request.post(`${this.host}/${type}`, item);
  }

  editItem(type: string, itemId: any, data: any): Observable<Response> {
    return this.request.patch(`${this.host}/${type}/${itemId}`, data);
  }

  // authentication
  createItem(type: string, data: any): Observable<Response> {
    return this.request.authenticate(`${this.host}/${type}`, data);
  }

  updateItem(type: string, data: any): Observable<Response> {
    return this.request.put(`${this.host}/${type}`, data);
  }

  activateUser(type: string, id: any): Observable<Response> {
    return this.request.putFixed(`${this.host}/${type}/${id}/activate`,{});
  }
}


