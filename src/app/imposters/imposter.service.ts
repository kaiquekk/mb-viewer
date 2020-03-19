import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, ObservedValueOf } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IImposter } from './imposter';
import { IStub } from './stub';

@Injectable({
  providedIn: 'root'
})
export class ImposterService {
  private url = 'http://localhost:';

  constructor(private http: HttpClient) { }

  getImposters(port: number): Observable<Object> {
    return this.http.get<Object>(`${this.url}${port}/imposters`)
      .pipe(
        tap(data => JSON.stringify(data)),
        catchError(this.handleError)
      );
  }

  getImposter(mbPort: number, port: number): Observable<IImposter | undefined> {
    return this.http.get<IImposter>(`${this.url}${mbPort}/imposters/${port}`)
      .pipe(
        tap(data => JSON.stringify(data)),
        catchError(this.handleError)
      );
  }

  deleteImposter(mbPort: number, port: number): Observable<IImposter | undefined> {
    return this.http.delete<IImposter>(`${this.url}${mbPort}/imposters/${port}`)
      .pipe(
        tap(data => JSON.stringify(data)),
        catchError(this.handleError)
      )
  }

  putStubs(mbPort: number, port: number, stubs: Object): Observable<IImposter | undefined> {
    return this.http.put<IImposter>(`${this.url}${mbPort}/imposters/${port}/stubs`, stubs)
      .pipe(
        tap(data => JSON.stringify(data)),
        catchError(this.handleError)
      )
  }

  postStub(mbPort: number, port: number, stub: Object): Observable<IImposter | undefined> {
    return this.http.post<IImposter>(`${this.url}${mbPort}/imposters/${port}/stubs`, stub)
      .pipe(
        tap(data => JSON.stringify(data)),
        catchError(this.handleError)
      )
  }

  deleteStub(mbPort: number, port: number, index: number): Observable<IImposter | undefined> {
    return this.http.delete<IImposter>(`${this.url}${mbPort}/imposters/${port}/stubs/${index}`)
      .pipe(
        tap(data => JSON.stringify(data)),
        catchError(this.handleError)
      )
  }

  postImposter(mbPort: number, imposter: IImposter): Observable<IImposter | undefined> {
    return this.http.post<IImposter>(`${this.url}${mbPort}/imposters`, imposter)
      .pipe(
        tap(data => JSON.stringify(data)),
        catchError(this.handleError)
      )
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
