import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreweryService {
  private apiUrl = 'http://localhost:3000/api/breweries';  

  constructor(private http: HttpClient) {}

  getAllBreweries(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getBreweryById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createBrewery(brewery: any): Observable<any> {
    return this.http.post(this.apiUrl, brewery);
  }

  updateBrewery(id: number, brewery: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, brewery);
  }

  deleteBrewery(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
