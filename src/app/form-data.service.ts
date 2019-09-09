import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserLogIn } from './login/user-login';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  constructor(private _http: HttpClient) { }

  submitLogIn(user: UserLogIn) {
    return this._http.post<UserLogIn>('http://localhost:3000/api/login', user);
  }
}
