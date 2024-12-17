import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  private apiUrl = 'http://localhost:3000/api/beers';

  constructor(private http: HttpClient) {}

  getAllBeers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getBeerById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createBeer(beer: any): Observable<any> {
    return this.http.post(this.apiUrl, beer);
  }

  updateBeer(id: number, beer: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, beer);
  }

  deleteBeer(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
