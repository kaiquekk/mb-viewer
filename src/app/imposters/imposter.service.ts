import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImposterService {
  private productUrl = 'http://localhost:';

  constructor(private http: HttpClient) { }

  getImposters(port: number): Observable<Object> {
    return this.http.get<Object>(`${this.productUrl}${port}/imposters`)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

//   getProduct(id: number): Observable<IProduct | undefined> {
//     return this.getProducts()
//       .pipe(
//         map((products: IProduct[]) => products.find(p => p.productId === id))
//       );
//   }

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
