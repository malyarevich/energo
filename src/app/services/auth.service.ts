import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

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

  constructor(private http: HttpClient, private cookie: CookieService) {
    this.getToken();
  }

  getToken() {
    this.http.post(`https://www.zoe.com.ua/connection/api/api-token-auth/`, {username: "malyarevich", password: "malyarevich"}).subscribe(
      (res) => {
        this.token = res['token'];
        this.cookie.set('csrftoken', this.token, 365);
        console.log("token", this.token)
      })
  }
}
