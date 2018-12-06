import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public hide: boolean;
  public typeOfInput: string;
  public prefixIcon: string;

  constructor() { }

  ngOnInit() {
    this.hide = true;
    this.typeOfInput = 'password';
    this.prefixIcon = 'visibility_off';
  }

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

}
