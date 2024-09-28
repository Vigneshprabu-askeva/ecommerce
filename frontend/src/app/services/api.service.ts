import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Customer } from '../shared/models/customer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = environment.apiUrl;
  private url = environment.apiUrl;

  constructor(private _http: HttpClient) {}

  getTypeRequest(url: string) {
    return this._http.get(`${this.baseUrl}${url}`).pipe(
      map((res) => {
        return res;
      })
    );
  }
  postTypeRequest(url: string, payload: any) {
    return this._http.post(`${this.baseUrl}${url}`, payload).pipe(
      map((res) => {
        return res;
      })
    );
  }
  putTypeRequest(url: string, payload: any) {
    return this._http.put(`${this.baseUrl}${url}`, payload).pipe(
      map((res) => {
        return res;
      })
    );
  }

  getAllCustomers(){
    return this._http.get(`${this.url}users`).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
