import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authURL: string = environment.dafaServer;
  public headers: HttpHeaders;

  isLoggedIn = false;
  redirectUrl: string;

  constructor(private http: HttpClient) {
    // this.headers = new HttpHeaders().set('Content-Type', 'application/json');
  }

  testApi(): Observable<any> {
    return this.http
      .get(`${this.authURL}`)
      .pipe(
        tap(data => console.log('test external api response >>>>> ', data)),
        catchError(this.handleError('testApi', []))
      );
  }

  login(userData: any): Observable<any> {
    this.log(`login data >>> ${JSON.stringify(userData)}`);
    return this.http.post<any>(this.authURL + '/auth/signin', userData)
      .pipe(
        tap(_ => {this.isLoggedIn = true; }),
        catchError(this.handleError('login', []))
      );
  }

  logout(): Observable<any> {
    return this.http.get<any>(this.authURL + '/auth/signout')
      .pipe(
        tap(_ => this.isLoggedIn = false),
        catchError(this.handleError('logout', []))
      );
  }

  register(data: any): Observable<any> {
    return this.http.post<any>(this.authURL + '/auth/signup', data)
      .pipe(
        tap(_ => this.log('login')),
        catchError(this.handleError('login', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
