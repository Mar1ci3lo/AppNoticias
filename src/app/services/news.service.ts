import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


import { NewsResponse,Article } from '../interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const apikey = environment.apikey

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {}

  getTopHeadlines ():Observable<Article[]>{
    return this.http.get<NewsResponse>('https://newsapi.org/v2/top-headlines?country=us&category=business', {params:{apikey:apikey}})
    .pipe(map(({articles})=>articles))
  }
}

