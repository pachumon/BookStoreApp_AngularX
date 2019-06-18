import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IBookInfo } from '../data-models/ibook-info';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {
  private baseApiUrl = 'http://localhost:3600';

  constructor(private httpClient: HttpClient) {}

  getBookCollection(): Observable<IBookInfo[]> {
    return this.httpClient.get<IBookInfo[]>(`${this.baseApiUrl}/books`).pipe(
      tap(data => console.log(`All Books ${JSON.stringify(data)}`)),
      catchError(this.handleError)
    );
  }

  getBookDetails(bookId): Observable<IBookInfo> {
    return this.httpClient
      .get<IBookInfo>(`${this.baseApiUrl}/books/${bookId}`)
      .pipe(
        tap(data => console.log(`Book details ${JSON.stringify(data)}`)),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `error occured ${err.error.message}`;
    } else {
      errorMessage = `server returned code ${err.status} , error message ${
        err.message
      }`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
