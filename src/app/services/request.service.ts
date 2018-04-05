import { Injectable } from '@angular/core';
import { Http,Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
//import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import * as config from './../app.config';
import 'rxjs/add/operator/map';


@Injectable()
export class RequestService {

  constructor(private http: Http) { }

  get (url: string, parameters?: any): Observable<Response> {
    return this.http.get(this.getUrl(url))
    .map(this.extractData);
  }

  authenticate (url: string, body: any): Observable<any> {
    //return this.https.get(" http://meekooloh.com/api/v1/alive", this.getOptions( )).map(this.extractData);      
    return this.http.post(this.getUrl(url), body, this.getOptions()).map(this.extractData);
  }
  post (url: string, body: any): Observable<any> {
      return this.http.post(this.getUrl(url), body,  this.getOptions()).map(this.extractData);
  }
  
  putFixed (url: string, body: any): Observable<any> {
    return this.http.put(this.getUrl(url), body,  this.getOptions()).map(this.extractData);
  }

  put (url: string, body: any): Observable<any> {
    return this.http.put(this.getUrl(url), body, this.getOptions()).map(this.extractData);
  }

  patch (url: string, body: any): Observable<any> {
    return this.http.put(this.getUrl(url), body, this.getOptions()).map(this.extractData);
  }

  delete (url: string): Observable<any> {
    return this.http.delete(this.getUrl(url), this.getOptions()).map(this.extractData);
  }

  private getUrl(url){
    return config.AppConfig.api.url+url;
  }
  /*private jwt() {
      // create authorization header with jwt token
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (currentUser && currentUser.token) {
          let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
          return new RequestOptions({ headers: headers });
      }
  }*/
  private getOptions(parameters?: any): RequestOptions {
      // let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      let headers: Headers;
      headers =  new Headers({'Content-Type': 'application/json'});
      /*if (currentUser && currentUser.token) {
          headers = new Headers({ 'Authorization': currentUser.token });
          headers.set('Content-Type', 'application/json');

      }else{
          headers = new Headers();
          headers.set('platform', 'BO');
          headers.set('Content-Type', 'application/json');

      }  
      if (typeof(parameters)=='object' && parameters['token']== undefined){
        let params: URLSearchParams = new URLSearchParams();
        for (let i = 0;i< Object.keys(parameters).length;i++) {
          let key =Object.keys(parameters)[i];
          let value = parameters[Object.keys(parameters)[i]];
          params.set( key , value );
        }
        return new RequestOptions({ headers: headers , params:params});
      }else if(typeof(parameters)=='object' && parameters['token']!= undefined){
        console.log(parameters['token'])
        headers.set('Authorization', parameters['token']);
      }*/
      return new RequestOptions({ headers: headers });

  }
/*
  private getHeaders(): Headers {
    let headers: Headers = new Headers();
    headers.set('Content-Type', 'application/json');
    return headers;
  }
*/
/*  private getURLSeachParameters (parameters: any = {}): URLSearchParams {
    let search: URLSearchParams = new URLSearchParams();

    Object.getOwnPropertyNames(parameters).forEach(element => {

      let val: any = parameters[element];

      if (typeof val === 'object') {
        if (Object.prototype.toString.call(val) === '[object Array]') {
          val.forEach(part => search.append(element, JSON.stringify(part)));
          return;
        }

        val = JSON.stringify(val);
      }

      search.set(element, val);
    });
    return search;
  }*/

  private extractData(res: Response): any {
    let body: any = (res.status !== 204 && !!res['_body'] ? res.json() : {status:res.status, data:res['_body']});
    return body || { };
  }

}
