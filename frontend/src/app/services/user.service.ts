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

  getUserFollowers(): Observable<any> {
    this.httpHeaders.headers["Authorization"]= "Bearer " + localStorage.getItem('userToken');
    return this.http.get(this.apiUrl + 'user/followers', this.httpHeaders );
  }
  
  getUserFollowing(): Observable<any> {
    this.httpHeaders.headers["Authorization"]= "Bearer " + localStorage.getItem('userToken');
    return this.http.get(this.apiUrl + 'user/following', this.httpHeaders );
  }


}
