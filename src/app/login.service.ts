import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';


@Injectable()
export class LoginService {

  private loginUrl = 'http://api.mstmt.tk/v1/login/facebook';
  private statementsUrl = 'http://api.mstmt.tk/v1/statements';
  private transactionsUrl = 'http://api.mstmt.tk/v1/transactions';

  constructor(private http: HttpClient) { }

  serverLogin(token: string) {
    return this.http.post(this.loginUrl, {
        auth_token: token
      }).pipe(
          catchError(this.handleError)
      );
  }

  getStatements() {
    return this.http
      .get(this.statementsUrl, {
        headers: new HttpHeaders().set('Authorization', `Bearer ${JSON.parse(localStorage.getItem('authUser')).api_token}`)
      })
      .pipe(
        catchError(this.handleError)
      );
  }

  getTransactions() {
    return this.http
      .get(this.transactionsUrl, {
        headers: new HttpHeaders().set('Authorization', `Bearer ${JSON.parse(localStorage.getItem('authUser')).api_token}`)
      })
      .pipe(
        catchError(this.handleError)
      );
  }

  // Implement a method to handle errors if any
  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return Observable.throw(err.message || err);
  }

}
