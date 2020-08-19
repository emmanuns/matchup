import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'http://localhost:8000/api/'

  httpHeaders = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };

  constructor(public http: HttpClient) { }

  register(data): Observable<any> {
    return this.http.post(this.apiUrl + 'register', data);
  }

  login(data): Observable<any> {
    return this.http.post(this.apiUrl + "login", data);
  }

  logout(): Observable<any> {
    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem('userToken');
    localStorage.removeItem('userToken');
    localStorage.removeItem('userId');
    return this.http.get(this.apiUrl + "logout", this.httpHeaders);
  }
}
