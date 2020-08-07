import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Category } from '../category/category';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class CategoryService {
  constructor(private httpApi: HttpClient) { }
  path = "http://localhost:3000/categories"

  getCategories(): Observable<Category[]> {
    return this.httpApi.get<Category[]>(this.path).pipe(
      tap(data => {
        console.log(JSON.stringify(data))
      }),
      catchError(this.handleError)
    )
  };

  errorMessage: string;

  handleError(err: HttpErrorResponse) {
    this.errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      this.errorMessage = 'Bir hata olustu ' + err.error.message
    }
    else {
      this.errorMessage = 'Sistemsel bir hata'
    }
    return throwError(this.errorMessage);
  }
}
