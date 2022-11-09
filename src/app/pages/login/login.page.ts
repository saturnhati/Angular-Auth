import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  template: `
    <div class="container my-4">
      <form
        (ngSubmit)="login()"
        class="row g-3 needs-validation"
        [formGroup]="formLogin"
      >
        <div class="">
          <input
            type="email"
            class="form-control"
            name="email"
            formControlName="email"
            placeholder="Email"
            required
          />
        </div>
        <div class="">
          <input
            type="password"
            class="form-control"
            name="password"
            formControlName="password"
            placeholder="Password"
            required
          />
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit">Login</button>
        </div>
      </form>
    </div>
  `,
  styles: [],
})
export class LoginPage implements OnInit {
  formLogin!: FormGroup;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  login() {
    let email = this.formLogin.value.email;
    let password = this.formLogin.value.password;
    this.authService.login(email, password);
  }
}
