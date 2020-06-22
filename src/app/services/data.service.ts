import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  apiUrl = 'https://api.punkapi.com/v2/beers?beer_name=';

  constructor(private http: HttpClient) {}

  searchBeers() {
    const input = 'hardcore';
    return this.http.get<any>(`${this.apiUrl}${input}`);
  }
  // searchBeers(input) {
  //   return this.http.get<any>(`${this.apiUrl}${input}`);
  // }
}
