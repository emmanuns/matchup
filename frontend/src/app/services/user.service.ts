import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'http://localhost:8000/api/'

  httpHeaders = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };

  constructor(public http: HttpClient) { }

  getUser(id): Observable<any> {
    return this.http.get(this.apiUrl + 'user/' + id);
  }
}
