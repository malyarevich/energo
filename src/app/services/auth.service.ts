import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token$: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  get token() {
    return this.token$.getValue();
  }
  set token(value: string) {
    this.token$.next(value);
  }

  constructor(private http: HttpClient) {
    this.getToken();
  }

  getToken() {
    this.http.post(`http://www.zoe.com.ua/connection/api/api-token-auth/`, {username: "qqqqwwww", password: "eeeerrrr"}).subscribe(
      (res) => {
        this.token = res['token'];
        console.log("token", this.token)
      })
  }
}
