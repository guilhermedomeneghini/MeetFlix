import { Component, DestroyRef, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { MessageError } from '../../shared/components/message-error/message-error';
import { Login } from './service/login';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule, MessageError],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  isError = signal(false);

  private _loginService = inject(Login);
  private _destroyRef = inject(DestroyRef);
  private _router = inject(Router);

  registerForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      nonNullable: true,
    }),
    senha: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
      nonNullable: true,
    }),
  });

  login() {
    const userLogin = this.registerForm.getRawValue();
    this._loginService
      .post(userLogin)
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe({
        next: (response) => {
          document.cookie = `token=${response.token}; path=/; secure; SameSite=Strict`;

          this._router.navigate(['/home']);
        },
        error: () => {
          this.isError.set(true);
        },
      });
  }
}
