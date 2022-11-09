import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../users.service';

@Component({
  template: `
    <div class="container my-4">
      <form
        (ngSubmit)="addUser()"
        class="row g-3 needs-validation"
        [formGroup]="form"
      >
        <div class="">
          <input
            type="text"
            class="form-control"
            name="name"
            formControlName="name"
            placeholder="Name"
            required
          />
        </div>
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
        <div class="col-12">
          <button class="btn btn-primary" type="submit">Register</button>
        </div>
      </form>
    </div>
  `,
  styles: [],
})
export class RegistrationPage implements OnInit {
  form!: FormGroup;
  constructor(private userService: UsersService) {}

  id: number = 2;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
    });
  }

  addUser() {
    this.id++;
    let email = this.form.value.email;
    let id = this.id;
    let name = this.form.value.name;
    this.userService.addUser(email, id, name, 'user');
    this.form.reset();
  }
}
