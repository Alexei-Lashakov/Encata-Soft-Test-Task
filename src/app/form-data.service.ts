import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserLogIn } from './login/user-login';
import { UserRegistr } from './registration/user-registration';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  constructor(private _http: HttpClient) { }

  submitLogIn(user: UserLogIn) {
    return this._http.post<UserLogIn>('http://localhost:3000/api/login', user);
  }

  submitRegistr(user: UserRegistr) {
    return this._http.post<UserRegistr>('http://localhost:3000/api/registration', user);
  }
}
