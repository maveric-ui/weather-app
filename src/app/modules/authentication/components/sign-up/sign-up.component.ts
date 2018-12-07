import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public singUpForm: FormGroup;
  public hide: boolean;
  public typeOfInput: string;
  public prefixIcon: string;

  constructor() {
  }

  ngOnInit() {
    this.loginFormInit();
    this.hide = true;
    this.typeOfInput = 'password';
    this.prefixIcon = 'visibility_off';
  }

  loginFormInit() {
    this.singUpForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
      ]),
      confirmPassword: new FormControl(null, [
        Validators.required,
      ]),
    });
  }

  get email() {return this.singUpForm.get('email'); }
  get password() {return this.singUpForm.get('password'); }
  get confirmPassword() {return this.singUpForm.get('confirmPassword'); }

  handleVisibility() {
    if (this.hide) {
      this.typeOfInput = 'password';
      this.prefixIcon = 'visibility_off';
      this.hide = false;
    } else {
      this.typeOfInput = 'text';
      this.prefixIcon = 'visibility';
      this.hide = true;
    }
  }

  onSubmit() {
    const controls = this.singUpForm.controls;
    if (!this.singUpForm.valid) {
      for (const control in controls) {
        if (this.singUpForm.get(control)) {
          this.singUpForm.get(control).markAsTouched({onlySelf: true});
          this.singUpForm.get(control).markAsDirty({onlySelf: true});
        }
      }
      return;
    }

    console.log(this.singUpForm.value);
    this.singUpForm.reset();
  }

}
