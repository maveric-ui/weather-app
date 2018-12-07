import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class LoginComponent implements OnInit {

 @Output() nowSignUp = new EventEmitter<boolean>();

  public loginForm: FormGroup;
  public hide: boolean;
  public typeOfInput: string;
  public prefixIcon: string;

  constructor() { }

  ngOnInit() {
    this.loginFormInit();
    this.hide = true;
    this.typeOfInput = 'password';
    this.prefixIcon = 'visibility_off';
  }

  loginFormInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
      ]),
    });
  }

  get email() {return this.loginForm.get('email'); }
  get password() {return this.loginForm.get('password'); }

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

  onSignIn() {
    this.nowSignUp.emit(false);
  }

  onSubmit() {
    const controls = this.loginForm.controls;
    if (!this.loginForm.valid) {
      for (const control in controls) {
        if (this.loginForm.get(control)) {
          this.loginForm.get(control).markAsTouched({onlySelf: true});
          this.loginForm.get(control).markAsDirty({onlySelf: true});
        }
      }
      return;
    }

    console.log(this.loginForm.value);
    this.loginForm.reset();
  }

}
