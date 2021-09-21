import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

const API_URL = 'http://localhost:8080/api/test/';

export interface UserInterface {
  id : number;
  username : string;
  email : string;

}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(API_URL + 'listUserbyrole');
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  getUserNumber(): Observable<any> {
    return this.http.get(API_URL + 'count', { responseType: 'text' });
  }

  deleteUser(id:number) {
    return this.http.delete<String>(API_URL + 'listUserbyrole/' + id, { responseType: 'text' as 'json'}
    );
  }

  /*getExpense(id: number): Observable<User> {
    return this.http.get<User>(`${this.API_URL +'listUserbyrole'}/${id}`).pipe(
      map(response => response)
    )
  }

  deleteExpense(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL+'listUserbyrole'}/${id}`, {responseType: 'text'});
  }*/
}
