import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'http://localhost:8000/api/'

  constructor(public http: HttpClient) { }

  register(data): Observable<any> {
    return this.http.post(this.apiUrl + 'register', data);
  }

  login(data): Observable<any> {
    return this.http.post(this.apiUrl + "login", data);
  }
}
