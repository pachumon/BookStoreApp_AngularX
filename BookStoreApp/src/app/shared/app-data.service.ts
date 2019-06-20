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
    return this.invokeHttp<IBookInfo[]>('GET', `${this.baseApiUrl}/books`, {});
  }

  getBookDetails(bookId: number): Observable<IBookInfo> {
    return this.invokeHttp<IBookInfo>(
      'GET',
      `${this.baseApiUrl}/books/${bookId}`,
      {}
    );
  }

  updateBookInfo(bookObj: IBookInfo) {
    const { id, ...postData } = bookObj;
    let url = `${this.baseApiUrl}/books`;
    if (id === 0) {
      return this.invokeHttp<IBookInfo>('POST', url, { body: postData });
    } else {
      url = `${url}/${id}`;
      return this.invokeHttp<IBookInfo>('PUT', url, { body: postData });
    }
  }

  removeBookInfo(bookId: number) {
    return this.invokeHttp<IBookInfo>(
      'DELETE',
      `${this.baseApiUrl}/books/${bookId}`,
      {}
    );
  }

  private invokeHttp<T>(
    method: string,
    url: string,
    config: object
  ): Observable<T> {
    return this.httpClient.request<T>(method, url, config).pipe(
      tap(data => console.log(`api response ${JSON.stringify(data)}`)),
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
