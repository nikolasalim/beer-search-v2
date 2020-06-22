import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Beer } from '../models/Beer';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  apiUrl = 'https://api.punkapi.com/v2/beers?beer_name=';

  constructor(private http: HttpClient) {}

  searchBeers(input: string) {
    return this.http.get<[]>(`${this.apiUrl}${input}`);
  }
}
