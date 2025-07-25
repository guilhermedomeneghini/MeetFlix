import { Component, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MessageSuccess } from '../../shared/components/message-success/message-success';
import { RegisterUser } from './service/register-user';
import { MessageError } from '../../shared/components/message-error/message-error';

@Component({
  selector: 'app-register-page',
  imports: [ReactiveFormsModule, MessageSuccess, MessageError],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage {
  isSuccess = signal(false);
  isError = signal(false);

  private _registerUserService = inject(RegisterUser);

  registerForm = new FormGroup({
    nome: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      nonNullable: true,
    }),
    senha: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
      nonNullable: true,
    }),
  });

  submit() {
    const registerUser = this.registerForm.getRawValue();
    this._registerUserService.post(registerUser).subscribe({
      next: () => {
        this.isSuccess.set(true);
        this.registerForm.reset();
      },
      error: () => {
        this.isError.set(true);
      },
    });
  }
}
