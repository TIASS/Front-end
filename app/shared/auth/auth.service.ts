import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { LoginData, SigninData } from "./auth";
import { Config } from "../config";

@Injectable()
export class AuthService {
  constructor(private http: Http) { }

  login(auth: LoginData) {

    return this.http.post(
      Config.apiUrl + "auth/login", 
      JSON.stringify(auth), 
      { headers: this.getCommonHeaders() }
    ) 
    .map(response => response.json())
    .do(data => { Config.LCD = data })
    .catch(this.handleErrors);
  }
  register(auth: SigninData) {
    return this.http.post(
      Config.apiUrl + "auth/signin",
      JSON.stringify(auth),
      { headers: this.getCommonHeaders() }
    )
      .map(response => response.json())
      .do(data => { Config.LCD = data })
      .catch(this.handleErrors);
  }


  handleErrors(error: Response) {

    return Observable.throw(error);
  }


  getCommonHeaders() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return headers;
  }
}
