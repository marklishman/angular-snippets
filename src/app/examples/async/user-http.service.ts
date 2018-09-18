import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { UserDetailsDto } from './user-details-dto';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  private readonly Url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {
  }

  getUsers$(): Observable<UserDetailsDto[]> {
    return this.http.get<UserDetailsDto[]>(this.Url)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    if (error.error instanceof ErrorEvent) {
      return throwError(`An error occurred: ${error.error.message}`);
    }
    return throwError(`Server returned code ${error.status}`);
  }
}
