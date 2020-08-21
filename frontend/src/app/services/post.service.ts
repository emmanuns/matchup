import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiUrl = 'http://localhost:8000/api/'

  httpHeaders = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };

  constructor(public http: HttpClient) { }

  getPost(id): Observable<any> {
    return this.http.get(this.apiUrl + 'post/' + id);
  }

  getAllPosts(): Observable<any> {
    return this.http.get(this.apiUrl + 'post');
  }

  userViewPosts(): Observable<any> {
    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem('userToken');
    return this.http.get(this.apiUrl + 'user/posts', this.httpHeaders);
  }

  getUserPosts(id): Observable<any> {
    return this.http.get(this.apiUrl + 'user/posts/' +id);
  }

  userPosting(data): Observable<any> {
    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem('userToken');
    return this.http.post(this.apiUrl + 'user/post', data, this.httpHeaders);
  }

  searchPosts(data): Observable<any> {
    return this.http.post(this.apiUrl + 'postSearch', data);
  }

  editingPost(id, data): Observable<any> {
    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem('userToken');
    return this.http.put(this.apiUrl + 'post/' + id, data, this.httpHeaders);
  }

  deletePost(id): Observable<any> {
    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem('userToken');
    return this.http.delete(this.apiUrl + 'post/' + id, this.httpHeaders);
  }

  // Métodos para comentários

  getCommentsFromPost(id): Observable<any> {
    return this.http.get(this.apiUrl + 'post/' + id + '/comments');
  }

  userCommenting(data): Observable<any> {
    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem('userToken');
    return this.http.post(this.apiUrl + 'user/commentPost', data, this.httpHeaders);
  }

  deleteComment(id): Observable<any> {
    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem('userToken');
    return this.http.delete(this.apiUrl + 'commentPost/' + id, this.httpHeaders);
  }
}
