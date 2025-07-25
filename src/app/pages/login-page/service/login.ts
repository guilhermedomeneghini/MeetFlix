import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { UserLogin } from '../interfaces/login.interface';

@Injectable({
  providedIn: 'root',
})
export class Login {
  readonly ENDPOINT = 'https://api-filmes-vo0f.onrender.com/';

  private _httpClient = inject(HttpClient);

  post(userLogin: UserLogin) {
    return this._httpClient
      .post<{ access_token: string }>(`${this.ENDPOINT}auth/login`, userLogin, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .pipe(
        catchError((error) => {
          if (error.status === 401) {
            return throwError(() => new Error('Email ou senha inválidos.'));
          }
          return throwError(() => error);
        })
      );
  }
}
