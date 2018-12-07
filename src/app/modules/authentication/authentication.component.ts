import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  public isLogin: boolean;

  constructor() { }

  ngOnInit() {
    this.isLogin = true;
  }

  handleSignUp(nowSignUp: boolean) {
    this.isLogin = nowSignUp;
  }

  handleLogIn(nowLogin: boolean) {
    this.isLogin = nowLogin;
  }

}
