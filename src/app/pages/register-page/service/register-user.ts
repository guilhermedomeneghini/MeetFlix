import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RegisterPayload } from '../interfaces/model/register.interface';

@Injectable({
  providedIn: 'root',
})
export class RegisterUser {
  readonly ENDPOINT = 'https://api-filmes-vo0f.onrender.com/';
  private _httpClient = inject(HttpClient);

  post(registerUser: RegisterPayload) {
    return this._httpClient.post<RegisterUser>(
      `${this.ENDPOINT}auth/register`,
      registerUser
    );
  }
}
