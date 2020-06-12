import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(public _HttpClient: HttpClient) { }

 getnews():Observable<any>
 {
   return this._HttpClient.get("http://newsapi.org/v2/top-headlines?country=eg&apiKey=0e0b5c0cb285451ea2b9e82c0b72a912");
 }

}
