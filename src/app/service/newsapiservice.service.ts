import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {

  constructor(private _http:HttpClient) { }

  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=id&apiKey=b779c8886401443db69b90daaa9744a6";

  techApiUrl = "https://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=b779c8886401443db69b90daaa9744a6";

  sportsApiUrl = "https://newsapi.org/v2/top-headlines?country=id&category=sports&apiKey=b779c8886401443db69b90daaa9744a6";


  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }
  techNews():Observable<any>
  {
    return this._http.get(this.techApiUrl);
  }
  sportsNews():Observable<any>
  {
    return this._http.get(this.sportsApiUrl);
  }
}
